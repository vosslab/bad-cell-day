# Brain tissue architecture pilot

## Status and authority

**ACTIVE: art accepted for integration.** This is a bounded visual milestone in the
continuous game goal. No Takebacks R2 remains closed as ROOT ACCEPTED DONE_WITH_CONCERNS in the
[No Takebacks ledger](next_coop_expansion.md); its accepted evidence and concerns remain historical.
The approved captures show anatomical brain scenery around long, straight pink playable rails. This
pilot tests whether original folded tissue architecture can make those playable surfaces feel like
brain anatomy while keeping their landing edge clear.

## Approved scope

- A fresh Astra artist owns one finished editable asset,
  `src/assets/brain_tissue_surface.svg`, and ignored render previews. The art should fit the game's
  palette and line style, with the user's Barnsyverse inspiration. Playful gross tumor details may
  appear, but the result must read as folded or swollen neural tissue at both intended scales.
- Approved atlas contract: `viewBox="0 0 128 120"`; thin crop `(0, 0, 128, 20)` with a 4 px
  gutter; deep crop `(0, 24, 128, 96)`. Use the thin crop when platform height is under 40 px and
  the deep crop otherwise. Repeat proportionally across the horizontal axis and clip to `rect`.
- Scope is active horizontal brain surfaces only: active render state, `stage === 'brain'`,
  `appearance.kind === 'solid'`, and `width >= height`. The existing `draw_tissue_surface`
  clipping boundary in `src/render_tissue.ts` remains the renderer seam. Loaded artwork replaces
  the existing procedural body. Draw only the existing continuous top 3 px rim; the full
  `strokeRect` would recreate repeated rails. Inactive, narrow vertical, and dynamic surfaces retain
  their existing treatment.
- Keep a continuous, high-contrast landing edge. Keep high-contrast false gaps, spikes, and pads out
  of the art. Preserve distinct carrier, fragile, and counterweight state cues.
- Root reviewed `actual_sizes.png`, `atlas_4x.png`, and `canvas_actual_sizes.png` and accepted
  the original thin scalloped neural tissue and deep cortical folds for integration. See
  `tests/_temp/brain_tissue_artist/REPORT.md` for the artist's report and hashes.
- Fresh Luna integration is complete in `src/render_tissue.ts`, reusing current clipping and image
  loading/fallback behavior. Round shared local tile start/end boundaries, draw each full atlas
  crop, then use the existing `rect` clipping for the final tile. This corrects the observed
  fractional hairlines without new modes or types.
- Root found a delivery gap: the build output omits
  `dist/assets/brain_tissue_surface.svg` because `build_github_pages.sh` does not list the new SVG.
  Root approves a minimal follow-up owned by a fresh build worker, limited to that script's existing
  required/copy/assertion lists. Preserve the explicit list mechanism; add no manifest, refactor, or
  options. Keep the observed failed asset check recorded even after repair.
- Level geometry and all 33 definitions/order, physics, controls, other organs, and text placement
  remain as they are. Add no types, configuration, engine mechanisms, or permanent tuning/visual
  tests.

The documented renderer seam and accepted visual evidence are in
`tests/_temp/anatomical_architecture_seam/REPORT.md`. Its suggested dimensions were prior handoff
advice; the approved contract above supersedes that suggestion.

## Acceptance ledger

| Gate | Owner | Status / evidence |
| --- | --- | --- |
| Asset contract: dimensions, crop, tiling | Root | APPROVED: 128x120 atlas; crops, threshold, gutter, repeat, and clip contract above. |
| Artwork and focused construction references | Astra artist | PASS. See `tests/_temp/brain_tissue_artist/REPORT.md`. |
| XML and references | Astra artist | PASS. See artist report. |
| Thin and deep rendering | Astra artist | PASS. Root inspected actual-size previews and atlas enlargement. |
| Visual decision and contract check | Root | ACCEPTED FOR INTEGRATION: thin neural scallops and deep cortical folds make a meaningful anatomical improvement at actual sizes. |
| Source integration | Fresh Luna integrator | PASS in `src/render_tissue.ts`. Rounded shared tile boundaries, full-crop draws, existing rectangle clipping, top rim, and loading fallback are recorded in `tests/_temp/brain_tissue_integration/REPORT.md`. |
| Focused source checks | Fresh Luna integrator | PASS: TypeScript, Prettier, and scoped diff checks. See integration report. |
| Integrated source checks | Root | PASS: `check_codebase.sh` passed 90 Node checks plus TypeScript, lint, and format gates. |
| Official build and standard smokes | Root | PASS: `source source_me.sh && ./run_playwright_tests.sh --build`, 2/2 standard smokes. The earlier build's missing-SVG result remains recorded as the trigger for the approved list repair. |
| SVG distribution and served asset | Root | PASS: index, main, map, and new SVG return HTTP 200 and match disk; all 56 embedded sources match; authored SVG equals the copied `dist` asset. Rebuilt hashes: index `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`, main `afbb2df1ebd8b743b437916ff4a8669e348358874218cbe4387949fbb8e8a0be`, map `3d73f85c96157a47240381a9c00a4b2166934feaaca768f64cb5ff969bdb23c2`, SVG `3b18c9d06c23a2e6bab43bcc41437b11dacb6e6292a68d5e5bfb2c9d2b5d1e22`. |
| Focused gameplay captures | Root | PENDING after integration: normal and reduced views of thin and deep static brain surfaces, with readable top edge; include a room with moving/stateful surfaces to confirm cues remain intact. |
| Definition and geometry comparison | Root | PASS: all 33 definitions, scenes, and campaign order are unchanged. |
| Fresh reviews and final verdict | Fresh SPEC, distinct QUALITY, integration; root | PENDING in that order. Root records final verdict here. |

## Evidence boundaries

Reuse accepted campaign and recovery evidence explicitly because this milestone is presentation-only.
Do not repeat the full 33-room journey or numeric difficulty assessment unless a concrete changed
risk justifies it. Do not claim human readability or enjoyment from scripted captures. Keep current
status separate from the closed No Takebacks R2 history.

The artist, source owner, and reviewers should raise concrete clarification, challenge, decision,
or escalation questions at the relevant boundary. Scope questions go to root; a cross-cutting design
change or architecture decision requires architect review and approval. No feature quota or global
art rewrite is authorized.
