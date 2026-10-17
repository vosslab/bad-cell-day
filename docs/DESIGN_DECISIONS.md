# Design decisions

<!-- VENDORED HEADER: START -->
Record each durable decision about how this code and repository are shaped, once it is settled, with
the reasoning a later reader needs. Guidance Neil Voss states belongs in
[HUMAN_GUIDANCE.md](HUMAN_GUIDANCE.md), dated history in `docs/CHANGELOG.md`, open discussion in
`docs/active_plans/decisions/`. [PROPAGATED HEADER - ENTRIES BELOW ARE YOURS]
<!-- VENDORED HEADER: END -->

### Add Cellpool Lane as level 43

**Decision.** Keep the corrected private Cellpool Lane trial with concerns and implement stable
`level_43` in liver after `level_30` and before `level_32`, preserving the existing 42 definitions
and relative order with `level_20` last. Root approved production addition on 2026-10-17 at
11:42:58 UTC.

**Why.** Corrected private normal and recovery replays, reciprocal gate probes, fresh SPEC, QUALITY,
and integration reviews, and root's independent four-case replay support the cooperative flight and
reciprocal exit paths. They do not establish human readability, fun, or difficulty.

**Consequence.** Production scope is one level module and roster registration, existing liver art,
the stable Pac exit floor extension, two optional sparks, and approved copy. No shared engine,
configuration, asset, or tool change is approved. Keep current41 difficulty evidence frozen and
retain the Level 3 lateral cause as unresolved.

**Owner.** The [Cellpool Lane production plan](active_plans/active/CELLPOOL_LANE_ROOM.md).

**Acceptance.** Root accepted the production milestone as `DONE_WITH_CONCERNS` at 2026-10-17
12:06:45 UTC after native and focused browser routes, code/build checks, both standard smokes, six
fresh QUALITY passes, and integration review. Human readability, discovery, fun, and difficulty
remain unmeasured; the current41 assessment remains frozen and does not include this room. See the
[acceptance receipt](active_plans/reports/CELLPOOL_LANE_ACCEPTANCE.md).

### Carry a standing passenger through carrier descent

**Decision.** In `move_players`, carry an actually standing passenger by the carrier's clipped
vertical displacement in either direction. Clip the passenger against their own solids; if a
descending obstacle shortens passenger travel, the carrier continues and the passenger releases.
Keep upward pair clipping and ordinary passenger walk/jump input. Add no attachment state or
tolerance.

**Why.** Grounded support was lost during ordinary jump descent because vertical carry applied only
to upward movement. The existing AABB contact and axis clipping primitives already express the
needed geometry and collision ownership.

**Consequence.** A focused whole-jump test covers both carrier roles. Scripted native traces verify
the descending obstruction and detachment paths; they do not diagnose the Level 3 bridge report or
establish human playability. See the [carry descent plan](active_plans/active/CARRY_DESCENT_FIX.md).

### Add Neural Misfire as a bounded campaign room

**Decision.** Keep the private Neural Misfire feasibility result `KEEP_WITH_CONCERNS` and implement
stable `level_42` as one additive campaign room after `level_31` and before `level_38`, preserving
all 41 earlier definitions and their relative order, with `level_20` last. Root approved production
implementation on 2026-10-17. Scripted native and built-browser evidence supports operation, and root
reviewed the original captures. Fresh integration accepts with concerns; root accepted the bounded
production milestone as `DONE_WITH_CONCERNS` at 2026-10-17 10:48:39 UTC.

**Why.** Private simulation establishes the cross-villain handoff and recovery under ordinary
inputs. Production native replay supports the room route, but does not establish rendered readability,
human discovery, enjoyment, or campaign balance.

**Consequence.** The source contains the room module and roster registration. Root accepted the
bounded room milestone with concerns. The agreed clear,
recovery, identity, and root-view gates are complete. New room-specific Next/save/reload/42-row-menu
checks remain unrun and are outside the required acceptance scope because navigation and persistence
code did not change. These limits do not close the continuous gameplay goal.

**Owner.** The [Neural Misfire production plan](active_plans/active/NEURAL_MISFIRE_ROOM.md).

### Keep the accepted current41 assessment as a frozen design baseline

**Decision.** Preserve the complete current41 two-pass assessment, map, and generated report as a
source/build-bound expert baseline. Root accepted it as `DONE_WITH_CONCERNS` at 2026-10-17 09:27:51
UTC after fresh QUALITY and integration reviews. First-pass records and locks remain unchanged.

**Why.** The paired records add room-specific source and route evidence to the locked idle-image
estimates. Keeping the capture frozen makes its comparison reproducible while the campaign continues
to change.

**Consequence.** The 41 first-pass platforming values remain unknown. Scores are ordinal estimates;
scripted routes establish feasibility, not human success, discovery, enjoyment, or shared-keyboard
comfort. Zero control-friction estimates do not establish physical keyboard comfort. Current38 stays
historical, and no scores are inherited. Later source changes, including bridge presentation work, do
not update this accepted baseline or justify rerunning its freshness check. See the
[acceptance report](active_plans/reports/difficulty_41_acceptance.md) and
[run ledger](difficulty_runs/current_41/README.md).

### Keep Friendly Fire optional and room-owned

**Decision.** Keep stable `level_41`, **Cana's Friendly Fire**, at intestine position 11 after
`level_07` and before `level_11`. Pac intentionally starts Gem's bubble gun; Isp FLOATs to the upper
latch to open Pac's lower route. Crossfire is optional. On either boomerang leg, actual contact gives
active pushable Gem one horizontal shove in the projectile's direction per complete flight. Existing
four-second acid return and Gem bubble lifecycle remain authoritative.

**Why.** The distinct routes make both heroes' jobs explicit, while crossfire adds an optional
interaction without becoming a required solution. The one-response rule preserves direction through
the return leg and uses the existing interference path without new persistent state.

**Consequence.** Root accepts the bounded milestone as `DONE_WITH_CONCERNS` after the focused test,
official build, 41-room native replay, fresh empty-save browser journey, targeted views, reviews, and
repository gate. These establish scripted operation and sampled rendered behavior only. Human
discovery, readability, enjoyment, and coordination remain unmeasured; the synthetic legacy40 save
diagnostic is not a real-user import. Current38 remains frozen historical evidence; the separate
current41 assessment now covers rooms 39-41.

**Owner.** The [Friendly Fire plan](active_plans/active/friendly_fire_room.md),
[current41 assessment plan](active_plans/active/difficulty_41_refresh.md), and
[gameplay direction ledger](active_plans/reports/gameplay_direction.md).

### Keep villain crossfire private pending a room trial

**Decision.** Set aside the tested return-left-only, two-flight candidate as a production design.
Retain only the causal possibility that villains can foil each other. Require a private full-room
go/no-go prototype before considering a production mechanic.

**Why.** The accepted private experiment shows the hook can cause a dunk after two returning hits,
but its payoff is delayed and it does not establish Isp's job, Gem bubble recurrence, a room clear,
or co-op quality. The original mechanic-only experiment assigned Isp no lane, so its conditional
FLOAT check did not trigger.

**Consequence.** Test a separate FLOAT-supported Isp route, actual jobs for both heroes, bubble
resumption, an ordinary clear, and idle safety in the private prototype. Root approved Phase A;
any production Phase B needs separate authorization and gates. This was the Phase A checkpoint;
the later Friendly Fire decision below records the separately approved and accepted production
room. No production mechanic or campaign change was approved at this earlier checkpoint.

**Owner.** The [private room prototype plan](active_plans/active/crossfire_room_prototype.md) and
[gameplay direction ledger](active_plans/reports/gameplay_direction.md).

