# Current 28-room assessment run

This run covers the current 28-room campaign in its roster order. Historical 23-room records and
published outputs remain unchanged. The scoring method and formulas remain those in the canonical
[difficulty rubric](../../DIFFICULTY_RUBRIC.md); this run applies that rubric to the current roster
and paths.

## Evidence and first pass

`snapshot.json` and `observations/source_binding.json` are manager-side provenance material. They
are not part of the first-pass handoff. Each first-pass assessor receives the rubric, the typed
[assessment contract](../../../devel/difficulty/types.ts), and only the current and earlier
chronological observation packets. Do not provide source, route solutions, existing reports, or
future-room packets before that room's first-pass record is locked. Lock each room before beginning
its second pass.

The rubric's two comparison axes and formulas are unchanged. Record unknowns as `null`; prior
exposure is an opportunity to learn, not proof of mastery. These expert estimates do not measure
player success, enjoyment, time, or frustration. Automated captures show idle room states and
visible interface evidence only; they do not establish a complete route or a human player's response.

The capture produced one JSON packet per room and three local PNG frames per packet. PNGs are
ignored by Git and are not linked here. The capture used the full roster, kept the optional Hint
closed, and pressed no game keys. Later rooms were selected using synthetic prior-room completion
IDs only to reach their menu entries.

## Commands

Run from the repository root. Snapshot and capture commands refuse to replace existing run evidence.

```sh
node --import tsx devel/assess_difficulty.ts snapshot --run-dir docs/difficulty_runs/current_28
node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/current_28 --url http://127.0.0.1:8127/
node --import tsx devel/assess_difficulty.ts prompt level_XX --pass first --run-dir docs/difficulty_runs/current_28
node --import tsx devel/assess_difficulty.ts lock level_XX --run-dir docs/difficulty_runs/current_28
node --import tsx devel/assess_difficulty.ts prompt level_XX --pass second --run-dir docs/difficulty_runs/current_28
```

First-pass records belong in `first_pass/`; immutable locks belong in `locks/`; second-pass records
belong in `levels/`. The accepted historical material under the former 23-room paths is preserved.
