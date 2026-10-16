# Baited boomerang acceptance

Status: ACCEPTED_DONE_WITH_CONCERNS. The bounded geometry correction, build, smoke, five focused
browser cases, fresh SPEC, fresh 27-room campaign, full Python suite, fresh QUALITY, and fresh
integration pass. Integration found no blockers; the manager accepts the B1/B3/B4 milestone as
DONE_WITH_CONCERNS. Initial warning/weapon crowding remains a nonblocking concern. Campaign
evidence custody is complete. Human enjoyment, discovery, paired-play comfort, and current
numerical difficulty remain unmeasured. Continuous gameplay remains ACTIVE.

## Goal and baseline

Improve fun and cooperation by giving partners a readable opportunity to turn Cana's attack into
a route. Preserve the accepted 26-room campaign, stable IDs, and its established play. The prior
`level_01` joint-boarding and pacing milestone is accepted; its ledger is
[next_gameplay_acceptance.md](next_gameplay_acceptance.md).

Pre-milestone accepted 26-room baseline: main
`4c8dc19159400dd81794ece1ba771f39ea229f8cc92238bcaaaf111a5ac02763`, map
`af9576858617c474e7cebd4c2f8e612e93cd4c222af3853515301935fca062d1`. The fixed 26-room
screenshots remain the default. These hashes and preservation claims are supplied baseline facts;
this ledger has not independently reverified them.

## Candidate hypothesis

Explore whether Cana snapshots the nearest hero at windup, visibly locks that aim, then throws and
recalls one boomerang. A partner could intentionally bait the committed path to open a distinct
route. B1 approved and the engine lane implemented the typed contract; B3 accepts the corrected
prototype for production. Delivery acceptance and human enjoyment remain unproven. Do not add
random targeting, a patrol framework, or new states without a demonstrated need. Limit a villain
to one attack per room to avoid the known render-first-attack-pose issue.

## Investigation lanes

- Room design (`baited_boomerang_design`): concrete room choice, distinct routes, mistakes, and
  insertion point while preserving all 26 rooms. DONE; the manager accepts the delivered B1/B3/B4
  milestone as DONE_WITH_CONCERNS.
- Engine boundary (`baited_boomerang_engine`): read-only ownership map and typed proposal. DONE.
- Contract implementation (`baited_boomerang_contract`): B1 contract in
  `src/types/interference.ts`. DONE.
- Engine implementation: contract applied in `src/interference.ts` and `src/weapon_pose.ts`, with
  two stable behavior tests added to `tests/test_interference.mjs`. DONE.
- Route feasibility (`baited_boomerang_feasibility`): isolated nearest-mode route replay and
  temporary sketch custody. B3 prototype proof DONE.
- Production (`attention_please_production`): B3 source and registry implementation DONE.
- B4 correction (`attention_perch_correction`): DONE_WITH_CONCERNS. The bounded source patch and
  candidate route proof are recorded below; no engine/config/range change.
- Final focused browser (`attention_perch_browser`): five B4 cases PASS; final report is
  DONE_WITH_CONCERNS with helpers archived and port 8158 stopped. Initial upper-lock
  branch/weapon/AIMING contact crowding remains a nonblocking concern; the actual left dodge clears
  it. No range or rendering change is selected.
- Final campaign browser (`baited_boomerang_campaign`): fresh 27-room campaign, Trial, and old-save
  compatibility PASS on the B4 build; archival custody and port 8159 cleanup are complete.

The engine report is at `tests/_temp/baited_boomerang_engine/REPORT.md`, the engine handoff at
`tests/_temp/baited_boomerang_implementation/handoff.txt`, and the completed design report and
`room_sketch.ts` are under `tests/_temp/baited_boomerang_design/`. The fixed placeholder sketch
does not use nearest mode. The authoritative B3 fixture and its route evidence are in
`tests/_temp/baited_boomerang_feasibility/`; all final route files use that fixture. Temporary
proof does not establish human fun and is not a permanent test. Invite challenge and clarification
when an assumption lacks evidence.

## Decisions and gates

