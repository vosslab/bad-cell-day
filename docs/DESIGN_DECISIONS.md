# Design decisions

<!-- VENDORED HEADER: START -->
Record each durable decision about how this code and repository are shaped, once it is settled, with
the reasoning a later reader needs. Guidance Neil Voss states belongs in
[HUMAN_GUIDANCE.md](HUMAN_GUIDANCE.md), dated history in `docs/CHANGELOG.md`, open discussion in
`docs/active_plans/decisions/`. [PROPAGATED HEADER - ENTRIES BELOW ARE YOURS]
<!-- VENDORED HEADER: END -->

### Prioritize reciprocal cooperative routes

**Decision.** After acceptance of the current 24-room pressure milestone, prioritize new
cooperative gameplay with distinct routes and reciprocal contributions over generic assessment-run
configuration or extra attack-state explanations. The manager's next design priority is level 25,
using existing mechanics and fair recovery; introduce engine types or configuration only if
feasibility demonstrates the need.

**Why.** The accepted pressure milestone is complete, while the ongoing goal is to improve the
gameplay. Distinct routes give both partners consequential work; assessment refresh remains useful
future work, and the 23-room difficulty records remain historical.

**Consequence.** A fresh design agent is examining level 25. Do not claim a new current-24-room
difficulty assessment or change attack rules as part of this direction. The canonical acceptance
report remains the owner of the milestone's latest counts and limits.

**Owner.** Manager priority; living direction in
[gameplay_direction.md](active_plans/reports/gameplay_direction.md).

### Recurring pressure uses attempt-scoped interrupts

**Decision.** Once started, an attacker keeps recurring until earned boss defeat or room
completion. Author `startsOnPadId?` and `interruptedByPadIds?` without old-name aliases. Runtime
attackers own required `started` and `usedInterruptPadIds` fields: start once, then consume all
active unused interrupt IDs together, cancel that attack's flight, and restart its full existing
cooldown and windup. Start/interrupt ticks preserve the reset; held, latched, or reentered used
pads do not reset it again. Shared eligibility requires playing, boss undefeated, and a started
runtime attacker; missing runtime is ineligible and a missing attacker produces no weapon pose.

**Why.** A control can buy recovery time while preserving the villain's recurring role. One
shared attempt-state owner keeps simulation, authoring, weapon cues, and tests consistent.

**Consequence.** D1 is implemented with fresh source SPEC and distinct QUALITY acceptance.
Use `release | catch | interrupted` markers and `waiting`/
`interrupted` weapon actions in place of `silenced`; reuse the existing 0.35-second recovery,
give windup priority, and preserve natural catch. Dead/completed state does not advance; boss
defeat clears flights/markers while effects recover. Pause freezes; retry resets attempt state.
Preserve mechanism order/one-substep lag, all 24 room geometries/order, effects, lanes, and timing
initially. Migrate authored fields and narrow inaccurate hints; preserve BUBBLES/LIFT causality.
Keep puzzle-scheme reactions separate from weapon state. Add no save fields, timers, phases, or
tuning. All 24 focused browser cases, four isolated-trial journeys, and the fresh normal-motion
24-room Play/Next campaign pass. Fresh integration ACCEPTS WITH CONCERNS and explicit manager
acceptance closes this milestone. Archive custody and the latest shared Podman storage observation are
recorded separately in
[recurring_villain_pressure_acceptance.md](active_plans/reports/recurring_villain_pressure_acceptance.md).

**Owner.** [src/types/interference.ts](../src/types/interference.ts),
[src/interference.ts](../src/interference.ts), [src/weapon_pose.ts](../src/weapon_pose.ts), and
[recurring_villain_pressure.md](archive/recurring_villain_pressure.md).

### Partner poses derive from support

**Decision.** Select the paired carrying/riding SVG poses from current valid runtime support,
with static reduced-motion output and legible base-art fallback while images load or fail. Keep
normal-state canonical art and physical feet, footing cues, collision bodies, controls, and saves.

**Why.** Clear partner silhouettes and faces should come from presentation while the established
support and movement rules remain authoritative.

