# Lung tissue art

Status: ROOT ACCEPTED `DONE_WITH_CONCERNS` at 2026-10-17 20:01:30 UTC after fresh final integration
accepted with concerns. The frozen candidate received
root visual `KEEP_WITH_CONCERNS`, private SPEC and QUALITY `ACCEPT_WITH_CONCERNS`, and
validation-correction re-review `PASS`. Production loader and asset integration is implemented.
The first canonical build compiled but passed only one of two smokes: the SVG request returned 404
because the builder omitted the new asset from its required-source, copy, and final dist-check
lists. The explicit asset registration is corrected. The official rebuild and both smokes now pass;
source, dist, and HTTP SVG identities match; five focused built-browser captures passed and root
reviewed them with `KEEP_WITH_CONCERNS`. The public SPEC and initial six-pass audit are complete.
The initial audit's stale-plan findings are corrected here; its original receipts remain unchanged.
The targeted build-fix re-review accepted the build-script correction, and fresh final integration
accepted the bounded change with concerns. The broad game goal remains ACTIVE. See the
[LUNG_TISSUE_ACCEPTANCE.md](../reports/LUNG_TISSUE_ACCEPTANCE.md).

## Private candidate contract

- Owner: Astra. Editable original SVG and evidence live under
  `tests/_temp/lung_tissue_art_astra/` (ignored temporary evidence).
- Preserve the existing 128 by 120 atlas: thin crop (0, 0, 128, 20), deep crop
  (0, 24, 128, 96), rounded horizontal repeats, authoritative rectangular clipping.
- Build connected irregular alveolar masses, wet branching septa/capillaries and
  tumor-swollen folds. Keep the continuous landing membrane clear and pocket shadows below it.
- Keep an opaque darker tissue underbody, unequal overlapping masses and restrained rose/mauve
  colors. The existing Canvas cream landing rim remains authoritative.
- Art applies only to solid lung surfaces with width at least height. Carrier, fragile and
  recoil artwork remains distinct. No gameplay, engine, level, configuration or save changes.
- Artist writes only this plan and its private evidence folder. Canonical documentation and
  any production loader/asset work have later owners.

## Completion evidence

- [x] Imported LEVELS baseline and source/asset identities captured before construction.
- [x] Three block thumbnails rendered and composition A selected.
- [x] Finished self-contained SVG, valid XML, 38 unique IDs and 11 resolved references.
- [x] Actual 16/18/20px ledges and 60/70/120/210/220px banks rendered and inspected.
- [x] Horizontal repeats and narrow end truncation inspected with the current crop formula.
- [x] Private candidate report records commands, hash, reference passages and limitations.
- [x] Root visual acceptance: KEEP_WITH_CONCERNS after original crop inspection.
- [x] Fresh private-candidate SPEC and distinct QUALITY reviews; validation correction re-review.
- [x] Copy frozen accepted asset unchanged and add the existing-pattern lung loader branch.
- [x] Corrected canonical build and standard browser smokes (2/2); source, dist, and HTTP asset
  identity verified.
- [x] Five focused built-browser views captured; root reviewed originals with
  `KEEP_WITH_CONCERNS`.
- [x] Fresh public SPEC `ACCEPT_WITH_CONCERNS` and exactly six initial Plan/Test/Style/Docs/Legacy/
  Comment audit passes complete; original receipts retained.
- [x] Correct the two initial audit plan findings; retain the six original receipts.
- [x] Targeted build-fix re-review `ACCEPT` for the build-script correction.
- [x] Fresh final integration `ACCEPT_WITH_CONCERNS`.
- [x] Root production acceptance `DONE_WITH_CONCERNS` at 2026-10-17 20:01:30 UTC.

## Gate order

Gut Feeling and Cell Shuffle teaching are accepted before this bounded art task. A private
candidate is not production acceptance or human gameplay-readability evidence. Root inspects
the original rendered proofs before authorizing promotion. If the fixed crop contract makes
the candidate weak, stop promotion and document the concrete limitation.

## Private art handoff

Frozen candidate: `tests/_temp/lung_tissue_art_astra/lung_tissue_surface.svg`, SHA-256
`8ac5d626c5405785a79ebf6ed42082e73cfd0be1995afff29f5e8276a4ea2332`. Evidence and actual-size
decisions: `tests/_temp/lung_tissue_art_astra/REPORT.md`.

Root accepts the stronger connected pockets and swollen fold, and the thin folded strip below
the clear landing rim. Visible nodule cadence on 60/70px floors and truncated final repeats
remain explicit limits of the existing crop contract. No renderer redesign is authorized.
At the pre-promotion static-acceptance baseline, 45 imported levels, 111 source/asset files, and
32 built files retained their recorded identities. After promotion, the one-time production
comparison confirms all 45 level definitions and their order remain unchanged; the renderer is
intentionally modified and the frozen SVG is one added source/asset, for 112 source/asset files.
The built output now has 33 files. These dated comparisons are scope evidence, not a universal
current-count claim. Private art review and five integrated views support sampled visual review;
they do not establish human readability or gameplay enjoyment. Repeat cadence and narrow-end
truncation remain concerns.

## Build delivery correction

The canonical build preserves required-file verification before deleting `dist/`. The correction
adds `src/assets/lung_tissue_surface.svg` to that required list, the existing asset copy command,
and the final `dist/assets` file checks. Focused syntax and contract checks are recorded in
`tests/_temp/lung_tissue_build_asset_correction/REPORT.md`. The first official run's 404 and 1/2
smoke result remain in the record. After explicit registration in the required-source, copy, and
final-check lists, root reports the official rebuild and both smokes passing. Source, dist, and
HTTP asset hashes match the frozen SVG; the targeted build-fix re-review accepted the correction.
Root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-17 20:01:30 UTC after fresh
final integration accepted with concerns. See [LUNG_TISSUE_ACCEPTANCE.md](../reports/LUNG_TISSUE_ACCEPTANCE.md)
for the evidence, limitations, and disposition.
