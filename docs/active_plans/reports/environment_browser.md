# Living tumor browser acceptance

Status: PASS for the focused presentation browser lane on 2026-10-15.
This is seeded replay acceptance, not a new fresh-save 23-room campaign traversal.

## Frozen artifact and method

- Local server: `http://127.0.0.1:8127/`, serving the manager-frozen `dist/`.
- Bundle SHA-256: `2e4b9aaa6493783b088317d680b5fbaa0dd40dcca2d9288d52bf6a5ad3772d1e`.
- Map SHA-256: `f9e958903999c643d52e8fe6ea323099f52dc0ccfd6628b35c7f7112ad50ea6b`.
- Command: `ENVIRONMENT_BUILD_SHA=2e4b9aaa6493783b088317d680b5fbaa0dd40dcca2d9288d52bf6a5ad3772d1e node tests/_temp/environment_browser.mjs`.
- Chromium ran headlessly with approved host execution after the sandbox denied its macOS MachPort.
  Host execution requires the explicit repository working directory; the initial host attempt used
  a different directory and failed before browser launch. Neither setup failure is a product result.
- The retained baseline earned save seeds visible Replay entries before boot. Visible Levels,
  Pause, Resume adventure, and Restart controls navigate and recover. Every gameplay movement is
  an actual keyboard press/release, with bounded Playwright clock advances. No simulation,
  player, level, encounter, or pad state is injected.
- A read-only Canvas `drawImage` observer records image dimensions and the canvas immediately
  after the background SVG is drawn. This observes the production renderer and its existing image
  helpers; it does not replace game rendering or mutate gameplay.

## Evidence and results

The retained results JSON (`test-results/environment_browser/results.json`) records
56 screenshots, complete input transitions, read-only canvas state, HUD values, routes, asset
hashes, source provenance, errors, and same-state background comparisons. The
contact sheet (`test-results/environment_browser/contact_sheet.png`) shows six identities.
The six opening scene pairs use stable room IDs 2, 6, 11, 23, 18, and 20, representing garden,
sewers, laboratory, factory, citadel, and boss. Their displayed curriculum numbers differ from IDs.

| Check | Observed result |
| --- | --- |
| Six scene pairs | Normal and reduced opening player coordinates, effects, room, phase, and HUD are equal. |
| Static scenery | Twelve paused same-state comparisons remain pixel-byte identical after 1200 ms presentation time; each district also matches across motion modes. |
| Environment decode | All six new SVGs draw with nonzero natural dimensions in both modes. |
| Foreground decode | Six additional current helper images draw successfully in each mode, including heroes, villains, encounter organs, and finale core. |
| Browser errors | Zero console errors, page errors, failed requests, or HTTP error responses. |
| Pause and retry | Pause preserves reported gameplay state; Restart increments retries to one and restarts Cargo Exchange. |
| Full route 23 | Cargo Exchange completes in both modes, 0:20, zero route retries, one of two sparks. |
| Full route 13 | Gem's Bubble Break completes in both modes, 0:16, zero retries, two sparks; actual FLOAT observed. |
| Full route 20 | Finale completes in both modes, 0:13, zero retries, two sparks; final success heading visible. |
| Source custody | 34 baseline manifest owners outside the allowed `render_game.ts` change remain byte-identical. |
| Served provenance | Current 37 source-map entries match disk; served HTML, CSS, JS, map, and all six SVGs match local bytes; final hashes remain frozen. |

The paired motion checks (`test-results/environment_browser/paired_motion_checks.json`)
record the six normal/reduced state and background comparisons. The
asset copy checks (`test-results/environment_browser/asset_source_copy_checks.json`)
confirm all six authored SVGs are byte-identical to their packaged copies. The static background observation
contains the wash and SVG before the title and foreground. Title, accents, geometry, and layer
visibility were inspected in the integrated screenshots; exact renderer isolation additionally
belongs to the independent source review and renderer-purity lane.

## Actual visual inspection

`view_image` inspection covered the contact sheet; all six reduced opening images at full size;
Cargo Exchange's normal opening and normal/reduced lower-dock route checkpoint; normal/reduced
FLOAT encounter images; finale normal opening/route/complete views; and the additional joint-charge/shutdown captures identified below.

The districts read as different peripheral anatomy, with plum/burgundy interiors behind play.
The garden has nested membrane folds, sewers elongated ducts, laboratory branching structures,
factory broad organ ducts, citadel enclosing cartilage-like arches, and boss large edge lobules.
The open central space keeps foreground characters, colored gates, and solid platform edges clear.
Cargo Exchange's rope/pulley line, deck outlines, rider dots, load values, WAIT FOR BOTH readout,
and lower recovery/delivery labels remain distinguishable at opening and during the transfer.
The lower-dock checkpoint shows parked cargo and active recovery indicators; this is not a new
exhaustive cargo-failure audit. The accepted baseline's focused recovery proof remains separate.

Gem's FLOAT bubble and label, rescue pad, villain, encounter organ, and platform route are visible
in both media modes. The finale core, separate target lamps, cooperative status panel, bridge,
and exits remain visible. The completion overlay is intentionally recorded as final outcome;
extra focused captures preserve the active charge. The read-only canvas PNG exports preserve
the shutdown panel beneath the immediately displayed DOM success overlay.

Focused finale reruns also pass in both modes. Read-only `fillText` observation detects the
production HOLD TOGETHER and SHUT DOWN instructions, without changing target or encounter state.
Inspect both targets held (`test-results/environment_browser/finale_shutdown/normal_20_charging.png`)
and shutdown canvas (`test-results/environment_browser/finale_shutdown/normal_20_shutdown_canvas.png`),
with corresponding `reduced_20_charging.png` and `reduced_20_shutdown_canvas.png` captures.

## Baseline reuse and custody

This run reuses the accepted full-campaign proof for bundle
`a3a900f994066a3c62436c881b324330c480bd8ab997fe2d1b7574faf033fe40` only because the
mapped protected owners remain unchanged. It does not relabel that older proof as a fresh final
full campaign. Exact foreground accent/draw-layer isolation is additionally checked by the fresh
source reviewer; canonical checks and the renderer-purity probe are separate acceptance lanes.

Retain `test-results/environment_browser/`: `results.json`, copied `route_13.json`,
`route_20.json`, `route_23.json`, screenshots, `paired_motion_checks.json`, the exact executed
`environment_browser.mjs.txt`, and `SHA256SUMS`. The broad driver SHA-256 is
`9b321e33de0688d736276996972efc2bff962c681a9538c70c1be9b0780b12d3`. The nested `finale_shutdown/` directory retains
its own focused driver, results, route, screenshots, and SHA manifest. Restore the broad driver
from its root `.mjs.txt` archive to `tests/_temp/environment_browser.mjs` before rerunning the
command above; it uses the retained baseline results/routes and the same frozen artifact/server.

This is scripted operability and visual legibility evidence at 1280 by 900. Human discovery,
enjoyment, reduced-motion comfort, novice difficulty, and real two-person play remain unmeasured.
The manager owns canonical changelog and acceptance-ledger integration.
