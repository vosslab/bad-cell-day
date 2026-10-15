# Character prominence visual acceptance

Date: 2026-10-14. Result: PASS for the final build identified below.

## Browser evidence

The rendered build was served at http://127.0.0.1:8123/ and opened in headless Chromium.
The temporary Playwright harness paused the browser clock, advanced animation frames explicitly,
and used real public Play, Levels, movement, pause, resume, and retry controls. Saved completion
records unlocked levels; no gameplay positions, mechanism flags, or simulation results were
injected into the real gameplay captures.

At each viewport, levels 1, 6, 10, 14, and 20 cover the opening scene, narrow passages, crowded
lift, rolling bomb, and boss overview. Ordinary simultaneous keyboard movement, pause stability,
resume, and retry passed at all four sizes, without console or page errors.
At 1280 x 800, all 20 opening scenes were captured and opened directly; all 40 opening quips
were also verified from the final canvas frame's actual fillText calls. Both villains' faces,
speech, and distinct molecular silhouettes remain readable. The hero faces and complete puzzle
overview remain readable in the representative narrow, crowded, and boss scenes.

| Viewport | Canvas CSS size | Notes |
| --- | --- | --- |
| 1280 x 800 before | 728.30 x 410.48 | Original scale. |
| 1280 x 800 after | 1002.30 x 564.92 | Whole world visible; toolbar fits above the viewport bottom. |
| 1440 x 900 after | 1179.70 x 664.92 | Whole world visible. |
| 1000 x 650 after | 946.00 x 533.19 | Vertical scrolling exposes the complete stage and controls. |
| 1280 x 450 after | 706.00 x 397.92 | Short viewport retains a readable world; HUD and controls need scrolling. |

The game canvas remains 1100 x 620 world pixels. At 1280 x 800, the framing gain is 1.376 times;
combined with the 1.6 times character art enlargement, on-screen character dimensions grow about
2.20 times. Full-page screenshots show document content beyond the viewport; they do not imply
all supporting cards fit without scrolling. No horizontal document overflow occurred.

The 1280 x 800 title screenshot is byte-identical before and after the final implementation:
SHA-256 97696bbbc82982f75ad36ce7fc03364a8ceb517460564cfe05f7035a4e6c5d34.

## Render-only fixtures and corrections

Separate fixtures bundle the current source renderer and create explicit states. They verify
rendering and are not gameplay traversal proof. Fixtures cover touching heroes in both orders,
stacking in both orders, the left and right world edges, and a low ceiling. Foot markers continue
to identify the collision position when enlarged silhouettes extend beyond the collision body.

The first visual pass found two defects: horizontal world edges clipped faces, and the level 6
opening speech bubbles overlapped. Initial defect screenshots are retained with an `_initial`
suffix under [output_prominence/after](../../../output_prominence/after/). Final correction review
confirmed that horizontal art clamping preserves both faces and separates identity labels at
both edges, for either hero order. Foot markers remain on the physical collision feet. Ordinary
leftward movement also reached Isp x=0 and Pac x=30 in level 1, with both faces visible.
The level 6 speech bubbles now occupy separate clear rows; all 20 openings retain both full quips.
Touching and stacking produce overlapping molecular branches, but both faces and identities remain
visible in either order. Low-ceiling art can extend across the ceiling while its collision footing
stays readable; the renderer does not alter the actual passage geometry.

A top-edge stress fixture at player y=0 clips the enlarged head. It is outside authored gameplay:
the highest authored platform top is y=300, including motion offsets, while the jump rise is about
92 world pixels. This artificial case does not establish a reachable regression or require a
vertical render offset that would detach art from its feet.

## Artifacts and limits

Ignored local evidence lives under [output_prominence](../../../output_prominence/). Final
screenshots, frame text, browser metrics, and dist hashes are in `final/` and `final/results.json`.
Screenshots were opened and inspected directly. This review does not claim a new full campaign
completion run; physics and progression coverage remain distinct from visual acceptance.

The final source map embeds exact current source text for render_characters.ts, render_game.ts,
render_villains.ts, and app.tsx. The final dist hashes are:

| Artifact | SHA-256 |
| --- | --- |
| dist/index.html | 15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7 |
| dist/style.css | 4f7c80c21b30d39fadc38ae3c5c6fec881c1882763bc60d31ecaa561b06cda26 |
| dist/main.js | 349989e785fecf627efc82a6a0dc3e151e370dafb0933f0245df0aa7780f3425 |
| dist/main.js.map | 22fee2a834c71c1af89523fddbc4b7b96b1647045c14229f87948f6166e99b7e |

The temporary capture and fixture harnesses and generated fixture bundle were removed after
evidence was recorded. No permanent tests assert tunable art or viewport dimensions. Manager-run
full codebase and permanent keyboard smoke checks are recorded separately in the ledger.
