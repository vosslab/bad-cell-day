# Return to Sender acceptance

Updated 2026-10-15. This is the live manager ledger for additive stable `level_25`, **Return to
Sender**. The source, build, browser, fresh SPEC, QUALITY, integration, and final acceptance lanes
remain open until their evidence is supplied and reviewed. Scripted feasibility is not human play
or enjoyment evidence. Continuous game development remains ACTIVE.

## Candidate and decision

Place the room after `level_17` and before `level_22` in the brain. The manager has approved
production authoring from the final fixture. Preserve all 24 existing room definitions and their
relative order. The players pass one ordinary nutrient sac down and back up:
Pac receives it on a weight-2 plate, Isp releases Pac's route, Pac sends the sac upward, and Isp
unloads it to the final dock. The same Cana shove that disrupts Pac's SEND hold can pause the
carrier and create an unload window. The candidate uses existing level mechanics and authored
villain behavior.

**R4 manager decision.** Clever alternate cooperative routes are welcome. A partner boost that
bypasses RECEIVE is not automatically a defect when the shared sac still circulates and both
heroes contribute. Preserve emergent cooperation and villain meddling; do not add barriers or
policies merely to force the scripted order. See [DESIGN_DECISIONS.md](../../DESIGN_DECISIONS.md).

## Evidence and gates

| Lane | Status | Owner and dependency |
| --- | --- | --- |
| Design hypothesis | Complete | [next_cooperative_level_design.md](next_cooperative_level_design.md) |
| Temporary source feasibility | Full route and four recoveries complete; final receipt and independent replay pending | `tests/_temp/return_to_sender/fixture.json`; no permanent fixture or test |
| Production source | Pending | Source owner: `src/level_return_to_sender.ts` and `src/levels.ts` |
| Production build | Pending | Depends on accepted source and registration |
| Built browser play | Pending | Depends on frozen build; test level and both adjacent transitions |
| Fresh SPEC review | Pending | Depends on the final production source |
| Distinct QUALITY review | Pending | Depends on final source and required checks |
| Fresh integration review | Pending | Depends on accepted source, build, browser, SPEC, and QUALITY |
| Manager final acceptance | Pending | Depends on all required evidence and explicit review |
| Documentation closeout | In progress | This ledger, changelog, design decision, human guidance, direction; usage after source acceptance |

## Feasibility evidence

The design investigation ruled out floor-level SEND because Pac crosses the plate while pushing
and starts the empty lift too early. The manager approved the final fixture with raised SEND at
top 470 and a 12px cargo stop at `(960,260,12,40)`. The temporary 40px-signal fixture reportedly
completed with ordinary 16ms inputs in 19.072 seconds. It showed Cana shoving Pac off SEND and the
carrier freezing, then resuming when Pac reoccupies the plate. Full-route probes also completed a
shared fall, overshoot retrieval, missed cycles, and four recoveries. An early fall after leaving
the untouched sac may require Restart; the manager accepts that low-progress retry cost.

The prototype uses existing mechanics, contracts, and organic art. The manager found no need for
an engine type or architecture extension. The feasibility owner's final receipt and independent
replay remain pending.

These results belong to the isolated temporary fixture. They do not establish that the production
room is built, browser-playable, integrated, understood, or fun. No new score or difficulty claim
is made; the 23-room difficulty findings remain historical and byte-unchanged.

## Closeout updates

Update each lane only from its owner's concrete evidence. Record commands and artifact identity
when supplied, preserve concerns and limitations, and do not turn a pending result into a pass.
If browser infrastructure is unavailable, mark that lane unverified and continue independent
documentation closeout. Add `docs/screenshots/return_to_sender.png` only after the manager supplies
the actual accepted built capture.
