# Partner pose art prototype

2026-10-15. Status: DONE_WITH_CONCERNS for the prototype task. Root viewed and approved the four
B assets for production promotion; their bytes are frozen. Subsequent renderer implementation,
fresh SPEC, and distinct QUALITY accept the selected art. Built actual FLOAT rides and the final
geometry/terminal, temporal, and image-loading matrix pass. Fresh independent integration
ACCEPTS WITH CONCERNS and explicit manager acceptance closes the combined milestone as
DONE_WITH_CONCERNS. The open shared Podman budget holds new feature development; continuous game
development remains ACTIVE. See [recurring_villain_pressure_acceptance.md](recurring_villain_pressure_acceptance.md).
The evidence below records the original art-only task; that task changed no production source.

## Recommendation

Select composition B, the open cradle. It separates both expressive faces at the
existing gameplay size by changing connected molecular poses. Isp looks up from
its braced fused rings; Pac raises its two phenyl hands and brightens its eyes.
The reverse pair gives Pac the broad supporting stance and Isp two balancing arms.
The original ring vocabulary, palettes, molecular connections and faces establish
each identity. This is original geometry derived from the repository artwork.

All paths below are under `test-results/recurring_pressure/partner_poses/art/`:

| Role | Recommended SVG | SHA-256 |
| --- | --- | --- |
| Isp supporting | `isp_support_b.svg` | `8bafa40fbfd20eb56c23114a8c75fd78b5530e75908f57f58b3f3f96b6e460b8` |
| Pac riding | `pac_ride_b.svg` | `b2f0dced652c96ede88b4dca5a59cc88f779a862d76265313f896c9eb90fd290` |
| Pac supporting | `pac_support_b.svg` | `cca437e4fcd2daac7caa11e6d62d429478de961c4814ca154521c03faf853da4` |
| Isp riding | `isp_ride_b.svg` | `4c5a8c3a047ba2157a08b51345fdaba1e10e19c5a8917202adfce04f8b1d2a00` |

Composition A (`isp_support_a.svg`, `pac_ride_a.svg`) raises Pac's hands but leaves
an eye partly behind Pac's foot in centered/opposite-facing cases. Reject A.
B lowers Isp's fused core/face locally by 44 source units and moves it left 14;
Pac's riding torso rises 18 source units. This changes the articulated pose within
the same asset basis. It preserves the two full-size original feet of each hero.

The manager explicitly authorized the two reverse assets after observing canonical
reverse eye occlusion. Reusing a primary-role asset for the opposite role would
communicate the wrong pose.

## Visual contract and evidence

Delivery is a static, transparent, standalone SVG decoded as an image and drawn by
Canvas. Every SVG retains `width="240"`, `height="240"`, and
`viewBox="0 0 240 240"`; semantic groups, IDs, title and description stay editable.
The molecular structure is a game simplification inherited from the source, not a
new chemical or scale claim. Character size is 88 pixels from nominal source top
to sole anchor, with uniform draw size `88 * 240 / 224 = 94.285714...` pixels.
Physical bodies stay 30 by 36 pixels; partners' physical feet differ by 36 pixels.
Both canonical foot path contours remain byte-equivalent and have no transformed
ancestor. The coordinate system, opacity and collision geometry are unchanged.

Native-size atlases use the renderer's sole-anchored FLOAT shear/scale,
normal-motion bob/squash, facing reflection, and lower-body-first draw order at
animation time 3.77. They omit identity labels so labels cannot hide an art failure.
Each atlas covers all four Isp/Pac facing combinations and horizontal center
separations -20, 0 and +20 pixels. I inspected all 72 B cases across primary/reverse
roles and ordinary/normal-FLOAT/reduced-FLOAT presentation.

| Evidence | Purpose |
| --- | --- |
| `same_facing_detail.png` | Original/A/B paired detail; B has clear eyes and smile |
| `float_normal_atlas.png` | Primary original/A/B at actual 88-pixel size, all 12 geometries |
| `float_reduced_atlas.png` | Same primary matrix with reduced motion |
| `ordinary_stack_atlas.png` | Primary ordinary head-stack matrix |
| `reverse_detail.png` | Canonical versus original reverse-role pose detail |
| `reverse_ordinary_atlas.png` | Reverse ordinary head-stack matrix |
| `reverse_float_normal_atlas.png` | Reverse carrier under FLOAT transforms |
| `reverse_float_reduced_atlas.png` | Reverse reduced-motion FLOAT matrix |
| `room_primary_native_comparison.png` | Original/B, normal/reduced, exact native 1100 by 620 room canvases |
| `room_reverse_native_comparison.png` | Corresponding synthetic ordinary reverse fixture |
| `room_b_normal_1280.png`, `room_b_reduce_1280.png` | Primary B in a 1280-pixel browser viewport |
| `room_reverse_b_normal_1280.png`, `room_reverse_b_reduce_1280.png` | Reverse B in that viewport, explicitly synthetic |

The native comparison sheets retain source canvas pixels exactly; their assembly
helper compares every RGBA channel after drawing at integer coordinates. Each
sheet places two 1100 by 620 canvases per row, with captions outside the game area.

