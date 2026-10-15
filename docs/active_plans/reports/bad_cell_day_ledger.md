# Bad Cell Day ledger

Plan: [../../archive/bad_cell_day_plan.md](../../archive/bad_cell_day_plan.md). The manager owns task routing,
decisions, dependency release, and final acceptance. This ledger records actual
status and evidence; pending work is not represented as complete.

| Task | Owner | Status | Dependencies | Questions and decisions | Reviews | Checks and evidence | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A0 | Sol; shared contracts specialist | complete | None | D1 answered by manager; mutable `GameState` contract confirmed | Contract spec reviewer: initial sole finding was the unsupported event-bus promise; corrected specification recheck accepted after removing the invented events requirement | Source types define `create_game_state(level)` and `step_game(state, input, dt): void`; `tsc` and Prettier exit 0; `npm install` succeeded with 0 vulnerabilities; manager confirmed `esbuild --version` 0.28.2 | B1 proceeds against the shared state contract |
| B1 | Implementation owner assigned by manager | complete | A0 | None recorded | Pending | `./check_codebase.sh` and `./build_github_pages.sh` passed; Playwright browser smoke passed. Chromium could not run in the sandbox because of `MachPortRendezvous`, so browser evidence was collected outside it | B3 proceeds alongside B2 integration |
| B2 | Bounded UI/rendering and persistence owner(s) | complete | A0; coordinate integration with B1 | None recorded | Quality review found Motion writable; corrected it to readonly; fresh rereview accepted | Three save tests passed. Historical title/game screenshots were inspected; the browser runner cleans temporary screenshot output. Check/build and one-test Playwright smoke passed; Chromium ran outside the sandbox after `MachPortRendezvous` failure | Complete B3; screenshot inspection is not runtime acceptance |
| B3 | Sol for physics; level authoring owner assigned by manager | implemented | A0 | D1 applied | Physics and runtime specification/quality reviews accepted | Codebase check passed with 13 Node tests; build passed; browser move/pause/retry smoke passed; all five tutorials completed in the browser with zero deaths and saved unlocks | Integration reviewer verdict remains |
| B4 | Campaign/runtime implementation owner(s) | complete | B1, B2, B3 | D1 applied to authored bosses | Campaign and recurring-villain reviews accepted; final visual review passes; fresh specification, quality, and integration reviews accepted | Three-segment browser playthrough completed with zero retries/errors; outages verified in 11, 12, 14, 16, 19, 20; all 20 records persist after reload; 16 focused checks, full check/build, one-test smoke, and two arrow-key regression tests pass | Complete with the three-segment evidence limit recorded |
| Physics and runtime reviews | Fresh specification and quality reviewers | complete | B3 implementation | None outstanding | Both specification and quality reviews accepted | Reports accepted after the readonly Motion correction | No action |
| Campaign specification review | Fresh specification reviewer | complete | B4 implementation | Corrected stage 16 factory / stage 19 citadel assignment | Accepted after correction | Stage map correction applied | No action |
| Campaign quality review | Fresh quality reviewer | accepted | Campaign specification acceptance | Compact renderer corrected at 28x28 | Data and final visual inspection accepted | Compact hazard and updated game scenes were inspected in [final_visual_review.md](final_visual_review.md) | No action |
| Character art and molecular refinement | SVG creator and reviewers | accepted | User's molecule-first direction | Start each SVG with the namesake molecule as body and limbs, then add color and cartoon features; Isp tall/skinny, Pac fat/wide | Specification and quality reviews accepted the ring-mass and bond-limb silhouettes with faces; final built-game visual inspection passes | Canonical assets are `src/assets/isp.svg` and `src/assets/pac.svg`; source/built hashes match; see [character_art.md](character_art.md) and [final_visual_review.md](final_visual_review.md) | Complete |
| Tissue visual quality | Art and rendering owners | accepted | Red/pink anatomical tumor direction | Preserve gameplay readability | Source and rendered quality accepted | Final visual review inspected representative scenes and found gameplay objects legible against tumor backgrounds | No action |
| Title layout correction | UI owner | complete | Final visual review | Keep Play and player-count note inside the stage at compact desktop size | Recaptured and inspected at 1280x800 and 1440x900; bounds assertions passed | [final_visual_review.md](final_visual_review.md) | No action |
| Integration review | Fresh independent reviewer | accepted | Specification, quality, and gameplay evidence | The 20-level browser run remains segmented, not one fresh-storage run | Fresh specification, quality, and integration reviews accepted | Level 5-to-6 transition and reload pass; final visual report covers current villain art/render; arrow-key scroll fix has two passing browser tests | Complete; retain the three-segment browser evidence limit |
| Recurring Gem/Cana campaign extension | Implementation and review owners | implemented | User's expanded all-level villain requirement | Include Gem and Cana in each level from 1 to 20, with opening/puzzle/ending beats; level 1 starts with Isp's wall switch then Pac restoring a powered platform | Campaign and presentation/catalog spec and quality reviews accepted; partial-progress correction passed fresh recheck | Three-segment browser run covers all levels; final visual report confirms level 10 spacing and level 14 partial-progress reaction | No implementation work remains; overall closeout follows fresh spec, quality, and integration reviews |

## Decisions and propagation

### D1: Occupancy, rescue, and boss switches

- **Type:** decision
- **Question:** How do plates, rescue switches, and boss targets cooperate?
- **Answer:** Plates stay active while occupied. Clearly marked rescue switches
  latch and enable the partner to follow. Boss targets require both characters
  to activate them together before latching. Use string entity IDs and explicit
  pixel/second conventions. No brand names are needed.
