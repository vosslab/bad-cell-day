## 2026-10-15

### Additions and New Features
- Added stable `level_24`, **I've Got You**, after `level_13` and before `level_14` in the liver.
  Pac rides floating Isp to CROSS, opening Isp's lower route; Isp's RECONNECT opens Pac's onward
  route. Safe floor and repeatable Gem rides preserve recovery after falls. All previous 23 room
  definitions and their relative order remain exact. Feasibility, placement, source implementation,
  and fresh SPEC are accepted; the frozen build and focused browser behavior pass. Fresh QUALITY,
  integration, and explicit manager acceptance close the milestone as DONE_WITH_CONCERNS; contact-art
  crowding and intermittent permanent-browser transport remain nonblocking concerns. Continuous game
  development remains ACTIVE. See
  [float_passenger_acceptance.md](active_plans/reports/float_passenger_acceptance.md).
- Completed and accepted the anatomical-world milestone: renamed the six presentation stages and assets,
  and established readonly organ palettes plus a pure tissue-surface API. The manager's accepted
  source and map hashes, preserved-mechanics checksum, and 67-check/build/Replay smoke evidence are
  recorded in [the acceptance report](active_plans/reports/anatomical_world_acceptance.md). M2
  organ art, foreground tissue, and copy are complete. Final rendered/browser, SPEC, QUALITY, and
  fresh integration reviews pass; archive custody and documentation are complete. Explicit manager
  integration acceptance marks this milestone DONE; continuous game development remains ACTIVE.
- Updated gameplay direction to prioritize recognizable organ architecture and readable
  state-linked foreground tissue. Existing difficulty scores remain historical pre-anatomy input;
  no novice clarity, enjoyment, or paired-play outcome is claimed.
- Added a reusable two-pass expert assessment workflow for all 23 campaign rooms, with immutable
  first-encounter records, source-informed comparisons, provenance requirements, separate puzzle
  and platforming axes, and a distinct human-play observation sheet. All 23 locked first passes and
  final records now validate; the 26 generated outputs and expert synthesis are available. Fresh
  synthesis specification and quality reviews plus whole-milestone integration ACCEPT. The
  assessment milestone is DONE while continuous game development remains ACTIVE. No novice play
  outcomes are claimed.
- Made Gem and Cana recurring active opponents from the first campaign room, extending authored
  attacks to the opening eight and 13 of 23 rooms overall. The frozen final artifact passes 57
  unit tests plus type/lint/format checks, a production build, two permanent browser tests, and a fresh 23-room campaign
  with zero retries, and targeted normal/reduced browser verification. Human enjoyment, discovery,
  and two-player coordination remain unmeasured; continuous game development remains active.
- Completed the six static tumor district backgrounds with focused normal/reduced visual and
  keyboard-route acceptance. Retained the 18-file final distribution snapshot, browser evidence,
  and temporary render-purity harness; no new 23-room traversal or human-play claim is made.
- Inserted stable room `level_23`, Cargo Exchange, after `level_10` and before `level_12`; all
  previous room IDs retain their relative order. The campaign now has 23 rooms and the finale is
  position 23. Its paired lifts use a shared rule: both heroes must ride, then the greater load
  descends while equal load holds. Parking the first crate opens the return-crate route.
- Recorded the counterweight numeric contact contract: operation/edge-scaled ULP overlap is treated
  as contact only at the new solver's initial-overlap boundary; meaningful penetration blocks.
  Ordinary collision and support predicates remain unchanged.
- Added distinct Isp support lean and Pac brace, actual-owner one-shot latch responses, and paired
  canonical heroes leading the completion heading. Runtime feedback stays outside simulation/saves.
- Added authored left-side boarding and actual underside-contact STEP LEFT guidance to the opening
  lift; preserves its geometry, jump challenge, physics, and timing.
- Expanded the campaign from 20 to 22 rooms by adding **Across the Divide** after `level_12`
  and **Crossed Paths** after `level_17`; the existing 20 stable room IDs retain their relative order.
- Reworked the final tumor-core encounter into a reciprocal route handoff with split bridge jumps,
  Gem's bubble and Cana's sweep, and a two-second paired-target finish using the existing core SVG
  and target lamps.
