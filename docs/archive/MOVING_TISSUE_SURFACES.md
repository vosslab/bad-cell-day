# Organic moving tissue surfaces

## Outcome and boundary

Reuse the accepted organ atlas strips for active horizontal `carrier` surfaces by widening the
existing atlas-selection condition in `src/render_tissue.ts`. Keep collision rectangles, movement,
power cues, carrier fibers, atlas loading/fallback, clipping, and all gameplay behavior unchanged.
Fragile, counterweight, vertical, and core behavior remain outside this change. No new art, types,
state, configuration, asset registration, or permanent visual tests are in scope.

The renderer owner performs this small serialized edit because all organ atlas branches share the
same eligibility condition. Existing atlas contracts and assets are fixed; root will judge the
result in current known levels before independent review. Reviewers may challenge the assumption
that these assets are sufficient for moving surfaces.

## Acceptance stages

| Stage                                                                              | Owner                      | Status      |
| ---------------------------------------------------------------------------------- | -------------------------- | ----------- |
| Implement the shared carrier eligibility condition; preserve the lung atlas branch | Luna                       | Complete    |
| Validate source, build identity, browser smokes, captures, and gameplay behavior    | Root                       | Complete    |
| Independent SPEC, QUALITY, and integration reviews; root acceptance                | Fresh reviewers, then root | Complete    |

## Baseline and evidence

Implementation is complete: the existing atlas eligibility condition admits active `carrier`
surfaces with `width >= height` beside eligible `solid` surfaces. The immediate pre-edit renderer snapshot and focused
source checks are recorded in `tests/_temp/moving_tissue_surfaces_impl/REPORT.md`. Root reports the
96-check code gate, official build, source/dist/source-map/served identity, and both standard
Playwright smokes passed on the current bundle. Current source SHA-256 is
`8e04fbe0e406a17638431c1317d10fa3990e017fec8fe21006743debb2c1c861`; dist JS is
`eb76adf09bf1e4397e76c0136f5005f0b290ba2eff9c73ed4410fc03f41152a6`; source map is
`80c6a4e35e4d6fe6ea8ca4b85a4ea06d83c7a12fd4ae159c7ecf1731d3b242b3`.

The existing capture workflow produced seven views on the verified current bundle: five organ
surface appearance samples, the powered Long Gut ferry at frame 900, and the ordinary Long Gut
clear. All seven completed with zero deaths or browser/console errors; the ordinary route completed.
The five one-second no-input organ views establish appearance only, not route behavior or precise
platform power state. Root reviewed the seven originals and accepts the sampled visual result: the
organ strips replace the cream boxes while the landing rim and motion/power cues remain clear. The
Long Gut frame shows Pac on the powered ferry alongside two `NO POWER` carriers. Capture details and
the receipt are recorded in `tests/_temp/moving_tissue_surfaces_capture/REPORT.md` and
`tests/_temp/moving_tissue_surfaces_capture/receipt.json`. No separate recovery rerun was needed
for this renderer-only change.

The previously accepted Long Gut (level_47) result remains accepted; Current46 and Current44
difficulty snapshots remain frozen historical assessments. Fresh SPEC accepted with no findings;
all six independent QUALITY passes completed with `ACCEPT_WITH_CONCERNS`, and the wording concern
was corrected above. Fresh integration accepted. Root accepted this bounded milestone as `DONE` at
2026-10-17 23:27:11 UTC after confirming the final source, distribution JavaScript, source map,
served bundle, and 47-room roster identity. Human readability, discovery, enjoyment, and paired
comfort were not measured; the broad gameplay goal remains active. Review receipts are
`tests/_temp/moving_tissue_surfaces_spec/REPORT.md`,
`tests/_temp/moving_tissue_surfaces_audit/REPORT.md`, and
`tests/_temp/moving_tissue_surfaces_integration/REPORT.md`.
