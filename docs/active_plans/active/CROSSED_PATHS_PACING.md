# Crossed Paths pacing probe

## Decision

Keep the current level 22. This private probe found no demonstrated player-facing pacing problem that warrants a production change. The tested 8-second candidate is 1.5 seconds faster than the workable 10-second baseline schedule, but the minimum wait and human comfort are unknown. The probe is closed: preserve every trace; do not rerun, rejoin, or promote the candidate.

## Evidence boundary

Use the accepted `routes.level_22` schedule at ordinary 120 Hz input. The original 500-frame neutral segment is script padding, not evidence that the lift itself requires 500 frames of waiting. First compare the unmodified level using that schedule with a single earlier neutral duration chosen from the lift phase and boarding geometry. Then compare the period-8 clone using the same shortened schedule. If a landing is missed, allow at most one comfortable timing adjustment for that variant and retain the failed trace. Do not sweep periods or wait durations.

## Method and safeguards

Each trial starts with a fresh `create_game_state`; inputs pass through ordinary `step_game` calls with `dt=1/120`. Do not inject state, disable attacks, reset, or change anything except the private candidate lift period. Preserve a definition hash for the registered baseline and candidate. Record both exits, deaths, lift occupancy/boarding/handoff timing, active attacks, and safe landing/rejoin windows.

## Interpretation

The 420-frame schedule clears both periods at 1,702 frames. This same-wait comparison shows equal elapsed route time at that schedule; it does not prove period 8 has no speed benefit elsewhere. At 240 frames the baseline fails at frame 1,546 and period 8 completes at frame 1,522. The two periods are the intended treatment, not an unfair or confounded comparison. The 240-frame point is not a minimum-wait or human-comfort finding. Native traces do not establish player experience.

## Probe result

The tested period-8 candidate clears 1.5 seconds faster than the workable 420-frame, period-10 baseline schedule. The fixed 420-frame comparison itself gives equal 1,702-frame routes for periods 10 and 8. These native results do not establish that players experience a pacing problem or prefer the candidate. **Decision: keep the current level unchanged.** Evidence and retained traces: `REPORT.md`.
