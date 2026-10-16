# First-encounter campaign difficulty rubric

This is a repeatable expert cognitive walkthrough for a new pair of human players using the normal
two-person controls, reaching both exits in campaign order. It estimates learnability and task
demand; it does not measure player success, enjoyment, time, or frustration. During pass one, read
only this rubric, the typed contract, and chronological observation packets. Do not read source,
existing difficulty reports, solutions, or future-room packets before the first pass is locked.
The typed record is [types.ts](../devel/difficulty/types.ts).

## Scope and evidence

- Assess every position in the current campaign roster by stable room ID and in roster order. Start
  each room with the abilities and concepts shown at earlier positions, naming each relevant
  introduction and practiced use. Earlier exposure is an opportunity to learn, not proof of human
  mastery.
- Score the mandatory both-exit route. Record collectible routes separately. Report the extra
  simultaneous-input demand of one person controlling both heroes in a note, not in the two-human
  baseline scores.
- Treat each dimension as an estimate supported by a specific cue, step, mistake, or legal route.
  A source definition proves mechanics; a scripted clear proves feasibility; neither proves a
  first-time player's understanding or a human difficulty distribution.
- Retain the artifact used for each claim and cite its repo-relative path, SHA-256, and locator
  within that frozen artifact. Use `json:captures[0].visible_text` for a packet field,
  `lines:12-18` for a source range, `text:LEVELS` for an exact source substring, or
  `image:whole` / `image:x,y,w,h` for a retained PNG. JSON paths must resolve, line and image
  ranges must be in bounds, and text must occur in the cited file. These checks establish artifact
  identity and address presence; a reviewer still determines whether the cited material supports
  the claim and whether a visual cue is actually visible. If a cue is invisible or an artifact is
  unavailable, record an unknown and lower confidence. Do not convert missing observation into a
  known mechanic.
- In pass one, cite only the current or earlier observation packet and retained images. Source,
  historical routes, hint text, and later-room packets are outside that author's evidence set.
- Screenshots are authoritative for canvas visibility. Raw canvas draw calls are excluded because
  an attempted draw can be hidden or offscreen. Visible DOM text is separately recorded in the
  packet. Do not infer visible labels from source or hidden runtime state.
- Before locking or validating assessments, select the run directory explicitly. The CLI checks the
  current campaign and authored source against the selected run's snapshot, source binding, built
  source map and copied site files, capture receipt, and roster-sized set of packet and image
  identities and hashes. The run's source binding records capture-time provenance. If source or
  build changes, rebuild, take a fresh full capture in a fresh run directory, and start new
  first-pass records before using `lock`, `validate`, or `report` on that capture.

Publishing policy: observation JSON records stay tracked. PNG captures under the selected run's
`observations/` directory are ignored local artifacts; record their repository-relative code paths,
SHA-256 hashes, and image locators rather than Markdown links. Keep required captures available
locally for assessment validation: an unavailable PNG still fails validation. All identity, hash,
source/build freshness, and chronological evidence requirements above still apply.

## Two staged passes

1. Prepare the observation packet: current build, visible DOM, room title and position, and
   screenshots at start, 1.5 seconds, and 4 seconds idle. The assessor derives a prior-concept
   ledger from earlier observation packets; those packets do not automatically confirm lessons.
   Earlier exposure does not establish mastery. The current packet contains no source, solution,
   route trace, hint text, or proposed score. A fresh author records each meaningful witnessed
   action or, for idle-only evidence, each proposed action as a hypothesis. Record observed
   feedback only after an action was actually witnessed; use `null` otherwise. Do not invent
   controls, mistakes, or recovery from an idle frame. Optional hints may be recorded after the
   unassisted attempt; they do not establish base clarity. Freeze
   `<run-dir>/first_pass/level_XX.json`, then hash it. The CLI writes an independent lock under
   `<run-dir>/locks/` with the pass-one hash and packet fingerprint. The manager releases source
   access only after the complete first-pass set is reviewed and locked.
2. After the complete first-pass set is reviewed and locked, the same assessor resumes the paired
   assignment and inspects actual source mechanics and ordinary-input routes, including alternatives
   and recovery. Record pass two at `<run-dir>/levels/level_XX.json` with the frozen first-pass
   SHA-256. Compare the account: what pass one confirmed, missed,
   inferred incorrectly, or still cannot know. Explain rating changes with evidence; a numerical
   delta alone is insufficient. Confirm each relevant mechanic's actual earlier introducer or mark
   it new, and explain transfer or recombination; counting new objects is insufficient. Name each
   hero's contribution and the consequence and recovery of plausible common mistakes. Do not edit
   pass one in response to source hindsight. Paired differences record possible hindsight effects;
   they do not measure a causal effect or human bias.
3. A reviewer checks both records against the locked packet, source, retained captures, and
   campaign order. Resolve disagreements as hypotheses or corrected evidence, preserving the
   original first-pass artifact. Re-run validation and report generation after corrections.

Use the same instructions for each fresh pass-one author: "Play or inspect this room as a first
encounter. Derive possible earlier concepts from earlier observation packets; exposure does not
prove mastery. If you only have idle screenshots, mark actions as proposed and observed feedback
as null. Do not invent controls, mistakes, or recovery. Describe each decision, each hero's
possible contribution, expected and actually seen feedback, and anything you cannot determine.
Rate the eight dimensions below with evidence, using null rather than zero for unknown demands.
Do not consult source, hints, route solutions, or other room assessments before locking your record."
Pass two uses: "Inspect the locked record, source, and ordinary-input route evidence. Document
actual mechanics, legal mandatory routes, optional collectibles, and recovery. Compare causal
findings without rewriting the first-pass experience."

