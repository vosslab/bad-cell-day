# Heavy sac loss continuation

## Status and current decision (2026-10-18)

Root accepted this evidence-only recovery investigation as DONE_WITH_CONCERNS at 21:52:46 UTC. The actual frame-231 loading-loss state completes through ordinary inputs without Restart: both heroes reboard the ferry, occupy DELIVER, open the exit lane, and clear both exits. The heavy sac remains on the floor, and the heroes alone satisfy DELIVER. Keep the existing level geometry; this evidence does not warrant a geometry fix. The earlier failed dock-access probe below is preserved as a failed attempt and is superseded by the actual-state route. Evidence is native source-module simulation only, not browser or human-play evidence.

## Question

Can both heroes finish registered level 56 after the retained paired-loading mistake drops the
heavy sac, by continuing the same state and using the static upper route?

## Method

`tests/_temp/heavy_sac_loss_continuation/runner.mjs` selects `level_56` from registered `LEVELS`,
creates one fresh state, and replays the ordinary 110-frame paired-right load followed by 120 more
paired-right frames. It then continues that same state with `create_empty_input` and `step_game` at
1/120 second. There is no restart, state write, effect change, or pad injection. The upper-route
controls come from the retained current-57 probe at
`tests/_temp/current57_heavy_route_probe/inputs_final.json`.

Run with:

```sh
npx tsx tests/_temp/heavy_sac_loss_continuation/runner.mjs
```

The registered runtime source inputs have SHA-256 values recorded in the runner evidence context:
`src/levels.ts` `f54132f2d360d15c21509f62b59d492bb479fbb057cb881805f9b57dc879cf87`,
`src/levels_final.ts` `dcfc69c40a2fcad4eb5c1e3b258d038fbf8383e30cd228fc82648fbb678678cf`,
`src/level_heavy_thought.ts` `c08fdd5c09341571636f6df8bd93bbb734d7be3b46dda9baa7bac4fa39d65ee6`,
`src/game_state.ts` `74139380ca0a96681dce36b20888edf13243a97410fdca7129b6be5e8ce0464c`,
`src/physics.ts` `1ce24601c4f099ca737ab03eeb8d7e5e98e2e164596d9401214035615cdf84e8`,
`src/mechanisms.ts` `33f3dcb7ee11d50f12d3e16c569e9c3fbc70af4c78b772fd275e51abf85c17a`, and
`src/characters.ts` `b9e81009603bd5667f8adea4476adcd49b1fc5b8f2de95971c1203ca5102d4ec`.
The accepted frozen build remains `dist/main.js` SHA-256
`5ff3526ce96cfca76a383b99edabdfa183e59736701a0bd3d2bf02afe4f0d3ef` and map
`3e971938ed3036b821ae9ba9446a315fef4fb9f98503d0c3102d953eb977e6c9`; this probe exercises
registered source modules, not the browser build.

## Earlier failed continuation (superseded)

The intended loading prefix reaches sac x=335 on the ferry at frame 110. At frame 230, the extra
paired-right input drops it to x=527.5, y=502 on the floor. The checkpoint is alive, with no deaths,
no pad weight, and the exit lane closed.

This probe did not complete both heroes. Returning left leaves them at x=260 and x=290 on the lower
floor, against the right side of the loading dock. They do not reach its top or the first elevated
fold. Replaying the clean upper-route intervals from that stranded configuration consequently
walks at lower level and never activates DELIVER; the run remains `playing` with both exits false.
The trace preserves the original failed direct replay and subsequent dock-access attempts in
`trace_attempt1.json` through `trace_attempt4.json`; the latest checkpoints and compact interval
input log are `trace.json` and `inputs.json`.

The observed barrier is the raised loading dock's vertical side: after the ferry fall, the heroes
are on the floor beside it, while the fold route begins above the dock. Tested paired and separate
jump inputs at the dock's right edge returned both heroes to their floor positions. This establishes
that the known static route is not a demonstrated recovery from this loading error. It does not
prove that no other maneuver can recover the state. A narrow gameplay option for review is a sloped
or stepped connection from the lower floor back onto the loading dock; no geometry change is made
here.

## Earlier next decision (superseded)

Review whether this mistake must remain recoverable without Restart. If yes, consider a small
floor-to-dock return step and then repeat the same actual-loss continuation with ordinary controls.
If not, preserve the geometry and treat Restart as the current recovery. This scripted evidence does
not establish human discoverability, fun, or whether the mistake is fair in play.

## Correction: ordinary recovery from the actual loading loss

The geometry probe in tests/_temp/heavy_sac_loss_geometry/runner.mjs continued the same registered
level_56 state from the frame-231 loss checkpoint. At that point the sac is grounded on the floor at
x=527.5, y=502; Isp is at x=482.5, y=473.25 and Pac is at x=497.5, y=514. Both heroes remain
outside the ferry's right edge for a paired vertical jump, then steer left. They are grounded on the
stationary ferry at frame 369. From there ordinary inputs reach the first fold and the retained upper
route. The first fold also requires approaching its right edge from below, rising until the hero clears
the platform, then steering onto its top. The crossing jump needs enough horizontal travel to enter
the platform before descending to its side.

The probe command npx tsx tests/_temp/heavy_sac_loss_geometry/runner.mjs exited 0. The same state
reached complete at frame 2463 with both atExit flags true. At frame 2414 both heroes occupied DELIVER,
giving weight 2 and opening the exit lane. The sac remained on the floor at x=527.5, y=502 through
completion. Thus the retained loading mistake does not prevent both exits: the heroes can reboard and
complete via the upper route, and the two heroes themselves satisfy DELIVER. This confirms recovery
and also shows that this level's completion path does not require delivering the heavy sac. It remains
source-module simulation evidence, not a browser or human-playability result; no source or build files
changed.
