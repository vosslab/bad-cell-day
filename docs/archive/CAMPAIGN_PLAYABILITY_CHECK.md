# Campaign playability check

**Status: DONE_WITH_CONCERNS.** Current-source ordinary-input clear and recovery routes pass for
Cargo Exchange. The bounded investigation changes no game source, frozen current38 evidence,
campaign captures, or permanent tests. The continuous gameplay goal stays ACTIVE.

## Coverage and selection

Retained scripted playthrough evidence covers stable `level_04` (display 3: ordinary clear,
optional two-dunk clear, and retreat/recovery checks), `level_05` (display 9), `level_07`
(display 10), `level_12` (display 15: a no-cargo model proof), `level_37` (display 5), and
`level_38` (display 34). These prove only their exact authored inputs; browser routes and native
traces remain separate. Current38 has full-roster idle captures and five native traces; its
full-roster assessment and historical fullcampaign checkpoints are not a current 38-room
ordinary-input playthrough.

This check selects **Cargo Exchange** (`level_23`, current38 position 14). Its ordinal puzzle peak
is a useful observation target, not a demonstrated defect. The accepted Cargo Exchange ledger has
prior native clear and one bad-unload recovery evidence, but current-source raw route files are not
retained there. This bounded replay rechecks the two-way mandatory exchange and the concrete
unload/recovery sequence against public source; it does not reopen the accepted D0 presentation or
recommend changing its mechanics based on a score.

## Bounded method

Use public `LEVELS`, `create_game_state`, and `step_game` at fixed steps. Inputs are ordinary
per-hero movement and jump controls. Do not teleport, edit state, or inject level definitions.
Record mandatory pad/gate decisions, both heroes'
contributions, any idle time required by the route, death/retry/softlock status, and any recovery.
Test one ordinary clear and one plausible bad unload followed by the documented cargo recovery.
If a trace misses, diagnose its input/path cause before making any source-level claim.

Probe and results: `tests/_temp/campaign_playability_readiness/`.

## Outcome

**KEEP** the accepted exchange and recovery design: the ordinary route clears both exits, and the
deliberate inner-stop unload recovers to a full clear. The native trace shows two 4.2-second scripted
passenger rides; these are observed intervals, not exact minimum or mandatory human idle time. A
useful next human observation is whether both players experience the shared transit and cargo
handoff as purposeful. Native feasibility is not browser keyboard acceptance or a human play outcome.
Full route detail and limits are in `tests/_temp/campaign_playability_readiness/REPORT.md`.
