# Crossfire room prototype

## Status and goal

Status: PHASE_A_NATIVE_EVIDENCE_COMPLETE; ROOT_DECISION_KEEP_DONE_WITH_CONCERNS. Phase A was a private go/no-go prototype for a playable,
comic room where villains can foil each other. Root approved this plan with the idle-safety and
handoff requirements below. If Phase A works, root may authorize a separately stated production
Phase B. The earlier mechanic-only experiment and its limits are in the
[native report](../../../tests/_temp/villain_crossfire_experiment/REPORT.md).

## Prototype contract

Use public `create_game_state`, `create_empty_input`, and `step_game` with ordinary inputs at fixed
1/120-second steps. In the ignored trial only, a private after-step hook may change only active
Gem's `velocity.x` by `sign * 260` on confirmed Cana-boomerang circle/body contact, on either leg,
at most once per flight. Use the existing nearest-point circle/AABB check; add no geometry helper or
production state.

Build on anatomy assets and ordinary level fields. Pick no room ID, campaign order, or art. Find a
setup where one useful hit produces an immediate, readable acid payoff. Show Gem's four-second
return and resumed bubble attack. Isp needs a separate FLOAT-supported route and real cooperative
job; Pac needs meaningful positioning and a distinct route. Include a legal ordinary both-exit
clear, a missed-shot case, and recovery. Crossfire may be a useful or comic option; it need not be
the sole solution. Add no dunk-detection state or gates. Also run hook-ON with empty inputs for
several throws; Gem must stay safely at home without contact or dunk.

## Phase A evidence and decision

Edit only this plan, its status/evidence ledger, and ignored
`tests/_temp/crossfire_room_prototype/`. That folder may contain private `.mjs` helpers, logs, and
`REPORT.md`; do not edit production source, types, registry, assets, options, save behavior, build,
browser code, or permanent tests. Preserve a unique attempt and runner/level snapshot for each
trial. Compare matched same-level, same-input hook-off and hook-on runs, and record hit time and leg,
Gem's setup, dunk and home return, bubble recurrence, both hero jobs, ordinary clear, missed shot,
and recovery.

Use one coherent candidate. If contact, payoff, routes, or roles need layers of exceptions to work,
set it aside. Stop after the native evidence handoff for root's go/no-go decision; do not run a second
round of broad reviews for this ignored prototype. Any production proposal needs a separate root
authorization and its own production gates. Record the native evidence handoff in
[`tests/_temp/crossfire_room_prototype/REPORT.md`](../../../tests/_temp/crossfire_room_prototype/REPORT.md).

## Phase A evidence ledger

The private native candidate and its preserved trial logs are recorded in the
[Phase A report](../../../tests/_temp/crossfire_room_prototype/REPORT.md). The final matched pair,
26-second idle check, and missed-shot recovery run completed with process exit status 0. Native
Root's bounded Phase A disposition is KEEP / DONE_WITH_CONCERNS for production preparation. Root
approved and froze the separate production contract in [Cana's Friendly Fire](friendly_fire_room.md)
with status `ROOT_APPROVED_PRODUCTION_PREPARATION`; this authorizes a fresh implementation handoff,
not production acceptance. The missed-shot run recovers Gem but ends at 16 seconds without either
exit, so implementation must establish a complete recovery clear. Native evidence does not
constitute player testing or establish human discovery, readability, or fun.
