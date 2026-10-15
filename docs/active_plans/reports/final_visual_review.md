# Final visual review

Status: PASS for the requested seeded visual review of the final build.

## Scope and evidence

The final built game was served at `http://127.0.0.1:8123/` and inspected in headless
Chromium. The one-time command was `node tests/playwright/_temp_art_review.mjs`; the ignored
temporary driver was removed after capture. Screenshots and machine-readable results remain in
`/private/tmp/bad-cell-day-final-visual/`.

Levels 14, 16, 19, and 20 were selected using seeded completed-level records solely to inspect
representative scenes. This is visual evidence, not level-completion evidence. Independent
movement and completion checks own gameplay acceptance.

## Final inspected build

| File | SHA-256 |
| --- | --- |
| dist/main.js | ad7abbefcf78f9bb61f06cbbdc85393d01c2729543c64c635e88f9ec48d1394b |
| dist/index.html | 15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7 |
| dist/style.css | 340166d4b2b0f7a160ca17bef356eba62543a7b22cb16ce5157056e81f7f2265 |
| dist/assets/isp.svg | 546395af4d32d75d9b89ac4f8ff9fc79f1fd6605b8c337cfdc10dffd5d5dbd9b |
| dist/assets/pac.svg | 96d2722390a6721fee089926cb41e08792dc55ef12f05caf6ad23fd6d1d180e1 |

All eight screenshots were opened and inspected directly: `title_1280x800.png`,
`title_1440x900.png`, `level_01_1440x900.png`, `level_14_1440x900.png`,
`level_16_1440x900.png`, `level_19_1440x900.png`, `level_20_1440x900.png`, and
`cards_768x1024.png`.

The molecule-first ringbond characters show their blue and orange branches and expressive faces
clearly in the title illustration and character cards. At gameplay scale, both remain
recognizable against the burgundy tissue backgrounds, and their feet visually meet the ground
in the inspected starting scenes. Play and the player-count note are fully inside the title
stage at both desktop sizes. Gameplay controls, gates, platforms, slime, collectibles, and
exits remain distinguishable from the tissue backdrop. The late scenes contain crowded
machine-adjacent labels, but the controls and exits remain visible.

## Browser checks

- Both SVGs load successfully with HTTP 200. DOM images report `complete` and
  `naturalWidth: 240` in the captured states.
- No failed requests, console errors, or uncaught page errors occurred.
- The page has no horizontal overflow at 1280, 1440, or 768 CSS pixels; both cards also have
  `scrollWidth` equal to `clientWidth`.
- The Play button and player-count note remain within the title stage at 1280x800 and
  1440x900.
- In the gameplay captures (levels 01, 14, 16, 19, and 20), draw-image instrumentation
  recorded direct SVG `drawImage` calls for both characters. The captured destination arguments
  were `[-19.2857, 0, 38.5714, 38.5714]` (x, y, width, height), with natural image dimensions
  of 240 × 240 pixels. This records the draw size in those gameplay captures; character
  appearance was also inspected visually in all captured views.

The final capture replaced the screenshots in the evidence directory and recorded the hashes
above in `results.json`. The source and built SVG hashes match.
