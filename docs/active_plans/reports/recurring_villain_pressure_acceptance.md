# Recurring pressure acceptance

2026-10-15. Status: **DONE_WITH_CONCERNS; MANAGER ACCEPTED**. D1 mechanics, authoring, presentation,
tests, partner poses, and the local browser-server repair pass their fresh source SPEC and distinct
QUALITY reviews. Canonical checks/build, focused built-browser cases, the isolated trial, the
final synthetic pose matrix, and the fresh continuous 24-room campaign pass. Archive custody
is verified. Fresh independent integration ACCEPTS WITH CONCERNS, and the manager explicitly
accepts and closes this milestone. Continuous game development remains ACTIVE. The mandatory
shared Podman disk-budget gate passes at the latest recorded observation, so feature development
may proceed again. This record makes no human-play or new numerical difficulty claim.

## Frozen candidate

| Identity | Value |
| --- | --- |
| Main SHA-256 | `6571ce6ff561d87e3acdcb1a0ab773d8ecbc45c400aebf1d91a753c95045739c` |
| Source-map SHA-256 | `b3509b9757f251e234d71b9ebf92d855566fb25815fad00142d06204a36a8a4b` |
| Input manifest SHA-256 | `8e1be0908dd9088ab5b3396de7364f16082ade623a34e911deae793a02652e4e` |
| Frozen inventory | 183 inputs; 44 map entries, including 42 local source files; 22 served files; 17 SVGs |
| Manifest | `test-results/recurring_pressure/pressure/candidate_build/frozen_manifest.json` |
| Build receipt | `test-results/recurring_pressure/pressure/candidate_build/completion_receipt.json` |

The final official build is unchanged after freeze. Exact TypeScript checks and the canonical
codebase check pass with 78 Node tests. The production build passes. The permanent browser suite
passes 2/2 with its original two workers; both-page instrumentation records 16 HTTP 200 resources
and zero page, console, request, or HTTP errors. Four additional built smokes cover normal/reduced
motion in fresh room 02 and seeded room 24, including actual boarding and rise. All 17 SVGs
decode and all 22 served files match the frozen candidate.

Executed build/check entry points are `./check_codebase.sh`, `./build_github_pages.sh`, and
`./run_playwright_tests.sh --build --output=tests/_temp/recurring_pressure/candidate_build/permanent`.
That historical output now resides under the archive mapping below.
The build receipt preserves the initial macOS Chromium sandbox failure and a temporary relocated
config cwd failure beside the corrected successful run. Neither is reported as a product failure.
No distribution rebuild follows the freeze. After final archive custody and temporary-tree cleanup,
the manager reruns `./check_codebase.sh`: both TypeScript configurations, lint, format, and all
78 Node tests pass. This fresh codebase check is separate from the full Python result and the
independent integration verdict below.

## Implemented D1 behavior

Authored `startsOnPadId?` and `interruptedByPadIds?` replace the prior enabling/disabling names
without aliases. Runtime attackers require `started` and `usedInterruptPadIds`. An encounter
without a start pad starts immediately; each of the five start controls starts its encounter once.
After start, an attacker consumes all active unused interrupt IDs together, cancels only its own
flight, and resets its existing full cooldown, followed by its full windup. The start/interrupt
tick does not decrement that reset. Holding, latching, or reentering a used pad does not interrupt
again; a different bound pad retains its own one use per attempt.

Shared eligibility requires playing state, an undefeated boss, and a started runtime attacker.
Missing runtime state is ineligible; a missing attacker has no weapon pose. Dead/completed states
do not advance. Earned boss defeat clears flights and action markers while already applied effects
recover. Pause freezes state and retry creates fresh attempt state. `release | catch | interrupted`
markers distinguish natural catch from cancellation; `waiting` and `interrupted` replace
`silenced`. Interruption reuses the existing 0.35-second recovery and windup takes priority.
Countered puzzle schemes keep their separate reactions while weapons recharge and recur.

