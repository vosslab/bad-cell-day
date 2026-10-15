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

**Decision.** Render Isp and Pac at 1.6 times their former art scale, from about
55 to 88 world units tall; render villains at 1.6 times their former scale.
Preserve the complete game world and the 30x36 physics bodies. Use a compact
active-play desktop shell to recover height previously spent on cards. In rendering, own
`VILLAIN_ART_SCALE` and `draw_player_overlay`; depth-sort lower characters first,
then draw the final contact cue at physics feet with labels. Adjust speech bubbles
and their connections to the new art positions.

**Why.** Larger characters need to read clearly while preserving the established
world, routes, and collision behavior. The compact shell gives active play more
vertical room, and feet-based ordering keeps overlap and contact cues legible.

**Consequence.** Keep character prominence in renderer-owned scale and overlay
logic, with labels and contact cues aligned to physics feet. The 1002-pixel canvas
target within a 1280x800 browser view remains pending browser confirmation.

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

Write each decision as a level-three heading with these four fields. `Owner` names the
authoritative code or contract document, rather than a person.

```markdown
### <decision title>

**Decision.** <the durable direction>

**Why.** <the reason it was chosen>

**Consequence.** <the constraint a future change preserves>

**Owner.** <the authoritative code or contract doc>
```
