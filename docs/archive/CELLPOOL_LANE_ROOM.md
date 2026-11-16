# Cellpool Lane production plan

## Outcome and status

Implement **Cellpool Lane** as stable `level_43`, stage `liver`, after `level_30` and before
`level_32`. Root approved production addition as `KEEP_WITH_CONCERNS` at 2026-10-17 11:42:58 UTC
and accepted the production milestone as `DONE_WITH_CONCERNS` at 12:06:45 UTC.
Preserve all 42 existing serialized definitions and their relative order, with finale `level_20`
last. The current41 difficulty assessment remains frozen to its captured baseline. This production
milestone does not claim human readability, discovery, fun, or difficulty results.

## Approved room contract

Add `src/level_cellpool_lane.ts`, exporting `CELLPOOL_LANE_SCENE` and `CELLPOOL_LANE_LEVEL` with id
`level_43`, title `Cellpool Lane`, and stage `liver`. Register it in `src/levels.ts` immediately after `level_30` and
before `level_32`. Copy the corrected private geometry and mechanics, including its visible gates,
reciprocal latch pads, recovery floor, and return fold. The sole geometry adjustment is to widen
`pac_exit_route` from x=700 to x=1100 (width 330 to 400) for a stable exit. Reuse existing liver
organic art. Add exactly two optional sparks on the existing final paths: Isp at (930, 220), Pac at
(930, 400), each with a unique ID. Add no engine, shared type/state/configuration, asset, or tool
changes.

Use subtitle `Share the flight. Open each other's exit.` The Hint describes Isp riding Pac, jumping
with right-going Cana's throw, Isp jumping from Pac to the high route, each latch opening the other
exit, and the return fold allowing another try. Cana opens with `Two passengers? I charge extra!`
and ends with `That was almost on purpose.` Gem opens with `You call THAT public transport?` and ends
with `Two exits. Still no tip.` Preserve existing position and color schemes.

## Owners and acceptance

A fresh source owner handles only the new module, `src/levels.ts`, and temporary scratch work. A
separate user-documentation owner updates the README, usage guide, and level difficulty roster for
43 rooms: brain 30-42, tumor 43, liver 19-29. Keep the current41 assessment historic; do not refresh
the full difficulty assessment for this room.

Native evidence must show an ordinary clear, preserved 42-room baseline/order, and a miss, regroup,
and next-throw recovery. After fresh SPEC review, run the exact six fresh QUALITY passes (Plan, Test,
Style, Docs, Legacy, Comment), then fresh integration review and root acceptance. Root owns full code
and build checks plus two standard browser smokes. Use the existing capture tool for focused browser
views of the normal route and SHOVE/shared landing and miss-recovery sequence as needed. Confirm
source, built, and served identity. No new capture interface, permanent room-copy or tuning tests,
save/Next checks, mobile gate, or full difficulty refresh are required.

## Failure handling and limits

If native mechanics, recovery, or preserved definitions fail, stop acceptance, correct the owning
source, rebuild, and repeat affected checks. If browser input timing fails, preserve the run evidence
and diagnose coarse held-key timing before considering a gameplay change. Invite questions that
clarify, challenge, or revise requirements; escalate unsupported requirements for a decision.

The production milestone is accepted as `DONE_WITH_CONCERNS`. The integrated 43-room roster places
`level_43` at position 23 and keeps `level_20` last. Native, browser, root code/build, two standard
smoke, six fresh QUALITY, and integration gates passed. Root viewed the ordinary clear, SHOVE, miss,
regroup, later SHOVE, and same-run recovery clear. These scripted checks do not establish human
readability, discovery, fun, or difficulty. The current41 difficulty assessment remains frozen;
`level_43` is unassessed, and the Level 3 lateral cause remains unresolved. The continuous gameplay
goal remains active.

The private corrected fixture has SHA-256
`85178e1d780a54abcf403f79f7f9d153c0cc1b7a9931f49adc28a6a02ec49490`. Its normal and recovery
replays and two lane probes pass; fresh SPEC, QUALITY, and integration reviews accept, and root's
independent four-case replay passes. Those observations do not establish human readability or fun.
The Level 3 lateral cause remains unresolved.
