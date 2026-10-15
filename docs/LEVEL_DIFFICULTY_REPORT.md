# Campaign difficulty assessment

Publishing note (2026-10-15): observation PNGs are now ignored local capture artifacts; their
citations use repository-relative code paths with retained hashes and locators. This presentation
update preserves the historical pre-anatomy scores and locks; room `level_24` remains unscored.
The 26 frozen prior outputs are retained at
`test-results/difficulty_png_reference_policy/previous_outputs/`. Their manifest SHA-256 is
`f19429c8cbb637757061c94667e8d289515253807e2afd13b59240519985931f`, matching the historical
`test-results/difficulty_assessment/final_render/outputs.sha256`; that manifest verifies those
frozen copies, not the canonical Markdown after this publishing update.

Expert first-encounter cognitive walkthrough estimates for two human players sharing a keyboard. These are ordinal judgments, not measured player success, enjoyment, time, or calibrated difficulty. A scripted route supports feasibility only. `unknown` means the evidence cannot support an axis.

Puzzle = 100 x (3 reasoning + 2 cooperation + 2 novelty) / 28; platforming = 100 x (3 execution + 2 timing + 2 hazards) / 28, rounded. Any unknown input makes the axis unknown. Clarity, recovery, and control friction remain separate burdens. See [DIFFICULTY_RUBRIC.md](DIFFICULTY_RUBRIC.md).

Expert synthesis and ranked recommendations: [DIFFICULTY_FINDINGS.md](DIFFICULTY_FINDINGS.md). Automated review candidates below are prompts for inspection, not conclusions.

Campaign SHA-256: `7bc88b12eb9f7fc50f44b90f1c72a0b1629f30154711401cf9512526b8f54d69`. Source SHA-256: `f9091fe3478efeff506256fdfcb36cb5c642c1c437f7e121b4ff20a1379faf6f`.

