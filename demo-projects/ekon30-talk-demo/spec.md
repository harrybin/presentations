---
type: story
title: "Sessions je Track zählen"
sources:
  - prd.md
companions:
  - SessionCatalog.pas
  - CatalogTests.lpr
---

# Offline Ticket-Spec · Sessions je Track zählen

> Vorbereiteter BMAD-Fallback; nicht live von Sofia oder `bmad-build` erzeugt.

## Description

Count conference sessions by track while preserving the original input.

## Requirements

- R1 (GOAL-1): Count exact, case-sensitive track names.
- R2 (GOAL-1): Order results by each track's first occurrence.
- R3 (GOAL-1): Treat an empty track name as a key; empty input returns no results.
- R4 (RULE-1): Leave the input list and its items unchanged.

## Constraints

- Use the existing Delphi-compatible `SessionData` types.
- Keep the change within `SessionCatalog.pas`; do not change tests or add dependencies.

## Done when

- `KI, Delphi, KI, ki, ''` yields `KI:2, Delphi:1, ki:1, '':1`.
- Empty input yields an empty result.
- Input and its fields remain unchanged.
- The existing Pascal checks pass.

## Boundaries

No GUI, database, API, localization, or parallel processing.
Do not add Unicode normalization beyond exact string comparison.

## References

- `prd.md`
- `SessionCatalog.pas`
- `CatalogTests.lpr`

## Notes

- Decision: `KI` and `ki` are different tracks.
- Decision: preserve first-occurrence order; accept the empty name as a track.
