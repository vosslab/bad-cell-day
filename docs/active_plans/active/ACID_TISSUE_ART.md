# Acid tissue presentation

## Status and intent

**Status: ART APPROVED; SOURCE INTEGRATION IMPLEMENTED, PENDING FRESH REVIEWS AND ROOT GATES.** Create a shared
slime hazard appearance, whose current rectangular lime fill is a known nonblocking art gap. Apply
one presentation treatment to all slime floor pools and suspended pockets. This is an art milestone;
geometry, physics, attacks, hazard types, and options stay unchanged. It does not create a feature queue.

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
- Source integration is implemented and awaiting fresh SPEC, QUALITY, and integration reviews,
  followed by root's source/build gates and focused built views. Runtime behavior and distribution
  acceptance are not yet claimed.

## Owners and gates

| Gate | Owner | Evidence |
| --- | --- | --- |
| Original atlas art | Fresh Astra | SVG parses; ID references resolve; repeated crop renders are inspected at an actual 35 px floor pool and 125 px suspended pocket. Submit original SVG and scratch art proof for root review. |
| Art decision | Root | Qualitative review of the original view against the filled-danger and readability contract; accept or return before integration. |
| Source integration | Fresh Luna | Existing slime branch and tissue image cache/fallback only; asset added to existing build asset lists. Report the focused diff and checks. |
| Fresh reviews | Fresh SPEC, then fresh QUALITY, then fresh integration reviewer | Review the same source snapshot in that order; record limitations and blockers. |
| Root source/build gates | Root | Check semantic preservation of level definitions, order, and physics once; run the repository code gate, official build, and two standard smokes. |
| Built views | Existing capture tool, then root | On the frozen build, capture a real level 3 floor-acid view and a level 41 pocket/dunk view, plus ordinary clear behavior with unchanged mechanics. Probe asset-load fallback once only if existing tools support it. |

Use existing capture tools; add no capture interface. Do not run a full 43-room journey, mobile
checks, save/Next checks, or permanent tuning pixel tests. Browser evidence covers these changed
contexts and does not establish human readability, fun, discovery, or difficulty. If source or build
evidence changes the stated contract, stop at that gate for root's decision. Invite clarification,
challenge, or escalation if a concrete conflict appears.
