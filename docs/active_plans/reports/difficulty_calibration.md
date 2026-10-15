# Independent difficulty calibration

This is a three-room, source-informed expert walkthrough against the
[frozen first-pass rubric](../../archive/difficulty_rubric_first_pass.md.txt). The
[current rubric](../../DIFFICULTY_RUBRIC.md) adds the later hazard clarification without changing
the dimensions or axis formulas. This check asks whether the original rubric yielded a coherent
interpretation across contrasting rooms. It does not estimate human success or whole-campaign
rater reliability.

## Frozen independent checkpoint

Before opening any canonical `devel/difficulty/first_pass/` or `devel/difficulty/levels/` record,
I scored stable IDs `level_02` (campaign position 1), `level_23` (position 12), and `level_20`
(position 23). The scored artifact is
[devel/difficulty/calibration.json](../../../devel/difficulty/calibration.json), frozen at SHA-256
`3430aff7df5a0e70a568830b727f0565f826465b557662087a6c776ee9189e59`. That file
contains the eight anchored scores, rationales, source and packet paths, byte hashes, and locators.
Its historical rubric path and SHA-256 still describe the source used at the freeze; the exact
bytes are retained in
[difficulty_rubric_first_pass.md.txt](../../archive/difficulty_rubric_first_pass.md.txt)
at SHA-256 `5e9f37c6a3bafce2e6ac0992c22db63561942ec027ea48349096d715b232d95d`.
The observation packets contained idle screenshots and DOM text, not witnessed play. Source and
ordinary-input route reports establish mechanics and possible recovery; neither establishes what
new human players would discover or how often they would fail. The campaign snapshot identifies
the assessment as `7bc88b12...f54d69` with source fingerprint `f9091fe3...1379faf6`.

| Room | Reasoning | Cooperation | Execution | Timing | Hazards | Novelty | Recovery | Clarity burden | Puzzle axis | Platform axis |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| `level_02` | 2 | 2 | 1 | 1 | 1 | 3 | 1 | 2 | 57 | 25 |
| `level_23` | 4 | 3 | 3 | 0 | 0 | 3 | 2 | 3 | 86 | 32 |
| `level_20` | 3 | 3 | 3 | 3 | 3 | 2 | 3 | 3 | 68 | 75 |

The axes use the rubric's weighted formulas and rounded integers. Control friction is `null` for
all three rooms because there is no two-human input observation. One-person simultaneous-control
burden and two optional collectibles per room are separate notes in the frozen artifact.

The opener asks Isp to hold a door while Pac reaches a rescue latch. Its two villain attacks add
forgiving disruption on flat ground. Cargo Exchange requires a reciprocal load/unload plan on
paired counterweights, with more pushing and boarding but no timed danger. The finale reuses known
pad and attack concepts in a bridge-support handoff, two upper ascents, a lower gap, and a joint
two-second target hold. These are causal readings of the mandatory routes, not a ranking by object
count or scripted clear duration.

## Primary comparison

The manager released the primary records after all 23 second-pass drafts were present. I then read
only [level_02.json](../../../devel/difficulty/levels/level_02.json) (SHA-256
`30d1c01edace69bd62424cff130d317ba8e903501a7c0eb80fcbaf570f400d40`),
[level_23.json](../../../devel/difficulty/levels/level_23.json) (SHA-256
`29c9d693b34da18d4a50a1d8390281c017291e35dcf67b1e24c2b369c5684da2`), and
[level_20.json](../../../devel/difficulty/levels/level_20.json) (SHA-256
`65446a778b3df487f0cc8ebc20cdbe17bb6b94ed979186d34623e345b6bf2c1b`).
Their eight-score vectors use the same column order as the frozen table above. The
independent scores and frozen calibration artifact were not revised. The final primary
`level_23` record reflects the later source adjudication of its timing anchor. The final
`level_20` bytes also reflect the quality correction that leaves source-predicted effects
in `expected_feedback` and sets unwitnessed intermediate `observed_feedback` to `null`;
its eight scores did not change.

