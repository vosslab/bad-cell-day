# Patient body map

**Status: CLOSED - `DONE_WITH_CONCERNS`.** Root accepted this bounded milestone at 2026-10-17 13:05:53 UTC against the 43-room roster then in force. That acceptance, its bundle and source hashes, 43 serialized definitions, and seeded 42-record finale evidence are a historical snapshot; the counts below remain unchanged as evidence of that snapshot. The current contract is every ID in the current campaign roster, currently 44. The map derives its counts from the roster, and the villain trial remains excluded. Step On It coverage is recorded in the [production plan](villain_step_return.md) and [acceptance report](../reports/step_on_it_acceptance.md). Evidence limits are recorded in [the acceptance ledger](../reports/patient_body_map_acceptance.md). The broader continuous gameplay goal remains active.

## Goal and boundary

Show campaign progress as a patient body map between rooms and in the Levels dialog. The map should make the heroes' purpose legible: clear the spread across the body and rescue the patient. Keep the existing primary Next and Replay actions and villain comedy prominent.

The original implementation baseline was the 43-room campaign in `LEVELS`, with stable IDs and stage assignments. That baseline and its counts are historical acceptance evidence, not a current roster requirement. The enduring rule is to derive behavior from every current campaign ID; the current roster has 44 rooms, including `level_44` Step On It. The map derives counts automatically, and the villain trial remains excluded. The body-map architecture scout is at `tests/_temp/body_map_architecture_scout/REPORT.md`; the campaign structure inventory is at `tests/_temp/campaign_structure_scout/REPORT.md`. Both reports are `DONE_WITH_CONCERNS`. The recent movement-first ferry acceptance remains accepted and is not reopened by this map work.

## Approved implementation contract

- Add a `PatientMap` Solid component that consumes existing readonly `LevelDefinition[]`, `SavedProgress`, and current level inputs. Derive six-organ totals and completions from stable IDs in the actual campaign list.
- Derive the global frontier as the first uncleared campaign room. Label it **Next uncleared site** so it stays distinct from the existing adjacent-room **Next** action. Replaying an earlier room must not move this frontier backward.
- Show the map in the existing campaign completion panel and above the existing Levels dialog. Keep current location clear. Show per-organ cleared/total counts, `active` / `part-cleared` / `cleared` status, an overall sites-cleared count, and non-color symbols for cleared, current, and next locations.
- Use an original static, editable SVG body illustration. Load it as an image and overlay dynamic DOM badges. The map's text must communicate the same progress without relying on color or image interpretation.
- Celebrate patient rescue only when every current campaign site is cleared. Old saves may already mark the finale complete while a newly added room is missing; report that room as remaining and do not claim full rescue yet.
- Exclude the villain trial completely. Add no persistence, schema, progress state, configuration option, dependency, navigation mode, or campaign roster.
- At the historical acceptance, preserve all 43 serialized level definitions, physics, stable IDs, unlock rules, adjacent Next behavior, saves, and trial behavior. The enduring full-rescue rule covers every ID in the current campaign roster. Intro and conclusion should establish the patient-rescue purpose and cancer-spread progression.
- Treat the user's concern about possible overuse of vertical DNA barriers and interest in more moving-platform or scene navigation as direction to consider, not a rigid room quota or barrier-removal requirement. The structure report finds 37 of 43 rooms have a tall barrier and 19 already use a moving platform; it identifies repeated cooperative gating as the stronger structural pattern. This map task changes no room designs.

## Milestone ledger

