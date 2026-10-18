# Passing Thoughts production plan

**Status:** Root accepted this bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 10:28:36 UTC
after fresh final integration accepted with concerns and no material finding. Source, build, smoke,
public-route, SPEC, six-audit, and prepared 52-room journey evidence are complete. The broad gameplay
goal remains active. See the [acceptance cleanup report](../../../tests/_temp/passing_thoughts_acceptance_cleanup/REPORT.md)
for the bounded helper retirement record.

## Current registration checkpoint (2026-10-18)

Root approved **Passing Thoughts** as stable ID `level_52`, at brain position 5 / campaign position
41, after **Crossed Paths** (`level_22`) and before **Attention, Please!** (`level_27`). The source
roster has 52 rooms: lungs 1-5, intestine 6-14, marrow 15-23, liver 24-36, brain 37-51, and tumor
52. The other 51 room definitions and their relative order are preserved; stable IDs, rather than
campaign positions, own room identity and saved achievements.

The production definition remains data-only. Compared with the frozen D8 candidate, only its stable
ID and approved ASCII subtitle change. The subtitle is exactly `Pac: catch Isp's moving fold, then
borrow his head!`. The Hint remains unchanged. Geometry remains the D8 geometry: Isp's bank spans
x=660-940 at y=450; the recovery fold is `(940,530,50,18)`; and the powered lift is
`(1000,500,90,18)`. No engine, state, configuration, or art changes are part of this room.

Production source/build/browser gates passed: `./check_codebase.sh` (96 existing checks),
`./build_github_pages.sh`, and `./run_playwright_tests.sh` (two standard smokes) all exited 0. The
dedicated public capture helper exited 0; root reviewed its five original PNGs, and its receipt
records zero retries or errors with both clean and recovery phases complete. Public SPEC accepts
with concerns. All six independent audits are complete; the sole low finding was this plan's
uppercase filename, now corrected. Actual 52-room campaign evidence also completed successfully.
Fresh final integration accepted with concerns and no material finding, and root accepted this
bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 10:28:36 UTC. The journey receipt records all
52 rooms completed in one attempt, zero retries/errors, and save/reload checks at positions 10, 20,
30, 40, 50, and 52; the final capture shows 52/52 sites cleared. These prepared input schedules do
not establish first-time human playability, discovery, enjoyment, or difficulty. The frozen
difficulty assessment covers 46 rooms and does not score this room. See the
[evidence reconciliation](../../../tests/_temp/passing_thoughts_evidence_reconcile/REPORT.md).

The accepted D8 ledger and exact evidence limits follow as historical private-prototype records.
See the [D8 closeout report](../../../tests/_temp/passing_thoughts_d8_quality/REPORT.md) and the
[controlled browser receipt](../../../tests/_temp/passing_thoughts_d8/attempt_15/capture_receipt.json).

## Historical private prototype

At that checkpoint the candidate was private and had no production registration. The private
geometry and native feasibility notes below describe prototype work, not production acceptance.

The candidate remains a data-only `LevelDefinition` and `VillainScene`. Root's D1 is applied: shuttle lanes are 60px apart vertically (42px deck gap; Pac's 36px body has 6px clearance at the crossing). Pac's recorded route side-boards Isp's shuttle, then separately uses Isp's head to reach the upper path. The shuttles remain actual moving platforms in the completed same-run route.

The tuned Isp bank is `rect(620,450,320,18)`. It overlaps the upper shuttle's rightmost region, allowing Isp to walk across at the same height and avoiding the earlier upper-path-underhang jump. Pac's exit is `rect(630,280,80,60)`, giving him a safe near-side return after latching power while Isp uses the lift. These are private geometry choices that improve the route, not registration proposals.

