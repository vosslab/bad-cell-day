# Difficulty adjudication: opening interference, split roles, and cargo timing

2026-10-15. This bounded source review covers second-pass records for stable IDs
`level_02`, `level_04`, `level_18`, and `level_23`. The first-pass files and locks remain
frozen. The assessment snapshot still identifies campaign
`7bc88b12eb9f7fc50f44b90f1c72a0b1629f30154711401cf9512526b8f54d69` and source
`f9091fe3478efeff506256fdfcb36cb5c642c1c437f7e121b4ff20a1379faf6f`.
All added source evidence uses the existing `src/` artifact set and specific
`lines:`, `image:`, or `json:` locators; source files and observations were not edited.

| Record | Before SHA-256 | After SHA-256 | Adjudicated result |
| --- | --- | --- | --- |
| `level_02` | `388bca13e91d89cfa1dbf46d924522bb0e97d51c36dfb7a1975e4eb03ebd02cf` | `30d1c01edace69bd62424cff130d317ba8e903501a7c0eb80fcbaf570f400d40` | Correct attack and pad wording; eight scores retained. |
| `level_04` | `73042bdc921fb104fe38f59ac28796ddc895cc201ee4178f90b6eea5b7a95f5e` | `65d622d9543b8ad3fb4b61e385740c241a9448a9db22cca360083f64d7a63a9a` | Correct earlier boomerang exposure; eight scores retained. |
| `level_18` | `0a73616240d831b7c7be8016f36075cb4786473b96223f44090b5c8eba26e78e` | `eb64ed1cc1d65a46a696934204f157a5394b0c2fced9b66cb86eda29b20dd53f` | Cooperation 3 to 2. |
| `level_23` | `295a749ba9eb8450e9d6f3ff0f2d19839660624821db3d7d0eed2ce7dffef95f` | `29c9d693b34da18d4a50a1d8390281c017291e35dcf67b1e24c2b369c5684da2` | Timing 1 to 0. |

In `level_02`, [the authored pads](../../../src/levels_tutorial.ts) assign HOLD to Isp
and the latched RESCUE to Pac. [The hit effect](../../../src/interference.ts) and the accepted
[tutorial source routes](tutorial_villain_routes.md) show Gem's FLOAT lifting Isp off HOLD,
closing Pac's door, while Cana's SHOVE changes Pac's approach to RESCUE. Pac has no
HOLD pad. The separate attack roles replace the inaccurate statement that both
interrupt pads. The route still has forgiving retries, so the timing and other scores
stay where they were. Current rendered acceptance and full-campaign evidence are in
[active villain browser acceptance](active_villains_browser.md) and
[active villain campaign acceptance](active_villains_campaign.md). The earlier opening
route prototype predates the shared-anchor probe and is not current proof. The frozen
first pass remains untouched.

In `level_04`, [room 02's idle image](../../difficulty_observations/level_02_3.png)
visibly says "BOOMERANG: ISP DIZZY / PAC SHOVE," and [room 02's source](../../../src/levels_tutorial.ts)
already defines Cana's boomerang. DIZZY is therefore previously introduced in
`level_02`; room 04 applies it to an Isp far-bank crossing, with the shot enabled by
Pac's STEADY. Prior exposure does not prove player mastery. Novelty remains 2: the
unstable bridge and Pac support followed by Isp RESCUE are the substantive new
combination. The first-pass uncertainty about far-bank ownership remains visible in
the unchanged first-pass record. This source correction does not lower clarity merely
because the solution is now known to the assessor.

In `level_18`, [the room definition](../../../src/levels_final.ts) places Pac on the
far-right POWER pad at spawn. Pac holds it once while Isp uses the upper shelf and
latches RESCUE; Pac then climbs the right stairs. The blue lower filter blocks Isp
from the bridge, and [the ordinary route](final_routes.md) treats the orange spark on
the lower bridge as optional. No repeated joint decisions or coordinated simultaneous
movement are necessary. This is the rubric's distinct roles and one handoff anchor,
so cooperation is 2, down from primary 3 and frozen first-pass 4. The other seven
scores stay. [The initial image](../../difficulty_observations/level_18_3.png) shows
the separated heroes, POWER, upper RESCUE, and colored filters; it does not explain
all three remote POWER effects. Clarity burden 2 remains an estimate of what the
visible cues convey, independent of the source-derived route.

In `level_23`, [the counterweight update](../../../src/counterweights.ts) moves decks
only when each carries a rider and their loads differ. Leaving either deck pauses it;
the cargo latch and endpoint route support deliberate repositioning. The
[ordinary cargo route](counterweight_routes.md) reaches both exits with no active
window. Under the rubric, timing 0 matches "no active window"; the earlier primary
1 rationale itself described safe pausing. Choosing an unequal load belongs to
reasoning, and pushing/boarding belong to execution. Cooperation 4, novelty 4,
clarity burden 3, and the other scores retain their separate causal support.

Validation: `npx tsx devel/assess_difficulty.ts validate` passed for all 23 current
campaign rooms after these changes. Its reported unknown first-pass dimensions and
two-human control friction are retained evidence gaps. No human pair was observed,
so the adjudication establishes source-anchored rubric consistency rather than novice
success or actual shared-keyboard comfort.
