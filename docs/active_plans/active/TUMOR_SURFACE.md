# Tumor tissue surface atlas

## Outcome

Use the authored tumor atlas for eligible tumor platforms and include the fixed SVG in GitHub Pages
builds. The atlas has opaque material bands with a 4 px gutter: thin sample at `(0, 0, 128, 20)` and
deep sample at `(0, 24, 128, 96)`. Existing clipping and rim rendering remain in force.

## Ownership and dependencies

- Art owner: `src/assets/tumor_tissue_surface.svg` (Astra); renderer and build owner: `src/render_tissue.ts` and `build_github_pages.sh`.
- Root integrates after both owners finish, then captures initial, midplay, and completion views through the existing helper and current finale route.

## Scope

The atlas gives tumor platforms a dense, continuous cellular surface, with a thin outer tissue band
and a deeper tumor field. The renderer uses its existing lazy image cache, complete and natural-width
check, and canvas fallback. Collision rectangles, all 55 room definitions and their order, rim,
active/fragile/carrier behavior, physics, options, and types stay unchanged.

## Status

Root accepted the bounded art integration as `DONE_WITH_CONCERNS` at 2026-10-18 16:51:17 UTC. The
96-check code gate, Pages build, two browser smokes, and SPEC, QUALITY, and integration reviews
passed. The served asset, JavaScript, and source map returned HTTP 200 and matched their build files.
The three original public views show initial play, midplay, and completion with zero deaths or browser
errors. Prior seeded progress unlocked the finale, so these views establish focused atlas and finale
delivery only, not a fresh campaign run or human playability. The earlier 55-room journey remains
bound to its historical build. No difficulty rescore or measured-fun claim is made. See the
[public-play report](../../../tests/_temp/tumor_surface_public_play/REPORT.md),
[SPEC](../../../tests/_temp/tumor_surface_spec/REPORT.md),
[QUALITY](../../../tests/_temp/tumor_surface_quality/REPORT.md), and
[integration](../../../tests/_temp/tumor_surface_integration/REPORT.md).
