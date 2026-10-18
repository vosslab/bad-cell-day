# Patient body map acceptance ledger

Status: **`DONE_WITH_CONCERNS`; root accepted 2026-10-17 at 13:05:53 UTC.** This closes the bounded map-presentation milestone. The broader continuous-game development goal remains active.

The active plan is [patient_body_map.md](../active/patient_body_map.md). The final integration report is `tests/_temp/patient_map_final_integration/REPORT.md` (`ACCEPT_WITH_CONCERNS`); fresh SPEC and QUALITY rechecks are `tests/_temp/patient_map_spec_recheck/REPORT.md` and `tests/_temp/patient_map_quality_recheck/REPORT.md` (both `ACCEPT_WITH_CONCERNS`). The current-build browser report is `tests/_temp/patient_map_final_browser/REPORT.md` (`DONE_WITH_CONCERNS`).

## Frozen implementation and root gates

- Final `dist/main.js` SHA-256: `bc811533d3dccfc3f68885dc5309b0694d7db0dc999ea63c9cc864a74ec74718`.
- Component `src/patient_map.tsx` SHA-256: `402ba6f18506f905217845528a8d72e77cf6694c195097e6b7025e4e10e5cf08`.
- Editable SVG SHA-256: `b534882997885003b783557e8407269b6728ab617f4bc550d2bb271fc9acd481`.
- All 43 serialized level definitions and their order remain unchanged; physics, runtime, and save behavior remain unchanged. No 44th level was added.
- Root's final code gate `e95375` passed 94 checks. Production build plus two standard browser smokes `6ef592` passed. Root's independent source-preservation/served-identity check `c19aa0` and current component SSR check `2122ff` passed. These are root-reported receipts; this documentation closeout did not rerun those gates.

## Current-build browser evidence

The final browser report confirms that served `main.js` matches the bundle hash above and the served SVG matches the source and distribution asset. A fresh empty browser save followed the existing route: first-room clear, replay with stable frontier, adjacent Next, and trial entry without campaign-save changes. DOM checks confirmed all six region totals sum to 43 and the legend glyphs and region separators are present. Root viewed and approved `tests/_temp/patient_map_final_browser/final_first_clear.png` and `/private/tmp/final_patient_map_all_sites_cleared.png` at 13:05 UTC. The first-clear image shows 1/43, the next frontier, zero retries, and 2/2 sparks; the finale shows 43/43, six cleared regions, zero retries, and 2/2 sparks.

The finale helper seeded the 42 earlier completion records and then naturally cleared `level_20`. This is rendered finale evidence, not a continuous 43-room journey. The prior-save case (finale complete while the newly present `level_43` is missing) is component-props and SSR evidence: it renders 42/43 and withholds rescue; it was not imported through browser storage. Trial entry and save isolation were tested; trial completion was not played. The evidence does not establish human fun, discovery, playability, or mobile acceptance. These are accepted limits, not open blockers.

The earlier 04a6 browser build and its finale capture are historical; final status relies on the current-build report and root-approved captures named above. The focused browser report also records that the repository Playwright suite passed its two documented tests. The browser journey and seeded finale are bounded acceptance, not a full-campaign replay.

## Acceptance disposition

The implementation remains derived presentation over the existing campaign and saved stable IDs. It does not add a roster, persistence, schema, navigation mode, trial progress, or production test quota. SPEC accepts the display label `clearing` as the plan's semantic `part-cleared` state. QUALITY's prior ASCII-source concern is closed by the fresh recheck. Integration found no source defect or architectural drift requiring rejection. The final milestone is closed with the evidence limits above; no further map task or feature queue is opened by this receipt.
