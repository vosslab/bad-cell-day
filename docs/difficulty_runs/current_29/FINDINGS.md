# Current 29-room campaign findings

The validated [campaign_map.json](campaign_map.json),
[LEVEL_DIFFICULTY_REPORT.md](report/LEVEL_DIFFICULTY_REPORT.md), and
[difficulty_campaign.svg](report/difficulty_campaign.svg) support this gameplay review. All 29
paired records follow the current [README.md](README.md) roster, and the existing assessment
command validated the run before generating those artifacts. The source and served build stayed
frozen at the hashes in that README. The accepted ordinary-keyboard journey clears all 29 rooms and the
finale; its receipt is `tests/_temp/double_trouble_campaign/REPORT.md`. These checks establish
operability and a legal route, not human discovery, enjoyment, time, or shared-keyboard comfort.

The report's puzzle and platforming numbers summarize ordinal judgments under
[DIFFICULTY_RUBRIC.md](../../DIFFICULTY_RUBRIC.md). Clarity, recovery, and control friction are separate burdens.
The first pass contains idle-frame hypotheses, not witnessed player responses. Source-informed
changes in the paired pass expose earlier uncertainty; they do not measure hindsight bias. The
campaign does not need a monotonic score ramp: safe, demanding reasoning and easier rooms both have
useful places.

## Campaign shape

| Positions | Current play pattern | Implication |
| --- | --- | --- |
| 1-8 | Isp or Pac holds a route while the partner crosses and latches RESCUE. Moving lift, ferry, fragile bridge, sac parking, and the revised far-ferry brake vary the execution. | The opening teaches reversible handoffs, then adds genuine gap and restart stakes. Position 5's safe alcoves give a useful pause after position 4's ferry. |
| 9-14 | Split lanes, joint heavy-sac pushing, lift handoffs, then coupled cargo decks and a four-pad relay. | Positions 12 and 14 ask for substantial planning on mostly safe ground. Cargo Exchange's reasoning peak is a new load/rider model, not an accidental timing spike. |
| 15-20 | Gem's bubble becomes a safe FLOAT route, a carrier for Pac, and then a shared top rebound/flight. A bomb room and cargo bridge vary physical risk. | Position 15 is an appropriate easier FLOAT lesson before more coordinated bubble use; positions 18-19 offer recoverable experimentation. |
| 21-26 | Longer boss relays, Pac's remote shelf parking, an upward bubble rescue, a two-way sac shipment, a return path, and Cana's committed aim. | The partners do more than hold a gate, though several rooms still use a familiar hold-to-latch skeleton. The safe floor in Return to Sender supports a long cargo plan without lethal reset. |
| 27-29 | A one-sac counterweight role swap over lethal shafts leads into repeated villain pressure and the joint two-second finale hold. | The end combines reasoning, controlled movement, and mistake cost. The finale asks both players to finish together instead of merely reaching separate exits. |

The opening has real physical spikes at room 4
([LEVEL_03.md](report/difficulty_levels/LEVEL_03.md)) and room 6
([LEVEL_08.md](report/difficulty_levels/LEVEL_08.md)): ferry or bridge mistakes can send a hero into slime
and repeat several setup steps. Room 4's separate source-blind observer stopped after releasing
rightward input on a safe landing; an ordinary `D` continuation cleared both open gates
(`tests/_temp/opening_gate_diagnostic/REPORT.md`). That record supports keeping the room, not a
closed-gate fix. Double Trouble ([LEVEL_07.md](report/difficulty_levels/LEVEL_07.md)) then adds a meaningful
brake-board-release decision: Pac must hold STEADY until Isp boards the far ferry, release to carry
Isp, and wait for RESCUE before following. Its focused missed-board and early-release recoveries
support the design without predicting novice success.