- Added three cooperative campaign interference encounters: safe Gem float teaching in stable
  room 13, the bubble/lift relay in 17, and Cana's sweeping boomerang with pad suppression in 19.
- Added two original editable tumor organ SVGs, build copying, simulation-derived warning/status
  cues, and static reduced-motion presentation.
- Added final gameplay screenshots and focused four-book design analysis in
  [game_design_reading.md](active_plans/reports/game_design_reading.md).

### Behavior or Interface Changes
- Kept browser save records keyed to stable room IDs so earned rooms remain replayable as the two
  new relays take their campaign positions before later unearned rooms.
- Pac-controlled BUBBLES/OPEN invites Gem's float; Isp's RESCUE opens the partner route and
  suppresses the attack. In room 17 the latch also powers Pac's lift.
- In room 19, STEADY temporarily suppresses Cana and RESCUE latches suppression; the original
  dangerous gaps and paired boss targets remain. Disabled attacks cancel shots and restart with
  a full cooldown and warning; effects already applied finish naturally.
- In the earlier 20-room pass, refreshed README navigation, setup prerequisites, player instructions,
  difficulty guidance, and the selected-room ledger without changing that pass's campaign order,
  saves, or hero silhouettes; the later stable-ID expansion above adds the two rooms.

### Fixes and Maintenance
- Archived the older anatomy bundle with a text suffix while preserving its bytes and custody.
  The unchanged canonical codebase gate now passes without weakening configuration or tests.
- Corrected anatomical acceptance records from frozen receipts: stable IDs 23/22 identify two
  recovery cases each, not 23/22 repetitions. The main lane has 18 completions; supplementary
  evidence has four recovery probes and two repeated finale completions. Preserved three identical
  builds, final two-worker 2/2 browser success, old-save compatibility, and historical difficulty
  artifacts. Final browser signoff and archive custody are DONE; fresh integration and explicit
  manager acceptance complete the anatomical milestone.
- Reconciled the expert difficulty synthesis with final source records: room 12 uses an ordinary
  one-hero-pushable crate to hold BRAKE, and room 22's final hazard 0 yields X46. Removed an
  incorrect human-authorship label and kept source predictions distinct from unwitnessed route
  feedback. Updated the active gate ledger and the independent calibration's finale primary hash
  without changing its frozen scores or artifact.
- Raised the opening-lift cue panel after browser/source review found Pac's badge obscuring
  JUMP FROM LEFT at RESTORE center. Corrected normal/reduced captures preserve clear instructions.
- Fixed room 21 living catch-shelf traps with local Isp-only left/right walls; both missed-jump
  returns are proven through ordinary keyboard input on the final build.
- Validated authored interference pad/actor references and added three stable behavior tests.
- Reconciled historical baseline and isolated-art paths after Playwright output cleanup; durable
  README captures remain separate from historical minimum-size asset proof.
- Archived the accepted completed gameplay plan at
  [overnight_gameplay.md](archive/overnight_gameplay.md) and synchronized its execution ledger.

### Removals and Deprecations
- Replaced room 13's repeated pulse crossing with the safe cooperative float introduction.

### Decisions and Failures
- Rejected Cana as a mandatory shove mechanic after the bounded feasibility probe found an action
  window of about 158 ms and a route that bypassed the shove. A timing-dependent mandatory action
  did not meet the cooperative role requirement. Borrowed Trouble was also prototyped then
  rejected: an ordinary-input route completed in 17.433 seconds without any Cana shot. Neither
  encounter is a production feature.
- Withdrew an automatic return catch-ledge experiment before a distribution build. An avoidable
  idle death is intentional challenge evidence, not by itself a product defect.
- Corrected final browser harness endpoints for room 13 and the trial with ordinary movement;
  neither controller issue required a product change.
- A baseline generated bundle inside test-results caused lint noise; moving the isolated snapshot
  outside the checkout resolved it. A later permanent browser runner cleared temporary old proofs.

### Developer Tests and Notes
- FLOAT source checks and all 69 Node tests pass, including 19 physics tests and two new generic
  partner-carry regressions. The ordinary 16 ms source route completes in 11.432 simulated seconds;
  this is scripted operability evidence. The fresh canonical check passes both TypeScript
  configurations, ESLint, Prettier, and 69/69 Node tests. Historical pre-anatomy 23-room difficulty
  records remain frozen;
  the current 24-room campaign has no new numerical assessment or human-play acceptance.
