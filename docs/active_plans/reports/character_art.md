# Character art evidence

The canonical editable images are [isp.svg](../../../src/assets/isp.svg) and
[pac.svg](../../../src/assets/pac.svg). Both use a transparent `0 0 240 240` viewBox,
proportional strokes, navy ink, a shared foot baseline near 224, and prefixed semantic groups.
The intended consumers are HTML images and Canvas `Image` / `drawImage`.

## Original construction

The supplied [Barnsyverse reference](https://www.barnsyink.com/barnsyverse) informs silhouette
variety, oversized eyes, expressive proportions, and ink contours. The page screenshot was
inspected at `/private/tmp/barnsyverse_page.png`; no reference artwork is embedded or traced.

Mental thumbnail alternatives compared a comet, spring, and angular live wire for Isp, and
a crescent, mushroom, and scalloped fan for Pac. The selected pair emphasizes different masses:

- Isp has swept pointed tips, an asymmetric bent waist, offset eager eyes, and a raised stop palm.
- Pac has a wide scalloped crown, tapered fan body, planted stance, and a confident sideways grin.

The blue angular silhouette and orange broad lobes remain distinct in black at gameplay size.
Outer contours use 7-8 units; face details use 4-6. Flat highlights and a single side shadow
support the large masses. The eyes and mouths remain prominent after reduction.

## Drawing passages used

Focused local-only sources under
`/Users/vosslab/.codex/skills/experts/svg-creator-expert/references/`:

- `local-only/drawing_fundamentals/Drawing_Mentor_1-3_Drawing_Materials_Lines_and_Shapes_Perspective_and_3D_Shapes-2013.md`,
  lines 645-662: basic-shape construction and the flat, one-color silhouette exercise.
  Applied by choosing contrasting outer masses before adding faces and shading.
- `local-only/svg_authoring/Mastering_SVG-2018.md`, lines 635-666:
  viewport/viewBox scaling. Applied with one shared coordinate contract and proportional geometry.

The skill's object-illustration, project-workflow, and testing-oracle references guide semantic
layering, image-boundary accessibility, and rendered inspection.

## Verification

- Python ElementTree parses both SVGs. Namespace/viewBox, unique prefixed IDs, accessible label
  references, and self-contained geometry pass. Neither file contains scripts, fonts, text,
  embedded images, or external dependencies.
- Chromium renders both through HTML images and Canvas. Inspected 30 x 36 gameplay images,
  200px title images, 240px detail views, and black silhouettes on cream and navy backgrounds.
  Review sheet: `/private/tmp/character_svg_review.png`.
- Shapes, faces, margins, and baseline pass visual inspection. Navy outlines naturally merge
  with navy backgrounds; bright fills and eye whites preserve the readable character masses.
- `npx tsc --noEmit` passes. Integration and final game screenshots belong to the integration pass.

Standalone SVGs expose `title` and `desc`; HTML callers supply their own appropriate `alt` text.
Temporary renderer and validation scripts remain outside the repository in `/private/tmp`.
