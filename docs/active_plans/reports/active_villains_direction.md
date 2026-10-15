# Active villains from Play

Status: ACCEPTED on 2026-10-15. The active-villains milestone is complete; continuous game
development remains ACTIVE. This acceptance does not measure human discovery, enjoyment, novice
difficulty, or two-player coordination.

This is the historical accepted 23-room milestone. The current 24-room campaign uses the later
one-way-start and once-per-pad-per-attempt interrupt contract in
[recurring_villain_pressure_acceptance.md](recurring_villain_pressure_acceptance.md).
Its recurring-pressure behavior supersedes the permanent-silence and release-to-disable wording
below; the original counts, artifact hashes, and route results remain historical evidence.
The later frozen build passes the fresh 24-room Play/Next campaign and save/reload; its archive
custody is verified. Fresh independent integration ACCEPTS WITH CONCERNS and explicit manager
acceptance closes that later milestone as DONE_WITH_CONCERNS. Continuous game development remains
ACTIVE. The later mandatory shared Podman disk-budget gate passes at the latest recorded
observation, so feature development may proceed again; see
[recurring_villain_pressure_acceptance.md](recurring_villain_pressure_acceptance.md) for the
command, result, and limits. Earlier failing observations remain historical.

Historical accepted candidate: source `a77ac47f9ead7750ea01ca652d44b0c9b76a6abe2b0cb24e5b5df1e6030f23b5`,
map `c31d54fe5d776f0443524f64d657e49af28e4e1a2df0d7b835207598e59faff0`; accepted 23-room
baseline `2e4b9aaa`. Source, closure, presentation and first-eight route reviews report acceptance.
The canonical 57 unit tests plus type/lint/format checks, production build, and two permanent
behavior tests (2.8 seconds) pass. Fresh Play plus 22 visible Next actions completes all 23 rooms with zero
retries, byte-identical saved-progress reload, all 23 Replay entries, 13 decoded SVGs, and zero
browser/resource errors. Targeted browser review records 30 complete journeys, two pause journeys,
3,471 matched normal/reduced states, all 13 SVGs decoded, and zero browser/resource errors.

The first eight authored attack encounters follow campaign order: `level_02`, `level_01`,
`level_04`, `level_03`, `level_06`, `level_08`, `level_05`, and `level_07`. With five retained
later attack rooms, this makes 13 of 23 campaign rooms. Existing geometry is preserved. Room 02
introduces both weapons with walking, a HOLD loss and door response, temporary recovery, and RESCUE
silence. Room 04 uses STEADY to power Cana's safe far-bank shot; RESCUE stabilizes the bridge and
Pac must leave STEADY to cancel Cana. Cancellation is not automatic. DIZZY slows horizontal input
to 55 percent without reversing it. Gem's final-room bubble range is 200 after fixture proof.
Door closure stays immediate and pad-owned; an overlapping body may exit only toward its nearer
separating face. Villains act from planted authored encounter origins, not roaming patrol AI.

Source route evidence: [tutorial_villain_routes.md](tutorial_villain_routes.md),
[middle_villain_routes.md](middle_villain_routes.md), and
[old_weapon_routes.md](old_weapon_routes.md). Browser artifacts are retained under local
`test-results/active_villains_browser/` and `test-results/active_villains_campaign/`; these ignored
output paths are code references, not repository links. Human discovery, enjoyment, and two-player
coordination have not been measured.
This contract implements the human's current priority: Gem and Cana visibly use their distinct
weapons from the first playable room and recur as meaningful cooperative interference. Stable
`level_02` is displayed first; `level_01` is second. A cosmetic two-room finish does not complete
this milestone. Finish the shared foundation, promote the opening encounter, then author and
verify the opening eight-room progression below. Existing later encounters remain part of acceptance.

## Evidence and boundaries

