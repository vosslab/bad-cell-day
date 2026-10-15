# Evaluating level difficulty

Use this guide when comparing campaign rooms or reviewing a proposed order. Difficulty is a
profile, not a single score. Describe what the player must understand and do, and keep evidence
from source inspection, scripted routes, and human play distinct. The full source-based 20-room
audit is [difficulty_audit.md](active_plans/audits/difficulty_audit.md); the progression
implementation record is [difficulty_ledger.md](active_plans/reports/difficulty_ledger.md).

## What to observe

Evaluate the mandatory route to both exits. Record optional collectibles separately; requiring a
full collection creates a different route and can change the comparison. Keep these dimensions
separate:

| Dimension | Observe |
| --- | --- |
| Puzzle reasoning | Decisions, causal relationships, and new ideas the player must discover. |
| Cooperation | Role handoffs, simultaneous actions, and whether both characters must do meaningful work. |
| Movement and timing | Jumps, gaps, moving platforms, timing windows, waiting, and safe recovery positions. Record waiting separately from active execution. |
| Failure cost | Deaths, manual restarts, lost setup, and how far a failure sends the player back. |
| Discoverability | Controls or causal links missed, hints requested or read, stuck points, and mistaken plans. |

Compare first-time players and experienced players separately. Compare one person controlling two
characters with two people cooperating; simultaneous-input load and communication are different
demands. Note previous room experience and whether players read the hint. An experienced scripted
route establishes that a room can be completed with those inputs; it does not establish novice
understanding or comparative difficulty. Saved best time is not a first-attempt measure.

## Observation sheet

Use an external sheet during a small playtest. Do not infer unobserved values or turn these
observations into a numeric gate.

An attempt starts when the player presses Play or Retry, or automatically respawns after death.
It ends at death, manual restart, clear, or abandonment. Total time to first clear includes all
attempts since the first Play. Record purposeful waits and external pauses separately so
comparisons remain interpretable.

| Player / mode / prior experience | Room ID and position | Attempt | First-attempt time | Total time to clear | Deaths | Manual restarts | Help / hint | Stuck point or misunderstanding | Optional collectibles |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |  |  |  |  |

Mark a room completed only after the player clears it. For an abandoned attempt, record elapsed
time and the point where play stopped. Existing HUD retries combine deaths and manual restarts, so
count them separately by observation when that distinction matters. If a result is unavailable,
write "not observed."

Compare adjacent suspected inversions with fresh players or counterbalanced room order when
possible. Allow purposeful waiting and recovery. Revisit the specific misunderstanding or failure
cost that the observations expose; do not add hazards, tighter jumps, or filler walking merely to
make a room take longer. There is no telemetry feature or permanent numeric difficulty threshold.

## Current curriculum order

This approved order keeps the six chapter bands and their opening breathers. Numbers below are
current campaign positions; stable IDs continue to name the authored rooms and saved achievements.
The opening pair is reordered: old level 2 keeps its "Hold That Door!" title, and old level 1 is
renamed "Glucose Going Up!".

| New position | Title | Stable ID |
| --- | --- | --- |
| 1 | Hold That Door! | `level_02` |
| 2 | Glucose Going Up! | `level_01` |
| 3 | Bridge Over Troubled Slime | `level_04` |
| 4 | Stop Right There! | `level_03` |
| 5 | Narrow Escape | `level_06` |
| 6 | Push Comes to Shove | `level_08` |
| 7 | The Great Cell Shuffle | `level_05` |
| 8 | Double Trouble | `level_07` |
| 9 | Split Decision | `level_11` |
| 10 | Two Tons of Trouble | `level_09` |
| 11 | Elevator Etiquette | `level_10` |
| 12 | Microtubule Shuffle | `level_12` |
| 13 | Gem's Slime Schedule | `level_13` |
| 14 | Bombs Need Personal Space | `level_14` |
| 15 | Special Delivery for Gem | `level_15` |
| 16 | Gem's Slime Factory | `level_16` |
| 17 | Separate Departments | `level_18` |
| 18 | Cana's Upside-Down Commute | `level_17` |
| 19 | Cana's Control Freak-Out | `level_19` |
| 20 | A Very Bad Day for the Tumor | `level_20` |

This ordering is a reasoned curriculum hypothesis, not a claim that every adjacent room is harder.
The directly reported comparison was the old opening pair: level 2 was easier because it was
walking, while level 1 introduced jumps. Comparisons elsewhere remain to be established through
human attempts. A successful browser run and a completed campaign verify progression and
feasibility; neither replaces comparative human evaluation.