**Consequence.** Composition B, implementation, fresh SPEC, and distinct QUALITY pass. Six
selector checks, 40 pixel-identical solo cases, actual normal/reduced FLOAT rides, and the final
11 geometry/terminal, eight temporal, and five loading scenarios pass. Synthetic matrices
establish bounded presentation behavior; ordinary routes establish built-game operability.
The existing 88-pixel art extends beyond its 36-pixel collision body and can overlap a ceiling
at top-hitbox contact. Keep that art/physics boundary explicit. Fresh combined integration and
explicit manager acceptance close the milestone as DONE_WITH_CONCERNS, recorded in [recurring_villain_pressure_acceptance.md](active_plans/reports/recurring_villain_pressure_acceptance.md).

**Owner.** [src/character_art.ts](../src/character_art.ts),
[src/render_characters.ts](../src/render_characters.ts), [src/render_game.ts](../src/render_game.ts),
and [partner_readability.md](archive/partner_readability.md).

### Playwright owns its local server

**Decision.** Keep one Playwright-managed loopback server for the built `dist/` tree. The repo-local
standard-library `ThreadingHTTPServer` helper uses `socket.SOMAXCONN` for its request queue and
HTTP/1.0 handling, validates the port/build directory, and exposes startup/bind failures. The
config sources the project environment through Bash and uses `exec python3` for server lifecycle.

**Why.** Controlled comparisons observed backlog sensitivity in the prior local transport fault.
The helper keeps the bounded repair at the runner/server owner while preserving the existing
two-worker browser journeys and normal resource failures.

**Consequence.** Fresh SPEC and distinct QUALITY accept the repair; six unchanged permanent test
pairs produced 12 pages, 96 HTTP 200 responses, and zero reported errors. CLI/config validation,
root/MIME/404, bind failure, and cleanup checks pass. The exact kernel mechanism remains inferred;
this is bounded local evidence, not a universal transport guarantee or gameplay acceptance.
Fresh combined integration and explicit manager acceptance close the lane as DONE_WITH_CONCERNS.
The latest recorded full Python suite passed (1,886 tests in 1.96 seconds), and the passive
shared-storage total was below 20 GB, so new feature work may proceed while continuous game
development remains ACTIVE. This is a point-in-time observation, not a capacity guarantee. See
[recurring_villain_pressure_acceptance.md](active_plans/reports/recurring_villain_pressure_acceptance.md).

**Owner.** [playwright.config.ts](../playwright.config.ts),
[tests/playwright/helper_static_server.py](../tests/playwright/helper_static_server.py), and
[browser_transport_investigation.md](active_plans/reports/browser_transport_investigation.md).

### FLOAT passenger room ownership

**Decision.** Add stable `level_24`, I've Got You, after `level_13` and before `level_14` in the
liver. Reuse physical head support and Gem's FLOAT to carry Pac on Isp, then transfer control
through Pac's CROSS hold and Isp's RECONNECT latch. Preserve every previous room definition and
relative order. Keep Gem available for repeat rides after the latch.

**Why.** The accepted feasibility candidate makes each partner the other's route while varying
the preceding useful-FLOAT lesson. A safe floor and repeatable ride permit ordinary recovery;
permanently suppressing Gem at RECONNECT would trap a fallen Pac below the upper route.

**Consequence.** Keep geometry and villain setup room-local; existing physics, controls, shared
types, save schema, and liver tissue remain authoritative. Cana's gate scheme supplies a
consequential role without another projectile. Historical 23-room difficulty records stay frozen;
the addition requires its own observed evidence before numerical difficulty or human-play claims.

**Owner.** [src/level_float_passenger.ts](../src/level_float_passenger.ts), campaign assembly in
[src/levels.ts](../src/levels.ts), and
[float_passenger.md](active_plans/active/float_passenger.md).

### Temporary Graphify Cargo reconciliation

**Decision.** Reconcile exact Cargo aliases with their AST package twins before
reclustering; verify the resulting IDs against Graphify's loaded graph before writing.

**Why.** Graphify 0.9.80 compares normalized candidate counts with raw JSON counts,
and its original-link export otherwise drops links still pointing to removed aliases.

**Consequence.** Preserve all link records and the active shrinkage guard. Keep the
correction in one removable function; already reconciled upstream output is a no-op.

**Owner.** `normalize_cargo_twins` in
[devel/graphify_prune_tests.py](../devel/graphify_prune_tests.py)
and [devel/graphify_map_repo.py](../devel/graphify_map_repo.py).

