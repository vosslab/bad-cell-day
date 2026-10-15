# Recurring villains implementation ledger

Status snapshot: 2026-10-14. This ledger separates source evidence from the browser
and review work that still gates completion.

## Milestones and reviews

| Milestone | Implementation and evidence | Status |
| --- | --- | --- |
| M1: shared contracts | Power derivation, power pads, typed scene targets, and independent motor state are implemented. Both engine owners restated and accepted the contract. Power specification and quality reviews accepted it. All 16 focused physics and save checks pass. | Complete |
| M2: visible troublemakers | Gem and Cana scene rendering, target cues, character art, opening and ending beats, quips, ending portraits, and the escape panel are implemented. Completion content scrolls on small screens. | Implementation complete; presentation/catalog review has one partial-progress quip correction in progress |
| M3: campaign cooperation | All 20 levels have authored Gem/Cana scenes bound to real targets and input-only route evidence. | Source implementation and routes complete; middle/final browser review remains in progress |
| M4: integrated acceptance | Fresh browser acceptance, persistence journey, remaining reviews, and closeout. | In progress; fresh levels 1-5 browser journey has passed, middle/final browser work is underway |

The accepted power rule is `!requiresPower && cycleOpen` for baseline supply. An
active power pad overrides both `requiresPower` denial and a closed cycle window.
Motor Stop remains independent, so adding power does not turn a stopped motor on.
Power outages keep carriers solid and freeze their motion time.

## Campaign route evidence

The three owner reports cover all authored scenes and all 20 source-simulation routes:

- Levels 1-5 complete with no deaths; level 1's safe DNA-wall and powered-lift
  route completes in 30.66 simulation seconds.
- Levels 6-12 complete using ordinary keyboard input. Added outage waits verify
  actual unpowered and restored-power frames in levels 11 and 12.
- Levels 13-20 complete with ordinary keyboard input and deterministic replay.
  Added outage waits verify solid, frozen carriers and later recovery in levels
  14, 16, 19, and 20; boss encounters in 16, 19, and 20 still complete.

The exact route procedures, bindings, and check results are in
[tutorial routes](villain_tutorial_routes.md),
[middle campaign](villain_middle_routes.md), and
[final routes](villain_final_routes.md). These source-simulation results do not
establish first-time learning-pair usability.

Fresh rendered browser evidence is recorded in
[villain_browser_tutorials.md](villain_browser_tutorials.md). A new browser context
completes levels 1-5 in sequence with zero retries, page errors, or console errors;
level 1 takes 31.067 seconds. The run advances to level 6, reloads, and verifies
five saved completions and six enabled levels. All four character SVG requests
load successfully, and both ending portraits appear on each completion. At 390px
width, the completion panel scrolls internally to its controls; this proves control
reachability, not simultaneous visibility of all content.

## Presentation and campaign details

Canonical Gem and Cana artwork starts from their namesake molecular structures,
keeping the core ring polygons visible in their silhouettes.
Gem is purple and bearded; Cana is green and clean-shaven. Isp and Pac render at
about 55 world units while retaining 30x36 collision bodies; player labels sit
above the art. Villains render at about 62 world units, and player-card avatars
at 60 pixels.

Each level has both villains, scene openings, mechanism-linked puzzle cues, and
ending reactions. UI portraits and quips accompany the escape panel. The small-screen
completion panel scrolls rather than cutting off content. Target status comes from
the simulation's actual barrier, platform, and hazard state; implementation adds
neither an event bus nor enemy AI.

## Remaining acceptance

- Presentation/catalog specification review has reported one needed correction:
  partial-progress quips must describe actual progress. The correction is assigned
  and active; the review has reported no other blocker so far.
- Fresh browser levels 1-5 pass with zero retries or page/console errors, including
  the level 5-to-6 unlock transition and saved progression across reload.
  Middle/final browser coverage remains underway; do not infer it from source routes
  or the build.
- A fresh production build and all 16 focused physics/save checks pass.
- M4 remains open until browser, persistence, remaining reviews, and documentation
  closeout are recorded by the execution manager.
