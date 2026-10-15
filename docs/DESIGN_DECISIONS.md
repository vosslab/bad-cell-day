# Design decisions

<!-- VENDORED HEADER: START -->
Record each durable decision about how this code and repository are shaped, once it is settled, with
the reasoning a later reader needs. Guidance Neil Voss states belongs in
[HUMAN_GUIDANCE.md](HUMAN_GUIDANCE.md), dated history in `docs/CHANGELOG.md`, open discussion in
`docs/active_plans/decisions/`. [PROPAGATED HEADER - ENTRIES BELOW ARE YOURS]
<!-- VENDORED HEADER: END -->

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
[active_plans/active/bad_cell_day_plan.md](active_plans/active/bad_cell_day_plan.md).

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
[active_plans/active/bad_cell_day_plan.md](active_plans/active/bad_cell_day_plan.md).

Write each decision as a level-three heading with these four fields. `Owner` names the
authoritative code or contract document, rather than a person.

```markdown
### <decision title>

**Decision.** <the durable direction>

**Why.** <the reason it was chosen>

**Consequence.** <the constraint a future change preserves>

**Owner.** <the authoritative code or contract doc>
```