Native 60Hz input replay now completes after a deliberate missed first boarding and ordinary-input fold recovery in the same run. It records Pac boarding the returning lower shuttle, crossing to Isp's shuttle, standing on Isp's head, reaching the upper path, pushing Cana and latching the lift, then returning to his exit. Isp walks from the upper shuttle to the bank, boards Pac-powered lift on its descending cycle, rides to the high bank, and exits. Traces also show Gem traveling with the upper shuttle before Isp pushes Gem off its path; Gem releases recurrent bubbles, Cana's returning boomerang shoves Pac, and Gem's bubble can float Isp. Full fixture, input schedule, and a representative failed bank/wait trace are retained as JSON beside the runner.

At this earlier checkpoint, root's concern about the upper-path underside came from source geometry inspection, and browser review, ID assignment, and campaign placement had not yet happened. Native feasibility was not browser or human-play acceptance. No engine changes were made.

## D8 private browser checkpoint (2026-10-18)

D8 is frozen for private review only. It keeps the approved upper/lower folds at y=450/510 and the upper path, spawns, villains, attacks, latch, exits, and bank `(660,450,280,18)`. The final recovery fold is `(940,530,50,18)` and the Pac-powered lift is `(1000,500,90,18)` with the existing 200px upward travel and 6-second period. The fold ends at x=990, leaving 10px before the lift starts at x=1000; an Isp standing across x=950-980 has a 20px gap to the lift. At the D8 checkpoint, no public registration or engine/config/mechanics changes had been made.

Controlled browser evidence is in `tests/_temp/passing_thoughts_d8/attempt_15/`. The historical final command was `node tests/_temp/passing_thoughts_d8/capture.mjs`; this completed one-off runner is now retired. It launched each route from ordinary Play in a fresh browser context, served only the frozen private `/main.js`, and used Playwright's paused clock at `2026-01-01T00:00:10Z`. Both `clean_first_approach` and `floor_fold_lift_retry` ended at `phase=complete`, with zero deaths, console errors, page errors, or failed requests. The clean route records `clean_transfer`, `clean_headstep`, and `clean_clear`; the retry records `recovery_fold`, `recovery_lift`, and `recovery_clear`. The latter route deliberately lets Isp fall after Pac latches power, land on the D8 recovery fold, wait for the lift to return near the fold, jump onto it, ride up, and exit. These are two single-room feasibility demonstrations, not evidence of campaign completion or unaided player comprehension.

The capture harness was corrected after initial attempts: navigation now pauses at a fixed clock before Play, and frame intervals are no longer constrained to even values. Initial captures without the paused clock could drift between input calls; their successes and failures remain preserved but are not treated as controlled schedule proof. The final controlled receipt and per-route JSON are authoritative. Original representative PNGs are `clean_transfer`, `clean_headstep`, and `clean_clear` for the clean route, plus `recovery_fold`, `recovery_lift`, and `recovery_clear` for the retry, all in `attempt_15/`.

Frozen bytes: `candidate.ts` SHA-256 `9b42ceb5b26ea67529c95ef721316744aff99e3257c0b264fcf2f446ca1ffc06`; `private_bundle.js` SHA-256 `b87831e0e5479a31ce707758658db0e4857bbbadd29d9f780756c752182b1c7b`; `fixture.json` SHA-256 `b69997c9ba5fda63523e5b134df59a7d73b371e10d98bbfd78dd94858b630034`. `src` tree hash before/after capture remained `22e3caed25fd502e6ae5d67bb79eb4a3deb3d3acf649310e1406a4b39fe941ed`; `dist` tree hash remained `04c50ac3cde3539bf2fb273d29f0f8e360f284b3ed6dc27385c583c1891d0bc9`. The native-based schedule was adjusted only in ordinary inputs to align the powered lift phase observed in the browser; no seeds, teleports, debug controls, or game-state writes were used.

Fresh source-blind observations found limited unaided readability. The private feasibility milestone was **DONE_WITH_CONCERNS** pending independent SPEC and QUALITY decisions at that checkpoint. Root then approved the exact subtitle `Pac: catch Isp's moving fold, then borrow his head!` for the production candidate. That wording is not present in or tested against the frozen D8 bundle and must not be reported as a demonstrated improvement. The original D8 artifact remains frozen for review.
