# Hero campaign browser acceptance

PASS: the final hero-response build completes all 22 rooms in one continuous fresh-save run.

A fresh Chromium context starts with an empty completed list, uses the visible Play button,
21 visible Next level clicks, and ordinary keyboard movement and jumps. Every room earns a
completion record during this journey, with zero retries. Reload preserves the earned save
byte-for-byte and all 22 Levels entries contain Replay. Console/page errors, failed requests,
and HTTP errors are zero. All 6 document images decode.

## Frozen artifact

- Served build: http://127.0.0.1:8127/.
- main.js SHA-256: `facb97697aef32e9585835e2fcb48e910316ef4e937b7a34d0a3cc772a087347`.
- main.js.map SHA-256: `af7c8a3ad00ed060e6e199985f2ed7b24e20e4ce35336392900d08b36ffb7bd6`.
- style.css SHA-256: `edda4b8751aaa681ec73aaedc14d44ddef722da289e2f420cf1f32d700ee68b8`.
- HTTP index, main script, map, and style bytes match disk before input.
- Every embedded source matches disk: 33 map entries, including 31 authored sources and
  2 Solid dependencies. Source/build hashes remain frozen through final acceptance.
- Browser: installed headless Chromium at 1280x900, default motion preference.

## Method and scope

The temporary bare-library harness adapts the retained earlier campaign controller to distinct
hero-campaign paths. Finite Playwright fake-clock intervals advance real keyboard events.
Read-only canvas datasets supply hero positions, effect states, stable room IDs, and phase.
Navigation uses visible accessible buttons. Local storage is read for assertions; achievements,
hero state, mechanisms, teleport positions, and simulation input are not injected.
Existing timed route assets remain the route source, with their hashes and copied input JSON
recorded alongside results.

The driver has been removed from `tests/_temp/`; restore it from the archived source linked below
before using its historical command.

This proves scripted full-campaign operability, completion progression, persistence, and Replay
availability for this artifact. It does not measure human route discovery, difficulty, enjoyment,
two-human coordination, reduced-motion comfort, or every alternate route. Dedicated hero-response
behavior checks belong to their separate report. No product edit, build, or broad suite runs
belong to this acceptance lane.

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

## Screenshot review

Directly inspected final-run completion screenshots at positions 2, 13, and 22 and the reload
Levels screenshot. The completion overlays show readable headings, summaries, villain cards,
and reachable Next level/Replay controls without overlap. The finale shows its distinct saved-cell
message and Replay control. The reload screenshot shows a readable scrollable Levels dialog;
the DOM assertion, rather than the single viewport image, verifies all 22 Replay entries.
This is representative desktop review, not an exhaustive visual audit of every state.

## Evidence and execution

Final evidence lives under `test-results/hero_campaign/`: `results.json`, `run.log`,
44 numbered opening/completion PNGs, `reload_22_replay.png`, copied route inputs, and a retained
source copy. The exact driver is archived at
[hero_campaign_browser.mjs.txt](../../../test-results/hero_validation_harnesses/hero_campaign_browser.mjs.txt).
Its executable copy has been removed from `tests/_temp/`; restore it before running the historical
commands below. See the [harness restore guide](../../../test-results/hero_validation_harnesses/README.md)
for exact commands, dependencies, and historical fixture requirements.

The first build's evidence remains under `test-results/hero_campaign/provisional/`.
It completes the campaign and reload, but the final source-freeze assertion fails because the
boarding-panel layout source changes during that run. It is superseded and is not final acceptance.
The final fresh run starts after the corrected build is frozen and passes every assertion.

The initial sandbox launch fails at macOS MachPortRendezvousServer permission denied; its log is
retained with provisional evidence. The identical installed browser then runs through approved
host execution. The final browser command exits 0. No dependency installation occurs. Restore the
archived driver before using these historical commands:

```bash
node --check tests/_temp/hero_campaign_browser.mjs
node tests/_temp/hero_campaign_browser.mjs > test-results/hero_campaign/run.log 2>&1
```

Changelog and shared-document integration belong to the coordinating manager.
