# Campaign difficulty assessment

Expert first-encounter cognitive walkthrough estimates for two human players sharing a keyboard. These are ordinal judgments, not measured player success, enjoyment, time, or calibrated difficulty. A scripted route supports feasibility only. `unknown` means the evidence cannot support an axis.

Puzzle = 100 x (3 reasoning + 2 cooperation + 2 novelty) / 28; platforming = 100 x (3 execution + 2 timing + 2 hazards) / 28, rounded. Any unknown input makes the axis unknown. Clarity, recovery, and control friction remain separate burdens. See [DIFFICULTY_RUBRIC.md](../../../DIFFICULTY_RUBRIC.md).

Automated review candidates below are prompts for inspection, not conclusions.

Campaign SHA-256: `e35a3db7af0347547b2dffbae14af4d70f60de251e3f4ab8b52ef02e93ae4400`. Source SHA-256: `37536853e15a63e16db398864a144a0294b500b05a79877d5743afc6142af12a`.

| Pos | Room | First puzzle | First platforming | Final puzzle | Final platforming | Clarity burden | Recovery cost | Control friction | Confidence |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | [Hold That Door!](difficulty_levels/LEVEL_02.md) | 57 | unknown | 57 | 18 | 2 | 1 | unknown | medium |
| 2 | [Glucose Going Up!](difficulty_levels/LEVEL_01.md) | 68 | unknown | 75 | 39 | 2 | 1 | unknown | medium |
| 3 | [Bridge Over Troubled Slime](difficulty_levels/LEVEL_04.md) | 57 | unknown | 57 | 43 | 2 | 2 | unknown | medium |
| 4 | [Stop Right There!](difficulty_levels/LEVEL_03.md) | 61 | 61 | 57 | 43 | 2 | 2 | unknown | medium |
| 5 | [Narrow Escape](difficulty_levels/LEVEL_06.md) | 50 | unknown | 57 | 29 | 2 | 1 | unknown | medium |
| 6 | [Push Comes to Shove](difficulty_levels/LEVEL_08.md) | 68 | unknown | 75 | 50 | 3 | 2 | unknown | medium |
| 7 | [The Great Cell Shuffle](difficulty_levels/LEVEL_05.md) | 68 | 61 | 68 | 68 | 2 | 3 | unknown | medium |
| 8 | [Double Trouble](difficulty_levels/LEVEL_07.md) | 75 | 61 | 75 | 68 | 3 | 3 | unknown | medium |
| 9 | [Split Decision](difficulty_levels/LEVEL_11.md) | 50 | unknown | 50 | 29 | 2 | 1 | unknown | medium |
| 10 | [Two Tons of Trouble](difficulty_levels/LEVEL_09.md) | 50 | unknown | 50 | 43 | 2 | 2 | unknown | medium |
| 11 | [Elevator Etiquette](difficulty_levels/LEVEL_10.md) | 50 | unknown | 68 | 43 | 3 | 2 | unknown | medium |
| 12 | [Cargo Exchange](difficulty_levels/LEVEL_23.md) | 75 | unknown | 75 | 39 | 2 | 2 | unknown | medium |
| 13 | [Marrow Cargo Shuffle](difficulty_levels/LEVEL_12.md) | 50 | unknown | 50 | 43 | 2 | 2 | unknown | medium |
| 14 | [Across the Divide](difficulty_levels/LEVEL_21.md) | 75 | unknown | 75 | 46 | 2 | 1 | unknown | medium |
| 15 | [Gem's Bubble Break](difficulty_levels/LEVEL_13.md) | 50 | unknown | 50 | 46 | 2 | 1 | unknown | medium |
| 16 | [I've Got You](difficulty_levels/LEVEL_24.md) | 64 | unknown | 64 | 39 | 1 | 1 | unknown | medium |
| 17 | [Your Turn to Carry](difficulty_levels/LEVEL_30.md) | 50 | unknown | 57 | 36 | 2 | 2 | unknown | medium |
| 18 | [Bring Your Own Villain](difficulty_levels/LEVEL_32.md) | 50 | unknown | 68 | 46 | 2 | 1 | unknown | medium |
| 19 | [Bombs Need Personal Space](difficulty_levels/LEVEL_14.md) | 50 | unknown | 61 | 61 | 3 | 2 | unknown | medium |
| 20 | [Bubble Bouncer](difficulty_levels/LEVEL_26.md) | 68 | unknown | 68 | 54 | 2 | 1 | unknown | medium |
| 21 | [Two for One](difficulty_levels/LEVEL_28.md) | 61 | unknown | 61 | 54 | 3 | 1 | unknown | medium |
| 22 | [Special Delivery for Gem](difficulty_levels/LEVEL_15.md) | 50 | unknown | 68 | 43 | 2 | 3 | unknown | medium |
| 23 | [Gem's Liver Lair](difficulty_levels/LEVEL_16.md) | 50 | unknown | 75 | 68 | 3 | 3 | unknown | medium |
| 24 | [A Meeting of Minds](difficulty_levels/LEVEL_18.md) | 50 | unknown | 57 | 61 | 1 | 2 | unknown | medium |
| 25 | [Cana's Upside-Down Commute](difficulty_levels/LEVEL_17.md) | 50 | unknown | 68 | 36 | 2 | 2 | unknown | medium |
| 26 | [Return to Sender](difficulty_levels/LEVEL_25.md) | 75 | unknown | 68 | 32 | 2 | 1 | unknown | medium |
| 27 | [Crossed Paths](difficulty_levels/LEVEL_22.md) | 75 | unknown | 68 | 32 | 3 | 1 | unknown | medium |
| 28 | [Attention, Please!](difficulty_levels/LEVEL_27.md) | 50 | unknown | 50 | 29 | 2 | 1 | unknown | medium |
| 29 | [Knock It Off](difficulty_levels/LEVEL_31.md) | 68 | unknown | 75 | 39 | 3 | 2 | unknown | medium |
| 30 | [Changing Places](difficulty_levels/LEVEL_29.md) | 75 | unknown | 79 | 46 | 2 | 2 | unknown | medium |
| 31 | [Cana's Control Freak-Out](difficulty_levels/LEVEL_19.md) | 75 | unknown | 68 | 46 | 3 | 2 | unknown | medium |
| 32 | [A Very Bad Day for the Tumor](difficulty_levels/LEVEL_20.md) | 64 | unknown | 93 | 54 | 1 | 2 | unknown | medium |

## Automated review candidates

- 6. Push Comes to Shove: one or more reported burdens are 3 or 4; inspect cited causes.
- 7. The Great Cell Shuffle: one or more reported burdens are 3 or 4; inspect cited causes.
- 8. Double Trouble: one or more reported burdens are 3 or 4; inspect cited causes.
- 9. Split Decision: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 11. Elevator Etiquette: one or more reported burdens are 3 or 4; inspect cited causes.
- 13. Marrow Cargo Shuffle: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 15. Gem's Bubble Break: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 19. Bombs Need Personal Space: one or more reported burdens are 3 or 4; inspect cited causes.
- 21. Two for One: one or more reported burdens are 3 or 4; inspect cited causes.
- 22. Special Delivery for Gem: one or more reported burdens are 3 or 4; inspect cited causes.
- 23. Gem's Liver Lair: one or more reported burdens are 3 or 4; inspect cited causes.
- 27. Crossed Paths: one or more reported burdens are 3 or 4; inspect cited causes.
- 29. Knock It Off: one or more reported burdens are 3 or 4; inspect cited causes.
- 31. Cana's Control Freak-Out: one or more reported burdens are 3 or 4; inspect cited causes.

## Evidence gaps

- level_02: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_01: first hazards, first recovery_cost, first control friction, final control friction
- level_04: first timing, first recovery_cost, first control friction, final control friction
- level_03: first recovery_cost, first control friction, final control friction
- level_06: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_08: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_05: first recovery_cost, first control friction, final control friction
- level_07: first recovery_cost, first control friction, final control friction
- level_11: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_09: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_10: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_23: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_12: first hazards, first recovery_cost, first control friction, final control friction
- level_21: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_13: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_24: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_30: first timing, first recovery_cost, first control friction, final control friction
- level_32: first timing, first recovery_cost, first control friction, final control friction
- level_14: first timing, first recovery_cost, first control friction, final control friction
- level_26: first timing, first recovery_cost, first control friction, final control friction
- level_28: first timing, first recovery_cost, first control friction, final control friction
- level_15: first timing, first recovery_cost, first control friction, final control friction
- level_16: first timing, first recovery_cost, first control friction, final control friction
- level_18: first timing, first recovery_cost, first control friction, final control friction
- level_17: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_25: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_22: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_27: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_31: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_29: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_19: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_20: first hazards, first recovery_cost, first control friction, final control friction

