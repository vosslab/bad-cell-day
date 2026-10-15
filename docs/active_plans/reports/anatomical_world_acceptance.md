# Anatomical world acceptance

Status: anatomical-world milestone DONE. M1, source SPEC, QUALITY, and whole-milestone integration
are ACCEPTED by the manager on 2026-10-15. M2/M3 implementation, frozen technical/browser checks,
canonical screenshots, archive custody, and documentation are complete. Continuous game
development remains ACTIVE.

## Frozen candidate and contract

The final candidate is bound to these SHA-256 values:

- Main: `5143922d0da6d28dec92d452124bd2c60aa089419201c2f23da1a0bc7e085a73`
- Source map: `64926c792632f5e573c1e4089da24f494a59e2b7569f68b6b3ea71fada37e821`
- Source manifest: `2b24493e85b86bd06faa744002134b80e89e659781c0191cbe4c74730ebfe5f3`
- Distribution manifest: `b4af1fc42b7f063e20e3f2cccd54bd153aaf43cc115435409d3031ef7c6803e2`
- Protected level content: `80806bfa0841f9968defd23d5d729fe81ca213f7d4f093ba0bd4903321c72d5a`

The architect approved the six-key `OrganStage`, readonly `OrganPalette` and
`TissueSurfaceAppearance`, canonical `ORGAN_THEMES`, and pure clipped `draw_tissue_surface` API.
Six original static organ SVGs and state-linked foreground tissue supply presentation identity.
Reduced motion freezes decoration while actual mechanisms and state feedback continue.
Barnsyverse supplies broad inspiration for original bold forms; no outside art is copied.

All 23 normalized definitions match the baseline after exactly eight presentation exclusions:
`stage`, `title`, `subtitle`, `hint`, `villainScene.gem.opening`, `villainScene.gem.ending`,
`villainScene.cana.opening`, and `villainScene.cana.ending`. Stable IDs/order, geometry, pad
labels/effects, physics, timing, motion, attacks, and save schema remain fixed. The 26 protected
mechanics, input, save, interference, weapon, and pose modules are byte-identical to baseline.

## Technical validation

Canonical evidence: `test-results/anatomical_world/candidate_build/{receipt.txt,results.json}`.
The manager-fresh `./check_codebase.sh` passes both TypeScript configurations, lint, format, and
67/67 Node tests. Three production builds have identical main/map bytes. All 42 bundled source-map
entries (40 authored), 75 frozen source/build inputs, 18 served distribution files, and 13 SVG
XML/native decode checks pass.

The final permanent Playwright run passes 2/2 in the original two-worker configuration. A separate
earlier one-worker run also passes 2/2. Retained earlier attempts show a sandbox MachPort launch
denial before test execution and one `ERR_CONNECTION_RESET` at the final console-error assertion;
the reset does not recur in either rerun, and its resource/root cause remains unassigned.

The independent Chromium render probe passes 1,128 frozen renders, 282 reduced-motion pixel pairs,
5,760 tissue-containment cases, 140 object cases, 288 exact active-edge checks, 288 inactive hollow
checks, and 3 transformed-clip cases. Canonical evidence:
`test-results/anatomical_world/render_validation/{receipt.json,results.json}`. These constructed
render states establish rendering behavior separately from shipped-app route acceptance.

## Built browser evidence

All room numbers below are stable IDs, not campaign positions or test counts. The main receipt is
`test-results/anatomical_world/browser/candidate_04/results.json`: 18 ordinary-key completions,
347 captures, and zero app/network errors. Its completion count is one genuine fresh Play in `02`,
seven focused Replay routes (`02`, `08`, `23`, `13`, `17`, `22`, `20`) in both motion modes (14),
and three extra normal-motion routes (`14`, `19`, `21`). Fresh Play/Next, pause/resume/retry, and
all 13 SVG decodes per motion mode pass. The legacy profile contains all 20 older stable IDs:
all 20 earned rooms show Replay, all three added rooms show Ready, and preferences survive reload.

`test-results/anatomical_world/browser/opening_sweep/results.json` records 29 captures: all 23
openings in normal motion and one representative opening per organ in reduced motion. These are
opening inspections, not 29 room completions.

Supplementary evidence is separate in
`test-results/anatomical_world/browser/recovery_and_shutdown_02/results.json`: 59 captures and
zero app/network errors. Stable `23` passes early release and reboarding in normal and reduced
motion (two cases); stable `22` passes early release and hold recovery in both modes (two cases).
Normal-motion stable `11` shows `POWER OFF SOON`, `NO POWER`, and restored power on the cyclic
carrier. Stable `20` shows joint charge at 0, 0.5, 1, 1.5, and 2 seconds, from HELD to SHUTDOWN,
and ordinary-key completion in each motion mode. These two finale completions are additional to
the main 18; recovery cases are not counted as whole-room completions.

