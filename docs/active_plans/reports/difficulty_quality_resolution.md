# Difficulty evidence quality resolution

## Scope and decision

The final source-informed records for rooms 13-20 and 22 used `observed_feedback`
for effects inferred from source definitions. Their cited campaign result contains the
completed room state, not an intermediate trace of each route step. All 36 mandatory
steps in these nine records now set `observed_feedback` to `null`. Expected effects remain
in `expected_feedback`; source citations support the mechanics, and the completed state
supports scripted route feasibility only. The revised comparison language identifies
source confirmation of first-pass proposals without claiming that a player witnessed
the predicted feedback.

Room 22's hazard score changed from 1 to 0. Pac's mandatory exposed trip follows
`lower_corridor`, a continuous floor across the room; the authored hazard array is empty.
The boomerang can temporarily SHOVE Pac while crossing that safe floor, and
Isp's STAIRS latch disables it before Pac takes the upper return. That interference
still informs timing and recovery, whose scores remain 2. No other dimension score
changed. The [rubric](../../DIFFICULTY_RUBRIC.md) now states that mandatory hazard
exposure is consequence based: death, loss of safe ground, or meaningful physical
danger count, while temporary interference on safe ground alone does not. A projectile
that can push a hero into a gap may still count. This clarifies the original anchor;
the eight dimensions, 0..4 scale, and axis formulas are unchanged.

The earlier full rubric is preserved byte-for-byte in the archived first-pass
rubric plaintext artifact `../../archive/difficulty_rubric_first_pass.md.txt` (SHA-256
`5e9f37c6a3bafce2e6ac0992c22db63561942ec027ea48349096d715b232d95d`). The original
first-pass records were authored under the earlier, less explicit rubric wording. They
remain frozen and should be interpreted as that author's first-pass judgment, not as an
application of the later clarification. Existing separate
adjudications for room 12 timing, room 18 cooperation, and room 23 timing remain intact.

## Exact source-record hashes

SHA-256 values are of each file's exact bytes before and after this resolution.

| File | Before | After |
| --- | --- | --- |
| `docs/DIFFICULTY_RUBRIC.md` | `5e9f37c6a3bafce2e6ac0992c22db63561942ec027ea48349096d715b232d95d` | `9daf7ad54c81c7a745692328c176de993ac48b33a048c4b390533152b1101542` |
| `devel/difficulty/levels/level_13.json` | `eb38c703c91b5ea6556bb7e05ab0d7946632c6655ba5fbec5f14671919116971` | `3abc9abc28fb3c635614ea2f7e4faf9548433202442a3c548e8ea6f04acb38e9` |
| `devel/difficulty/levels/level_14.json` | `6b84a42d38d5166eb5d1f8773a6e2bd6acd6580f3ca3855d76835017afb42372` | `b85da96cd1b261d03cf797c24958deb26f7a3f3aee2477000d5cd0ad487ef849` |
| `devel/difficulty/levels/level_15.json` | `81197e243ee863a667c6752a634bb2e37dbd6f15c5cd1aa71535d179c7910cc4` | `725576cf86a51c2e51bf4e6b7990bab7a797efefd628529aa76711c74c594995` |
| `devel/difficulty/levels/level_16.json` | `16432d8126e27a6973bbfa38af96def2632fc8d0f3a0938af4dd293ac96e2a18` | `97b6b685b8c93df18ea6c927b95ed208362498b0197cfd429e48304a4b4c76ca` |
| `devel/difficulty/levels/level_17.json` | `a838848ea6fba698083c116475db87f8b047f484b15308cde1f4bf51c3e6e119` | `e4d541cdecd4b164c014a79112d583fe6695b937f36d733483d052ce33762357` |
| `devel/difficulty/levels/level_18.json` | `eb64ed1cc1d65a46a696934204f157a5394b0c2fced9b66cb86eda29b20dd53f` | `2fb7554b50a685a763596f0ed058e012c69dc3f7866f7d7d6b41b6622817fba5` |
| `devel/difficulty/levels/level_19.json` | `44631acc24c9d492dc521b0d661f442eeb7d3d16b49216f4cf0d7319620c07b6` | `af68d1145c1ad7f618806aef0108706d2824134bf2239c77337002ead0d3feb5` |
| `devel/difficulty/levels/level_20.json` | `a7d33f0cae575db39b365affe39793fb734b2fc4d682c89827f32052dd25096a` | `65446a778b3df487f0cc8ebc20cdbe17bb6b94ed979186d34623e345b6bf2c1b` |
| `devel/difficulty/levels/level_22.json` | `fe723c4f3a1f2739a08e15cec42a232e8797edf4309ec1a876da83e1f47d3a09` | `5e7e732d4420facaa71c66558c416ea60b2ca585185820d6b13ce8ab57932507` |

## Validation boundary

`npx tsx devel/assess_difficulty.ts validate` passed for all 23 campaign rooms.
The validator still reports its accepted first-pass and final control-friction
unknowns. The 36 affected mandatory steps all have null observed feedback.
The 23 first-pass files and 23 lock files were unchanged: their sorted
`shasum -a 256` listing has SHA-256
`0d897d917149873806d9244098b0f32e65923b1859d784f56c3227dade2e64d0`
both before and after this resolution. No new gameplay probe was needed to
separate source-derived expectations from the retained final-state evidence.