The primary room preview uses current `render_game`, the current room 24 definition
with its authored villain scene, and the first `rising` sample from
`test-results/float_passenger/feasibility/browser_samples.json`. Time is
3.774000000000003; Isp rect y is 425.95999999999935 and Pac rect y is
389.95999999999935. Both retain their sampled x positions and support relationship.
The same captured simulation state is rendered for original and B, including the
existing labels, bubble and scenery. Background image decoding completes before
capture. Its state files are retained as `room_*_state.json`.

The reverse whole-room fixture swaps the sampled physical sole positions and
support relationship, clears interference/recovery effects, and renders an
ordinary reverse stack. Captions identify this as synthetic. It is evidence about
art in context; it does not establish a naturally reached reverse ride in room 24.

## Checks and limits

`verification.json` records successful XML parsing, ASCII, unique IDs, accessible
name references, static/self-contained content, transparent corners, image decode,
exact original foot contours and untransformed foot ancestry for all eight SVGs.
There are no scripts, external images, event handlers, animation or URL references.
All artwork remains inside the 240 by 240 viewBox.

The nominal source sole anchor is y=224. A decoded-alpha scan at source size finds
Isp's original painted lower row is 225, while Pac's is 224; the variants retain
those exact original painted lower rows. This pre-existing stroke overshoot was
preserved with the canonical feet. It is separate from the renderer's nominal
224 anchor and its unchanged collision-foot bracket.

B materially improves face separation and friendly role cues. At extreme offsets,
limbs can still touch or cross a partner's limb/foot outline. Molecular ring detail
is necessarily small at 88 pixels. Physical support remains communicated by the
existing foot brackets; this artwork does not enlarge or relocate the support
surface. Identity labels retain their current placement and may sit near raised
branches. The fixture does not evaluate selector transitions, asset loading during
actual input, gameplay routes, novice interpretation, or browser acceptance of an
integrated product build. Those require fresh integration and review.

Room captures reported no page errors (`room_render_errors.json`). Exact
`npx tsc --noEmit -p tsconfig.json` exited 0 after helper archival. No new permanent
tests were added. A transient `room.ts` initially exposed an unchecked sampled-group
lookup to the project compiler; it was corrected with explicit group/sample checks
and archived as `room.ts.txt`. No compiler or lint configuration changed.

## Reproduction and source custody

`isp_baseline.svg` and `pac_baseline.svg` are copies of the canonical source assets;
their hashes are `546395af4d32d75d9b89ac4f8ff9fc79f1fd6605b8c337cfdc10dffd5d5dbd9b`
and `96d2722390a6721fee089926cb41e08792dc55ef12f05caf6ad23fd6d1d180e1`.
The accepted game build supplied to this task had main hash
`a7ef8689a1d043451722e2f1e24542842a1bd9bc3abad4789799b34368eef084` and map hash
`cf61676ce709ea0c239e73d23816afef22499b070fb52548924620c52b876018`.
That identifies the symptom evidence, not a newly built product artifact.
`SHA256SUMS` inventories final prototype files and evidence.

Executable construction/capture helpers are archived as `.txt` after use, and the
temporary generated room bundle is removed. The archived sequence is:

1. Run `construct.mjs.txt` as a temporary `.mjs` to copy and construct A/B from the
   copied baselines, then `refine_reverse.mjs.txt` for final B and reverse poses.
2. Run `preview.mjs.txt` and `reverse_preview.mjs.txt` with local Playwright to create
   the native character matrices and 3x inspection details.
3. Bundle `room.ts.txt` through esbuild's `stdin` API with `loader: "ts"`,
   `resolveDir` pointing to this art directory, `bundle: true`, `format: "iife"`,
   and output `room.js`. Run `room_capture.mjs.txt`; its HTTP server binds only
   `127.0.0.1` on an ephemeral port and serves source assets read-only.
4. Run `verify.mjs.txt`, then `combine.mjs.txt` to consolidate the native canvases.
5. Archive temporary helpers again, remove `room.js`, run the exact typecheck,
   and regenerate the SHA-256 inventory.

Chromium required sandbox escalation because macOS rejected its Mach port
registration within the sandbox; the authorized local rendering calls succeeded.
All helper code and art remained inside this task's assigned directory. No Git
index action, product source change, build replacement, or shared-doc change was
performed by this task.

## Focused local drawing passages

Used `vosslab-skills:svg-creator-expert` with its task-selection, targeted-editing,
project-workflow and local-books guides. The following local passages informed
actual decisions; the books supplied construction methods rather than art to copy.

| Local book path under `/Users/vosslab/.codex/skills/experts/svg-creator-expert/references/` | Focused passage and application |
| --- | --- |
| `local-only/drawing_fundamentals/The_Everything_Drawing_Book-2005.md:730-740` | Negative-space construction: design the clear region between a rider's feet and its carrier's eyes before polishing ring details. |
| `local-only/svg_authoring/Mastering_SVG-2018.md:635-676` | ViewBox/viewport relationship: retain the existing 240-unit coordinate system and let the established Canvas size govern delivery. |
| `local-only/scientific_illustration/A_Handbook_of_Biological_Illustration-1988.md:210-225` | Planning final reproduction size: judge the paired faces at 88 pixels and use enlarged details only for contour inspection. |

The original artwork and task's observed overlap supplied the subject reference.
No external artist's characters, imagery, styling or assets were copied.
