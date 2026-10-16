# Current 29-room assessment run

**Status: CONTENT ACCEPTED WITH CONCERNS; HOST GATE OPEN; PROMOTION PENDING.** This run assesses the
current campaign with the reusable two-pass expert walkthrough. Its 29-room snapshot, browser
capture, and reviewed first-pass locks are complete. The same assessors completed source-informed
second-pass records and a narrow transfer-history correction. Corrected full-run validation and
report generation pass for all 29 rooms. Root accepted the frozen evidence as design guidance and
closed paired evidence collection against the recorded pre-trial visual source/build. The required
repository-wide suite remains failed at its mandatory Podman-budget check, so the run is not
promoted to current.

## Frozen context

| Item | Identity |
| --- | --- |
| Run | `docs/difficulty_runs/current_29/` |
| Snapshot | [snapshot.json](snapshot.json), SHA-256 `f7a0e4badb9bba7109d57f3e873bc38304465bca888e2eb5c2f1faacbcedc182` |
| Campaign roster | SHA-256 `28308deee62f83e1b98e75216a45c5aba71f976b587f16cc2c222f8b581d9184` |
| Authored-source fingerprint | `46a64cffdaf038a9c49aca15f5e75f7cb6f3c8ed5408831e5facfd4b12bdca2f` |
| Snapshot boundary | Recorded pre-trial visual source/build; does not claim current-source freshness after renderer revisions |
| Local and served main | SHA-256 `e6f6e58983aabe757da7c96b39c36795663adc8238e114f31ae5f5ba669cfa29` |
| Local and served source map | SHA-256 `7ba2592b3eabc435e8909f3a32f259dab06a3e7df90bda293cda2a70f1ea16b4` |
| Capture receipt | [observations/capture_receipt.json](observations/capture_receipt.json), SHA-256 `5aaa3525e53bdceae0d9ad7fe1898f7efa39a373293dc91da6457736928aebcb` |
| Source binding | [observations/source_binding.json](observations/source_binding.json), SHA-256 `ee7c054cc02bd6d4414a219fa36e1fd5448e6a812c15ef18f8e32f6829b02442` |
| Method | [DIFFICULTY_RUBRIC.md](../../DIFFICULTY_RUBRIC.md), SHA-256 `d5b5d7fef204a20934b65b8a644cbb67edec13d0a977986ef7944b6edf40d831` |
| Status owner | [difficulty_29_acceptance.md](../../active_plans/reports/difficulty_29_acceptance.md) |

Capture verified the local and served hashes at `http://127.0.0.1:8127/`. Its capture-time source
binding and receipt identify the same campaign, source, main build, and source map. The method hash
is descriptive provenance; the existing snapshot and capture do not bind rubric bytes.

## Campaign roster

This table preserves the current menu order. It is roster metadata, not a route guide or rating.

| Position | Room ID | Title |
| ---: | --- | --- |
| 1 | `level_02` | Hold That Door! |
| 2 | `level_01` | Glucose Going Up! |
| 3 | `level_04` | Bridge Over Troubled Slime |
| 4 | `level_03` | Stop Right There! |
| 5 | `level_06` | Narrow Escape |
| 6 | `level_08` | Push Comes to Shove |
| 7 | `level_05` | The Great Cell Shuffle |
| 8 | `level_07` | Double Trouble |
| 9 | `level_11` | Split Decision |
| 10 | `level_09` | Two Tons of Trouble |
| 11 | `level_10` | Elevator Etiquette |
| 12 | `level_23` | Cargo Exchange |
| 13 | `level_12` | Marrow Cargo Shuffle |
| 14 | `level_21` | Across the Divide |
| 15 | `level_13` | Gem's Bubble Break |
| 16 | `level_24` | I've Got You |
| 17 | `level_14` | Bombs Need Personal Space |
| 18 | `level_26` | Bubble Bouncer |
| 19 | `level_28` | Two for One |
| 20 | `level_15` | Special Delivery for Gem |
| 21 | `level_16` | Gem's Liver Lair |
| 22 | `level_18` | A Meeting of Minds |
| 23 | `level_17` | Cana's Upside-Down Commute |
| 24 | `level_25` | Return to Sender |
| 25 | `level_22` | Crossed Paths |
| 26 | `level_27` | Attention, Please! |
| 27 | `level_29` | Changing Places |
| 28 | `level_19` | Cana's Control Freak-Out |
| 29 | `level_20` | A Very Bad Day for the Tumor |