### Bad Cell Day cooperative switch contract

**Decision.** Occupancy plates remain active while occupied. Clearly marked
rescue switches latch and enable the partner to follow. Boss targets latch only
after both characters activate them together. Entity IDs are strings and
simulation values use pixels and seconds.

**Why.** Consistent held and latched behavior makes cooperative puzzle rules
predictable and gives boss encounters a clear shared action.

**Consequence.** Shared state, physics, level data, rendering, and acceptance
checks use this contract. A0 defines the implementation interfaces; dependent
work remains pending until that contract is accepted.

**Owner.** Bad Cell Day shared-contract artifact tracked in
[archive/bad_cell_day_plan.md](archive/bad_cell_day_plan.md).

### SolidJS presentation boundary

**Decision.** Use SolidJS for UI state and presentation. Keep physics and the
canvas runtime independent of Solid. `runtime.ts` owns canvas drawing, keyboard
input, and the animation loop; `App` initializes and disposes that runtime.
Signals own presentation state, including progress, completion, and storage
notices. Configure TypeScript with `jsx: "preserve"` and
`jsxImportSource: "solid-js"`, and compile Solid components with the JavaScript
esbuild plugin.

**Why.** The requested UI migration uses Solid while preserving the simulation
and canvas as independent owners of game behavior and drawing.

**Consequence.** UI components own presentation state and the `App` lifecycle
boundary; the runtime owns canvas/input resources, and physics remains usable
without Solid. The narrow compiler configuration permits JSX compilation without
changing the simulation boundary.

**Owner.** [src/runtime.ts](../src/runtime.ts), [src/app.tsx](../src/app.tsx),
[src/ui_state.ts](../src/ui_state.ts), and build configuration, as scoped in
[archive/bad_cell_day_plan.md](archive/bad_cell_day_plan.md).

### Original character art and tissue theme

**Decision.** Isp and Pac use original, visually distinct shapes in editable
canonical SVG files. Barnsyverse informs the character art. Gameplay comes first;
the tissue environment uses red/pink anatomical tumor and cancer imagery with a
touch of body horror, and gorier Barnsyverse inspiration is welcome. Begin each
editable SVG with its namesake molecular shape as the whole body and limbs, then
add color, face, and cartoon features. Isp is tall and skinny; Pac is fat and wide.
The molecular form is a visual abstraction, not a literal chemical diagram.

**Why.** Distinct character silhouettes support recognition during play, while
the tissue theme makes the game's setting legible without interrupting play. The
molecular form makes each character's namesake shape the basis of its silhouette;
color and facial features then keep the characters readable and expressive.

**Consequence.** Keep the art direction in the two canonical character assets and
the game's environment presentation; preserve readability at gameplay size. Preserve
the molecule-first SVG construction and distinguish the two requested proportions.

