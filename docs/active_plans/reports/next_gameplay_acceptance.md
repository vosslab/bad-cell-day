# Next gameplay acceptance

Status: DONE_WITH_CONCERNS. Fresh integration accepted with concerns and no blockers; manager
acceptance: DONE_WITH_CONCERNS.

## Scope

Investigate the next gameplay milestone after the accepted Living Sound milestone. Preserve the
continuous goal of fun and unpredictable play, distinct paths and useful work for both heroes,
active recurring villains, and the anatomical body setting. O1 sets a bounded opening redesign
after review of the next candidates.

Pre-change Living Sound source baseline:
`e0931606c9f2003e4c08483949614a8088b8701506223350e5b0823e6e738da3`.
Pre-change Living Sound map baseline:
`255eaaa613355d68604b3259ebb238ce55e835999d2e4b9291b49aeec5d65873`.

## Investigation

- Cooperative novelty design (`next_coop_design`): report complete; no new room selected.
- Opening pacing probe (`opening_pacing_probe`): report complete; 14 fixed replays match production.

These lanes were parallel evidence gathering. O1 selects the scope; O2 selects the pad geometry.

Probe evidence: `level_01`'s 32.45-second serialized route is not an intrinsic minimum. One legal
joint-first-cycle route takes 16.075 seconds, including 6.45 seconds of passive ascent. An
8-second period shortens that route to 11.283 seconds but lets the distant Isp miss initial
boarding. The full-width pad also causes early edge contact while Isp ascends and is rejected. O2
selects a local pad rectangle `{x: 20, y: -8, width: 160, height: 8}`. First contact occurs while
Isp descends, within 8.34px of the deck, using normal pad semantics. The prompt-complete ordinary
route takes 13.55 seconds; the recovery route takes 22.408 seconds and waits 5.0 seconds for the
inset lift. The full-width candidate waited 4.4 seconds. These routes do not establish an exact
feet-supported gate. The design lane rejects a collapse-key candidate as too similar to Return to
Sender; a midshaft cargo reversal remains untested. Reports remain in
`tests/_temp/opening_pacing/REPORT.md` and `tests/_temp/next_coop_design/REPORT.md`.

## Decision and review

- Manager decision O1: redesign boarding and pacing in existing `level_01`; do not add a room or
  reorder the campaign. Preserve all 26 stable IDs and leave shared engine, audio, runtime, and save
  behavior unchanged.
- O2 geometry: attach the existing glucose RESTORE pad as an `any` latch with `minWeight: 2`, retain
  its effects, set the lift period to 8 seconds, and inset the pad to local rectangle
  `{x: 20, y: -8, width: 160, height: 8}`. Once RESTORE latches, the lift keeps running; a fallen
  hero can wait at the side for its return.
- O2 routes: 13.55 seconds ordinary and 22.408 seconds for recovery, with 5.0 seconds of inset-lift
  waiting. Fourteen fixed replays and the production fixture match.
- Production owner: `opening_lift_production`, limited to `levels_tutorial.ts` and level 01 dialogue
  in `villain_scenes_tutorial.ts`.
- Deferred: additive collapse-key cooperation repeats Return to Sender; midshaft cargo reversal
  remains untested.
- Production: frozen in `levels_tutorial.ts` and `villain_scenes_tutorial.ts`.
- Source hashes: level `66bd8f4f75058f0d3a348f6d64d00e27a3ffa625cf80b1ef11aafb7ca345e411`;
  scene `e42f5deb697fee740c52b9520a56e3768b1378e6ea2cce5007c096203a5950a4`.
- Specification review: ACCEPT.
- Quality review: ACCEPT with no blockers; the optional wording precision note follows the explicit
  one-cell waiting copy and observed asynchronous boarding. Source remains frozen.
- Integration review: ACCEPT_WITH_CONCERNS, no blockers or missing approved scope.
- Manager acceptance: DONE_WITH_CONCERNS. The continuous game goal remains ACTIVE.

## Checks

- Evidence claims: production fixture matches O2; exact-foot gate remains unclaimed.
- `./check_codebase.sh`: PASS (two TypeScript configurations, lint, format, 78 Node checks).
- Current accepted built main `4c8dc19159400dd81794ece1ba771f39ea229f8cc92238bcaaaf111a5ac02763`;
  map `af9576858617c474e7cebd4c2f8e612e93cd4c222af3853515301935fca062d1`. Official build and
  unchanged permanent smoke: PASS (2/2, no rebuild).
- The source map embeds both changed files and preview 8127 serves matching HTTP 200 bytes.
- Fresh SPEC: ACCEPT; independent production replay completes prompt in 13.55 seconds and recovery
  in 22.408 seconds with no dead states. Thirty-three focused Node checks pass. The current
  physics, mechanisms, and interference hashes match preproduction; audio/runtime/app/save match
  the accepted Living Sound source. The corrected prompt and recovery collection report (3 items
  each; `orange_balcony` false) matches raw results.
- Focused browser acceptance: DONE_WITH_CONCERNS. Attempt 03 passes 20 recorded entries (15 normal,
  5 reduced motion), with empty error/request/console arrays. The first-four-room journey produces
  a 363-byte earned save; four Replay entries stay visible and the reloaded save is identical.
  Short miss passes in normal and reduced motion. Later fall, 4,992ms side wait, reboarding, and
  completion pass in reduced motion; independent source simulation covers recovery. Do not infer
  every recovery in both modes or 20 unique scenarios. Attempt 02's Replay-helper mismatch and raw
  failure remain recorded. Browser evidence is under `tests/_temp/opening_lift_browser/`; helpers
  are archived and owned port 8156 is stopped.
- Empty-save first-four-room progression and four-earned-entry reload checks: PASS. A full 26-room
  replay is not required because only level 01 changes and the other 25 definitions and shared
  engine stay exact; this acceptance is scoped accordingly.
- Full Python suite: PASS, 1,981 passed in 2.14s using
  `source source_me.sh && python3 -m pytest -q tests`.
- Fresh integration review: ACCEPT_WITH_CONCERNS, no blockers.
- Manager acceptance: DONE_WITH_CONCERNS.
- Documentation check: final local links, ASCII, line width, and whitespace checked.

## Handoff

O1/O2 acceptance closes this opening-lift milestone while continuous game development remains
ACTIVE. Preserve these limits: pad contact can latch before Isp is feet-supported; a normal-mode
built-browser later-fall recovery was not run; no full 26-room traversal was needed or claimed.
Feet partly overlap the RESTORE text while riding, a nonblocking clarity concern without measured
discovery failure. Human discovery, enjoyment, novice difficulty, and paired-keyboard comfort
remain unmeasured. The browser helper mismatch in attempt 02 remains a raw harness failure;
corrected attempt 03 passes. Do not treat scripted operability as evidence of human enjoyment or
paired play.
