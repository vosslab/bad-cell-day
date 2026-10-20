# Elevator Overlook production milestone

**Status: accepted with concerns.** Root accepted the bounded `level_10` milestone as
`DONE_WITH_CONCERNS` at 2026-10-18 02:59:08 UTC after fresh SPEC, QUALITY, and integration reviews
accepted with concerns. The broad continuous-game goal remains active.

## Delivered behavior

The shared lift, STOP, Pac STEADY, and Isp RESCUE sequence remains the cooperative core. After
RESCUE, Isp can jump from the bridge to the upper bone shelf `(985, 230, 115, 18)` and exit
`(985, 170, 42, 60)`; Pac takes the separate lower exit `(930, 250, 42, 60)`. Cana stands on her
separate perch `(1030, 100, 70, 14)`, with scene feet at `(1060, 100)`. Her recurring boomerang is
aimed at `(900, 285)`, with cooldown `1.3`, windup `0.9`, speed `210`, radius `12`, and starts on
STEADY. Both villains are active. Cana's opening is `Top floor! My boomerang has right of way!`;
the hint describes the two routes, Cana's pressure, the upper-floor cue, and retry.

The change adds two ledges: Isp's shelf and Cana's perch. All other original level platforms, pads,
gates, hazards, Sparks, spawns, and schemes remain intact, as do the other 47 rooms, roster order,
engine, renderer, types, and state. The split finish supports distinct actor roles, Cana's attack adds
active pressure, and the perch separates her from Isp's landing.

## Evidence and review

- The `REPORT.md`
  records clean completion in 11.383 seconds and a miss-and-retry completion in 15.150 seconds.
  Both ordinary-input runs have zero deaths and one of two Sparks; the recovery trace records Isp's
  grounded miss at `x=937.66, y=274`, a supported retry, and actual DIZZY and SHOVE effects.
- The `REPORT.md`
  records zero deaths and zero page or console errors. Root reviewed all six originals and accepted
  the sampled visuals with concerns: the exits and shelf are traceable and the effects are distinct;
  residual label overlap and minor far-right/top decoration clipping remain. The fresh capture
  records the grounded missed-shelf state at `x=935.91, y=274`. An earlier frame-1116 image showed
  Isp airborne at `y=191.50`; it is historical evidence, not the final grounded-miss capture.
- The `REPORT.md`,
  `REPORT.md`, and
  `REPORT.md` all accept with
  concerns. Root reports 96 code checks passed, the official build passed, and both standard browser
  smokes passed on source `f046d7bf830fc00e59e7760a8bc4c2488f37d7892cd1287b0a8f2d4028ddb342`,
  scenes `132030b20ecd1e8bcea18f28151db4e0728dca401ac858b4bbdadbed5ed67381`, and build
  `b1b43cd51f8ced8e53fbd53dfdec3a25149278a4eb9093dc6cf61685f58e1be8`.

The initial crowded layout with Cana at y=230 and Pac's exit at x=1030 is the rejected visual
candidate documented in the `REPORT.md`.
The later `REPORT.md` uses
the final x=930 exit and y=100 perch; it is a private candidate record, not the rejected layout.

## Limits

The routes and captures establish bounded feasibility and sampled presentation. They do not establish
that players will discover the route, find it fair or comfortable, enjoy it, or recover from every
possible fall. Human first-play outcomes and the complete 48-room journey remain unmeasured. No
permanent level-specific test was added for this authored-data change.
