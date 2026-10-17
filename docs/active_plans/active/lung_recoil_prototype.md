# Lung recoil prototype

**Prototype decision: KEEP, DONE_WITH_CONCERNS; review sequence accepted.** Root authorized a
separate production implementation under [the production room plan](LUNG_RECOIL_ROOM.md). This
plan remains the record of private native evidence; it does not claim production runtime or
human-play acceptance.

## Goal and evidence

Test whether two heroes jointly compress living lung tissue, then one hero leaves and releases a
physical recoil that launches the partner toward a reciprocal return route. The candidate should
give both heroes necessary, distinct work and a safe miss/re-entry path. Its decision must arise
from movement and timing around the shared tissue, not from another static HOLD switch.

The accepted current36 assessment authorizes this bounded experiment and remains
`DONE_WITH_CONCERNS` ([acceptance](../reports/difficulty_36_acceptance.md)). Its late brain cargo
cluster makes a different physical interaction worth testing; it does not select a campaign slot.
The earlier opposite-phase airway-lift scout rejected its proposal because it repeated cyclic-lift
choices (`tests/_temp/anatomy_gameplay_scout/REPORT.md`). The new recoil idea is unproven. The
mechanics boundary scout found no existing recoil behavior: a native wrapper can call the real
`step_game` at 1/120 second and apply an explicitly labeled candidate impulse after its collision
step (`tests/_temp/lung_recoil_boundary/REPORT.md`). This proves only the candidate modified-physics
behavior, not current-game behavior.

## Approach

1. Bind the private prototype to the current accepted source snapshot. Make one rough, nonlethal
   room with a continuous fallback floor, two distinct roles, a partner launch route, a reciprocal
   return dependency, and separate exits. Geometry is a hypothesis; derive landings and clearances
   from the actual core simulation.
2. Import existing `GameInput`, `GameState`, and `LevelDefinition` types and existing game APIs.
   Keep charge/release/spent state in the temporary harness. Start with direct side-by-side contact:
   at the prior sample both heroes must be grounded on the tissue surface; after the next production
   step, if exactly one remains grounded there, apply one upward impulse to that hero. Re-arm only
   when both return to the surface. Leave stacked support out of this proof.
3. Drive all routes with ordinary inputs at native 120 Hz. Record raw input intervals and event
   samples including positions, velocities, `grounded`, `supportId`, and surface geometry. Do not
   teleport, inject hidden state, seed convenient pads, or use cargo/waypoints to force a clear.
4. Test the normal joint load, release, launch, landing, return, and both-exit clear; one-hero
   attempts; a missed launch with re-entry and retry; and repeated release edges. Include the
   held-jump and fresh jump-buffer case near release because the next step can overwrite recoil
   with ordinary jump speed. Record the result without changing global controls. If FLOAT actually
   reaches the launched hero in the candidate route, record its next-step velocity overwrite; do
   not silently stack or cancel FLOAT.
5. Decide from the observed routes and event traces. Keep for separate production design only if the
   joint physical release is necessary, both roles remain meaningful, and misses recover through
   ordinary play. Revise only a specific, evidenced fixture or seam defect. Reject if the behavior
   reduces to a switch/launch gimmick, a solo bypass, or unreliable recovery. If the recoil rule
   itself conflicts with jump/FLOAT semantics, stop and recommend a new mechanic design before
   production; do not patch shared physics in this experiment.

The planned review sequence was a fresh SPEC review, a different QUALITY review, and a fresh
integration review. All three were accepted after root's KEEP decision; see the closeout below.
Root's production decision and campaign placement are recorded in the separate room plan. Scripted
routes do not establish human fun, discovery, or paired-keyboard comfort.

## File scope

- `tests/_temp/lung_recoil_prototype/`: private fixture, harness, route inputs, and raw evidence;
  no permanent tests or production changes.
- `tests/_temp/lung_recoil_prototype/REPORT.md`: findings, routes, geometry support, limitations,
  and keep/revise/reject recommendation.

## Native prototype evidence

**Phase result: DONE_WITH_CONCERNS; R1 verification gate passed.** The
fixture is an explicitly new post-step recoil behavior, not current-game or campaign proof.
`tests/_temp/lung_recoil_prototype/REPORT.md` records the final geometry, route and control traces,
source identity, frozen raw-trace hashes, typecheck history, and revise-before-production
recommendation. After the expired unrelated private TypeScript probe was retired with its bytes
archived, the mandatory `npx tsc --noEmit -p tsconfig.json` gate exited 0 with no output. No R1
fixture, harness, input, or raw trace was modified for that rerun. The reciprocal two-exit route
cleared, but the fresh-jump-next-tick trace shows ordinary jump overwriting the candidate impulse
before it can launch the partner to the upper route.

## R2 approved private hypothesis

Root approved a private R2 test of the physics-owned fresh-jump seam identified in
`tests/_temp/lung_recoil_jump_design/REPORT.md`. R2 uses the exact R1 `candidate.ts` and saved route
inputs for direct comparisons, with a private copy of the specified current `src/physics.ts`
snapshot. That copy has one semantic source delta: geometry refreshes standing/coyote time only
when `player.velocity.y >= 0`. Its imports point to the actual repository modules. The recoil hook
also performs the approved launch transition once on the same direct-tissue release: set vertical
velocity to `-730`, clear `grounded` and `supportId`, and reset `coyoteTime`, while preserving
`jumpBufferTime` and `jumpHeld`. Existing ordinary FLOAT/STICKY branches and `GameInput` processing
remain in force.

This R2 hypothesis tests modified private physics only. It makes no claim about current production
physics. Required comparisons include all R1 routes, the same full first-order inputs with a fresh
jump added on tick 43 while left steering continues, and representative coyote, buffered-landing,
resting-platform, and moving-platform jump controls. Any added-input clear must be identified as a
distinct route. R2 artifacts and source/control details are confined to
`tests/_temp/lung_recoil_r2/`; its result and root's later decision are recorded below.

## R2 results and decision ledger

**R2 result: DONE_WITH_CONCERNS; recommend KEEP.** The one-time private physics copy passed all seven unchanged R1 route
replays. The normal first-order route still cleared at tick 812. On the stationary R1 fresh-jump
control, tick 43 integrated recoil to `vy=-720` and preserved the ordinary jump buffer, but the
unsteered hero returned to tissue. A distinct full-route variant added jump at tick 43 while
retaining the original left steering and remaining inputs; it cleared reciprocally at tick 812.
Baseline and private-kernel controls matched for coyote jump, buffered landing jump, resting static
platform jump, and moving-platform jump. The complete native findings, failed typecheck attempt,
source hashes, and trace hashes are in `tests/_temp/lung_recoil_r2/REPORT.md`. These results test the
modified private kernel and fixture only; they do not establish production runtime or claims about
player experience.

## Root decision and review closeout

Root kept the bounded experiment with `DONE_WITH_CONCERNS` and authorized the separate production
design and implementation recorded in [LUNG_RECOIL_ROOM.md](LUNG_RECOIL_ROOM.md). The fresh SPEC,
different QUALITY, and integration reviews were accepted. Integration evidence is recorded in
`tests/_temp/recoil_prototype_integration/REPORT.md`.
Its stated limits remain: scripted reachability is bounded, retry evidence does not show a second
full reciprocal clear, FLOAT/STICKY were absent from the fixture, and human discovery, enjoyment,
and paired-keyboard comfort remain untested. The accepted production decision preserves ordinary
FLOAT/STICKY semantics and keeps FLOAT out of the Cana room; see the production plan for the
contract and follow-on evidence owners.
