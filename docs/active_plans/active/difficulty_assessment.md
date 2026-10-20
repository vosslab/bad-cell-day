# Campaign difficulty assessment

## Current 32-room assessment

### Goal and authority

Create a reusable, evidence-backed expert profile of every room in the frozen 32-room campaign
without changing gameplay as part of the assessment. The two-pass method separates blind
first-encounter estimates from source-informed route review and identifies possible hindsight
effects. The [difficulty rubric](../../DIFFICULTY_RUBRIC.md) owns method and interpretation;
[`types.ts`](../../../devel/difficulty/types.ts) owns record shape. This plan is the current workflow
and status authority. The [32-room acceptance ledger](../reports/difficulty_32_acceptance.md) holds
frozen fingerprints, detailed execution receipts, reviewer corrections, and evidence limits.
Human-play observations remain a separate evidence stream.

### Frozen baseline and status

The frozen `current_32` snapshot records campaign SHA-256
`e35a3db7af0347547b2dffbae14af4d70f60de251e3f4ab8b52ef02e93ae4400` and source fingerprint
`37536853e15a63e16db398864a144a0294b500b05a79877d5743afc6142af12a`. Its R3 build fingerprints
and source/campaign validation are recorded in the acceptance ledger. Keep the snapshot, 32 first-
pass records and locks, 32 paired records, map, report, chart, dossiers, and findings frozen. Preserve
the earlier `current_31` records and outputs unchanged as historical evidence.

Full validation and report generation passed. Fresh SPEC, a different fresh QUALITY review, and
integration returned ACCEPT_WITH_CONCERNS. Root accepted the assessment as DONE_WITH_CONCERNS after
the final Python suite (3,712 passed) and codebase check (type, lint, format, and 90 Node tests).
Keep this assessment frozen as the R3 baseline. The continuous game-development goal remains ACTIVE.
Do not treat the estimates as human-play evidence or a game-build gate.

### Assessment method

- Assess all 32 stable room IDs in campaign order as a first-time two-human team sharing a keyboard.
  Record one-person simultaneous-input load separately.
- Keep the eight rubric dimensions, separate puzzle and platforming axes, and clarity, recovery, and
  control friction as distinct burdens. Use `null` when evidence cannot support a score.
- Keep first pass blind to source, routes, hints, historical assessment, future packets, and
  solution-bearing changelog content. Assessors see only the rubric, type contract, and current or
  earlier chronological observation packets. Lock every first-pass record before source release.
- After locks are reviewed, the same paired assessors inspect mechanics and ordinary-input routes,
  compare their source-aware accounts without editing first pass, identify actual earlier concept
  introductions, and describe both heroes' work, mistakes, and recovery.
- Cite claims to retained artifacts and resolvable locations. Screenshots govern canvas visibility;
  visible DOM text is separate. Do not infer learning, action feedback, recovery, or control comfort
  from idle screenshots.
- Treat values as ordinal expert estimates, not calibrated difficulty or evidence of player success,
  discovery, enjoyment, frustration, time, or paired-control comfort. Do not set numeric gates,
  force monotonic difficulty, or change campaign order from scores alone.

### Execution and review sequence

1. **COMPLETE:** freeze the current 32-room campaign and R3 source/build; create `current_32` with
   the snapshot command before adding any other run file.
2. **COMPLETE:** capture all 32 idle packets at approximately 0, 1.5, and 4 seconds, with hints
   closed and no gameplay input. Retain the 96 PNGs locally as ignored evidence; do not check them
   into Git or move them. Local temp receipts remain inline-code paths, not Markdown links.
3. **COMPLETE:** review all 32 blind records and locks for order, hashes, and blindness statements.
   Preserve the locks unchanged.
4. **COMPLETE:** after source release, complete all 32 paired source-aware assessments without
   editing the first pass.
5. **COMPLETE:** run full validation and generate the paired map, report, 32 dossiers, chart, and
   cross-room findings. They are present under
   `README.md`.
6. **COMPLETE:** obtain fresh SPEC review, disposition ACCEPT_WITH_CONCERNS.
7. **COMPLETE:** obtain a different fresh QUALITY review, disposition ACCEPT_WITH_CONCERNS.
8. **COMPLETE:** fresh integration review across records, outputs, findings, and docs returned
   ACCEPT_WITH_CONCERNS.
9. **COMPLETE:** root final checks passed and root accepted the assessment as DONE_WITH_CONCERNS.

