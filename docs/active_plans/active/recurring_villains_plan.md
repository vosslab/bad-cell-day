# Plan: Recurring molecular troublemakers

## Context

The 20-level cooperative game is playable, with input-only route and browser evidence recorded in
[bad_cell_day_plan.md](bad_cell_day_plan.md). The user now wants Gem and Cana visible from level 1,
visibly responsible for DNA obstacles and glucose machinery, and increasingly involved throughout
all 20 levels. Gameplay remains the first priority. The user supplied molecular structure references
for all four characters and requested anatomy reds, pink tissue, and a touch of cartoon body horror.
Character SVG construction and tissue art have separate owners; this plan owns recurring villain
behavior and its integration with those assets.

## Objectives

- Show both villains in every level, including a nonblocking opening and an ending reaction.
- Make Gem's DNA obstacles and Cana's energy controls actual, identifiable puzzle components.
- Preserve deterministic cooperation, readable warnings, safe recovery, and generous jumps.
- Introduce a safe DNA-wall and glucose-lift cooperation chain in level 1.
- Complete and verify the revised 20-level campaign with distinct molecular villain artwork.

## Design philosophy

Apply **Fix the design, not the symptom** and **Ground requirements in actual needs** from
[REPO_STYLE.md](../../REPO_STYLE.md): villain presentation reads authoritative puzzle state, rather
than maintaining a second animation-driven version of the puzzle. Reuse doors, collapsing bridges,
moving platforms, hold/latch pads, and pulsing hazards. Add the missing power mechanic where an
existing motor-stop flag cannot express glucose supply. Avoid an event bus, enemy AI, arbitrary
callbacks, and a general scripting language. Use bounded input-only playthroughs to resolve uncertain
geometry before expanding the campaign.

## Scope

- Extend shared types and fixed-step machinery with platform power and pad-based restoration.
- Bind authored villain scenes to real component and countermeasure IDs in all levels.
- Render visible actors, DNA traps, glucose connections, warnings, reactions, and short dialogue.
- Revise level 1 and selected later rooms to use actual power loss and safe restoration.
- Retain existing boss target requirements, progression, retry, keyboard controls, and storage.
- Record new evidence, design decisions, human guidance, and temporary-check cleanup.

## Non-goals

- Add autonomous pursuit, attacks, health bars, inventory, or extra player controls.
- Block movement behind dialogue, cutscenes, or introductions.
- Treat chemistry as a constraint that harms character readability or cooperation.
- Make unpowered carriers disappear or crush their passengers.
- Change saved progress schema or publish remotely during implementation.

## Current state summary

`update_pads` resets and reapplies barrier, motor, and stabilization effects before and after each
physics substep. `move_platforms` advances `motionTime` only while a carrier can actually move.
`update_outcome` owns hazard pulses and completion. This is the authoritative mechanics boundary.
`LevelDefinition.villain` currently identifies later villains without describing their schemes.
Level 1 contains simple steps and no switches; levels 2-20 already provide reusable cooperative
barriers, moving carriers, unstable bridges, hazards, and countermeasure pads. Level 16, 19, and 20
boss victory requires distinct Isp/Pac targets occupied together. Rendering currently places boss
portraits and draws hazard rectangles independently from actor AI.

## Architecture boundaries and ownership

### Mapping (milestones -> components)

| Milestone | Component                               | Review boundary                                   |
| --------- | --------------------------------------- | ------------------------------------------------- |
| M1        | Types, power derivation, scene bindings | Deterministic state and countermeasure precedence |
| M2        | Scene rendering and molecular actors    | Actual target correspondence and readability      |
| M3        | Tutorial and campaign authorship        | Solvable routes and meaningful cooperation        |
| M4        | Browser integration and closeout        | Built artifact, persistence, regression evidence  |

### File scope

