# Acid tissue presentation

## Status and intent

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS at 2026-10-17 12:28:04 UTC.** The shared slime hazard
appearance now replaces the known nonblocking rectangular lime fill across floor pools and suspended
pockets. This bounded art milestone leaves geometry, physics, attacks, hazard types, and options
unchanged and creates no feature queue.
The continuous gameplay goal remains ACTIVE; the [acceptance receipt](../reports/ACID_TISSUE_ACCEPTANCE.md)
records completed source, build, review, and focused built-view gates and their limits.

The [gameplay direction](../reports/gameplay_direction.md) records the continuous goal as ACTIVE.
Root closed the Level 7 and Level 20 replay check as DONE_WITH_CONCERNS / KEEP at 2026-10-17
12:12:29 UTC: root replayed both ordinary routes at 120 Hz, clearing in 1,485 and 1,326 frames with
matching exits. The Level 7 scout showed premature ferry release changing the route timing without
demonstrating an unrecoverable loop. The Level 20 scout showed a late missed-jump death at frame
1,046, a separate recoverable target-handoff error, and no small geometry clone that forgave the
miss while retaining the jump. These reports are bounded deterministic evidence; human discovery,
fun, and difficulty remain unmeasured. See the
[retry check](RETRY_GAMEPLAY_CHECK.md) and the scout reports under `tests/_temp/`.

## Scope and presentation contract

- Fresh Astra art owner `/root/acid_tissue_art_astra` creates original
  `src/assets/acid_tissue_surface.svg` and scratch art proof. Use the existing 128x120 tissue atlas
  contract unless root approves a compelling asset layout: thin strip
  at `y=0..20`, deep body at `y=24..120` (128x96), with horizontally seamless edges.
- Preserve a fully filled, readable danger rectangle with a continuous danger edge. Art must not
  imply a standable border or show features outside the clipped rectangle that suggest hidden
  hazards. Keep heroes, pads, dunks, and nearby platforms readable.
- Preserve existing animated bubbles, inactive alpha, reduced-motion behavior, and the fallback when
  the image is unavailable. Reuse the existing lazy `HTMLImageElement` cache and fallback pattern.
- Root reviews the original SVG view and accepts the artwork before source integration begins.
  Fresh Luna then owns the renderer seam in `src/render_tissue_objects.ts` and adds the asset only to
  existing lists in `build_github_pages.sh`.
- Change no level definitions/order, geometry, physics, attacks, types, or configuration. Add no
  helper configuration or permanent pixel/tuning tests.

## Art approval and integration ledger

- Root approved the frozen `src/assets/acid_tissue_surface.svg` at 2026-10-17 12:18:04 UTC after
  reviewing the original atlas, repeated crop proof, existing bubbles and danger edge, and actual
  35 px floor-pool and 125 px suspended-pocket views. Approved asset SHA-256:
  `adc9dabe965028b7fba253a8e8cb1bb8d9a7d4e83375bea69754a904db771d00`.
- Renderer integration uses the approved 128x120 atlas: source rows 0..20 for hazards below 40 px
  tall and rows 24..120 otherwise, tiled across the existing hazard rectangle with rounded tile
  boundaries. The base fill remains visible until the lazy image is loaded; bubbles and the
  continuous danger edge remain above the atlas.
- Fresh SPEC and QUALITY reviews accepted; fresh integration review accepted with concerns. Root's
  semantic and physics comparisons, repository code gate, official build, and two standard smokes
  passed. The built source, served source, and released build identity matched.
- Root reviewed the four original built views at 12:26:15 UTC: display Level 3 (`level_04`) idle
  and ordinary clear, plus display Level 11 (stable `level_41`) pocket FLOAT and ordinary clear.
  All helper views reported zero deaths and zero browser/page errors. The Level 3 clear overlay
  reports zero retries and 1/2 sparks; the Level 11 clear reports zero retries and 0/0 sparks.
  The Level 11 pocket view is after the dunk: Gem's GLUB timer is back at four seconds, the dunk
  splash is visible, and Isp is FLOAT; the contact itself was not captured. `renderer_probe.mjs`
  exercised unready- and failed-image fallback; an actual browser image-load failure was not induced.
  Human readability, discovery, fun, and difficulty remain unmeasured. See the
  [acceptance receipt](../reports/ACID_TISSUE_ACCEPTANCE.md).

## Owners and gates

| Gate | Owner | Evidence |
| --- | --- | --- |
| Original atlas art | Fresh Astra | SVG parses; ID references resolve; repeated crop renders inspected at an actual 35 px floor pool and 125 px suspended pocket. Root approved the original view at 12:18:04 UTC. |
| Art decision | Root | Approved the original view against the filled-danger and readability contract at 12:18:04 UTC. |
| Source integration | Fresh Luna | Integrated the atlas at the existing slime renderer seam and registered it in existing build asset lists; source/distribution identity passed. |
| Fresh reviews | Fresh SPEC, then fresh QUALITY, then fresh integration reviewer | Accepted; integration accepted with concerns. |
| Root source/build gates | Root | Passed semantic preservation checks, repository code gate, official build, and two standard smokes. |
| Built views | Existing capture tool, then root | Root reviewed all four original views on the frozen build; the separate renderer probe covered unready/failed-image fallback, but no browser image-load failure was induced. |

Acceptance covered only the changed contexts. This milestone did not include a full 43-room journey,
mobile checks, save/Next checks, or permanent tuning pixel tests. The browser evidence does not
establish human readability, fun, discovery, or difficulty. Reopen the plan if later source or build
evidence changes the accepted contract; invite clarification, challenge, or escalation if a concrete
conflict appears.
