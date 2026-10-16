# Campaign difficulty assessment

Expert first-encounter cognitive walkthrough estimates for two human players sharing a keyboard. These are ordinal judgments, not measured player success, enjoyment, time, or calibrated difficulty. A scripted route supports feasibility only. `unknown` means the evidence cannot support an axis.

Puzzle = 100 x (3 reasoning + 2 cooperation + 2 novelty) / 28; platforming = 100 x (3 execution + 2 timing + 2 hazards) / 28, rounded. Any unknown input makes the axis unknown. Clarity, recovery, and control friction remain separate burdens. See [DIFFICULTY_RUBRIC.md](../../../DIFFICULTY_RUBRIC.md).

Automated review candidates below are prompts for inspection, not conclusions.

Campaign SHA-256: `604c65a961076bc4a7c419f931e3932e40ebf593f7e89400bfe253f29ba67771`. Source SHA-256: `0aebfcdff08cfc3244f231e17a16d4eca18c755a32c9969b63d3a74cfb7080af`.

| Pos | Room | First puzzle | First platforming | Final puzzle | Final platforming | Clarity burden | Recovery cost | Control friction | Confidence |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | [Hold That Door!](difficulty_levels/LEVEL_02.md) | 57 | unknown | 50 | 11 | 1 | 1 | 0 | high |
| 2 | [Glucose Going Up!](difficulty_levels/LEVEL_01.md) | 43 | unknown | 50 | 29 | 2 | 1 | unknown | medium |
| 3 | [Bridge Over Troubled Slime](difficulty_levels/LEVEL_04.md) | 68 | unknown | 57 | 50 | 2 | 2 | unknown | medium |
| 4 | [Stop Right There!](difficulty_levels/LEVEL_03.md) | 61 | 57 | 68 | 57 | 2 | 2 | unknown | medium |
| 5 | [Narrow Escape](difficulty_levels/LEVEL_06.md) | 43 | unknown | 43 | 21 | 2 | 1 | unknown | medium |
| 6 | [Push Comes to Shove](difficulty_levels/LEVEL_08.md) | 68 | unknown | 68 | 50 | 2 | 2 | unknown | medium |
| 7 | [The Great Cell Shuffle](difficulty_levels/LEVEL_05.md) | 68 | 75 | 68 | 68 | 2 | 3 | unknown | medium |
| 8 | [Double Trouble](difficulty_levels/LEVEL_07.md) | 79 | 82 | 86 | 82 | 3 | 3 | unknown | medium |
| 9 | [Split Decision](difficulty_levels/LEVEL_11.md) | 68 | 36 | 68 | 29 | 2 | 1 | unknown | medium |
| 10 | [Two Tons of Trouble](difficulty_levels/LEVEL_09.md) | 68 | unknown | 75 | 68 | 2 | 2 | unknown | medium |
| 11 | [Elevator Etiquette](difficulty_levels/LEVEL_10.md) | 68 | 75 | 68 | 68 | 2 | 2 | unknown | medium |
| 12 | [Cargo Exchange](difficulty_levels/LEVEL_23.md) | 100 | 57 | 100 | 39 | 4 | 2 | 0 | medium |
| 13 | [Marrow Cargo Shuffle](difficulty_levels/LEVEL_12.md) | 68 | 75 | 68 | 61 | 2 | 3 | unknown | medium |
| 14 | [Across the Divide](difficulty_levels/LEVEL_21.md) | 86 | unknown | 93 | 29 | 3 | 2 | unknown | medium |
| 15 | [Gem's Bubble Break](difficulty_levels/LEVEL_13.md) | 50 | unknown | 57 | 36 | 2 | 1 | unknown | medium |
| 16 | [I've Got You](difficulty_levels/LEVEL_24.md) | 75 | unknown | 82 | 46 | 3 | 1 | 0 | medium |
| 17 | [Your Turn to Carry](difficulty_levels/LEVEL_30.md) | 68 | unknown | 57 | 50 | 1 | 2 | 0 | medium |
| 18 | [Bombs Need Personal Space](difficulty_levels/LEVEL_14.md) | 50 | 50 | 43 | 43 | 2 | 2 | unknown | medium |
| 19 | [Bubble Bouncer](difficulty_levels/LEVEL_26.md) | 68 | 36 | 50 | 36 | 2 | 1 | unknown | medium |
| 20 | [Two for One](difficulty_levels/LEVEL_28.md) | 50 | 46 | 50 | 54 | 2 | 1 | unknown | medium |
| 21 | [Special Delivery for Gem](difficulty_levels/LEVEL_15.md) | 68 | unknown | 61 | 43 | 2 | 2 | unknown | medium |
| 22 | [Gem's Liver Lair](difficulty_levels/LEVEL_16.md) | 75 | 68 | 68 | 68 | 2 | 3 | unknown | medium |
| 23 | [A Meeting of Minds](difficulty_levels/LEVEL_18.md) | 75 | 61 | 68 | 61 | 2 | 2 | 0 | medium |
| 24 | [Cana's Upside-Down Commute](difficulty_levels/LEVEL_17.md) | 68 | 68 | 61 | 68 | 2 | 2 | unknown | medium |
| 25 | [Return to Sender](difficulty_levels/LEVEL_25.md) | 93 | unknown | 93 | 46 | 3 | 2 | unknown | medium |
| 26 | [Crossed Paths](difficulty_levels/LEVEL_22.md) | 93 | unknown | 93 | 46 | 3 | 2 | unknown | medium |
| 27 | [Attention, Please!](difficulty_levels/LEVEL_27.md) | 68 | 46 | 61 | 46 | 3 | 1 | unknown | medium |
| 28 | [Knock It Off](difficulty_levels/LEVEL_31.md) | 68 | 36 | 61 | 46 | 3 | 1 | 0 | medium |
| 29 | [Changing Places](difficulty_levels/LEVEL_29.md) | 86 | 68 | 86 | 61 | 2 | 2 | 0 | medium |
| 30 | [Cana's Control Freak-Out](difficulty_levels/LEVEL_19.md) | 86 | 68 | 61 | 68 | 2 | 3 | unknown | medium |
| 31 | [A Very Bad Day for the Tumor](difficulty_levels/LEVEL_20.md) | 93 | 75 | 86 | 75 | 2 | 3 | unknown | medium |

## Automated review candidates

- 5. Narrow Escape: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 7. The Great Cell Shuffle: one or more reported burdens are 3 or 4; inspect cited causes.
- 8. Double Trouble: one or more reported burdens are 3 or 4; inspect cited causes.
- 12. Cargo Exchange: one or more reported burdens are 3 or 4; inspect cited causes.
- 13. Marrow Cargo Shuffle: one or more reported burdens are 3 or 4; inspect cited causes.
- 13. Marrow Cargo Shuffle: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 14. Across the Divide: one or more reported burdens are 3 or 4; inspect cited causes.
- 15. Gem's Bubble Break: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 16. I've Got You: one or more reported burdens are 3 or 4; inspect cited causes.
- 17. Your Turn to Carry: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 22. Gem's Liver Lair: one or more reported burdens are 3 or 4; inspect cited causes.
- 25. Return to Sender: one or more reported burdens are 3 or 4; inspect cited causes.
- 26. Crossed Paths: one or more reported burdens are 3 or 4; inspect cited causes.
- 27. Attention, Please!: one or more reported burdens are 3 or 4; inspect cited causes.
- 27. Attention, Please!: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 28. Knock It Off: one or more reported burdens are 3 or 4; inspect cited causes.
- 30. Cana's Control Freak-Out: one or more reported burdens are 3 or 4; inspect cited causes.
- 30. Cana's Control Freak-Out: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 31. A Very Bad Day for the Tumor: one or more reported burdens are 3 or 4; inspect cited causes.

## Evidence gaps

- level_02: first timing, first hazards, first recovery_cost, first control friction
- level_01: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_04: first timing, first recovery_cost, first control friction, final control friction
- level_03: first recovery_cost, first control friction, final control friction
- level_06: first timing, first recovery_cost, first control friction, final control friction
- level_08: first timing, first recovery_cost, first control friction, final control friction
- level_05: first recovery_cost, first control friction, final control friction
- level_07: first recovery_cost, first control friction, final control friction
- level_11: first recovery_cost, first control friction, final control friction
- level_09: first timing, first recovery_cost, first control friction, final control friction
- level_10: first recovery_cost, first control friction, final control friction
- level_23: first recovery_cost, first control friction
- level_12: first recovery_cost, first control friction, final control friction
- level_21: first timing, first recovery_cost, first control friction, final control friction
- level_13: first timing, first recovery_cost, first control friction, final control friction
- level_24: first timing, first recovery_cost, first control friction
- level_30: first timing, first recovery_cost, first control friction
- level_14: first recovery_cost, first control friction, final control friction
- level_26: first recovery_cost, first control friction, final control friction
- level_28: first recovery_cost, first control friction, final control friction
- level_15: first timing, first recovery_cost, first control friction, final control friction
- level_16: first recovery_cost, first control friction, final control friction
- level_18: first recovery_cost, first control friction
- level_17: first recovery_cost, first control friction, final control friction
- level_25: first timing, first recovery_cost, first control friction, final control friction
- level_22: first timing, first recovery_cost, first control friction, final control friction
- level_27: first recovery_cost, first control friction, final control friction
- level_31: first recovery_cost, first control friction
- level_29: first recovery_cost, first control friction
- level_19: first recovery_cost, first control friction, final control friction
- level_20: first recovery_cost, first control friction, final control friction

