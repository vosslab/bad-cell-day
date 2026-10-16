# Campaign difficulty assessment

The current 31-room campaign has a complete paired expert assessment in the isolated
[`current_31` run](difficulty_runs/current_31/README.md). Its
[campaign map](difficulty_runs/current_31/campaign_map.json),
[generated report](difficulty_runs/current_31/report/LEVEL_DIFFICULTY_REPORT.md),
[cross-room findings](difficulty_runs/current_31/FINDINGS.md), and
[final-pass ordinal expert estimates chart](difficulty_runs/current_31/report/difficulty_campaign.svg)
cover every room in campaign order. The existing two-pass method and typed contract remain defined
by [DIFFICULTY_RUBRIC.md](DIFFICULTY_RUBRIC.md) and `devel/difficulty/types.ts`.

The 0-100 puzzle and platforming values are weighted summaries of ordinal expert ratings, not
calibrated measurements. Clarity, recovery cost, and control friction remain separate burdens.
Do not treat generated scores as human difficulty, success, enjoyment, frustration, completion time,
or two-person keyboard comfort. Unknown evidence remains marked unknown in the report. See the
[acceptance ledger](active_plans/reports/difficulty_31_acceptance.md) for validation and review
receipts.

The paired `current_31` assessment remains frozen against its recorded pre-Cargo-feedback source and
build. Cargo feedback changes presentation only; do not regenerate its ratings or outputs. The
[Cargo feedback acceptance ledger](active_plans/reports/cargo_feedback_acceptance.md) records the
later implementation and runtime evidence. Assessment estimates remain expert design evidence, not
human-play measurements.

Stable `level_30`, **Your Turn to Carry**, follows `level_24` and precedes `level_14`; stable
`level_31`, **Knock It Off**, is at campaign position 28, after `level_27` and before `level_29`.
Stable `level_20`, the finale, remains at position 31. The completed 30-room campaign delivery is
recorded in the [cooperation surprise ledger](active_plans/reports/cooperation_surprise_acceptance.md)
and [living decisions ledger](active_plans/reports/living_decisions_acceptance.md).

The frozen `current_29` run remains historical, bound to its recorded pre-art/pre-carry source and
build, and unpromoted. The [current 29-room map](difficulty_runs/current_29/campaign_map.json),
[report](difficulty_runs/current_29/report/LEVEL_DIFFICULTY_REPORT.md), [findings](difficulty_runs/current_29/FINDINGS.md),
and [acceptance ledger](active_plans/reports/difficulty_29_acceptance.md) retain its design evidence.
The older `current_28` and 23-room estimates are also frozen historical input; preserve their records
and outputs unchanged. The [Changing Places acceptance ledger](active_plans/reports/changing_places_acceptance.md)
owns that room's implementation and gameplay acceptance status.

The accepted 23-room estimates and frozen records describe the pre-anatomy visual source. The
stage and art migration makes their source-freshness check stale; those scores and published outputs
remain historical design input and have not been recomputed. Preserve their records, locks, captures,
calibration, and reports unchanged. The accepted 28-room assessment is frozen in
[README.md](difficulty_runs/current_28/README.md) as a pre-Gem source snapshot. Its assessment
milestone is DONE_WITH_CONCERNS; the later `level_16` source change makes its freshness check stale
by design. Keep its data immutable and its scores as bounded design input, not a current-source
assessment or a game-build gate. The
first-pass estimates are low-confidence and the second-pass estimates are medium-
confidence; because different assessors wrote each pass, score differences do not establish a causal
hindsight effect. First-step feedback and control-friction values remain unknown. These are expert
estimates, not human-play or measured-difficulty results. See
[FINDINGS.md](difficulty_runs/current_28/FINDINGS.md),
[LEVEL_DIFFICULTY_REPORT.md](difficulty_runs/current_28/report/LEVEL_DIFFICULTY_REPORT.md),
[campaign_map.json](difficulty_runs/current_28/campaign_map.json), and
[difficulty_campaign.svg](difficulty_runs/current_28/report/difficulty_campaign.svg). The
[current difficulty acceptance ledger](active_plans/reports/current_difficulty_acceptance.md) owns
the completed assessment's status and evidence; the
[Gem Lair acceptance ledger](active_plans/reports/gem_lair_acceptance.md) owns current implementation
gates. The [anatomical world acceptance record](active_plans/reports/anatomical_world_acceptance.md)
records the art migration.

