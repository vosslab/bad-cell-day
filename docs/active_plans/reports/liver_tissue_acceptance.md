# Liver tissue acceptance

**Disposition: DONE_WITH_CONCERNS.** Root accepted this bounded liver surface-art milestone after
the source/build gates, three focused browser contexts, and fresh SPEC, QUALITY, and integration
reviews passed. The continuous game goal remains ACTIVE; this closeout does not approve a next
feature queue.

## Accepted change

The original liver atlas is used on active, horizontal, solid liver surfaces. It preserves the
existing clipping, 3 px landing rim, and procedural fallback. Campaign definitions, scenes, order,
geometry, physics, controls, types, state, and options remain unchanged. The 35-room definition,
scene, and order comparison retained hash
`f83ed83ffe898a91ec151ce3469ea4d203ce006e3b047312e10e36400040b0c1`.

The accepted SVG SHA-256 is
`fc64f8e2995937335b0e5958620525de2f5a861a0586bb05ca9ef8bfa7c2fc8c`. The frozen distribution
identities are:

| Artifact | SHA-256 |
| --- | --- |
| `dist/main.js` | `9daedaecc86640ac2b9e1c9152c56cd26b16d8ffc70613f7d780c25a325c439f` |
| `dist/main.js.map` | `a5f57950ff9a9524ae44a6f4e5150c9d3331c4dfb1ab921f183bc8c986c1d7c3` |
| `dist/index.html` | `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7` |
| Liver atlas SVG | `fc64f8e2995937335b0e5958620525de2f5a861a0586bb05ca9ef8bfa7c2fc8c` |

Root verified current source and HTTP 200 served bytes against the local build. All 35 definition,
scene, and order JSON data retained hash
`f83ed83ffe898a91ec151ce3469ea4d203ce006e3b047312e10e36400040b0c1`.

## Gates and browser evidence

- `./check_codebase.sh` exited 0: 90 Node checks plus TypeScript, lint, and format.
- `source source_me.sh && ./run_playwright_tests.sh --build` exited 0: official build and both
  existing Playwright smokes passed (2/2).
- Ordinary FLOAT movement on `level_13` showed thin shelves, deep floor, and the accepted atlas.
- Reduced-motion preferences were asserted in `level_14`. Both heroes stayed alive while the
  moving refuge shifted in captures three simulated seconds apart. Isp did not reach the refuge;
  landing and room completion were outside this art gate.
- In a fresh fallback context, only the liver atlas request was aborted. The existing procedural
  surface rendered and ordinary movement continued with zero deaths.

The original main browser helper suppressed console errors only in its deliberate atlas-abort
fallback case. A separate fresh fallback-only capture now records the full event stream: exactly
one failed request for the liver SVG and its matching console error, `Failed to load resource:
net::ERR_FAILED`, with the exact atlas URL in the console event location. That error is expected
from the deliberate request abort. The capture recorded no other failed requests, console errors,
or page errors, and zero liver-atlas Canvas draws. The ordinary FLOAT and reduced-motion cases
collected console errors and each receipt reports `errors=[]`, so those runs support a clean-console
claim. The corrected fallback proof confirms fallback operation and preserves the expected atlas
failure in its full event record.

Three fresh reviews accepted with concerns. SPEC and QUALITY found no blocking issue. The QUALITY
report's `header 16/20` phrasing referred to campaign positions 16 and 20, which are stable IDs
`level_13` and `level_14`; the mismatch was resolved. Integration review accepted the same source and
build identity.

The initial sandboxed Chromium launch hit macOS Mach rendezvous error 1100. The narrowly authorized
retry completed the capture; this was a launch restriction, not a product failure.

## Limits and receipts

Human readability, enjoyment, discovery, and comfort remain unmeasured. Thin atlas texture and its
visible repeat cadence are accepted design limits. The reduced-motion evidence shows a moving refuge
and partial safe movement, not a landing or room clear. The browser runs used ordinary controls, but
do not establish human play outcomes.

Detailed one-time evidence remains in ignored working files and is not repository-retained:
`tests/_temp/liver_tissue_artist/REPORT.md`,
`tests/_temp/liver_surface_integration/REPORT.md`,
`tests/_temp/liver_surface_spec/REPORT.md`,
`tests/_temp/liver_surface_quality/REPORT.md`,
`tests/_temp/liver_surface_browser/REPORT.md`,
`tests/_temp/liver_fallback_console_proof/REPORT.md`, and
`tests/_temp/liver_surface_final_review/REPORT.md`. Machine-readable browser receipts were kept at
`/private/tmp/liver_surface_browser_receipt.json` and
`/private/tmp/liver_fallback_console_receipt.json` for this closeout; those temporary files are not
repository artifacts.
