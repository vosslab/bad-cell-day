# Game-design reading and decisions

Read focused passages from the four requested local books under
`/Users/vosslab/nsh/MARKDOWN_BOOKS/game_design/`. This is selective reading, not a claim to
have read all four books cover to cover. Line ranges refer to those local Markdown editions.
The books supply design lenses; the implementation and observations decide whether a change works.

## Sources and application

| Book and focused passages | Principle used | Application and limit |
| --- | --- | --- |
| Raph Koster, `A_Theory_of_Fun_for_Game_Design-2013.md`, chapters 2-4 and 7; lines 322-552, 638-676, 886-1010 | Learn patterns through action; vary challenges using a compact core. Timing and monitoring can require skill, and failure has a cost. The checklist is not an algorithm for fun. | Reuse Gem's float rather than add an attack button. Position 13 isolates the pattern; 18 combines it with the lift. Keep 19's dodge and monitoring demand instead of eliminating all failure. Whether repetition becomes mastery or tedium needs human evidence. |
| Steve Swink, `Game_Feel_A_Game_Designers_Guide_to_Virtual_Sensation-2009.md`, lines 388-398, 436-458, 552-568, 728-746 | Input response, spatial context, and polish work together. Predictable control does not require easy outcomes. | Preserve directional control during dizzy/shove, warn before attacks, and bind suppression cues to actual pads. Inspect effects in their room context, not only isolated sprites. Reduced motion keeps static cues. These checks do not measure the felt quality of control for a person. |
| Tracy Fullerton, `Game_Design_Workshop_3rd_Edition-2014.md`, lines 1524-1544, 3659-3750, 5039-5059, 7620-7700, 7718-7848, 7955-8030, 8415-8475, 9244-9292, 9844-9932 | Set player-experience goals, tune through observation, distinguish functional testing from enjoyable play, and examine meaningful consequences and arbitrary loss. | The intended experience is a readable partner handoff followed by a more demanding application. Legal-input bots check operation and recovery. They cannot replace watching two people discover roles, communicate, and respond to loss. |
| Jesse Schell, `The_Art_of_Game_Design_3rd_Edition-2019.md`, chapter 13 lines 5441-5489, 5653-5669, 5753-5801; chapter 14 lines 6111-6183; lines 6901-6985, 9575-9583, 9609-9649, 9757-9771 | Balance meaningful choices, cooperation, puzzle understanding, interest, and punishment that players can understand and prevent. Observe play rather than assuming the intended experience occurs. | Retain Cana's return path and lethal gaps while providing jump/countersteer and pad suppression. Assess whether a player can anticipate and prevent the hit. The punishment lens supports that question; it does not certify this encounter as fair. |

## Decisions made

- Keep three bounded room changes, stable IDs, the 20-room order, existing hero silhouettes,
  and the isolated optional trial.
- Teach Pac's BUBBLES hold and Isp's float/steer in Gem's Bubble Break (`level_13`) with
  a continuous floor. RESCUE ends the attack and opens Pac's stairs.
- Transfer that learned cooperation to the stopped lift in `level_17`; RESCUE then powers
  the lift for Pac. This changes the causal handoff rather than adding waiting or walking.
- Give Cana's `level_19` boomerang a real risk and a player-controlled answer: dodge its
  sweep, hold STEADY for temporary suppression, and latch RESCUE for lasting suppression.
- Reject the automatic catch-ledge experiment. Preventing an idle death alone does not show
  an improvement. The user explicitly distinguished fair failure from a bug; the experiment
  was withdrawn before the final build. Its source probe is recorded in
  [cana_return_recovery.md](cana_return_recovery.md).
- Keep scenery behind readable gameplay. Static warning and status cues remain useful with
  reduced motion; decorative art must not substitute for a visible mechanism response.

## Human playtest questions

Observe first, then ask neutral questions after the attempt. Use
[LEVEL_DIFFICULTY.md](../../LEVEL_DIFFICULTY.md) to record mode, prior experience, deaths,
restarts, help, and lost setup separately. Do not coach before recording the stuck point.

- What were you trying to do, and what did you expect the pad to change?
- What did each player notice before the bubble or boomerang arrived?
- After a return hit, what seemed to cause it, and what would you try next?
- When did the partner have an active decision, and when were they waiting?
- What did a failed attempt cost, and did the next attempt suggest a different approach?

A return-direction cue is a conditional response to observed confusion, not an automatic feature.
Record whether people notice the existing sweep and warning before changing it. Automated routes
establish feasibility and reproducible behavior; no novice-ease, human-fairness, or enjoyment
verdict follows from the books or the bot runs.
