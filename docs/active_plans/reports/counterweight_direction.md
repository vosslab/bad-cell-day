# Counterweight gameplay direction

Status: the linked-deck contract, edge-scaled ULP contact rule, and shared passenger clutch are
approved; stable `level_23` is integrated at position 12. The source-frozen candidate passes
canonical checks/build, permanent browser tests, focused normal/reduced browser acceptance, and the
complete 23-room browser run. The counterweight milestone is DONE; the accepted hero-response build
`facb9769` and its 22 rooms remain the historical baseline (`good22`).

## Decision and rationale

Implement one linked pair of load-driven solid elevator decks in stable room `level_23`, after
`level_10` Elevator Etiquette and before `level_12` Microtubule Shuffle. Preserve every existing
room's relative order. The established sequence `level_11` Split Decision, `level_09` Two Tons of
Trouble, then `level_10` teaches lanes, weight, and boarding together before this room combines
reciprocal two-trip cargo use, the two-passenger clutch, and a minimum-weight parking delivery that
unlocks the return crate. Both heroes must be supported on separate decks before either direction
can move; once both ride, the greater total load descends and equal load holds. The same clutch
rule applies on both trips. This is a synthesis step beyond the basic crate lesson in `level_08`.
Do not reserve a second room now: the first must demonstrate useful reciprocal cargo work.

This follows **Ground requirements in actual needs**, **Fix the design, not the symptom**, and
**Perfect is the enemy of good** in [REPO_STYLE.md](../../REPO_STYLE.md): a pair owns one coordinate,
and its collision transaction owns every displacement. Avoid independent motors, phase repair,
new pad effects, global event dispatch, and save migration. This is physical cooperation, with
existing hold/latch doors used only to recognize the two arrivals.

Rules receipt: inspected `AGENTS.md`, all current `docs/*_STYLE.md`, the latest dated
[CHANGELOG.md](../../CHANGELOG.md), and [gameplay_direction.md](gameplay_direction.md).
Python commands, if needed, use `source source_me.sh && python3`; none are needed for this report.
Tests should protect stable behavior, not tunable speed or current inventory counts. The portable
game-style feedback guidance applies; reward-event infrastructure is irrelevant to this mechanic.
Applied the geometry-expert skill: classical 2D dynamic AABB contact and swept vertical collision,
ordinary floating-point pixel coordinates, positive-down y, seconds, and deterministic small
body sets. Existing ordinary collision/support predicates remain authoritative and unchanged;
the pair solver qualifies numerical contact at its own initial-overlap boundary as specified below.
A new geometry library adds no value for this axis-only query. The accepted numerical boundary
classifies only operation/edge-scaled ULP overlap as contact at the new solver's initial-overlap
boundary; meaningful penetration still blocks. This does not change ordinary collision/support
predicates or permit per-body snapping.

## Evidence and ownership

- [level.ts](../../../src/types/level.ts) owns authored platform variants and level fields.
- [simulation.ts](../../../src/types/simulation.ts) owns mutable runtime state.
- [game_state.ts](../../../src/game_state.ts) constructs fresh mutable state from immutable data.
- [mechanisms.ts](../../../src/mechanisms.ts) samples pads and moves ordinary platforms.
  Existing movers find direct riders, clip each deck independently, and carry only direct riders.
  Reusing that loop twice would lose linkage and leave stacked loads behind.
- [physics.ts](../../../src/physics.ts) runs interference, pads, platforms, pushes, crate falling,
  players, then pads/outcomes per substep. Its `ceil(dt * 120)` subdivision is deterministic for
  identical calls, but does not guarantee bit-identical results for arbitrary dt partitions.
- [collisions.ts](../../../src/collisions.ts) owns `stands_on`, `clip_axis`, and `world_solids`.
  `stands_on` uses strict horizontal inset 0.1px and vertical separation less than 1px;
  clipping uses 0.001px. Preserve these predicates; the new solver's ULP contact classification
  is an arithmetic boundary rule, not another gameplay contact epsilon.
- [levels_final_helpers.ts](../../../src/levels_final_helpers.ts) supplies ordinary geometry,
  doors, and pad constructors. `solid` fills to the bottom; use explicit rectangles for rails.
