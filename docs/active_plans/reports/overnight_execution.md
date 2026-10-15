# Overnight execution ledger

Status: COMPLETE; implementation, final browser evidence, and fresh documentation/integration
acceptance are complete. The accepted plan is archived at
[overnight_gameplay.md](../../archive/overnight_gameplay.md); passing source checks alone do not
establish browser acceptance or human enjoyment.

## Decisions and scope

| Topic | Result |
| --- | --- |
| Selected rooms | Stable `level_13`, `level_17`, and `level_19`; campaign positions 13, 18, and 19. |
| Safe introduction | Gem's Bubble Break replaces the repeated pulse crossing in 13 with Pac's BUBBLES hold, Isp's float/steer to RESCUE, and Pac's newly unlocked stairs above a continuous floor. |
| Transfer | In 17, Pac's OPEN invites the bubble, Isp floats from the stopped lift to RESCUE, and the latch powers the lift for Pac. |
| Dangerous application | In 19, Cana's sweeping boomerang adds a dodge decision; STEADY suppresses it temporarily and RESCUE permanently for the attempt. Paired TARGET remains the boss finish. |
| Shared contract | D2 accepted optional `enabledByPadId` and `disabledByPadIds`; any disabling pad wins. Suppression clears warning/projectiles and resets a full cooldown; applied effects finish naturally. |
| Preserved contracts | 20 stable IDs/order, save and intro behavior, molecular hero shapes, simple controls, and trial save isolation. |
| Deferred experiment | Automatic return catch ledge withdrawn before any distribution build; avoidable idle death is a design risk, not an engine defect. |
| Scenery | Two editable tumor organs behind gameplay; warnings, status, and reactions follow simulation. Reduced motion uses static presentation. |

The baseline recommended stable 13 and 18 as candidates; architecture selected 17 and 19 for
bounded interference integration, then the safe 13 introduction was added after review. Stable
18's existing separate-department route and the final room remain unchanged. Baseline candidate
analysis is historical evidence, not the final selection. Book-informed reasoning is in
[game_design_reading.md](game_design_reading.md). The user correction and rejected experiment
are recorded separately in [cana_return_recovery.md](cana_return_recovery.md).

## Evidence and reviews

| Gate | Result and boundary |
| --- | --- |
| Fresh baseline | PASS: all 20 sequential rooms, zero retries/errors; reload retained all 20 records and Replay entries. Baseline main hash begins `51993fdb`. See [overnight_baseline.md](overnight_baseline.md). |
| Core specification and quality | ACCEPT: pad precedence, cancellation, authored-reference validation, and stable behavior tests. Three new permanent tests bring the suite to 25. |
| Rooms 17/19 specification and quality | ACCEPT. Legal-input normal and recovery routes reviewed; earlier built evidence remains earlier-build evidence. See [encounter_routes.md](encounter_routes.md). |
| Room 13 specification and quality | ACCEPT: safe teaching route, meaningful partner roles, and required float/steer handoff. |
| Codebase checks | PASS: latest `./check_codebase.sh` rerun after the durable screenshot helper, all 25 unit tests plus type, lint, and format checks. |
| Production artifact | PASS: `./build_github_pages.sh`; required organ SVGs are copied to `dist/assets/`. |
| Permanent browser smoke | PASS: `source source_me.sh && npx playwright test --workers=1`; two controls/pause/retry and arrow-scroll tests, 2.4 seconds on the frozen final build. |
| Final campaign browser | PASS: fresh continuous ordinary-keyboard traversal of all 20 rooms, zero retries, page/console errors, or resource errors. All 20 Replay entries persist after reload. |
| Trial isolation | PASS: separate fresh save, intentional retry, pause/resume, both exits, replay and return to Levels; byte-identical empty campaign progress and second campaign room still locked. |
| Reduced-motion 13 | PASS: missed bubble, repeated attack, recovery and completion with ordinary controls and zero retries/errors; only the earned save is reused to unlock Replay. |
| Reduced-motion trial | PASS: fresh-save trial on frozen `980ad68b` with reduced-motion media asserted; pause/retry, FLOAT, completion, Replay, and return to Levels pass. Campaign save remains byte-identical; zero page/console/resource errors. |
| Final effects refresh | PASS: seven final-build runs cover 17/19 normal/recovery/reduced motion, pause/retry, held/latched suppression, warning/flight cancellation, and viewports. Normal/recovery routes have zero retries; intentional idle return-hit death has one. Countersteer and timed dodge survive with zero. All run errors/request failures are empty. |
| README screenshots | Complete: two inspected final-build 1632x1020 captures in [README.md](../../../README.md), with the screenshot owner preserving the managed block. |
| Final integration | ACCEPT: `final_game_integration` independently verified the frozen live JS/map/CSS, all 26 authored source files, the 13-file manifest, six SVGs, and retained browser evidence; `tests/_temp/` is empty. |
| Final documentation specification | ACCEPT: `final_docs_respec`; documentation reflects accepted behavior, evidence, artifact identity, and limits. |
| Final documentation quality | ACCEPT: `final_docs_quality`; links, report consistency, and bounded claims accepted. |

