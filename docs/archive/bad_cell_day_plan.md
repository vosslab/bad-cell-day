# Bad Cell Day plan

Questions and challenges are welcome at each implementation or review handoff.
Keep a decision open until affected owners restate it, apply it, and verify it.

## Outcome

Build a cooperative local-keyboard Canvas game in TypeScript. Isp uses A/D/W and
motor-stop pads. Pac uses the arrow keys and stabilization pads. The game teaches
through play; biology supports the fun rather than interrupting it. Use colorful,
clean cartoon art with molecule-first Isp/Pac silhouettes and readable hazards.

The core loop covers collision and stacking, pushing crates and heavy objects,
colored barriers, deadly slime with a quick funny restart, occupancy plates,
latched rescue switches, collectibles, elapsed time and deaths. Save unlock
progression locally. Deliver 20 levels across six stages. The first five levels
are tutorials and must precede the campaign. Include Gem, the bearded trap
villain, and Cana, the shaved rearrangement villain. Levels 16, 19, and 20 are
dual-switch boss encounters.

## Shared contract

**D1: partner rescue and boss activation.** Plates stay active while occupied.
Clearly marked rescue switches latch and let the partner follow. Boss targets
require both characters to activate them together before they latch. Entity IDs
are strings, and simulation values use pixels and seconds. A0 confirms this
contract before dependent implementation starts. The contract recheck accepted
the corrected specification after removing an invented event requirement.

The shared simulation API is a deterministic mutable `GameState` created by
`create_game_state(level)`. Call `step_game(state, input, dt): void` to advance
it. The runtime observes state transitions for presentation. A0 does not add an
event bus; a documented boss invariant plus later data and behavior checks are
sufficient.

| Task | Updated brief and constraint | Restated interpretation | Application and evidence | Next action |
| --- | --- | --- | --- | --- |
| A0 | This plan, D1; define shared entity/input/level contracts and units | Complete | `GameState` and simulation API types are in source; `tsc` and Prettier exit 0; `npm install` succeeded with 0 vulnerabilities; manager confirmed `esbuild --version` 0.28.2; contract recheck accepted after removing the invented events requirement | B1 proceeds on the documented mutable-state contract |
| B1 | Build on A0 contracts; minimal runnable shell and state | Complete | `./check_codebase.sh`, `./build_github_pages.sh`, and Playwright browser smoke passed; Chromium required running outside the sandbox because sandbox Chromium failed at `MachPortRendezvous` | B3 proceeds alongside B2 integration |
| B2 | UI/art rendering and persistence use shared contracts | Complete | Three save tests passed; historical title/game screenshots were inspected; check/build and one-test Playwright smoke passed outside the sandbox for Chromium `MachPortRendezvous`; quality review found Motion writable and the correction to readonly passed fresh rereview | B3 proceeds; screenshots are inspection evidence only |
| B3 | Physics and tutorial data consume fixed contracts; D1 is binding | Complete | SolidJS UI migration, simulation, physics, and all five tutorial levels are integrated; codebase check and build passed | Complete |
| B4 | Campaign and runtime polish compose accepted foundation | Complete | All 20 levels, six stages, recurring villain scenes, and dual-switch encounters are authored; all 20 browser levels pass in three segments with zero retries/errors and all 20 records persist after reload; final visual review, 16 focused checks, full check/build, and two arrow-key regression tests pass | Complete; final acceptance accepted with segmented-run evidence limit |

## Work batches

All implementation remains delegated. Use Sol for physics and shared contracts
because those boundaries carry the highest correctness and integration risk. Use
Luna for bounded documentation and review tasks. The manager owns sequencing,
decisions, ledger updates, and acceptance. Every assignment invites clarification,
challenge, decision, or escalation questions; record unresolved answers as pending.

| Batch | Scope and owner | Dependencies | Completion evidence |
| --- | --- | --- | --- |
| A0 | Sol: settle shared contracts for entities, input, levels, units, and D1 | None | Source types define the mutable `GameState` API; checks pass and affected owners restate constraints |
| B1 | Foundation/state and a minimal runnable game shell; assigned implementation owner | A0 | Check, build, and browser smoke pass; integrated shell runs |
| B2 | UI, art/rendering, and saved progression; separate bounded owner(s) | A0; coordinate shell integration with B1 | Check, build, and browser smoke pass; visible state and persistence work |
| B3 | Physics and first five tutorial levels; Sol for physics, bounded level authoring owner | A0 | Check, build, and browser smoke pass; tutorial sequence teaches the core loop |
| B4 | 15-level campaign, six-stage progression, villains/bosses, runtime polish, and focused tests | B1-B3 | Check, build, browser smoke, then complete 20-level playthrough |

The first five levels teach cooperative movement, pads, object interaction,
barriers, and rescue mechanics in an increasing sequence. The six-stage theme map
is fixed: levels 1-4 Cell Entrance, 5-8 Cytoplasm Chaos, 9-12 Microtubule Madness,
13-16 Gem Slime Factory, 17-19 Cana Contraptions, and level 20 the boss. Gem and
Cana appear in their named stages; dual-switch bosses remain at levels 16, 19,
and 20.