- **B1 contract decision:** Approved for playable feasibility and implemented. Only Cana boomerang
  targeting uses `aim?: "nearest"`; the required authored target remains its rest pose. The
  transient attacker may hold `lockedTarget?: Readonly<Vec2>`. At windup, snapshot the nearest
  eligible hero center from Cana's authored anchor; ties select Isp. Both heroes remain eligible
  while playing, including `atExit`. Keep the snapshot through flight, catch, and cooldown; clear
  it on start, interrupt, boss defeat, and reset, and replace it at the next windup. Shared attack
  geometry accepts an explicit target so warning, muzzle, release, and catch agree. Existing
  static aim remains the default. The A0 intermediate contract-source digest is
  `8ff09261c485d4f345e8cda0ab6b5430ad8d2d2e896d73f03ed904a401a926ca`; the engine lane then
  implemented the contract in the interference and weapon-pose modules.
- **B3 room decision:** Accept `level_27` after `level_22` and before `level_19` (position 25),
  preserving the previous 26 room definitions and relative order. B3 production implementation is
  complete; this does not establish final delivery acceptance.
- **B4 correction:** Change the single `upper_bait` rectangle from x=600, width=150 to x=550,
  width=200, keeping y=360, height=20, right edge 750, and Cana at (720, 360). This makes the
  ordinary upper dodge move left instead of crossing Cana. A built screenshot showed the current
  rightward dodge hides the warning where the actor and weapon overlap. B4 route proof and the
  source patch are complete. Do not change the engine, attack config, or range.
- **Room acceptance:** Fresh SPEC accepts B4 with no blockers or drift. The campaign and focused
  browser lanes pass. Fresh integration ACCEPTS WITH CONCERNS without blockers; the manager accepts
  this B1/B3/B4 milestone as DONE_WITH_CONCERNS.
- **Design report:** DONE. The emerging room route uses a no-pad physical boost: Pac drops the
  upper sac to Isp, then Isp uses it to climb; the heroes take separate high and low exits. The
  fixed sketch does not include nearest mode. The original six floor-Cana cases remain retained.
  The main floor-Cana handoff took 10.642s; a no-retreat race took 8.750s without an extra hit.
  This shows the prescribed retreat did not add value. It does not establish a stronger puzzle or
  support campaign insertion.
- **B2 iteration:** The first upper-perch handoff at `(650, 360)` took 8.492s. B2 requested
  `(720, 360)` to give actor/Pac room and clear floor cargo. This evolved into the corrected B3
  prototype below.
- **B3 accepted prototype:** Cana stands at `(720, 360)` on the real upper perch. Pac's natural
  movement draws the next shot while Isp continues cargo work; no prescribed retreat or wait is
  needed. The ordinary route fixture specifies the mechanics exactly. Gem retains parameters
  `450/300` and now uses real `gem_perch` geometry `(405, 300, 90, 20)`. No new physics rule is
  introduced.
- **Target readability:** One upper-flight snapshot lasts about `0.16s`; the warning lasts
  `1.2s`. B3 screenshots show the current rightward dodge hides the warning in actor/weapon overlap.
  B4 shifts the upper route left. Do not add an arbitrary range gate. The optional zero-hit
  experiment failed and remains unclaimed.
- **Acceptance questions:** Does baiting create distinct, intentional routes beyond the accepted
  [Return to Sender room](return_to_sender_acceptance.md)? Can both heroes make consequential
  choices? Is the committed aim legible before release? What common mistakes and recoveries follow?
- **Engine questions:** The read-only ownership investigation and approved implementation are
  complete. The feasibility report covers warning, muzzle, release, catch, and lifecycle reset.
- **Source approval:** Production is in `src/level_attention_please.ts` and registered in
  `src/levels.ts`. B4 changes only the approved room geometry; engine, attack configuration, and
  range remain unchanged. Fresh SPEC and QUALITY accept; full Python passes and integration
  ACCEPTS WITH CONCERNS without blockers.
- **Build and browser:** Preserve B3 receipts as historical evidence. The official B4 build and
  smoke, five focused cases, fresh 27-room campaign, Trial, and old-26-room-save compatibility
  pass. Focused review has a nonblocking contact-crowding concern cleared by the ordinary left
  dodge. Preserve fixed 26-room screenshots by default.
- **Campaign and save preservation:** The fresh B4 run earns all 27 rooms in exact order, preserves
  all Replay entries and identical earned-save bytes across reload, and retains Trial plus old-save
  compatibility. The B4 SPEC also confirms prior room definitions/order and unchanged dependencies.

## Evidence record

- Design investigation: DONE. The report and `room_sketch.ts` are under
  `tests/_temp/baited_boomerang_design/`; the sketch is a fixed placeholder and does not use
  nearest mode.
- Engine investigation: DONE. Manager reports baseline tsc and 14 interference checks passed.
  The report is `tests/_temp/baited_boomerang_engine/REPORT.md`; exact commands and hash were not
  supplied here.
