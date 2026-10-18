# Acid tissue acceptance

## Current status

**ROOT ACCEPTED DONE_WITH_CONCERNS at 2026-10-17 12:28:04 UTC.** The continuous gameplay goal
remains ACTIVE. This bounded presentation milestone changes the shared slime appearance; it does
not change geometry, physics, attacks, hazard behavior, level data, or options.

## Evidence

Root approved the original 128x120 SVG atlas at 12:18:04 UTC after reviewing its repeated crop,
filled danger edge, and actual 35 px floor-pool and 125 px suspended-pocket views. Frozen identities:

- SVG: `adc9dabe965028b7fba253a8e8cb1bb8d9a7d4e83375bea69754a904db771d00`
- Renderer: `8fe35ffb6ead7f1a07335a5734544d0f9c4767b659f47ec32d23ae92b33aa2e1`
- Build script: `a7c5af4aa7a8706db6291f4e3c5401b4ec370897b93f910b0b0fb5fae511d27b`
- Built and served `main.js`: `17bd1635c071b2a743575f1976ce35b0aad9c6f4b85f86a4c5589526b3549db2`

Fresh SPEC and QUALITY reviews accepted; fresh integration review accepted with concerns. I recomputed
SHA-256 over `JSON.stringify(LEVELS)` from current `src/levels.ts`: all 43 room definitions produce
`1cb25e2f6fa882672c50756f8b1b7e40f3e584090400ec778c9fc91d84927458`, matching root's semantic
comparison. Root's physics comparison (`1ce24601c4f099ca737ab03eeb8d7e5e98e2e164596d9401214035615cdf84e8`),
`./check_codebase.sh` (both TypeScript programs, lint/format, 94 Node checks), official build, and
two standard smokes passed. Source and distribution SVGs matched; the capture helper verified the
served build identity for each case.

Root reviewed the four original captures at 12:26:15 UTC: display Level 3 (`level_04`) floor-acid
idle and ordinary clear, and display Level 11 (stable `level_41`) suspended-pocket FLOAT and ordinary
clear. All helper views reported zero deaths and zero browser/page errors. The display Level 3 clear
shows `RETRIES 0` and `SPARKS 1/2`; the display Level 11 clear shows `RETRIES 0` and `SPARKS 0/0`.
Current source has `collectibles: []` for stable `level_41`. In the display Level 11 pocket view,
Gem's GLUB timer is back at four seconds, the dunk splash is visible, and Isp is FLOAT; the dunk
contact itself was not captured. The focused `renderer_probe.mjs` exercised unready- and failed-image
fallback. An actual browser image-load failure was not induced. Capture details and receipt are in the
ignored working record
`tests/_temp/acid_tissue_browser/report.md`.

## Limits

The focused views establish the changed floor and suspended-pocket contexts plus ordinary clears;
they do not establish human readability, discovery, fun, or difficulty. This milestone does not
address the separate display Level 4 (`level_03`, *Stop Right There*) ferry-fall concern. No full
campaign journey, mobile check, save/Next check, or permanent tuning pixel test was part of this
bounded acceptance.