The authoring receipt proves normalized identity of all 24 definitions: only the exact field
renames and seven hints in `01,02,04,05,06,07,19` change. Geometry, room order, effects, attack
lanes/timing, mechanism update order and its one-substep observation lag, physics, controls, and
save schema remain protected. There are 16 attacks in 14 rooms, five start bindings, 14 authored
interrupt lists, and 16 attack/pad pairs. Room 13 BUBBLES and room 24 LIFT retain causal roles.
No new timer, phase, or persisted field is added.

Fourteen meaningful interference tests protect the mechanic/lifecycle boundary. Source
presentation evidence covers 61 recursively frozen Canvas-call cases. A separate synthetic
all-attack exercise records 48 resumed shots across all 16 attacks; this is a fixture proof,
not 16 ordinary gameplay routes. Fresh SPEC followed by different QUALITY accepts the coherent
source batch; source acceptance does not replace the browser gates below.

Authoring proof is `test-results/recurring_pressure/pressure/authoring/authoring_receipt.json`;
presentation proof is `test-results/recurring_pressure/pressure/presentation/verification.txt` with
`proof.json` and `drawing_traces.json.gz`. The durable behavior tests live in
[test_interference.mjs](../../../tests/test_interference.mjs). The shared source owners are
[interference.ts](../../../src/interference.ts), [weapon_pose.ts](../../../src/weapon_pose.ts),
and [types/interference.ts](../../../src/types/interference.ts). Fresh source review outcomes
are independent verdicts received by the manager in the root transcript from
`/root/recurring_pressure_source_spec` and `/root/recurring_pressure_source_quality`; they are
not standalone report files. These verdicts establish source acceptance; the built-browser lanes below establish operability.

## Built-browser evidence

The following lanes use the same frozen candidate and retain their failed harness attempts.

| Lane | Result | Retained evidence |
| --- | --- | --- |
| Focused pressure/recovery/lifecycle | PASS; all 24 required cases across attempts 02/03/04; 29,329 readonly samples; 59 screenshots; zero collected errors | `test-results/recurring_pressure/pressure/focused/report.txt`, `summary.json` |
| Isolated trial | PASS; normal/reduced motion crossed with fresh/nonempty save; four runs, 44 screenshots; zero collected errors | `test-results/recurring_pressure/pressure/trial/acceptance.json` |
| Continuous campaign | PASS; fresh Play plus 23 Next actions, all 24 completions, finale, 24 Replay entries and byte-identical reload | `test-results/recurring_pressure/pressure/campaign/report.txt`, `summary.json`, `fresh_04/results.json.gz` |
| Final pose matrix | PASS; 11 geometry/terminal, eight temporal, five loading scenarios | `test-results/recurring_pressure/partner_poses/final_matrix/receipt.txt`, `matrix.json` |

Focused summary SHA-256 is
`60ab0a80931803b90b898fcb262e3e39dba43c6574db0dd28671ddf81380b3e9`.
Its coverage map identifies the successful record for every required case; preserved `pass:false`
records remain exact. Focused runs verify all frozen inputs, map parity, 22 local/served file
hashes, and 17 decoded SVGs. Owned server 8137 is closed; preview 8127 is preserved.

Room 24 completes in both motion modes after nominal rides and four recoveries: missed boarding/
STUCK, late boarding, early CROSS release, and falling after RECONNECT. Each recovery earns a new
ride. Actual FLOAT pause/resume retains support/riding art; the intentional retry resets state
and another ride succeeds. The old frontier fixture proves `13 Replay -> 24 Ready -> 14 Locked`,
then room-24 completion makes `24 Replay -> 14 Ready`; reload preserves save bytes.

Room 02 shows latched RESCUE interruption, RECHARGING, WINDUP/AIMING, and an actual next shot in
both motion modes. The sampled full warning is 704 ms against authored 700 ms at 16 ms sampling.
Room 19 holds STEADY beyond resumption, leaves/reenters without another interruption, then earns
a distinct RESCUE interruption and completes. Both interrupts show full cooldown and warning;
the already applied SHOVE continues naturally. Room 20 proves incomplete two-second charge,
release, another partial charge, earned defeat, hidden projectiles, completion, and a five-second
terminal freeze. Rooms 04/13/17/24 demonstrate one-way starts; actual 13/17 FLOAT routes preserve
RESCUE meaning and room 17's lift power handoff.

