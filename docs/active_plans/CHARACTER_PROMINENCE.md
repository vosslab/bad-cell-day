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
- [reports/CHARACTER_PROMINENCE_LEDGER.md](reports/CHARACTER_PROMINENCE_LEDGER.md) for evidence and
  milestone status.
- [../HUMAN_GUIDANCE.md](../HUMAN_GUIDANCE.md) records the user's stated priority.

## Completion checks

- Heroes and villains are substantially more prominent in rendered gameplay; faces remain readable
  and molecular silhouettes remain recognizable.
- Crowded, narrow, boss, and desktop views retain a useful cooperative puzzle overview.
- Physics and cooperative gameplay behavior remain intact; relevant build, checks, and browser
  review pass.
- Fresh specification, quality, and integration reviews accept the result.
