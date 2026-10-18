# Hero stride poses

## Outcome

Add two authored, distinct stride SVG poses for each hero (four assets) and select them only
during solo, grounded running: `abs(velocity.x)` above near-zero, alive, not at an exit, with no
interference, held-pad, or acknowledgement-feedback cue. Derive the cycle from world position so
stationary heroes and paused play keep one pose. Suppress the ordinary idle bob and squash during
stride. Keep the canonical fallback while assets load.

Preserve face and body identity, planted-sole alignment, collision brackets, and the priority of
support, effects, pads, death, air, ready, and reduced-motion cues. Add no clock-based animation,
history, state, configuration, types, or physics changes. Leave all 51 room definitions and their
order as they stood in the shared worktree immediately before this stride pass (including accepted
rooms 47-51 and the level 16 foreground); this is not a comparison against `HEAD`.

## Decision and rationale

Root chose this bounded global locomotion-feedback pass over the proposed level 27 replacement.
Original puzzle preservation and novelty relative to **Knock It Off** remain unresolved. This choice
does not claim a human finding about fun or playability. Consult the bounded source-priority and
movement reports under `tests/_temp/campaign51_*`; do not extend their claims beyond their evidence.

## Ownership and sequence

- Art: Astra creates four new SVG assets and a private art report, following the SVG skill.
- Integration: Luna owns character selection/cache, `render_characters`, and build asset copying;
  final checks wait for the art assets.
- Evidence: Luna owns private captures after the build.
- Reviews: fresh SPEC, then QUALITY, followed by the user's six-pass audit and final integration.
- Root runs code/build/smoke checks and personally reviews the original images.

Invite clarification, challenge, decision, or escalation during implementation; at checkpoints,
agents should state their interpretation and apply and verify the approved constraints.

## Acceptance route

Root reports typecheck, lint, format, SVG XML and asset-reference checks, build, and two standard
browser smokes passed. The focused capture receipt records 9 views, exit 0, and zero retries or
errors; its final view shows Pac STICKY. The pause trace records 31 identical asset and position
draws per hero while paused, followed by 20 stationary draws selecting each canonical asset.
Root reviewed all nine corrected and original captures plus the final art contact sheet, and accepts
the sampled visuals with concerns. Permanent tests, dependencies, and Git/index state remain
unchanged. All six audits are complete; substantive findings are closed via correction SPEC and
QUALITY. Final correction QUALITY accepts, and final integration accepts with concerns and no
material defect. Root accepts the sampled implementation and visuals as `DONE_WITH_CONCERNS` at
2026-10-18 09:00:34 UTC. The broader campaign goal remains active. Clarification, challenge, a
decision, or escalation remains welcome if new evidence changes the approved interpretation. Record
each disposition as `DONE`,
`DONE_WITH_CONCERNS`, `NEEDS_CONTEXT`, or `BLOCKED`; pending work is never reported as done. If a
check or sample fails, repair the owning boundary, rerun that failed check or affected sample, and
keep acceptance pending until it passes. If a dependency is missing, record that gap instead of
inventing evidence.

This document records approved scope only. The broader campaign goal remains active; all 51 rooms
remain unchanged by this stride work.