At the pre-milestone audit, attacks appeared in five of 23 campaign rooms, with none in the first
14 displayed rooms. The effects already worked: bubble gives Isp FLOAT
and Pac STUCK; boomerang gives Isp DIZZY and Pac SHOVE. Preserve their existing durations, immunity,
collision rectangles, and one-hit-per-hero-per-boomerang-flight behavior. STUCK is paralysis of
movement/jumping/pushing while gravity continues; presentation may say STUCK without renaming it.

The pre-milestone owning defect was shared: `interference_muzzle` hardcoded actor + `(35.2, -28.8)` for both
villains, gun art faces right regardless of target, attacking actors receive frozen generic lever
poses, and interference disables all dialogue. Existing attack state has cooldown/windup; its single
projectile owns outgoing/returning. Cooldown freezes during flight. Boomerangs return to their
immutable launch origin. Terrain does not block projectiles. These were pre-milestone source
findings, recorded before implementation, not descriptions of the accepted implementation.

At planning time, the environment milestone used frozen bundle prefix `2e4b9aaa`; its retained
source/artifact manifest and 23-room route evidence formed the baseline before production mutation.
Temporary opening prototypes remained feasibility evidence until rerun with final shared anchors and
the built artifact.

## Shared weapon contract

1. Add `src/weapon_pose.ts` as the pure, renderer-independent owner of weapon geometry and derived
   action. Export typed geometry and pose helpers, with their types in `src/types/interference.ts`.
   Both simulation and presentation consume this owner. Geometry supplies actor position, facing,
   shoulder/grip, authoritative release/catch anchor, aim angle, and effective endpoint. Pose adds
   action and normalized progress. It accepts explicit level/attack and simulation state as needed;
   it never reads Canvas, wall time, image loading, or mutable renderer state.
2. Derive facing from the authored target relative to the actor; exact horizontal equality uses
   right-facing. Mirror the anatomical hand placement with facing, then derive the aim angle from
   the resulting release anchor to the effective endpoint. Orient the gun barrel along that ray.
   Its muzzle tip is the simulation launch anchor. The throwing hand at release and catch is the
   boomerang's same launch/return anchor. Warnings use those same endpoints. Status positioning uses
   actor geometry directly, rather than undoing an obsolete hardcoded muzzle offset.
3. Use planted acting: lean, aim, windup, recoil, throw, watch, catch, and recover. Actor roots stay
   at authored scene positions throughout flight; return continues to the immutable launch point.
   Arm motion before release converges to the shared release anchor; catch converges to that same
   point. Decorative animation cannot displace a live launch/catch anchor. Actual patrol, locomotion,
   navigation, moving return targets, and terrain interception require a later ownership decision.
4. Derive ready/windup/outgoing/returning/silenced from existing phase, remaining time, eligibility,
   and the one projectile. Do not create another mutable flight phase or an event framework. A brief
   release/catch is otherwise lost between renders, so permit one optional per-attacker marker
   `{ kind: "release" | "catch", at: number }`, using simulation time. Record release on spawn and
   catch only on natural boomerang return, never cancellation. Derive short discharge/recoil/reload
   and catch/recovery windows from marker age and existing state; presentation durations are shared
   named constants, independent of render frames. Keep cooldown cadence unchanged.
5. Suppression clears pending action markers and projectiles, resets full cooldown/warning, and
   preserves already-applied hero effects. Retry, room creation, and trial creation initialize the
   marker absent. Pause freezes simulation action age. Boss defeat overrides weapon action. A new
   flight replaces the previous release marker; old catch/release poses cannot leak into re-enable.
6. Make bubble range a real contract. Use a discriminated attack definition: bubble requires a
   finite positive authored `maxRange`; boomerang retains its existing target-based long return
   route. Clamp the bubble endpoint on its aim ray to the nearer of target distance and maxRange.
   Warning, travel, expiration, and art use that one effective endpoint; target arrival still ends
   a bubble and first hero contact still consumes it. Validate the authored range centrally.
   Migrate all existing campaign/trial bubble definitions together, selecting bounded encounter
   ranges that preserve their intended reachable task with the final anchor. There is no arbitrary
   global pixel cap. New short bubble lanes must read as local sweeps beside Cana's longer lanes;
   an enormous authored range that merely preserves the old unlimited behavior fails encounter review.