| File or directory                                                                               | Intended change                                      | Canonical source, for generated output    |
| ----------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ----------------------------------------- |
| `src/types/level.ts`                                                                            | Power definitions and typed villain scenes           | Authored contract                         |
| `src/types/simulation.ts`                                                                       | Derived platform power state                         | Runtime contract                          |
| `src/game_state.ts`                                                                             | Initialize power state                               | Level definitions                         |
| `src/mechanisms.ts`                                                                             | Derive power and gate moving carriers                | Shared mechanics                          |
| `src/render_villains.ts`                                                                        | New scene/target causal visuals                      | Scene definitions and simulation          |
| `src/render_game.ts`                                                                            | Integrate scene rendering without obscuring gameplay | Renderer modules                          |
| `src/render_characters.ts`, `src/character_art.ts`                                              | Integrate canonical Gem/Cana SVGs                    | Separate asset owner's SVGs               |
| `src/villain_scenes_tutorial.ts`, `src/villain_scenes_middle.ts`, `src/villain_scenes_final.ts` | Explicit scenes indexed by each owned level range    | Authored campaign data                    |
| `src/levels.ts`                                                                                 | Attach scenes to exported campaign definitions       | Existing level arrays and scene map       |
| `src/levels_tutorial.ts`                                                                        | Safe level 1 chain and early teaching                | Authored tutorial data                    |
| `src/levels_middle.ts`, `src/levels_final.ts`                                                   | Actual later power chains and countermeasures        | Authored campaign data                    |
| `tests/test_physics.mjs`                                                                        | Small durable power regression checks                | Public simulation behavior                |
| `tests/playwright/smoke.spec.ts`                                                                | Preserve keyboard/pause/retry journey                | Built user behavior                       |
| `tests/_temp/`, `tests/playwright/_temp*`                                                       | Temporary route/render evidence; remove at closure   | One-time acceptance scripts               |
| `docs/active_plans/reports/`                                                                    | Updated route, rendered, and review reports          | Recorded checks                           |
| `docs/HUMAN_GUIDANCE.md`, `docs/DESIGN_DECISIONS.md`, `docs/CHANGELOG.md`, `docs/USAGE.md`      | Record guidance, ownership, behavior, usage          | Human request and verified implementation |
| `dist/`                                                                                         | Rebuild game and packaged SVGs                       | Existing build script and `src/`          |

### Shared contract

The contract owner settles these additions before dependent authors edit their modules:

```typescript
// Moving PlatformDefinition additions; unchanged static and unstable variants.
requiresPower?: boolean;
powerCycle?: { readonly period: number; readonly activeFor: number; readonly phase?: number };
// PadEffect addition; hold/latch activation is already part of PadDefinition.
{ readonly kind: "power"; readonly platformId: string }
// PlatformState addition, recomputed from authored data and current pads.
powered: boolean;
```

An ordinary platform is powered. A `requiresPower` platform begins unpowered. A `powerCycle`
platform follows a finite repeating on/off cycle using simulation time, with positive period and
`0 < activeFor < period`; its on-window supplies baseline power even if `requiresPower` is set.
Any active `power` pad supplies power regardless of the baseline or outage. Existing latch pads
make rescue power permanent for that attempt. Motor Stop remains independent: motion requires
`active && powered && motorOn`. An outage freezes motion time and leaves a solid carrier in place.
The last second before an authored cycle turns off is a visible warning; authors leave enough
powered travel and safe waiting room. Retry resets everything normally. Pac restores electricity;
this supplements her existing stabilization ability without requiring a button.

A scene is optional for isolated fixtures, and required on the exported 20 campaign levels:

```typescript
type VillainScheme = {
  readonly id: string;
  readonly villain: "gem" | "cana";
  readonly target: { readonly kind: "barrier" | "platform" | "hazard"; readonly id: string };
  readonly counterPadIds: readonly string[];
  readonly action: "dna_wall" | "dna_bridge" | "dna_trap" | "glucose_gate" | "energy_drain";
};
// LevelDefinition addition; position is a noncolliding, safe actor perch.
villainScene?: {
  readonly gem: { readonly position: Vec2; readonly opening: string; readonly ending: string };
  readonly cana: { readonly position: Vec2; readonly opening: string; readonly ending: string };
  readonly schemes: readonly VillainScheme[];
};
```