Final effects and viewport evidence is in
[overnight_encounter_browser.md](overnight_encounter_browser.md). Canvas text is very small at
390px; page fit does not establish comfortable narrow-screen play. Full final campaign, trial,
reduced-motion-13 methods and controller corrections are in
[overnight_final_browser.md](overnight_final_browser.md). Room 13's final browser input timeline
is about 22 seconds; the earlier 16-second source route is a different timeline. Completion time
is rehearsed feasibility evidence, not a first-attempt difficulty comparison.

## Final artifact identity

| Artifact | SHA-256 |
| --- | --- |
| `dist/main.js` | `980ad68be5a185ab0f3254bd135e2d92dc8d88732162c840bc52218839cd0eaa` |
| `dist/main.js.map` | `07fda0d6913a85ee653f1052f6aed07e4e0d37c2bb2fe847cab171fad5bc50ff` |
| `dist/style.css` | `e2f0248615d9cc6d388b80781ef575ef33e35f56e1acf8855e1c883ffeae131b` |

The earlier `4558eac0` implementation build and `51993fdb` baseline are separate snapshots.
A hash identifies an artifact; the associated browser report establishes what was exercised.
The final `./build_github_pages.sh` ran immediately before the direct smoke command above.
This deliberately separated build and smoke instead of using the wrapper's `--build` option,
so smoke and subsequent browser acceptance exercised the same frozen `980ad68b` artifact.

## Corrections and evidence retention

A baseline snapshot under `test-results/` initially triggered 239 generated-bundle lint errors.
Moving that isolated snapshot to `/private/tmp` resolved the problem without configuration edits.
Final route harnesses also needed endpoint corrections: room 13 Pac overshot an exit, and trial
Isp's target exceeded the world clamp. Ordinary keyboard endpoint corrections resolved both;
no product edit was needed for those harness failures.

A permanent Playwright invocation cleaned earlier `test-results/` artifacts, including baseline
screenshots and isolated organ size proofs. Their reports preserve performed-test history; those
old paths are not promised as retained files. The final campaign regenerated evidence under
`test-results/overnight_final/`. Durable integrated images are
[gem_bubble_relay.png](../../screenshots/gem_bubble_relay.png) and
[cana_boomerang_console.png](../../screenshots/cana_boomerang_console.png). These integrated
captures are not replacements for the old isolated 160-pixel asset proof.

At closeout, all 17 remaining plan-specific files in `tests/_temp/` were removed after their
source routes and browser probes completed. The reduced-trial owner separately removed
`reduced_trial_final.mjs` after retaining its executed harness with the trial evidence under
`test-results/overnight_final/`. Reported temporary commands are historical execution records,
not durable entry points. The 25 permanent tests protect stable behavior; room timing probes
were not promoted. Final `test-results/` evidence and
`devel/capture_gameplay_screenshots.mjs` remain available.

## Closeout and limits

Fresh documentation/integration reviews ACCEPT; the completed plan is archived.
Archive closeout verification passes: `source source_me.sh && python3 -m pytest
tests/test_markdown_links.py -q -k 'overnight_gameplay or overnight_execution or CHANGELOG'`
reports 3 passed and 75 deselected, including the untracked execution ledger. Both
`git diff --check` and `git diff --cached --check` pass; backlinks point to the archived plan.
Focused documentation checks pass: 27 README-opening and owned Markdown-link cases, with
57 other cases deselected. These checks do not rerun implementation or browser acceptance.
Refresh affected evidence after any production edit or rebuild. Closeout uses only the
repository-required `git mv` index operation to archive the plan; no other staging, commit, or
publication occurred. Four-book design work is focused reading, not whole-book study.
Human discovery, comparative difficulty, fairness,
visual comfort, and two-player enjoyment remain unmeasured; use the observation guidance in
[LEVEL_DIFFICULTY.md](../../LEVEL_DIFFICULTY.md).

Invite clarification, challenges, and escalation through the manager. Affected owners must
restate, apply, and verify accepted decisions; silence is not acceptance.