- [levels.ts](../../../src/levels.ts) validates campaign definitions and owns stable-ID order.
- [render_game.ts](../../../src/render_game.ts) draws solid decks and existing motor labels.

## Shared typed contract

Add the following narrow shapes; field names below are the implementation agreement.

```typescript
// src/types/level.ts
export type CounterweightDefinition = {
  readonly id: string;
  readonly platformIds: readonly [string, string];
  readonly travel: number;
  readonly speed: number;
};
// Add { readonly kind: "counterweight" } to PlatformDefinition's union.
// Add optional readonly counterweights: readonly CounterweightDefinition[] to LevelDefinition.

// src/types/simulation.ts
export type CounterweightState = {
  id: string;
  position: number;
  loads: [number, number];
  riders: [boolean, boolean];
  blocked: boolean;
};
// Add counterweights: CounterweightState[] to GameState, initialized to [] for old rooms.
```

The first deck A is authored at its upper endpoint; B is authored at its lower endpoint.
`position` starts at zero and stays in `[0, travel]`. Derive, rather than integrate independently:
`A.y = A.definition.rect.y + position`; `B.y = B.definition.rect.y - position`.
The authored rectangles are actual initial geometry, matching attached-pad initialization.
There is no separate pair velocity, inertia, spring, auto-home, mass customization, or phase clock.
Both decks stay active and fully solid. Existing motor/power/stabilize effects cannot target them.

An ordinary crate or hero contributes 1; a heavy crate contributes 2, matching existing pad weights.
An explicit passenger safety clutch requires a supported hero on EACH deck before travel can
occur. A hero standing on a carried crate counts. With both rider lamps lit, greater A load requests
positive `speed * dt`; greater B load requests its negative; equality requests zero. With either
lamp unlit, request zero regardless of cargo load. This is the manager-approved mechanical rule,
not a hidden recovery correction. Jumping or dismounting pauses both decks until both riders return.
Load magnitude changes direction, not speed. The end stop clips travel without
resetting or reversing. Empty/empty stays put. A heavier side at its lower stop stays there.

`loads`, `riders`, and `blocked` describe the most recent carrier transaction. Initialize loads
to `[0, 0]`, riders to `[false, false]`, and blocked to false; the first substep samples occupancy.
Recompute on each substep;
presentation reads them without altering simulation. `blocked` means requested load-driven travel
was collision-clipped, not simply balanced or resting at an endpoint. Use actual displacement
to distinguish movement from an arrow indicating load direction.

## Support and movement transaction

Implement `move_counterweights(state, dt)` in new `src/counterweights.ts`. Call it once after
ordinary movement inside `move_platforms`; keep the existing ordinary mover behavior intact.
The new platform variant naturally skips its existing moving/unstable branches.

1. Snapshot bodies and both deck rectangles before moving this pair. Bodies are Isp, Pac, crates;
   derive support from current geometry, never trust stale `supportId` alone. A body with negative
   vertical velocity is leaving support and contributes no load. Stable bodies touching a deck
   are roots; recursively include bodies standing on supported bodies. Count each body once.
   This includes a hero on a crate, stacked crates, and a hero on the partner. Iterate in stable
   body-ID order. With ordinary positive-height AABBs, support height strictly decreases down the
   graph, so a genuine support cycle cannot occur.
2. Assign the resulting root membership before collision work. A body touching a stationary dock
   and a deck belongs to that deck once; this discrete model does not divide weight across edges.
   A descending straddler may stop the pair against the dock until it boards fully. This is useful
   physical behavior, not a reason to teleport or ignore its contact. A body rooted in both decks
   blocks the pair at zero displacement; count it once per side for display, never move it twice.