- **Rationale:** This gives co-op puzzles a consistent hold-versus-latch rule and
  makes simultaneous boss cooperation explicit.
- **Affected tasks:** A0, B1, B2, B3, B4, and all three review gates.
- **Acceptance change:** None; this specifies existing cooperative requirements.
- **Next-action owner:** A0 owner confirms the shared contract; each affected
  implementer restates and verifies its application before completion.
- **Status:** answered and applied across implementation; integration review accepted gameplay composition.

| Task | Updated brief and constraint | Restated interpretation | Application and verification evidence | Pending next-action owner |
| --- | --- | --- | --- | --- |
| A0 | Plan D1; encode IDs and units and define held plates, latched rescue, simultaneous boss targets in the shared mutable state model | Restated | Source types reflect D1; boss invariant is documented, with data/behavior checks to follow | B1 owner: apply during implementation |
| B1 | Plan D1; shared model and input shell follows the A0 contract | Restated | Applied in B1 implementation; batch check/build/browser smoke passed | Manager: include D1 in integration acceptance |
| B2 | Plan D1; render and persist authoritative shared state | Restated | Applied to rendering and persistence; save tests and browser smoke passed | Manager: include D1 in integration acceptance |
| B3 | Plan D1; physics/tutorial behavior preserves switch semantics | Restated | Implemented in simulation and tutorials; browser tutorial run completed | Manager: include D1 in campaign acceptance |
| B4 | Plan D1; campaign bosses use simultaneous dual activation | Restated | All three dual-switch encounters are authored; simulation routes complete | Manager: include D1 in full browser acceptance |
| Reviews | Plan D1; assess actual switch behavior against this contract | Restated | Physics/runtime, campaign, presentation, quality, and integration reviews accepted with the recorded evidence limits | Complete |

## D2: Shared simulation boundary

- **Decision:** The shared API is deterministic mutable `GameState` created by
  `create_game_state(level)` and advanced by `step_game(state, input, dt): void`.
- **Runtime behavior:** Presentation observes state transitions. An event bus is
  not part of the contract.
- **Rationale:** The documented boss invariant and later data/behavior checks
  cover the requirement without elaborate typing.
- **Review correction:** The contract spec reviewer identified the plan's
  unsupported event-bus promise as its sole finding; the plan now states the
  agreed API and removes that promise.

## Gate evidence

B1 and B2 gates passed. The final updated `./check_codebase.sh` passed with
13 Node tests, the production build passed, and a one-test browser smoke passed
after rebuilding the molecule-first art and title layout. Final visual inspection
recaptured the built game and accepted the art and title; source and built SVG
hashes match. The level 5 to level 6 transition now has rendered browser evidence;
see [tutorial_campaign_transition.md](tutorial_campaign_transition.md).
All 20 levels have death-free input-only simulation routes. Browser coverage
completed in three segments: fresh-storage tutorials 1-5 and seeded unlock
continuations 6-12 and 13-20. Each completed with zero retries and no browser
errors; saved progress contains all 20 records and persisted after reload. Reports:
[browser_tutorial_playthrough.md](browser_tutorial_playthrough.md),
[browser_middle_playthrough.md](browser_middle_playthrough.md), and
[browser_final_playthrough.md](browser_final_playthrough.md). This is complete
campaign browser coverage, not a single fresh-storage run. The tutorial browser
run used a historical five-level build; the 05-to-06 transition now has a separate
rendered browser report. Chromium ran outside the sandbox after sandbox launch
failed with `MachPortRendezvous`. The runner removed historical `test-results` images; route
reports preserve the available commands and results. Six ignored temporary route
scripts were removed after use. Fresh specification, quality, and integration
reviews accepted the result without blockers. The user-reported arrow-key page-scroll
issue after canvas focus loss was reproduced, fixed, and covered by two passing
Playwright tests. The final visual browser report covers the title, level 1, level
10 spacing, and level 14 partial progress. Final acceptance is complete with the
segmented browser evidence limit preserved.

## Art direction and acceptance

The user loves shapes and directs us to start each SVG with the whole namesake
molecular shape as body and limbs, then add color, face, and cartoon features. Isp
must be tall and skinny; Pac must be fat and wide. Supplied image `fvp7mi` for Isp
and `K34Zbj` for Pac guide the molecule-first assets. Ring masses form the colored
bodies and thick bond paths form limbs; faces sit over those molecular silhouettes.
The art specification, quality review, and final built-game visual inspection
accept the assets. Tissue and title evidence remain accepted. The 05-to-06 browser
transition passed twice and now has rendered evidence; reload showed level 5 as
Replay and level 6 as Ready. The 20-level run remains segmented. The all-level
Gem/Cana requirement and final integration verdict are accepted. Invite questions,
challenges, decisions, and escalations.

## D4: SolidJS presentation boundary

SolidJS is the requested UI framework. The UI migration keeps physics and the
canvas runtime independent of Solid; signals own UI state, progress, completion,
and storage notices. `runtime.ts` owns canvas/input/animation-frame behavior and
`App` initializes and disposes it. The minimal TypeScript config uses `jsx: "preserve"` and
`jsxImportSource: "solid-js"`; JavaScript esbuild uses the Solid plugin. This
documents the UI and lifecycle boundary used by the integrated runtime.

## Campaign themes

| Levels | Stage |
| --- | --- |
| 1-4 | Cell Entrance |
| 5-8 | Cytoplasm Chaos |
| 9-12 | Microtubule Madness |
| 13-16 | Gem Slime Factory |
| 17-19 | Cana Contraptions |
| 20 | Boss |
