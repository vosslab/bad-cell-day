# Intestine tissue architecture

## Status and authority

**DONE_WITH_CONCERNS; root accepted under I3.** This bounded presentation milestone continues the
accepted Gut Instinct direction. One original intestine atlas makes active horizontal intestine
shelves read as swollen gut tissue while preserving clear landing edges. It adds no gameplay
mechanic. Human readability, enjoyment, discovery, and comfort remain unmeasured. Root owns scope and
final acceptance; cross-cutting design changes and architecture decisions require architect
approval.

## Scope and contract

- A fresh Astra art owner creates `src/assets/intestine_tissue_surface.svg` and ignored previews.
  Use an original warm intestine palette, swollen mucosal folds and villi, and playful-gross tumor
  nodules. Make the anatomy readable on 16-20 px shelves and a 120 px floor.
- Reuse the accepted [brain atlas rendering contract](brain_tissue_architecture.md):
  `viewBox="0 0 128 120"`; thin crop
  `(0, 0, 128, 20)` below 40 px height; deep crop `(0, 24, 128, 96)` at or above 40 px; 4 px
  gutter; proportional horizontal repeat; rounded shared tile boundaries; and clipping of the final
  tile to the authoritative platform rectangle.
- Integrate only for active, horizontal, solid intestine surfaces. Draw the existing continuous
  3 px top rim. Keep false gaps, spikes, and pads out of the art. Preserve the current procedural
  fallback when the image is unavailable or fails to load.
- Leave all 34 campaign definitions, scenes, order, geometry, physics, controls, types, state,
  configuration, other organs, and dynamic, inactive, narrow-vertical, and non-solid intestine
  rendering unchanged. Add no renderer modes or permanent tuning tests.
- Do not begin source integration until root accepts the finished art against the atlas and landing
  edge contract. Add the asset to the existing required-source, copy, and output lists in
  `build_github_pages.sh` in the same integration change.

## Acceptance ledger

| Gate | Owner | Status / evidence |
| --- | --- | --- |
| Atlas and scope contract | Root | APPROVED by this plan; based on `tests/_temp/intestine_surface_boundary/REPORT.md` and the accepted brain plan. |
| Original artwork, XML, thin/deep previews, and repeat | Fresh Astra artist | COMPLETE; root accepted asset SHA-256 `3a95163ea6e12cd5b473eedd8cbc04dfb471f17190012e07c19b21407bda6cd8` for integration after validation and actual-size proof. See `tests/_temp/intestine_tissue_artist/REPORT.md`. |
| Visual decision | Root | ACCEPTED FOR INTEGRATION (I2); thin shelves read as gut lobes, deep folds and inset nodules remain blunt, and the clear rim is the only strong landing line. |
| Source integration and focused owner checks | Fresh Luna integrator | COMPLETE; 25 insertions/10 deletions limited to `render_tissue.ts` and `build_github_pages.sh`; see `tests/_temp/intestine_tissue_integration/REPORT.md`. |
| Root source gate and official build | Root | COMPLETE; 90 Node checks plus TypeScript/lint/format, official build, 2/2 smokes, 34-definition identity, and served/disk parity; hashes are in the acceptance ledger. |
| Frozen-build browser review | Fresh browser owner, then root | COMPLETE; all three risk-driven contexts pass on the frozen build. See the acceptance ledger. |
| Fresh SPEC, distinct QUALITY, integration review | Separate fresh reviewers, then root | COMPLETE; all three pass with no material source findings. Root accepts under I3 as DONE_WITH_CONCERNS. |
| Documentation closeout | Root | COMPLETE; final disposition and limits are recorded in the acceptance report. |

## Execution and evidence limits

1. Fresh Astra produces the single SVG and reports XML validity, crop/repeat previews, and hashes.
   Root accepts or returns the artwork before source work starts. I2 accepts the submitted asset for
   integration; the artist report and hash are recorded in the acceptance ledger.
2. Fresh Luna implements the accepted art contract in the existing renderer seam and adds the asset
   to all three existing build lists. Report focused checks and diff scope.
3. Root runs the source gate, official build and two existing smokes, then confirms served asset
   parity. Freeze source before browser capture.
4. A fresh browser owner captures the listed focused contexts on the frozen build using existing
   tools. Fresh SPEC, QUALITY, and integration reviewers assess that same source/build identity.
5. Root records final disposition and updates this plan and its linked acceptance ledger.

The browser gate uses exactly these three contexts:

1. Normal motion in Gut Instinct covers the actual thin stairs/ledge and deep floor, hero/pad/Gem
   readability, and a retained ordinary route.
2. Reduced motion in a representative intestine ferry room covers dynamic carrier and state cues,
   the new static art, and a retained ordinary route.
3. Intentional failure of the new SVG covers the procedural fallback and functional ordinary
   movement.

Use existing capture tools, dedicated capture, and private one-time helpers. Do not add a preview
interface. Keep these checks tied to the listed risks; the independent thin/deep by
normal/reduced-motion matrix is not a gate.

This is a presentation-only milestone. Accepted Gut Instinct gameplay evidence remains valid; do
not replay all 34 rooms absent a concrete changed risk. Captures do not establish human readability,
fun, discovery, or comfort. Do not add preview interfaces or broaden this into a feature queue.

## Questions and escalation

Raise concrete scope or contract questions at the relevant gate. Challenge requirements that lack
evidence or conflict with clear landing edges. Root resolves bounded scope questions; cross-cutting
design changes and architecture decisions go to the architect for approval.
