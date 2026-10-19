# Nutrient sac readability

Status: **DONE_WITH_CONCERNS; ACCEPTED BY ROOT** at 2026-10-18 14:07:29 UTC.

## Outcome

Two organic SVGs distinguish light and heavy nutrient sacs from tissue. Each draws inside its
existing cargo rectangle; gameplay definitions, room order, collision bounds, and heavy `TEAM`
label remain unchanged.

Prerequisite Cargo Exchange inspection found earlier top-standing attempts did not test side pushing.
A source-informed browser replay confirmed grounded right-side pushing and parking, so the room stays
unchanged. Another candidate stays private because it repeats existing carrier and pad work. See the
[Cargo Exchange diagnosis](../../../tests/_temp/cargo_exchange_contact_diagnosis/REPORT.md).

## Scope

- Replace nutrient cargo decoration with the matching cached SVG in `src/render_tissue_objects.ts`.
- Keep a simple fill and outline visible while an image loads or is unavailable; cache only these
  two fixed images using the existing lazy-image convention.
- Add both SVGs to the existing required-source, copy, and output checks in `build_github_pages.sh`.
- Add one changelog entry and one design decision. Add no permanent tests or asset framework.

## Verification

The focused renderer typecheck passed. Root's `./check_codebase.sh` passed (96 existing checks),
`./build_github_pages.sh` passed, and `./run_playwright_tests.sh` passed (two existing smokes).
Served `main.js` matched `dist/main.js` at SHA-256
`c86608025b90b08f10a64c439bd3f0f18e395c33380f841109bcad476cc9e3a7`; both SVGs returned HTTP 200.
SPEC, QUALITY, and final integration accepted the bounded change. The capture helper exited 0; root
reviewed five final original views with no deaths or browser errors, including the successful Cargo
Exchange intermediate with the parked gate open.

## Limits

Internal detail is reduced at 24 px. Scripted views do not establish human discovery or enjoyment.
No permanent rendering test was added under the approved scope. The broader gameplay goal remains
active. See the [SPEC](../../../tests/_temp/nutrient_sac_spec/REPORT.md),
[QUALITY](../../../tests/_temp/nutrient_sac_quality/REPORT.md),
[integration](../../../tests/_temp/nutrient_sac_final_integration/REPORT.md), and
[capture](../../../tests/_temp/nutrient_sac_public_capture/REPORT.md) reports.
