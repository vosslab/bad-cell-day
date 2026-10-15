# Character prominence

## Goal

Make the player characters and villains substantially larger and more noticeable during play,
with readable faces and their molecular silhouettes intact. Preserve physics and the cooperative
puzzle overview.

## Approach

1. Inspect current character size, framing, available viewport space, and representative crowded,
   narrow, and boss scenes. Use the evidence to choose sizes and any framing changes.
2. Implement the visual changes while preserving collision and gameplay behavior.
3. Review actual rendered screens at desktop sizes and in the representative scenes. Run the
   relevant build/check/browser workflow; address visual or gameplay regressions.
4. Complete fresh specification, quality, then integration reviews.

## File scope

- Character rendering and related layout sources identified during inspection.
- [CHARACTER_PROMINENCE_LEDGER.md](../active_plans/reports/CHARACTER_PROMINENCE_LEDGER.md) for evidence and
  milestone status.
- [../HUMAN_GUIDANCE.md](../HUMAN_GUIDANCE.md) records the user's stated priority.

## Completion checks

- Heroes and villains are substantially more prominent in rendered gameplay; faces remain readable
  and molecular silhouettes remain recognizable.
- Crowded, narrow, boss, and desktop views retain a useful cooperative puzzle overview.
- Physics and cooperative gameplay behavior remain intact; relevant build, checks, and browser
  review pass.
- Fresh specification, quality, and integration reviews accept the result.
- After final acceptance, move this plan to `docs/archive/` with `git mv` and repair its relative
  links. (Completed 2026-10-14.)

## Current status

Implementation and rendered acceptance are complete. The final visual review passed at four
viewports, including all 20 opening scenes and all 40 opening quips. It also confirmed readable
faces and separate identity labels at both horizontal edges, physical-foot cues, clear level 6
opening bubbles, and usable views of narrow, crowded, and boss scenes. The canvas art center clamps
horizontally while physical feet and foot cues stay fixed. Current speech bubbles use bounded
candidate positions to avoid both characters and prior bubbles; a bubble is omitted if none fits.
All 40 current opening quips fit and were shown.

Fresh specification, quality, and integration reviews accepted the respec and current source.
Integration confirmed that the final `dist` hashes and four source-map modules match the visual
report. Final acceptance is complete, and this plan is archived. The visual evidence and limits
are in [CHARACTER_PROMINENCE_VISUAL.md](../active_plans/reports/CHARACTER_PROMINENCE_VISUAL.md).