The [active assessment plan](active_plans/active/difficulty_assessment.md) records the workflow.
The older [generated report](LEVEL_DIFFICULTY_REPORT.md),
[room dossiers](difficulty_levels/LEVEL_02.md), [campaign chart](difficulty_campaign.svg), and
[difficulty findings](DIFFICULTY_FINDINGS.md) describe the historical 23-room assessment. Keep them
as historical context; use the `current_31` links above for the current campaign estimates and the
[Gem Lair acceptance ledger](active_plans/reports/gem_lair_acceptance.md) for current implementation
status.

Both developer CLIs require the same run directory. The latest completed run is
`docs/difficulty_runs/current_31`; for a future run, choose a new absent or empty directory such as
`docs/difficulty_runs/new_assessment`. The tools derive fixed paths below the selected directory
for `snapshot.json`, `observations/`, `first_pass/`, `locks/`, `levels/`, `campaign_map.json`, and
`report/`. A snapshot
requires an absent or empty run directory; capture requires absent `observations/`. Locks remain
immutable, and report outputs are derived only within the selected run. The selected run's snapshot,
observation capture, paired records, map, report, dossiers, findings, and chart are frozen; its
solution-free [README.md](difficulty_runs/current_31/README.md) describes the run without solutions.
Do not reuse the frozen `current_31` directory for new records or treat its ratings as implementation
requirements or human outcomes.

## Expert assessment workflow

Capture an equal, solution-free observation packet for each campaign room. Give each fresh
first-pass assessor only the rubric, typed contract, and packets in chronological order. Lock each
first-pass record before releasing authored source or route solutions. The second pass then checks
actual mechanics, legal routes, both heroes' contributions, mistakes and recovery, and which earlier
room actually introduced each reused concept. Keep the original first pass immutable so the paired
records can expose possible hindsight; this comparison does not measure a causal effect.

Use the developer CLI from the repository root:

```sh
npx tsx devel/assess_difficulty.ts snapshot --run-dir docs/difficulty_runs/new_assessment
node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts prompt level_01 --pass first --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts lock level_01 --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts prompt level_01 --pass second --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts validate --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/new_assessment
```

The prompt prints the current instructions and provenance requirements; it does not assign scores.
Locking is deliberate and must not silently replace an existing lock. The former capture `--out`
option is retired; `--run-dir` selects the snapshot, observation directory, and report destinations
together. Capture retains `--url` and optional `--limit`. It records snapshot metadata, current local
or served build hashes, and menu checks.

The CLI's source and campaign fingerprints are a developer assessment freshness check, not a game
build or CI difficulty gate. The rubric defines the two separate comparison axes, `puzzle` and
`platforming`, plus solution clarity, recovery cost, and control friction as separate burdens. An
unknown is `null`, never an assumed zero. Review evidence and explanations before interpreting
scores; an apparent spike from weak cues or controls may indicate confusion rather than an
interesting challenge. Future order changes need a fresh novelty assessment against the actual
earlier teaching sequence; do not sort existing scores into a new order.

## Human play observations

This sheet records actual attempts and is independent of the expert rubric. Use it during first-time
play, note whether players work as a pair or one person controls both heroes, and record prior room
experience and hint use. A successful route or an expert estimate is not a human observation.

An attempt starts when the player presses Play or Retry, or automatically respawns after death. It
ends at death, manual restart, clear, or abandonment. Total time to first clear includes all
attempts since the first Play. Record purposeful waits and external pauses separately. Mark a room
complete only after it is cleared; for abandonment, record elapsed time and the stopping point. If
something was not observed, write `not observed`.

| Player / mode / prior experience | Room ID and position | Attempt | First-attempt time | Total time to clear | Deaths | Manual restarts | Help / hint | Stuck point, expectation, or misunderstanding | Optional collectibles |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |

Record what each hero was expected to contribute, what both players tried, and the feedback they
noticed. Ask what felt interesting, what felt confusing, what control or cue caused friction, what
they would try next, and why. Preserve player explanations and concrete moments, including both
successful approaches and common mistakes. Compare adjacent suspected inversions with fresh players
or counterbalanced room order when possible. Use observations to map candidate improvements to
their evidence and expected player benefit; keep the reason for retaining or rejecting each change.
Do not add hazards, tighter jumps, or filler walking only to increase completion time. There is no
telemetry feature or permanent numeric difficulty threshold.