| Room | Independent vector | Primary vector | Exact matches | Independent axes | Primary axes |
| --- | --- | --- | ---: | --- | --- |
| `level_02` | 2, 2, 1, 1, 1, 3, 1, 2 | 2, 2, 0, 1, 0, 3, 1, 2 | 6/8 | 57 / 25 | 57 / 7 |
| `level_23` | 4, 3, 3, 0, 0, 3, 2, 3 | 4, 4, 3, 0, 0, 4, 2, 3 | 6/8 | 86 / 32 | 100 / 32 |
| `level_20` | 3, 3, 3, 3, 3, 2, 3, 3 | 4, 4, 4, 2, 3, 3, 3, 2 | 2/8 | 68 / 75 | 93 / 79 |

Across this deliberately contrasting sample, 14 of 24 dimension scores match exactly. All 10
differences are one point. The later adjudication corrected the primary `level_23` timing
anchor from 1 to 0: its rationale states that safe pausing leaves no active window, which
matches the frozen independent timing score. This changed no independent score and involved
no averaging. Both assessors leave control friction unknown. The larger axis gaps,
especially finale puzzle 68 versus 93, are weighted summaries of clustered ordinal judgments,
not measured player differences.

For `level_02`, reasoning, cooperation, timing, novelty, recovery, and clarity have the same
causal explanation and score. My execution 1 counted projectile avoidance as movement. The
primary 0 is better anchored to the required flat walking route; attack windows already appear
under timing. Hazards 1 versus 0 records an original anchor ambiguity: my score counted exposure
to nonlethal FLOAT/SHOVE interference, while the primary score counted the absence of a dangerous
mandatory route. The later [quality resolution](difficulty_quality_resolution.md) settled the
current rule by consequence: temporary interference on safe ground alone does not count as a
hazard, though a projectile that can push a hero into a gap may count. This supports the final
primary hazard 0 while leaving the independent score frozen.

For `level_23`, both accounts identify the reciprocal load exchange and recoverable cargo pins.
The primary cooperation 4 better fits the anchor for repeated mutual dependencies: both riders
are needed in both directions, and each opens the partner's exit. The primary novelty 4 better
fits the explicit *new model* anchor for paired counterweights, despite earlier practice with
crates and weighted pads. At the original comparison checkpoint, my timing 0 differed from the
primary 1 even though its rationale described safe pausing and no active window. The later
[source adjudication](difficulty_adjudication.md) corrected final primary timing to 0, so the
final vectors agree on that dimension. Reasoning, execution, hazards, recovery, and clarity also
agree.

For `level_20`, both accounts agree on the actual STOP-to-STEADY-to-RESCUE-to-blue-TARGET
handoff, slime/core exposure, and costly reset after a fatal fall. The primary gives reasoning
and cooperation 4 where I gave 3. Its case is supported by several interacting dependencies and
repeated mutual support, including the final dual hold. Primary execution 4 versus my 3 is less
settled: Isp has two constrained upper jumps, while Pac has a lower gap and shot dodge. The
rubric's 4 asks for sustained precise movement *for both*; a witnessed novice route would help
resolve whether this exceeds several controlled jumps. Primary novelty 3 versus my 2 turns on
whether bridge-support takeover plus the returning boomerang constitute several distinct new
transfers after earlier target, pad, and attack teaching. Both scores are defensible without a
human learning observation.

The finale's timing and clarity differences cut the other way. My timing 3 counted repeated
projectiles, ferry phase, and a two-second joint hold; the primary 2 emphasizes readable,
repeatable windows and safe pauses. The 2 is better aligned with the timing anchor, because
waiting and repeated attacks alone do not create narrow windows. My clarity burden 3 reflects
the weak unassisted cue that blue TARGET replaces STEADY as bridge support. The primary 2
reflects the explicit visible boss panel for both TARGETs and the two-second hold. The support
relationship may still need testing, but the essential goal is visibly cued; 2 is a reasonable
rubric application. Neither source obviousness nor an optional hint was used as proof of
unassisted clarity.

The sample shows that the rubric produces stable causal accounts and limits disagreements to
neighboring anchors. The nonlethal attack and active-window questions received the later
source and quality resolutions; the novelty difference remains an expert judgment. It samples only three of
23 rooms, all from expert source walkthroughs. It cannot establish whole-campaign agreement,
first-encounter human difficulty, physical shared-keyboard friction, or player enjoyment.
