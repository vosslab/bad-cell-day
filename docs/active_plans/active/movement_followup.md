# Movement follow-up

**Status: DONE_WITH_CONCERNS / bounded movement milestone accepted 2026-10-17 15:21:55 UTC.**
Root accepted candidate B's level 39 recovery geometry and hint change after source/build, native,
browser, public review, and visual checks. Candidate A, Fold and Ferry, was rejected for failed
reciprocal-role and clear criteria and was not promoted. The continuous gameplay goal remains
ACTIVE. Current public roster: 43 rooms. Historical `current41` difficulty results remain frozen and
do not choose the next room. See the [acceptance report](../reports/movement_followup_acceptance.md).

## Goal and evidence

This bounded milestone tested a reciprocal carrier-and-runner room hypothesis and a level 39
recovery gap using existing `LevelDefinition`, physics, and art. Candidate A did not meet its
reciprocal-role or clear criteria. Candidate B supplied a causal recovery surface and was accepted
with concerns. The broad gameplay goal remains active; see the [acceptance report](../reports/movement_followup_acceptance.md).

## Approach

1. **Private candidate A: reciprocal carrier-and-runner relay.** Author one disposable room fixture
   using the existing fixed-cycle moving platform, pads/power, Cana timing, standard platforms, and
   current tissue art. Give each hero a concrete route action that changes the partner's safe
   progress; make the roles exchange during the same clear. Compare its central decision with Split
   Relay (`level_21`), Crossed Paths (`level_22`), BYOV (`level_32`), and Cellpool Lane (`level_43`).
   Test the plausible bypass where both heroes ride together. Record an ordinary-input clear and a
   consequential miss with recovery to a clear. Use no new engine/type/state/config, tall DNA
   barrier, quota, or forced gimmick. Existing motor/power pads are eligible only when movement
   creates reciprocal jobs.
2. **Decision A.** Promote only if traces show distinct reciprocal actions, an ordinary clear,
   recoverable consequential miss, and no simple both-passenger bypass that erases the roles. If
   any contract fails or the loop duplicates a neighbor, reject with the exact route/contract
   evidence. This gate selects whether root should consider a released production-room plan; it is
   not approval to write a room.
3. **Private candidate B: level 39 recovery.** Reproduce the advertised missed lower jump from the
   public route in Boneheads (`level_39`). Establish whether it actually causes unrecoverable loss
   under ordinary controls and whether geometry is the cause. If demonstrated, test the smallest
   geometry-only recovery that preserves Pac-carries-Isp / TISSUE HOLD and Cana's recurring attack.
   Do not tune production from a source-based concern alone.
4. **Disposition.** Candidate A failed its private test: the attempted route did not clear or
   establish reciprocal roles, while both heroes riding the same ferry erased the intended role
   split. Do not promote it. Candidate B's authorized delta was applied and accepted: add static
   platform `lower_return_fold` at `{ x: 940, y: 568, width: 50, height: 14 }` and change only the
   final hint sentence to "Miss the lower jump? Jump out from the catch fold below and try again."
   Keep human fun, discovery, comfort, and difficulty marked unmeasured.

## File scope

- `tests/_temp/movement_followup_plan/REPORT.md`: original experiment ledger and source/trace
  references; its pending statuses are historical.
- Candidate implementation and replay evidence are separately dispatched after root approval;
  this plan owner does not edit production source, permanent tests, builds, browser state, or Git.
- If a production room is later authorized, preserve stable IDs, existing order, saves, and trial
  isolation; document the added-ID unlock semantics. Do not treat the current plan as that approval.

## Completion checks

- Candidate A is rejected as this private candidate: no clear or reciprocal roles, and the
  both-riding bypass erases the proposed role split. Its level 44 fixture remains unregistered.
- Candidate B changes only the level 39 hint and `lower_return_fold`; the other 42 assembled
  definitions and their order are unchanged. Fresh-state normal and recovery routes clear at frames
  694 and 778 with zero deaths.
- Root reports 96 code checks and 2/2 standard build smokes passed. The current served bundle is
  `9f5bd1b40c8318555e41a704c1bdcca6aa016fb2bc2cbfd470aeab5bfd08c5fc`; disk and served bundles
  match, as do all 68 bundled sources. Root reviewed all three normal, catch, and recovery captures.
- This milestone is accepted `DONE_WITH_CONCERNS`; the broad gameplay goal stays **ACTIVE**. Human
  fun, discovery, comfort, and difficulty remain unmeasured. No exhaustive bypass proof or permanent
  layout test is claimed.
