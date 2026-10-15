# Tutorial campaign transition: level 5 to level 6

The current served browser build completes level 5 through ordinary keyboard input,
offers **Next level**, and advances to level 6. Reloading preserves the actual level 5
completion and leaves level 6 unlocked.

Historical command: `node tests/playwright/_temp_transition.mjs` with the existing build
served at `http://127.0.0.1:8123/`. Chromium required the approved host launch because
the sandboxed launch fails on macOS with the MachPortRendezvousServer permission error.
The run exited 0. The temporary runner was removed after recording this report.

## Browser route and evidence

The browser used Playwright's installed clock and the visible level menu. It seeded only
the four earlier completion records needed to select level 5; level 5 started from its
authored state. All gameplay used normal `keyboard.down` and `keyboard.up` events. Canvas
data attributes were read to observe player coordinates and phase; no game state,
simulation data, or input events were directly mutated or dispatched.

The route was: Isp holds STOP at x132.5; Pac jumps from x180 across the ferry to the
island, landing at x530 and holds STEADY at x563.25; Isp follows over the ferry, lands at
x533.42, jumps over Pac to x692.67, then crosses the stable bridge and activates RESCUE
at x970.92; Pac crosses the bridge and jumps over parked Isp to x1055. The completion
panel read `0:10 · 0 retries · 2 / 2 sparks`.

Before advancing, the canvas reported `data-level-id="level_05"`, and the visible button
read “Next level.” Clicking it changed the canvas to `data-level-id="level_06"` and the
page title to **Narrow Escape**. The persisted completion included level 5 with
`bestTime: 10.583333333333373` and `bestCollectibles: 2`. After reload, the level menu
showed level 5 as enabled **Replay** and level 6 as enabled **Ready**. No page errors or
console errors were observed.

The served build was identified by these SHA-256 hashes:

| File | SHA-256 |
| --- | --- |
| `dist/main.js` | `ad7abbefcf78f9bb61f06cbbdc85393d01c2729543c64c635e88f9ec48d1394b` |
| `dist/index.html` | `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7` |
| `dist/style.css` | `340166d4b2b0f7a160ca17bef356eba62543a7b22cb16ce5157056e81f7f2265` |

This verifies the rendered browser transition and saved unlock for this route. It does
not test gameplay in level 6 or other campaign levels.
