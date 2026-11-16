import { access, cp, mkdir, rm } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'

const root = fileURLToPath(new URL('.', import.meta.url))
const run = join(root, '.run')
const [action, target] = process.argv.slice(2)

function execute(command, args) {
  const result = spawnSync(command, args, { cwd: root, stdio: 'inherit' })
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
  console.error('Verwendung: node demo.mjs prepare [--reset] | reset-baseline | test baseline | test solution | diff')
  process.exit(1)
}