### Anchor platform DNA texture to its target

**Decision.** Pass fixed phase `0` to the existing DNA motif renderer for platform targets. Keep
passing elapsed time for barriers and hazards. The pattern remains positioned inside the live target
rectangle, so a moving platform carries its texture.

**Why.** The traveling wave is a real visual motion cue that can suggest surface movement. The
bounded Level 3 observation did not identify what the user perceived, so this change improves that
cue without claiming to diagnose the report.

**Consequence.** Preserve motif geometry, clipping, colors, target edges, platform movement, bridge
grace, co-op, attacks, and physics. Root accepted this bounded change as `DONE_WITH_CONCERNS` after
the 92-check code gate, build, two standard smokes, served-bundle identity, four captures, and fresh
SPEC, distinct QUALITY, and integration reviews all passed with concerns. The 2s/3s comparison is
qualitative; no player-held view, wall-animation proof, or permanent branch test is claimed. The
reported physical or perceived motion remains unresolved pending human clarification or a concrete
reproduction.

**Owner.** The [surface texture anchor plan](active_plans/active/SURFACE_TEXTURE_ANCHOR.md) and
[gameplay direction ledger](active_plans/reports/gameplay_direction.md).

### Add Boneheads with sustained mutual support

**Decision.** Keep stable `level_39`, **Boneheads**, at brain position 32 after `level_27` and before
`level_35`. Build on level 30's grounded carry: Pac carries Isp while Isp maintains the high contact,
then Isp takes the upper route as Pac continues below. Use the fixed contact to reactivate the span;
do not describe it as a catch for falling heroes.

**Why.** The room develops level 30's carry into sustained mutual support, separates the two exit
routes, and places the brain room away from the liver carry rooms. Existing pad, carry, platform,
movement, jump, villain, and save contracts cover the route without a shared engine change.

**Consequence.** Preserve the other 38 enriched definitions and their relative order, with
`level_20` last. Keep scripted feasibility and built behavior separate from claims about human
readability, discovery, comfort, or enjoyment. SPEC, distinct QUALITY, and integration accept with
concerns; root accepts `DONE_WITH_CONCERNS`, noting the small Cana status-tag overlap on the bottom
exit rim as nonblocking. The room remains unassessed by players; the continuous gameplay goal remains
active.

**Owner.** The [Boneheads room plan](active_plans/active/BONEHEADS_ROOM.md) and
[gameplay direction ledger](active_plans/reports/gameplay_direction.md).

### Give late bridge retreats a modest grace window

**Decision.** Set stable `level_04`, **Bridge Over Troubled Slime**, `collapseAfter` to 1.2 seconds
from 0.8 seconds. Preserve the cooperative STEADY/RESCUE pads and gates, optional villain
acid-dunks, bridge geometry and reset, attacks, and controls. This is a modest tested grace
adjustment, not a mathematically minimal value or a fix for the unresolved reported side-to-side
motion.

**Why.** The ordinary-input probe found that a 1.6-second retreat died with 0.8 seconds but reached
the left bank with the cloned 1.2-second value; a 1.75-second retreat remained too late. Public
source replay confirms the ordinary cooperative clear and both optional villain dunks, four-second
returns, and cooperative clear. All 38 level definitions and their order differ only at this
numeric field.

**Consequence.** Keep the room unstable and retain its existing cooperative solution and optional
interactions. Root owns official build and browser acceptance; scripted simulation does not establish
human comfort, fairness, or enjoyment. The reported bridge motion remains unresolved, and the frozen
current38 assessment is unchanged.

**Owner.** The [Level 3 bridge grace plan](active_plans/active/LEVEL3_BRIDGE_GRACE.md) and its
[preflight and public replay evidence](../tests/_temp/level3_bridge_grace/REPORT.md).

### Show Level 3 bridge support state

**Decision.** Keep Level 3's unstable bridge and existing STEADY/RESCUE challenge, and use its
existing occupancy progress to show an interior bruise and progressive tears beneath a fixed landing
rim. Stabilization retains the green appearance; inactive and reset states follow existing behavior.
Keep the always-visible subtitle **"Pac holds STEADY until Isp reaches RESCUE."**

**Why.** The accepted 1.2-second grace and texture anchor did not explain the human report of lateral
motion or make the first-encounter cooperative instruction visible without opening a hint. The
state-derived presentation makes changing support clearer without changing gameplay contracts.

**Consequence.** Root accepts the bounded milestone as `DONE_WITH_CONCERNS` after fresh SPEC,
corrected QUALITY, integration, native route, build, smoke, and five-view browser evidence. An initial
pixel review prompted a focused warning-visibility correction. Scripted routes and captures do not
establish human comfort, readability, or reduced falls; reported lateral motion and fall frequency
remain unresolved. The accepted current41 assessment remains frozen to its pre-change source/build.

**Owner.** The [bridge readability plan](active_plans/active/BRIDGE_READABILITY.md) and
[acceptance report](active_plans/reports/bridge_readability_acceptance.md).

### Use current38 findings to select the next review direction

**Decision.** Root accepts the completed current38 assessment as DONE_WITH_CONCERNS and approves the
bounded [pad role cues plan](active_plans/active/pad_role_cues.md). It refines role-card wording in the
anatomical context and labels level 07's STEADY effect **STEADY BRIDGE / PARK FAR FERRY**, leaving
release timing for players to infer. Preserve geometry, controls, effects, and the release puzzle.
Keep the level 3 bridge-motion report unresolved; source without authored horizontal
motion does not disprove the reported experience. Treat a first-time Cargo Exchange observation as
useful evidence, not a general gate. Do not add a generic feedback framework, show the full solution
by default, or select a new room to fill a quota. Source implementation waits for current38 plan and
run README closeout; the captured source/build snapshot remains frozen.

**Why.** The current38 findings identify overbroad role-card language and Double Trouble's
hold-until-boarded release order as a source-backed cue opportunity. The assessment is ordinal expert
evidence, and human outcomes remain unknown. The bridge-motion report cannot be resolved by source
inspection alone.

**Consequence.** Keep the follow-on within existing role and pad behavior, preserve accepted rooms
and the finale, and do not create a generic feedback system or assessment gate. Fresh SPEC and QUALITY
accept with concerns; integration accepts with concerns and no material finding or drift; root accepts
current38 as DONE_WITH_CONCERNS. Source implementation waits until the plan and run README closeouts
are complete; its owner will synchronize the approved copy before implementation. This is a
sequencing dependency, not an additional human approval gate. The
[assessment receipt](active_plans/reports/difficulty_38_acceptance.md) records the
findings and limits. The [gameplay direction ledger](active_plans/reports/gameplay_direction.md)
tracks the selected plan.

**Owner.** The [current38 findings](difficulty_runs/current_38/FINDINGS.md),
[gameplay direction ledger](active_plans/reports/gameplay_direction.md), and
[current38 acceptance receipt](active_plans/reports/difficulty_38_acceptance.md).

### Add Jump to Conclusions under existing contracts

**Decision.** Keep the bounded native design with concerns and authorize production for brain
`level_38`, **Jump to Conclusions**, at position 34 between `level_31` and `level_29`. Preserve all
37 previous definitions and their relative order, with `level_20` last. Use the existing level,
recoil, barrier, physics, save, and configuration contracts; add no shared runtime contract. Use the
exact approved brain tissue asset, SHA-256
`1c4b95db1af1ed51ca86fa6d3a8443d3f4d00e624a4ba5aac3d5ba0bdb786f4e`.

**Why.** Native traces show a causal split, an Isp-held route that enables Pac's upper crossing, a
reciprocal Pac latch that opens Isp's route, and a floor convergence. They also record the corrected
short-gate bypass and a Cana-pressured miss/retry clear. The pattern differs from room 37's
own-return/return-to-help sequence.

