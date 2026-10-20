# Moving carrier stacks

Status: COMPLETE for this bounded correction; root accepted with concerns at
2026-10-18 05:43:21 UTC. The SEND powered return lift could stall when Gem stood on
a parcel directly carried by the lift. The carrier treated a body supported by its
rider as an external obstacle.

## Outcome

When a moving platform supports a body, carry the transitive support stack
together exactly once. The stack may include heroes, crates, and active villains.
Clip the moving stack against world geometry and bodies outside the stack. Keep
crush stops and ordinary jumps working. The implementation moves the transitive
`stands_on` closure with one shared collision-clipped delta.

## Scope

This is a carrier and supported-body movement correction. Do not change rooms,
AI, attacks, hints, or settings. Each closure member moves once; members do not
block one another, while world solids and bodies outside the closure remain
obstacles. The implementation is local to `move_platforms` in
`src/mechanisms.ts`.

## Work and evidence

1. Record the movement order and single-carry contract. **Recorded** as described
   above; temporary contract notes are in `tests/_temp/lift_stack_contract/`.
2. Implement generic transitive stack discovery and movement at the owning
   carrier boundary. Preserve the existing direct-rider behavior. **Implemented**
   in `src/mechanisms.ts`; SHA-256:
   `57dfdf5e559535acceb42d2ac0373aa2d463ba3036f940d7f5557bc2000366fb`.
3. Use temporary focused probes for stack motion, external/world clipping,
   crush stops, and ordinary jumps. Do not add permanent tests. **Stack motion,
   ceiling/world clipping, and ordinary jump probes plus scoped lint, format,
   and TypeScript checks passed. A separate 18-step external-body fixture moved
   the lift, crate, and Gem together 36 px to contact with stationary Cana, no
   overlap, and a clear lift.** Temporary evidence is in
   `tests/_temp/lift_stack_implementation/` and
   `tests/_temp/lift_stack_external_body_proof/`.
4. Run fresh SPEC, then QUALITY, then integration review on the resulting
   implementation. **Complete.** Six focused audit passes found no source defect:
   Plan, Style, Legacy, and Comment had no findings; the Test pass's external-body
   proof gap is closed by the focused fixture; and the Docs durability finding is
   addressed by these durable records and the audit synthesis. Canonical 96 checks,
   build, and two browser smokes passed per root's recorded evidence.
5. Build and replay current level 25, then complete a fresh 50-room campaign
   journey before recording production acceptance. **Complete.** The rebuilt-browser
   Level 25 replay and separate native carrier trace pass. The fresh current50
   browser journey completed all 50 rooms from an empty save, one attempt each,
   with zero retries and no browser errors. Root accepted this bounded milestone
   as `DONE_WITH_CONCERNS` at 2026-10-18 05:43:21 UTC.**

## Verification boundary

The fresh journey is an ordinary-keyboard replay of prepared successful schedules.
It verifies the integrated runtime and save/reload path, not first-time discovery,
human enjoyment, or universal recovery. Integration accepted with concern that
sequential platform processing could move a body more than once if it belongs to
overlapping moving-platform closures; no authored failure was demonstrated. This
remains outside the correction's shown scope. Current46 difficulty remains frozen
historical evidence. Root's closeout receipt is
`REPORT.md`.
See the [lift stack audit synthesis](../audits/lift_stack_review.md) for review
findings and [gameplay direction](../reports/gameplay_direction.md) for the next
priority: focused observation of opening clarity and pacing using Schell's lenses,
without a new-mechanic quota or a committed room.