| Milestone | Owner | Status | Exit evidence |
| --- | --- | --- | --- |
| Architecture and campaign inventory | Root / scouts | `DONE_WITH_CONCERNS` | Historical implementation snapshot: both scout reports cited above; source roster was 43 rooms; ferry acceptance retained. |
| Fix illustration and badge coordinates | Astra | `DONE_WITH_CONCERNS`; root approved | Editable source `src/assets/patient_body_map.svg`; SHA-256 `b534882997885003b783557e8407269b6728ab617f4bc550d2bb271fc9acd481`. Anchors in `src/patient_map.tsx`: brain (50%, 12.1%), lungs (50%, 32.2%), liver (37.5%, 44.7%), intestine (50%, 57.2%), tumor (68.3%, 54.6%), marrow (65%, 78.3%). |
| Implement map and placements | Luna / root integration | `DONE_WITH_CONCERNS` | Source has all 43 level definitions serialized identically (SHA-256 `21fc6f35247dd5eea9e51f491d731080c13cd2c82c8f7a74b17c406f1c64a4ad`); physics (`1ce24601c4f099ca737ab03eeb8d7e5e98e2e164596d9401214035615cdf84e8`), runtime, and save source are unchanged. |
| Fresh specification review | Fresh reviewer | `ACCEPT_WITH_CONCERNS` | `tests/_temp/patient_map_spec_recheck/REPORT.md`; partial organ status `clearing` is accepted as the plan's semantic `part-cleared`. |
| Fresh quality review | Fresh reviewer | `ACCEPT_WITH_CONCERNS` | Initial review: `tests/_temp/patient_map_quality/REPORT.md`; fresh recheck: `tests/_temp/patient_map_quality_recheck/REPORT.md`, which closes the ASCII-source finding. |
| Fresh integration review | Fresh reviewer | `ACCEPT_WITH_CONCERNS` | `tests/_temp/patient_map_final_integration/REPORT.md`; confirms current source/build identity, app placement, scope, and evidence limits. |
| Focused browser acceptance | Root / fresh browser agent | `DONE_WITH_CONCERNS` | `tests/_temp/patient_map_final_browser/REPORT.md`; current-build first clear, replay/frontier, adjacent Next, Levels parity, trial-entry save isolation, and seeded finale. Root approved `tests/_temp/patient_map_final_browser/final_first_clear.png` and `/private/tmp/final_patient_map_all_sites_cleared.png` at 13:05 UTC. |
| Root gates and closeout | Root | `DONE_WITH_CONCERNS`; accepted 2026-10-17 13:05:53 UTC | Final code gate `e95375` passed 94 checks; production build plus two standard smokes `6ef592` passed; source-preservation/served-identity check `c19aa0` and current SSR check `2122ff` passed. Current `dist/main.js` SHA-256: `bc811533d3dccfc3f68885dc5309b0694d7db0dc999ea63c9cc864a74ec74718`. |

Owners are task roles from the approved handoff. Root updates this table as assignments and evidence arrive; do not infer completion from a merged change alone.

## Acceptance and recovery

Use the built game in a real browser. Cover these focused cases without requiring a 43-room journey or difficulty regeneration:

- Empty campaign progress shows zero cleared sites, all six organ totals, and the first campaign room as the frontier.
- A naturally completed room updates its organ, total count, current-location cue, and next uncleared site.
- Replaying an earlier cleared room leaves the global frontier unchanged; the adjacent Next and Replay controls retain their existing behavior.
- The Levels dialog presents the same campaign map. The villain trial neither appears as a campaign site nor changes progress.
- An old save with the finale complete and a newly added room missing counts that room as remaining and withholds full-rescue celebration.
- Full-rescue celebration appears only when every ID in the current campaign roster is in saved completion progress (currently 44 IDs). The historical 43-room browser full-clear capture used the established helper to seed the earlier 42 records and then naturally clear stable finale `level_20`; it is not a continuous 43-room journey.
- Inspect the actual rendered SVG and DOM badges at the completion panel and Levels dialog; confirm legible organ anchors, responsive placement, text counts, and non-color symbols.

Closeout recorded: root's final code gate passed 94 checks; the production build and two standard browser smokes passed; source-preservation/served-identity and current SSR checks passed. Focused map cases are reported separately from the standard smokes in the acceptance ledger and current browser report. No permanent map-specific test was added. The source and acceptance evidence retain the trial and campaign definitions unchanged.

## File and evidence handoff

- `src/patient_map.tsx`, plus `src/app.tsx` and the existing style owner: component and display integration.
- Astra's original editable SVG in the established source-asset location, loaded as an image with DOM badges.
- Temporary focused browser evidence under `tests/_temp/`; no permanent tests are required by this plan.
- Closeout evidence is recorded in the acceptance ledger and current browser report. Old-save behavior is component-props/SSR evidence, not browser-storage import; optional trial completion was not played. The layout has source-level responsive rules, but narrow-viewport visual acceptance is not claimed.

Exact root commands from the repository root:

```sh
./check_codebase.sh
./build_github_pages.sh
./run_playwright_tests.sh --build
```

Run both standard browser smokes in one `./run_playwright_tests.sh --build` invocation using the repository's established two-smoke selection. Implementation owners should follow the repo's current component and asset conventions; this plan does not authorize edits to simulation, persistence, level data, or trial code.