The trial uses actual keyboard input through FLOAT, RESCUE, and exits; pause, retry, replay,
the 24-room selector, reload, and byte-identical campaign saves pass in all four fixtures.
It verifies 22 served files, 42 mapped local sources, and 17 decoded SVGs. Owned server 8139
is closed; the unrelated preview remains live.

## Continuous campaign result

The authoritative `fresh_04/results.json.gz` starts with an empty campaign save and uses ordinary
keyboard input in one normal-motion 1280 by 900 browser context. One visible Play and 23 visible
Next actions complete stable IDs in order
`02,01,04,03,06,08,05,07,11,09,10,23,12,21,13,24,14,15,16,18,17,22,19,20`.
The final two-second joint charge is sampled 126 times from `0.0` through `1.9` to `2.0`, then
shutdown and the finale occur. Reload retains all 24 earned Replay entries and identical save
bytes. Every actual room retry counter is zero; this is an observation, not an acceptance gate.
The run records 7,767 samples, 893 actions, 117 screenshots, and zero page, console, request, or
HTTP errors. All 183 frozen inputs, 44 map entries/42 local sources, 22 local/served files, and
17 decoded SVGs verify before and after the run. Owned server 8136 is closed; preview 8127 remains.

The campaign retains 17 attempt directories and 833 ledger-listed original evidence members
(834 files including its own ledger), with original campaign ledger SHA-256 `7d68c16600c3990190ad2c2efd64230d8364f2f28ccd0835be68b085fa32b7ad`.
`summary.json`, `report.txt`, and `final_verification.json` retain its outcomes, route provenance,
and limits. The all-24 traversal covers normal motion only; reduced-motion acceptance comes from
the separate focused/trial/pose lanes. It does not demonstrate all 16 post-interrupt next shots:
final-room Gem is defeated before its next shot. The synthetic all-16 recurrence proof and actual
ongoing encounters provide their distinct evidence. Earned boss defeat ends pressure by design.

## Partner presentation boundary

The four selected composition-B SVGs preserve canonical feet and the established asset basis.
Selection reads actual valid support. Six selector tests and 40 pixel-identical solo cases pass;
image loading remains a pure cached presentation concern. Built ordinary-input room-24 rides
show Isp supporting and Pac riding in both motion modes. The source-bound synthetic final matrix
covers reversed roles/opposite facing, overlap/sole-gap boundaries, walls/ceiling, dead/completed/
exited states, normal/reduced temporal stability, and pending/failed canonical/variant images.

The matrix uses exact released-map `sourcesContent`; only the inlined, unmapped `constants.ts`
uses exact manifest-verified bytes under an explicit bounded exception. All 183 inputs, 42 mapped
local sources, 22 served files, and 17 decoded SVGs remain verified. Eight temporal comparisons
have zero differing RGBA components. Every fixture preserves inputs and incoming Canvas context.

Loading probes deliberately generate 12 events: one request abort, five HTTP 404s, and six
matching console echoes. Unexpected events are zero; total events are not zero. Fresh contexts
verify canonical fallback, visible placeholders, and a ready variant while canonical is pending.
Owned server 8138 is closed. These fixtures establish presentation boundaries, not natural
reverse-pair routes or continuous campaign completion.

The existing 88-pixel illustration extends beyond its unchanged 36-pixel body: synthetic ceiling
contact can overlap upper artwork. This accepted nonblocking limitation preserves the art/physics
contract. Finite captures improve face separation and role readability; novice interpretation
and human enjoyment remain unmeasured.

## Canonical comparison capture

[float_passenger.png](../../screenshots/float_passenger.png) is an exact byte copy of
`test-results/recurring_pressure/pressure/focused/attempt_02/normal_rising.png`, inspected before promotion.
It shows an actual normal-motion airborne FLOAT ride with Isp supporting/Pac riding and Gem
RECHARGING on this frozen build. No rescaling or image editing was performed.

