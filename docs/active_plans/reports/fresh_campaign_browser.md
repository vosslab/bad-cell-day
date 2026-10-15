# Fresh campaign browser acceptance

PASS: the final frozen build completes all 22 rooms in one continuous fresh-save browser run.

One fresh Chromium context completes the complete 22-room campaign using the visible Play control,
21 visible Next level clicks, and ordinary keyboard movement/jumps. All rooms earn completion records
during this single journey. The initial save has completed=[]; no achievements, player state,
mechanisms, teleport positions, or simulation input are injected.

The run then reloads the application, verifies the earned save remains byte-for-byte identical,
and verifies that all 22 visible Levels entries show Replay. Every room completes with zero retries.
Console/page errors, failed requests, and HTTP errors are all zero.

## Artifact and method

- Served build: http://127.0.0.1:8127/.
- Final main.js SHA-256: `ac0a8f29eeff6f604896f251c59d6ac2f4b6dd05eb8d9ba7a96267a1fdb472d6`.
- Final main.js.map SHA-256: `bf3bf985f766fc079d06dddab9abd179d9e51833961282de3b60999d3d7b93e7`.
- Final style.css SHA-256: `e2f0248615d9cc6d388b80781ef575ef33e35f56e1acf8855e1c883ffeae131b`.
- HTTP main.js, index, style and map bytes match disk before input.
- All 29 embedded authored sources match disk; all recorded source/build hashes remain frozen.
- All 6 document images decode successfully.
- Browser: installed headless Chromium, 1280x900, default motion preference.
- Finite Playwright fake-clock intervals advance ordinary keyboard events.
- Read-only canvas datasets supply positions, effects, stable room ID, and phase.
- Timed source-route inputs are retained as JSON alongside the browser results.
- Browser input transitions, room results, saved records and hashes are recorded in results.json.
- This proves scripted operability and save progression; human discovery, difficulty, enjoyment,
  two-human coordination, and reduced-motion comfort remain unmeasured.

## Complete campaign results

| Position | Stable room | HUD time | Retries | Sparks |
| --- | --- | --- | --- | --- |
| 1 | 2 | 0:07 | 0 | 2 / 2 |
| 2 | 1 | 0:30 | 0 | 3 / 4 |
| 3 | 4 | 0:09 | 0 | 2 / 2 |
| 4 | 3 | 0:11 | 0 | 2 / 2 |
| 5 | 6 | 0:12 | 0 | 2 / 2 |
| 6 | 8 | 0:11 | 0 | 2 / 2 |
| 7 | 5 | 0:12 | 0 | 2 / 2 |
| 8 | 7 | 0:14 | 0 | 2 / 2 |
| 9 | 11 | 0:13 | 0 | 2 / 2 |
| 10 | 9 | 0:13 | 0 | 2 / 2 |
| 11 | 10 | 0:11 | 0 | 1 / 2 |
| 12 | 12 | 0:14 | 0 | 2 / 2 |
| 13 | 21 | 0:19 | 0 | 4 / 4 |
| 14 | 13 | 0:16 | 0 | 2 / 2 |
| 15 | 14 | 0:09 | 0 | 2 / 2 |
| 16 | 15 | 0:09 | 0 | 2 / 2 |
| 17 | 16 | 0:09 | 0 | 2 / 2 |
| 18 | 18 | 0:05 | 0 | 1 / 2 |
| 19 | 17 | 0:24 | 0 | 2 / 2 |
| 20 | 22 | 0:16 | 0 | 2 / 2 |
| 21 | 19 | 0:12 | 0 | 2 / 2 |
| 22 | 20 | 0:13 | 0 | 2 / 2 |

## Evidence

Artifacts are under test-results/fresh_campaign/. The interim run is preserved in interim_results.json
and interim_run.log. Final results.json, run.log, numbered opening/completion screenshots, and
reload_22_replay.png belong to the final refreshed artifact. The exact temporary driver is
tests/_temp/full_campaign_browser.mjs; its exact source copy is retained at
test-results/fresh_validation_harnesses/full_campaign_browser.mjs.txt.

## Controller corrections

The first attempt assumed fresh localStorage was absent. The application creates a default save
on boot, so freshness is checked by its empty completed list instead. The initial room 1 controller
walked below the raised glucose lift and exhausted its wait budget. The corrected controller boards
from the side through ordinary jumps on a low pass, rides up, and jumps to the balcony. A new fresh
22-room journey then passes. No product edit is made by this acceptance owner.

Chromium launch inside the macOS sandbox fails at MachPortRendezvousServer permission denied.
The identical installed browser runs through approved host execution. No dependency installation,
build, default Playwright runner, or product edit is performed. Changelog integration belongs to
the manager who owns the shared documentation.

## Executed final commands

```bash
node --check tests/_temp/full_campaign_browser.mjs
node tests/_temp/full_campaign_browser.mjs > test-results/fresh_campaign/run.log 2>&1
```

The final browser command exits 0 through approved host Chromium execution. Room 21 includes both
catch-wall corrections in the refreshed frozen artifact; its normal route completes in the continuous
campaign. The interim full campaign also passes, but final acceptance uses only the refreshed build.

No remaining full-campaign browser blocker. Targeted wrong-order/recovery and reduced-motion
acceptance belong to the separate gameplay browser report.
