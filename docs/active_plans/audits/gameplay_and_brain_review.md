# Gameplay and brain review

## Findings

- **LOW:** The closed Marrow and No Takebacks ledgers remain under `active/`. Root retains this as
  residual housekeeping because moving them requires `git mv`.
- Root separately noted ambiguous current-roster wording in `docs/LEVEL_DIFFICULTY.md`; the narrow
  correction is complete and was not an independent audit finding.

## Verdict

Root accepts the recent Marrow, No Takebacks R2, and brain tissue milestones as recorded in their
respective ledgers. The brain tissue pilot is **DONE_WITH_CONCERNS**; continuous gameplay development
remains **ACTIVE**. The concerns are one low archival finding, preserved helper failures, and
unmeasured human enjoyment and discovery. Root did not request archival moves in this session.

## Audit boundary

The six fresh passes reviewed current source explicitly, not the Git diff:

- `src/levels_middle.ts`
- `src/villain_scenes_middle.ts`
- `src/render_game.ts`
- `src/level_no_takebacks.ts`
- `src/levels.ts`
- `src/render_tissue.ts`
- `src/assets/brain_tissue_surface.svg`
- `build_github_pages.sh`

Shared engine, type, and test files were supporting reads only. Canonical documentation included
`README.md`, `docs/USAGE.md`, `docs/LEVEL_DIFFICULTY.md`, `docs/CHANGELOG.md`,
`docs/DESIGN_DECISIONS.md`, the Marrow, No Takebacks, and brain tissue ledgers, and
`docs/active_plans/reports/gameplay_direction.md`. Relevant repository guidance included
`AGENTS.md`, `docs/REPO_STYLE.md`, `docs/TYPESCRIPT_STYLE.md`, `docs/MARKDOWN_STYLE.md`,
`docs/PLAYWRIGHT_TEST_STYLE.md`, and `docs/PYTEST_STYLE.md`.

## Six independent passes

| Pass | Disposition | Report |
| --- | --- | --- |
| Plan | One LOW finding: the closed Marrow and No Takebacks ledgers remain under `active/`, contrary to the archive convention. Source matches the approved plans; no blocker. Root leaves this as residual housekeeping because moving files requires `git mv`. | `tests/_temp/audit_plan/REPORT.md` |
| Test | PASS; no findings and no permanent tests proposed. No test or suite was rerun. | `tests/_temp/audit_test/REPORT.md` |
| Style | No findings. | `tests/_temp/audit_style/REPORT.md` |
| Docs | No findings in the reviewed canonical documentation. After the passes, root separately identified ambiguous current-roster wording in `docs/LEVEL_DIFFICULTY.md`; its narrow correction is complete. This was a root follow-up, not an independent audit finding. | `tests/_temp/audit_docs/REPORT.md` |
| Legacy | No findings in the declared source boundary. | `tests/_temp/audit_legacy/REPORT.md` |
| Comment | No findings. | `tests/_temp/audit_comment/REPORT.md` |

No ordinary SPEC, QUALITY, or integration review was started for the brain pilot. The separate
wording correction is recorded in `tests/_temp/audit_roster_wording_fix/REPORT.md`. The audit
receipts are ignored workspace reports and are referenced here as paths, not archived logs.

## Evidence and limits

The brain pilot passed the integrated source gate (90 Node checks plus TypeScript, lint, and format),
the corrected official build with 2/2 standard smokes, the all-33 exported-definition/scene/order
comparison, and asset distribution checks. The first official build's missing-SVG assertion failed
with `ENOENT`; that failure remains historical evidence for the narrow build-list repair. The
corrected build served index, main, map, and SVG with reported disk parity. The map had 56 entries,
including 54 embedded `../src/` files. No permanent tests were added, and no full Python suite was
run for the presentation pilot; the latest full Python result, 4,276 passed, belongs to No Takebacks
R2 before this pilot.

Four focused browser contexts passed on the frozen corrected build: normal thin, reduced-motion
thin, deep normal dynamic, and normal thin with the SVG intentionally blocked. The fallback-only
real-time input check moved both heroes 63 px and showed procedural rendering. An earlier
clock-installed fallback movement check exited 1 with zero movement; that harness failure remains
preserved. Reduced-motion deep was not tested. Scripted captures do not measure human readability,
discovery, enjoyment, or paired-control comfort.

After acceptance, root's read-only preview check exited 0: `index.html`, `main.js`, and
`assets/brain_tissue_surface.svg` returned HTTP 200 and matched built files at port 8127. No source
or build change followed the accepted visual build.

No Takebacks' fresh 33-room journey is R1 campaign-order/save evidence; the R2 ledger separately
records the repaired delayed retry, focused routes, and save fixtures. Marrow's full Python result
and browser checks remain attached to its own milestone. Do not combine these evidence sources or
relabel prior failures as passes.

## Next development priority

Refresh difficulty coverage for the current 33-room roster before selecting another gameplay
expansion. The added `level_33` has no score, and level 11 changed after the frozen 32-room
assessment. This records direction only; it does not authorize edits to frozen assessment records.
