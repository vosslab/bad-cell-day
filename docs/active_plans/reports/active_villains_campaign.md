# Active villains campaign acceptance

Status: PASS, fresh full campaign on 2026-10-15. This completes the full traversal portion of the
regression gate in [active_villains_direction.md](active_villains_direction.md).
Targeted closure, weapon-state and motion-mode proof remains in
[active_villains_browser.md](active_villains_browser.md).

## Frozen artifact and custody

- Bundle SHA-256: `a77ac47f9ead7750ea01ca652d44b0c9b76a6abe2b0cb24e5b5df1e6030f23b5`.
- Source map SHA-256: `c31d54fe5d776f0443524f64d657e49af28e4e1a2df0d7b835207598e59faff0`.
- Accepted evidence: `test-results/active_villains_campaign/candidate_06/`.
- Exact driver archive: `active_villains_campaign.mjs.txt` in that directory, SHA-256
  `f2e73466aba64aba8ee883da421f2108b3d09e13369be2ea9198c1e5409283dc`.
- `results.json` records inputs, read-only canvas observations, route hashes and outcomes.
  `source_artifact_manifest.json` records all 80 frozen files: 18 packaged files, 47 TypeScript
  sources, 13 source SVGs and two additional source-map entries. All 37 authored embedded sources
  and two Solid dependencies matched disk. Served bundle, HTML, CSS and source map matched disk;
  every frozen file remained
  byte-identical at completion.
- The 152-file archive includes exact route source copies, the selected replay inputs, 109
  screenshots, restore instructions and `SHA256SUMS`. Every checksum verifies.

The manager built and froze the artifact before this lane ran. This lane did not rebuild or edit
production source. It served the frozen output at `http://127.0.0.1:8127/` and ran:

```bash
ACTIVE_VILLAINS_BUILD_SHA=a77ac47f9ead7750ea01ca652d44b0c9b76a6abe2b0cb24e5b5df1e6030f23b5 \
ACTIVE_VILLAINS_CAMPAIGN_OUTPUT=test-results/active_villains_campaign/candidate_06 \
node tests/_temp/active_villains_campaign.mjs http://127.0.0.1:8127/
```

Headless Chromium required the normal macOS sandbox escalation for MachPort startup. The exact
archived driver can be restored to its original temporary path using the archive instructions.

## Campaign and lifecycle results

A fresh browser context cleared local storage before Play. The accepted run used one visible Play
click, then 22 visible Next level clicks. It completed this displayed order:

`02, 01, 04, 03, 06, 08, 05, 07, 11, 09, 10, 23, 12, 21, 13, 14, 15, 16, 18, 17, 22, 19, 20`.

Every room completed with a displayed Retry count of zero. The save gained exactly one distinct
completion per room. Every opening and completion has a screenshot. The finale showed
"You saved the cell day!" and no Next level button. Reload exposed all 23 entries as Replay and
preserved the earned save byte-for-byte. All 13 packaged SVG images decoded, including the six
backgrounds and changed molecular character art. Browser console/page errors, failed requests and
HTTP error responses were all empty.

The first eight rooms use their final authors' full 120 Hz input arrays. Millisecond fake-clock
rounding and ordinary end-approach guards account for browser render boundaries. The later rooms
retain the accepted baseline's 16 ms playback rounding and opening render interval. All motion is
ordinary keyboard input; navigation uses visible controls. No simulation state is injected.

## First-room visible action

The accepted normal route includes 62 additional action screenshots. Inspected frames show:

- `01_action_01010.png`: Gem's aimed windup, Cana's separate boomerang in flight, attributed
  dialogue, HOLD and RESCUE readouts.
- `01_action_01330.png`: Isp visibly suspended in FLOAT, Gem recharging, and the separate returning
  boomerang. Cana has no held duplicate.
- `01_action_01490.png`: Pac's braced SHOVE and Isp's FLOAT together, the closed DNA barrier and
  Cana's successful-disruption reaction.

This proves both weapons visibly act during the ordinary first completion. Detailed release/catch
poses, four-effect enumeration and matched reduced motion belong to the targeted browser lane.

## Retained candidate findings

Earlier candidates are preserved under `test-results/active_villains_campaign/`:

| Candidate | Observation and disposition |
| --- | --- |
| 01 | Chromium MachPort startup blocked by sandbox; rerun with browser escalation. |
| 02 | An 80 ms initial idle shifts Pac to the nearer-left side when FLOAT closes HOLD's door. Pac remains blocked near x392 while Isp walks beyond HOLD. No closed-door bypass occurred. |
| 03 | With a 16 ms opening render, the route crosses and reaches within a few pixels of completion; source input ends before the final browser render. Added ordinary final approach. |
| 04 | First four rooms pass; room 06's source replay ends on safe floor before Isp reaches the exit. Extended the ordinary final-approach guard. |
| 05 | First eleven rooms pass. Global millisecond rounding desynchronizes the retained Cargo Exchange replay; restored its accepted 16 ms playback. |
| 06 | All 23 rooms and lifecycle checks pass. |
| recovery_01 | Walking Isp back to HOLD from candidate 02 pushes Pac left. Walking Pac forward then pushes Isp off HOLD, so this particular reversed partner order needs additional legal recovery. Targeted browser verification owns that case. |

The failed walking-only recovery is separate from the accepted ordinary campaign. It is retained
as a concrete coordination case and is not described as solved here. The accepted run does not
measure human discovery, enjoyment, novice difficulty or two-person coordination.