Use explicit level-ID entries and explicit component IDs. Validate every binding during authoring;
missing targets must fail acceptance rather than silently selecting another object. Each campaign
scene has at least one real target for each villain. `counterPadIds` name actual connected pads,
not decorative switches. Empty counters are allowed only for a clearly timed hazard whose safe
window is the intended solution. The scene presents existing state: open/closed barrier,
unstable/stabilized bridge, moving/stopped machine, hazard pulse, powered/unpowered carrier.
Avoid parallel mutable event state. Opening animation uses the first three simulation seconds;
controls remain live, and physical puzzle setup is already active. Mid-puzzle reactions follow
component transitions. Completion and boss defeat select failure/escape poses. Current pose and
text must remain legible with reduced motion.

Molecular Gem uses purple and an unmistakable oversized beard; Cana uses green with a smooth chin.
Reference silhouettes come from gemcitabine and canagliflozin SVG source work. Source-to-target DNA
or glucose paths, a brief action gesture, and matching component motifs make causation visible.
Decorative villain perches do not participate in collisions. Both hero sprites should render roughly 52-56 world units high with the existing foot baseline and
30x36 collision body; enlarge the visible face and body, leaving only modest extremity padding.
Villains should be roughly 56-64 units high. Verify that the enlarged artwork does not make safe
collision edges misleading and move overhead player labels to clear the heads.

Short text avoids masking platforms,
pads, labels, actors, and exits; both villains remain visible during the puzzle.

## Milestone plan

| M   | Title                 | Summary                                       | Goal                                  |
| --- | --------------------- | --------------------------------------------- | ------------------------------------- |
| M1  | Shared contracts      | Implement power and typed target binding      | One authoritative mechanics model     |
| M2  | Visible troublemakers | Draw recurring scenes using real state        | Readable DNA versus glucose causation |
| M3  | Campaign cooperation  | Author level 1 and all-20 scene/power mapping | Playable rising involvement           |
| M4  | Integrated acceptance | Verify routes, browser output, and closeout   | Reviewable complete extension         |

### Milestone: Shared contracts

- Depends on: none; current game remains the baseline.
- Deliverables: shared types, initialization, power derivation, motion gating, concise regression tests.
- Entry criteria: contract accepted by the execution manager and dependent implementers.
- Exit criteria: ordinary platforms behave as before; power outages safely stop/resume carriers;
  hold and latch power restoration work; Motor Stop still wins while power is available.
- Parallel-plan ready: no for overlapping type/mechanics edits; assign one contract owner first.

### Milestone: Visible troublemakers

- Depends on: M1 types; canonical villain SVGs supplied by the separate art owner.
- Deliverables: scene renderer, actual target feedback, opening/puzzle/ending poses and comedy.
- Entry criteria: named fields and target semantics are settled.
- Exit criteria: both villains appear on level 1 and all subsequent rooms; DNA and glucose actions
  match actual mechanism state; reduced motion retains all essential information.
- Parallel-plan ready: yes for renderer versus scene/campaign data after M1 is settled.

### Milestone: Campaign cooperation

- Depends on: M1; M2 may proceed concurrently against the same settled schema.
- Deliverables: explicit scenes for all 20 rooms and selected actual power circuits/outages.
- Entry criteria: authors restate power precedence and unique target-ID correspondence.
- Exit criteria: each room has one understandable solution and both actors visibly own actual trouble;
  level 1 completes safely in roughly 30-60 seconds for a learning pair; all rooms have input-only routes.