The existing workflow validates the full current roster; a partial record set cannot produce the
current assessment. Keep SPEC, QUALITY, integration, and root review in this order. The acceptance
ledger and review reports preserve the exact corrections and receipts. Small presentation changes
may use the frozen 32-room profile as design guidance without repeating the full numeric assessment
after every edit. Do not describe these scores as fresh for a source that has changed.

### Evidence-led follow-up

The `FINDINGS.md` informed the approved
[recurring Marrow milestone](recurring_marrow.md). That plan selects one existing-contract boomerang
in level 11, a latch label correction, and a ride-first cue correction in level 10. It preserves all
32 assessment records and generated outputs as frozen evidence; the scores are no longer current
for changed source. R2 full-campaign evidence differs from R3 only by inactive Cana display x80 to
x750; R3 captures and focused browser checks are separate. No human fun or control comfort is
proven. Other candidates remain deferred.

## Historical 23-room plan and evidence

The following plan text and its named milestones describe the completed 23-room assessment. Keep
its source fingerprints, reports, calibration, records, and receipts as immutable historical evidence;
the sections below do not govern current 32-room execution or status.

## Goal and authority

Create a reusable, evidence-backed expert profile of all 23 campaign rooms without changing
gameplay in this milestone. The user requested a two-pass assessment that separates first-encounter
estimates from source-informed route review and identifies possible hindsight effects. The
[difficulty rubric](../../DIFFICULTY_RUBRIC.md) owns method and interpretation;
[`types.ts`](../../../devel/difficulty/types.ts) owns record shape. This plan records execution
status and gates. Human-play observations remain a separate evidence stream.

## Settled method

- Assess all 23 stable room IDs in current campaign order, as a two-person team reaching both exits.
  Record the extra simultaneous-input load of one person controlling both heroes separately.
- Use eight dimensions: reasoning, cooperation, execution, timing, hazards, novelty, recovery cost,
  and solution clarity. Scores are 0..4 or `null`; unknown is not zero. Keep control friction as a
  separate diagnostic burden.
- Keep puzzle and platforming axes separate with rubric weights. Keep clarity, recovery, and
  friction outside those axes. Scores are transparent ordinal estimates, not calibrated measures,
  rank gates, or a command to reorder the campaign.
- In pass one, use only the current and earlier chronological observation packets. Derive a prior
  concept ledger from actual earlier packets; exposure alone does not prove learning. Record
  proposed actions as hypotheses unless witnessed, and observed feedback only after a witnessed
  action. Do not use source, hints, routes, historical reports, or future-room packets.
- Freeze and lock each first-pass record before releasing source access. In pass two, inspect source
  and ordinary-input routes, compare the causal account without editing pass one, identify actual
  earlier introductions, explain both heroes' work, and analyze common mistakes and recovery.
- Cite every claim to a retained artifact with SHA-256 and a resolvable locator. Screenshots govern
  canvas visibility; visible DOM text is separate. Raw draw calls are not visibility evidence.
- Keep the expert report separate from actual human attempts. No gameplay change follows from a
  rating alone. A future order change requires novelty reassessment against the earlier teaching
  sequence rather than sorting existing numbers.

## Current evidence and status

- The 23 frozen idle packets and 69 screenshots are retained with visible DOM text. The
  [capture receipt](../../difficulty_observations/capture_receipt.json) and
  [source binding](../../difficulty_observations/source_binding.json) identify campaign SHA-256
  `7bc88b12eb9f7fc50f44b90f1c72a0b1629f30154711401cf9512526b8f54d69` and source
  fingerprint `f9091fe3478efeff506256fdfcb36cb5c642c1c437f7e121b4ff20a1379faf6f`.
  The binding is retrospective: source parity was verified after capture. Future fresh captures
  bind source at capture time.
- The game build remains the accepted active-villains baseline: main SHA-256
  `a77ac47f9ead7750ea01ca652d44b0c9b76a6abe2b0cb24e5b5df1e6030f23b5`, map SHA-256
  `c31d54fe5d776f0443524f64d657e49af28e4e1a2df0d7b835207598e59faff0`. Its prior full
  23-room run remains the game baseline; this closeout adds no new replay claim.
- An initial raw draw-call method yielded occluded labels and 10 invalid blind records. They
  remain archived. Fresh idle-packet assessment replaced them; this was not a game defect.
- All 23 first-pass records and independent locks are frozen. Their sorted SHA-256 listing hashes
  to `0d897d917149873806d9244098b0f32e65923b1859d784f56c3227dade2e64d0`.
  All 23 final records contain eight anchored scores; two-human control friction remains `null`.
