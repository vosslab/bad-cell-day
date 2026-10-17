# Early co-op recovery plan

## Goal

Reduce the cost of a near-bank missed ferry dismount in level 05 (position 7) and level 07 (position 8) with one small static catch fold per room. Keep STOP, STEADY, RESCUE, both ferries, and recurring villains relevant. This bounded milestone is ROOT ACCEPTED DONE_WITH_CONCERNS. The continuous gameplay goal remains ACTIVE.

## Scope and method

- Clone the current exported level definitions in an ignored evidence folder and add only candidate static rectangles to those clones.
- Use the existing 2D AABB platform model: world pixels, x right and y down, ordinary numeric simulation at the engine's fixed step. Do not change collision or physics.
- Reuse the retained ordinary routes and failure evidence in `tests/_temp/early_recovery_probe/PROBE.md` and the existing campaign attempt 04 artifacts.
- For each room, compare baseline and candidate ordinary-route completion, a baseline missed-dismount death and candidate catch/jump-back/full clear, role-duty omission, and a bounded shortcut attempt. Record exact commands, exit codes, traces, support overlap, jump margin, and limits in the ignored evidence folder.
- Initial hypotheses: level 05 `{x:450,y:470,width:50,height:14}` and level 07 `{x:950,y:480,width:50,height:14}`. One bounded geometry correction is allowed if actual engine traces show the candidate misses or has a sliver of useful overlap.
- Keep all existing geometry, moving platforms, pads, gates, hazards, collectibles, exits, ordering, and the other 31 rooms unchanged. Do not add a continuous lower route, bypass, checkpoint, respawn, state, option, or engine behavior.

## Handoff and verification

1. **COMPLETE - clone proof:** native evidence and bounded verdict are in `tests/_temp/early_recovery_native/REPORT.md`; accepted candidates are `{x:450,y:470,width:50,height:14}` in level 05 and `{x:950,y:480,width:50,height:14}` in level 07.
2. **COMPLETE - production and source proof:** `tests/_temp/early_recovery_implementation/REPORT.md` records exactly the two accepted static folds, preservation of all 33 definitions (the other 31 unchanged), and ordinary/recovery replays against exported production `LEVELS`; all four routes clear both exits.
3. **COMPLETE - build and focused browser:** root reports `./check_codebase.sh` passed 90 Node checks plus type, lint, and format; focused `source source_me.sh && python3 -m pytest tests/test_source_file_line_limit.py -q` passed 349 tests with the existing 925-line warning; `source source_me.sh && ./run_playwright_tests.sh --build` passed 2/2. Served build and `dist/` hashes matched. Four aligned recovery views and two default views exited 0; both full clears had zero deaths/errors. The separate level 07 frame-1490 capture proves supported landing; frame 1483 was airborne.
4. **COMPLETE - reviews and root acceptance:** SPEC and QUALITY PASS WITH LIMITS; integration PASS WITH LIMITS and no blocker; root verdict ROOT ACCEPTED DONE_WITH_CONCERNS. Receipts and limits are in the [acceptance report](../reports/early_recovery_acceptance.md). These scripted checks do not establish human discovery, fun, novice suitability, or paired-control comfort.

## Ledger

| Gate | State | Evidence |
| --- | --- | --- |
| Plan and scope | COMPLETE | Bounded clone-only scope and handoff recorded here. |
| level 05 native clone proof | COMPLETE | Baseline death frame 261; candidate catch frame 244; full clear frame 2123; see `tests/_temp/early_recovery_native/REPORT.md` and `paths.json`. |
| level 07 native clone proof | COMPLETE | Baseline death frame 1507; candidate catch frame 1483; full clear frame 2194; see `tests/_temp/early_recovery_native/REPORT.md` and `paths.json`. |
| Production implementation and source proof | COMPLETE | Two accepted folds only; definition preservation and four production replays recorded in `tests/_temp/early_recovery_implementation/`. |
| Build and focused browser gameplay | COMPLETE | Root-reported 90 Node/type/lint/format gate, 349 focused Python tests, 2/2 official browser smokes, hash parity, aligned/default captures, and supported level 07 frame 1490. |
| Fresh reviews and root acceptance | ROOT ACCEPTED DONE_WITH_CONCERNS | SPEC PASS WITH LIMITS, QUALITY PASS WITH LIMITS, integration PASS WITH LIMITS; no gameplay/architecture blocker. |
