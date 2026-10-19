# Bursting Point recovery closeout

## Result

Pac can rupture the `level_40` fragile roof, then Isp can retry the high exit using a later Gem
bubble. The roof stays open until a fresh level start. The 1.2-second collapse and other room
geometry, routes, spawns, attacks, and progression are unchanged.

## Implementation and verification

The nullable `resetAfter` contract is limited to the existing platform reset field in
[level.ts](../../../src/types/level.ts); [mechanisms.ts](../../../src/mechanisms.ts) keeps runtime
`respawnTime` numeric. Only `fragile_roof` in [level_40](../../../src/level_bursting_point.ts) uses
`null`, and its Hint says the broken roof remains open. See the
[recovery plan](../active/bursting_point_recovery.md),
[design decision](../../DESIGN_DECISIONS.md), and [difficulty baseline](../../LEVEL_DIFFICULTY.md).

Root ran `./check_codebase.sh` successfully (96 existing checks), `./build_github_pages.sh`
successfully, and `./run_playwright_tests.sh` successfully (two existing browser smokes). The
public-build capture exited 0 using bundle SHA-256
`b423e491461a360d11f9b7034825e09f29329cf5ca7c7c1cab78aca6f9230c9d` and source map SHA-256
`7e0e3799276c2c2f3d32fed234a0d5a110df5aeb51103ebe558259b218dc7a03`. Its three views had no deaths
or browser errors: a fresh intact roof, an open roof at frame 587 beyond the former regrowth point,
and completion at frame 961 via the later-bubble route. Details, inputs, receipt, and original
images are retained at `tests/_temp/bursting_roof_public_capture/REPORT.md`.

Root read the integration report and the three original public captures, found no material issue,
and accepted this bounded recovery milestone as `DONE_WITH_CONCERNS` at 2026-10-18 13:37:18 UTC.
The integration report is retained at `tests/_temp/bursting_roof_integration/REPORT.md`.

These scripted routes establish the tested recovery cases, not universal recovery or human
playability. The frozen current53 map predates the roof revision and leaves level 40 recovery
unknown; it does not score the revised behavior. The broad game goal remains active.