- Source adjudication corrected room 23 timing to 0 and clarified room 02's hazard rationale.
  Quality resolution set 36 unwitnessed route-step `observed_feedback` values to `null` in nine
  records, retained source predictions in `expected_feedback`, and changed room 22 hazard from 1
  to 0. First-pass records and independent calibration were not rewritten. See
  [difficulty_adjudication.md](../reports/difficulty_adjudication.md),
  [difficulty_quality_resolution.md](../reports/difficulty_quality_resolution.md), and
  [difficulty_calibration.md](../reports/difficulty_calibration.md).
- Assessment validation passes all 23 rooms. Two report runs produced identical 26-file output
  from 72 frozen record inputs. Their exact-byte manifest is the local
  `test-results/difficulty_assessment/final_render/frozen_inputs.sha256` (SHA-256
  `29c37c7e1ef998fc4ac9b5480f488b477beb08a8dd3a3323993564076fd7799a`); five separate
  supplementary render artifacts have their own manifest. The local
  `test-results/difficulty_assessment/final_render/receipt.json` identifies both. The exact
  26-output manifest is `test-results/difficulty_assessment/final_render/outputs.sha256`
  (SHA-256 `f19429c8cbb637757061c94667e8d289515253807e2afd13b59240519985931f`);
  the five-artifact supplementary manifest hashes to
  `532329cea34a332895f69ce88bb12e1516788126e7923e70c63401dd76140d80`. These are
  ignored test artifacts, not durable repository links. The 920 x 760 SVG was inspected in a
  browser. The full codebase check
  passes 67 tests (57 game and 10 assessment), both TypeScript configurations, lint, and format.
  Assessment tests use fixtures, not a permanent game-CI capture-freshness gate.
- No novice human pair has played these rooms for this study. Expert estimates and scripted
  end-state feasibility do not measure discovery, enjoyment, timing, or input comfort.

## Output and workflow

The CLI is `node --import tsx devel/assess_difficulty.ts`:

```sh
node --import tsx devel/assess_difficulty.ts snapshot
node --import tsx devel/assess_difficulty.ts prompt level_01 --pass first
node --import tsx devel/assess_difficulty.ts lock level_01
node --import tsx devel/assess_difficulty.ts prompt level_01 --pass second
node --import tsx devel/assess_difficulty.ts validate
node --import tsx devel/assess_difficulty.ts report
```

The browser capture helper is `node devel/capture_difficulty_observations.mjs --out
<new-empty-directory>`. Use a fresh output directory for every capture. Assessment fingerprints
are checked only by this developer workflow; no numeric threshold or difficulty gate belongs in
game CI.

The generated [campaign report](../../LEVEL_DIFFICULTY_REPORT.md),
[campaign chart](../../difficulty_campaign.svg), and
[room dossiers](../../difficulty_levels/LEVEL_02.md) exist. The report links every dossier.
The [findings](../../DIFFICULTY_FINDINGS.md) own cross-room interpretation and candidate work.

## Gates

| Gate | Evidence required | State |
| --- | --- | --- |
| Contract and rubric | Settled dimensions, typed shape, exact 23-ID order | SPEC and QUALITY ACCEPT |
| Observation packets | Frozen images/DOM, source binding, hashes, valid locators | SPEC and QUALITY ACCEPT; retrospective binding disclosed |
| First pass | Fresh restricted authors, prior-learning ledgers, immutable records and locks | SPEC and QUALITY ACCEPT |
| Second pass | Source routes, causal comparison, prior introductions, mistakes and recovery | SPEC and QUALITY ACCEPT |
| Engine | Citation, provenance, locator, ledger, callback and test-isolation review | SPEC and QUALITY ACCEPT |
| Assessment and data | Validation, source adjudication, feedback nulls, room 22 hazard correction | SPEC and QUALITY ACCEPT |
| Generated outputs | Deterministic 26-file report, 72-input receipt, browser-readable SVG | ACCEPT |
| Synthesis | Findings, calibration hashes, usage, and design record | Fresh SPEC and QUALITY ACCEPT |
| Whole milestone | Cross-artifact integration and manager acceptance | INTEGRATION ACCEPT; DONE |
| Human play | Actual paired attempts, roles, confusion and control friction | No sessions; unmeasured |

## Completion rule

This assessment milestone is DONE after fresh SPEC, QUALITY, and whole-milestone integration
ACCEPT. Preserve the evidence limits in published interpretation. The ongoing game-development
goal remains ACTIVE independently of this completed assessment. Human pair observations and the
next gameplay hypotheses remain future work; no new room or mechanic was implemented here.
