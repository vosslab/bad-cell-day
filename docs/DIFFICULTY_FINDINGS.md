# Campaign difficulty findings

Historical source binding: these unchanged scores and findings describe the 23-room campaign before
the anatomical presentation migration. They remain design input, but do not establish clarity under
the new organ art; a new first pass is needed for that claim. See
[the anatomical world acceptance record](active_plans/reports/anatomical_world_acceptance.md).

2026-10-15. This is an expert, source-informed synthesis of the [reusable rubric](DIFFICULTY_RUBRIC.md),
[23-room generated report](LEVEL_DIFFICULTY_REPORT.md), [campaign chart](difficulty_campaign.svg),
and [room dossiers](difficulty_levels/LEVEL_02.md). The generated report links every dossier.
The source of each score, route, first-pass comparison, and artifact citation is the corresponding
`devel/difficulty/levels/level_XX.json` record; its restricted, unchanged counterpart is in
`devel/difficulty/first_pass/`. The assessment is bound to campaign SHA-256
`7bc88b12eb9f7fc50f44b90f1c72a0b1629f30154711401cf9512526b8f54d69`
and source fingerprint `f9091fe3478efeff506256fdfcb36cb5c642c1c437f7e121b4ff20a1379faf6f`.
The [capture receipt](difficulty_observations/capture_receipt.json) retains 23 idle packets and
69 screenshots; its [source binding](difficulty_observations/source_binding.json) is retrospective.

These are medium-confidence *expert estimates* of a new two-person pair reaching both exits in
campaign order. Earlier exposure is an opportunity to learn, never proof of mastery. There is no
observed novice pair, player success rate, completion time, enjoyment measure, or shared-keyboard
comfort measure. A scripted clear establishes feasibility. The first pass saw only chronological
idle packets; it could propose actions but could not witness their feedback. The second pass used
source and ordinary-input routes. In nine final records, 36 route steps retain source-derived
`expected_feedback` while `observed_feedback` is `null`: the cited campaign result proves an end
state, not each intermediate response. Preserve the two accounts: a source-obvious solution can still
be obscure on first encounter. The [three-room independent calibration](active_plans/reports/difficulty_calibration.md)
agreed exactly on 13/24 original dimension ratings, all others within one point; after the
[Cargo timing adjudication](active_plans/reports/difficulty_adjudication.md), 14/24 final primary
ratings match that frozen independent vector. This is a small expert check, not player calibration.

## Reading the map

`P` is the rubric's weighted reasoning/cooperation/novelty axis; `X` is its separate
execution/timing/hazard axis, each rounded to 0-100. `C` is solution-clarity burden and `R` is
recovery cost, each 0-4. Control friction is unknown in every room for the two-human baseline.
Scores are ordinal comparison aids, not objective ranks; nearby numbers should not decide order.
Stable IDs below follow campaign position, even when their numeric suffixes do not.

