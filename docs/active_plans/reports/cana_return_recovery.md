# Cana returning boomerang: recovery experiment deferred

This report records a difficulty experiment that was withdrawn before the final
build. The source reproduction established a real outcome: with Isp holding STOP,
Pac crosses the hall, waits until simulation time 4 seconds, and jumps to x570 on
the console. The returning boomerang hits at 5.50 seconds with Pac at x566.33,
y394. After 800ms of neutral input, Pac dies at x515.42, y551.58. This uses normal
player input and `step_game`, without position or transient-state edits.

The user distinguished avoidable idle death from a defect and retained it as an intended
challenge. The route has a visible warning and demonstrated counterplay: Pac can dodge or
steer away, while Isp and Pac can cooperate. In the observed
counterexample, countersteering right for 400ms saves Pac. The normal route with
STEADY silences the boomerang and passes. These observations establish available
responses, but do not prove that the encounter is entertaining or fair for players.

An experimental `ledge("return_catch", 460, 500, 90)` prevented the idle death in
the same scripted sequence. We withdrew it because it reduced the intended room 19
danger without sufficient evidence that the reduction improved play. Stable room 19
retains its original platform layout; this recovery ledge is removed before the
final build. This source change was not released in `dist/`.

The independent stable room 13 organ mapping remains in its separate source file
and is unchanged by this experiment.

Evidence and checks:

- The original source reproduction showed Pac dying after the late approach and
  neutral wait; rightward countersteering for 400ms saved Pac.
- The experimental ledge avoided that death, which motivated the proposed recovery
  but did not establish a need to reduce the challenge.
- At the time of this experiment, rooms 17 and 19 had passed the reported 4558 browser checks
  and final acceptance was still underway. Subsequent final-build acceptance is recorded in
  [overnight_encounter_browser.md](overnight_encounter_browser.md).
- `npx tsc --noEmit -p tsconfig.json` and source formatting passed.
- Source lint passed. A temporary forced ESLint parse used unsupported syntax and
  was excluded; it was not a game failure.

No build was run for this correction.
The plan-specific `tests/_temp/cana_return_recovery.mts` source probe was removed at closeout
after its observations were recorded here and final browser counterplay was verified separately.