**Consequence.** Keep production scope bounded to the new room and the approved renderer/build seam.
Run the single integrated gate `./check_codebase.sh`, followed by
`source source_me.sh && ./run_playwright_tests.sh --build`; the latter performs the official build
and two standard smokes. Human discovery, enjoyment, comfort, and reduced-motion behavior remain
unmeasured and are not production gates. Do not require a full campaign journey or difficulty refresh.
The plan and acceptance receipt own implementation evidence and remaining limits.

**Owner.** [Production plan](active_plans/active/split_launch_room.md) and
[acceptance receipt](active_plans/reports/split_launch_acceptance.md).

### Keep organ atlases at the renderer seam

**Decision.** Keep original brain, intestine, liver, and marrow surface art in one atlas asset per
organ, integrated at the existing renderer seam for active, horizontal, solid surfaces. The artist owns
each SVG; root accepts it against the shared atlas and landing-edge contract before source
integration. Preserve the authoritative platform clip, continuous top rim, and procedural fallback.
Reuse existing renderer and build seams; add no renderer mode or preview interface.

**Why.** Each bounded presentation gives active organ surfaces a distinct tissue cue while keeping
landing geometry and gameplay behavior under their existing owners. The fixed atlas contract serves
thin shelves and deep floors; the existing fallback preserves behavior when an image is unavailable.

**Consequence.** Limit integration to the existing render and build lists. Preserve geometry,
physics, controls, state, clipping, and fallback behavior. For Marrow's art-only fallback capture,
ordinary movement by one hero is sufficient; retain the deliberate failed request and matching
console event in the raw receipt. Each acceptance ledger owns its capture contexts, source/build
identities, evidence, disposition, and limits. Brain, intestine, liver, and marrow surface
milestones are accepted DONE_WITH_CONCERNS. Human readability, enjoyment, discovery, and comfort
remain unmeasured.

**Owner.** The [brain](active_plans/active/brain_tissue_architecture.md),
[intestine](active_plans/active/intestine_tissue_architecture.md),
[liver](active_plans/active/liver_tissue_architecture.md), and
[marrow](active_plans/active/MARROW_TISSUE_ARCHITECTURE.md) plans, with acceptance ledgers:
[brain](active_plans/audits/gameplay_and_brain_review.md),
[intestine](active_plans/reports/intestine_tissue_acceptance.md),
[liver](active_plans/reports/liver_tissue_acceptance.md), and
[marrow](active_plans/reports/MARROW_TISSUE_ACCEPTANCE.md).

### Isolate each difficulty assessment run

**Decision.** Require both developer CLIs to take `--run-dir` with a repo-relative path of the form
`docs/difficulty_runs/<lowercase_ascii_name>` for every assessment and capture command. Resolve
fixed snapshot, observation, record, lock, map, and report paths beneath that directory. For the
current 28-room reassessment, use `docs/difficulty_runs/current_28`.

**Why.** Historical 23-room artifacts must remain available without becoming the implicit write
destination for a new assessment. One required run directory gives both tools the same path owner
while preserving the existing roster, provenance, and scoring contract.

**Consequence.** Snapshot requires an absent or empty run directory; capture requires absent
`observations/`; locks remain immutable; and report generation replaces derived outputs only within
the selected run. Keep historical captures, records, locks, calibration, and published outputs
unchanged. The accepted 28-room run at `docs/difficulty_runs/current_28` is frozen with its
snapshot, capture, records, locks, map, report, dossiers, findings, and chart. Its milestone is
DONE_WITH_CONCERNS as a pre-Gem source snapshot; the later `level_16` change makes its source
freshness check stale by design. Preserve it as design input, not a current-source assessment or a
game-build gate. The acceptance ledger owns its status, and
[LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md) provides current artifact navigation. The approved D1
contract report contains the detailed implementation handoff;
its ignored temporary location is internal workflow context, not a published navigation target.

**Owner.** The CLI path contract in [run_paths.mjs](../devel/difficulty/run_paths.mjs),
[assess_difficulty.ts](../devel/assess_difficulty.ts), and
[capture_difficulty_observations.mjs](../devel/capture_difficulty_observations.mjs); workflow
status in [LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md).

### Implement the bounded Gem Lair choice

**Decision.** Apply approved D2/V1 to stable `level_16` at campaign position 21. Gem stands at
`(775,350)` and fires the existing automatic bubble attack with range 150. STEADY and RESCUE each
interrupt once before the attack recurs; normal boss success stops attacks. Replace the center robot
display with the existing glucose-organ SVG pump and draw one regular-scale canonical Gem. Reuse
existing target-pad and `bossDefeated` state. Preserve the ferry/bridge relay, all other 27 room
definitions, IDs/order, saves, physics, and shared types.

**Why.** The bounded comparison found optional useful FLOAT, ordinary clears without bubble contact,
and recovery after specific bridge collapse or missed-boost routes. Those actual-source traces
support trying this choice while preserving alternatives; they do not show universal recovery,
player discovery, or enjoyment.

**Consequence.** The implementation adds no Cana attack, objective, ledge, collision, asset, state,
type, shared scale, or weapon-pose framework. The fresh source SPEC accepts with concerns; the root
82-Node/TSC/lint gate, source-to-asset parity, and official build pass. The
[Gem Lair acceptance ledger](active_plans/reports/gem_lair_acceptance.md) owns smoke, browser, and
campaign evidence and live gates; this decision does not claim final milestone acceptance.

**Owner.** `src/levels_final.ts`, `src/villain_scenes_final.ts`, `src/render_game.ts`, and
`src/render_tumor_organs.ts`; acceptance evidence in the
[Gem Lair acceptance ledger](active_plans/reports/gem_lair_acceptance.md).

### Give Cana an anatomical signal display

**Decision.** Replace only the generic robot display in stable `level_19`, Cana's Control Freak-Out,
with an editable anatomical brain signal knot. Keep the single canonical Cana actor and his actual
returning boomerang; derive the existing target badges and defeated feedback from the current pad and
boss state. Preserve Gem16, the finale core, all room data, and every gameplay contract.

**Why.** The anatomical setting should carry through the boss display while Cana remains visibly
present as the live opponent. The signal knot fills the duplicate generic display seam without
adding a second Cana actor or another gameplay system.

**Consequence.** The original SVG and renderer are implemented, with a simple loading/failure
fallback. Isolated source checks and small-size render inspection are complete. The
[Cana encounter ledger](active_plans/reports/cana_encounter_acceptance.md) owns current validation
and acceptance status.

**Owner.** `src/assets/tumor_signal_knot.svg`, `src/render_tumor_organs.ts`, and
`src/render_game.ts`; acceptance in the [Cana encounter ledger](active_plans/reports/cana_encounter_acceptance.md).

### Preserve Cana's fixed aim in Control Freak-Out

**Decision.** Keep stable `level_19`'s authored fixed boomerang aim, Cana scene position, interruption
pads, geometry, and all 28 room definitions and their order. Do not apply nearest-hero aiming to
this encounter.

**Why.** The source comparison found that nearest aim misses Pac on the natural crossing where the
original shot produces the SHOVE and STEADY interrupt moment. In the ordinary nearest-aim relay,
RESCUE interrupts the later shot before release. The optional bait-and-dodge route required delaying
RESCUE and added roughly four seconds (17.11 versus 13.59) without a demonstrated stronger partner
choice. Preserve the original route and its timing alternatives.

