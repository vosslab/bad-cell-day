# FLOAT passenger handoff

Status: DONE_WITH_CONCERNS. 2026-10-15. Fresh SPEC, QUALITY, and integration ACCEPT; the manager
explicitly accepts this milestone with nonblocking contact-art and permanent-browser transport
concerns. Continuous game development remains ACTIVE.

## Accepted scope

Stable `level_24`, **I've Got You**, follows `level_13` and precedes `level_14` in the liver.
Pac boards Isp; Gem's FLOAT carries the passenger to the upper CROSS hold. Pac opens Isp's
separate lower route, then Isp's RECONNECT latch preserves that passage and opens Pac's upper
onward gate. The continuous safe floor and repeatable Gem ride support ordinary fall recovery,
including after RECONNECT. Cana's consequential gate scheme uses no additional projectile.

The manager accepted the [float_passenger_feasibility.md](../reports/float_passenger_feasibility.md)
candidate and placement. Production source is room-local in
[level_float_passenger.ts](../../../src/level_float_passenger.ts), assembled through
[levels.ts](../../../src/levels.ts). Existing physics, controls, shared types, saves, and anatomy
contracts remain the owners. All 23 previous assembled room definitions and their relative order
match the baseline exactly. The current 24-room order is:
`02,01,04,03,06,08,05,07,11,09,10,23,12,21,13,24,14,15,16,18,17,22,19,20`.

## Evidence and remaining gates

The source implementation and ordinary-input route are recorded in
`test-results/float_passenger/implementation/receipt.md`. The 16 ms scripted route completes in
11.432 simulated seconds. Feasibility includes 580 bounded tolerance cases, a common successful
sampled dismount interval of 0.85..1.65 seconds, five recoveries, and finite bypass probes. Not all
580 cases complete; the feasibility report records the limits. These are scripted operability
results, not novice performance or two-player observation.

Two generic physics regressions cover carried ceiling contact and jumping off a partner. Focused
source checks and 69 Node tests pass. Fresh SPEC ACCEPT independently reproduces original-room
preservation, fixture equivalence, route, tolerance rows, recovery, and finite bypass evidence.
The canonical check, frozen production build, and real-browser recovery pass. Fresh QUALITY,
integration, and manager acceptance are complete. The permanent browser suite's final
2/2 trace run leaves earlier intermittent transport failures unresolved.
Record exact artifact provenance and skipped cases in
[float_passenger_acceptance.md](../reports/float_passenger_acceptance.md).

| Gate | Status | Evidence or next action |
| --- | --- | --- |
| Feasibility and design challenge | DONE / ACCEPT | Physical carry, necessary roles, repeat recovery, and bypass investigation accepted |
| Stable ID and placement | DONE / ACCEPT | `level_24` follows `13`, precedes `14`, in liver |
| Room implementation and fresh SPEC | DONE / ACCEPT | Frozen fixture preserved except stable ID and subtitle; original 23 rooms exact |
| Canonical checks | DONE / PASS | Both TypeScript configurations, ESLint, Prettier, and 69/69 Node tests |
| Production build | DONE / PASS | Main `a7ef8689...`, map `cf61676c...`; 73 inputs / 18 served files frozen |
| Permanent browser suite | FINAL RUN PASS; CONCERN | 2/2 with original two workers; earlier resource transport failures unresolved |
| Built-browser behavior | DONE / PASS | 22 required cases, 17 completions with zero retries, normal/reduced recovery, saves/frontier, adjacent routes |
| Different fresh QUALITY | DONE / ACCEPT | No blocking findings; crowded contact art and transport concerns retained |
| Evidence custody | DONE / VERIFIED | 133 originals, 136 total archive files; exact restoration verified |
| Fresh integration | DONE / ACCEPT | Artifact, custody, preserved rooms, screenshot, and document alignment verified |
| Documentation closeout | DONE | Final paths, digest, checks, limits, and concerns recorded |
| Manager integration acceptance | DONE_WITH_CONCERNS | Explicit acceptance on 2026-10-15; continuous game development ACTIVE |

## Acceptance boundary

Run `npx tsc --noEmit -p tsconfig.json`, `./check_codebase.sh`, `./build_github_pages.sh`, and
`./run_playwright_tests.sh --build`. Inspect the actual built artifact in normal and reduced motion.
Verify both distinct routes, missed-shot recovery, post-RECONNECT reboarding, pause/resume, retry,
save/reload, and a fresh frontier. Check original-room selectability and unchanged definitions;
the room-local change calls for focused candidate and adjacent-room checks. A shared physics change
would require a separate decision, meaningful regression coverage, and full campaign regression.

Fresh SPEC, a different fresh QUALITY review, fresh integration, documentation, and explicit
manager integration acceptance complete this milestone as DONE_WITH_CONCERNS.
Fresh QUALITY accepts built stacked-sprite readability with crowded contact art as a nonblocking
concern; both badges, footing strokes, and FLOAT remain visible. The permanent-suite transport
concern remains unresolved.
Historical 23-room difficulty records remain frozen pre-anatomy evidence; `level_24` has no locked
numerical assessment. Human discovery, paired control comfort, and enjoyment remain unmeasured.

Questions, challenges, and escalation remain welcome throughout. Reopen scope decisions when
evidence exposes a shared-contract need, a practical bypass, or an unrecoverable living state.
