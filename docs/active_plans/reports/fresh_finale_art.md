# Finale tumor core artwork

Created [src/assets/tumor_core.svg](../../../src/assets/tumor_core.svg) as original,
editable background scenery for the finale. Renderer integration belongs to the
renderer owner. Existing characters and organs are unchanged.

## Visual contract

- Route: stylized vector character/setpiece, with fictional anatomy.
- Source: `src/assets/tumor_core.svg`, transparent `viewBox="0 0 320 210"`.
- Delivery: load with `Image`, draw using Canvas `drawImage` behind gameplay.
- Intended size: about 300 by 200 pixels. Preserve 320:210 aspect ratio when possible.
- Recognition: two unequal heart lobes, purple DNA plumbing on the left, three green
  sugar vents on the right, and a worried central expression.
- Dark plum contours match the existing organs; restrained rose folds describe
  volume. No text, particles, filters, animation, dependencies, or external images.
- Semantic groups separate roots, DNA pipes, vents, lobes, shadows, folds, vesicles,
  and face. Main lobes and membrane also have independent IDs.
- Standalone title/description expose an accessible name; Canvas scenery should
  stay decorative in the host accessibility tree.

Compared vertically stacked lobes, a classic pointed heart, and a wide paired-heart
massing. The wide pair leaves the supply families distinct and concentrates the
expression into a readable central band. The composition checkpoint was sent to
the coordinating agent before implementation.

## Verification

- `xmllint --noout src/assets/tumor_core.svg`: passed.
- `npx tsc --noEmit -p tsconfig.json`: passed after asset creation.
- Chromium/Playwright loaded the SVG over a temporary loopback HTTP server and
  drew the image through Canvas at 300 by 200 pixels, alpha 0.72, over `#663d40`,
  and at 640 by 420 pixels, alpha 1, over a checkerboard.
- Inspected screenshot: `/private/tmp/fresh_finale_art.png`. At the small size the
  lobe silhouette, worried expression, purple pipes and green vents remain clear;
  outer geometry is unclipped. The larger view confirms clean joins and overlaps.
- Browser XML checks: natural image size 320 by 210; 13 unique IDs; no XML parser
  error; both accessible-label references resolve; zero image/script/foreignObject
  elements. No local href or paint-server references require resolution.
- Initial sandbox Chromium launch failed at macOS Mach registration. The approved
  outside-sandbox rerun succeeded using the existing installed browser.
- Actual integrated finale placement and gameplay acceptance remain the renderer
  and browser owners' responsibility. This proves the asset's image-to-Canvas path.

## Drawing references

Used the SVG creator skill and its `task_selection.md`, `object_illustration.md`,
`project_workflow.md`, `local_books.md`, and `testing_and_oracles.md` references.
Focused local passages were read under
`/Users/vosslab/.codex/skills/experts/svg-creator-expert/references/local-only/`:

- `object_construction/How_to_Draw_Drawing_and_Sketching_Objects_and_Environments_from_Your_Imagination-2013.md`,
  lines 1812-1840, **Working With Volume** and **Planning Before Perspective**:
  establish main volumes/proportions before refining contours. Applied as simple
  front-view paired masses with overlap rather than a perspective-heavy reactor.
- `svg_authoring/Mastering_SVG-2018.md`, lines 635-680,
  **viewBox and viewport in SVG**: stable coordinate space and predictable scaling.
- `scientific_illustration/A_Handbook_of_Biological_Illustration-1988.md`,
  lines 278-294, **Clarity** and line hierarchy: limit detail to the picture's
  purpose, strengthen nearer contours, and use overlap to communicate depth.

Project references: both existing tumor-organ SVGs, `render_tumor_organs.ts`, the
final room definition, and `docs/screenshots/gem_bubble_relay.png` established
palette, drawing order, opacity, and the actual game's visual density. Prior game
memory reinforced protecting gameplay readability before decorative biology.

The artwork makes no anatomical or mechanistic scientific claims. No source
geometry was copied; all paths are original. The integration owner should record
the asset in `docs/CHANGELOG.md` with the completed finale change.
