# Backseat Driver production evaluation

**Status:** Root accepted the production integration as `DONE_WITH_CONCERNS` at 2026-10-18
04:37:11 UTC. The room is integrated at position 46 of the 50-room campaign. This bounded
acceptance does not establish a full 50-room journey, human playability, discovery, or enjoyment.

**Later revision:** Root accepted the Hint clarity revision as `DONE_WITH_CONCERNS` at
2026-10-18 07:10:04 UTC after SPEC, QUALITY, and final integration acceptance. The integration
review records a bounded caveat: the current diff alone cannot prove when existing per-view
reduced-motion helper work changed; prior records identify it as already accepted. This is a
temporal attribution caveat, not a functional finding. The original accepted copy and evidence
below record the prior production revision. See the separate
[hint clarity plan](backseat_driver_hint_clarity.md), [implementation report](../../../tests/_temp/backseat_hint_clarity_implementation/REPORT.md),
the [root evidence record](../../../tests/_temp/backseat_hint_evidence_record/REPORT.md),
[integration report](../../../tests/_temp/backseat_hint_integration/REPORT.md), and
[closeout report](../../../tests/_temp/backseat_hint_closeout/REPORT.md).

## Authored room

Add **Backseat Driver** as stable `level_50`, brain position 11 / campaign position 46, after
`level_38` / Jump to Conclusions and before `level_29` / Changing Places. Preserve the previous 49
room definitions and relative order; the tumor finale `level_20` moves to position 50.

Copy fixture `tests/_temp/tandem_shove_control_recovery/candidate.json` exactly (SHA-256
`c14626593e78804701337c709ebe77a3a2a8535652683a1c638cc22919845070`) for geometry, spawns,
platforms, exits, empty arrays, and Cana's recurring boomerang. Add only the approved passive Sparks:
Isp's `upper_route_blue` at `(650,225)` and Pac's `lower_route_orange` at `(650,395)`. Keep both
villain actors in the scene. The approved copy is:

- Title: **Backseat Driver**
- Subtitle: `Borrow a shove. Split the landing.`
- Hint: `Pac carries Isp. Take Cana's right-going shove, then Pac jumps for the lower fold. Isp jumps off high for the upper fold. Missed? Use the lower return fold to get back together.`
- Gem: `You're letting HER drive?` / `Fine. I'll walk.`
- Cana: `One express shove. Keep your limbs inside.` / `Those were supposed to be crash landings!`

No engine feature, additional trigger, or interruption quota is part of this room.

## Feasibility evidence and limits

The accepted fixture run used ordinary fixed-step inputs and captured full per-frame traces. A
current-source replay then imported `LEVELS` at stable position 46 and reused the same ordinary input
schedule with fresh `create_empty_input` objects at every frame and deep-copied trace rows. Both
routes completed at the same frames, and both authored Sparks were collected in each route. The
runner and control run-length encoding are retained in `tests/_temp/backseat_driver_implementation/`.
The [implementation report](../../../tests/_temp/backseat_driver_implementation/REPORT.md) records
the route results, control intervals, preservation checks, hashes, and validation limits.

The clean route received an actual Pac SHOVE at frame 252, released controls for 16 frames, jumped at
frame 269, kept Isp aboard at Pac's frame-315 apex, and landed Pac at x485.833 on `lower_landing`
at frame 361 and Isp at x530.358 on `upper_fold` at frame 395. Both exits completed at frame 515
with zero deaths.

The retry route caught an actual short launch on `return_step` at frame 361, used an ordinary jump
and airborne left steer to return to `launch_deck` at frame 429, stopped at x269.75, and let Isp
restack at frame 441. A second actual SHOVE at frame 574 led to the same 16 released frames and
split landing; both exits completed at frame 837 with zero deaths. The earlier controller failure
and missing-gem invalid case remain preserved in `tests/_temp/tandem_shove_private_trial`.

The root-accepted native current50 source check passed 96 checks, the canonical site build passed,
and the standard browser suite passed 2 checks. The browser receipt reports interval totals of 635
and 957 frames including 120 appended held-right frames; its exact 515-frame clean-route prefix was
still playing, so the extra interval is evidence of completion under that replay rather than proof
that all 120 frames were necessary. The native trace records an actual `RETURN_STEP` catch, not a
direct floor catch. The 16-frame release is a simulation sequence, not a human timing or
accessibility standard.

Root personally reviewed six final original captures and accepted the shared flight, split landings,
return-step scene, completions, and reduced-motion view, with small label overlap and Cana UI left
edge clipping as nonblocking concerns. Fresh SPEC, QUALITY, and integration reviews accepted the
integration with concerns. The browser captures and review reports are in
`tests/_temp/backseat_driver_capture/` and `tests/_temp/backseat_driver_{spec,quality,integration}/`.
The seeded prior completion records enabled entry to this late campaign room; they do not prove an
unseeded full 50-room journey. No human fun, discovery, timing comfort, fairness, universal recovery,
or live human playtest result is claimed. The frozen 46-room assessment remains historical evidence.