**Consequence.** The root selected KEEP ORIGINAL with DONE_WITH_CONCERNS. The source comparison
records route traces and limits in temporary evidence; no human discovery, enjoyment, or browser
result follows from those traces. The
[Cana encounter ledger](active_plans/reports/cana_encounter_acceptance.md) owns live evidence and
acceptance gates.

**Owner.** `src/levels_final.ts` and `src/villain_scenes_final.ts` remain authoritative for the
unchanged authored level and scene; the [Cana encounter ledger](active_plans/reports/cana_encounter_acceptance.md)
tracks the comparison and acceptance.

### Give Pac an intentional park and release in A Meeting of Minds

**Decision.** Update the existing `level_18` so Pac uses PARK to stop and position its naturally
powered shelf, stabilize the lower bridge, and open the upper DNA gate. Releasing PARK sends Isp
forward; reholding permits early park/resend and recovery through the lower bridge. Isp latches
RESCUE to open Pac's stairs. Preserve the other 27 room definitions, all 28 stable IDs and their
order, chapter boundaries, and save behavior.

**Why.** Replace Pac's passive wait on POWER with a deliberate route handoff using existing pad,
power, and latch behavior. The main route and bounded alternatives keep both heroes active without
changing shared engine contracts.

**Consequence.** Production replays through the actual registry match all final states and events;
SPEC and QUALITY accept, the root code gate passes, and the official build and permanent smokes
pass. QUALITY and the root review normal/reduced-motion and recovery images without a blocker. All
six focused browser cases pass with a bounded ordinary left-exit continuation; browser acceptance
is DONE_WITH_CONCERNS, its helpers are archived, and port custody is closed. The initial route
failure remains preserved. Adapted campaign attempt 02 passes all 28 rooms, Replay reload,
Trial/reset/isolation, and genuine prior-save compatibility; its helper archive and port custody are
closed. Full Python passes 1,984 tests after archival. Fresh integration ACCEPTS WITH CONCERNS
without blockers; the manager accepts this milestone as DONE_WITH_CONCERNS after reviewing runtime
evidence and seven actual normal/reduced/recovery images. The build pins remain frozen. No permanent
layout-specific test was added; actual-registry replays and product acceptance lanes cover the
authored room. The far gate/exit/pad cluster is dense but readable; human enjoyment, discovery,
paired comfort, and current numeric difficulty remain unmeasured. See the
[active partner acceptance ledger](active_plans/reports/active_partner_acceptance.md).

**Owner.** The level-18 blocks in [src/levels_final.ts](../src/levels_final.ts) and
[src/villain_scenes_final.ts](../src/villain_scenes_final.ts); acceptance evidence in
[active_partner_acceptance.md](active_plans/reports/active_partner_acceptance.md).

### Keep committed nearest-hero aim local to Attention, Please!

**Decision.** Add stable `level_27`, **Attention, Please!**, after `level_22` and before
`level_19` at campaign position 25. The no-pad cargo route lets Pac drop a signal sac for Isp to
climb while Pac's natural movement draws Cana's attack. In this room only, Cana snapshots the
nearest hero when the yellow warning begins and holds that aim through the throw and return. Keep
other rooms on authored static aim. B4 widens the upper bait perch to support an ordinary leftward
dodge. Preserve the previous 26 room IDs and relative order, and save schema v1.

**Why.** The room explores whether a partner can use a committed attack to support a distinct
physical route without adding a pad or new physics. The earlier floor-Cana route did not show a
useful retreat decision; the upper route keeps Isp's cargo work and Pac's movement concurrent.

**Consequence.** The B4 source, official build, smoke, fresh SPEC, five focused browser cases, fresh
27-room campaign, and full-Python suite pass. Focused review is DONE_WITH_CONCERNS without a
blocker. Fresh QUALITY accepts with no blockers or drift. Fresh integration ACCEPTS WITH CONCERNS
without blockers; the manager accepts the milestone as DONE_WITH_CONCERNS. The acceptance ledger
records evidence and limits. Initial warning/weapon crowding remains a nonblocking concern. Scripted
routes do not establish human enjoyment, discovery, paired-play comfort, or numeric difficulty.

**Owner.** `src/level_attention_please.ts`, campaign registration and nearest-aim runtime; see
[baited_boomerang_acceptance.md](active_plans/reports/baited_boomerang_acceptance.md).

### Let Pac rebound from a bubble's gold top

**Decision.** On any bubble, an eligible airborne Pac rebounds with the ordinary jump impulse when
he is descending onto the gold upper cap and the sampled contact is approaching. Mark Pac hit once
and preserve that bubble on its original fixed path so Isp can later catch it for FLOAT. Other Pac
contacts retain their existing behavior, including side STICKY. Add **Two for One** as stable
`level_28` at position 19, after `level_26` and before `level_15`; preserve the previous 27 room
definitions, their relative order, and save schema v1. Same-flight completion is not a requirement.

**Why.** A recurring villain attack can create a controllable opportunity that changes what both
heroes can do with one visible projectile. A failed catch has ordinary recovery, and later bubbles
remain available; random targeting or a new timing gate is unnecessary.

**Consequence.** Existing `hitPlayers` records Pac's one use. Isp's later FLOAT consumes the same
flight; ordinary side contacts, immunity, endpoint expiry, and recovery rules remain in their
existing owners. The gold cap, retained-flight accent, legend, and Gem reaction derive from the
existing hit marker; no new state, timer, effect, or audio event is added. The source checks, build,
SPEC, and 28-room campaign pass. QUALITY accepts with concerns and no blocker. The six-case focused
browser lane is DONE_WITH_CONCERNS; its evidence custody is closed. Three recovery steps account
for 16-32 ms browser-clock quantization, with raw traces preserved. Full Python passes. Fresh
integration ACCEPTS WITH CONCERNS without blockers, and the manager accepts the milestone as
DONE_WITH_CONCERNS. Scripted results do not establish human discovery, enjoyment, paired comfort,
or difficulty. See the
[living puzzle acceptance ledger](active_plans/reports/living_puzzle_acceptance.md).

**Owner.** [src/interference.ts](../src/interference.ts),
[src/level_two_for_one.ts](../src/level_two_for_one.ts),
[src/levels.ts](../src/levels.ts), [src/render_interference.ts](../src/render_interference.ts),
[src/render_villains.ts](../src/render_villains.ts), and [src/app.tsx](../src/app.tsx).

### Allow authored weapon-only villain scenes

**Decision.** Allow a room's authored villain scene to have no puzzle schemes when its real weapon
attack supplies the intended interaction. Retire only the validator's per-villain nonempty-scheme
quota. Keep actual scene and attack references, authored scheme target/counter checks, attack range,
boss, counterweight, stable-ID, and campaign validation.