**Owner.** [src/assets/isp.svg](../src/assets/isp.svg),
[src/assets/pac.svg](../src/assets/pac.svg), the molecule-first art specification,
and campaign environment rendering. Public structure references are
[Ispinesib, CID 6851740](https://pubchem.ncbi.nlm.nih.gov/compound/6851740) and
[Paclitaxel, CID 36314](https://pubchem.ncbi.nlm.nih.gov/compound/36314).

### Platform power and motor precedence

**Decision.** A platform's baseline power is `!requiresPower && cycleOpen`; when no
cycle is authored, `cycleOpen` is true. An active power pad supplies power over
either baseline denial or a closed cycle window. Motor Stop remains a separate
state, so a powered but stopped platform stays stopped.

**Why.** Required-power startup, timed outages, and rescue pads need one predictable
power rule. Keeping motor state independent prevents a power restoration from
silently undoing a partner's stop action.

**Consequence.** Simulation derives displayed power and carrier motion from authored
platforms, cycle time, and active pads. Power outages freeze carrier motion while
the carrier remains solid; latched rescue power lasts for the attempt.

**Owner.** [src/mechanisms.ts](../src/mechanisms.ts),
[src/types/level.ts](../src/types/level.ts), and
[src/types/simulation.ts](../src/types/simulation.ts).

### Recurring Gem and Cana scene presentation

**Decision.** Render Gem and Cana in every campaign level from explicit scene data
bound to real mechanism IDs. Derive target cues and reactions from current simulation
state. Gem is purple, bearded, and associated with DNA obstacles; Cana is green,
clean-shaven, and associated with glucose-powered machinery. Their editable canonical
SVGs begin with their namesake molecular structures. Keep the core molecular ring
polygons visible in the character silhouettes. The later character-prominence decision
sets the rendered art scale while retaining the 30x36 collision bodies.

**Why.** Explicit bindings make the villains visibly responsible for actual puzzles,
while renderer-derived state prevents the art from describing a different puzzle
than the mechanics. Molecule-first silhouettes retain molecular identity at game
scale; fixed collision bodies preserve established routes.

**Consequence.** Keep scene definitions and simulation as the source for target
presentation. Do not add enemy AI or a second event-driven puzzle state. Keep short
opening and ending lines, reaction portraits, and escape UI readable without blocking
movement or hiding small-screen content.

**Owner.** [src/villain_scenes_tutorial.ts](../src/villain_scenes_tutorial.ts),
[src/villain_scenes_middle.ts](../src/villain_scenes_middle.ts),
[src/villain_scenes_final.ts](../src/villain_scenes_final.ts),
[src/render_villains.ts](../src/render_villains.ts),
[src/assets/gem.svg](../src/assets/gem.svg), and
[src/assets/cana.svg](../src/assets/cana.svg).

### Character prominence and depth

**Decision.** Render Isp and Pac at 1.6 times their former reference art height,
from about 55 to 88 world units; render villains at 1.6 times their former scale.
Preserve the complete game world and the 30x36 physics bodies. Use a compact
active-play desktop shell to recover height previously spent on cards. Pac's wide SVG has a
shorter visible height than the reference. In rendering, own
`VILLAIN_ART_SCALE` and `draw_player_overlay`; depth-sort lower characters first,
then draw the final contact cue at physics feet with labels. Adjust speech bubbles
and their connections to the new art positions.

**Why.** Larger characters need to read clearly while preserving the established
world, routes, and collision behavior. The compact shell gives active play more
vertical room, and feet-based ordering keeps overlap and contact cues legible.

**Consequence.** Keep character prominence in renderer-owned scale and overlay
logic, with labels and contact cues aligned to physics feet. The 1002-pixel canvas
target was confirmed at 1280x800. Horizontal art centering clamps at world edges
while physical feet and their cues remain fixed. Speech bubbles use bounded
positions to avoid both characters and earlier bubbles; omit a bubble when no
candidate fits. Keep the whole world readable across the reviewed viewports.

**Owner.** [src/render_villains.ts](../src/render_villains.ts),
[src/runtime.ts](../src/runtime.ts), and the active character prominence ledger
in
[docs/active_plans/reports/CHARACTER_PROMINENCE_LEDGER.md](active_plans/reports/CHARACTER_PROMINENCE_LEDGER.md).

### Partial-progress villain reactions

**Decision.** Show a partial-progress reaction only when the player has made
nonempty progress and every required target is in its completed state. A zero
target count does not qualify.

**Why.** Reactions must describe the actual puzzle state and avoid claiming
progress before the player has acted.

**Consequence.** Keep reaction eligibility derived from the authoritative
simulation targets, and recheck it whenever target state or reaction copy changes.

**Owner.** [src/render_villains.ts](../src/render_villains.ts) and its accepted
presentation/catalog review.

### Level 10 dialogue spacing

**Decision.** Position Cana's level 10 opening bubble at x=220 world units so it
does not obscure Gem's opening line at the reviewed 1280x800 view.

**Why.** The prior x=540 position overlapped Gem's bubble and hid much of its text.

**Consequence.** Keep both opening lines readable together at the reviewed
1280x800 view; the final rendered spot check confirms the corrected spacing.

**Owner.** Level 10 villain scene presentation and final rendered visual review.

### Campaign difficulty progression

**Decision.** The historical 20-room baseline orders rooms as `02,01,04,03 / 06,08,05,07 / 11,09,10,12 / 13,14,15,16 / 18,17,19 / 20`, keeping the six authored chapter bands and their simpler openings. Later stable-ID insertions supersede this exact count/order while retaining the original 20 rooms in relative order. Keep room IDs attached to authored geometry and saved achievements. Save format v1 remains unchanged; the first room, a room's own completed ID, or the completed preceding room unlocks a position. Assess puzzle reasoning, cooperation, movement/timing, failure cost, and discoverability separately, and distinguish mandatory routes from optional collectibles.

**Why.** The human reported that the former level 2 was easier because it was walking while the former level 1 introduced jumps. The bounded order teaches the safe walking handoff first and preserves the liked lift/jump challenge. Other adjacent comparisons remain hypotheses until observed.

**Consequence.** Curriculum order and onboarding copy follow campaign position while stable IDs preserve room identity and old completions. Use observed human attempts, separately for first-time and experienced players and for one-person/two-character and two-person play. Record first-attempt and total clear time, deaths, manual restarts, help, and stuck points without combining them into a score or gate. Browser/scripted completion is feasibility evidence, not comparative human difficulty evidence.

**Owner.** [src/levels.ts](../src/levels.ts), [src/save_load.ts](../src/save_load.ts), and [LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md); the source inventory remains in [difficulty_audit.md](active_plans/audits/difficulty_audit.md).

### Optional Gem/Cana interference trial

**Decision.** Keep `TRIAL_LEVEL` outside campaign `LEVELS`, and expose it through
the existing `start_level` path with a singleton allowlist. Preserve the 20-room
campaign order and save behavior. Gem's bubble floats Isp toward a latch and briefly
locks Pac; Cana's slow boomerang gives Isp spin feedback with reliable directional
control and gives Pac a bounded, collision-respecting shove. Pause freezes the
attempt; retry recreates it. Keep all four effects easy to test; Isp's float helps
reach the required route, while Pac's lock, Isp's spin, and Pac's shove are optional.
The authored geometry and starting points are specified in
[villain_interference.md](archive/villain_interference.md).

**Why.** The isolated optional room allows controlled playtesting of villain
interference without changing campaign progression or saved achievements. The safe
floor, short effects, and immunity after a hit support recovery and predictable play.

**Consequence.** Keep trial state separate from campaign achievements. Exact geometry
values are implementation tunables that must be validated against this route in the
browser. Do not add autonomous villain AI, attack buttons, reversed controls, or
chained stun. Treat the human's tentative ideas as exploration, not a fixed mandate.

**Owner.** [src/types/interference.ts](../src/types/interference.ts),
[src/interference.ts](../src/interference.ts),
[src/interference_trial.ts](../src/interference_trial.ts), and
[src/runtime.ts](../src/runtime.ts), with the scene contract in
[villain_interference.md](archive/villain_interference.md).

### Pad-controlled campaign interference

**Decision.** Use optional `enabledByPadId` and `disabledByPadIds` on authored
interference attacks. Any active disabling pad suppresses an attack, including when
its enabling pad is active; boss defeat also suppresses it. Suppression cancels windup
and projectiles and resets the full cooldown. Existing player effects finish naturally.

**Why.** One simulation-owned rule supports a partner-controlled float and both held
and latched safety without a separate encounter state machine.

**Consequence.** Re-enabling requires a fresh cooldown and warning. Rendering derives
warnings, suppression status, and reactions from simulation. Retry recreates the attempt;
authored references are validated. Keep stable IDs, campaign order, and save format.

**Owner.** [src/interference.ts](../src/interference.ts),
[src/types/interference.ts](../src/types/interference.ts), and
[src/levels.ts](../src/levels.ts).

### Teach float before hazardous transfer

**Decision.** Introduce the Pac-controlled Gem float in stable `level_13` over a
continuous floor, apply it to the stopped lift in `level_17`, and use temporary STEADY
and lasting RESCUE suppression against Cana in `level_19`. Retain Cana's existing gaps.

**Why.** The first room isolates cooperation and steering; the later rooms combine
those skills with carrier timing and deliberate dodge risk. Removing every failure
would remove decisions as well as punishment.

**Consequence.** Judge warning clarity, understandable causes, available responses, and
failure cost through observation. The rejected automatic catch ledge remains a design
experiment, not a repaired product defect. Add a return-direction cue only if observed
player confusion supports it. Book analysis informs hypotheses, not proof of enjoyment.

**Owner.** [src/levels_final.ts](../src/levels_final.ts),
[LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md), and
[game_design_reading.md](active_plans/reports/game_design_reading.md).

### Causal finale handoff and paired shutdown charge

**Decision.** Make Isp's upper TARGET sustain the finale route after Pac supplies
STEADY, so Pac can leave support and join Isp. The finale requires continuous
occupancy of both owned targets for its authored charge duration. Losing either
owner resets incomplete charge; completed defeat persists. Bosses without an
authored charge duration retain their immediate paired-target behavior.

**Why.** Both partners should change the other's possibilities before the final
shutdown. A visible shared charge gives their arrival a consequence beyond another
permanent RESCUE latch.

**Consequence.** Simulation owns charge and defeat; artwork and feedback read that
state. Pause advances neither; retry starts a fresh attempt. Final-build route, recovery, integrated
art, specification, quality, and integration reviews accept this milestone; novice discovery
and human enjoyment remain unmeasured.

**Owner.** [src/levels_final.ts](../src/levels_final.ts),
[src/mechanisms.ts](../src/mechanisms.ts), and
[src/render_boss_charge.ts](../src/render_boss_charge.ts).

### Insert distinct cooperative rooms using stable IDs

**Decision.** Expand the campaign to 22 rooms by inserting `level_21` after
`level_12` and before `level_13`, and `level_22` after `level_17` and before
`level_19`. Preserve the relative order and identity of all previous rooms. Assemble
and validate both authored villain scenes through the existing campaign contract.
Keep save schema v1: completed IDs remain replayable, and completion of an immediate
predecessor unlocks the next room.

**Why.** Additional upper/lower and inward/return routes can develop reciprocal
cooperation while preserving existing useful rooms. Stable IDs preserve earned
achievements as campaign positions change.

**Consequence.** A legacy frontier unlocks its newly inserted successor. An unearned
room beyond the insertion requires that new predecessor; an already earned room
remains replayable. At this 22-room milestone, the final boss was position 22; the later
`level_23` insertion moves it to position 23 without changing the established room order.
Focused save coverage protects insertion behavior independently of campaign size and geometry;
source integration does not establish browser progression or enjoyable cooperation.

**Owner.** [src/levels.ts](../src/levels.ts),
[src/level_split_relay.ts](../src/level_split_relay.ts),
[src/level_crossed_paths.ts](../src/level_crossed_paths.ts), and
[src/save_load.ts](../src/save_load.ts).

### Paired counterweight elevators

**Decision.** Stable `level_23` uses one linked pair of solid decks. A supported hero must ride each
deck before either direction can move. With both passengers aboard, greater total load descends;
equal load holds. This same passenger clutch governs both directions. At the new solver's
initial-overlap boundary, classify overlap within an operation/edge-scaled ULP bound as numerical
contact; meaningful penetration still blocks. Leave ordinary collision and support predicates
unchanged.

**Why.** Reciprocal crate delivery makes both players' cargo choices affect the partner's route.
The shared passenger requirement prevents one rider from preparing or moving a lift while the
other is stranded. ULP-scaled contact accounts for arithmetic roundoff without adding a fixed
pixel allowance or hiding meaningful overlap.

**Consequence.** Place `level_23` after `level_10` and before `level_12`, where lane, weight, and
together-boarding lessons precede the cargo synthesis. Stable IDs preserve saved achievements;
the existing unlock rule governs the new frontier. The source order now has 23 rooms, with the
finale at position 23. Keep novice discovery, human enjoyment, two-person coordination, and final
artifact acceptance distinct from source validation and candidate route evidence.

**Owner.** [src/counterweights.ts](../src/counterweights.ts),
[src/level_counterweight.ts](../src/level_counterweight.ts),
[src/levels.ts](../src/levels.ts), and [counterweight_direction.md](active_plans/reports/counterweight_direction.md).

### Runtime-owned hero response

**Decision.** Keep transient hold and latch feedback in runtime-owned presentation history outside
simulation/save state. Credit only the actual eligible owner, consume every observed latch
transition once, and clear reactions during interference, death, or completion. Fresh attempts
reset history; pause freezes its age. Render sole-anchored canonical hero responses and a paired
completion heading with immediate existing actions.

**Why.** The hero doing useful support should visibly respond without granting solo credit for
shared/crate actions or changing puzzle rules. Both heroes own the victory.

**Consequence.** Observers cannot mutate simulation/input. Abandoned or suppressed transitions
never produce a late acknowledgment. Reduced motion uses static poses. Targeted browser evidence
covers sampled poses and lifecycle; exhaustive visual edge cases and human interpretation remain
separate from that acceptance.

**Owner.** [src/hero_feedback.ts](../src/hero_feedback.ts),
[src/runtime.ts](../src/runtime.ts), [src/types/presentation.ts](../src/types/presentation.ts),
[src/render_characters.ts](../src/render_characters.ts), and [src/app.tsx](../src/app.tsx).

### Explain lift boarding through authored cues

**Decision.** Author an optional boarding side on a moving lift. For the opening glucose lift,
show the left-side jump approach and STEP LEFT only when actual descending underside contact
requires recovery. Draw guidance beneath heroes/badges, with its panel above the occupied badge
band. Preserve lift physics, geometry, speed and cycle timing.

**Why.** Ordinary-input investigation showed missed boarding and waiting underneath rather than
a demonstrated need to shorten the liked jump challenge.

**Consequence.** Production collision predicates govern the recovery cue. Browser acceptance
checks RESTORE, launch, stall and side recovery in both motion modes; it establishes operability,
while novice comprehension remains unmeasured.

**Owner.** [src/render_boarding_cues.ts](../src/render_boarding_cues.ts),
[src/types/level.ts](../src/types/level.ts), and
[src/levels_tutorial.ts](../src/levels_tutorial.ts).

### Keep tumor district scenery static and behind play

**Decision.** Select one of six original, static transparent district SVGs from the current stage.
Draw it between the existing background wash and title, while preserving all gameplay and
foreground layers and the existing stage accent values. Cache image loads lazily; pending images
show only the wash and title, and failed required assets remain visible as acceptance failures.

**Why.** Distinct peripheral anatomy helps each district read as part of a living tumor while the
open center protects platform edges, hazards, characters, interaction cues, and the HUD. Static
scenery also keeps reduced-motion output and same-state presentation predictable.

**Consequence.** Keep environment selection and drawing in the environment renderer and asset
packaging contract. Do not change simulation state, geometry, controls, or encounter organs to
compensate for scenery. Browser evidence establishes scripted visibility and operability; human
discovery, enjoyment, novice difficulty, comfort, and two-person play remain unmeasured.

**Owner.** [src/render_environment.ts](../src/render_environment.ts),
[build_github_pages.sh](../build_github_pages.sh), and
[environment_direction.md](active_plans/reports/environment_direction.md).

### Recurring villains from the opening

**Decision.** Gem and Cana act in the first eight campaign rooms and recur in selected later
rooms. Their attacks use planted encounter origins and shared muzzle, facing, pose, and range
geometry. Gem has a bounded bubble shot; Cana has a returning boomerang. The four existing hero
effects remain temporary, and DIZZY slows horizontal input to 55 percent without reversing it.
Rooms retain their geometry and use existing pads and rescue switches for suppression. A closed
door closes immediately and an overlapping hero may clear only toward the nearer separating face.

**Why.** Shared attack geometry keeps warning, weapon, projectile, and catch positions aligned.
Authored safe lanes and existing cooperative controls make interference part of each puzzle while
preserving its movement and recovery routes.

**Consequence.** The opening sequence is `level_02`, `level_01`, `level_04`, `level_03`,
`level_06`, `level_08`, `level_05`, and `level_07`; five existing later attack rooms remain. Source
routes, final browser routes, and presentation review establish behavior and feasibility. The actors
remain rooted at authored encounter positions: their aiming and reactions are performance, not
patrol or locomotion. Human discovery, enjoyment, and two-player coordination remain unmeasured.

**Owner.** Shared behavior in [src/weapon_pose.ts](../src/weapon_pose.ts),
[src/interference.ts](../src/interference.ts), and [src/collisions.ts](../src/collisions.ts);
encounter authoring in `src/villain_scenes_*.ts`; milestone status in
[active_villains_direction.md](active_plans/reports/active_villains_direction.md).

### Give each campaign chapter an original anatomical identity

**Decision.** Use six canonical presentation stages-lungs, intestine, marrow, liver, brain, and
tumor-with one readonly palette and heading owner. Keep each organ backdrop as an original static
SVG behind play. Use the shared pure tissue surface API for organic foreground architecture and
state responses. In reduced motion, decorative movement stays static while actual mechanisms and
their state feedback continue.

**Why.** Organ silhouettes and palettes make the campaign feel like one living body. Static,
peripheral backdrops protect the routes and collision edges; state-linked foreground tissue adds
personality while keeping cooperation and puzzle cues first. Broad Barnsyverse inspiration informs
bold playful forms, while all game art remains original.

**Consequence.** `ORGAN_THEMES` in `src/anatomy.ts` owns the six names, headings, asset paths, and
palettes; `draw_tissue_surface` owns clipped organic surface rendering. Stable room IDs/order,
geometry, controls, timing, pad effects, attacks, and saves remain separate. Existing 23-room
difficulty findings remain bound to the previous visual source and cannot establish clarity under
this art. Their scores stay frozen; fresh first-pass and human-play evidence are needed for those
claims.

**Owner.** [src/anatomy.ts](../src/anatomy.ts), [src/types/anatomy.ts](../src/types/anatomy.ts),
[src/render_tissue.ts](../src/render_tissue.ts), and
[anatomical_world_acceptance.md](active_plans/reports/anatomical_world_acceptance.md).

### Separate expert difficulty estimates from human play evidence

**Decision.** Assess the 23 campaign rooms with paired first-encounter and source-informed expert
records. Keep actual player attempts as a separate observation stream. Rate puzzle reasoning and
cooperation separately from platforming execution, timing, and hazards; retain clarity, recovery,
and control friction as independent burdens. Represent insufficient evidence as `null`.

**Why.** Source knowledge and hindsight can change what an assessor notices. Locking a restricted
first pass before source review makes that difference inspectable, while actual novice outcomes
still require novice players. A single blended score would hide distinct causes such as an
interesting puzzle, confusing cues, or awkward controls.

**Consequence.** The rubric owns scoring and evidence rules, the typed contract owns record shape,
and the active plan owns execution status. The generated report carries the 23 source-informed
estimates; the findings explain cross-room judgments. Source-derived `expected_feedback` remains
separate from witnessed `observed_feedback`, which is `null` for unwitnessed route steps. A
scripted end state establishes feasibility, not each intermediate effect or human comprehension.
Fingerprint and numeric checks apply only to the developer assessment workflow, not game CI or
campaign ordering. A proposed order change requires a fresh novelty assessment. Do not claim
measured player outcomes without actual observations.

**Owner.** [DIFFICULTY_RUBRIC.md](DIFFICULTY_RUBRIC.md),
[devel/difficulty/types.ts](../devel/difficulty/types.ts), and
[active assessment plan](active_plans/active/difficulty_assessment.md); outputs are
[LEVEL_DIFFICULTY_REPORT.md](LEVEL_DIFFICULTY_REPORT.md) and
[DIFFICULTY_FINDINGS.md](DIFFICULTY_FINDINGS.md).

### Preserve emergent routes in Return to Sender

**Decision.** Allow clever alternate cooperative routes in stable `level_25`, Return to Sender.
A partner boost that bypasses RECEIVE is acceptable when the same sac still circulates and both
heroes contribute. Keep villain interference open to exploitation; do not add geometry or rules
solely to enforce the authored step order.

**Why.** The manager prioritizes fun, unpredictable play and meaningful cooperation. A scripted
route is a useful hypothesis, while emergent teamwork can make the room feel playful and personal.

**Consequence.** Judge routes by the shared-object circulation and both heroes' contributions, not
by exact step order. Keep the existing 24 room definitions and their relative order. Source and
integration status remain in the live [acceptance report](active_plans/reports/return_to_sender_acceptance.md).

**Owner.** `src/level_return_to_sender.ts`, `src/levels.ts`, and
[return_to_sender_acceptance.md](active_plans/reports/return_to_sender_acceptance.md).

Write each decision as a level-three heading with these four fields. `Owner` names the
authoritative code or contract document, rather than a person.

```markdown
### <decision title>

**Decision.** <the durable direction>

**Why.** <the reason it was chosen>

**Consequence.** <the constraint a future change preserves>

**Owner.** <the authoritative code or contract doc>
```