Cargo Exchange ([LEVEL_23.md](report/difficulty_levels/LEVEL_23.md)), at position 12, is the clearest safe
reasoning peak (puzzle 93, platforming 39). Both heroes must ride for the decks to move. Pac and the
outbound sac make A descend while Isp rises on B; Pac parks that sac with her own weight to release
the return sac; Isp loads B, both reboard, and the load comparison reverses. Distinct arrival latches
open the partner's exit. Its full-width decks and shaft bases make many errors a cargo or boarding
retry. The several-step model is the point of the room; flattening it would discard its strongest
cooperation. Across the Divide ([LEVEL_21.md](report/difficulty_levels/LEVEL_21.md)) is another safe reasoning
challenge: Isp opens Pac's lower route, Pac powers Isp's lift, Isp latches LINK, and Pac finally
opens HOME. Earlier exposure to pads does not prove that new pairs will infer either sequence.

Gem's Bubble Break ([LEVEL_13.md](report/difficulty_levels/LEVEL_13.md)), at position 15, is a useful breather
(puzzle 36, platforming 39). Pac spawns on BUBBLES, which starts Gem's continuing stream; she need
not keep holding the pad. Isp uses FLOAT to reach RESCUE; Pac then takes the right steps to her
exit. A missed bubble or Pac's short STICKY contact recovers on continuous floor. The optional hint
in [levels_final.ts](../../../src/levels_final.ts) says "Pac holds BUBBLES," which implies more
ongoing duty than the source and accepted route require. That is a narrow copy opportunity, not a
reason to add a gate or make this room harder. I've Got You
([LEVEL_24.md](report/difficulty_levels/LEVEL_24.md)) and Two for One
([LEVEL_28.md](report/difficulty_levels/LEVEL_28.md)) then give Gem's weapon distinct uses: Pac
rides Isp during FLOAT, and later rebounds from a bubble's top while Isp uses the same flight. Keep
these clever alternatives and their safe retry floors.

Cana's committed nearest-hero aim in Attention, Please!
([LEVEL_27.md](report/difficulty_levels/LEVEL_27.md)) can be baited and dodged after the line locks.
In the last two boss rooms, STEADY and RESCUE interrupt attacks once; they do not shut Cana or Gem
down permanently. This gives the villains recurring behavior without making projectile contact a
mandatory trick. The earlier mandatory SHOVE-distance feasibility probe found a narrow benefit and
recommended against that room
([cana_delivery_feasibility.md](../../active_plans/reports/cana_delivery_feasibility.md)). A future
weapon idea should earn a partner decision or useful alternate route, not merely add attack count.

Return to Sender ([LEVEL_25.md](report/difficulty_levels/LEVEL_25.md)) gives the sac a different
itinerary: Isp drops it to Pac, Pac and the sac hold RECEIVE x2 to power Isp's recovery lift, Isp
latches RELEASE, Pac parks the return lift from SEND, and Isp places the sac on DOCK for both exits.
A premature SEND release needs another lift adjustment on safe floor. A Meeting of Minds
([LEVEL_18.md](report/difficulty_levels/LEVEL_18.md)) instead has Pac park a moving shelf for Isp
to board, release it, then re-park near the landing. These are useful reciprocal decisions; another
simple upper/lower pad relay would repeat them.

Changing Places ([LEVEL_29.md](report/difficulty_levels/LEVEL_29.md)), at position 27, is a deliberately harder
transfer (puzzle 86, platforming 68). The rider clutch and load comparison were taught in Cargo
Exchange; this room requires Pac to push one sac across the commissure while Isp crosses above it,
then the heroes swap decks and reverse direction. Missing a deck can reach lethal shaft slime and
reset the exchange. A left recovery shelf already lets players retrieve an overpushed sac, so a new
recovery patch is not supported by the evidence. The corrected prior-knowledge ledger credits
Cargo Exchange with the core clutch/load rule and identifies the one-sac crossing and role swap
as the new combination. The visible board explains riders and loads, while first-time comprehension
of the central swap remains unknown.