| Position and stable ID | P / X; C / R | First-encounter demand and actual mandatory dependency |
| --- | --- | --- |
| 1 `02` | 57 / 7; 2 / 1 | Isp holds Pac's door; Pac latches RESCUE. Gem can lift Isp off HOLD; Cana shoves Pac. Flat, forgiving introduction. |
| 2 `01` | 50 / 29; 2 / 1 | Familiar hold/latch opens a powered lift; both must board and jump to raised exits. A missed boarding leaves a safe floor and another lift cycle. |
| 3 `04` | 57 / 43; 2 / 2 | Pac steadies Isp's bridge until Isp latches the return; instability and slime make release consequential. Cana's DIZZY already appeared in `02`. |
| 4 `03` | 68 / 50; 2 / 2 | Isp brakes a ferry and opens Pac's landing, then Pac rescues Isp. Boarding and a slime gap add movement risk. |
| 5 `06` | 43 / 29; 2 / 1 | Earlier HOLD/RESCUE reused around raised alcoves; a lower recess offers safe waiting beneath Gem's projectile lane. A deliberate breath after the ferry. |
| 6 `08` | 68 / 43; 3 / 2 | Crate substitutes for a PARK holder, then Pac steadies Isp's bridge. The substitution and two controls are less evident than their operation. |
| 7 `05` | 75 / 68; 2 / 3 | Isp's STOP lets Pac ferry to a new support role; Pac's STEADY lets Isp cross a second gap and rescue. A fall replays both crossings. |
| 8 `07` | 75 / 68; 3 / 3 | Same relay family, now STEADY also powers a second ferry. Added travel and dual effect raise burden more clearly than they add a new plan. |
| 9 `11` | 68 / 29; 2 / 1 | Safe color lanes and cross-opening latches let each hero own a route. The solid paused step makes this a recovery breath. |
| 10 `09` | 68 / 43; 2 / 3 | Both push a heavy crate before Isp brakes/powers a ferry and Pac rescues; slime makes the shared setup costly to repeat. |
| 11 `10` | 68 / 61; 2 / 3 | Joint lift boarding, then Pac supports Isp's bridge. A mistimed release or missed transfer can lose the completed ascent. |
| 12 `23` | 100 / 32; 3 / 2 | Both ride linked decks; Pac unloads outbound cargo, Isp loads return cargo, and Pac opens Isp's exit. Unequal loads change direction; safe endpoints and rider clutch permit pauses. |
| 13 `12` | 68 / 46; 2 / 3 | An ordinary crate holds BRAKE without a joint push; Pac holds STEADY and Isp rescues. Cargo holds BRAKE indefinitely: ferry motion itself creates no active window. A slime fall can replay setup. |
| 14 `21` | 93 / 29; 2 / 1 | Four-pad split-floor relay: Isp opens Pac's way, Pac powers Isp's lift, Isp preserves it, Pac returns the favor. Catch shelf and solid paused lift protect experimentation. |
| 15 `13` | 68 / 29; 2 / 2 | Pac enables Gem's bubble so Isp can FLOAT to high RESCUE. It teaches using an attack over continuous floor before the later hazardous transfer. |
| 16 `14` | 50 / 50; 2 / 2 | Pac opens a patrol gate; Isp crosses a rolling bomb with periodic refuges. A movement/hazard interlude rather than a deep relay. |
| 17 `15` | 68 / 36; 2 / 2 | Both push a weight-two parcel, Pac holds a bridge, Isp rescues. Familiar mechanisms combine without an active timing window. |
| 18 `16` | 68 / 54; 2 / 3 | STOP, STEADY and RESCUE lead to paired Gem shutdown targets. The ferry gap and lost setup dominate retry cost. |
| 19 `18` | 61 / 43; 2 / 2 | Pac already stands on POWER at spawn; Isp takes upper RESCUE, then Pac climbs. One required handoff; lower spark route is optional and the blue filter blocks Isp there. |
| 20 `17` | 68 / 54; 3 / 2 | Pac invites FLOAT to lift Isp from the stopped carrier; Isp's rescue powers Pac's lift. Reversed lift/bubble use adds transfer, with a harder causal read. |
| 21 `22` | 93 / 46; 3 / 2 | Separate inward routes exchange lift, upper gate, and stair access before Pac returns. Five stages make both heroes repeatedly consequential; missed boarding is recoverable. |
| 22 `19` | 68 / 61; 2 / 3 | STOP, STEADY and RESCUE recur against Cana's sweep, then paired targets. The bridge and dodge raise execution and reset cost. |
| 23 `20` | 93 / 79; 2 / 3 | The finale transfers bridge support from Pac's STEADY to Isp's blue TARGET so Pac can leave; both hold targets for a two-second charge. Upper/lower traversal and slime make the finish physically demanding. |

## What the progression says

