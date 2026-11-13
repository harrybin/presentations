import test from 'node:test'
import assert from 'node:assert/strict'
import { filterSessions, findSessionById, toggleFavorite } from '../src/catalog.js'
import { sessions } from '../src/sessions.js'

test('findSessionById returns the matching session', () => {
  assert.equal(findSessionById(sessions, 'react-201')?.title, 'Browser-Apps mit TypeScript')
})

test('findSessionById returns null when no session matches', () => {
  assert.equal(findSessionById(sessions, 'missing'), null)
})

test('filterSessions searches title, speaker, and track without case sensitivity', () => {
  assert.deepEqual(filterSessions(sessions, 'FRAMEWORKS'), [sessions[1]])
  assert.deepEqual(filterSessions(sessions, '  mara '), [sessions[0]])
})

test('filterSessions returns all sessions for an empty query', () => {
  assert.deepEqual(filterSessions(sessions, '  '), sessions)
})

test('toggleFavorite returns a new list when adding and removing an id', () => {
  const initial = ['sdd-101']
  const added = toggleFavorite(initial, 'react-201')
  const removed = toggleFavorite(added, 'sdd-101')

  assert.deepEqual(initial, ['sdd-101'])
  assert.deepEqual(added, ['sdd-101', 'react-201'])
  assert.deepEqual(removed, ['react-201'])
})
