# Final visual review

Status: initial review complete; updated molecular artwork and title layout await recapture.

## Scope and evidence

Headless Chromium inspects the built game served from `http://127.0.0.1:8123/`.
Screenshots and machine-readable results live in `/private/tmp/bad-cell-day-final-visual/`.
The temporary inspection driver is
[tests/playwright/_temp_art_review.mjs](../../../tests/playwright/_temp_art_review.mjs).

Levels 14, 16, 19, and 20 use explicitly seeded completed-level records solely to select
representative scenes. This report provides visual acceptance evidence, not completion evidence.
The manager's independent movement and completion checks own gameplay acceptance.

## Initial inspected build

| File | SHA-256 |
| --- | --- |
| dist/main.js | ad7abbefcf78f9bb61f06cbbdc85393d01c2729543c64c635e88f9ec48d1394b |
| dist/index.html | 15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7 |
| dist/assets/isp.svg | aafbb182a0d4b22c6462bfd725da0f78b6907b84c91b32f5735f10ef502171d7 |
| dist/assets/pac.svg | 0e8c6750f39d345074ff1a2182a8ad4e0fa1613b460cd6011413cf32f0609462 |

All eight screenshots were opened and inspected directly:

- `title_1280x800.png` and `title_1440x900.png`.
- `level_01_1440x900.png`, `level_14_1440x900.png`, `level_16_1440x900.png`,
  `level_19_1440x900.png`, and `level_20_1440x900.png`.
- `cards_768x1024.png`.

## Findings

- The original SVG characters have distinct silhouettes, readable faces and blue/orange identity.
  Their soles visually meet the floor. Canvas instrumentation records both SVG images being
  drawn at approximately 38.57 square game units, with natural dimensions of 240 square units.
- Tissue backgrounds progress from muted burgundy veins to more crowded red/pink tumor clusters.
  Their low contrast keeps solid platforms, gates, slime, collectibles and control pads legible.
- Level 14's compact bomb fits its small authored hazard region; it does not appear as a giant
  decoration or conceal the standing/jumping route. Factory and final-scene bombs remain compact.
- Levels 16, 19, and 20 distinguish blue and orange controls, bright slime, solid platforms and
  machine silhouettes from the organic backdrop. Some machine-adjacent labels are crowded, but
  their pads and exits remain visible.
- Control cards fit at 1440, 1280 and 768 CSS pixels without internal horizontal overflow.
  The 768-pixel capture retains visible keyboard controls and readable text.
- At 1280x800, the title's Play button extends below the stage clipping boundary and its
  player-count note is hidden. The button remains reachable, but the title layout needs correction.
  The 1440x900 title fits fully.

## Browser checks

- Every DOM image reports `complete` and positive `naturalWidth` in all captured states.
- All four observed SVG responses return HTTP 200; no request failures occur.
- No console errors or uncaught page errors occur.
- No horizontal page overflow occurs at the captured widths.

The initial screenshots predate the requested molecular detail additions to the character SVGs.
Their character appearance is superseded when the updated build is recaptured.
