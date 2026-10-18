# Liver tissue profiles

## Current status

Root accepted the bounded liver profile milestone as `DONE_WITH_CONCERNS` at 2026-10-17 16:19:53
UTC. The exact original Astra candidate is promoted to `src/assets/liver_tissue_surface.svg`; its SHA-256 is
`cb5ac8e30bbce1e3366811d0d3ae7793a0a8658e81c4fcc2f65c6583c151d2ee`. The source SVG hash before
promotion was `fc64f8e2995937335b0e5958620525de2f5a861a0586bb05ca9ef8bfa7c2fc8c`; the private
candidate and promoted source hashes match afterward. The current assembled game remains 44 rooms,
including 12 liver rooms, and its serialized `LEVELS` JSON matches the artist's pre-art snapshot
(`b2d95de68263ddae82c228720a965462b6c6f78d298550d40e9c51935abf5bb2`). Root's code/build checks,
both standard smokes, served-asset identity, seven focused views, and direct visual review passed.
The [acceptance report](../reports/liver_tissue_profiles_acceptance.md) records the evidence and
limits. The broader continuous gameplay goal remains active.

## Goal and context

Improve the existing liver surface art so its platforms read as swollen, organic tissue at game
sizes, rather than textured boards. Preserve the exact landing rims and collision geometry. This is
a visual hypothesis, not a gameplay defect. The earlier atlas milestone is complete; this plan
covers one narrowly bounded follow-up to `src/assets/liver_tissue_surface.svg`.

The accepted atlas milestone and its [acceptance report](../reports/liver_tissue_acceptance.md)
record the existing artwork and its limits; this plan preserves those historical decisions and
receipts. The `tests/_temp/organic_platform_profile/REPORT.md` documents the renderer contract: a
128x120 SVG atlas is clipped to each platform rectangle, with a
20 px thin crop and a 96 px deep crop; a 3 px Canvas band defines the landing edge. The asset can
change visible shape and masses within that rectangle, while drawing outside it is clipped. The
current 44-room assembly has 12 liver rooms; inspect those rooms as well as the smallest and deepest
crops.

## Approach

1. [x] Record the current SVG hash, match it to the built asset, and save transient copies of the
   SVG and assembled level definitions for comparison. Use current built-game Step On It captures as
   the baseline where they apply. The accepted original-atlas hash is
   `fc64f8e2995937335b0e5958620525de2f5a861a0586bb05ca9ef8bfa7c2fc8c`; source and distribution
   matched at that milestone.
2. [x] Execute the root-authorized private original Astra artwork for the existing SVG only. Build
   three fused hanging masses per thin/deep cell pouch, with meaningful 14 px folds rather than
   whole-organ bulges. Keep the viewBox, crop coordinates, horizontal tile continuity, alpha clipping
   contract, and clear continuous landing rim. Make the organic change visible at actual game sizes,
   not only through finer veins. Keep the art fictional and anatomy-inspired, not a medical diagram;
   add no animation. Root accepted the corrected candidate for production proof at 2026-10-17
   16:11:42 UTC; the exact candidate was promoted without modification.
3. [x] Artist structural validation and actual-destination crop renders passed. Root's seven focused
   built-game views cover Step On It initial, Gem step, FLOAT, and clear; Cellpool Lane, Bursting
   Point, and Gem's Liver Lair initial. Root directly reviewed all seven originals and accepts the
   visible improvement and sampled readability.
4. [x] Fresh SPEC, distinct QUALITY, and final integration reviews accept with concerns. Root's
   96-check code gate, official rebuild, and both smokes passed. Source, distribution, and HTTP SVG
   hashes match; disk and HTTP JavaScript match at
   `2d43091057039295e806bc171dd0b20dad159ef548209728344009940f96c1bb`, as expected for an external
   SVG-only change. All 71 mapped sources match with no drift.

The bounded hypothesis is accepted: larger fused folds and fuller deep masses are visible in actual
game views. Repeated tile cadence, narrow-end truncation, and limited thin-strip volume remain. Human
readability, discovery, fun, difficulty, and comfort are unmeasured. This milestone does not establish
remote publication or complete the broad gameplay goal.

## File scope

- `src/assets/liver_tissue_surface.svg`: the only proposed product change; retain its existing
  viewBox, atlas crops, and repeat edges.
- No renderer, physics, type, state, level, configuration, dependency, animation, or permanent test
  changes are in scope. The documentation closeout is recorded in the acceptance report.

## Completion checks

- [x] The original SVG has visibly larger organic folds in thin and deep crops at real game sizes,
  with the continuous landing rim preserved.
- [x] Focused built views use the changed asset and retain sampled landing and gameplay readability;
  root reviewed the original views and accepted the result.
- [x] The bounded hypothesis is accepted. The visible limits remain recorded as concerns; this
  milestone does not authorize a draw-contract change.

Invite clarification, challenges, and escalation requests at each gate. Root authorized private-art
execution for this follow-up on 2026-10-17 after accepting Step On It at 15:57:07 UTC.
