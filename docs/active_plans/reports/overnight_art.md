# Tumor scenery art handoff

## Delivered assets

- [tumor_bubble_organ.svg](../../../src/assets/tumor_bubble_organ.svg): unequal swollen lunglike
  lobes, membrane folds and vesicles, sleepy eye, two small teeth.
- [tumor_glucose_organ.svg](../../../src/assets/tumor_glucose_organ.svg): lopsided heart mass,
  curled conduits, branching veins, three amber hexagonal sugar nodes, pursed valve.
- Both files use intrinsic `width="320" height="200"`, `viewBox="0 0 320 200"`, transparent
  backgrounds, proportional strokes and meaningful prefixed group IDs.

The route is original object illustration for decorative scenery. Biology is deliberately
fictional and stylized. The molecular heroes remain the visual focus through their brighter
blue/orange colors. Organs use burgundy flesh with dark plum outlines, three broad surface
values, pink folds and small restrained amber lights. They contain editable vector paths,
ellipses and circles, plus one self-contained radial gradient.

## Renderer contract

Load through `Image` and draw with Canvas `drawImage`, matching the existing hero asset boundary.
Preserve the 8:5 aspect ratio. Intended sizes span 160x100 through 320x200 CSS pixels. Position
them in upper background scenery behind characters and playable geometry. A suggested maximum
alpha of 0.7 can lower their prominence in the actual room; the proof uses full asset opacity.
The renderer owns scene movement, reduced-motion behavior and final placement. These images
carry no collision information or animation. For an HTML image embed, use `alt=""` because they
are decorative; standalone SVGs include title/description metadata for editing and inspection.

## Reference and construction

Reviewed [Barnsyverse](https://www.barnsyink.com/barnsyverse) and an actual image from that page:
[red balloon character reference](https://static.wixstatic.com/media/33cbd2_e4c781294c6a4bb8b182276b6bd238a7~mv2.jpg).
The inspected image shows a red balloon character with a top hat, large asymmetric eyes and
heavy outlines. These observations inform broad cartoon readability. The organ silhouettes,
anatomical inventions and geometry are original. No claim that the source depicts gore is made.
The locally downloaded reference is inspection evidence, not a game dependency or asset.

Read the invoked skill's `task_selection.md`, `object_illustration.md`, `project_workflow.md`
and `local_books.md`. Local book passages read beneath
`/Users/vosslab/nsh/vosslab-skills/skills/experts/svg-creator-expert/references/local-only/`:

- `object_construction/How_to_Draw_Drawing_and_Sketching_Objects_and_Environments_from_Your_Imagination-2013.md`,
  lines 1812-1836, "Working With Volume" and "Planning Before Perspective": major masses and
  surface sections first; compare simple views before details. The bubble combines unequal
  oval masses with a central ribbon; the heart combines a tapered mass with looping conduits.
- `svg_authoring/Mastering_SVG-2018.md`, lines 635-665, "viewBox and viewport in SVG": fixed
  internal coordinates and proportional viewport resizing govern both 320x200 and 160x100 uses.
- `scientific_illustration/A_Handbook_of_Biological_Illustration-1988.md`, lines 280-294,
  clarity, shading convention and perspective: restrict detail, use upper-left light and
  heavier foreground contours with lighter internal folds. The fictional subject adds eyes
  and teeth as cartoon features without anatomical claims.

Read existing [isp.svg](../../../src/assets/isp.svg) and [pac.svg](../../../src/assets/pac.svg)
for contour and grouping compatibility. Existing hero artwork was preserved.

## Verification evidence

- Python standard-library XML parsing passes for both assets.
- IDs are unique: 11 bubble IDs and 16 glucose IDs. URL references and ARIA ID references resolve.
- Source check finds no embedded raster images, script, animation or external runtime resources.
- Chromium successfully decodes both SVG images and renders at DPR=1 at 160x100 and 320x200.
- Inspected `test-results/overnight_art/organs_size_proof.png`
  at actual pixel sizes: both silhouettes remain recognizable; folds, eye/teeth and amber nodes
  survive the minimum size; no clipping or broken fills appear.
- Individual PNGs and the reproduction script were generated under `test-results/overnight_art/`.
  A later permanent Playwright invocation cleaned these temporary proofs; the results above
  record the performed inspection, not a retained artifact. Integrated final-build captures are
  [gem_bubble_relay.png](../../screenshots/gem_bubble_relay.png) and
  [cana_boomerang_console.png](../../screenshots/cana_boomerang_console.png).
  These gameplay captures do not replace the historical isolated 160-pixel proof.
- Initial sandboxed Chromium launch failed at macOS MachPort registration. The approved local
  browser retry rendered successfully.

The remaining acceptance boundary is placement and prominence in the integrated gameplay room.
These isolated asset proofs do not claim integrated gameplay, performance or export acceptance.
The manager owns changelog integration and downstream renderer changes.
