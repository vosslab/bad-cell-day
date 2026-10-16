# Campaign difficulty assessment

Expert first-encounter cognitive walkthrough estimates for two human players sharing a keyboard. These are ordinal judgments, not measured player success, enjoyment, time, or calibrated difficulty. A scripted route supports feasibility only. `unknown` means the evidence cannot support an axis.

Puzzle = 100 x (3 reasoning + 2 cooperation + 2 novelty) / 28; platforming = 100 x (3 execution + 2 timing + 2 hazards) / 28, rounded. Any unknown input makes the axis unknown. Clarity, recovery, and control friction remain separate burdens. See [DIFFICULTY_RUBRIC.md](../../../DIFFICULTY_RUBRIC.md).

Automated review candidates below are prompts for inspection, not conclusions.

Campaign SHA-256: `28308deee62f83e1b98e75216a45c5aba71f976b587f16cc2c222f8b581d9184`. Source SHA-256: `46a64cffdaf038a9c49aca15f5e75f7cb6f3c8ed5408831e5facfd4b12bdca2f`.

| Pos | Room | First puzzle | First platforming | Final puzzle | Final platforming | Clarity burden | Recovery cost | Control friction | Confidence |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | [Hold That Door!](difficulty_levels/LEVEL_02.md) | 57 | unknown | 57 | 18 | 2 | 1 | 0 | medium |
| 2 | [Glucose Going Up!](difficulty_levels/LEVEL_01.md) | unknown | unknown | 75 | 46 | 3 | 1 | 0 | medium |
| 3 | [Bridge Over Troubled Slime](difficulty_levels/LEVEL_04.md) | 68 | unknown | 68 | 50 | 2 | 2 | 0 | medium |
| 4 | [Stop Right There!](difficulty_levels/LEVEL_03.md) | 68 | 57 | 68 | 68 | 3 | 3 | 0 | medium |
| 5 | [Narrow Escape](difficulty_levels/LEVEL_06.md) | 43 | unknown | 43 | 29 | 2 | 1 | 0 | medium |
| 6 | [Push Comes to Shove](difficulty_levels/LEVEL_08.md) | 86 | unknown | 79 | 50 | 3 | 3 | 0 | medium |
| 7 | [The Great Cell Shuffle](difficulty_levels/LEVEL_05.md) | 61 | 50 | 68 | 50 | 2 | 2 | unknown | medium |
| 8 | [Double Trouble](difficulty_levels/LEVEL_07.md) | 68 | 75 | 75 | 68 | 2 | 2 | unknown | medium |
| 9 | [Split Decision](difficulty_levels/LEVEL_11.md) | 75 | unknown | 57 | 29 | 2 | 1 | unknown | medium |
| 10 | [Two Tons of Trouble](difficulty_levels/LEVEL_09.md) | 75 | unknown | 75 | 43 | 3 | 2 | unknown | medium |
| 11 | [Elevator Etiquette](difficulty_levels/LEVEL_10.md) | 61 | 68 | 57 | 68 | 2 | 2 | unknown | medium |
| 12 | [Cargo Exchange](difficulty_levels/LEVEL_23.md) | 100 | unknown | 93 | 39 | 3 | 2 | unknown | medium |
| 13 | [Marrow Cargo Shuffle](difficulty_levels/LEVEL_12.md) | 61 | 61 | 61 | 46 | 2 | 2 | 0 | medium |
| 14 | [Across the Divide](difficulty_levels/LEVEL_21.md) | 68 | unknown | 86 | 39 | 2 | 1 | 0 | medium |
| 15 | [Gem's Bubble Break](difficulty_levels/LEVEL_13.md) | 43 | unknown | 36 | 39 | 2 | 1 | 0 | medium |
| 16 | [I've Got You](difficulty_levels/LEVEL_24.md) | 75 | unknown | 75 | 39 | 2 | 1 | 0 | medium |
| 17 | [Bombs Need Personal Space](difficulty_levels/LEVEL_14.md) | 50 | 50 | 50 | 61 | 2 | 2 | 0 | medium |
| 18 | [Bubble Bouncer](difficulty_levels/LEVEL_26.md) | 68 | 36 | 68 | 36 | 3 | 1 | 0 | medium |
| 19 | [Two for One](difficulty_levels/LEVEL_28.md) | 61 | unknown | 61 | 46 | 3 | 2 | 0 | medium |
| 20 | [Special Delivery for Gem](difficulty_levels/LEVEL_15.md) | 68 | unknown | 68 | 36 | 2 | 2 | 0 | medium |
| 21 | [Gem's Liver Lair](difficulty_levels/LEVEL_16.md) | 68 | 68 | 68 | 68 | 3 | 3 | 0 | medium |
| 22 | [A Meeting of Minds](difficulty_levels/LEVEL_18.md) | 68 | 50 | 68 | 61 | 3 | 2 | 0 | high |
| 23 | [Cana's Upside-Down Commute](difficulty_levels/LEVEL_17.md) | 68 | 68 | 68 | 68 | 2 | 3 | 0 | medium |
| 24 | [Return to Sender](difficulty_levels/LEVEL_25.md) | 86 | unknown | 79 | 46 | 3 | 2 | 0 | medium |
| 25 | [Crossed Paths](difficulty_levels/LEVEL_22.md) | 68 | unknown | 68 | 36 | 2 | 1 | unknown | medium |
| 26 | [Attention, Please!](difficulty_levels/LEVEL_27.md) | 50 | unknown | 61 | 46 | 2 | 1 | unknown | medium |
| 27 | [Changing Places](difficulty_levels/LEVEL_29.md) | 75 | 61 | 86 | 68 | 3 | 3 | unknown | medium |
| 28 | [Cana's Control Freak-Out](difficulty_levels/LEVEL_19.md) | 68 | 68 | 68 | 68 | 2 | 3 | unknown | medium |
| 29 | [A Very Bad Day for the Tumor](difficulty_levels/LEVEL_20.md) | 75 | 75 | 75 | 75 | 2 | 3 | unknown | medium |

## Automated review candidates

- 2. Glucose Going Up!: one or more reported burdens are 3 or 4; inspect cited causes.
- 4. Stop Right There!: one or more reported burdens are 3 or 4; inspect cited causes.
- 5. Narrow Escape: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 6. Push Comes to Shove: one or more reported burdens are 3 or 4; inspect cited causes.
- 10. Two Tons of Trouble: one or more reported burdens are 3 or 4; inspect cited causes.
- 12. Cargo Exchange: one or more reported burdens are 3 or 4; inspect cited causes.
- 13. Marrow Cargo Shuffle: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 15. Gem's Bubble Break: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 17. Bombs Need Personal Space: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 18. Bubble Bouncer: one or more reported burdens are 3 or 4; inspect cited causes.
- 19. Two for One: one or more reported burdens are 3 or 4; inspect cited causes.
- 21. Gem's Liver Lair: one or more reported burdens are 3 or 4; inspect cited causes.
- 22. A Meeting of Minds: one or more reported burdens are 3 or 4; inspect cited causes.
- 23. Cana's Upside-Down Commute: one or more reported burdens are 3 or 4; inspect cited causes.
- 24. Return to Sender: one or more reported burdens are 3 or 4; inspect cited causes.
- 27. Changing Places: one or more reported burdens are 3 or 4; inspect cited causes.
- 28. Cana's Control Freak-Out: one or more reported burdens are 3 or 4; inspect cited causes.
- 29. A Very Bad Day for the Tumor: one or more reported burdens are 3 or 4; inspect cited causes.

## Evidence gaps

- level_02: first execution, first timing, first hazards, first recovery_cost, first control friction
- level_01: first cooperation, first timing, first hazards, first recovery_cost, first control friction
- level_04: first timing, first recovery_cost, first control friction
- level_03: first recovery_cost, first control friction
- level_06: first timing, first hazards, first recovery_cost, first control friction
- level_08: first timing, first recovery_cost, first control friction
- level_05: first recovery_cost, first control friction, final control friction
- level_07: first recovery_cost, first control friction, final control friction
- level_11: first hazards, first recovery_cost, first control friction, final control friction
- level_09: first timing, first recovery_cost, first control friction, final control friction
- level_10: first recovery_cost, first control friction, final control friction
- level_23: first timing, first recovery_cost, first control friction, final control friction
- level_12: first recovery_cost, first control friction
- level_21: first timing, first hazards, first recovery_cost, first control friction
- level_13: first hazards, first recovery_cost, first control friction
- level_24: first hazards, first recovery_cost, first control friction
- level_14: first recovery_cost, first control friction
- level_26: first recovery_cost, first control friction
- level_28: first hazards, first recovery_cost, first control friction
- level_15: first timing, first recovery_cost, first control friction
- level_16: first recovery_cost, first control friction
- level_18: first recovery_cost, first control friction
- level_17: first recovery_cost, first control friction
- level_25: first timing, first hazards, first recovery_cost, first control friction
- level_22: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_27: first hazards, first recovery_cost, first control friction, final control friction
- level_29: first recovery_cost, first control friction, final control friction
- level_19: first recovery_cost, first control friction, final control friction
- level_20: first recovery_cost, first control friction, final control friction