- Parallel-plan ready: yes for tutorials 1-5, middle 6-12, and final 13-20 in separate existing files;
  an integration owner attaches their maps in `levels.ts` after authors report exact IDs.

Level 1 introduces all four characters without hazards. Isp holds a blue pad to lower a DNA wall
blocking Pac. Pac crosses and latches a glucose restore pad, opening Isp's route and powering a
broad lift. Both board and reach raised exits. The lift's destination must require riding rather
than a single jump or partner stack; keep safe ground below it and leave generous boarding space.
The restoration latch also keeps the DNA passage open so Isp can follow without trapping Pac.
Do not introduce timed outages in this room.

The following mapping uses existing components as starting points; power-specific revisions may
add explicit IDs, which the scene owner must then update and verify.

| Levels | Gem's actual components                                     | Cana's actual components and progression                                               |
| ------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| 1      | New Pac-blocking DNA wall, lowered by Isp                   | New lift, latched power restored by Pac                                                |
| 2-3    | `pac_door` / `pac_landing` DNA gate                         | `isp_door` / `isp_rescue` glucose gate; ferry power in 3 if route stays clear          |
| 4-6    | `bridge`, `bridge`, `pac_pass`                              | `pac_rescue`, `pac_finish`, `isp_pass` gates and restoration circuits                  |
| 7-10   | `bridge`, `bridge`, `team_door`, `bridge`                   | `second` ferry, `box_door`, `ferry`, `lift` energy machinery                           |
| 11-12  | `orange_lane`, `bridge`                                     | `blue_lane` glucose gate; `ferry` receives first safe warned power cycle               |
| 13-15  | `pac_entry`/`slime_clock`, `rolling_bomb`, `packing_bridge` | `isp_exit`, `pac_exit`, `loading_gate` glucose supplies; rescue counters retain routes |
| 16     | `factory_bridge` and boss machine                           | `press_ferry` energy control, restored by reachable countermeasure                     |
| 17-19  | `isp_balcony`, `lower_route`, `high_bridge`                 | `reversed_lift`, `shifting_shelf`, `sliding_hall` advanced power control               |
| 20     | `core_bridge` and Gem half of final machine                 | `core_ferry` and Cana half; preserve simultaneous final targets                        |

Levels 1-3 teach physical walls and glucose gates/power; 4-6 add collapsing DNA structures and
redirection; 7-10 combine moving traps with machinery; 11-15 introduce selected warned outages;
16-19 combine these with advanced/boss layouts; 20 combines both machines. Every new power
restoration pad must be reachable before its disabled carrier is needed. Hold restoration requires
a later rescue latch or a timed safe alternative so both players can finish. Periodic outages are
reserved for carriers that remain safe to wait on and cannot strand either player.

### Milestone: Integrated acceptance

- Depends on: M2 and M3, plus supplied molecular SVGs and completed tissue theme integration.
- Deliverables: fresh production build, 20-room route evidence, browser acceptance, independent reviews.
- Entry criteria: source checks pass and scene IDs/countermeasure effects validate.
- Exit criteria: all 20 input-only routes complete; built-browser level 1 proves the full DNA/power
  chain, later representative outage/boss rooms prove live changes, prior progress persists, no
  console errors occur, and fresh specification, quality, and integration reviewers accept.
- Parallel-plan ready: yes for independent read-only route, visual, and quality evidence after build.

## Test and verification strategy

Keep permanent tests focused on power's stable behavior: outage freezes motion but preserves solid
support; active power overrides drain; a restoration latch survives departure; Motor Stop remains
independent. Existing physics tests cover collision, stacking, crates, stabilization, and bosses.
A failed power check blocks campaign work until the owning mechanism is corrected.

Use temporary checks for all scene IDs and actual counter-pad effects, plus input-only routes for
all 20 levels. Recompute routes where behavior intentionally changed; do not constrain new puzzles
to old exact timing. Any unsolved room blocks completion and returns to its author for geometry or
countermeasure correction. Never teleport players or mutate puzzle state to claim playthrough.