**Puzzle and movement peaks are different.** Positions 7-8 first demand a chained two-gap role
swap *and* risky movement (`05`/`07`: X68, R3). The next `11` drops to safe split-lane reasoning,
which can serve as a breath. Positions 10-11 (`09`/`10`) raise reset cost again before `23`
introduces a very different cargo model: P100 with X32, timing 0, hazards 0. That is a good
reasoning peak if players can infer the load reversal; its C3 identifies a cue question, not a
reason to flatten the puzzle. `21` brings high reciprocal reasoning with safe recovery after
`12`'s familiar cargo relay. `13` safely teaches useful FLOAT before `17` asks for bubble/lift
transfer. The finale combines high P and the highest X; its physical demand deserves direct
two-player observation before tuning.

**The campaign repeats one causal grammar.** HOLD or STOP makes a route; STEADY sustains a crossing;
RESCUE makes it permanent. `04`, `08`, `05`, `07`, `10`, `12`, `16`, `19`, and `20` vary that pattern.
Repetition can teach support and release, but the two-ferry pair `05`/`07` and late `16`/`19`
may feel like longer versions of a solved answer. Their hazards and resets increase cost without
necessarily increasing interesting decisions. By contrast, `23` changes the model through
reciprocal weight exchange; `21` and `22` repeatedly turn one hero's action into the other hero's
next action. Keep those distinct structures visible when assessing an added room.

**Presence is not equal agency.** The source-informed `18` dropped from first-pass cooperation 4
to 2 because Pac begins on POWER and holds it once; Isp takes the upper route and latches RESCUE.
The lower spark is optional. `14` likewise assigns Pac a gate hold while Isp handles the bomb.
These can be useful lighter rooms, but neither should be advertised as a repeated reciprocal
handoff. `23`, `21`, `22`, and the finale give both partners a changing causal job. Watch whether
real players notice the contribution, especially when one hero waits on a control.

**Source hindsight changes the apparent challenge.** First-pass `12` assigned timing 3; source
review found that a crate can hold BRAKE indefinitely, so final timing is 0. First-pass `15`
looked like P93 with more hazard/execution; source review found a familiar parcel/bridge sequence
at P68, X36. `18` looked like P86 until its spawn POWER and optional lower route were separated.
Conversely, the first-pass idle view could not reveal most reset costs or verify active timing:
those fields correctly remain unknown in many locked records. `23` first-pass timing is unknown;
source review establishes safe endpoints and a rider clutch, hence timing 0. None of these
differences proves what players will understand. They identify where source knowledge most risks
overstating clarity or where an ominous frame overstates difficulty.

**Cue, reset, and input costs need different responses.** `08`, `23`, `17`, and `22` have C3:
crate substitution, reciprocal load direction, bubble/lift relationship, and crossed-route
handoffs respectively are the unassisted comprehension probes. `05`, `07`, `09`, `10`, `12`,
`16`, `19`, and `20` have R3 because a lethal miss can repeat setup; inspect the actual failure
cause and replay before adding checkpoints. No record verifies two-human shared-keyboard control
friction, so it is unknown rather than zero. One person operating both heroes adds a separate
simultaneous-input burden and cannot substitute for a paired session. The accepted opening
villains matter here: `02` must visibly teach Gem's FLOAT and Cana's return while Isp's temporary
loss of HOLD and Pac's SHOVE remain recoverable. The source and ordinary routes support this;
novice recognition remains unmeasured.

## Decisions and next evidence

These priorities rank likely player impact, source evidence, and confidence, not raw axis gaps.
They preserve good rooms and favor an additive cooperative route when a genuinely new reciprocal
decision survives a feasibility probe. An order change alters prior learning and must be rescored.

