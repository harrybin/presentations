# Feature brief: sessions by track

## Goal

Readers can get a count of sessions for each track without changing the source data.

## Acceptance criteria

- Add an exported `countSessionsByTrack(sessions)` function in `src/catalog.js`.
- Return a plain object whose keys are track names and values are counts.
- Return an empty object for an empty input.
- Do not mutate the supplied array or session objects.
- Add tests for multiple tracks, an empty list, and input immutability.
- Run `npm test` and report the changed files and test result.

## Out of scope

- UI changes
- Sorting or renaming track labels
- Adding third-party dependencies
