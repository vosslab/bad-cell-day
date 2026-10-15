# Bad Cell Day plan

## Outcome

Build a cooperative local-keyboard Canvas game in TypeScript. Isp uses A/D/W and
motor-stop pads. Pac uses the arrow keys and stabilization pads. The game teaches
through play; biology supports the fun rather than interrupting it. Use colorful,
clean cartoon art with simple geometric character prototypes and readable hazards.

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
| B2 | UI/art rendering and persistence use shared contracts | Complete | Three save tests passed; title and game screenshots were inspected at `test-results/title.png` and `test-results/game.png`; check/build and one-test Playwright smoke passed outside the sandbox for Chromium `MachPortRendezvous`; quality review found Motion writable and the correction to readonly passed fresh rereview | B3 proceeds; screenshots are inspection evidence only |
| B3 | Physics and tutorial data consume fixed contracts; D1 is binding | Implemented | SolidJS UI migration, simulation, physics, and all five tutorial levels are integrated; codebase check and build passed | Final integrated browser acceptance remains in progress |
| B4 | Campaign and runtime polish compose accepted foundation | Implemented; acceptance pending | All 20 levels, six stages, villains, and dual-switch encounters are authored; input-only simulations cover all levels; final and middle browser continuation is running | Finish full browser playthrough and campaign quality review |

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
the required fresh re-reviews. Final acceptance requires review evidence and
the integrated playthrough, not just successful builds.

## Current status

A0, B1, B2, B3, and B4 implementation are complete. The 20-level campaign is
authored and all 20 levels have death-free input-only simulation routes; fixed-key
replays for the final eight and the tutorial sequence reproduce exactly. The real
browser has completed all five tutorials with zero deaths, persisted five unlocks,
and passed move, pause, and retry smoke checks. The middle seven and final eight
browser continuations are still running, so full browser acceptance remains open.
The codebase check (13 Node tests) and production build passed. Specification and
quality reviews accepted the physics and runtime; campaign specification review
accepted after the stage-theme correction, while campaign quality review is still
running. Integration review and final acceptance remain pending. Graphify
references absent starter-template code, so direct source inspection is authoritative.