- The FLOAT candidate's 73 source/build inputs, 41 authored map entries, and 18 served files verify
  against the frozen build; all 13 SVGs remain unchanged. The permanent suite's final trace run
  passes 2/2 with its original two workers, after a launch denial and two earlier resource transport
  failures. Their logs remain retained; the intermittent fault and failed URLs remain unresolved.
- Focused FLOAT built-browser behavior passes 22 required cases with 17 ordinary-key completions,
  all zero-retry, and 17 screenshots. Normal/reduced recoveries, paused FLOAT, both gates resetting
  after Restart, stable saves, inserted-room frontier, and adjacent routes pass with zero accepted-lane
  errors. Invalid late-boarding harness waits remain preserved beside corrected ordinary-key recovery.
  This is not a fresh full-24-room campaign or human-play result.
- Preserved all 133 FLOAT evidence originals under `test-results/float_passenger/`, with 136 total
  files including custody metadata. Root ledger digest and exact-restore verification are recorded
  in [float_passenger_acceptance.md](active_plans/reports/float_passenger_acceptance.md).
  Final canonical checks pass 69 Node tests; full link, guidance, and ASCII checks pass 367 tests.
- Difficulty assessment validation passes all 23 records. Two report runs produce byte-identical
  26-file output from a 72-input hash manifest; the 920 x 760 SVG was browser inspected. The
  full codebase check passes 67 tests (57 game, 10 assessment), both TypeScript configurations,
  lint, and format. The accepted game's earlier 23-room traversal remains the gameplay baseline;
  this documentation pass did not run a new campaign traversal.
- The active-villains final artifact is `a77ac47f9ead7750ea01ca652d44b0c9b76a6abe2b0cb24e5b5df1e6030f23b5`
  (map `c31d54fe5d776f0443524f64d657e49af28e4e1a2df0d7b835207598e59faff0`). A fresh Play plus
  22 Next traversal completed all 23 rooms with zero retries, saved all 23 Replay entries, and
  reloaded the save byte-for-byte with 13 SVG assets decoded and zero browser/resource errors.
  Targeted browser evidence records 30 complete journeys, two pause journeys, 3,471 matched
  normal/reduced states, all 13 SVG assets decoded, and zero browser/resource errors. See
  [active_villains_direction.md](active_plans/reports/active_villains_direction.md),
  [active_villains_campaign.md](active_plans/reports/active_villains_campaign.md), and
  [active_villains_browser.md](active_plans/reports/active_villains_browser.md).
- The 23-room candidate `ab997ae` completed a fresh campaign with zero errors and retained 23 Replay
  entries, but failed source-freeze verification and exposed a pinned mandatory crate plus dialogue
  overlap. Treat those results as candidate history, not final acceptance. The corrected source-frozen
  candidate `a3a900f994066a3c62436c881b324330c480bd8ab997fe2d1b7574faf033fe40` passes 50 canonical
  checks, the production build, and 2/2 permanent browser tests in 2.4 seconds. The frozen final
  candidate also passes the fresh 23-room run: Play plus 22 Next actions, zero retries/errors,
  byte-identical reload, 23 Replay entries, all 36 mapped entries match, and six images decode.
  Focused built-browser acceptance passes 34 normal-motion, 18 reduced-motion, and five actual-floor
  reboarding samples. The outbound 2:1 load scene appears in [README.md](../README.md). See
  [counterweight_execution.md](active_plans/reports/counterweight_execution.md).
- The prior 38-test hero-response artifact and fresh 22-room browser run are historical evidence for
  the 22-room baseline, not verification of the current 23-room campaign.