New/source SHA-256: `5e126fa8d16d6f4aaefb7cd120db0b0f1cb018684f359b663a86cb859d41d1cc`.
The prior canonical PNG remains byte-exact at
`test-results/recurring_pressure/pressure/records/previous_float_passenger.png`, SHA-256
`4488ec076c54c098aee16acd8cfe02577817fc7c64813bff6276c644d2655b78`.
`records/canonical_screenshot_receipt.json` records source/copy/build provenance.

## Failed attempts and limits

The focused report preserves route assumptions corrected only in temporary helpers: room-02
exit order, waiting for committed start substeps, room-19 SHOVE/reentry margins, a rounded-away
8 ms room-20 jump transition, and room-13 underside takeoffs. Successful corrections use ordinary
keys without product changes. The room-19 image named `normal_pressure_19_rescue_interrupt.png`
is the pad-active frame before the interference substep commits and still says IN FLIGHT;
the subsequent 26,600 ms sample proves INTERRUPTED. Do not label that image as cancellation.

The campaign keeps unsuccessful attempts beside the authoritative pass. `fresh_01` dies in room
03 when renewed FLOAT carries Isp over a gap. `fresh_02` reaches room 22, then room-19 SHOVE
releases STEADY before the assumed RESCUE. `fresh_03` completes room 16 but its temporary retry
wrapper checks completion before the original 80 ms room-14 settling frame; it records two visible
Restarts and stops. The corrected `fresh_04` succeeds. Ordinary-key route adaptations in rooms
03/07/13/19/20 and the temporary wrapper correction change no product source, geometry, or timing.
No product defect or cure is inferred from those helper corrections. Historical pre-anatomy
23-room difficulty records, their 495 literal source references, and 26 published outputs remain immutable. The 69 local
observation PNGs remain retained/ignored with zero tracked PNGs; their 25 JSON records stay tracked.
The current 24-room campaign has no new numerical score, novice-discovery, enjoyment, or
two-person-play result.

## Archive and closeout

Archive destination is `test-results/recurring_pressure/`. Original mappings are
`recurring_pressure/** -> pressure/**`, `partner_poses/** -> partner_poses/**`,
`browser_transport/** -> browser_transport/**`, and
`browser_transport_repair/** -> browser_transport_repair/**`, relative to their `tests/_temp/`
roots. The archive preserves 1,547 originals totaling 1,009,769,453 original bytes: pressure
1,029, partner poses 169, browser transport 246, and its repair 103. A separate 22-file copied
candidate build brings payloads to 1,569. Six custody metadata files, including the root ledger,
bring the total to 1,575; the root ledger covers the other 1,574 members.

Original JSON files at least 1,000,000 bytes use lossless `.json.gz` storage. Seventeen originals
totaling 224,754,516 bytes occupy 4,116,383 compressed bytes. Every compressed JSON was actually
restored, written, reread, and checked against its original bytes/SHA-256. PNG, ZIP, and other
payloads remain native. `inventory.json` maps original paths/bytes/hashes to actual archived
paths/bytes/hashes and encodings; `CUSTODY.md` gives verification and restore instructions.

`candidate_build/copied_site/` retains all 22 frozen distribution files; only `main.js` and
`main.js.map` gain inert `.txt` suffixes. An actual private restore verifies all 22 original build
files byte-for-byte. The archive has no runnable helper suffixes or executable permissions. All
183 frozen inputs, 42 mapped local sources, and 22 live distribution files remain exact; custody
preserves the Git index. Stored archive size is 791,054,161 bytes. Root `SHA256SUMS` SHA-256 is
`73996b5b84831e83d74d61c8c0019e98197b07c9655c035afa5019048a6182b9`.
All stored hashes and exact membership verify. After copy/member rechecks and consumer release
acknowledgments, only the four released original temporary trees were removed.
`verification_receipt.json` and `CUSTODY.md` retain that cleanup disposition. This completes
archive custody. Canonical documentation stays outside the archive to avoid a circular ledger
digest; frozen nested receipts retain their historical paths and bytes.

