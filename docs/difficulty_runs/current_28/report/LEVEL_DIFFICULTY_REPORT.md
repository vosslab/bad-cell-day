# Campaign difficulty assessment

Expert first-encounter cognitive walkthrough estimates for two human players sharing a keyboard. These are ordinal judgments, not measured player success, enjoyment, time, or calibrated difficulty. A scripted route supports feasibility only. `unknown` means the evidence cannot support an axis.

Puzzle = 100 x (3 reasoning + 2 cooperation + 2 novelty) / 28; platforming = 100 x (3 execution + 2 timing + 2 hazards) / 28, rounded. Any unknown input makes the axis unknown. Clarity, recovery, and control friction remain separate burdens. See [DIFFICULTY_RUBRIC.md](../../../DIFFICULTY_RUBRIC.md).

Automated review candidates below are prompts for inspection, not conclusions.

Campaign SHA-256: `9e7763137d4fd9f2320238e5eaa930f1ed460bb98851e1fc063f2736093ac6da`. Source SHA-256: `450dc20a705cc5b049660d34d6e11eb9d7ce258960523b047f9bf7ac68e0ed2d`.

| Pos | Room | First puzzle | First platforming | Final puzzle | Final platforming | Clarity burden | Recovery cost | Control friction | Confidence |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | [Hold That Door!](difficulty_levels/LEVEL_02.md) | 50 | unknown | 50 | 18 | 2 | 1 | unknown | medium |
| 2 | [Glucose Going Up!](difficulty_levels/LEVEL_01.md) | 50 | 36 | 50 | 36 | 2 | 1 | unknown | medium |
| 3 | [Bridge Over Troubled Slime](difficulty_levels/LEVEL_04.md) | 50 | unknown | 50 | 43 | 2 | 2 | unknown | medium |
| 4 | [Stop Right There!](difficulty_levels/LEVEL_03.md) | 50 | 50 | 50 | 50 | 2 | 2 | unknown | medium |
| 5 | [Narrow Escape](difficulty_levels/LEVEL_06.md) | 43 | unknown | 43 | 29 | 2 | 1 | unknown | medium |
| 6 | [Push Comes to Shove](difficulty_levels/LEVEL_08.md) | 68 | unknown | 61 | 43 | 2 | 2 | unknown | medium |
| 7 | [The Great Cell Shuffle](difficulty_levels/LEVEL_05.md) | 68 | 50 | 68 | 50 | 2 | 2 | unknown | medium |
| 8 | [Double Trouble](difficulty_levels/LEVEL_07.md) | unknown | 50 | 61 | 43 | 2 | 2 | unknown | medium |
| 9 | [Split Decision](difficulty_levels/LEVEL_11.md) | 68 | unknown | 50 | 29 | 2 | 1 | unknown | medium |
| 10 | [Two Tons of Trouble](difficulty_levels/LEVEL_09.md) | 68 | unknown | 68 | 43 | 3 | 2 | unknown | medium |
| 11 | [Elevator Etiquette](difficulty_levels/LEVEL_10.md) | 68 | unknown | 68 | 50 | 2 | 2 | unknown | medium |
| 12 | [Cargo Exchange](difficulty_levels/LEVEL_23.md) | 93 | unknown | 93 | 29 | 3 | 2 | unknown | medium |
| 13 | [Marrow Cargo Shuffle](difficulty_levels/LEVEL_12.md) | 68 | unknown | 50 | 43 | 2 | 2 | unknown | medium |
| 14 | [Across the Divide](difficulty_levels/LEVEL_21.md) | 75 | unknown | 68 | 36 | 3 | 1 | unknown | medium |
| 15 | [Gem's Bubble Break](difficulty_levels/LEVEL_13.md) | 50 | unknown | 50 | 36 | 3 | 1 | unknown | medium |
| 16 | [I've Got You](difficulty_levels/LEVEL_24.md) | 68 | unknown | 68 | 36 | 2 | 1 | unknown | medium |
| 17 | [Bombs Need Personal Space](difficulty_levels/LEVEL_14.md) | 50 | unknown | 50 | 50 | 2 | 2 | unknown | medium |
| 18 | [Bubble Bouncer](difficulty_levels/LEVEL_26.md) | 68 | unknown | 43 | 36 | 3 | 1 | unknown | medium |
| 19 | [Two for One](difficulty_levels/LEVEL_28.md) | unknown | unknown | 61 | 54 | 3 | 2 | unknown | medium |
| 20 | [Special Delivery for Gem](difficulty_levels/LEVEL_15.md) | 50 | unknown | 50 | 36 | 2 | 2 | unknown | medium |
| 21 | [Gem's Liver Lair](difficulty_levels/LEVEL_16.md) | 50 | unknown | 50 | 43 | 3 | 2 | unknown | medium |
| 22 | [A Meeting of Minds](difficulty_levels/LEVEL_18.md) | 68 | unknown | 68 | 50 | 2 | 2 | unknown | medium |
| 23 | [Cana's Upside-Down Commute](difficulty_levels/LEVEL_17.md) | 68 | 68 | 50 | 68 | 2 | 2 | unknown | medium |
| 24 | [Return to Sender](difficulty_levels/LEVEL_25.md) | 68 | unknown | 68 | 36 | 3 | 2 | unknown | medium |
| 25 | [Crossed Paths](difficulty_levels/LEVEL_22.md) | 68 | unknown | 75 | 29 | 3 | 1 | unknown | medium |
| 26 | [Attention, Please!](difficulty_levels/LEVEL_27.md) | 50 | 36 | 61 | 46 | 3 | 2 | unknown | medium |
| 27 | [Cana's Control Freak-Out](difficulty_levels/LEVEL_19.md) | 68 | 68 | 61 | 68 | 2 | 2 | unknown | medium |
| 28 | [A Very Bad Day for the Tumor](difficulty_levels/LEVEL_20.md) | 68 | 61 | 68 | 68 | 2 | 3 | unknown | medium |

## Automated review candidates

- 10. Two Tons of Trouble: one or more reported burdens are 3 or 4; inspect cited causes.
- 12. Cargo Exchange: one or more reported burdens are 3 or 4; inspect cited causes.
- 13. Marrow Cargo Shuffle: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 14. Across the Divide: one or more reported burdens are 3 or 4; inspect cited causes.
- 15. Gem's Bubble Break: one or more reported burdens are 3 or 4; inspect cited causes.
- 18. Bubble Bouncer: one or more reported burdens are 3 or 4; inspect cited causes.
- 19. Two for One: one or more reported burdens are 3 or 4; inspect cited causes.
- 21. Gem's Liver Lair: one or more reported burdens are 3 or 4; inspect cited causes.
- 24. Return to Sender: one or more reported burdens are 3 or 4; inspect cited causes.
- 25. Crossed Paths: one or more reported burdens are 3 or 4; inspect cited causes.
- 26. Attention, Please!: one or more reported burdens are 3 or 4; inspect cited causes.
- 28. A Very Bad Day for the Tumor: one or more reported burdens are 3 or 4; inspect cited causes.

## Evidence gaps

- level_02: first timing, first recovery_cost, first control friction, final control friction
- level_01: first recovery_cost, first control friction, final control friction
- level_04: first timing, first recovery_cost, first control friction, final control friction
- level_03: first recovery_cost, first control friction, final control friction
- level_06: first timing, first recovery_cost, first control friction, final control friction
- level_08: first timing, first recovery_cost, first control friction, final control friction
- level_05: first recovery_cost, first control friction, final control friction
- level_07: first reasoning, first novelty, first recovery_cost, first control friction, final control friction
- level_11: first timing, first recovery_cost, first control friction, final control friction
- level_09: first timing, first recovery_cost, first control friction, final control friction
- level_10: first timing, first recovery_cost, first control friction, final control friction
- level_23: first timing, first recovery_cost, first control friction, final control friction
- level_12: first timing, first recovery_cost, first control friction, final control friction
- level_21: first timing, first recovery_cost, first control friction, final control friction
- level_13: first timing, first recovery_cost, first control friction, final control friction
- level_24: first timing, first recovery_cost, first control friction, final control friction
- level_14: first execution, first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_26: first timing, first recovery_cost, first control friction, final control friction
- level_28: first cooperation, first timing, first recovery_cost, first control friction, final control friction
- level_15: first timing, first recovery_cost, first control friction, final control friction
- level_16: first timing, first recovery_cost, first control friction, final control friction
- level_18: first timing, first recovery_cost, first control friction, final control friction
- level_17: first recovery_cost, first control friction, final control friction
- level_25: first timing, first recovery_cost, first control friction, final control friction
- level_22: first timing, first recovery_cost, first control friction, final control friction
- level_27: first recovery_cost, first control friction, final control friction
- level_19: first recovery_cost, first control friction, final control friction
- level_20: first recovery_cost, first control friction, final control friction