- Hero-response canonical checks pass 38 unit tests plus type/lint/format, production build, and
  two permanent browser tests in 2.6 seconds. Targeted normal/reduced-motion browser checks pass
  hold/latch responses, lifecycle, narrow/short completion reachability, and delayed lift recovery.
  See [hero_response_execution.md](active_plans/reports/hero_response_execution.md) and
  [hero_response_browser.md](active_plans/reports/hero_response_browser.md).
  Final corrected-build fresh campaign regression completes all 22 rooms with zero retries/errors,
  byte-identical reload and 22 Replay entries; all 33 mapped sources match disk. See
  [hero_campaign_browser.md](active_plans/reports/hero_campaign_browser.md). Hero-response milestone
  is DONE and continuous development stays ACTIVE. Human interpretation and enjoyment remain
  unmeasured; no commit or deployment occurs.
- Final expansion gates pass: 33 unit tests plus type/lint/format, production build, and two
  permanent browser tests in 2.3 seconds. The frozen final build completes all 22 rooms from a
  fresh save with zero retries/errors and preserves 22 Replay entries after reload. Eight targeted
  normal/recovery runs pass, including both room 21 catch-wall regressions; each has one intentional
  opening retry and zero automatic deaths/errors. Specification, quality, art, and integration
  reviews ACCEPT. See [fresh_gameplay_execution.md](active_plans/reports/fresh_gameplay_execution.md).
- Preserved final-build relay and shutdown PNGs in README, completed the expansion ledger, and
  recorded lift boarding/waiting investigation as the next candidate at that checkpoint. The later
  hero-response pass implements presentation guidance while preserving timing. Continuous development
  remains active.
- Earlier 20-room milestone evidence follows; its artifact and gates are historical.
- Final codebase check passes 25 unit tests plus type, lint, and format checks; production build
  passes. Two permanent controls/pause/retry/arrow Playwright tests pass in 2.4 seconds.
- Fresh final-build browser traversal passes all 20 campaign rooms continuously with zero
  retries/errors and all 20 Replay entries retained after reload. Fresh trial save isolation and
  reduced-motion room 13 recovery pass. The fresh reduced-motion trial passes every gate and
  preserves byte-identical campaign progress. Seven final-build effect/recovery/suppression runs
  pass; the intentional idle return-hit death is retained. `final_game_integration`,
  `final_docs_respec`, and `final_docs_quality` ACCEPT; evidence and limits remain in
  [overnight_execution.md](active_plans/reports/overnight_execution.md). No publication occurred.
- Core and all three room specification/quality reviews accept. Book principles and legal-input
  routes inform design; human enjoyment, novice discovery, and fairness remain unmeasured.

## 2026-10-14

### Additions and New Features
- Added a proposed overnight gameplay manager brief with baseline traversal, evidence-led room
  selection, optional trial/art follow-ups, and a protected final verification reserve; execution
  remained pending at that checkpoint. See [overnight_gameplay.md](archive/overnight_gameplay.md).
- Added a concise difficulty evaluation guide with separate dimensions, an observation worksheet,
  and the current stable-ID campaign order.
- Added the Bad Cell Day implementation plan and status ledger.
- Added usage instructions for building, previewing, and running repository checks.
- Documented the implemented local keyboard controls, browser-saved progression,
  and current SolidJS runtime ownership.
- Recorded the character and tissue art direction.
- Added the recurring Gem/Cana implementation ledger with all-20 source-route
  evidence, outage-recovery journeys, accepted power contract, and outstanding
  browser and presentation-review gates.
- Added the optional Troublemaker Trial with scripted Gem/Cana interference and a
  separate campaign-free entry point.
- Recorded D1 for the optional Gem/Cana interference trial, including its authored
  geometry, campaign isolation, pause/retry semantics, and parallel implementation lanes.

### Behavior or Interface Changes
- Reordered the campaign to teach the safe walking handoff before the unchanged lift/jump room;
  moved onboarding titles with their new positions. Save format v1 and stable room IDs remain.
- Added Gem and Cana scenes to all 20 levels, with visible DNA and glucose puzzle
  cues, openings, reactions, ending portraits, quips, and a scrollable escape panel.
- Added platform power cycles and pad-based power restoration. Power outages freeze
  carrier motion while keeping carriers solid; power restoration remains independent
  of Motor Stop.

### Fixes and Maintenance
- Corrected stale controls and old level-order descriptions in the usage guide; documented the
  human-reported opening comparison and kept comparative evaluation separate from implementation
  acceptance.