## Anchored scores

Every scorable dimension uses an integer from 0 to 4. `null` means evidence is insufficient;
explain the unknown and do not calculate an axis that depends on it. `0` means absent or negligible
on the mandatory route; `1` means familiar and forgiving; `2` means a noticeable choice or demand;
`3` means several
dependent demands or a narrow margin; `4` means sustained synthesis or severe demand. Apply the
following dimension-specific anchors to avoid counting length or waiting as reasoning.

| Dimension | 0 | 2 | 4 |
| --- | --- | --- | --- |
| Reasoning | Direct visible action | One causal inference or ordered dependency | Several interacting dependencies with a non-obvious plan |
| Cooperation | One hero can finish the work | Distinct roles and one handoff | Repeated mutual dependencies or coordinated simultaneity |
| Execution | Simple walking | Several controlled jumps, pushes, or placements | Sustained precise movement for both heroes |
| Timing | No active window | A readable, repeatable window | Chained or narrow windows with little safe pause |
| Hazards | No mandatory exposure | Visible danger with safe approach | Repeated exposure with scarce refuge |
| Novelty | Earlier lesson reused directly | One new combination or transfer | Several unfamiliar mechanics or a new model |
| Recovery cost | Immediate safe retry | Some setup or traversal must be repeated | Failure resets a long dependent sequence |
| Solution clarity | Goal and response visible | Some causal link must be tested | Essential relationship poorly cued or misleading |

The 1 and 3 scores interpolate between adjacent anchors. Score novelty relative to actual earlier
campaign teaching, not to an expert's general game knowledge. Rate reasoning by required causal
decisions; count a repeated wait or repeated jump under timing or execution. Rate cooperation by
necessary work for both heroes, not just their presence at exits. Rate recovery cost from a
plausible mistake and retry, distinguishing harmless reversals from lethal resets. Rate solution
clarity as *burden* (higher means harder to understand); describe misleading feedback separately
from an interesting hidden relationship. Record control friction on the same 0..4 burden scale:
conflicting keys or unclear input response for the shared-keyboard two-human baseline. Describe
one-operator interference separately. Distinguish verified friction from a plausible risk. Use
`0` only after control reliability is verified; an idle packet alone ordinarily yields `null` for
control friction and may leave hidden recovery unknown. It is a diagnostic field, not evidence that
the puzzle itself is deeper.

For hazards, rate the consequence of exposure on the mandatory route. Count potential death,
loss of safe ground, or other meaningful physical danger; an empty `hazards` array alone does not
settle the score. Temporary FLOAT, STICKY, SHOVE, or DIZZY on safe continuous floor is interference
that may affect execution, timing, or recovery, but does not automatically earn hazard points.
FLOAT used as a safe routing tool is not itself a threat. A projectile that can push a hero into a
gap can be a hazard even when the projectile effect is temporary. This clarifies the existing
hazard anchor without changing the eight dimensions, ordinal scale, or axis formulas. Frozen
first-pass records retain the wording available to their original authors; interpret them under
that original wording when comparing passes rather than attributing this clarification to them.

## Derived axes and interpretation

The report computes two comparison aids from pass-two scores, rounded to the nearest integer:

```text
puzzle = 100 * (3*reasoning + 2*cooperation + 2*novelty) / 28
platforming = 100 * (3*execution + 2*timing + 2*hazards) / 28
```

Keep `solution_clarity`, `recovery_cost`, and `control_friction` beside those axes as burdens;
never add them to either axis. Show pass-one and pass-two estimates together, with their confidence
and causal differences. An apparent spike caused only by weak cues or controls is a usability
finding, not an interesting challenge. The 0..100 numbers are transparent weighted summaries of
ordinal judgments, not calibrated measurements, rank gates, or claims that adjacent rooms must
increase. Compare profiles and evidence first. The report should flag high-burden, low-confidence,
and suspicious adjacent inversions for review, then rank candidate fixes by likely player impact,
evidence strength, and whether the issue belongs to design, cues, controls, or recovery.

## Validation and human follow-up

The validator should require exactly one pair of records per current campaign ID and position,
all eight dimensions with a rationale and evidence or a documented unknown, valid 0..4 or null
scores, a valid first-pass hash, current campaign/source fingerprints, source-supported mechanics,
a legal mandatory both-exit route, and explicit unknowns/confidence. It should reject pass-one
evidence paths outside the chronological packet set and mismatched room IDs; a reviewer must inspect
packets for solution leakage. Report evidence gaps separately from schema errors. Apply
roster/source staleness only to the developer assessment command, not the game build or numeric
difficulty gates. Generate the map and report artifacts under the selected run only after all
paired records and evidence validate. The CLI does not promote scores or gate the game build. Keep
human observations separate from expert estimates. A separate human observation sheet remains the
route to measured player evidence. If actual players are observed, preserve attempts, times, deaths,
restarts, hints, and stuck points as raw observations; do not fold them into these heuristic axes.
Do not claim measured difficulty, enjoyment, or player success from AI or expert estimates.