**Why.** The historical [recurring-villains plan](archive/recurring_villains_plan.md#L150) required
two schemes per villain at lines 150-155 while explicitly excluding weapons at line 42. Two for
One's real Gem bubble is its causal interaction; labeling a static shelf as a fake Cana energy gate
would describe machinery that does not exist. The manager approved the narrow retirement.

**Consequence.** Weapon-only scenes need no invented target or replacement quota. Keep the
historical rule and its explicit retirement visible; this is a settled change, not accidental
validator cleanup. The production import and malformed-reference probes pass. Evidence and limits
are in the [living puzzle acceptance ledger](active_plans/reports/living_puzzle_acceptance.md).

**Owner.** [src/levels.ts](../src/levels.ts) and the
[historical recurring-villains plan](archive/recurring_villains_plan.md).

### Make responsive sound optional and state-linked

**Decision.** Use optional responsive sound across the shared runtime for actual hero, mechanism, villain,
collectible, death, cooperative victory, and finale transitions. Keep existing rooms and their order,
visual feedback, and game rules. Start new progress muted; normalize absent or invalid
`soundEnabled` values to false while retaining saved booleans and earned records in the existing
schema. Provide one visible Sound off/on control whose `aria-pressed` value reflects enabled state.
Runtime owns the trusted document-click and accepted-keydown gate; an enabled visible control may
initialize or resume audio, including turning sound on before Play. A saved enabled value alone does
not create a context at boot, and cues remain silent until gameplay transitions. Simulation updates
and `start_level` do not create or resume contexts. Keep DOM events out of public controls and use
no audio event bus. Cancel queued and active audio on pause, hidden page, mute, retry, or disposal.

**Why.** Before this change, the accepted 26-room campaign persisted `soundEnabled` without sound.
State-linked cues make its cooperative responses audible without adding music, game
rules, or frame-by-frame noise. The classroom-oriented
[FUN_VIBES_DESIGN_STYLE.md](FUN_VIBES_DESIGN_STYLE.md) specifies sound off by default and a
persisted mute control.

**Consequence.** Audio remains optional, unavailable audio cannot stop play, and resuming produces
no stale backlog. The accepted audio surface is `GameAudio.set_enabled`, `unlock`, `reset`,
`update`, and `dispose`; `RuntimeControls` exposes only `toggle_sound`. Cues reflect state
transitions rather than continuous simulation. Fresh integration accepts with concerns and no
product blocker; the manager accepts the milestone as DONE_WITH_CONCERNS. The build, browser
evidence, and remaining limits are recorded in
[living_sound_acceptance.md](active_plans/reports/living_sound_acceptance.md). Human enjoyment,
paired-play comfort, and physical listening remain unmeasured.

**Owner.** Shared audio runtime and preference contract; acceptance evidence in
[living_sound_acceptance.md](active_plans/reports/living_sound_acceptance.md).

### Prioritize reciprocal cooperative routes

**Decision.** After acceptance of the 24-room pressure milestone, prioritize new
cooperative gameplay with distinct routes and reciprocal contributions over generic assessment-run
configuration or extra attack-state explanations. The manager's next design priority is level 25,
using existing mechanics and fair recovery; introduce engine types or configuration only if
feasibility demonstrates the need.

**Why.** The accepted pressure milestone is complete, while the ongoing goal is to improve the
gameplay. Distinct routes give both partners consequential work; assessment refresh remains useful
future work, and the 23-room difficulty records remain historical.

**Consequence.** This direction led to the level-25 and level-26 additions. The later responsive
sound decision records the current milestone priority. Do not claim a new current-campaign
difficulty assessment from this earlier decision. The canonical acceptance report remains the
owner of the pressure milestone's counts and limits.

**Owner.** Manager priority; living direction in
[gameplay_direction.md](active_plans/reports/gameplay_direction.md).

### Bubble Bouncer keeps interception optional

**Decision.** Select the compact Bubble Bouncer for additive stable `level_26` in the liver, after
stable `level_14` and before `level_15`. Gem's shot uses range 450 and speed 260. Isp holds the
doors while Pac may intercept the shot, become STICKY, and jump to the exit perch so Isp can FLOAT
through. A fast cooperative dodge may clear the far gate before an unblocked shot reaches Isp, but
a full fast-dodge route is not verified. Preserve the potential alternative and do not add barriers
or timing pressure to require catching. Translate all local x-coordinates by -150 while keeping the
world and full floor fixed. Shrink HOLD from width 100 to 60, keeping its new left edge at 450. Use
the prototype subtitle and a source hint that tells Pac to jump onto the shelf before its far end.
Aim the bubble endpoint at x=450, matching HOLD's left edge, so Isp can receive FLOAT at the tested
left-edge position without exceeding the attack range.

**Why.** B1 selects the compact, slower shot over the initial 800/600 hypothesis. The frozen
fixture's 6.800-second main route, 8.992-second missed-landing recovery, and 10.480-second early-
jump recovery pass independent replay; all 25 serialized baseline definitions and their order
match. Interception demonstrates shielding, while timing necessity remains unproven. The 60px HOLD
ends at x=510, keeping every valid Isp overlap body below x=540 and clear of the upper route at
x=550; the main route still holds at x=501.2. This prevents the former wide pad's upper-ledge
overlap and FLOAT bonk. B3 found that the original target at x=470 left a 16.08px gap from Isp at
the left HOLD edge, so no FLOAT arrived through 11.2s. The frozen target x=450 delivers FLOAT at
4.080s, reaches the upper route at 5.808s, and completes at 7.120s from that edge position. All
active HOLD horizontal positions are covered by the path from x=450 through x=881. Actual travel is
431px within the 450px range; all three original routes still pass. The bridge-collapse prototype's
11.712-second main route recovers from a real SHOVE, but a later recovery leaves both heroes below
and requires Retry; its STEADY-to-RESCUE relay also repeats many existing rooms, so it is deferred.

**Consequence.** Keep the behavior room-local and use existing mechanics and types; no engine
contract change is needed. Stage the room as a safe comic breather after the bomb room and before
team cargo. Keep Gem's 99px sprite and 158px status box inside the canvas by shifting local
geometry, not the world or full floor. Preserve all 25 existing room definitions and relative
order. The prototype report is raw `FEASIBLE_WITH_LIMITS` with canonical handoff
DONE_WITH_CONCERNS. The production module and roster are frozen, and canonical source checks pass.
Fresh SPEC independently replays the routes and confirms the prior room definitions and transforms;
SPEC and distinct QUALITY ACCEPT, with no blockers. The official build and
unchanged permanent browser tests pass on retry after a sandboxed Chromium launch failed before test
bodies. Five focused normal/reduced browser cases pass with no page/console/request errors. The
accepted reduced-motion capture is in [bubble_bouncer.png](screenshots/bubble_bouncer.png). Faces,
status, and landing rims remain readable; minor Pac/Gem art overlap at the shelf is nonblocking.
No engine/type contract or permanent test was added. The fresh 26-room journey completes in exact
order, earns 26 Replay entries, and reloads identical progress with no app/page/resource errors.
The separate reduced-motion capture documents that mode only. Fresh integration ACCEPTS WITH
CONCERNS, with no blockers; the manager accepts the milestone as DONE_WITH_CONCERNS. A complete
fast-dodge route, human enjoyment/discovery, paired-play comfort, and current 26-room difficulty
remain unverified. Continuous game development remains ACTIVE.

**Owner.** Manager B1; evidence and accepted status in
[bubble_guard_acceptance.md](active_plans/reports/bubble_guard_acceptance.md).

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
tuning. Historical acceptance for the earlier 24-room pressure milestone records its 24 focused
browser cases, four isolated-trial journeys, normal-motion campaign, integration, and manager verdict
in [recurring_villain_pressure_acceptance.md](active_plans/reports/recurring_villain_pressure_acceptance.md).
That evidence does not establish the status of later Marrow work. The approved Marrow pilot adds one
BLUE-interruptible Cana boomerang to level 11 Split Decision, labels automatic latches `STAYS ON`, and
cues level 10's ride-first route. Its evidence and status belong to the
[recurring Marrow plan](active_plans/active/recurring_marrow.md).

**Owner.** [src/types/interference.ts](../src/types/interference.ts),
[src/interference.ts](../src/interference.ts), [src/weapon_pose.ts](../src/weapon_pose.ts), and
[recurring_villain_pressure.md](archive/recurring_villain_pressure.md).

### Partner poses derive from support

**Decision.** Select the paired carrying/riding SVG poses from current valid runtime support,
with static reduced-motion output and legible base-art fallback while images load or fail. Keep
normal-state canonical art and physical feet, footing cues, collision bodies, controls, and saves.
For movement, a grounded rider in actual `stands_on` contact inherits one collision-clipped
horizontal carrier displacement against both heroes' personal solids and crates. Rider input remains
relative; a rider may walk or jump away. Add no state, types, configuration, support graph, or
platform-to-hero stack propagation.

**Why.** Clear partner silhouettes and faces should come from presentation while the established
support and movement rules remain authoritative.

**Consequence.** Composition B, implementation, fresh SPEC, and distinct QUALITY pass. Six
selector checks, 40 pixel-identical solo cases, actual normal/reduced FLOAT rides, and the final
11 geometry/terminal, eight temporal, and five loading scenarios pass. Synthetic matrices
establish bounded presentation behavior; ordinary routes establish built-game operability.
The existing 88-pixel art extends beyond its 36-pixel collision body and can overlap a ceiling
at top-hitbox contact. Keep that art/physics boundary explicit. Fresh combined integration and
explicit manager acceptance close the pose milestone as DONE_WITH_CONCERNS, recorded in
[active_plans/reports/recurring_villain_pressure_acceptance.md](active_plans/reports/recurring_villain_pressure_acceptance.md).
The cooperation ledger owns carrying/level30 validation and acceptance status; see
[active_plans/reports/cooperation_surprise_acceptance.md](active_plans/reports/cooperation_surprise_acceptance.md).

**Owner.** [src/physics.ts](../src/physics.ts), [src/character_art.ts](../src/character_art.ts),
[src/render_characters.ts](../src/render_characters.ts), [src/render_game.ts](../src/render_game.ts),
[src/level_your_turn_to_carry.ts](../src/level_your_turn_to_carry.ts), and
[tests/test_physics.mjs](../tests/test_physics.mjs), and
[partner_readability.md](archive/partner_readability.md).

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
without Solid. Pause/open and `start_level` own synchronous input resets at their
transitions; dialog-close delivery must not clear fresh movement asynchronously.
The narrow compiler configuration permits JSX compilation without changing the
simulation boundary.

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

**Decision.** Add campaign rooms with new stable IDs through the existing `LevelDefinition` and
campaign/save contracts. The current approved addition is `level_33` **No Takebacks** at brain
position 31, after `level_29` and before `level_19`; `level_20` remains the tumor finale at position
33. Preserve all prior room definitions, scenes, stable IDs, and relative order. Keep save schema v1
and its existing predecessor-based unlock behavior.

**Why.** Additional upper/lower and inward/return routes can develop reciprocal
cooperation while preserving existing useful rooms. Stable IDs preserve earned
achievements as campaign positions change.

**Consequence.** The roster is now planned at 33 rooms: new `level_33` occupies position 31,
`level_19` moves to position 32, and `level_20` remains last. Stable-ID insertion preserves earned
progress and the established unlock rule. For No Takebacks, reuse existing controls and mechanics.
R1 clears ordinary, fall/re-entry, and quick retry but fails a delayed blocked-cargo retry. Root
approved one static return-stop at x180/y367 (12x34); R2 authored-source replay clears all four
routes. R2 integrated/route/save checks pass; its observer concern is logged. SPEC, QUALITY, and integration accept with concerns. Root accepts DONE_WITH_CONCERNS. Add no engine/type/state/options or permanent
tuning/label tests. Browser readability, fairness, discovery, and enjoyment remain unproven. The
[No Takebacks ledger](active_plans/active/next_coop_expansion.md) owns implementation and acceptance
evidence; the [living decisions ledger](active_plans/reports/living_decisions_acceptance.md) retains
its prior trial history.

**Owner.** [src/levels.ts](../src/levels.ts),
[src/level_split_relay.ts](../src/level_split_relay.ts),
[src/level_crossed_paths.ts](../src/level_crossed_paths.ts),
[src/level_knock_it_off.ts](../src/level_knock_it_off.ts), and
[src/save_load.ts](../src/save_load.ts).

### Add Bursting Point as one isolated liver room

**Decision.** Add stable `level_40`, **Bursting Point**, after `level_13` and before `level_24` at
new display position 19. Preserve the 39 existing enriched definitions, scenes, and relative order;
keep `level_20` last. Own level and scene data in `src/level_bursting_point.ts` and registration/order
in `src/levels.ts` only.

**Why.** The accepted private experiment supports Pac's roof load opening Isp's upward FLOAT route,
including one scripted recovery after a premature FLOAT. Root selected this as a short variation
after the first useful FLOAT, with separate exits and the existing Gem recurrence.

**Consequence.** The bounded production milestone is accepted `DONE_WITH_CONCERNS`: native routes,
built-browser clear and recovery, progression/save/replay, production SPEC, six fresh QUALITY passes,
integration, and root visual review pass. The [BURSTING_POINT_ROOM.md](active_plans/active/BURSTING_POINT_ROOM.md)
records the plan, evidence, and disposition.
Do not transfer private timings. Keep `level_39` and `level_40` difficulty-unassessed; the frozen
current38 assessment does not score the live 40-room order. The accepted 39-room full journey is
historical evidence, not a full 40-room journey. Human readability, discovery, comfort, and enjoyment
remain unmeasured. No shared engine, type, physics, renderer, save, option, or permanent tuning-test
change is included.

**Owner.** [BURSTING_POINT_ROOM.md](active_plans/active/BURSTING_POINT_ROOM.md),
[src/levels.ts](../src/levels.ts), and `src/level_bursting_point.ts`.

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
On both flight legs, Cana's boomerang nudges authored light cargo by actual horizontal travel with
existing world, hero, and cargo clipping. Heavy cargo and in-flight bubbles remain unchanged.
Each Gem release retains its pre-move origin/target; an optional platform derives Gem's visual and
future muzzle points without adding impulse or projectile state.

**Why.** Shared attack geometry keeps warning, weapon, projectile, and catch positions aligned.
Authored safe lanes and existing cooperative controls make interference part of each puzzle while
preserving its movement and recovery routes. The boomerang also becomes a reusable cargo tool.

**Consequence.** The opening sequence is `level_02`, `level_01`, `level_04`, `level_03`,
`level_06`, `level_08`, `level_05`, and `level_07`; five existing later attack rooms remain. Source
and browser routes establish behavior; Cana stays authored. Gem's attachment changes only its
derived visual and future launch point, without a collision body or locomotion. Stable `level_32`,
**Bring Your Own Villain**, uses that attachment at position 18 in the liver, after `level_30` and
before `level_14`; the prior 31 room definitions retain their relative order. Human discovery,
enjoyment, and two-player coordination remain unmeasured; current room acceptance is tracked in the
ledger below.

**Owner.** `src/weapon_pose.ts`, `src/interference.ts`, `src/collisions.ts`,
`src/villain_position.ts`; status in
[moving_gem_acceptance.md](active_plans/reports/moving_gem_acceptance.md).

### Give each campaign chapter an original anatomical identity

**Decision.** Keep six canonical presentation stages-lungs, intestine, marrow, liver, brain, and
tumor-with one readonly palette and heading owner. Render connected organ masses with native Canvas
paths in `src/render_tissue.ts`, adapting to shallow shelves and tall walls inside fixed collision
rectangles. Keep the landing tread continuous at the exact collision top, and preserve state cues
and caller readouts. Use existing palettes; add no per-level configuration or assets.

**Why.** Organ silhouettes and palettes make the campaign feel like one living body. Static,
peripheral backdrops protect the routes and collision edges; state-linked foreground tissue adds
personality while keeping cooperation and puzzle cues first. Broad Barnsyverse inspiration informs
bold playful forms, while all game art remains original.

**Consequence.** `ORGAN_THEMES` in `src/anatomy.ts` owns the six names, headings, asset paths, and
palettes; `draw_tissue_surface` owns clipped organic surface rendering. Stable room IDs/order,
geometry, controls, timing, pad effects, attacks, and saves remain separate. The frozen current29
assessment remains bound to its pre-art source/build. Root accepts this later renderer/input delivery
for local gameplay WITH CONCERNS on its pinned final identity; the mandatory host gate and all-gates/
release acceptance remain open. See the
[organic tissue acceptance ledger](active_plans/reports/organic_tissue_acceptance.md). Root accepts
the frozen assessment content; its separate host gate and promotion remain pending.

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

### Improve level 01 boarding and pacing

**Decision.** Redesign the existing `level_01` boarding and pacing without adding a room or changing
campaign order. Keep its glucose RESTORE pad attached as an `any` latch with `minWeight: 2`, retain
its current effects, and use an 8-second lift period. Preserve all 26 stable room IDs and shared
engine, audio, runtime, and save behavior. Use the local RESTORE rectangle selected by O2:
`{x: 20, y: -8, width: 160, height: 8}`.

**Why.** The opening needs a cooperative boarding decision without a long scripted wait. A faster
lift cycle alone can leave before distant Isp boards. The joint pad and ordinary side reboarding
keep both heroes involved and preserve recovery after a fall.

**Consequence.** Keep changes authored in level 01 data and its dialogue. The full-width RESTORE
pad causes early edge contact while Isp ascends. The selected inset first contacts Isp during
descent using normal pad semantics. Once RESTORE latches, the lift keeps running; preserve side
reboarding after a fall instead of requiring another activation. Do not add timing-only gates or
mechanisms. Exact probe timing and recovery details belong in the
[acceptance ledger](active_plans/reports/next_gameplay_acceptance.md). Scripted routes establish
operability, not human-play evidence or final milestone acceptance.

**Owner.** `src/levels_tutorial.ts`, `src/villain_scenes_tutorial.ts`, and the
[next gameplay acceptance ledger](active_plans/reports/next_gameplay_acceptance.md).

### Show Cargo Exchange delivery progress

**Decision.** Add a bounded central delivery panel derived from the existing `cargo_parked` pad's
`weight`, `minWeight`, `latched`, and `active` values. Show `0/2`, `1/2`, then delivered/released;
keep the panel separate from HUD sparks and visible when Pac obscures the floor label.

**Why.** One AI first-use probe mistook Pac's arrival and a spark increment for delivery. Native
engine evidence proves the baseline route clears and recovers from a bad unload, so this feedback
change addresses the observed ambiguity while preserving the working geometry and physics. This
probe does not establish a human usability problem.

**Consequence.** Keep existing clutch, rider, load, and stop readouts. Change presentation only; add
no gameplay data, order, geometry, physics, state, types, options, or helper framework. Implementation
uses the existing canonical header and villain-speech avoidance bounds, with no caller or type change.
Keep shared nutrient-sac grips neutral and bilateral. In Cargo Exchange, derive grounded side reach
from the shared `PUSH_CONTACT_REACH`, and draw its interaction overlay after player overlays and
before interference effects. Keep PUSH SIDES and gate-state tags tied to existing live state.
The [Cargo Exchange acceptance ledger](active_plans/reports/cargo_exchange_acceptance.md) owns live
validation status.

**Owner.** [Cargo Exchange acceptance ledger](active_plans/reports/cargo_exchange_acceptance.md).

### Add Changing Places with a bounded recovery revision

**Decision.** Add stable `level_29`, **Changing Places**, after `level_27` and before `level_19`,
keeping the existing 28 IDs in relative order and `level_20` last. Preserve the one-sac role swap,
repair the reviewed left-wall recovery geometry, and retain Cana's original `(630,515)` actor and
existing boomerang for browser review.

**Why.** The room gives both heroes consequential counterweight and cargo roles. Independent source
review found one plausible alternate-order sac softlock and a pause-versus-dodge choice with the
original Cana setup. The narrowly scoped geometry revision addresses the demonstrated softlock
without raising Cana or forcing attack hits.

**Consequence.** Keep the change in level data; add no shared mechanic, state, type, or attack quota.
Production routes, build, browser, full campaign, old-save compatibility, Trial isolation, SPEC,
QUALITY, integration, and root acceptance are complete as DONE_WITH_CONCERNS. No difficulty score is
selected; preserve the frozen `current_28` record. The
[Changing Places ledger](active_plans/reports/changing_places_acceptance.md) owns evidence and
nonblocking concerns.

**Owner.** The [Changing Places acceptance ledger](active_plans/reports/changing_places_acceptance.md)
owns delivery evidence and limits; `src/level_changing_places.ts` and `src/levels.ts` own production
data.

### Gut Instinct adds a two-route handoff

**Decision.** Add stable `level_34`, **Gut Instinct**, after `level_08` and before `level_05`. Keep
the original 33 room definitions and their relative order, with `level_20` last. Use one movable
ordinary sac for Upper or Lower Flow; Isp owns the upper route and Pac the lower route, while either
hero may operate the sac and either owner latch may be first. Each latch secures its own route and
opens the partner's exit. Gem's recurring upper-route bubble uses the existing one-time interruption
and resume behavior.

**Why.** Native ordinary-input traces show both first-latch orders, both cargo operators, and the
occupied-gate retreat, reopen, and full-clear route. Low 20px bay stops prevent the reproduced wall
cargo trap, while exposed stairs remove the reproduced ceiling obstruction. These traces support
simulation feasibility, not human comfort, enjoyment, or novice suitability.

**Consequence.** Keep the room within existing level-data, physics, save, and campaign contracts;
add no engine, type, state, control, or configuration behavior. The frozen `current_32` assessment
stays unchanged and does not score this room. Fresh SPEC, QUALITY, and integration reviews accept;
root accepts the milestone as DONE_WITH_CONCERNS. Human fun, novice suitability, and two-person
comfort remain unmeasured.

**Owner.** [src/level_two_lane_fork.ts](../src/level_two_lane_fork.ts),
[src/levels.ts](../src/levels.ts), the [Gut Instinct plan](active_plans/active/two_lane_fork.md),
and the [Gut Instinct acceptance report](active_plans/reports/two_lane_fork_acceptance.md).

### Pick On Someone Else routes cargo through Cana's target

**Decision.** Place stable `level_35`, **Pick On Someone Else**, at brain position 30 after
`level_27` and before `level_31`. Cana's committed nearest-hero target determines the cargo route;
the partner selects the corresponding receiver, steps away after the sac passes to catch its return,
then crosses to KEEP. Push the parked sac toward the middle and trade jobs. Require the cargo receiver
and owner latch for the corresponding exit. Keep the 150px sac clear of the closed return gate.

**Why.** Native evidence supports the two target directions, recovery, and a full reciprocal clear
with actual hits and bounded shortcut checks. The authored solution uses existing geometry and
rendering contracts; it adds no engine behavior.

**Consequence.** Keep the behavior in `level_35` and existing geometry/rendering contracts. The
shared plaque layout keeps the default row where it fits and uses secondary rows 17px apart with a
short connector on collision. The 35-room campaign preserves prior rooms' relative order and
`level_20` as finale at position 35. The frozen 32-room expert assessment remains unchanged and does
not score this room. Root accepts the milestone DONE_WITH_CONCERNS; one capture has an actor partly
covering Pac's OPEN LEFT label while on the pad, which root accepts as nonblocking. Human discovery
and enjoyment remain unknown. See the acceptance ledger for evidence and limits.

**Owner.** [src/level_cana_switchboard.ts](../src/level_cana_switchboard.ts),
[src/levels.ts](../src/levels.ts), the [Cana Switchboard plan](active_plans/active/cana_switchboard.md),
and its [acceptance report](active_plans/reports/cana_switchboard_acceptance.md).

### Double Trouble uses a brake-board-release handoff

**Decision.** In `level_07`, Pac uses STEADY to brake the far ferry while Isp boards; releasing
STEADY carries Isp toward RESCUE. Keep the first ferry, shared engine, Cana's recurring attack, and
the accepted `level_29` room unchanged.

**Why.** Native input evidence shows that release changes the ferry route and that early release,
delayed release, missed boarding, and island retreat can recover. The source-blind first-use run did
not reach either far half, so it does not establish comprehension or enjoyment.

**Consequence.** Keep the change in the existing `level_07` room and villain-scene data. No shared
physics, state, or campaign ordering change is needed. The acceptance ledger tracks validation.

**Owner.** `src/levels_middle.ts` and `src/villain_scenes_middle.ts` own the room data. The
[campaign momentum ledger](active_plans/reports/campaign_momentum_acceptance.md) owns acceptance.

### Keep A Little Push within existing mechanics

**Decision.** Place stable `level_36`, **A Little Push**, in marrow after `level_21` and before
`level_13`, preserving all 35 earlier room definitions and their relative order and keeping `level_20`
last. Use distinct sealed upper Isp and lower Pac routes: Isp supports Pac's landing, Cana's actual
right-going SHOVE extends Pac's ordinary jump, and OPEN ISP frees Isp after the far landing latches.
A lower return fold supports a missed-jump retry.

**Why.** This gives the heroes distinct route duties and makes Cana's existing attack a timed
opportunity, extending cooperative route play with current mechanics.

**Consequence.** Add no mechanic, state, type, option, asset, or permanent test. The corrected bounded
native sweep covers one no-boost direct approach; native success and retry replay do not establish
human enjoyment, comprehension, current-map difficulty, or exhaustive routes. The far landing has
about 12-16 px overlap, a tight timing and landing margin. Root accepts the bounded milestone as
DONE_WITH_CONCERNS after focused source, native, build, smoke, served, browser, progress, and review
gates passed. The full 36-room journey, current-map difficulty, and human enjoyment remain
unmeasured. See the [A Little Push acceptance report](active_plans/reports/helpful_shove_acceptance.md).

**Owner.** The [A Little Push plan](active_plans/active/helpful_shove.md) and its acceptance report.

### Add one reciprocal lung-recoil room within existing physics contracts

**Decision.** Keep the bounded private recoil experiment with `DONE_WITH_CONCERNS` and authorize
production work for **Hold Your Breath** (`level_37`) immediately after `level_03`. The approved
contract uses same-platform standing contact by both heroes, one fixed `-730` vertical launch when
one releases, and a reciprocal owner latch that opens the launched hero's return path. Keep recurring
Cana active and use one static return fold to support missed or short reboard attempts.

**Why.** The private experiment and its SPEC, QUALITY, and integration reviews justified a bounded
production trial. Native production evidence now demonstrates sampled reciprocal completion and
retry while keeping bounded solo/no-joint controls from activating the mechanic; it does not show
human discovery or comfort. The one-way launch transition clears grounded, support, and coyote state
while preserving ordinary input; standing/coyote refresh is limited to non-upward motion to prevent
the reproduced fresh-jump overwrite.

**Consequence.** Add only the approved `recoil` platform kind and its room-local use. Reuse existing
physics and input behavior; add no force setting, persistent state, configuration, or permanent
disable. Native production routes now clear through the reciprocal exit sequence; the fresh-jump
route also clears, while bounded solo and no-joint controls do not. The miss/retry route completes
after Cana's SHOVE during joint contact causes an emergent release. The approved 300x80 tissue art is
integrated at the renderer seam. The source-verified 37-room positions are lungs at 1-5, intestine at
6-10, marrow at 11-17, liver at 18-26, brain at 27-36, and tumor at 37. Source comparison verifies
all earlier 36 room definitions and their relative order; `level_37` is after `level_03` and the
finale remains last. The initial `TS2591` lint failure was fixed by loading installed Node
declarations explicitly; the final canonical code gate passes. The integrated official build and
both standard smokes pass, as do built-source assertions and served asset parity. Focused browser
checks pass the ordinary clear, save/reload replay, all 36 legacy Replay entries, and finale-last
order, with zero deaths or browser errors. The fixed capture path tests normal motion only; the
SHOVE/miss/re-entry sequence is native-only evidence. Fresh production SPEC, QUALITY, and integration
accept with concerns and no blockers or plan drift. Root closed QUALITY's scope question: automatic
pad-plaque placement predates this work and is covered by accepted Cana Switchboard evidence; recoil
adds only its overlay and existing build-list entries. Root accepts this milestone as
DONE_WITH_CONCERNS. The continuous gameplay goal remains active. The frozen current36 assessment is
historical context, and no full-campaign journey or human enjoyment claim is required.

**Owner.** The [Hold Your Breath production plan](active_plans/active/LUNG_RECOIL_ROOM.md) and
[acceptance receipt](active_plans/reports/LUNG_RECOIL_ACCEPTANCE.md).

### Add optional villain pushes in level 3

**Decision.** Preserve the existing level 3 bridge challenge and let ordinary hero movement push
Gem and Cana into the acid when the room opts into pushable villain bodies. Keep the acid absence
temporary, retain Cana's existing weapon roster, and leave the STEADY/RESCUE cooperative clear
available without dunking. The room-specific placement and RESCUE-pad proposal is recorded in the
[level 3 acid-push acceptance report](active_plans/reports/level3_acid_push_acceptance.md).

**Why.** This answers the user's request for a playful way to push villains into the acid while
keeping recurring antagonists and the established cooperative route. The source describes an
unstable bridge, but no authored side-to-side motion; preserving the existing geometry does not
assert that the reported motion is present or prohibit future clarification.

**Consequence.** Adopted campaign data passes public `LEVELS` replay for both four-second returns,
Cana's resumed attack, and the no-dunk cooperative clear; the other 37 definitions and order remain
unchanged. Integrated build, standard smokes, source-current checks, and served identity pass. Seven
final built-browser views pass with zero deaths, retries, and browser errors, including both dunk and
ordinary no-dunk clears; root approved all inspected splash, return, and clear views. Browser timing
quantization exposed an initial no-dunk failure when Pac left STEADY before Isp reached RESCUE. The
successful route adds ordinary partner-aware movement and makes no source change. SPEC accepted
with concerns, and all six QUALITY passes are complete with no source or gameplay blocker; the
permanent lifecycle-test suggestion is deferred as a KISS maintenance tradeoff. Fresh integration
accepts with concerns and no blocker or plan drift; root accepts the milestone as DONE_WITH_CONCERNS.
Human fun, unaided discovery, the reported bridge motion, a full 38-room journey, and current
38-room difficulty remain unproven. No bridge gaps, altered geometry, timing, campaign order, save,
or room-count changes are included.

**Owner.** The [level 3 acid-push plan](active_plans/active/level3_acid_push.md) and
[acceptance report](active_plans/reports/level3_acid_push_acceptance.md).
## Clarify Split Decision with authored copy

**Decision.** Explain the level 11 stair's 5/3 cycle and that a latch powers the stair and opens the
partner's lane using only the existing subtitle and Cana opening. Preserve the route, mechanics,
player-selected sequence, joke, and full Hint.

**Why.** The accepted cue investigation found that the original opening named durations without
explaining the pause or the reciprocal latch effects. The source behavior already works.

**Consequence.** This is a local authored-text change only. It does not establish improved human
readability or justify changing the frozen current41 assessment. See the
[Split Decision cues plan](active_plans/active/SPLIT_DECISION_CUES.md).

---
