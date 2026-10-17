# Intestine tissue acceptance

Status: ROOT ACCEPTED DONE_WITH_CONCERNS under I3. Artwork, integration, source gate, official build,
smokes, served parity, all three focused browser contexts, and fresh SPEC, QUALITY, and integration
reviews are complete. This report is the live acceptance ledger for
[intestine_tissue_architecture.md](../active/intestine_tissue_architecture.md).

The artist received the fixed atlas and scope contract and confirmed it without questions. Root's I2
decision accepts the submitted artwork for integration. Human-play outcomes are outside this
presentation acceptance.

## Pre-presentation baseline

Root recorded this baseline at source chunk `efb5d5`, before intestine presentation changes. Use the
canonical `LEVELS` count and hash for the post-integration comparison. The recorded `main.js` is a
pre-intestine historical build identity and cannot establish delivery of the new asset.

| Item | Baseline |
| --- | --- |
| Canonical `LEVELS` count | 34 |
| `JSON.stringify(LEVELS)` SHA-256 | `44880ac4e31757f4a75ec2f62011dba683434c5cadaa8135a78fabea87f3e94f` |
| `main.js` SHA-256 | `0c39e45f66fb972afd802ffd8f1103d3f0dc80a91df429daec9aa1a71b43f950` |
| Map SHA-256 | `8672115eb2378f4ee1f9097b358e19836e2e312409ca6e89f3b60294dad766bc` |
| Renderer SHA-256 | `7c1cb3206a7b0b71f17e7f26a404d1ec70f4cc94905a561d6a392587c7703190` |
| Build script SHA-256 | `f58df84970b03165bbd38f91e5045e9a880731630c742c7a5a7c9d8bf495b6d8` |

## Current receipts

Root's I2 decision accepts the asset for integration after viewing `canvas_actual_sizes.png` and
`atlas_4x.png`. The 16/20 px shelves read as gut lobes; the deep floor shows blunt mucosal folds and
inset nodules; the continuous rim is clear, with no false pads or edges. The artist report records
valid XML, 30 unique IDs, four resolved references, a transparent 4 px gutter, crop/repeat evidence,
and asset SHA-256 `3a95163ea6e12cd5b473eedd8cbc04dfb471f17190012e07c19b21407bda6cd8`. The isolated
Canvas proof is not built-game acceptance.

Luna integration and the source/build gate are complete. All three focused browser contexts pass on
the frozen build, including reduced-motion continuation and intentional-failure fallback capture.
The pre-presentation `main.js` above is a historical identity, not the reviewed build.

| Gate | Owner | Status / evidence |
| --- | --- | --- |
| Atlas and scope contract | Root | APPROVED in the active plan. |
| Original SVG, XML, thin/deep and repeat evidence | Fresh Astra artist | COMPLETE; hash and evidence recorded above and in the artist report. |
| Artwork decision | Root | ACCEPTED FOR INTEGRATION under I2. |
| Renderer integration and focused checks | Fresh Luna integrator | COMPLETE; 25 insertions/10 deletions in renderer and build script only; focused checks pass. See `tests/_temp/intestine_tissue_integration/REPORT.md`. |
| Root source gate, official build, smokes, and served parity | Root | COMPLETE; source gate, official build, 2/2 smokes, and served/disk parity pass. Frozen identity below. |
| Frozen-build focused browser contexts | Fresh browser owner, then root | COMPLETE; all three contexts pass. Root inspected each result. |
| Fresh SPEC, distinct QUALITY, and integration review | Separate fresh reviewers, then root | COMPLETE; all pass with no material source findings. |
| Final disposition and documentation closeout | Root | ROOT ACCEPTED DONE_WITH_CONCERNS under I3; documented below. |

Root accepts the bounded presentation milestone as DONE_WITH_CONCERNS. Captures do not establish
human readability, enjoyment, discovery, or comfort, and they do not substitute for human playtesting
or full-campaign acceptance.

The browser gate is limited to these three contexts:

1. Normal motion in Gut Instinct: actual thin stairs/ledge and deep floor, hero/pad/Gem readability,
   and a retained ordinary route.
2. Reduced motion in `level_05`: dynamic intestine-ferry carrier and state cues, the 220x220 active
   floor and 50x14 active fold, new static art, and a retained ordinary route. Root's shape inspection
   selected this room because both the largest and smallest active atlas consumers appear beside the
   ferry. `level_07` has only a 50x14 active atlas fold; its vertical island remains on the old path.
3. Intentional failure of the new SVG: procedural fallback and functional ordinary movement.

Reuse existing capture tools and private one-time helpers; no preview interface is part of the gate.

## Browser evidence

