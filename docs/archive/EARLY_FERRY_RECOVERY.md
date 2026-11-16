# Early ferry recovery

**Status: DONE_WITH_CONCERNS.** Root accepted this bounded milestone at 2026-10-18 02:03:09 UTC.
This ledger covers the production update to stable lung room `level_03`, **Stop Right There!**

## Approved change

Append two static lung folds to `level_03`: `left_recovery_fold` at `{x:300,y:465,width:110,height:20}`
and `right_recovery_fold` at `{x:610,y:465,width:110,height:20}`. Keep the moving ferry, both
partner jobs, all existing room data, and every other room unchanged. Reuse existing lung tissue art.
Use the root-approved hint in the room source.

## Evidence and limits

The `REPORT.md` records
the unchanged ordinary clear at frame 1,470 and a same-run recovery clear at frame 2,211 with two
Sparks, zero deaths, and no reset; removing the folds causes the same fall schedule to die at frame
636. The `REPORT.md`
records five correctly mapped cases against `main.js` SHA-256
`9aea8c94b48d440e7583c97712bec9bf711efc8ceb6d91173ef19cef2cfe2663`; root viewed all five original
PNGs. Earlier reversed-control captures are disqualified, not game failures. The combined code gate
passed 96 existing checks plus TypeScript, lint, and formatting; the build and both standard smokes
passed. Fresh `REPORT.md`,
`REPORT.md`, and
`REPORT.md` reviews accept with
concerns.

The folds leave only 5 px between a landed hero and the ferry underside. Release STOP or wait for
side clearance when the ferry blocks a recovery jump. These scripted routes do not catch every fall
or establish human discovery, enjoyment, or a full 48-room journey.

## Ownership and dependencies

`src/levels_tutorial.ts` owns the room and its hint. The recovery uses existing collision, movement,
Gem bubble, STOP, ferry, and RESCUE behavior; no new engine, type, state, configuration, or asset
behavior is authorized. Historical difficulty packages remain unchanged.

## Completion gates

- [x] Approved scope recorded and production room updated.
- [x] Production native baseline and recovery routes, code gate, build, two standard smokes, and
  corrected browser captures are recorded above.
- [x] Fresh SPEC, QUALITY, and integration reviews accept with concerns.
- [x] Root accepts the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 02:03:09 UTC.