- Closed difficulty progression after accepted specification, quality, and integration reviews;
  archived the completed plan and retained comparative human evaluation as a follow-up.
- Clarified that observed attempts begin again on automatic respawn, as well as on Play or Retry.
- Recorded that the full codebase check (17 tests, type, lint, and format), exact geometry
  comparison, and fresh browser acceptance for the opening, persistence, and selected final branch
  pass. Independent specification, quality, and integration reviews accepted; this documentation
  closeout did not rerun implementation checks.
- Updated closeout evidence for the three-segment 20-level browser run, with the
  power-outage levels and saved progression recorded explicitly. Updated recurring
  villain and Bad Cell Day ledgers for accepted reviews and final closeout.
- Recorded the accepted partial-progress reaction correction and level 10 dialogue
  spacing, verified in the final visual browser review. Prevented arrow-key game
  input from scrolling the page after canvas focus loss and added browser regression
  coverage.
- Added final visual browser evidence for the title, level 1 opening, level 10
  dialogue, and level 14 partial-progress reaction. All four character SVGs decoded;
  no page or console errors occurred.
- Verified the arrow-key scroll fix with two Playwright tests; TypeScript, lint, and
  formatting checks pass on the rebuilt application. Fresh specification, quality,
  and integration reviews accepted the result. The final `dist/main.js` SHA-256 is
  `e38f574ada973da4192258cbc47cfcc49551d4b5de65e09f1ac07db21289a27d`.
- Marked the six removed ignored route runners as historical evidence; their
  retained reports are the record of those runs.
- Recorded the accepted molecule-first character assets and final rendered visual
  inspection, plus the level 5-to-6 browser transition and reload evidence.
- Recorded the expanded requirement for Gem and Cana in every level; the full
  extension plan, implementation, and final project acceptance remain pending.
- Revised character art direction to build Isp and Pac from their molecular shapes
  first, then add color and cartoon features; the resulting assets now pass review.
- Recorded the integration review's acceptance of the current gameplay composition
  with its evidence limits; expanded campaign work and final acceptance remain open.
- Refined Isp and Pac with simplified namesake molecular structures and the requested
  tall/narrow and wide proportions; recorded the evidence and remaining integration gate.
- Updated art and title screenshots after rebuilding, and recorded final visual inspection
  evidence. Removed six ignored temporary route scripts while preserving route reports.
- Recorded the final 13-test codebase check, production build, and one-pass browser smoke
  after the asset/title rebuild; integration acceptance remains pending.
- Recorded Bad Cell Day guidance and the shared cooperative switch contract.
- Updated recurring-villain plan status and documentation for the accepted power
  precedence, molecule-first Gem/Cana assets and core ring shapes, requested character sizes, level 1
  cooperative sequence, and the distinction between source routes and browser proof.
- Reconciled the plan and ledger with accepted A0, B1/B2 evidence, completed
  B3/B4 implementation, SolidJS boundaries, and the six-stage theme map.
- Updated the plan and ledger for completed campaign implementation and pending
  full browser acceptance and campaign quality review.
- Updated campaign browser status, quality-review evidence, and remaining acceptance gates.
- Recorded settled character prominence and rendering ownership in the decision log and
  updated the prominence ledger with completed investigation, planning, renderer, and layout
  passes; later browser and review evidence is recorded in the closeout update below.
- Updated character prominence closeout evidence: final codebase check and build passed, serial
  browser review passed across four viewports and all 20 openings/40 quips, and specification and
  quality reviews accepted. Integration confirmed all four distribution hashes and four embedded
  source-map modules match the visual report; all reviews accepted and the plan was archived.
- Recorded the user's guidance to periodically reassess the whole game and weigh queued suggestions
  for overlap and value before implementing them.
- Added a concise repository description to the README.
- Ignored local build and Playwright output directories in the local ignore section.

### Removals and Deprecations
- None.

### Decisions and Failures
- Recorded the accepted campaign specification, compact bomb rendering correction,
  and the outstanding visual review and final acceptance.
- Recorded D1: held occupancy plates, latched rescue switches, simultaneous
  dual-character boss activation, string entity IDs, and pixel/second units.