The initial `tests/_temp/intestine_tissue_browser/REPORT.md` records the normal views, reduced-motion
playing pose, and fallback result. The separate
`tests/_temp/intestine_reduced_clear/REPORT.md` records the later ordinary-input retained clear that
completes the reduced-motion context; the initial report remains a truthful record of its earlier
partial result.

The normal-motion Gut Instinct context passes on frozen `dist/main.js`
`aac2efc8086fec114b1bba09f17125f3cb542714ec9dcded9bbc33bee473c1cc`. The receipt
`/private/tmp/intestine_i1_normal_receipt.json` records four `level_34` views: Isp pad, Pac pad, Gem
FLOAT, and retained ordinary clear. All four have empty error lists; the clear reaches phase
`complete`. Root inspected the Isp-pad and Gem-FLOAT screenshots and reports clear thin/deep art,
hero/pad/Gem readability, and no false controls. The PNGs and receipt are archived under
`/private/tmp/intestine_i1_normal_*`; capture does not establish human readability, enjoyment, or
discovery.

The reduced-motion `level_05` playing pose confirms `reducedMotion: true`, the matching media query,
and Canvas drawing the loaded SVG over the 220x220 floor and 50x14 fold beside the ferry. A later
ordinary-input retained-clear capture reaches `complete`, with zero deaths/errors and `2 / 2` sparks.
See `tests/_temp/intestine_reduced_clear/REPORT.md` and
`/private/tmp/intestine_i1_reduced_clear_receipt.json`. An earlier fixed-clock helper replay ended in
`playing`; a separate dedicated-capture route completed on the same frozen build. The setup sequence
was helper clock/UI work, not a game failure or production change; no exact clock parity or human
fun claim is made.

The intentional-failure context aborts only the new SVG request and records zero Canvas `drawImage`
calls before confirming the procedural fallback. Ordinary `d` and ArrowRight movement each advance
the hero by 61.25 px; there are no unexpected page, HTTP, request, or console errors. The expected
resource failure and matching generic console signal are recorded separately. See
`/private/tmp/intestine_i1_fallback_receipt.json` and
`/private/tmp/intestine_i1_fallback_ordinary_movement.png`.

Root inspected the normal, reduced-motion, and fallback results. The captures establish the focused
rendering, fallback, and route checks only; they do not establish human readability, enjoyment, or
discovery.

## Review receipts

Fresh SPEC review passes source-level plan conformance with no findings; it does not decide browser
acceptance or the final milestone verdict. See
`tests/_temp/intestine_tissue_spec_review/REPORT.md`. Fresh QUALITY passes with no material findings;
see `tests/_temp/intestine_tissue_quality_review/REPORT.md`. The final integration review passes
bounded integration and architecture conformance with no material source findings; see
`tests/_temp/intestine_tissue_final_review/REPORT.md`. Root accepts DONE_WITH_CONCERNS under I3.

## Integration and build receipt

The integration preserves the existing clip and procedural fallback, draws the approved art only
for active solid horizontal intestine surfaces, retains the existing continuous 3 px rim, and adds
the asset to the three existing build lists. No renderer types, gameplay data, mechanics,
configuration, permanent tests, or preview interface changed. The focused integration commands all
pass; the combined Prettier check that included the shell script exited 2 because Prettier has no
shell parser, while the TypeScript formatting check and shell syntax check pass separately.

Root's `./check_codebase.sh` exits 0 with 90 Node checks plus TypeScript, lint, and format. The full
34-definition/scene/order comparison is unchanged at the canonical serialization SHA-256 recorded
above. `source source_me.sh && ./run_playwright_tests.sh --build` exits 0 with 2/2 standard smokes.
The existing `NO_COLOR`/`FORCE_COLOR` warning is retained. The server on port 8127 was not stopped
or restarted after the build.

| Frozen artifact | SHA-256 |
| --- | --- |
| `dist/main.js` | `aac2efc8086fec114b1bba09f17125f3cb542714ec9dcded9bbc33bee473c1cc` |
| Map | `027d7014b446e86400d83bf5973c3dea37b019482b5f3967e88a2afb5237b6ab` |
| `dist/index.html` | `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7` |
| Authored and delivered SVG | `3a95163ea6e12cd5b473eedd8cbc04dfb471f17190012e07c19b21407bda6cd8` |

Root's source guard and HTTP 200/disk parity receipt confirms the served bundle, map, index, and SVG
match these frozen bytes. Browser capture was then released. All three browser contexts and the fresh
SPEC, QUALITY, and integration reviews pass on these frozen bytes. Root accepts DONE_WITH_CONCERNS
under I3. Human readability, enjoyment, discovery, and comfort remain unmeasured.