| Priority | Decision | Evidence and next discriminating check |
| --- | --- | --- |
| 1 | **Test** unassisted cause recognition in `23` at position 12, then repair only the demonstrated cue if needed. | New reciprocal model (P100), C3, safe retry. Ask each player why a deck stopped, what reverses it, and which cargo frees the partner before offering a hint. The exact wording/feedback defect is still unknown. |
| 2 | **Test** the paired high-cost `05`/`07` at positions 7-8 and adjacent `09`/`10`/`12` resets. | X68/R3 in both ferry rooms, then repeated setup loss. Count misses, deaths, repeated solved actions, and whether `07`'s second ferry creates a fresh decision. Prefer targeted recovery or sequence change only if observed cost eclipses the role exchange. |
| 3 | **Keep** `11` at position 9 and `21` at 14 as safe reasoning changes; **test** `13` at 15 before hazardous `17` at 20. | `11` R1/X29 follows the first movement peak. `21` P93/R1 practices mutual handoff. `13` teaches useful FLOAT over floor. Verify that a pair can explain each transfer; do not assume exposure equals learning. |
| 4 | **Keep** `23` after `09`/`10` for now; **consider** an order change only with a new first-encounter ledger. | Heavy push, lane/weight, and lift boarding precede linked cargo. Moving `23` earlier would change novelty and could remove its preparation; moving it later could make its novelty less surprising. Test the existing position first. |
| 5 | **Test** whether `18` at 19 gives Pac a satisfying job and whether `16`/`19` feel too familiar. | `18` has one required POWER handoff, not a long mutual relay. `16`/`19` reuse STOP/STEADY/RESCUE with R3. Preserve lighter pacing unless a pair reports waiting or repetition; then design a new consequence for the waiting role. |
| 6 | **Keep** the accepted level-1 villain lesson and final reciprocal takeover; **test** finale execution with a pair. | `02` is flat and recoverable; `20` has P93/X79/R3. Watch target-support discovery, two-second hold, upper jump misses, and whether replaying setup diminishes the earned ending. |

Narrow paired sessions can resolve the highest uncertainty without halting source exploration:
start a fresh pair at `02` for villain recognition, observe uncoached `05`->`07` with reset counts,
`09`->`10`->`23` for cargo vocabulary and load reversal, `13`->`17` for FLOAT transfer, and
`22`->`20` for reciprocal agency and finale traversal. Record each person's proposed plan,
partner explanation, actual actions, cause of misses, retries, hint requests, control conflicts,
and enjoyment separately. A room replay after a learned solution can isolate execution from
discovery. Use the [rubric's observation rule](DIFFICULTY_RUBRIC.md) for raw attempts rather than
folding them into expert scores.

## Expansion hypotheses, not commitments

1. **FLOAT passenger transfer.** The proposed variant has Pac ride floating Isp to an upper
   relay, then open Isp's onward route from above. This could turn FLOAT into a physical transfer
   of who carries and who releases whom, beyond `13`'s ascent and `17`'s lift rescue. It earns a
   new room only if both heroes are necessary, the ride and dismount are readable, an early/missed
   shot has a safe ordinary-input recovery, and a normal jump or pad shortcut cannot erase the
   handoff. Treat the existing capability investigation as a hypothesis, not an implementation.
2. **Reciprocal cargo choice on distinct paths.** After `23` has taught load direction, let each
   hero decide what cargo to park or carry to give the other a different route, with a visible
   reversible consequence. This must add a meaningful choice beyond `23`'s same exchange, not
   just another crate push. A safe dock/reversal and no fatal cargo pin are acceptance questions.
3. **Villain response with a real partner consequence.** One hero could invite a useful effect
   while the other chooses a safe route or suppresses the attack *after* it has enabled a
   different physical action. Demand an understandable tell and a recoverable miss. The prior
   [mandatory SHOVE gap probe](active_plans/reports/cana_delivery_feasibility.md) allowed only
   about a 158 ms sampled launch interval and had bypass pressure; the
   [Borrowed Trouble prototype](active_plans/reports/borrowed_trouble_feasibility.md) allowed a
   complete route with every Cana shot canceled. Repeating either arrangement would add burden
   without the intended villain decision.

The next gameplay direction is in [gameplay_direction.md](active_plans/reports/gameplay_direction.md).
No new room, order change, or control change follows from this assessment alone.