Run the repository codebase check and production build. Run the existing Playwright smoke against
built HTTP output. Capture level 1 opening, actual wall lowering, glucose restoration, powered lift,
and ending; capture a later outage warning/stop/recovery and the three boss outcomes. Reuse segmented
browser progression honestly and verify persistence/replay after reload. Inspect readability at the
existing desktop sizes and normal small sprite scale. Art acceptance checks both molecular identity
and distinction between DNA traps, glucose gates, background tissue, and safe platform surfaces.
A browser or visual failure blocks rendered acceptance even if compilation passes.

## Migration and compatibility policy

Preserve level IDs, progression order, player controls, save schema, and established physics APIs.
Optional new definition fields preserve isolated test fixtures and the demo level. Remove or replace
old `villain`-only decorative portrait use once all production scenes supply canonical actors; boss
machines retain their authored collision/target behavior. Generate `dist/` through the existing build
and copy canonical SVG assets through its established packaging path.

## Risk register

| Risk                            | Impact                           | Trigger                                    | Owner                 | Mitigation                                                           |
| ------------------------------- | -------------------------------- | ------------------------------------------ | --------------------- | -------------------------------------------------------------------- |
| Power pad behind disabled route | Permanent puzzle deadlock        | Route cannot reach power control           | Campaign author       | Reachability check and input-only route; relocate control            |
| Duplicate source of truth       | Wrong displayed cause or flicker | Renderer invents target state              | Contract/render owner | Derive visuals from actual simulation fields                         |
| Outage overlap with Motor Stop  | Invalid cooperation              | Power implicitly restarts stopped platform | Mechanics owner       | Keep power and motor independent; regression check                   |
| Visual clutter                  | Players miss safe landings       | Actors/dialogue overlap route              | Renderer owner        | Safe perches, short bubbles, target cues outside collision edges     |
| Tutorial overload               | Controls take too long to learn  | First room mixes timings/hazards           | Tutorial author       | Safe sequential wall then latched lift chain                         |
| Shared-file conflicts           | Lost source or mismatched IDs    | Concurrent edits touch contracts/map       | Execution manager     | One owner per shared file; publish settled contracts before dispatch |

## Rollout and release checklist

- [ ] Complete M1 before dependent implementation uses its contract.
- [ ] Match each scene to real targets and countermeasure effects.
- [ ] Verify 20 input-only routes and built browser changes.
- [ ] Accept independent specification, quality, and final integration reviews.
- [ ] Rebuild local preview and record what was verified versus historical evidence.
- [ ] Leave Git staging and commits to the human; remote publication is outside this change.

## Documentation close-out requirements

- Update this plan and the execution ledger with actual milestone and review evidence.
- Record the user's gameplay priority, anatomy tone, molecular shape direction, and recurring villain
  request in [HUMAN_GUIDANCE.md](../../HUMAN_GUIDANCE.md), distinguishing supplied LLM proposal text.
- Record authoritative target binding, deterministic power, and molecular SVG ownership in
  [DESIGN_DECISIONS.md](../../DESIGN_DECISIONS.md).
- Add concrete behavior and verification entries to [CHANGELOG.md](../../CHANGELOG.md), and explain
  DNA/glucose cues in [USAGE.md](../../USAGE.md).
- Remove temporary route/browser scripts after extracting useful evidence; retain only checks whose
  stable behavior earns permanent protection. Mark historical evidence clearly where content changed.
- Archive the completed plan through the repository's documented Git move procedure when allowed.

## Open questions and decisions needed

No user approval is required for implementation within this requested extension. Implementers should
challenge a binding or power rule when route evidence contradicts it; report the concrete state,
component IDs, and proposed owning-boundary correction to the execution manager before dependent
changes. Non-blocking dialogue and comedy wording may be tuned during rendered inspection.
