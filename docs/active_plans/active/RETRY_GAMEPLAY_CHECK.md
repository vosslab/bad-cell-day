# Retry gameplay check

**Status: DONE_WITH_CONCERNS / KEEP; root closed at 2026-10-17 12:12:29 UTC.** The continuous
gameplay goal remains active. Root independently replayed both ordinary routes at 120 Hz against the
public source: level 7 completed in 1,485 frames and level 20 in 1,326 frames, both with matching
exits. The existing Level 7 recovery fold remains preserved. Neither scout supports a production
tune; human playability and the unidentified sideways-motion observation remain open.

## Evidence and boundary

The accepted [Cellpool Lane receipt](../reports/CELLPOOL_LANE_ACCEPTANCE.md) has no unfinished gate.
The current public roster has 43 rooms. Current41 scores are historical candidate signals, not
defects. Scout traces are bounded deterministic evidence, not human playtest evidence.

Two read-only scouts independently replayed ordinary inputs at 120 Hz. Their reports and root's
independent checks establish the following bounded outcomes:

| Scout and owner | Target and evidence | Status |
| --- | --- | --- |
| Double Trouble - `/root/double_trouble_gameplay_scout` | `tests/_temp/double_trouble_gameplay_scout/REPORT.md`: level 7 cleared in 1,485 frames; premature release changed timing and prevented completion under unchanged remaining inputs, but did not demonstrate an unrecoverable loop. | DONE_WITH_CONCERNS / KEEP |
| Finale recovery - `/root/finale_recovery_gameplay_scout` | `tests/_temp/finale_recovery_gameplay_scout/REPORT.md`: level 20 cleared in 1,326 frames; one omitted jump caused a late death at frame 1,046, while a separate target-handoff error recovered and cleared in 1,431 frames. | DONE_WITH_CONCERNS / KEEP |

## Root decision

Root compared role decisions, repeated setup, recovery, and the demonstrated late failure. The 10/20
pixel cloned bridge changes did not prevent the missed-jump death; the 30-pixel change removed the
jump from the route. This evidence does not justify a production tune, so root chose **KEEP**. The
scouts establish baseline route completion and bounded failure behavior only; they do not measure
human discovery, fun, or difficulty.

The user is unsure which level or object the reported sideways motion refers to. Root distinguishes
the displayed 3 collapse bridge from the displayed 4 sideways ferry, but the identification remains
uncertain; this is not a diagnosis or authorization for a mechanic change. The continuous gameplay
goal remains active. Invite clarification, challenge, or escalation if evidence conflicts with this
bounded decision.
