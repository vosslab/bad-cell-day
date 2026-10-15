# Bad Cell Day ledger

Plan: [../active/bad_cell_day_plan.md](../active/bad_cell_day_plan.md). The manager owns task routing,
decisions, dependency release, and final acceptance. This ledger records actual
status and evidence; pending work is not represented as complete.

| Task | Owner | Status | Dependencies | Questions and decisions | Reviews | Checks and evidence | Next action |
| --- | --- | --- | --- | --- | --- | --- | --- |
| A0 | Sol; shared contracts specialist | complete | None | D1 answered by manager; mutable `GameState` contract confirmed | Contract spec reviewer: initial sole finding was the unsupported event-bus promise; corrected specification recheck accepted after removing the invented events requirement | Source types define `create_game_state(level)` and `step_game(state, input, dt): void`; `tsc` and Prettier exit 0; `npm install` succeeded with 0 vulnerabilities; manager confirmed `esbuild --version` 0.28.2 | B1 proceeds against the shared state contract |
| B1 | Implementation owner assigned by manager | complete | A0 | None recorded | Pending | `./check_codebase.sh` and `./build_github_pages.sh` passed; Playwright browser smoke passed. Chromium could not run in the sandbox because of `MachPortRendezvous`, so browser evidence was collected outside it | B3 proceeds alongside B2 integration |
| B2 | Bounded UI/rendering and persistence owner(s) | complete | A0; coordinate integration with B1 | None recorded | Quality review found Motion writable; corrected it to readonly; fresh rereview accepted | Three save tests passed. Title and game screenshots at `test-results/title.png` and `test-results/game.png` were inspected. Check/build and one-test Playwright smoke passed; Chromium ran outside the sandbox after `MachPortRendezvous` failure | Continue B3; screenshot inspection is not runtime acceptance |
| B3 | Sol for physics; level authoring owner assigned by manager | implemented | A0 | D1 applied | Physics and runtime specification/quality reviews accepted | Codebase check passed with 13 Node tests; build passed; browser move/pause/retry smoke passed; all five tutorials completed in the browser with zero deaths and saved unlocks | Full campaign browser acceptance is in progress |
| B4 | Campaign/runtime implementation owner(s) | implemented; acceptance pending | B1, B2, B3 | D1 applied to authored bosses | Campaign spec accepted after stage-theme correction; campaign quality review running | All 20 levels have death-free input-only simulation routes; final eight and tutorial five fixed-key replay exactly; middle seven and final eight browser continuation running | Finish browser continuation and campaign quality review |
| Physics and runtime reviews | Fresh specification and quality reviewers | complete | B3 implementation | None outstanding | Both specification and quality reviews accepted | Reports accepted after the readonly Motion correction | No action |
| Campaign specification review | Fresh specification reviewer | complete | B4 implementation | Corrected 16/19/20 theme assignment | Accepted after correction | Stage map correction applied | No action |
| Campaign quality review | Fresh quality reviewer | in progress | Campaign specification acceptance | None recorded | Review running | Result pending | Complete review |
| Integration review | Fresh independent reviewer | pending | Spec and quality acceptance | None recorded | Not started | Integration report pending | Start after campaign quality acceptance |

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
- **Status:** answered; propagation and application remain pending.

| Task | Updated brief and constraint | Restated interpretation | Application and verification evidence | Pending next-action owner |
| --- | --- | --- | --- | --- |
| A0 | Plan D1; encode IDs and units and define held plates, latched rescue, simultaneous boss targets in the shared mutable state model | Restated | Source types reflect D1; boss invariant is documented, with data/behavior checks to follow | B1 owner: apply during implementation |
| B1 | Plan D1; shared model and input shell follows the A0 contract | Restated | Applied in B1 implementation; batch check/build/browser smoke passed | Manager: include D1 in integration acceptance |
| B2 | Plan D1; render and persist authoritative shared state | Restated | Applied to rendering and persistence; save tests and browser smoke passed | Manager: include D1 in integration acceptance |
| B3 | Plan D1; physics/tutorial behavior preserves switch semantics | Restated | Implemented in simulation and tutorials; browser tutorial run completed | Manager: include D1 in campaign acceptance |
| B4 | Plan D1; campaign bosses use simultaneous dual activation | Restated | All three dual-switch encounters are authored; simulation routes complete | Manager: include D1 in full browser acceptance |
| Reviews | Plan D1; assess actual switch behavior against this contract | Restated | Physics/runtime reviews accepted; campaign review in progress | Manager: verify campaign review and integration |

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

B1 and B2 gates passed. For integrated B3/B4, `./check_codebase.sh` passed with
13 Node tests, the production build passed, and browser move/pause/retry smoke
passed. All 20 levels have death-free input-only simulation routes. Fixed-key
replays for the final eight and all five tutorials reproduce exactly. A genuine
browser playthrough completed all five tutorials with zero deaths, saved all five
unlocks, and retained them after reload. The middle seven and final eight browser
continuation is still running; do not mark full browser acceptance or integration
review complete until it finishes. Chromium browser checks ran outside the sandbox
after sandbox launch failed with `MachPortRendezvous`.

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