| Gate | Status |
| --- | --- |
| Fresh continuous 24-room Play/Next campaign and save/reload | PASS; authoritative fresh_04 |
| Frozen evidence inventory, custody digest, exact restore | PASS; final digest above; original-tree cleanup recorded |
| Fresh integration review of source, browser evidence, and records | ACCEPT WITH CONCERNS; fresh independent review, no gameplay, architecture, plan, or provenance blocker |
| Explicit manager acceptance and administrative plan closeout | DONE_WITH_CONCERNS; manager explicitly accepts; both feature plans archived |
| Mandatory shared Podman disk budget | PASS at latest observation; full Python suite passes and the read-only storage total is 8,374,516,614 bytes against a 20,000,000,000-byte limit |

## Review and repository disposition

Fresh independent reviewer `/root/recurring_pressure_integration_review` audits source, authoring,
meaningful test contracts, all frozen hashes, all 17 compressed JSON restores, and the raw 24-room
campaign evidence. Its verdict in the root transcript is ACCEPT WITH CONCERNS, explicitly finding
no gameplay, architecture, plan, or provenance blocker. This is independent evidence review, not a
new browser rerun. The manager explicitly accepts that verdict and marks the combined recurring
pressure, partner poses, and local test-server milestone DONE_WITH_CONCERNS.

The initial full Python run records 1,881 passed and two failures: capture-CLI executable mode and
shared Podman storage. The CLI correction changes only
[capture_difficulty_observations.mjs](../../../devel/capture_difficulty_observations.mjs) mode from
`0644` to `0755`; its bytes remain SHA-256
`ca8ae2e5d19822165f97245157a0008b33b144f5f3df6993caaea97069780c16`.
The correction's 415 shebang tests and exact TypeScript check pass. Its byte-verified receipt is
`test-results/capture_cli_mode_correction/receipt.md`; only its original single-file temporary
folder is removed after copy verification. The sealed recurring-pressure archive is unchanged.

The manager's fresh post-correction `source source_me.sh && python3 -m pytest -q tests` records
**1,882 passed, one failed in 2.81 seconds**. The remaining failure is
[test_podman_disk_budget.py](../../../tests/test_podman_disk_budget.py): machine-wide storage is
20,380,865,912 bytes against the 20,000,000,000-byte limit. That full repository suite did not pass.
The game creates no Podman resources; readonly inspection at that checkpoint found seven active
containers belonging to PLE projects on the shared host. Deliberate host cleanup then required
operator approval; no resources were removed and the gate, threshold, and test remained intact.
Continuous game development remained ACTIVE, with new feature development held until the mandatory
budget was resolved. The completed feature plans are archived. The current gate status is in the
table above and the later observation below.

After administrative plan closeout and plan Git moves, the then-current post-closeout
`source source_me.sh && python3 -m pytest -q tests` run records **1,885 passed, one failed in 2.59
seconds**. The shared Podman disk-budget check was the sole failure at that checkpoint; its then-
latest observation was 20,383,204,105 bytes against the 20,000,000,000-byte limit. That run
superseded the earlier post-correction result at the time. It changed no game evidence, source,
build, or scope. At that checkpoint, operator cleanup approval remained pending and no shared
resources were removed.

The fresh 2026-10-15 host-gate resolution is `source source_me.sh && python3 -m pytest -q tests`:
**1,886 passed in 1.96 seconds**. A passive `podman system df --format json` observation recorded
Images RawSize 8,324,775,343 bytes, Containers RawSize 1,104,207 bytes, and Local Volumes RawSize
48,637,064 bytes, totaling 8,374,516,614 bytes below the 20,000,000,000-byte limit. The previously
proposed dangling image `28ff715be4ec340fb78ab24529cc32754d7156a319052b4a683be1d0d387cd01` was absent.
Shared-host state had changed between observations; no agent performed Podman cleanup, and the
change is unattributed. This is a passing observation, not a guarantee of future host capacity.
Feature development may proceed under the active continuous-development goal. This reconciliation
changes no game evidence, source, build, or scope.

Nonblocking concerns remain the existing ceiling/art overlap, finite local-server evidence and
inferred kernel mechanism, and unmeasured novice understanding, enjoyment, and paired play.

Owner plans are [recurring_villain_pressure.md](../../archive/recurring_villain_pressure.md) and
[partner_readability.md](../../archive/partner_readability.md). The transport diagnosis and its
finite repair evidence remain in [browser_transport_investigation.md](browser_transport_investigation.md).