7. Retain fixed targets and existing projectile collision behavior. Author new lanes through visually
   open space. Recesses are safe because of lane placement, not because walls secretly intercept a
   projectile. New anchors can change old routes: inspect and probe every existing attack encounter.

The frozen anatomical API uses `actorPosition`, `facing`, `shoulder`, `grip`, `releaseAnchor`,
`catchAnchor`, `aimAngle`, and `endpoint`; pose adds `action`, `progress`, and `holdingWeapon`.
Convert native SVG points through the actor's actual draw transform: local image width 240,
`unit = 62 / 224`, x centered at 120, y offset -62, then actor scale 1.6 and x-facing mirror.
Gem's shoulder/grip are native `(131,190)` / `(163,167)`; Cana's owned replacement branch uses
`(223,151)` / `(257,137)`. The latter intentionally extends outside the old viewBox, so draw that
branch as an uncropped owned overlay; remove/mask its old tiny fixed hand rather than cropping the
new grip or drawing duplicate hands. Gem's barrel is 20 world pixels, shortened only when an authored
target is closer than its full length. Boomerang release/catch equals grip. A zero-distance ray uses
the actor's facing. Simulation and drawing consume the same result, including the shortened barrel.

Action windows are species-specific: Gem uses release/recoil/reload; Cana uses brief release,
actual outgoing/returning flight, then catch/recovery. Gem's reload windows must not mask Cana's
return-leg pose. Eligibility also has one pure shared owner; `interference_attack_enabled` can
remain the public API or re-export that owner, but pose and stepping must not independently copy
pad/power/boss checks. A new live windup takes priority over an older marker's remaining recovery
window, so short authored cooldowns never hide a real warning. These are binding refinements of the
shared boundary, not extra systems.

This boundary follows **Fix the design, not the symptom** and **Design for adaptability** in
[REPO_STYLE.md](../../REPO_STYLE.md). Per-room hand offsets or renderer-only aim corrections would
recreate the mismatch. The compact marker and bounded range follow **Ground requirements in actual
needs**; repeated action state and a generic animation/event subsystem add no needed behavior.

## Acting and readability

- Gem visibly grips a recognizable short bubblegun: raise/aim, discharge, recoil, reload/ready.
  Cana winds up, releases a recognizable boomerang, watches outgoing/returning flight, catches,
  and recovers. Hide the held boomerang for the entire flight. The weapon arm is the owned hand,
  not a second disconnected forearm beside a fixed limb. Preserve molecular identities and faces.
- Use shared pose data to articulate the weapon side; separate a small weapon drawing helper if
  useful. Existing fixed SVG limbs may need narrowly scoped asset edits or masking to avoid duplicate
  hands. Review the actual scale in browser before considering the art accepted.
- Give Isp distinct suspended FLOAT and dazed DIZZY body poses; Pac visibly freezes for STUCK and
  braces for SHOVE. Feed existing effects into drawing explicitly. Preserve hitboxes, feet/contact
  truth, normal hero responses, and effect/immunity labels. Cosmetic motion cannot imply extra reach.
- Restore concise personality during interference using existing dialogue layout/occupied regions.
  Aim, successful disruption, restoration, and silencing should have distinct readable reactions.
  Speech must leave attack lanes, pad/door state, heroes, mechanism readouts, and HUD legible.
  Attribute reactions to actual owning attacks/schemes; add effect provenance only if the existing
  owner data cannot distinguish a demonstrated case. Avoid unowned global celebration guesses.
- Reduced motion retains meaningful static aim/windup/release/catch silhouettes, effect poses,
  warning geometry, essential projectile translation, and return direction. Suppress optional bob,
  spin, oscillatory recoil/wobble, and trails. Zero animation time alone is insufficient because
  action still needs to follow simulation state. Rendering remains pure in both motion modes.

## Opening encounter progression

