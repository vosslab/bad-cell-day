# Campaign difficulty assessment

The 23-room campaign has a reusable expert-assessment workflow and a separate path for observing
actual players. Scores are estimates of task demands; they do not establish novice success,
enjoyment, time, or frustration. The rubric is the method authority:
[DIFFICULTY_RUBRIC.md](DIFFICULTY_RUBRIC.md). The typed assessment contract lives in
`devel/difficulty/types.ts`.

The accepted 23-room estimates and frozen records describe the pre-anatomy visual source. The
stage and art migration makes their source-freshness check stale; the scores remain historical
design input and have not been recomputed. The assessment CLI source-freshness rejection is expected
for this migrated source; preserve its 26 outputs, 23 first passes/locks, source records, and
calibration unchanged. A new locked first pass is needed before making claims
about clarity with the anatomical presentation. See
[the anatomical world acceptance record](active_plans/reports/anatomical_world_acceptance.md).

Use [the active assessment plan](active_plans/active/difficulty_assessment.md) for current gates
and status. The [generated report](LEVEL_DIFFICULTY_REPORT.md) links all 23
[room dossiers](difficulty_levels/LEVEL_02.md), and the [campaign chart](difficulty_campaign.svg)
shows the two axes. [DIFFICULTY_FINDINGS.md](DIFFICULTY_FINDINGS.md) owns expert cross-room
interpretation and candidate improvements. Historical audits and the former proposed order are
context, not current scores or a substitute for reassessment.

## Expert assessment workflow

Capture an equal, solution-free observation packet for each campaign room. Give each fresh
first-pass assessor only the rubric, typed contract, and packets in chronological order. Lock each
first-pass record before releasing authored source or route solutions. The second pass then checks
actual mechanics, legal routes, both heroes' contributions, mistakes and recovery, and which earlier
room actually introduced each reused concept. Keep the original first pass immutable so the paired
records can expose possible hindsight; this comparison does not measure a causal effect.

Use the developer CLI from the repository root:

```sh
node --import tsx devel/assess_difficulty.ts snapshot
node --import tsx devel/assess_difficulty.ts prompt level_01 --pass first
node --import tsx devel/assess_difficulty.ts lock level_01
node --import tsx devel/assess_difficulty.ts prompt level_01 --pass second
node --import tsx devel/assess_difficulty.ts validate
node --import tsx devel/assess_difficulty.ts report
```

The prompt prints the current instructions and provenance requirements; it does not assign scores.
Locking is deliberate and must not silently replace an existing lock. To capture browser packets,
use `node devel/capture_difficulty_observations.mjs --out <new-empty-directory>`; every run needs a
fresh output directory. The capture records snapshot metadata, current local or served build hashes,
and menu checks. Follow the capture tool's usage for an optional URL or room limit.

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
