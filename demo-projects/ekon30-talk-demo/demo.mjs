import { access, cp, mkdir, rm } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const root = fileURLToPath(new URL('.', import.meta.url))
const run = join(root, '.run')
const [action, target] = process.argv.slice(2)

function execute(command, args, cwd = root) {
  const result = spawnSync(command, args, { cwd, stdio: 'inherit' })
  if (result.error) {
    console.error(`${command} konnte nicht gestartet werden: ${result.error.message}`)
    process.exit(1)
  }
  return result.status ?? 1
}

if (action === 'prepare') {
  let exists = false
  try { await access(run); exists = true } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  if (exists && target !== '--reset') {
    console.error('.run existiert bereits. Änderungen sichern; nur mit prepare --reset ausdrücklich neu erstellen.')
    process.exit(1)
  }
  if (exists) await rm(run, { recursive: true, force: true })
  for (const name of ['baseline', 'solution']) {
    const destination = join(run, name)
    await mkdir(destination, { recursive: true })
    await cp(join(root, 'fixtures', 'common'), destination, { recursive: true })
    await cp(join(root, 'fixtures', name, 'SessionCatalog.pas'), join(destination, 'SessionCatalog.pas'))
    for (const file of ['prd.md', 'spec.md', 'plan.md']) await cp(join(root, file), join(destination, file))
    await cp(join(root, 'context'), join(destination, 'context'), { recursive: true })
  }
  await cp(join(root, 'demotime'), join(run, 'baseline', '.demo'), { recursive: true })
  const isolated = execute('git', ['init', '--quiet', join(run, 'baseline')])
  if (isolated !== 0) process.exit(isolated)
  console.log('Demo vorbereitet. .run/baseline als eigenen VS-Code-Ordner öffnen.')
} else if (action === 'reset-baseline') {
  const baseline = join(run, 'baseline')
  await access(baseline)
  await cp(join(root, 'fixtures', 'baseline', 'SessionCatalog.pas'), join(baseline, 'SessionCatalog.pas'))
  console.log('Baseline SessionCatalog.pas wiederhergestellt; andere .run-Dateien bleiben unverändert.')
} else if (action === 'prepare-bmad-ticket') {
  const baseline = join(run, 'baseline')
  const ticket = join(baseline, '_bmad-output', 'backlog', 'ticket-sessions-je-track.md')
  const ticketRelative = '_bmad-output/backlog/ticket-sessions-je-track.md'
  await access(baseline)

  let ticketExists = false
  try { await access(ticket); ticketExists = true } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
  if (!ticketExists) {
    await mkdir(join(baseline, '_bmad-output', 'backlog'), { recursive: true })
    await cp(join(root, 'spec.md'), ticket)
    console.log('Offline-Ticket-Spec nach _bmad-output/backlog kopiert.')
  }

  const status = spawnSync('git', ['status', '--porcelain', '--untracked-files=all'], { cwd: baseline, encoding: 'utf8' })
  if (status.error) {
    console.error(`git status konnte nicht gestartet werden: ${status.error.message}`)
    process.exit(1)
  }
  if (status.status !== 0) process.exit(status.status ?? 1)

  const changes = status.stdout.trim().split(/\r?\n/).filter(Boolean)
  const unexpected = changes.filter((line) => line.slice(3).replaceAll('\\', '/').toLowerCase() !== ticketRelative)
  if (unexpected.length) {
    console.error('Unerwartete Änderungen im BMAD-Workspace. Nur das Ticket darf vor dem Build uncommitted sein.')
    process.exit(1)
  }
  if (changes.length) {
    const staged = execute('git', ['add', '--', ticketRelative], baseline)
    if (staged !== 0) process.exit(staged)
    const committed = execute('git', [
      '-c', 'user.name=Demo Presenter',
      '-c', 'user.email=demo@example.invalid',
      'commit', '--only', '-m', 'docs: add BMad demo ticket', '--', ticketRelative,
    ], baseline)
    if (committed !== 0) process.exit(committed)
  } else {
    console.log('BMAD-Ticket ist bereits committed.')
  }
} else if (action === 'test' && ['baseline', 'solution'].includes(target)) {
  const working = join(run, target)
  const output = join(working, 'build')
  await mkdir(output, { recursive: true })
  const compiled = execute('fpc', ['-B', '-Mdelphi', '-Sh', '-Cr', '-Co', `-Fu${working}`,
    `-FU${output}`, `-FE${output}`, join(working, 'CatalogTests.lpr')])
  if (compiled !== 0) process.exit(compiled)
  process.exit(execute(join(output, `CatalogTests${process.platform === 'win32' ? '.exe' : ''}`), []))
} else if (action === 'diff') {
  const status = execute('git', ['diff', '--no-index', '--', join(run, 'baseline', 'SessionCatalog.pas'),
    join(run, 'solution', 'SessionCatalog.pas')])
  if (status > 1) process.exit(status)
} else {
  console.error('Verwendung: node demo.mjs prepare [--reset] | reset-baseline | prepare-bmad-ticket | test baseline | test solution | diff')
  process.exit(1)
}
