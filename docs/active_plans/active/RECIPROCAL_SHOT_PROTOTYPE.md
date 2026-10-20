# Reciprocal shot prototype

**Status: SET ASIDE.** Root chose to preserve current58 and return to gameplay selection.

## Hypothesis

Two ordinary nearest-target positions could let one hero draw Cana's boomerang while the other
advances, then reverse those roles. The route needed to produce two meaningfully different shot
paths and partner movement windows without a cargo, relay pad, barrier, or forced unique solution.

## Boundaries

The experiment used a private level fixture and the existing `create_game_state`,
`create_empty_input`, and `step_game` APIs at 1/120 s. It changed no production source, registry,
art, physics, shared scripts, build output, or Git index. The attempts and input traces are retained
under `reciprocal_shot_prototype`.

## Proof and result

The strongest counterexample is `direct_01`: a fresh-state ordinary-input route reached both exits
in 424 frames (3.53 s), before a shot locked. The staged paired route reached both exits in 1,601
frames (13.34 s), but waited for the first lock at frame 539 and the second at frame 1,159. Its
second lock did not establish the intended opposite shot direction. A separate ordinary route
reached both exits after the attempted fold crossing; this shows a safe-floor continuation, not a
missed-jump recovery test. The initial fold height also produced a retained 4,200-frame stalled
route. Attempts are not overwritten.

This does not establish fun, human discoverability, or that no stronger design exists. It shows that
this candidate's staged cooperation adds waiting to an unchallenging direct route, so further tuning
would need a new gameplay-selection decision. Current58 remains preserved.