## Evidence boundaries

Capture records three idle frames per room with visible DOM text and the served-build binding. The
completed capture contains 29 packet records and 87 local PNG captures. Packet, image, receipt,
build, order, and source-binding checks pass. It does not show attempted actions, route completion,
player understanding, or human difficulty. Capture completed with concerns after the initial
unprivileged Chromium launch failed with macOS MachPort rendezvous error 1100. Root verified that
the failed launch left one empty staging directory and authorized its removal; the same full capture
command then succeeded. Failure logs are retained under `tests/_temp/difficulty_29_capture/`.

Each assessor owns a paired room assignment. In pass one, they receive only this run's rubric and
typed record contract, their assigned packet, and packets from earlier campaign positions. They do
not receive source, hints, route solutions, historical scores, reports, or future packets. They pause
after authoring their first-pass record. Root releases source only after all 29 first-pass records
are reviewed and locked; each assessor then resumes the same assignment using current source,
ordinary-input route evidence, and their own locked first record. Paired differences can record
possible hindsight effects, but do not measure a causal effect or human bias.

Five paired assessors wrote the first pass in chronological groups: positions 1-6, 7-12, 13-18,
19-24, and 25-29. Root accepted the lock receipt and all 29 hashes, then released current source and
ordinary-input campaign evidence to the same assessors for pass two. The full-run validator and
report passed after correction. Fresh synthesis review found that the records treated the
rider-clutch/load rule as new and omitted its earlier introduction in `level_23`. The completed
correction records the earlier core-model introduction and later one-sac/hero-swap transfer, changing
only the affected second-pass prior/novelty/comparison evidence. First-pass records, locks, other
second-pass fields, routes, source, and build remain unchanged. Root verified corrected campaign map
SHA-256 `f2e26ec79771a6c658b4da7877410f36714b24725622cc7339fd6784132f3319` and aggregate SHA-256
`d86c31ac2d188472cc97dedc2801b771c7d5182b2e73ed28441bbd07b1c976f8`. Historical scores and other
groups' second-pass ratings remain withheld. The frozen source-blind opening UI probe and its
diagnostic are available as AI evidence in pass two only; they do not measure human difficulty or
enjoyment.

The frozen [current_28 run](../current_28/README.md) and older 23-room outputs are historical and
remain unchanged. Their scores and routes are not current evidence and stay withheld from first-pass
authors. The separate source-blind opening UI probe is frozen in
`tests/_temp/opening_first_use/REPORT.md` and is withheld from first-pass authors; after all locks,
it may support second-pass analysis only. It does not establish human difficulty or enjoyment.

The generated [campaign_map.json](campaign_map.json),
[LEVEL_DIFFICULTY_REPORT.md](report/LEVEL_DIFFICULTY_REPORT.md), and
[difficulty_campaign.svg](report/difficulty_campaign.svg) are available with all 29 room dossiers in
`report/difficulty_levels/`. Cross-room interpretation is in [FINDINGS.md](FINDINGS.md). SPEC,
QUALITY, and integration accept with concerns: the locked first pass still missed the earlier level
23 lesson, human shared-keyboard comfort remains unmeasured, and room 29's board is partly occluded
in idle captures. Root accepts the assessment content as design guidance. The required
repository-wide suite remains failed at its mandatory Podman-budget check; no clearly stale resource
was found and none was changed. The host gate stays open and promotion remains a separate root-owned
decision. Clearing the host gate alone would not refresh this snapshot. Geometry and mechanic
judgments are bounded design input; later renderer or art revisions need new runtime evidence for
art clarity. Any changed source/build requires a later run rather than mixing evidence here. See the
[difficulty_29_acceptance.md](../../active_plans/reports/difficulty_29_acceptance.md) for the exact
suite result and full gate status. This README describes the run without solutions or ratings.
