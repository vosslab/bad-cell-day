# Counterweight campaign browser acceptance

PASS: the corrected frozen build completes all 23 rooms in one continuous fresh-save journey.

A fresh Chromium context uses one visible Play click, 22 visible Next level clicks, and ordinary
keyboard movement and jumps. Every room earns a completion record with zero retries. Reload
preserves the earned save byte-for-byte and all 23 Levels entries offer Replay. Console, page,
failed-request, and HTTP errors are zero. All six document images decode.

## Frozen artifact

- Served build: http://127.0.0.1:8127/.
- main.js SHA-256: `a3a900f994066a3c62436c881b324330c480bd8ab997fe2d1b7574faf033fe40`.
- main.js.map SHA-256: `1a488b599a574fa603ab69122fe04e3b6b63230db31a6c0e67e91b573acfe498`.
- style.css SHA-256: `edda4b8751aaa681ec73aaedc14d44ddef722da289e2f420cf1f32d700ee68b8`.
- HTTP index, script, map, and style bytes match disk before input.
- All 36 embedded map sources match disk: 34 authored sources and two Solid dependencies.
- All recorded artifact/source hashes remain frozen through acceptance; final served script matches.
- Browser: installed headless Chromium at 1280x900, default motion preference.

## Method and progression

The temporary bare-library harness adapts the retained hero-campaign controller to distinct paths.
Finite Playwright fake-clock intervals advance real keyboard events. Read-only canvas datasets
supply hero positions, effects, stable room IDs, and phase. Navigation uses visible accessible
buttons. Local storage is read for assertions; no hero, mechanism, completion, or save state is
injected.

Room 23 uses the final 2453-entry 120 Hz authored input timeline. Equal input intervals are grouped
and aligned to finite browser-clock frames. Its copied JSON and hash accompany the result.
Existing route fixtures remain the source for other timed routes; their copied inputs and hashes
are retained with the final run.

The retained 22-room baseline map independently establishes the old order. The comparison asserts
all 22 relative positions remain unchanged, room 23 follows room 10 and precedes room 12, and room 20
remains the finale. Evidence is `test-results/counterweight_campaign/final/baseline_order.json`.
The final visible heading reads "You saved the cell day!" and no Next level button exists there.

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
| 12 | 23 | 0:20 | 0 | 1 / 2 |
| 13 | 12 | 0:14 | 0 | 2 / 2 |
| 14 | 21 | 0:19 | 0 | 4 / 4 |
| 15 | 13 | 0:16 | 0 | 2 / 2 |
| 16 | 14 | 0:09 | 0 | 2 / 2 |
| 17 | 15 | 0:09 | 0 | 2 / 2 |
| 18 | 16 | 0:09 | 0 | 2 / 2 |
| 19 | 18 | 0:05 | 0 | 1 / 2 |
| 20 | 17 | 0:24 | 0 | 2 / 2 |
| 21 | 22 | 0:16 | 0 | 2 / 2 |
| 22 | 19 | 0:12 | 0 | 2 / 2 |
| 23 | 20 | 0:13 | 0 | 2 / 2 |

## Screenshot review

Directly inspected final room 23 opening/completion, final ending, and reload Levels screenshots.
The corrected opening shows both load readings, rider lamps, and docking status clear of villain
dialogue. Completion overlays have readable headings, summaries, villain cards, and reachable
Next/Replay controls. The finale shows its distinct saved-cell heading and Replay control.
The reload dialog is readable and scrollable; its single viewport shows only part of the list,
while the DOM assertion verifies all 23 Replay entries. This is representative desktop review.

## Evidence and execution

Final evidence lives under `test-results/counterweight_campaign/final/`: `results.json`,
`run.log`, 46 numbered opening/completion PNGs, `reload_23_replay.png`, copied route JSON,
`baseline_order.json`, the retained driver, and `SHA256SUMS`.
The exact final driver is
counterweight_campaign_browser.mjs.txt (`test-results/counterweight_campaign/final/counterweight_campaign_browser.mjs.txt`).
Its temporary executable has been removed after byte-identical archival. Restore it before using:

```bash
cp test-results/counterweight_campaign/final/counterweight_campaign_browser.mjs.txt tests/_temp/counterweight_campaign_browser.mjs
node --check tests/_temp/counterweight_campaign_browser.mjs
COUNTERWEIGHT_BUILD_SHA=a3a900f994066a3c62436c881b324330c480bd8ab997fe2d1b7574faf033fe40 node tests/_temp/counterweight_campaign_browser.mjs
```

The historical fixture paths in the driver must exist; copied route inputs in the final evidence
preserve their contents. The final browser command exits 0 using approved host execution because
the sandbox blocks macOS Chromium MachPort startup. No dependency installation occurs.

The parent evidence directory preserves the earlier candidate on main hash `ab997ae0`. It completes
23 rooms and reload, but exits 1 when the final source-freeze assertion detects the concurrent
counterweight presentation correction. That evidence is superseded, not final acceptance.
The initial sandbox startup failure remains under `sandbox_launch/`. Prior hero evidence stays
intact.

This establishes scripted continuous campaign operability, earned progression, persistence, and
Replay availability for this artifact. Human route discovery, difficulty, enjoyment, two-person
coordination, reduced-motion comfort, alternate routes, and exhaustive visual review remain
outside this lane. Room-specific routes and recovery belong to their dedicated browser report.
No product edit, build, or broad suite runs belong to this acceptance lane. Shared changelog and
final integration belong to the coordinating manager.
