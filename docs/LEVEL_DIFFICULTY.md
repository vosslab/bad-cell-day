# Evaluating level difficulty

Use this guide when comparing campaign rooms or reviewing a proposed order. Difficulty is a
profile, not a single score. Describe what the player must understand and do, and keep evidence
from source inspection, scripted routes, and human play distinct. The source-based 20-room
baseline audit is [difficulty_audit.md](active_plans/audits/difficulty_audit.md); the
progression implementation record is [difficulty_ledger.md](active_plans/reports/difficulty_ledger.md).

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

This current source order keeps the six chapter bands and their opening breathers. Numbers below are
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
| 12 | Cargo Exchange | `level_23` |
| 13 | Microtubule Shuffle | `level_12` |
| 14 | Across the Divide | `level_21` |
| 15 | Gem's Bubble Break | `level_13` |
| 16 | Bombs Need Personal Space | `level_14` |
| 17 | Special Delivery for Gem | `level_15` |
| 18 | Gem's Slime Factory | `level_16` |
| 19 | Separate Departments | `level_18` |
| 20 | Cana's Upside-Down Commute | `level_17` |
| 21 | Crossed Paths | `level_22` |
| 22 | Cana's Control Freak-Out | `level_19` |
| 23 | A Very Bad Day for the Tumor | `level_20` |

Cargo Exchange follows the lane, weight, and together-boarding lessons, then combines reciprocal
two-trip cargo delivery with passenger-dependent motion. Both heroes must ride for either lift to
move; jumping or dismounting pauses the pair. This ordering is a reasoned curriculum hypothesis,
not a claim that every adjacent room is harder.
The directly reported comparison was the old opening pair: level 2 was easier because it was
walking, while level 1 introduced jumps. Comparisons elsewhere remain to be established through
human attempts. A successful browser run and a completed campaign verify progression and
feasibility; neither replaces comparative human evaluation.

## Interference learning sequence

Position 14 (`level_13`) introduces Pac-controlled bubbles and Isp's float/steer action
above a continuous safe floor. RESCUE suppresses the attack and opens Pac's stairs.
Position 19 (`level_17`) transfers that cooperation to a stopped lift: Isp's rescue
powers the carrier for Pac, followed by the existing high exit route. Position 20
(`level_22`) is a new crossed-route relay: Isp and Pac alternately unlock each other's path,
with a returning boomerang crossing and Gem's wall in the sequence. Position 21
(`level_19`) uses Cana's sweeping outbound and returning boomerang, temporary STEADY
suppression, a lasting RESCUE latch, and the paired boss targets.

Position 14 (`level_21`) introduces the split-floor relay: Isp opens ROUTE, then Pac holds LIFT
while Isp rides to LINK and frees Pac. Pac then opens Isp's route home. Position 23 (`level_20`)
now concludes the campaign. Its existing two TARGET pads still require both characters together
for two seconds; bridge control passes to Isp's high target so Pac can reach the lower target after
Isp completes that handoff.

The safe introduction and the later hazardous application serve different purposes.
A return hit or a missed dodge in 19 can still kill a character over a gap. That is an
intentional risk to assess, not automatically a defect. Scripted dodges, recovery,
and completion demonstrate available responses; observe people before claiming the
warning, return path, or failure cost feels fair. Ask what players expected, what they
noticed before a hit, and what they would try next. Record actual answers and attempts
using the sheet above. Book-informed reasoning is in
[game_design_reading.md](active_plans/reports/game_design_reading.md).