The finale ([LEVEL_20.md](report/difficulty_levels/LEVEL_20.md)) uses the familiar STOP,
STEADY, and RESCUE chain to place Isp on a high TARGET that supports Pac's last crossing. Both
must then hold their targets together for two continuous seconds. Releasing a target early repeats
the local charge; a slime fall can reset the longer route. That combination gives the last room a
joint finish without treating waiting alone as extra reasoning.

## Next improvement candidates

These are product hypotheses in likely player-benefit order, not score gates or approved changes.
They preserve working rooms and use additions where an addition earns a new decision.

| Priority | Candidate and likely benefit | Evidence and cost |
| --- | --- | --- |
| 1 | Prototype one compact, safe counterweight recall challenge between Cargo Exchange and Changing Places. It should ask both players to *deliberately balance or pause* coupled decks at an intermediate transfer and then change the load, rather than repeat an upper/lower pad relay. This may make the late role swap feel learned while adding distinct physical cooperation. | The 15-position gap and the two current routes support the teaching hypothesis; player recall benefit is unmeasured. Medium-to-high room design and acceptance cost. Keep it outside the campaign until it earns a place. |
| 2 | Try the organ-shaped platform concept on one live renderer scene, keeping the exact collision tread and pad, exit, hazard, and state cues readable. It may make the lung, marrow, and brain spaces feel like connected tissue. | `tests/_temp/organic_platform_art_probe/report.md` and its original SVG/PNG sheet are promising visual feasibility only. Moderate Canvas/visual-review cost; no live-game or player acceptance exists. |
| 3 | If room hints are being polished, correct the BUBBLES wording in room 13 to describe starting Gem's stream, while keeping Pac's safe step route and Isp's FLOAT rescue. | Source-verified copy mismatch and accepted clear; small change and small likely benefit. No observed human confusion is claimed. |

The highest-value *prototype hypothesis* is a short chamber whose coupled decks must be stopped in
balance at a useful middle landing. One hero repositions a sac while the partner holds a deck
position; both reboard to release the rider clutch, then deliberately unbalance the decks to reach
separate exits. This uses the existing counterweight rule but adds an intentional mid-route stop, rather than
replaying Cargo Exchange's two-sac delivery or Changing Places' final swap. Test it first as an
isolated room with safe catch floors and visible rider/load/balance feedback. Evidence favoring
promotion would be an ordinary-input clear from authored spawns, a demonstrated reversible common
mistake, and a causal comparison showing both players make consequential new choices that cannot be
skipped by a direct ride or a familiar hold/latch chain. Reject or redesign it if the easiest route
is just a repeated relay, if balance is only a passive wait, if the recovery is a long reset, or if
the new stop is visually unreadable. Later observation of actual pairs would improve confidence in
learning and enjoyment; it is not a prerequisite imposed by this findings document. Root selects
any production work.

## Evidence limits and checks

The full run validator passed all 29 paired records, and report generation produced the exact
29-room snapshot order, map, chart, and one dossier per room. The locked first records, capture
receipt, source fingerprint, and local/served build hashes remained bound to this run; see
`tests/_temp/difficulty_29_capture/REPORT.md` for the commands and integrity receipt. No unresolved
source, build, or gameplay failure appears in the current acceptance evidence, so the next action is a
bounded design experiment, not a stabilization refactor.

Source and scripted clears support the listed routes; some mistake consequences, especially in
`level_15`, `level_17`, and `level_25`, are source predictions rather than witnessed failures. Records
for `level_16`, `level_18`, and `level_28`
have more detailed executed traces. A single automated operator controlling both heroes cannot
stand in for two people. Final control friction is recorded as `0` in 18 rooms where assessors
verified technical key response and `unknown` in 11 where shared-keyboard comfort was left
unmeasured. Those entries should not be normalized into a campaign control score. No human
attempts, stuck points, hints, deaths, or enjoyment judgments were collected.
