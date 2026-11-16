# Gem floor recovery

## Scope

Determine whether level_32 remains completable after ordinary Pac movement knocks Gem
off the ferry onto `safe_floor`. Use native simulation only and preserve the exact loss
prefix, up to three continuation schedules, and all outcomes in `tests/_temp/gem_floor_recovery/`.

## Steps and gates

1. Record the authoritative live level definition hash and confirm the untouched reference evidence.
2. Reproduce a settled Gem floor loss using ordinary controls; freeze that exact input prefix and frame.
3. Continue the same state through at most three purposeful schedules using ordinary controls only.
4. Record relevant bubbles, ferry/POWER state, upper-latch and door events, both hero states, and exits.

Complete when a continuation reaches both exits, or when three schedules have run and the
result is reported as unrecovered/unknown with every schedule and trace retained. This
simulation does not establish human playability or player comfort.

## Result

The source level hash is `9cebfeb6d7ee740a3f6d6752824b455fda641f20bb6680ceddc841bd4f288e0e`.
Pac-right for 198 fixed steps first lands Gem on `safe_floor` at frame 198; one neutral
step settles it at frame 199 (Gem x=403, y=494, vx=vy=0). No authored barrier prevents
this loss. The frozen trace is `tests/_temp/gem_floor_recovery/loss_prefix.json`.

Three continuation schedules ran from that prefix. Attempts 1 and 2 did not open the
upper latch. Attempt 3 let a floor bubble lift Isp onto the upper route, opened the latch,
and briefly reached Isp's exit, but the fixed schedule carried him past it before Pac
arrived. One ordinary-input extension of attempt 3 retained the latch but did not move
Pac beyond Gem at x=678 or bring Isp back past Gem to the bubble target under that
schedule. The trace records Pac-right+jump for 60 frames but does not serialize Pac's
interference effect; the stationary position alone does not establish a jump or control
defect. Neither hero completed the run. The bounded result is unrecovered/unknown; these
traces do not prove that the level is permanently trapped, and no geometry remedy is
supported here. See `tests/_temp/gem_floor_recovery/REPORT.md` for the attempt summary.

Commands used and results: `node --import tsx tests/_temp/gem_floor_recovery/run_native.mjs prefix`
exited 0. The same command with `attempt_1`, `attempt_2`, and `attempt_3` exited 1 because
both exits were not reached; the final `attempt_3` artifact includes the extension, and
`attempt_3_endpoint_before_extension.json` preserves its earlier endpoint. No browser,
human-playability, or full-suite gate was run.
