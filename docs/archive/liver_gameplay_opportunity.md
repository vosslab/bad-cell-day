# Liver gameplay opportunity

## Outcome

Privately probe one navigation improvement in registered liver room `level_14` while
preserving the stable 57-room campaign and all production contracts.

## Closure

The private prototype phase is complete. The frozen candidate passed the actual registered-scene
clear and miss/reboard proof; manager L3 then released the bounded production revision. Root accepted
that revision as `DONE_WITH_CONCERNS` on 2026-10-18 19:15:58 UTC after native, built-browser, save-flow,
SPEC, QUALITY, and integration evidence. The production decision clarifies that Pac may board/follow
before RESCUE; RESCUE opens Pac's far exit rather than enforcing an order. The frozen prototype,
trials, and receipts remain unchanged. See the canonical
[production delivery ledger](liver_refuge_delivery.md); no prototype work remains.

## Decision and hypothesis

`Bombs Need Personal Space` already has a strong hazard-and-refuge route. Pac holds OPEN
while Isp passes the gate; Isp uses two refuges above Gem's bomb, and RESCUE powers the
second refuge and opens Pac's exit. Probe a private geometry variant that splits the
continuous floor into safe shores, extends the existing moving refuge across the gap,
and gives Pac's OPEN hold the existing `motor(refuge_two)` effect. Pac controls when
Isp gets a predictable boarding point; releasing OPEN sends Isp over a gap that now
requires the refuge. Isp must land on the far shore and press the original RESCUE pad
before Pac can cross. A lower lip is an optional safe recovery route after a missed
landing. Keep the three-second outage and lengthen the cycle for ordinary crossing.

## Evidence and method

Clone the room under `tests/_temp/liver_gameplay_opportunity/`; step it with the existing
`create_game_state` and `step_game` at 120 Hz. Candidate ordinary route and separate
miss/reboard route are in JSON input files; traces preserve every trial. The same
ordinary input sequence clears the candidate but baseline Pac dies at frame 1706 beside
the continuous floor. The route depends on the candidate's gap and is not an equivalent
path. This is a deterministic physics probe, not evidence of human enjoyment or discovery.

Jesse Schell's *The Art of Game Design*, Lens of Cooperation, asks what each player
contributes that the other cannot; here Pac controls a refuge that Isp must board. Its
level-design chapter recommends designing around navigable space. Steve Swink's *Game
Feel* treats control as moment-to-moment spatial sensation. The candidate translates
these prompts into a visible stop, boarding, release, and ride across the gap.

## Sequencing

This private experiment precedes the manager's accept/reject decision. Production work,
if accepted, belongs to a fresh production owner followed by fresh SPEC, QUALITY, and
integration reviews. The private clone cannot authorize campaign registration or a
58th room.

## Ledger

- Task: choose one useful middle-liver gameplay experiment without asserting a defect.
- Initial lead: `level_30`; manager judged its reciprocal carry design strong and a perch
  likely cosmetic, then suggested checking `level_14` for a higher-value opening.
- Decision: probe `level_14`; preserve its refuge route, campaign roster, and engine rules.
- Evidence: OPEN currently opens Isp's gate; RESCUE powers the periodic refuge and opens
  Pac's exit. Existing `motor` effect can pause the refuge while OPEN is occupied.
- Manager decision: geometry plus OPEN/PAUSE may proceed privately; require connected
  boarding, an ordinary clear, and one plausible miss followed by reboarding.
- Candidate: floor ends at x=340; refuge_two moves x=580..840 over a 260px gap; safe
  shore starts x=820; recovery lip x=710..820 at y=510. Original static RESCUE pad is
  retained at x=810. OPEN adds only existing motor control; refuge outage remains 3s/20s.
- Evidence: `candidate_route_11.json` completes at frame 2076 with both exits true and
  no deaths. Isp boards while Pac holds OPEN, Pac releases at frame 390, Isp rides to the
  far shore and latches RESCUE at frame 1930. Separate `candidate_recovery.json` records
  Pac miss onto `recovery_lip` at frame 1715, clears refuge underside, and reboards it
  at frame 1785; no death. Same-input baseline `baseline_ordinary.json` dies at frame
  1706 when Pac is hit by Gem's rolling bomb; candidate avoids that hazard on the refuge.
  The gap makes the routes spatially different. `candidate_route_01..10.json` preserve
  failed routes.
- Open challenge: long scripted candidate route clears, but might impose unnecessary
  friction compared with current floor. Human discovery/fun remain untested; manager
  decides whether causal gain merits a fresh production owner.
