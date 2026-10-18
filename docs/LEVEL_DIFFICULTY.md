# Campaign difficulty assessment

## Current46 assessment: accepted with concerns

The generated current46 expert assessment covers the frozen 46-room campaign, including Gut Feeling
and Dead Weight in their registered positions. The canonical combined report command exited 0 and
wrote the map, full report, chart, and 46 room dossiers. This is the primary pointer to the current
campaign assessment artifacts. The corrected findings synthesis and all six independent Plan, Test,
Style, Docs, Legacy, and Comment audit passes are complete; Test and Legacy had no findings. Both
deduplicated documentation findings and later clerical items are closed. Targeted QUALITY accepts;
separate integration accepts with concerns. Root accepted the bounded assessment as
`DONE_WITH_CONCERNS` at 2026-10-17 22:15:47 UTC. Current46 is the latest accepted assessment.
No difficulty estimate is human-play evidence.

- [Current46 run ledger and provenance](difficulty_runs/current_46/README.md)
- [Generated campaign report](difficulty_runs/current_46/report/LEVEL_DIFFICULTY_REPORT.md)
- [Campaign map](difficulty_runs/current_46/campaign_map.json)
- [Cross-room findings](difficulty_runs/current_46/FINDINGS.md) (synthesis accepted; current direction recorded)
- [Campaign chart](difficulty_runs/current_46/report/difficulty_campaign.svg)
- [Current46 durable acceptance and review receipt](active_plans/reports/difficulty_46_acceptance.md)
- [Execution and review ledger](active_plans/active/difficulty_46_refresh.md)

The report and map cover all 46 campaign positions and 46 room dossiers. Final puzzle estimates
span 43-82 and platforming estimates 11-68. All first-pass platforming axes are unknown, four
first-pass puzzle axes are unknown, clarity and recovery burdens range 1-3, and control friction is
unknown in all 46 rooms. The report lists 16 automated review candidates as prompts, not conclusions.
All control-friction ratings and human outcome measures remain unknown; idle captures and expert
ordinal estimates do not measure human success, discovery, enjoyment, comfort, or difficulty.
The six fresh Plan, Test, Style, Docs, Legacy, and Comment audit passes are complete; Test and
Legacy had no findings. Both deduplicated documentation findings and later clerical items are
closed. Targeted QUALITY accepts and separate integration accepts with concerns. Root accepted the
bounded assessment as `DONE_WITH_CONCERNS` at 2026-10-17 22:15:47 UTC. Current46 is the latest
accepted frozen expert assessment; the active source/build freeze has ended while captured artifacts
remain immutable. The broad gameplay goal remains active.

## Historical accepted assessment: frozen current44 snapshot

The current source roster has 46 rooms: lungs 1-5, intestine 6-12, marrow 13-19, liver 20-32,
brain 33-45, and the tumor finale at campaign position 46 (stable `level_20`). **Dead Weight**
(`level_46`) occupies campaign position 27 (liver),
after `level_32` and before `level_14`. **Gut Feeling** (`level_45`) occupies intestine position 6, after
`level_37` and before `level_06`. The historical current44 assessment is the immutable 44-room
checkpoint snapshot, whose then-current order was lungs 1-5, intestine 6-11, marrow 12-18, liver
19-30, brain 31-43, and tumor 44.
It estimates expert difficulty for the
mandatory two-human shared-keyboard route across eight dimensions; puzzle and platforming are
separate derived axes. All 44 `control_friction` values are unknown. These ordinal estimates,
idle captures, and scripted route evidence do not measure human success, discovery, enjoyment,
friction, comfort, or difficulty.

The assessment does not include Gut Feeling, Dead Weight, or the current 46-room order. No new
difficulty scores are assigned here; the earlier files remain unchanged. See the [Dead Weight
production status](active_plans/reports/DEAD_WEIGHT_ACCEPTANCE.md) and [Gut Feeling acceptance
record](active_plans/reports/GUT_FEELING_ACCEPTANCE.md) for production evidence and limits.

- [Current44 run ledger and provenance](difficulty_runs/current_44/README.md)
- [Generated campaign report](difficulty_runs/current_44/report/LEVEL_DIFFICULTY_REPORT.md)
- [Campaign map](difficulty_runs/current_44/campaign_map.json)
- [Cross-room findings and proposed next action](difficulty_runs/current_44/FINDINGS.md)
- [Campaign chart](difficulty_runs/current_44/report/difficulty_campaign.svg)
- [Current44 assessment closeout](active_plans/reports/difficulty_44_acceptance.md)
- [Execution and review ledger](active_plans/active/difficulty_44_refresh.md)