The following is the approved authoring hypothesis from the first-eight audit. Prove routes and
recovery before promotion; revise unsafe lanes/timing at their owning encounter. Preserve existing
good geometry and walking/jumping curriculum unless a demonstrated failure requires a narrow change.
Both weapons act in the opening; each following room develops one understandable consequence.

| Displayed / stable | Required authored relationship |
| --- | --- |
| 1 / 02 | Keep continuous floor and walking completion. Gem's slow short sweep covers HOLD and can FLOAT Isp off it; Pac sees the door change. Cana's longer returning shot contests Pac's RESCUE approach with safe shove space. Stagger cycles; both visibly act during a normal route. RESCUE latches suppression of both. |
| 2 / 01 | Gem contests safe DNA OPEN floor; Pac's RESTORE counters the attack and restores the lift. Keep lift boarding free of new fire. |
| 3 / 04 | Cana contests Isp's broad safe far bank while Pac supports the bridge. Preserve the lethal crossing and support-pad safety. |
| 4 / 03 | Gem contests Isp's broad STOP shore; FLOAT can release the ferry brake. Prove resumed ferry and ordinary reboarding recovery. |
| 5 / 06 | Short lanes make recesses useful waiting spaces. Partners alternate exposed passage and safe waiting without assumed terrain interception. |
| 6 / 08 | Contest the broad loading floor; cargo substitution on PARK survives temporary hero interference. Preserve bridge safety. |
| 7 / 05 | Revisit safe-shore brake disruption and deliberate final suppression. Keep first attacks away from hazardous jumps. |
| 8 / 07 | Develop return-leg timing between broad safe islands, with a partner controlling suppression. Preserve supported travel versus exposed decisions. |

Room 02 must allow walking out of Gem's windup line and returning to HOLD, enduring/recovering from
both forgiving effects, and waiting through Cana's return. Do not require a hit or precision dodge.
Normal routes must encounter visible attack action before RESCUE; intentional clever avoidance is
allowed. Off-path firing and mandatory long waits do not establish active villains. A fast boomerang
that technically returns but is unreadable also fails presentation acceptance.

FLOAT can release HOLD while Pac overlaps its closing door. Probe both approach directions, holding,
retreat, recovery, and delayed inputs. Completion alone is insufficient: the transition must neither
strand a hero nor permit bypass of the intended live HOLD relationship. If this reveals an existing
door-closure defect, stop promotion and obtain a narrow shared-owner correction contract from the
manager/architect. Do not patch the room with an unrelated ledge or silently accept overlap leakage.

## Ownership and sequencing

Fresh workers preserve other edits in the shared checkout and may challenge/escalate the contract.
Keep dependencies sequential; parallelize only separate file ownership after the typed API is frozen.

| Owner task | Exact files and outcome |
| --- | --- |
| Foundation | `src/types/interference.ts`, new `src/weapon_pose.ts`, `src/interference.ts`, `src/levels.ts`, existing bubble definitions in `src/levels_final.ts` and `src/interference_trial.ts`, `tests/test_interference.mjs`: shared API, actual range, transition/reset behavior, migration and durable behavioral coverage. Freeze API and anchors before dependents finish. |
| Presentation | `src/render_villains.ts`, `src/render_interference.ts`, `src/render_characters.ts`, `src/render_game.ts`; optional new `src/render_weapon.ts` and narrowly necessary `src/assets/gem.svg` / `cana.svg`: shared aim/action art, distinct hero poses, dialogue and reduced motion. Keep this cohesive ownership to avoid competing edits to character rendering. |
| Tutorial encounters | `src/levels_tutorial.ts`, `src/villain_scenes_tutorial.ts`: stable 02/01/04/03/05 authored lanes, counters, timings and wording, starting with final-anchor room 02 promotion. |
| Middle encounters | `src/levels_middle.ts`, `src/villain_scenes_middle.ts`: stable 06/08/07 authored lanes and recurrence. Separate files permit parallel authoring after foundation freeze. |
| Independent verification | Temporary source/route probes and built-browser evidence; fresh quality/source review; no production edits. Read this contract and the final source manifest. |
| Manager | This report's ledger, canonical human/design/changelog records, accepted artifact custody, build ownership, regression completion and closeout. |

