# Character prominence ledger

Status snapshot: 2026-10-14. Investigation, implementation, rendered browser acceptance, and all
three fresh reviews are complete. Final acceptance is complete; the plan is archived.

## Milestones and reviews

| Milestone | Evidence | Status |
| --- | --- | --- |
| M1: size and framing | Set the reference art height target at 1.6x, about 55 to 88 world units; villains at 1.6x. Preserve the complete world and 30x36 physics bodies. Pac's wide SVG has a shorter visible height. | Complete |
| M2: implementation | Renderer-owned scaling, depth order, feet contact cue and labels, speech bubble placement, and compact active-play desktop shell. | Complete |
| M3: rendered acceptance | Final browser review: 1002.30-pixel canvas at 1280x800; all 20 openings and 40 opening quips; representative play views at four sizes. | Complete |
| M4: reviews | Specification accepted the respec; quality accepted current source; integration confirmed artifact/source-map identity and accepted. | Complete |

## Review assignments

Use fresh agents for each review pass. Capture reviewer questions or challenges and resolve them
in the owning work before acceptance. Investigation (6.1-sol), plan (Luna), renderer (6.1-sol),
layout (6.1-sol), and visual review (6.1-sol) passes are complete. Specification review (Luna)
accepted the respec, quality review accepted current source, and integration review accepted after
confirming the final distribution hashes and embedded source-map modules against the visual report.

## Evidence

Settled decisions: increase Isp and Pac art to 1.6x the reference art height, about 55 to 88 world
units, and villains to 1.6x. Pac's wide SVG has a shorter visible height. Preserve the complete
game world and existing 30x36 physics bodies. The compact
active-play desktop shell frees height previously used by cards. Renderer ownership is
`VILLAIN_ART_SCALE` and `draw_player_overlay`; sort lower characters first and draw the final
contact cue at physics feet with labels, adjusting speech bubbles and their connections for the
new art positions.

The final `./check_codebase.sh` passed type, lint, format, and 16 tests; the final production build
completed. Final serial Playwright review passed 2 tests in 2.8 seconds. A prior parallel browser
attempt encountered `ERR_CONNECTION_RESET`; the serial run passed. An intermediate codebase check
found a temporary fixture with an ESLint `no-undef` error; the generated harness was removed, and
the final check passed. These were workflow issues, not product failures.

The final visual review passed all 20 opening scenes and all 40 opening quips at 1280x800, plus
representative narrow, crowded, boss, and desktop views across four viewport sizes. Horizontal art
centering clamps at world edges while physical feet and the foot cue retain their positions;
identity labels separate at both edges. Current speech bubbles avoid both actors and prior bubbles
using bounded candidate positions. If no candidate can fit, the bubble is omitted; all 40 current
opening quips fit and displayed. Full details and limits are in
[CHARACTER_PROMINENCE_VISUAL.md](CHARACTER_PROMINENCE_VISUAL.md).

The fresh specification review accepted the respec, quality review accepted current source, and
integration review accepted after confirming all four final distribution hashes and the four
embedded source-map modules match the visual report. Final acceptance is complete, and the plan is
archived at [CHARACTER_PROMINENCE.md](../../archive/CHARACTER_PROMINENCE.md).