Current44 is an immutable historical accepted checkpoint. Current46 is the latest accepted
assessment; current44 retains context for its then-current 44-room roster and evidence.

The final canonical report command exited 0 and generated the report, map, chart, and 44 room
dossiers. The map SHA-256 is
`beecbf52f7c9f48a4da7eb122f52f9bc89a5b2f57302c6599ca4e15243d79f6e`; the full report SHA-256 is
`c3d0deee49e03ccdcc80578b8555ca93c76872e181550869cb69f50b15ce7569`; and the chart SHA-256 is
`b2aa477269f7afe20bfbef1383311c2d566f06ab3ed06415a032cc01bb916e15`. The run contains 44 records,
44 locks, and 132 ignored idle PNGs. Final SPEC and distinct QUALITY reviews are accepted, and the
fresh targeted integration review ACCEPTED. Root accepted this bounded assessment as
`DONE_WITH_CONCERNS` at 2026-10-17 18:14:54 UTC. Its historical inputs remain frozen; the assessment
closeout ends the active source/build freeze, so gameplay development can continue. See the closeout
receipt for the decision, concerns, and evidence limits.

## Frozen historical checkpoints

Earlier assessments remain bound to their captured rosters and source/build identities. They do not
score the current campaign, and scores are not inherited.

- [Current41 run ledger](difficulty_runs/current_41/README.md), [map](difficulty_runs/current_41/campaign_map.json), [findings](difficulty_runs/current_41/FINDINGS.md), [report](difficulty_runs/current_41/report/LEVEL_DIFFICULTY_REPORT.md), [chart](difficulty_runs/current_41/report/difficulty_campaign.svg), and [acceptance](active_plans/reports/difficulty_41_acceptance.md).
- [Current38 run ledger](difficulty_runs/current_38/README.md), [map](difficulty_runs/current_38/campaign_map.json), [findings](difficulty_runs/current_38/FINDINGS.md), [report](difficulty_runs/current_38/report/LEVEL_DIFFICULTY_REPORT.md), [chart](difficulty_runs/current_38/report/difficulty_campaign.svg), and [acceptance](active_plans/reports/difficulty_38_acceptance.md).
- [Current36](difficulty_runs/current_36/README.md), [current33 capture-only](difficulty_runs/current_33/README.md), [current32](difficulty_runs/current_32/README.md), [current31](difficulty_runs/current_31/README.md), [current29](difficulty_runs/current_29/), and [current28](difficulty_runs/current_28/).
- The 23-room baseline is retained in [its report](LEVEL_DIFFICULTY_REPORT.md), [findings](DIFFICULTY_FINDINGS.md), and [chart](difficulty_campaign.svg).

All assessment estimates are design context, not human-play results or requirements to sort the
campaign by score. See the [difficulty rubric](DIFFICULTY_RUBRIC.md) and its typed contract for the
assessment dimensions and workflow.

## Run a future assessment

Use a fresh, absent or empty run directory. Never overwrite a historical run or replace a lock.
Keep the source and build fixed during the active assessment window. Run each command only at its
phase gate; the prompt exposes only that phase's permitted evidence.

```sh
npx tsx devel/assess_difficulty.ts snapshot --run-dir docs/difficulty_runs/new_assessment
node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts prompt level_02 --pass first --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts lock level_02 --run-dir docs/difficulty_runs/new_assessment
# Repeat first-pass prompt and lock in campaign order for every room.
# Do not run any second-pass prompt until the campaign-wide gate below is accepted.
npx tsx devel/assess_difficulty.ts prompt level_02 --pass second --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/new_assessment
```

The commands above illustrate the CLI shape; the second-pass example is a later phase, not the next
step after locking `level_02`. Complete chronological first-pass records and locks for all rooms,
then review the whole campaign and release source access. Only the coordinator enforces this
campaign-wide gate; the CLI checks locks per room. After the gate, authors may begin source-aware
prompts. At closeout, the active source/build freeze ends, while this run remains frozen historical
evidence for its captured identity. Later gameplay development does not require recapturing this
run; make a new snapshot and capture only when estimating a changed baseline in a new assessment.

The `report` command performs full validation before generation. Use `validate` by itself only when
validation is needed without regenerating the report.

A fingerprint checks freshness for this developer workflow; it is not a production, CI, or
difficulty threshold. Keep human observations separate from expert estimates.