| Pos | Room | First puzzle | First platforming | Final puzzle | Final platforming | Clarity burden | Recovery cost | Control friction | Confidence |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 1 | [Hold That Door!](difficulty_levels/LEVEL_02.md) | 50 | unknown | 57 | 7 | 2 | 1 | unknown | medium |
| 2 | [Glucose Going Up!](difficulty_levels/LEVEL_01.md) | 50 | unknown | 50 | 29 | 2 | 1 | unknown | medium |
| 3 | [Bridge Over Troubled Slime](difficulty_levels/LEVEL_04.md) | 57 | unknown | 57 | 43 | 2 | 2 | unknown | medium |
| 4 | [Stop Right There!](difficulty_levels/LEVEL_03.md) | 68 | 50 | 68 | 50 | 2 | 2 | unknown | medium |
| 5 | [Narrow Escape](difficulty_levels/LEVEL_06.md) | 43 | unknown | 43 | 29 | 2 | 1 | unknown | medium |
| 6 | [Push Comes to Shove](difficulty_levels/LEVEL_08.md) | 68 | unknown | 68 | 43 | 3 | 2 | unknown | medium |
| 7 | [The Great Cell Shuffle](difficulty_levels/LEVEL_05.md) | 68 | 68 | 75 | 68 | 2 | 3 | unknown | medium |
| 8 | [Double Trouble](difficulty_levels/LEVEL_07.md) | 68 | 68 | 75 | 68 | 3 | 3 | unknown | medium |
| 9 | [Split Decision](difficulty_levels/LEVEL_11.md) | 68 | unknown | 68 | 29 | 2 | 1 | unknown | medium |
| 10 | [Two Tons of Trouble](difficulty_levels/LEVEL_09.md) | 68 | unknown | 68 | 43 | 2 | 3 | unknown | medium |
| 11 | [Elevator Etiquette](difficulty_levels/LEVEL_10.md) | 68 | 61 | 68 | 61 | 2 | 3 | unknown | medium |
| 12 | [Cargo Exchange](difficulty_levels/LEVEL_23.md) | 93 | unknown | 100 | 32 | 3 | 2 | unknown | medium |
| 13 | [Microtubule Shuffle](difficulty_levels/LEVEL_12.md) | 68 | 68 | 68 | 46 | 2 | 3 | unknown | medium |
| 14 | [Across the Divide](difficulty_levels/LEVEL_21.md) | 93 | unknown | 93 | 29 | 2 | 1 | unknown | medium |
| 15 | [Gem's Bubble Break](difficulty_levels/LEVEL_13.md) | 68 | unknown | 68 | 29 | 2 | 2 | unknown | medium |
| 16 | [Bombs Need Personal Space](difficulty_levels/LEVEL_14.md) | 68 | 50 | 50 | 50 | 2 | 2 | unknown | medium |
| 17 | [Special Delivery for Gem](difficulty_levels/LEVEL_15.md) | 93 | unknown | 68 | 36 | 2 | 2 | unknown | medium |
| 18 | [Gem's Slime Factory](difficulty_levels/LEVEL_16.md) | 86 | unknown | 68 | 54 | 2 | 3 | unknown | medium |
| 19 | [Separate Departments](difficulty_levels/LEVEL_18.md) | 86 | unknown | 61 | 43 | 2 | 2 | unknown | medium |
| 20 | [Cana's Upside-Down Commute](difficulty_levels/LEVEL_17.md) | 79 | unknown | 68 | 54 | 3 | 2 | unknown | medium |
| 21 | [Crossed Paths](difficulty_levels/LEVEL_22.md) | 93 | unknown | 93 | 46 | 3 | 2 | unknown | medium |
| 22 | [Cana's Control Freak-Out](difficulty_levels/LEVEL_19.md) | 86 | unknown | 68 | 61 | 2 | 3 | unknown | medium |
| 23 | [A Very Bad Day for the Tumor](difficulty_levels/LEVEL_20.md) | 93 | 68 | 93 | 79 | 2 | 3 | unknown | medium |

## Automated review candidates

- 5. Narrow Escape: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 6. Push Comes to Shove: one or more reported burdens are 3 or 4; inspect cited causes.
- 7. The Great Cell Shuffle: one or more reported burdens are 3 or 4; inspect cited causes.
- 8. Double Trouble: one or more reported burdens are 3 or 4; inspect cited causes.
- 10. Two Tons of Trouble: one or more reported burdens are 3 or 4; inspect cited causes.
- 11. Elevator Etiquette: one or more reported burdens are 3 or 4; inspect cited causes.
- 12. Cargo Exchange: one or more reported burdens are 3 or 4; inspect cited causes.
- 13. Microtubule Shuffle: one or more reported burdens are 3 or 4; inspect cited causes.
- 13. Microtubule Shuffle: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 15. Gem's Bubble Break: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 18. Gem's Slime Factory: one or more reported burdens are 3 or 4; inspect cited causes.
- 20. Cana's Upside-Down Commute: one or more reported burdens are 3 or 4; inspect cited causes.
- 21. Crossed Paths: one or more reported burdens are 3 or 4; inspect cited causes.
- 22. Cana's Control Freak-Out: one or more reported burdens are 3 or 4; inspect cited causes.
- 22. Cana's Control Freak-Out: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.
- 23. A Very Bad Day for the Tumor: one or more reported burdens are 3 or 4; inspect cited causes.

## Evidence gaps

- level_02: first timing, first recovery_cost, first control friction, final control friction
- level_01: first timing, first control friction, final control friction
- level_04: first timing, first recovery_cost, first control friction, final control friction
- level_03: first recovery_cost, first control friction, final control friction
- level_06: first timing, first recovery_cost, first control friction, final control friction
- level_08: first timing, first recovery_cost, first control friction, final control friction
- level_05: first recovery_cost, first control friction, final control friction
- level_07: first recovery_cost, first control friction, final control friction
- level_11: first hazards, first recovery_cost, first control friction, final control friction
- level_09: first timing, first recovery_cost, first control friction, final control friction
- level_10: first recovery_cost, first control friction, final control friction
- level_23: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_12: first recovery_cost, first control friction, final control friction
- level_21: first timing, first hazards, first recovery_cost, first control friction, final control friction
- level_13: first timing, first recovery_cost, first control friction, final control friction
- level_14: first recovery_cost, first control friction, final control friction
- level_15: first timing, first recovery_cost, first control friction, final control friction
- level_16: first timing, first recovery_cost, first control friction, final control friction
- level_18: first timing, first recovery_cost, first control friction, final control friction
- level_17: first timing, first recovery_cost, first control friction, final control friction
- level_22: first timing, first recovery_cost, first control friction, final control friction
- level_19: first timing, first recovery_cost, first control friction, final control friction
- level_20: first recovery_cost, first control friction, final control friction

