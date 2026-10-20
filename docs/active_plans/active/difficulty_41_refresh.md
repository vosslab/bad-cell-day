# Current 41-room difficulty assessment

**Status: DONE_WITH_CONCERNS; frozen assessment baseline.** Root accepted the complete current41
expert assessment at 2026-10-17 09:27:51 UTC after fresh QUALITY and integration review. The accepted
run contains all 41 frozen observation packets, immutable first-pass records and locks, same-author
paired source-aware records, and a generated campaign map and room report. Full validation and report
generation both exited 0; root independently validated at 09:17 UTC. That validation preceded the
final prose-only findings handoff. No map, paired record, or source changed afterward. See the
[acceptance report](../reports/difficulty_41_acceptance.md).

## Current result

- `README.md` records capture provenance, hashes, review
  qualifications, and the first/paired pass boundary.
- `FINDINGS.md` summarizes the actual numeric profiles,
  teaching and co-op progression, variation, limits, and player-impact priority.
- `docs/difficulty_runs/current_41/campaign_map.json` is the validated current map;
  `report/LEVEL_DIFFICULTY_REPORT.md` and `report/difficulty_levels/` hold generated room details.
- Validation output is retained in `tests/_temp/difficulty41_generate/validate.stdout`; report output
  is retained in `tests/_temp/difficulty41_generate/report.stdout`. Both corresponding exit files
  contain `0`.

The authoring chain is complete: early coverage uses original records plus group 1's re-spec and the
remaining re-spec records; middle coverage uses original records plus remaining re-spec records;
late coverage uses group 7's original and re-spec records and group 8's original plus remaining
re-spec records. First-pass records were not rewritten. The superseded early review that opened future
images was replaced. Group 2's `created_at` values are estimates, so lock timestamps, hashes, and
within-group order govern chronology. A middle reviewer disclosed seeing `CHANGELOG.md` during
orientation and reported it unused. No evidence indicates original-author source contamination.

## Acceptance gates

Fresh quality review accepted the findings with limits; integration accepted without a blocker, and
root accepted the assessment as `DONE_WITH_CONCERNS`. The report contains expert estimates, not
observed human success or comfort. All first-pass platforming values remain `unknown`; native routes
establish feasibility only. Zero control-friction estimates do not establish physical keyboard
comfort. The Level 3 (`level_04`, display position 3) sideways bridge/fall-risk report remains an
unresolved human concern despite the fixed source and successful scripted route.

The [bridge readability plan](BRIDGE_READABILITY.md) is `IMPLEMENTATION_IN_PROGRESS` under root
release at 2026-10-17 09:28 UTC. The captured current41 report remains frozen to the pre-presentation
source/build baseline; later renderer changes do not alter its acceptance. Current38 remains frozen
historical evidence with no inherited scores. The map does not prescribe score sorting, automatic
reordering, quotas, or a new level queue.
