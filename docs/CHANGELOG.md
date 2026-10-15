## 2026-10-14

### Additions and New Features
- Added a proposed overnight gameplay manager brief with baseline traversal, evidence-led room
  selection, optional trial/art follow-ups, and a protected final verification reserve; execution
  remains pending. See [overnight_gameplay.md](active_plans/active/overnight_gameplay.md).
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