3. Compute each side's `riders` flag from that same closure. Apply the passenger clutch, compute
   the signed desired coordinate change, clamp it to the remaining endpoint travel, then
   find one allowed magnitude. Sweep each deck and each body in its supported closure against
   external solids and all non-carried bodies. Deck obstacles include static/other platforms and
   closed barriers; use crate-style barrier semantics for decks/crates and owner-specific barrier
   semantics for hero riders. Exclude only the two moving decks and this transaction's carried
   bodies, never an unrelated obstacle. Include the other deck/closure as relative moving obstacles
   when their horizontal spans overlap: their relative closing distance is twice the pair travel.
   Meaningful initial penetration is a zero-motion blocker; `clip_axis` alone does not repair it.
   At the new solver's initial-overlap boundary, classify operation/edge-scaled ULP overlap as
   numerical contact for both external obstacles and relative moving members. Apply the numerical
   contract below before deciding that an initial overlap blocks travel.
4. Each independent swept constraint bounds the same absolute coordinate change. Take their
   minimum. For opposite-moving members use relative sweep limits before dividing by their
   relative speed factor. A zero limit stops both sides. Do not move one side and then recompute
   the other's clearance from already-mutated state. The intro's separated shafts make opposite
   closure overlap impossible in normal play, but keep the shared-body/relative check explicit.
5. Commit `position` once; derive both deck y coordinates, `previousRect`, and equal/opposite
   `displacement`. Translate every carried body once by its side's signed accepted displacement.
   Gravity, jump velocity, pushing, and collision settlement remain owned by existing physics.
   Carrying does not inject elevator velocity into a jump. A blocked stack remains movable by
   ordinary player controls after the transaction, allowing a player to step away from a ceiling.

### Numerical contact boundary

Approximate floating-point edge calculations can leave a mathematically touching rectangle a few
operation/edge-scaled ULPs inside its neighbor. The new solver treats overlap within that arithmetic
bound as contact, including initial external and relative-member contact; larger penetration still
blocks. Scale the bound to the relevant edge magnitudes and arithmetic operations, not a fixed
pixel allowance. Coordinates alone cannot distinguish an authored one-ULP overlap from arithmetic
roundoff, so both receive the same classification. The shared-root zero-motion guard is unchanged.

Preserve the single accepted pair scalar, deck derivation, and one atomic translation of all carried
bodies. Do not snap individual bodies outward: independent review identified that such corrections
can create overlap inside a carried stack. This boundary classification provides neither general
depenetration nor gameplay slop and changes no ordinary collision or support predicate. Assertions
and the independent acceptance oracle distinguish meaningful penetration from numerical touch;
they must not require zero-bit edge separation after floating-point translation.

Deck contact with an uncarried body stops travel rather than pushing or crushing it. The same rule
applies beneath the descending deck, above the rising deck, and above a carried stack. No shoving
chain or rigid-body constraint engine is required. Iterate separate pairs in authored order if the
type admits more than one; do not author interacting pairs in this first addition.

Input timing stays explicit: current jump input and horizontal crate pushing happen after carriers
in the existing substep. A just-requested jump is carried for that substep, then launches; its load
leaves at the next sample. A pushed-off crate similarly stops contributing on the next sample.
Do not predict input, smooth load, debounce equality, or reorder existing physics to remove this
bounded one-substep response. Jumping removes that side's passenger eligibility and pauses both;
landing restores eligibility at the next sample. The clutch has no timer, input prediction or latch.

## Validation boundary

Add focused `validate_counterweights(level)` beside the new implementation and invoke it from
campaign definition validation in `levels.ts`. Direct unit-level fixtures may call it explicitly.
Reject duplicate pair/platform IDs, missing/duplicate membership, non-counterweight members,
non-finite or nonpositive travel/speed/rect dimensions, non-finite coordinates, and endpoints
outside the authored world. Each counterweight deck belongs to exactly one pair. Reject existing
motor/power/stabilize effects targeting these decks; attached ordinary pads remain allowed.
Reject intersecting swept shaft rectangles for authored pairs in this first contract; separated
shafts fit the actual room need and simplify independent collision reasoning. Reject meaningfully
overlapping initial bodies/geometry in the new room during its geometry review rather than inventing runtime
depenetration. Existing level definitions do not need new fields or save changes.

## One room: cargo exchange

Use two visibly linked elevators in separate guarded shafts. Proposed dimensions are starting
values for a geometry probe, not accepted authored production data:

- A, Pac's left deck: x=180, y=230, width=170, height=24, lowers to y=500.
- B, Isp's right deck: x=750, y=500, width=170, height=24, rises to y=230.
- Pair travel 270px; initial speed approximately 65px/s gives time to see the exchange.
- Upper/lower outer docks extend from x=0 to180 and x=920 to1100 respectively, at y=230/500.
  Separate top and bottom ledges, not bottom-filling solids. Inner shaft walls block cross-room
  shortcuts. Outer rails occupy the vertical interval between dock openings; leave full hero and
  crate headroom at the lower dock. Decks span the whole shaft, so missed jumps fall onto a deck.
- Pac starts on the upper-left dock with one ordinary crate. Isp starts on B at its lower dock.
  A second ordinary crate waits visibly on the upper-right dock. There are no attacks or hazards.

The single intended idea is exchange of ballast and responsibility:

| Step | Pac's left route | Isp's right route | Physical consequence |
| --- | --- | --- | --- |
| 1 | Push left crate onto A, then board fully | Stand on B | 2 versus 1 lowers Pac and raises Isp |
| 2 | Arrive at lower dock; park crate off A | Reach upper dock and latch Pac's upper exit open | First arrival changes partner's destination |
| 3 | Return to A without crate | Push upper crate onto B, then board fully | 1 versus 2 raises Pac and lowers Isp |
| 4 | Reach upper dock; latch Isp's lower exit open | Reach lower dock and wait or enter opened exit | Both contributions earn separate finishes |

Place both exit locks within the outer docks so the partner never has to cross a shaft wall.
Pac cannot finish at his starting elevation until Isp's upper arrival; Isp cannot finish at his
starting elevation until Pac's return. Show the locked destinations at spawn. Use existing
owner-filtered latch pads. Pad placement must prevent crates and the wrong hero claiming arrivals.
The lift exchange supplies the cooperation; door labels do not prescribe a memorized pad sequence.

The passenger clutch is essential for independent cargo preparation. Without it, Isp could load B
while Pac parks A's crate on the lower dock, raising empty A away and permanently stranding Pac.
With the clutch, Isp can take any amount of time loading B, and Pac can take any amount of time
parking ballast; the pair resumes only when both board. Show two visible rider lamps connected
to the shaft pair and WAIT FOR BOTH whenever either is unlit. When both are lit, show BALANCED
or directional load response. The mechanism is a safety elevator, not an unrestricted seesaw.

An early jump onto an upper dock can pause the pair before the opposite lower dock aligns.
The arriving hero can reboard the paused, reachable deck to finish docking. Prefer shaft lips
and a visible endpoint mark that encourage full docking. Probe this early-dismount recovery
explicitly; the room must never require a fast jump back before a deck departs.

Isp's lower exit gate must close the entire lower-right shaft-to-dock opening, not merely cover
the exit marker. Before Pac's final upper latch, Isp remains inside B's guarded shaft and cannot
step onto a lower dock while empty B rises away. A closed local Isp barrier around x=920 spanning
the lower opening implements this with existing geometry; its top must meet the outer rail
without a jumpable seam. Once Pac returns, the latch opens that docking passage permanently.
Keep the initial Isp spawn on B, inside the gate. The upper-right dock remains always reachable
from the arriving B, so Isp can load the return crate. This gate placement is part of the room's
recovery contract, not an optional difficulty flourish.

The 270px elevation change exceeds the current free jump apex `470^2 / (2 * 1200)`, about 92px;
partner stacking adds only 36px. This rules out a simple floor-to-upper jump but does not alone
prove bypass resistance. Shaft walls, crate positions, dock access, and jump timing need probes.

## Recovery and bypass acceptance

The authored room uses a bottom inner recovery recess, a 14px stop, and an existing
any-body LOWER DOCK latch with a safety gate. The gate opens the recess only after the
deck reaches near-full bottom alignment. This keeps cargo in the intended recovery bay:
an always-open bay allowed cargo to leave mid-trip and become stranded 28px below the deck.
The correction uses authored geometry, the existing pad, and a barrier; it adds no engine feature.

