# Finale assist delivery

**Status:** `DONE_WITH_CONCERNS`, accepted by root at 2026-10-18 19:55:59 UTC. Phase A and released-
build Phase B are complete; SPEC, QUALITY, and integration passed with concerns. Root reviewed the
source, receipts, and all five originals. No milestone work remains; the broader game goal remains
active.

## Frozen contract

Promote the accepted F5 candidate into stable `level_20`. Keep the original title, subtitle, villain
dialogue, schemes, attacks, opening STOP / STEADY / RESCUE sequence, and two-second paired TARGET
ending. Isp's high TARGET sustains the bridge. Pac dodges Cana's outbound boomerang, uses its
rightward return shove, and jumps right to the far ledge. The lower fold supports a missed jump and
rejoin. Each bound pad interrupts its attack once per attempt; attacks resume. Preserve physics,
types, state, options, dependencies, assets, and campaign order.

## Phase A evidence

The frozen candidate's actual values are in
`tests/_temp/finale_gameplay_probe/f5_promotion_artifact.json`. The 57-entry pre-edit registry
snapshot is `tests/_temp/finale_assist_delivery/pre_edit_registry.json`. After promotion, all 57 IDs
and their order match; all 56 other definitions compare unchanged. The registered level matches the
frozen candidate except the revised hint.

The ordinary registered-scene route completes at frame 1326 / 11.05 seconds, with both heroes at
their exits and 2.000 seconds of paired charge. The separate miss reaches the lower fold at frame
1074 and rejoins `core_bridge_right` at frame 1158, alive and still playing. Cana's pad interruption
is recorded at 2.342 seconds; Gem's is at 6.808 seconds. Both attack cycles later return to windup.
This recovery route does not claim a recovered clear, and neither route establishes human discovery,
enjoyment, or difficulty. See `tests/_temp/finale_assist_delivery/native_receipt.json` and
`tests/_temp/finale_assist_delivery/registry_comparison.json`.

The first harness attempt used a wrong relative artifact path and failed with `ENOENT`; the next had
an invalid assertion that Isp must not be at its exit during Pac's rejoin. Both harness defects were
corrected, and the unchanged candidate inputs then passed against the registered level.

## Phase B built-browser evidence

Root's canonical 96-check gate, production build, and two standard browser smokes passed. The served
JavaScript matched the disk build at SHA-256
`5ff3526ce96cfca76a383b99edabdfa183e59736701a0bd3d2bf02afe4f0d3ef`. The five views-outbound dodge,
return shove, assisted landing, missed-jump rejoin, and clear-showed their expected phases, zero
deaths, and no browser errors. The return-shove view records Pac's shove effect; the rejoin view
shows Pac grounded at the recovery bridge. SPEC and QUALITY passed with concerns; see
`tests/_temp/finale_assist_spec/REPORT.md` and `tests/_temp/finale_assist_quality/REPORT.md`. Root
reviewed all five originals and the receipts; integration passed with concerns. See
`tests/_temp/finale_assist_integration/REPORT.md`. Original images and capture receipt are under
`tests/_temp/finale_assist_delivery/screenshots/` and `browser_capture_receipt.json`.

The focused flow seeded only the first 56 registered completion IDs, then saved level 20 as
57/57 with 0 deaths and 2 sparks. The final room had no Next-level control; Replay reopened level 20,
and after reload the Levels menu showed Replay enabled with all 57 records preserved. This was not a
fresh campaign journey. See `tests/_temp/finale_assist_delivery/flow_receipt.json`.

The browser quantizes native 120 Hz inputs to 16 ms intervals. With the unchanged candidate one-frame
Pac Right tap at `opening_12`, Pac moved from x=623.67 to x=627.17, off STEADY's edge; Isp stayed at
x=625, and the route died at frame 1028 (Pac x=806.83/y=485.75, Isp x=847.25/y=464; one death).
A 12-frame Right trial left Isp at x=625/y=378 before the upper route. A bounded one-frame no-key
test held Pac at x=623.67 and got Isp onto the target, but not the shove, by frame 1028. Root chose
the smallest effective browser-input correction: replace that one-frame Right tap with Left (Pac
x=620.17). This kept Isp on target and produced Pac's shove at frame 1028, then passed all five
views and progression. No production input, geometry, physics, or source changed. Failed trials are
retained in `browser_trace_native_intervals.json`, `browser_trace_nudge12.json`, and
`browser_trace_holdsteady.json`; the accepted input is in `browser_trace_leftnudge.json`. Root
classifies this as an ordinary-input forgiveness limit at a pad edge, not a source defect or evidence
that players need a one-frame action. No source, physics, geometry, or rules change was approved.

## Closure limits

Do not claim human discovery, enjoyment, a difficulty rating, or a fresh-campaign journey. The
revised level20 and level14 remain unassessed; levels54-57 are unassessed; frozen53 scores remain
historical, including estimates predating the level40 roof change.