- Manager room/contract decision: B3 approved the corrected prototype for production implementation
  as `level_27` at position 25. The final B1/B3/B4 delivery is accepted as DONE_WITH_CONCERNS.
- Type contract implementation (A0): DONE. `src/types/interference.ts` intermediate digest
  `8ff09261c485d4f345e8cda0ab6b5430ad8d2d2e896d73f03ed904a401a926ca`; exact tsc, lint, and
  format checks pass.
- Engine implementation: DONE in `src/interference.ts` and `src/weapon_pose.ts`; two stable
  behavior tests are in the existing `tests/test_interference.mjs` suite. The handoff is at
  `tests/_temp/baited_boomerang_implementation/handoff.txt`; the temporary helper is archived.
- Focused verification: PASS. 16/16 interference tests and 53 focused checks pass; exact tsc,
  lint, and format checks pass. Commands and final source hashes were not supplied here.
- One-time preservation comparison: all 26 static rooms and the Trial match states and poses
  across 381,600 frame comparisons. This is source-comparison evidence, not ordinary gameplay or
  campaign acceptance. A separate engine pad replay is diagnostic only.
- Route feasibility: B3 prototype ACCEPTED FOR PRODUCTION. The authoritative fixture is
  `tests/_temp/baited_boomerang_feasibility/final_fixture.json`, SHA-256
  `efd5d850cbbee16c676ea0bf3e171760e6bd6d944173d83900931259b275df74`. The matching evidence is
  `tests/_temp/baited_boomerang_feasibility/FINAL_REPORT.md`, `final_metrics.json`,
  `final_replay_results.txt`, and `final_{main,mistimed,missed_upper,right_miss}.json`.
- Four independent ordinary routes complete without reset: main 8.383s, mistimed 13.058s,
  missed-upper 12.083s, and right-miss 13.375s. Natural movement replaces the retreat tax. The
  initial diagonal can SHOVE Pac safely, and the upper lock leaves a fixed safe lane while Isp
  finishes cargo work. The previous six floor-Cana cases remain retained.
- The optional zero-hit final experiment failed. Do not claim zero-hit completion. The observed
  upper flight after one snapshot is about 0.16s; the warning lasts 1.2s and needs built-browser
  readability review. No range gate is approved.
- B3 source: `src/level_attention_please.ts` SHA-256
  `86bdf6f268acbf908d7d1a04dceb7976c3e7eeab709834a9d292fe711bee512f`; `src/levels.ts` SHA-256
  `291f16e48fef4df1357fdf514f6ca3daa23459e00d3ce00a082bd309a21c5718`.
- Root checks: `./check_codebase.sh` PASS, including both TypeScript configurations, lint, format,
  and all 80 Node tests.
- B3 official build: PASS. Main SHA-256
  `528fcd3b376d2a13f1ff02c485cd65c6c73300ca3a98d57ea424ab2e52861cbd`; map SHA-256
  `6b98a04fa360fac3ddbb40112eff38921544a28f624a297c0633beafa38d75d9`. Receipt:
  `tests/_temp/attention_please_build/receipt.md`. Standard smoke passes 2/2.
- Fresh SPEC: ACCEPT at `tests/_temp/attention_please_spec/REPORT.md`. It replays all four
  production routes and confirms the previous 26 definitions, order, and dependencies remain intact.
- B3 focused browser: five cases PASS, with a visual concern that Pac, Cana, and the weapon crowd
  the upper-perch warning. Two honest helper-failure attempts remain in
  `tests/_temp/attention_please_browser/REPORT.md`; port 8158 is stopped and the temporary helper
  is archived. This concern requires B4 and renewed focused acceptance.
- B3 campaign attempt 02: PASS on the B3 artifact. A fresh empty save earns and retains all 27
  Replay entries across reload, Sound is on, progression uses one Play and 26 Next actions, the
  finale ends with no Next, and no errors are reported. B3 Trial and old-26-room-save compatibility
  also PASS. Preserve attempt 01's raw helper failure at new level 27.
  `tests/_temp/baited_boomerang_campaign/STATUS.md` marks attempt 02 superseded after the planned
  correction. These are B3 historical results; rerun on the B4 artifact.
- B4 correction: DONE_WITH_CONCERNS. `attention_perch_correction` records the proof and source
  change in `tests/_temp/attention_perch_correction/HANDOFF.md` with
  `archival_receipt.json`. Only the approved `upper_bait` rectangle changed; engine, attack config,
  and range remain unchanged. Recovery approaches clear the ordinary wider-perch underside; no
  new physics was added.