Do not edit physics speculatively. A verified closure failure creates a separate bounded owner task.
The architect approves the boundaries above; implementation proceeds after baseline custody without
another user approval gate. This document's author writes only this contract; the manager records
the settled decision and change in canonical docs.

## Acceptance ledger

The execution gates below show current evidence. Attach final source manifest, bundle hash,
commands, observations, and retained evidence as browser work finishes. A failed gate returns to
its owner for correction and rerun; a failed shared contract returns to the architect.

| Gate | Required proof | State |
| --- | --- | --- |
| Architecture | Shared pose/geometry, compact action marker, bounded bubble range, planted actors, first-eight scope. | APPROVED |
| Baseline custody | Accepted source/artifact and 23-room route evidence retained before mutation. | ACCEPTED |
| Shared behavior | Shared geometry, actual range, transitions, suppression, reset and pause reviewed and source-verified. | ACCEPTED |
| First playable | Normal first-room browser route shows both attackers before RESCUE. | ACCEPTED |
| Closure safety | Overlap probes establish no stranding and no closed-door progression bypass; all four effects and recovery verified. | ACCEPTED |
| Opening eight | Ordinary-input source routes cover all eight authored rooms and recovery relationships. | ACCEPTED |
| Visible action | Final-build frames cover Gem aim/fire/reload, Cana windup/outgoing/return/catch with no held duplicate, four distinct hero poses, relevant dialogue and mechanism visibility. | ACCEPTED |
| Motion modes | Matched normal/reduced states retain essential action and translation, suppress optional motion, and leave exact simulation state unchanged by rendering. | ACCEPTED |
| Regression | Fresh full 23-room traversal after shared origins/range change, focused old attack encounters and isolated trial, lifecycle/save/reload checks, zero browser/resource errors. | ACCEPTED |
| Canonical validation | 57 unit tests plus type/lint/format checks, production build, two permanent behavior tests, and fresh source reviews pass. | ACCEPTED |

The visible-action, motion-mode, and full regression gates are accepted by the final built-browser
proof. This closes the milestone, not the continuous game-development goal.

Extend existing permanent tests only for distinct stable contracts: shared aim/origin, actual range,
natural catch versus cancellation, suppression/reset. Use small behavioral cases, not coordinate
snapshots or assertions mirroring helper arithmetic. Existing effect/immunity tests stay authoritative.
Keep tunable room timings, visual enumeration, and exhaustive route probes temporary under
`tests/_temp/`; retain useful evidence/harness custody and remove scratch executables at closeout.
Passing source probes do not replace built-browser routes and inspected action images. Human
discovery, enjoyment, novice difficulty, and two-person coordination remain separate observations.

## Closing-door clearance correction

Status: implemented and source-reviewed. The opening prototype
demonstrates a shared collision defect: after the x400..426 gate closes, overlapping Pac moves from
`x=380.03` at `t=1.542` to `x=428.67` at `t=3.425` while it remains closed. Existing `clip_axis`
handles swept entry from outside but ignores initial overlap. This section supersedes the general
closure-safety wording above with the precise committed-crossing semantics below.

### Binding behavior

- Keep `BarrierState.open` entirely pad-owned. Loss of the last opening effect closes the barrier
  immediately. Overlap never delays global closure or changes pad/latch state. Every newly approaching
  blocked hero and crate encounters the closed barrier normally; character-specific immunity stays
  exactly as authored. Crates continue to encounter all closed barriers as they do today.
- Give only authored closed-barrier collision solids an explicit initial-overlap exit policy.
  `world_solids` supplies this metadata; `clip_axis` consumes it. Keep unmarked platforms, crates,
  heroes, world bounds, and ordinary swept-contact behavior unchanged. Prefer a narrow structural
  collision-solid type extending rectangle geometry with an optional barrier exit axis, local to
  the collision module. Do not add mutable barrier phases, per-body tickets, timers, or save fields.