The five existing canonical screenshots and the clean six-organ sheet are identified by source
path/hash in `test-results/anatomical_world/browser/CANONICAL_SCREENSHOTS.json`; montage provenance
is `test-results/anatomical_world/browser/curated/sheet_provenance.json`. Browser owner signoff is
DONE in `browser/BROWSER_ACCEPTANCE.md`; `browser/FINAL_VERIFICATION.json` records `allPass: true`
and 454 accepted PNGs across the three lanes and clean montage. The browser manifest covers 581
payloads (582 files including the ledger). Its
SHA-256 is `d3f35ad4ce3b5ee5b65b576685dc548717f7dcb37b1cd887a096b0c4d5ab0b6c`.

## Reviews and scope

Fresh source SPEC accepts the frozen main/map against
[anatomical_world.md](../active/anatomical_world.md). Its independent source review matched 74
source/test file hashes and 42 bundled source entries. Fresh QUALITY accepts the 23 built openings,
six organ scenes in normal/reduced motion, representative tissue, valves, fragile/stabilized
surfaces, counterweight load/dock states, and villain labels; it reports no defects.

All six SVGs, three foreground modules, linkage/copy, and the scoped villain-name backplate are
complete. Owner receipts are under
`test-results/anatomical_world/{art_opening,art_late,foreground,linkage_copy,villain_labels}/`.
The linkage/copy owner changed 62 approved strings across 14 files, including the separately
approved fallback quip. The villain-name plate fixes observed GEM/CANA contrast while preserving
label anchors, text, actor/weapon poses, and recharge clearance. The shared type/API stays fixed.

This is a presentation milestone with focused built routes, not a fresh full-campaign replay.
The unchanged 26 difficulty outputs, 23 first passes and locks, source-informed records, and
calibration remain historical pre-anatomy evidence. The CLI source-freshness failure is expected;
scores are not recomputed to hide it. A new restricted first pass is needed for new clarity claims.
No human enjoyment, novice understanding, or paired-player comfort has been measured. The earlier
difficulty assessment milestone is DONE; continuous game development remains ACTIVE. A new FLOAT
room remains an unimplemented hypothesis.

## Custody and integration

Canonical restore instructions are in `test-results/anatomical_world/CUSTODY.md`. Baseline,
migration, candidate-build, and render-validation trees were matched byte-for-byte before their
original `tests/_temp/anatomical_world/` directories were removed. Archived `.mjs.txt` helpers
remain evidence and require the documented path restoration. A packaging-only followup retains
the frozen candidate bundle as `candidate_build/copied_site/main.js.txt`; the custody mapping
restores `main.js` in a working copy before serving. Its frozen bytes and original distribution/
served manifests remain unchanged. Ignored evidence paths use code references and hashes rather
than Markdown links.

The preserved baseline manifest digest is
`53b08132cc213911e2b6e57c92a2c4c507fc58449a9319a155707afc3a10754c`. The earlier 173-entry manifest
`4d58b2d1a0167728118a03f6b8d7b529bb8be934d63521c6c8859d47514053f1` is historical and does not
verify current archive contents. The pre-packaging root ledger
`cbea1f6ea1cc33379965d99cda823dec4021ee017e28c0c07ae628f4d07a4434` is also historical. After the
bundle rename and custody/receipt amendments, the current archive-wide `SHA256SUMS` covers 949
payload files (950 total including the ledger), with exact membership and all hashes verified.
Its SHA-256 is `3c5d173b2656e0fbbba8431ca496902fe723d15e9c32488cc8f9c13bfc0b4ff6`.

M1 was accepted on 2026-10-15 at main
`7046a97d1c9ed6ce6ddc07c2f758f5abefda121a472bf185ff92f1660741805b` and map
`3774cc312a633052a59d2ca0ccdf645d2876f4c55763b24707594ca70c02483e`. Its 67-check/build and
six-organ Replay smoke are migration evidence; the final candidate above supersedes that visual
build for M2 acceptance.

- Frozen technical validation: PASS
- Focused browser routes, recovery, shutdown, legacy saves, and opening inspection: PASS
- Final browser owner receipt and canonical capture signoff: DONE
- Fresh SPEC and QUALITY: ACCEPTED
- Final archive manifest and retained inventory: DONE
- Documentation correction: ACCEPTED after fresh independent integration review
- Manager integration acceptance: ACCEPTED on 2026-10-15; anatomical milestone DONE