- Guarded shafts are essential: a broad catch floor beneath an isolated raised deck can leave a
  living hero unable to reload it. Continuous side rails and full-width decks must prevent that
  state. At each dock, step/jump misses land on the dock or deck. Ordinary keys must recover.
- Rails cannot seal a crate or hero in a pocket. Leave enough lower-dock height for the 40px crate
  and upper-dock width to hop over it and push toward the shaft. Parked cargo remains retrievable.
- Jumping/dismounting disengages the clutch on the next substep. Both aboard with equal total
  load stops; changing cargo while preserving both passengers selects direction. Neither move
  requires synchronized jumping or a short reaction window. End stops and undocked decks remain
  stable while either hero takes time to load or park cargo.
- Test both heroes stacked, crates stacked, hero-on-crate, dock-edge straddling, a jumping rider,
  crate pushed during travel, a body under either deck, stack against ceiling, and exact endpoint
  contact. All pair displacements stay opposite, and no meaningful new penetration is created.
  Distinguish operation/edge-scaled ULP contact from meaningful external, relative-member, and
  internal-stack overlap; preserve atomic translation rather than snapping each body separately.
- Try Isp jumping repeatedly to let Pac lower with no crate: the clutch must pause rather than
  permit unloaded motion. Also try both heroes on one deck: the other passenger lamp stays unlit.
  Permit a clever legal alternative if both routes and reciprocal arrivals remain necessary;
  keep the clutch as the consistent passenger rule rather than adding route-specific patches.
- Try Pac's initial exit, Isp's initial exit, crate stepping stones, rail-top jumps, wrong-owner
  arrival pads, and early crate parking. Reject routes that erase one hero's meaningful work.
- Pause freezes the whole pair; Retry reconstructs both decks, cargo, loads and latches from the
  definition. No pair state enters persistent progress. Exit completion uses the existing rule.

## Implementation handoff and evidence

| Owner | Files | Completion evidence |
| --- | --- | --- |
| Shared contract and pair physics | `src/types/level.ts`, `src/types/simulation.ts`, `src/game_state.ts`, new `src/counterweights.ts`, `src/mechanisms.ts` | Small inline Node fixtures for passenger clutch, balance/direction, crate/stack load, atomic collision stop and release, endpoint/reset determinism |
| Authored room and validation integration | New `src/level_counterweight.ts`, `src/levels.ts`, optional local helper in `src/levels_final_helpers.ts` | Legal-input complete route plus recoveries/bypass probes on the actual built artifact |
| Visible causality | `src/render_game.ts` or focused new `src/render_counterweights.ts` | Deck-linked rope, integer load pips, two rider lamps, WAIT FOR BOTH/BALANCED/direction/BLOCKED/end-stop distinction in normal and reduced motion |
| Integration records | `docs/CHANGELOG.md`, `docs/DESIGN_DECISIONS.md`, gameplay report and current campaign documentation | Manager-approved decision and exact tested artifact, stable-ID progression and replay evidence |

The approved contract and order are integrated. The manager maintains the current acceptance ledger;
the final artifact hash and campaign proof remain pending there. Preserve the historical `good22`
snapshot as the baseline for reviewing the additive room.

Temporary geometry probes should enumerate edge contacts and compare accepted scalar travel with
an independent hand-computed minimum-clearance oracle. Include ULP-scale contact and meaningful
penetration for external and relative-member boundaries, plus stack integrity after atomic travel.
The oracle checks meaningful overlap, not zero-bit numerical touch. Keep only tests protecting
durable behavior.
Do not permanently pin speed, coordinates, room count, or route-controller timings.
Run canonical code checks, production build and ordinary-input browser checks, then the entire
unchanged 22 plus new room because shared platform orchestration changes. Verify fresh progression,
legacy earned replay/frontier behavior around insertion, Retry, pause, completion/reload, and final
ending. Preserve the frozen good22 artifact separately. Browser screenshots prove legibility and
legal completion; novice discovery, enjoyment and two-person coordination remain unmeasured.

If atomic stack safety cannot fit this bounded implementation, or the guarded room still contains
living traps or demands timed jumping, revise or decline the candidate before campaign integration.
Do not expand into general rigid-body physics or add a second room to justify engine complexity.
