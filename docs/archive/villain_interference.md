# Villain interference trial

Status: complete, 2026-10-14. Fresh specification, quality, and integration reviews accept
the implementation and final built artifact. Human play evaluation remains a separate
follow-up; no enjoyment or learning claim is established. Evidence and limits are in
[interference_ledger.md](../active_plans/reports/interference_ledger.md) and
[interference_browser.md](../active_plans/reports/interference_browser.md).

## Goal and context

Build an optional, playable Troublemaker Trial that demonstrates Gem and Cana
interference while preserving the existing 20-room campaign, its order, and its
saves. The current campaign and recurring-villain work are reported complete in
[recurring_villains_ledger.md](../active_plans/reports/recurring_villains_ledger.md). This is a
bounded experiment; no claim about player enjoyment or learning is established
until the user plays it.

The human's tentative ideas are recorded in
[HUMAN_GUIDANCE.md](../HUMAN_GUIDANCE.md). D1 settles the authored scene contract
below; geometry values remain tunables to validate during implementation.

## Scope and contracts

- Define one optional `TRIAL_LEVEL` outside `LEVELS`; expose it through the existing
  `start_level` path with a singleton allowlist. Completing it neither saves campaign
  progress nor unlocks a campaign room.
- Leave the existing 20-room campaign, its order, and save behavior unchanged.
- Use visible villains with fixed, scripted, predictable attacks; add no autonomous
  AI or attack buttons.
- Gem's authored bubble floats Isp toward the elevated latch and briefly locks Pac.
- Cana's authored boomerang travels slowly out and back; it gives Isp spin feedback
  while directional control stays reliable, and gives Pac a bounded,
  collision-respecting shove.
- The floor spans the full 1100-unit width at y=550. Pac starts at x=40 and Isp at
  x=90. Pac's hold pad spans x=125-155 at y=544 (center x=140); the entry gate at
  x=205/y=200/height=350 blocks both. Gem's bubble target is x=350/y=529.2, with its
  lane inside the gate at x=240-350. Once Pac opens the gate, Isp enters that bay,
  floats up, then steers right onto the ledge x=360-560/y=380; ordinary jumping alone
  cannot reach it. The RESCUE latch at x=420 permanently opens the entry gate and
  final gate x=600. Cana's floor lane spans x=650-990. Isp exits
  at x=1054, Pac at x=1008. Gem starts at (205,558), Cana at (615,558), with shared
  hand muzzle points at (240,529.2) and (650.2,529.2). Gem continues after the latch,
  so Pac may briefly be sticky on entry.
- Effects stay short, recovery is safe, and hits grant immunity. Pause freezes the
  trial; retry recreates it. Require both heroes to exit to complete it.
- Make all four effects easy to test. Isp's float helps reach the required route;
  Pac's lock, Isp's spin, and Pac's shove are optional and none is required to win.
- Show explicit trial completion and offer return or replay.
- Do not add reversed controls or chained stun.

## Approach and gates

1. **Use the shared execution contract.** The contract defines `types/interference`,
   optional level and simulation fields, and initializes those fields without
   player/UI fields.
2. **Implement two isolated lanes.** Simulation, renderer, room, and tests share one
   lane; Solid UI/runtime start and completion flow use the other. Keep campaign/save
   ownership intact and trial state local to the attempt.
3. **Verify behavior deterministically.** Cover both effects on both heroes, timing,
   immunity, recovery, collision-respecting shove, cooperative latch, both-hero exit,
   pause/retry reset, and campaign/save isolation.
4. **Verify the built experience.** Run existing checks and build, then a fresh browser
   pass of the trial. Complete it using keyboard input; capture screenshots showing all four
   effects and the completion/return/replay controls. Review fresh specification,
   quality, and integration passes in that order.

If a focused check fails, fix the owning behavior before proceeding. If experiments
show the underlying interference approach cannot meet the stated contracts, stop
and recommend a new design before implementation resumes. Browser completion is
evidence of operability, not a human fun evaluation.

## Execution and file scope

The execution contract comes first. The two implementation lanes have explicit file
ownership and share only their agreed interfaces; documentation proceeds in parallel.
After integrating both lanes, run the fresh browser pass, then fresh specification,
quality, and integration reviews in that order. Resolve findings before closeout. Preserve
pre-existing user changes and leave Git staging and commits to the user.

This plan owns no production files. Expected artifacts are:

- This plan: scope, sequence, evidence gates, and completion criteria.
- [interference_ledger.md](../active_plans/reports/interference_ledger.md): decisions, evidence,
  implementation state, and accepted validation results.
- [interference_browser.md](../active_plans/reports/interference_browser.md): built-browser route,
  save-isolation, visual, and artifact-provenance evidence.

## Completion checks

- The trial follows the settled authored scene contract and validated geometry.
- Focused deterministic behavior checks pass, including campaign/save isolation. A
  source-only keyboard route verifies geometry feasibility; the browser route remains
  a separate acceptance gate.
- Existing checks and build pass; browser keyboard completion, four effect
  screenshots, and completion/return/replay are recorded.
- The trial entry and play note remain visible at the 1280x800 title view.
- The user can return or replay after trial completion, and the campaign remains
  unchanged.
- Fresh specification, quality, and integration reviews accept the result.
- Any human evaluation claim remains pending until the user actually tries it.
