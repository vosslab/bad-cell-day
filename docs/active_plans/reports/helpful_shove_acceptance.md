# Helpful SHOVE exploration

Status: `DONE_WITH_CONCERNS`. Root rejected a required SHOVE jump and closed this exploration.
The accepted Cargo feedback milestone is also `DONE_WITH_CONCERNS`; the continuous game goal remains
`ACTIVE`. This exploration asks whether Cana's existing temporary SHOVE can give Pac a useful,
funny long jump while Isp uses a distinct, reciprocal route.

## H1: isolated feasibility

- `helpful_shove_motion`: checked the prior production-simulation evidence and stopped before
  duplicating its probe, as root directed. It records about 53 px of added travel and only 20
  sampled successful jump ticks, from 58 ms before to 100 ms after the hit. Same-lane Isp jump
  support bypasses the shove. This is not a fresh trace or human playtest. State: COMPLETE;
  recommends rejecting SHOVE as a required crossing.
- `helpful_shove_campaign_fit`: read-only review of production levels and campaign fit. Assess
  distinct routes and meaningful roles for both heroes. It found no deliberate Pac SHOVE jump in
  the 31-room campaign; related target-line and cargo consequences already occur in rooms 27-28.
  A required SHOVE route risks a narrow timing check or a route-policing rule, with no distinct
  campaign consequence established. State: COMPLETE; recommends no room on this basis.
- Root: read both H1 reports and the prior feasibility/spotlight evidence; rejected the required
  SHOVE route. State: COMPLETE; DONE_WITH_CONCERNS.

The central question was whether a generous ordinary-input range makes antagonist help funny,
keeps misses recoverable, and gives both heroes useful work. Existing evidence answers against
using SHOVE as a required crossing: its sampled timing is narrow, an Isp-supported jump can bypass
it, and campaign review found no distinct room consequence. The motion report did not create a new
prototype or new recoverable-miss trace. These results do not establish whether a different,
optional use of SHOVE would be enjoyable. Do not add a forced hit quota, alter engine physics or
timing, add randomness, replace a good room, or expand shared types/configuration.

## H2: rejection decision

After reading both H1 reports, [cana_delivery_feasibility.md](cana_delivery_feasibility.md), and
the `tests/_temp/reciprocal_spotlight_probe/REPORT.md` evidence, root rejected the required SHOVE
jump. Current movement and effect values add no basis for reopening it. Do not add an engine buff,
forced hit, or quota to make the candidate work. Spotlight remains rejected and is not promoted
as a fallback. The production roster remains at 31 rooms; no production owner or H3 acceptance
work is started.

- Feasibility and campaign-fit evidence: H1 owners; prior simulation results and read-only review;
  COMPLETE at `tests/_temp/helpful_shove_motion/REPORT.md` and
  `tests/_temp/helpful_shove_campaign_fit/REPORT.md`.
- Select or reject: root, after both H1 reports and existing candidate evidence; REJECTED.
- Production and acceptance: not authorized after rejection; NOT STARTED.

These paths record ignored temporary evidence; they are not canonical documentation. No changelog,
source change, build, or test run is part of this rejected read-only exploration. The continuous
game goal remains active; consult prior candidate history before choosing another mechanic.
