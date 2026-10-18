# Lung tissue acceptance record

**Status: ROOT ACCEPTED `DONE_WITH_CONCERNS` at 2026-10-17 20:01:30 UTC.** Fresh final integration
accepted with concerns. The corrected build, standard smokes, sampled built-browser views, public
SPEC, initial six-pass audit, and targeted build-fix re-review are complete. The broad gameplay goal
remains ACTIVE.

## Scope and source identity

The frozen 128 by 120 Astra atlas is installed unchanged at
`src/assets/lung_tissue_surface.svg`, SHA-256
`8ac5d626c5405785a79ebf6ed42082e73cfd0be1995afff29f5e8276a4ea2332`. The renderer uses its
existing lazy-image cache and shared atlas crop helper for active solid horizontal lung surfaces.
The fixed clip, fallback, 3px cream rim, and distinct carrier, fragile, recoil, and vertical paths
remain. No level, geometry, physics, attack, order, or save changes were made; the production
comparison confirms all 45 level definitions and their order are unchanged.

The 45-level, 111-source/asset, and 32-built-file counts in the original private art report describe
the pre-promotion baseline only. Promotion changes `src/render_tissue.ts`, adds one SVG source/asset,
and adds that asset to the build, for 112 source/asset files and 33 built files. The old baseline is
retained as dated evidence, not a claim about current totals.

## Build and review history

The first official `./run_playwright_tests.sh --build` compiled but passed only one of two smokes:
the new SVG returned 404 because `build_github_pages.sh` omitted it from its required-source, copy,
and final dist-check lists. The correction registered the asset at all three existing locations.
The corrected official run passed both smokes. The targeted build-fix re-review accepted the
build-script correction and confirmed the fail-before-delete check remains intact. The original
failure is recorded in `tests/_temp/lung_tissue_build_asset_correction/REPORT.md`.

The public SPEC is `ACCEPT_WITH_CONCERNS` in
`tests/_temp/lung_tissue_public_spec/REPORT.md`. Exactly six fresh initial Plan, Test, Style,
Docs, Legacy, and Comment passes completed; their original receipts remain in
`tests/_temp/lung_tissue_six_pass_audit/REPORT.md`. The two
stale-plan findings are corrected in the active plan and this report. The focused build-fix
re-review is `ACCEPT` in `tests/_temp/lung_tissue_build_fix_rereview/REPORT.md`. The six-pass audit
reviewed its original production scope; it does not claim to have reviewed the later build-script
correction. Fresh final integration is `ACCEPT_WITH_CONCERNS` in
`tests/_temp/lung_tissue_final_integration/REPORT.md`; it closes both initial documentation
findings. Root then accepted the bounded milestone at 2026-10-17 20:01:30 UTC.

## Built evidence

Root reports that the corrected official build passed both standard Playwright smokes and the
96-check code gate plus TypeScript, lint, and format checks. Root verified that the source,
`dist/`, and HTTP SVG copies have SHA-256
`8ac5d626c5405785a79ebf6ed42082e73cfd0be1995afff29f5e8276a4ea2332`; the HTTP request returned
200. The current bundle is `dist/main.js` SHA-256
`33e6349bf8afc1adea5ddc213bc9f3d73e991f8431d8856653937b69b1f940ea`; its source map is
`6d539dd20c3b0a7552a5ddfdbec1ecb8b38a67834ee93272996f4579d1c10574`. The map contains 72 sources;
root reports all 72 mapped sources match disk. The builder now explicitly checks the lung SVG with
`test -f` in its final asset checks. No dedicated permanent renderer-unit test was added: the
corrected build check, standard HTTP smoke, and five one-time visible-art captures provide the
scoped delivery evidence. This is a deliberate KISS limit, not an open acceptance gate. Runtime
checks and the official build output were reported by root; build stdout is in root's task log, not
a saved repository artifact.

The existing capture helper produced five views at 2026-10-17 19:52:34.722 UTC against that bundle.
All five were playing, with zero deaths and no browser errors. Root personally viewed the original
images and kept the sampled visual result with concerns: the lung atlas is visible and the existing
pad, acid, hero, rim, and special-tissue cues remain distinguishable in these views. The captured
images and receipt are copied without alteration under `tests/_temp/lung_tissue_docs_closeout/`;
their hashes are recorded in its `REPORT.md`.

The unchanged current44 frozen map, full report, and chart still have their recorded SHA-256 values:

| Artifact | SHA-256 |
| --- | --- |
| `campaign_map.json` | `beecbf52f7c9f48a4da7eb122f52f9bc89a5b2f57302c6599ca4e15243d79f6e` |
| `LEVEL_DIFFICULTY_REPORT.md` | `c3d0deee49e03ccdcc80578b8555ca93c76872e181550869cb69f50b15ce7569` |
| `difficulty_campaign.svg` | `b2aa477269f7afe20bfbef1383311c2d566f06ab3ed06415a032cc01bb916e15` |

## Limits and documentation checks

The visible repeat cadence on 60/70px floors and narrow-end crop truncation remain. The captures
sample five rooms and do not establish all-room visibility, human readability, discovery,
enjoyment, or gameplay outcomes. No full 45-room journey or remote publication is claimed.

The first repository-wide Markdown-link check reported 19 failures and 538 passes. Some failures
were the new lung docs linking to ignored temporary evidence; those references are now plain paths,
and the focused plan/acceptance link check passes 2/2. Remaining failures point to absent ignored
historical evidence elsewhere in the checkout, including older references in the shared status,
changelog, and design-decision documents. They are outside this bounded closeout and do not change
the lung integration disposition.
