# Character prominence ledger

Status snapshot: 2026-10-14. Investigation and implementation are complete; rendered
browser acceptance, specification review, and quality integration remain pending.

## Milestones and reviews

| Milestone | Evidence | Status |
| --- | --- | --- |
| M1: size and framing | Set the art target at 1.6x: Isp/Pac from about 55 to 88 world units tall; villains at 1.6x. Preserve the complete world and 30x36 physics bodies. | Complete |
| M2: implementation | Renderer-owned scaling, depth order, feet contact cue and labels, speech bubble placement, and compact active-play desktop shell. | Complete |
| M3: rendered acceptance | Target a 1002-pixel canvas within a 1280x800 browser view; verify actual browser rendering. | Pending |
| M4: reviews | Specification review, quality review, then integration review; keep later checks serialized. | Pending |

## Review assignments

Use fresh agents for each review pass. Capture reviewer questions or challenges and resolve them
in the owning work before acceptance. The investigation (6.1-sol), plan (Luna), renderer
(6.1-sol), and layout (6.1-sol) passes are complete. The visual review (6.1-sol), specification
review (Luna), and quality/integration review remain pending. Keep later checks serialized.

## Evidence

Settled decisions: increase Isp and Pac art to 1.6x, from about 55 to 88 world units tall, and
villains to 1.6x. Preserve the complete game world and existing 30x36 physics bodies. The compact
active-play desktop shell frees height previously used by cards. Renderer ownership is
`VILLAIN_ART_SCALE` and `draw_player_overlay`; sort lower characters first and draw the final
contact cue at physics feet with labels, adjusting speech bubbles and their connections for the
new art positions.

The manager reports `./check_codebase.sh` passed type, lint, format, and 16 tests on the current
renderer/layout changes. Production build and browser confirmation remain pending. In particular,
the 1002-pixel canvas target within a 1280x800 browser view has not yet been confirmed in a
browser. Do not treat these checks as final acceptance.
