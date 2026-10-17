# Marrow tissue acceptance

**Disposition: DONE_WITH_CONCERNS.** Root accepts this bounded marrow surface-art milestone after
source integration, code/build checks, focused browser evidence, and fresh SPEC, QUALITY, and
integration reviews. The continuous gameplay goal remains ACTIVE. This report does not claim a full
campaign or human-play acceptance.

## Accepted scope

The original marrow atlas is integrated for active horizontal solid surfaces. It uses the existing
renderer seam, clipping, continuous 3 px rim, and procedural fallback. Carriers, counterweights,
fragile surfaces, and other atlas behavior retain their existing branches. The 36 definitions,
order, geometry, controls, physics, state, types, configuration, and options remain unchanged.

The accepted SVG SHA-256 is
`d06dc101396315b32be6e389a2da2f093c1471a5427f84fbb5461388587989c9`. The 36-room campaign JSON
SHA-256 remains
`936b1982be8542788a747281a00577e34963f4f82ee19186c1f6c3764321200a`. The corrected baseline
`main.js` SHA-256 is
`41d34b7498e5660fd967c46e27fb09b4e65ee089c31884924e7916c31c8726c3`.

The official build identity is recorded in ignored `/private/tmp/marrow_build_identity.json`.
`dist/main.js` SHA-256 is
`21d792e2cdf03e25b3c8164964cc02d3f6b55728e6458d5f409f2ab83f0c2843`, and `dist/main.js.map` SHA-256
is `fd1f791cca9fb7c0ba344342dabd7946147fce7d557f0111a06ce6f772d06d65`. `dist/index.html` SHA-256
is `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`; the source fingerprint is
`e9085325305887a8099bca9c980eb1f3c0b33bee4800356afe4db671ff8c5398`. The served marrow SVG
matches the accepted source asset; root's current-source, HTTP 200, and disk/served byte checks pass.

## Completed evidence

- Artwork was accepted after actual-size inspection at 12, 14, 16, 24, 70, 120, and 200 px, with
  repeated/clipped tiles. The artist report records XML validity, 25 IDs, 17 resolved references,
  opaque bands, and a transparent gutter.
- Integration adds one private image cache and branch plus the asset in the three existing build
  lists. Focused TypeScript, ESLint, Prettier, shell syntax, whitespace, atlas identity, and
  36-level campaign hash checks pass.
- The fresh SPEC review passes with no plan drift or blocking finding. It confirms the scoped
  renderer branch, fallback, existing overlay branches, clipping, rim, and asset identity.
- Root's code gate passes 90 Node checks plus typecheck, lint, and format. The official build and
  both standard Playwright smokes pass (2/2).
- Root's fallback-only capture records exactly one failed `GET` for
  `http://127.0.0.1:8127/assets/marrow_tissue_surface.svg` (`net::ERR_FAILED`) and its matching
  console event, `Failed to load resource: net::ERR_FAILED`, at that URL. It records no page errors,
  zero marrow-atlas draws, zero deaths, and ordinary movement while the level remains active. Isp
  moved to x=670; Pac stayed at x=40. The record does not claim that both heroes moved.
- Root visually reviewed the integrated marrow surfaces and the reduced-motion NO POWER moving-
  platform view; root found the anatomy and tread rims satisfactory. The browser receipts are
  summarized below.

## Focused browser evidence

Three contexts used the delivered build. Local disk and served HTTP 200 hashes match for the main
bundle, source map, and marrow SVG.

- Normal motion, stable `level_36`, selected through **A Little Push**: the actual Cana SHOVE occurs
  at native frame 248. The deliberate missed jump lands on the lower fold at frame 294 at Pac
  `(352.04, 464)` with zero retries. Isp crosses x=700 at frame 1021 while Pac's movement keys are
  released and Pac's SHOVE effect has cleared. Both heroes reach their exits; the room completes
  with zero retries. The atlas draws, and there are no page errors, console errors, or failed
  requests.
- Reduced motion, stable `level_11`, selected through **Split Decision**: both the stored app
  preference and media preference are true. Captures at 1.4 and 2.2 seconds show ordinary movement
  across two phases of the authored moving-platform cycle. The atlas draws; the room remains
  active with zero retries and no page, console, or request errors. This route does not clear the
  room.
- Isolated fallback, stable `level_36`: only the marrow SVG request is aborted. Exactly one failed
  request is recorded: `GET http://127.0.0.1:8127/assets/marrow_tissue_surface.svg` with
  `net::ERR_FAILED`. Its matching console event is `Failed to load resource: net::ERR_FAILED` at
  the same asset URL. There are no other failed requests, console errors, or page errors; atlas
  draws and deaths are zero. Isp moves from x=230 to x=670 while Pac stays at spawn x=40 and the
  level remains active. Under root's M3 scope decision, movement by one hero suffices for this
  art-only fallback check; the evidence does not claim both heroes moved.

Raw browser receipts and superseded attempts remain in ignored `tests/_temp/marrow_surface_browser/`;
the final browser report is `tests/_temp/marrow_surface_browser/REPORT.md`. Superseded captures,
including the earlier mislabeled recovery image, remain preserved and are excluded from acceptance.

## Review disposition and limits

SPEC passes with no plan drift or blocking finding. QUALITY and integration accept with concerns;
neither reports a material source defect or architectural drift. Root accepts the milestone as
DONE_WITH_CONCERNS.

The browser owner's failed and superseded attempts, including the earlier mislabeled image, remain
preserved in ignored `tests/_temp/marrow_surface_browser/attempt01/` through `attempt04/`; the
superseded image is excluded from acceptance. Full evidence is in ignored working files and is not
repository-retained.

Human readability, enjoyment, discovery, comfort, and playability remain unmeasured. This bounded
presentation change does not establish gameplay repair, a full 36-room journey, current-map
difficulty, or human fun.

Detailed one-time evidence is in ignored working files and is not repository-retained:
`tests/_temp/marrow_tissue_artist/REPORT.md`,
`tests/_temp/marrow_surface_integration/REPORT.md`, and
`tests/_temp/marrow_surface_spec/REPORT.md`. Root build evidence is in ignored
`/private/tmp/marrow_code_gate.log`, `/private/tmp/marrow_build_smoke.log`, and
`/private/tmp/marrow_build_identity.json`.