- A barrier's normal axis is its thinner dimension: x for width <= height, otherwise y. When a
  body strictly overlaps the closed barrier in both dimensions, compare the two normal-axis
  translations needed to separate it completely. Permit normal motion only toward the nearer
  separating face; choose the negative-coordinate face on an exact tie. Block normal motion toward
  the farther face at zero displacement. Motion tangent to the barrier keeps the existing rules.
  Recompute from current geometry: permitted normal motion monotonically approaches the chosen
  face, so it cannot flip the choice midway through normal escape.
- Allowed escape is still swept against every other solid. Do not teleport, snap, move another
  body, grant velocity, or turn a zero request into movement. Preserve ordinary partner pushing,
  crate pushing, gravity, platform carrying, and their existing collision limits. The narrow policy
  also prevents either a shove or a partner push from driving an overlapping body deeper through
  the closed door. Once fully separated, ordinary closed-barrier entry blocking applies again.
- An already-entered hero more than halfway through may finish exiting forward; this is deliberate
  safe clearance of a committed crossing. A hero less than halfway through must retreat or wait for
  the pad to reopen. In the reported Pac case the left exit is nearer, so continued right input must
  stop; restoring HOLD permits progress again. Do not require retroactive rollback of a crossing
  already mostly completed while the door was legitimately open.
- A body obstructed on its allowed exit side waits without interpenetration until that obstruction
  moves or the owning pad reopens. Do not switch it to the farther side to escape around a partner
  or crate. If both sides are blocked, preserve a stable waiting state; reopening restores ordinary
  movement. Prove that the authored room still provides ordinary recovery through its control.
  If the control is unreachable and no obstruction can be moved, treat that as an encounter failure
  requiring a narrow reviewed correction, not permission for generic depenetration or automatic Retry.
- Closed-barrier rendering remains truthful: it is solid for new entrants. An existing overlap is
  transient local clearance, not a held-open door. Inspect that transition in the opening browser
  proof; add a small owner-derived clearance cue only if its absence causes a demonstrated visual
  ambiguity. The door correction worker does not edit shared presentation files concurrently.

This chooses **Fix the design, not the symptom** at the barrier/collision boundary and **Ground
requirements in actual needs** for the bounded exit rule. Delaying closure for any occupied doorway
would let a hero or crate hold a partner's route open without its owned pad. Generic initial-overlap
depenetration would alter unrelated platform and counterweight semantics. Neither is approved.

### Owner and verification

A fresh door-correction worker owns only `src/collisions.ts` and focused behavioral additions to
`tests/test_physics.mjs`. Use the existing `world_solids` calls so walking, shoves, pushing and normal
platform riders receive the same barrier policy without a physics rewrite. `src/mechanisms.ts`,
`src/physics.ts`, barrier state types, and `src/counterweights.ts` remain unchanged. Counterweights'
separate conservative initial-overlap blocking remains authoritative; this contract does not grant
its atomic solver a new escape path. If implementation cannot meet this scope, return concrete
evidence to the architect before widening it. Foundation work proceeds independently.

Keep permanent cases behavioral and consolidated: closure from both approach sides including the
reported less-than-halfway case and a mostly-completed crossing; ordinary closed-door re-entry;
both character filters; crate cannot hold a door open; blocked escape/reopen recovery; horizontal
and vertical normals. Use representative states, including exact tie and touch, rather than tuning
snapshot coordinates. Temporary ordinary-input probes additionally exercise actual HOLD loss via
FLOAT, SHOVE into/away from overlap, partner/crate obstruction, and the two `update_pads` calls per
substep. Assert no new overlap with other bodies and no forced movement on idle input.

Fresh independent review must challenge the exit semantics and verify the reproduction is corrected;
test passage alone is insufficient. Then rerun room 02 normal, delayed, dodge/hit and recovery routes
with final weapon anchors, inspect normal/reduced closure frames, and retain the full 23-room
regression gate. A shared-door regression returns to this owner before encounter promotion.