- B4 source: `src/level_attention_please.ts` SHA-256
  `d47281987e4f9371e002d95f3966da5ae89357dd22feab2bcdf72685bf32f5fd`.
- B4 candidate fixture: `tests/_temp/attention_perch_correction/candidate_fixture.json`, SHA-256
  `a12fdf86987208bc129cfcf0fd77a6f9e50af865060b60040067d7bce630e6a7`. It independently completes
  four ordinary routes in 9.008333s, 14.108333s, 13.391667s, and 15.133333s; production source
  matches the fixture exactly. Older failed controller attempts remain preserved.
- B4 checks and build: fresh `./check_codebase.sh` passes with both TypeScript configurations,
  lint, format, and all 80 Node tests. Official build and unchanged smoke pass 2/2. Main SHA-256
  `c673bcf4e19c001db96c7b49ef52d8ee1c32211be86d1361e8830ecfe99b7027`; map SHA-256
  `d57791f5f289ae44722061b62b070f850d83a3e4a907c52c1564471bd98a79c9`. Receipt:
  `tests/_temp/attention_perch_build/receipt.md`. Runtime modules match the source map; declaration
  types are erased as expected. Smoke port 8160 is stopped; port 8127 is preserved.
- Fresh SPEC: ACCEPT, no blockers or drift, at `tests/_temp/attention_perch_spec/REPORT.md`.
  Independent proof replays all four production routes and 16 interference cases, confirms the
  unchanged 23 dependencies and registry reconstruction, checks the actual left dodge and resets,
  and verifies seven evidence archives.
- Fresh focused browser: all five cases PASS. The final report is DONE_WITH_CONCERNS; actual left
  dodge clears the initial upper-lock branch/weapon/AIMING overlap, and contact crowding remains
  nonblocking. All five helpers are archived and port 8158 is stopped.
- Fresh campaign browser: `finalfreeze02/campaign03` PASS on the B4 artifact. Trial and old-26-room-
  save compatibility also PASS. All five campaign helpers are archived; port 8159 exited 0 and
  port 8127 remains preserved. The B3 campaign result above is historical evidence.
- Fresh QUALITY accepts with no blockers or drift; its report records source/fixture/artifact
  binding, stable behavior tests, route distinction, and browser screenshots.
- Production-level insertion: B4 source registers `level_27` after `level_22`, before `level_19`,
  at position 25. Preserve the earlier 26 IDs/order and save schema v1.
- Fresh campaign: PASS. From an empty save, all 27 rooms earned in exact order with one Play and
  26 Next actions; all Replay entries remain visible before and after reload, and earned save bytes
  are identical. The finale reaches SHUTDOWN and ending with no Next; no console, page, or resource
  errors were reported. Trial and old-26-room-save compatibility also pass. All five campaign
  helpers are archived and the owned server is stopped.
- Full Python after browser-helper archival: PASS. Command `source source_me.sh && python3 -m pytest
  -q tests` exits 0 with 1,982 passed in 3.46 seconds.
- Fresh QUALITY: ACCEPT, no blockers or drift, at `tests/_temp/attention_perch_quality/REPORT.md`.
  It freshly binds the nearest opt-in behavior to the fixture, source, and artifact; confirms the
  two stable behavior tests and distinct physical boost/cargo/bait route; and reviews the actual
  PNGs. Contact crowding remains nonblocking.
- Fresh integration: ACCEPTS WITH CONCERNS, no blockers, at
  `tests/_temp/attention_please_integration/REPORT.md`. It confirms source and artifact provenance,
  route/geometry/preservation evidence, full campaign, Trial, old-save compatibility, reset
  behavior, and evidence custody. Initial warning/weapon crowding remains a nonblocking concern;
  no source, rendering, or range change is needed.
- Final manager decision: ACCEPTED; milestone status DONE_WITH_CONCERNS. The continuous game goal
  remains ACTIVE. Human fun, discovery, paired comfort, and numerical difficulty remain unmeasured.
  No mandatory-baiting, zero-hit, or exhaustive-recovery claim is made.

Record only exact commands, hashes, outputs, reviewer findings, and manager decisions when
provided. Do not claim that scripted evidence establishes human understanding, enjoyment, or
paired-play comfort. Update [gameplay_direction.md](gameplay_direction.md) and settled design or
usage documents only after manager decisions and acceptance support those updates.
