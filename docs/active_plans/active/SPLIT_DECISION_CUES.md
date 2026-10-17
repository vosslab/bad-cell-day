# Split Decision cues

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS.** Root accepted the bounded **Split Decision** (`level_11`)
cue milestone at 2026-10-17 11:03:30 UTC based on the read-only cue investigation in
`tests/_temp/split_decision_cues_scout/REPORT.md`.

## Goal

Help first-time players understand the stair cycle and reciprocal latch effects before using Hint,
while preserving the route, sequence, timing, and all mechanics. Keep the role order and path
discovery with players, retain Cana's joke, and leave the full Hint unchanged.

## Approved copy

- Subtitle: `Your latch opens your partner's lane and powers the stair.`
- Cana opening: `Stair runs 5s, pauses 3s. Still solid. Sadly.`

The cues explain input effects without prescribing pad order or movement. Edit only
`src/levels_middle.ts` at `level_11.subtitle` and `src/villain_scenes_middle.ts` at
`level_11.cana.opening`. Keep dialog, Hint, labels, geometry, physics, attacks, scene data, rendering,
shared types, configuration, controls, and assets unchanged. Do not claim a readability or difficulty
score improvement; human discovery remains unmeasured.

## Verification and acceptance

The temporary 42-definition comparison allows only the subtitle and Cana opening changes. The
ordinary-input 120 Hz `level_11` replay confirms both latch effects, stair power, and exits; focused
TypeScript, semantic/native, root codebase, official build, and two browser smoke checks passed.
Root reviewed the three original built-browser views. Detailed evidence, review dispositions, and
limits are recorded in `tests/_temp/split_decision_cues_implementation/REPORT.md` and the
[acceptance receipt](../reports/SPLIT_DECISION_CUES_ACCEPTANCE.md). No permanent copy or geometry
tests were added.

Root reports the focused semantic/native replay and `./check_codebase.sh` PASS93; the official
`source source_me.sh && ./run_playwright_tests.sh --build` build and two standard browser smokes
passed. The three original built-browser views were accepted. See the
[acceptance receipt](../reports/SPLIT_DECISION_CUES_ACCEPTANCE.md) for the reviewed evidence and
limits. The continuous gameplay goal remains ACTIVE.
