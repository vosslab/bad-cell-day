# Gut Instinct Cana trial

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS at 2026-10-18 02:22:02 UTC.**

## Owner and scope

The bounded production change is in `src/level_two_lane_fork.ts`: add a recurring lower-lane Cana
boomerang deferred until `pac_lower_latch`, update Cana's opening and the hint, and mark both villains
active. Gem's bubble, actors, sac, valves, room geometry, roster, and other room definitions remain
unchanged. No engine mechanism or permanent test was added.

## Root decision and implementation

The initial unbound attack displaced the sac before Pac secured KEEP LOWER; the accepted version
waits for `pac_lower_latch`. Native fixed-step routes clear normally at frame 1816 and recover at
frame 1978 with zero deaths. The recovery trace records Cana's hit at frame 1185, the upper gate
closing at 1252, Isp stopped at x=670, and Pac's retake/opening at 1411. The built browser receipt
binds five captures to build `e116f3c0e09e2ecccf124e6d8198e2c7bc2835fd97ec2e97671fc9f22a41cbe2`
with zero retries or page/console errors; root reviewed all five images. Code checks, Pages build,
and two browser smokes passed. SPEC, QUALITY, and integration accept with concerns. These schedules
and sampled captures do not measure player discovery, readability, enjoyment, alternate-input
recovery, or the full 48-room journey.

## Evidence and next step

See the `REPORT.md`,
`REPORT.md`,
`REPORT.md`,
`REPORT.md`, and
`REPORT.md`. The broader
continuous gameplay goal remains active.