**D4: SolidJS presentation boundary.** Use SolidJS for the requested UI migration.
Keep physics and canvas independent of Solid. Solid signals manage UI state, and
components clean up their lifecycle-owned resources. Use the minimal TypeScript
configuration (`jsx: "preserve"` and the `solid-js` JSX import source) and the
JavaScript esbuild plugin required to compile Solid components.

The requested art direction uses original distinct Isp and Pac forms in the
canonical editable [isp.svg](../../src/assets/isp.svg) and
[pac.svg](../../src/assets/pac.svg), with Barnsyverse inspiration. Gameplay
comes first. The intended tissue look is red/pink, anatomical, cancerous/tumorous,
and touches body horror; gorier Barnsyverse inspiration is welcome. Start each
editable SVG from the whole namesake molecular shape as body and limbs, then add
color, face, and cartoon features. Isp is tall and skinny; Pac is fat and wide.
Supplied molecule images and public structure references inform this revised
molecule-first art. Ring masses and bond limbs form the whole character silhouette;
the earlier crown-badge artwork is superseded. The art specification and quality
reviews accepted the new assets, and final built-game visual inspection passes; see
[character_art.md](../active_plans/reports/character_art.md) and
[final_visual_review.md](../active_plans/reports/final_visual_review.md). Tissue and title
evidence remain accepted.

## Verification and review gates

After each batch, the manager runs `./check_codebase.sh`, `./build_github_pages.sh`,
and a browser smoke through the repository Playwright workflow. Resolve failures
at their owning boundary and record exact commands, outcomes, limitations, and
evidence in the ledger. Use `./run_playwright_tests.sh --build` when the browser
check requires a fresh build; add a targeted smoke selection when tests exist.

After B4, play through all 20 levels and verify tutorial-before-campaign order,
cooperative mechanics, save/unlock recovery, hazards and restart, villains, and
the three boss encounters. Then use a fresh specification reviewer, a different
fresh quality reviewer after specification acceptance, and a fresh integration
reviewer after both accept. Route findings through a fresh correction owner and
the required fresh re-reviews. Final acceptance requires review evidence, the
integrated playthrough, the accepted revised character art, and the expanded
all-level villain requirement, not just successful builds.

## Expanded villain scope

Gem and Cana appear in every level from 1 through 20 with opening, puzzle, and
ending beats. Gem uses a purple, bearded DNA-obstacle role; Cana uses a green,
clean-shaven glucose-energy role. Level 1 starts with Isp activating a wall switch,
then Pac restoring a powered platform. Implementation and campaign reviews are
complete; fresh specification, quality, and integration reviews accepted the work.

## Current status

A0, B1, B2, B3, and B4 implementation are complete. All 20 levels have death-free
input-only simulation routes. Browser playthroughs cover all 20 levels in three
segments: a fresh-storage tutorial run for levels 1-5, then continuations for 6-12
and 13-20 with prior completion records seeded only to unlock each segment. All
segments completed with zero retries or browser errors; saved progress reached 20
and remained after reload. See [browser_tutorial_playthrough.md](../active_plans/reports/browser_tutorial_playthrough.md),
[browser_middle_playthrough.md](../active_plans/reports/browser_middle_playthrough.md), and
[browser_final_playthrough.md](../active_plans/reports/browser_final_playthrough.md).

Campaign specification review accepted after correcting the stage 16/19 factory
and citadel assignments. Campaign quality review accepted the data; the 28x28 bomb
correction passed final visual inspection. The title was corrected and recaptured
at 1280x800 and 1440x900. Tissue source and rendered quality are accepted. The final
codebase check passed with 13 tests, the production build passed, and a one-test
browser smoke passed after the molecule-first asset/title rebuild. Final visual
inspection recaptured the built game and accepted the art and title; source and
built SVG hashes match. A real-browser tutorial-to-campaign transition now
completes level 5, advances to level 6, and preserves the level 6 unlock after
reload; see [tutorial_campaign_transition.md](../active_plans/reports/tutorial_campaign_transition.md).
The 20-level browser evidence remains three segments, not one fresh-storage run:
fresh levels 1-5, then prior-completion-seeded continuations 6-12 and 13-20.
Each segment has zero retries and browser errors; required outage routes were
observed at levels 11, 12, 14, 16, 19, and 20, and all 20 records persisted after
reload. The partial-progress reaction passed fresh review, and the final visual
browser report confirms the level 10 spacing correction and level 14 reaction at
the reviewed build. The visual gate is complete. A user-reported arrow-key page
scroll after canvas focus loss was reproduced (scroll position 505 to 521), fixed,
and covered by two passing Playwright tests; TypeScript, lint, formatting, 16
focused checks, and a fresh production build pass. Fresh specification, quality,
and integration reviews are accepted with no blockers. Project acceptance is
complete with the three-segment evidence limit recorded. Six ignored temporary
route scripts were removed; their reports remain historical evidence.
