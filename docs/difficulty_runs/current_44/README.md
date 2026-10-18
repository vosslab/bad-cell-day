# Current44 expert assessment

Status: **ROOT ACCEPTED DONE_WITH_CONCERNS at 2026-10-17 18:14:54 UTC**

Root authorized the assessment on 2026-10-17. The existing snapshot and observation tools captured
the frozen 44-room campaign from the local preview at `http://127.0.0.1:8127/`.

| Identity | Value |
| --- | --- |
| Campaign fingerprint | `424c7649df9b9d0ff22c00f30a5f870f50f0a147fb50fb14f1bc152044b43629` |
| Source fingerprint | `1b270733a7a626151659d0d702af3d6b2bcb69ba7c89d969d9a00e3549c31b07` |
| `dist/main.js` SHA-256 | `2d43091057039295e806bc171dd0b20dad159ef548209728344009940f96c1bb` |
| Liver SVG SHA-256 | `cb5ac8e30bbce1e3366811d0d3ae7793a0a8658e81c4fcc2f65c6583c151d2ee` |
| Source-map SHA-256 | `8aa4be6c8d396fc67bc492e007c1e5f92c8ccbd4beb9d018515e8c6fb3e9055b` |
| Capture receipt SHA-256 | `5aab6fcbd4f77e84509201f4e5c9f48fbefab70588a3e2e9562a9fc1310d8e0f` |

The frozen campaign order is lungs 1-5, intestine 6-11, marrow 12-18, liver 19-30, brain 31-43,
and tumor 44. The run contains 44 paired records, 44 first-pass locks, and 132 ignored local PNGs
(three idle frames per room at 16, 1516, and 4016 ms). Packet and provenance JSON are tracked.
Captured packets report no browser errors. Idle images do not establish routes, mechanics,
playability, human performance, or measured difficulty.

The final canonical command, `npx tsx devel/assess_difficulty.ts report --run-dir
docs/difficulty_runs/current_44`, exited 0 and wrote the report, SVG, and map for all 44 rooms.
This command validates the assessment before generation; no separate aggregate validate command
was run. Final artifact hashes:

- [Campaign map](campaign_map.json):
  `beecbf52f7c9f48a4da7eb122f52f9bc89a5b2f57302c6599ca4e15243d79f6e`
- [Full report](report/LEVEL_DIFFICULTY_REPORT.md):
  `c3d0deee49e03ccdcc80578b8555ca93c76872e181550869cb69f50b15ce7569`
- [Campaign chart](report/difficulty_campaign.svg):
  `b2aa477269f7afe20bfbef1383311c2d566f06ab3ed06415a032cc01bb916e15`
- [Cross-room findings](FINDINGS.md)
- 44 room dossiers: `report/difficulty_levels/`

The eight rubric dimensions are estimated for the mandatory two-human shared-keyboard route;
puzzle and platforming remain separate derived axes. Optional collectibles and the one-operator
input note are kept separate. All 44 control-friction values are unknown because direct
shared-keyboard input-reliability evidence is absent. These expert ordinal estimates and scripted
evidence do not measure human success, discovery, enjoyment, friction, comfort, or difficulty.

## Review and closeout

- All 44 chronological first-pass records and locks were reviewed with concerns before any
  source-aware prompt or source access. Root released the authors at 2026-10-17 16:55:58 UTC.
  First-pass records remain immutable.
- All eight same-author paired handoffs were received. Focused record and control-friction
  corrections received fresh SPEC acceptance. The four narrow findings corrections are accepted;
  see the [correction report](../../../tests/_temp/difficulty44_findings_corrections/REPORT.md).
- The final assessment SPEC is accepted after fresh correction review; see the accepted
  [SPEC correction receipt](../../../tests/_temp/difficulty44_findings_corrections/REPORT.md).
  The initial [SPEC review](../../../tests/_temp/difficulty44_final_spec/REPORT.md) is superseded
  and remains as historical review evidence.
- The separate QUALITY review is accepted; see the [QUALITY receipt](../../../tests/_temp/difficulty44_quality/REPORT.md).
- The fresh targeted integration review is accepted; see its
  [integration receipt](../../../tests/_temp/difficulty44_integration_doc_fixes_reviewer/REPORT.md).
  The original integration NEEDS_WORK receipt remains historical and its documentation-only
  findings are resolved by this closeout. Root accepted the bounded assessment as
  `DONE_WITH_CONCERNS` at 2026-10-17 18:14:54 UTC. See the
  [closeout receipt](../../active_plans/reports/difficulty_44_acceptance.md) and
  [execution ledger](../../active_plans/active/difficulty_44_refresh.md).

Preserve review concerns: E retains disclosed redundant generic actor-placeholder route steps, so
the combined route is not evidence of route impossibility; G2's historical simulation does not
measure human performance; and D/H were accepted with concerns. The initial per-file diagnostic
snapshot returned OK for 28/44 records and attributed one first failure for each of the other 16;
this diagnostic snapshot is not the final canonical gate. The exact diagnostic and both report
command receipts are in the [coordinator report](../../../tests/_temp/difficulty44_run_coordinator/REPORT.md).

First-pass manually estimated `created_at` values for groups C, D, and H are unreliable; immutable
lock times and documented command order govern chronology. Group C disclosed next-prompt metadata
exposure in three transitions before locks, without reporting future packet, image, or source
exposure. Group F disclosed filename-only directory exposure. Group D resumed the assignment after
oversized payload/tool errors and corrected an empty evidence hash before locking `level_30`.
Preserve these as process caveats; do not rewrite first-pass records. See the four [first-pass review
receipts](../../../tests/_temp/difficulty44_first_review_early/REPORT.md),
[central](../../../tests/_temp/difficulty44_first_review_central/REPORT.md),
[middle](../../../tests/_temp/difficulty44_first_review_middle/REPORT.md), and
[late](../../../tests/_temp/difficulty44_first_review_late/REPORT.md).

The [refresh plan](../../active_plans/active/difficulty_44_refresh.md) records authors, room
assignments, correction scope, and phase gates. The source/build freeze applied during the active
assessment window and ended at closeout. Current44 remains frozen historical evidence tied to its
captured source/build identity, and its first-pass records remain immutable. Gameplay development
can continue; source/build changes do not require recapturing this completed run. Start a new
assessment with a fresh snapshot and full capture only when new estimates for the changed baseline
are wanted.