- Recorded D4: Solid owns presentation state, `runtime.ts` owns canvas/input/loop
  resources, and `App` initializes and disposes the runtime; Chromium browser
  checks ran outside the sandbox after sandbox execution failed at `MachPortRendezvous`.
- Recorded the settled power rule: baseline power requires `!requiresPower && cycleOpen`,
  active power pads override required-power denial and cycle outages, and Motor Stop
  remains independent.
- Recorded D1: render Isp and Pac at 1.6x reference art height (about 55 to 88 world units; Pac's
  wide SVG has a shorter visible height) and villains
  at 1.6x, while preserving the complete game world and 30x36 physics bodies. The compact
  active-play desktop shell recovers height spent on cards. Recorded D2: rendering owns
  `VILLAIN_ART_SCALE` and `draw_player_overlay`, lower characters draw first, and the final
  feet-level contact cue and labels remain aligned with adjusted speech bubbles/connections.
- Recorded D3: horizontal art centering clamps while
  physical feet and cues stay fixed; identity labels separate at both edges; bounded bubble
  placement avoids both actors and earlier bubbles, omitting a bubble only when no candidate fits.

### Developer Tests and Notes
- Documentation update only. The implementation evidence recorded here was
  supplied by the manager; this task did not rerun implementation checks.
- After the shared trial contract landed and before trial behavior was implemented,
  the manager reported 17 passing checks, a successful production build, and two
  passing Playwright smoke tests. These are baseline checks, not trial acceptance.
- Focused trial and physics coverage then passed 18/18 checks (five new behavior
  groups plus 13 physics checks); TypeScript and scoped ESLint passed. A source-only
  keyboard route completed; the later built-browser evidence is recorded below.
- After the title correction, the final `./check_codebase.sh` passed all 22
  tests/type/lint/format checks and `./build_github_pages.sh` succeeded.
- Before the title-only correction, the existing Playwright regression passed 2 tests in 2.3 seconds
  for movement/pause/retry and arrow capture.
- Fresh and seeded built-browser trials passed completion, replay, byte-identical save
  isolation, menu, pause/resume/restart, and first-campaign-entry checks. All four effects,
  windup/return, completion, restart, and title layouts were visually inspected. Successful
  runs had no page/console errors; the 20-room campaign was not fully replayed. See
  [interference_browser.md](active_plans/reports/interference_browser.md) for hashes and proof limits.
- The first built trial view clipped the title button and hid the play note. The app/style
  correction added a wrapping action row; the final 1280x800, 1000x450, and 390x844 views pass.
- Fresh specification, quality, and integration reviews accepted. Final artifact hashes,
  embedded owned sources, static CSS, and campaign/save baseline hashes match. Archived
  [villain_interference.md](archive/villain_interference.md) after implementation closeout.
  Singleton admission and reduced-motion rendering have source-inspection evidence only;
  no runtime allowlist test, reduced-motion browser acceptance, human enjoyment, or new
  full-campaign traversal is claimed.
- Recurring-villain source routes cover levels 1-20, including deliberate power
  outage and recovery journeys in levels 11, 12, 14, 16, 19, and 20. Thirteen
  physics tests and three save/persistence checks pass in the 16-check run. The
  fresh production build passes. Fresh browser coverage passes levels 1-5 with zero
  retries or page/console errors, including saved unlock through the level 5-to-6
  transition and reload; middle/final browser coverage remains underway. Power
  specification and quality reviews accepted the
  engine contract. Presentation/catalog review has one partial-progress quip correction
  in progress and has reported no other blocker so far. This documentation update
  did not rerun implementation checks or browser tests.
- For character prominence, the final `./check_codebase.sh` passed type, lint, format, and 16
  tests; the production build completed. Final serial Playwright review passed 2 tests in 2.8
  seconds. Final visual acceptance covered four viewports, all 20 openings, all 40 opening quips,
  and representative narrow, crowded, and boss views. A prior parallel browser attempt hit
  `ERR_CONNECTION_RESET`; a temporary fixture's intermediate `no-undef` finding was removed with
  its harness, and the final check passed. Specification and quality reviews accepted. Integration
  review accepted after confirming the final distribution hashes and embedded source-map modules
  match the visual report. Final acceptance is complete, and the plan is archived.
