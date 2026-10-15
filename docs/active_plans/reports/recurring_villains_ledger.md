# Recurring villains implementation ledger

Status snapshot: 2026-10-14. Implementation, segmented browser acceptance, final
visual review, arrow-key scroll correction, and specification, quality, and
integration reviews are complete and accepted.

## Milestones and reviews

| Milestone | Implementation and evidence | Status |
| --- | --- | --- |
| M1: shared contracts | Power derivation, power pads, typed scene targets, and independent motor state are implemented. Both engine owners restated and accepted the contract. Power specification and quality reviews accepted it. All 16 focused physics and save checks pass. | Complete |
| M2: visible troublemakers | Gem and Cana scenes, target cues, character art, openings, reactions, portraits, quips, and scrollable escape panel are implemented. Partial-progress reaction correction passed fresh review. | Complete |
| M3: campaign cooperation | All 20 levels have authored Gem/Cana scenes bound to real targets and input-only routes. Segmented browser coverage passes with zero retries/errors and saved progress through level 20. | Complete with evidence limits recorded below |
| M4: integrated acceptance | Focused checks, production build, one-test browser smoke, segmented browser playthrough, persistence, final visual review, two arrow-key regression tests, and all reviews pass. | Complete with evidence limits recorded below |

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

Rendered browser evidence is in [villain_browser_tutorials.md](villain_browser_tutorials.md),
[villain_browser_middle.md](villain_browser_middle.md), and
[villain_browser_final.md](villain_browser_final.md). The three segments cover fresh
levels 1-5, seeded prior records for levels 6-12, and seeded prior records for
levels 13-20. Each level is earned through ordinary keyboard play with zero retries
and no page or console errors; outage routes are levels 11, 12, 14, 16, 19, and 20.
Reload preserves all 20 earned records. These segments do not establish one
fresh-storage playthrough of all 20 levels. At 390px, the completion panel scrolls
to its controls; this proves reachability, not simultaneous visibility of all content.

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

- Partial-progress reactions require nonempty progress and every required target
  complete. The `.some` to nonempty-progress plus `.every` correction passed fresh recheck.
- The level 10 opening dialogue moved Cana's bubble from x=540 to x=220 after the
  browser capture showed it obscuring Gem's line. Scope checks and final visual
  inspection pass; see [villain_final_visual.md](villain_final_visual.md).
- A user-reported arrow-key page-scroll issue after canvas focus loss reproduced
  with scroll position changing from 505 to 521. The runtime fix is covered by two
  passing Playwright tests; TypeScript, lint, formatting, and the fresh build pass.
- Fresh specification, quality, and integration reviews accepted the result with
  no blockers. The browser work closes with its three-segment coverage limit intact.
- The fresh production build, all 16 focused physics/save checks, and one-test
  browser smoke pass.
- M4 is complete. Optional collectibles need not all be collected.
