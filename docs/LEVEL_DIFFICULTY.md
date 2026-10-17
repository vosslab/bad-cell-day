# Campaign difficulty assessment

The current38 assessment records expert walkthrough estimates for all 38 rooms in captured campaign
order. Root accepted it with concerns as bounded design evidence after fresh SPEC, QUALITY, and
integration review. Its scores are ordinal judgments, not measured human difficulty or outcomes. The
records remain bound to the frozen source and build hashes in the
[current38 run ledger](difficulty_runs/current_38/README.md); this documentation adds no game-build
or difficulty gate. See the [acceptance receipt](active_plans/reports/difficulty_38_acceptance.md).

## Live campaign

The live source roster has 43 rooms: lungs positions 1-5, intestine 6-11, marrow 12-18, liver
19-29, brain 30-42, and tumor 43. **Cana's Friendly Fire** (`level_41`) is at intestine position
11, after `level_07` and before `level_11`. **Bursting Point** (`level_40`) is at liver position
20, after `level_13` and before `level_24`; **Cellpool Lane** (`level_43`) is at liver position 23,
after `level_30` and before `level_32`. The added room preserves the prior 42 rooms and their relative
order. `level_20` remains the finale at position 43. **Boneheads**
(`level_39`) is at brain position 35, after
`level_27` and before `level_35`; this additive insertion preserved the earlier rooms and their
relative order. **Neural Misfire** (`level_42`) is at brain position 38, after `level_31` and before
`level_38`. **Jump to Conclusions** (`level_38`) now appears at position 39, between `level_42` and
`level_29`. Positions 40-42 are `level_29`, `level_33`, and `level_19`; `level_20` remains the finale
at position 43. Stable `level_39`, `level_40`,
and `level_41` are covered by the accepted current41 assessment. See its
[run ledger](difficulty_runs/current_41/README.md), [campaign map](difficulty_runs/current_41/campaign_map.json),
[findings](difficulty_runs/current_41/FINDINGS.md), [generated report](difficulty_runs/current_41/report/LEVEL_DIFFICULTY_REPORT.md),
and [acceptance receipt](active_plans/reports/difficulty_41_acceptance.md). It is frozen expert
ordinal evidence bound to the captured source/build, not measured human difficulty or outcome. The
current41 scores remain frozen to their captured 41-room source and order; they do not include
`level_42` or `level_43`. Neither added room has a difficulty assessment. The `level_42` scripted
native and built-browser verification is complete, and root accepts that bounded room milestone as
`DONE_WITH_CONCERNS`. Cellpool Lane's production milestone is also accepted as
`DONE_WITH_CONCERNS`; it remains unassessed by the frozen current41 assessment. See its
[acceptance receipt](active_plans/reports/CELLPOOL_LANE_ACCEPTANCE.md). The
current41 first-pass platforming scores are unknown; scripted routes establish
feasibility only. Zero control-friction estimates do not establish physical keyboard comfort. Human
discovery, success, enjoyment, and comfort remain unmeasured. Current38 remains frozen historical evidence; no scores
are inherited.

Root accepts Friendly Fire as `DONE_WITH_CONCERNS`. Its focused test, source gate, official build,
seven targeted browser views, all-41 native replay, and fresh empty-save browser journey pass; the
synthetic legacy40 diagnostic is not a real-user import. Native traces record Gem contact before the
sampled post-dunk image frames. See the [Friendly Fire plan](active_plans/active/friendly_fire_room.md)
and [closeout report](../tests/_temp/friendly_fire_closeout/REPORT.md).

Boneheads' native checks, fresh source gate, official build,
standard smokes, and browser progression pass. Root's corrected-frame review found the exit labels
legible and outbound boomerang visible, with a nonblocking status overlap at the exit rim; the room
was accepted `DONE_WITH_CONCERNS`. Its [plan](active_plans/active/BONEHEADS_ROOM.md) records evidence
and limits.

Bursting Point's production SPEC, six fresh QUALITY passes, integration, source and built-browser
checks, progression, and root visual review pass; root accepts the bounded milestone
`DONE_WITH_CONCERNS`. Browser evidence covers ordinary and recovery routes, save, Next to `level_24`,
reload/replay, all 39 prior IDs, and finale-last order. The old 39-room full journey is historical
proof for its earlier roster, not a full current41 journey. No human discovery, readability,
comfort, or enjoyment result is claimed. The frozen current38 assessment below does not score the
live 43-room order; the accepted current41 assessment above is bound to its captured source/build
and does not inherit current38 scores.

## Frozen current38 assessment

- [Run ledger and source bindings](difficulty_runs/current_38/README.md)
- [Generated campaign report](difficulty_runs/current_38/report/LEVEL_DIFFICULTY_REPORT.md)
- [Campaign map](difficulty_runs/current_38/campaign_map.json)
- [Cross-room findings](difficulty_runs/current_38/FINDINGS.md)
- [Campaign chart](difficulty_runs/current_38/report/difficulty_campaign.svg)
- [Acceptance receipt](active_plans/reports/difficulty_38_acceptance.md)

The frozen capture follows its 38-room source order: lungs 1-5, intestine 6-10, marrow 11-17, liver
18-26, brain 27-37, and tumor 38. In that snapshot, `level_38` (Jump to Conclusions) is displayed
at position 34, between `level_31` and `level_29`; `level_20` is the finale at position 38. Stable
IDs name authored rooms; display positions describe their place in the captured order. Displayed
position 3 is `level_04`, and displayed position 4 is `level_03`.

The assessment uses the [difficulty rubric](DIFFICULTY_RUBRIC.md), typed record contract
[`types.ts`](../devel/difficulty/types.ts), and the existing [assessment CLI](../devel/assess_difficulty.ts)
and capture tool. First-pass packets show idle opening states; paired source-aware records add route
and mechanic evidence. The report does not measure human success, discovery, enjoyment, time,
frustration, learning, or two-person keyboard comfort. All control-friction values are unknown.
Five native traces establish scripted feasibility only for their recorded inputs. See the run ledger
and findings for provenance, review status, and limits.

## Historical checkpoints

These frozen runs remain useful only for their captured roster and source. Their records and outputs
are preserved as historical evidence; none is a current-source scorecard.

- `current_36`: accepted paired assessment for its 36-room checkpoint. See the
  [run README](difficulty_runs/current_36/README.md) and
  [acceptance](active_plans/reports/difficulty_36_acceptance.md).
- `current_33`: historical capture-only evidence with no assessment scores. See the
  [run directory](difficulty_runs/current_33/).
- `current_32`: accepted paired assessment for its frozen 32-room checkpoint. See the
  [run README](difficulty_runs/current_32/README.md) and
  [acceptance](active_plans/reports/difficulty_32_acceptance.md).
- `current_31`: frozen assessment for its earlier roster and source. See the
  [run README](difficulty_runs/current_31/README.md) and
  [acceptance](active_plans/reports/difficulty_31_acceptance.md).
- `current_29`: frozen assessment for its earlier roster and source. See the
  [run directory](difficulty_runs/current_29/) and
  [acceptance](active_plans/reports/difficulty_29_acceptance.md).
- `current_28`: frozen pre-Gem assessment; later source changes make freshness checks stale. See the
  [run README](difficulty_runs/current_28/README.md).
- 23-room baseline: accepted historical estimates for pre-anatomy visual source. See the
  [report](LEVEL_DIFFICULTY_REPORT.md), [findings](DIFFICULTY_FINDINGS.md), and
  [campaign chart](difficulty_campaign.svg).

Historical acceptance receipts remain linked where available. Assessment estimates are design
context, not human-play results or requirements to sort the campaign by score.

## Run a future assessment

Use a fresh, absent or empty run directory. The tools place snapshots, observations, first-pass
records, immutable locks, paired records, and reports below that directory. Do not overwrite a
historical run or replace a lock. Run each command only at its phase gate; a prompt exposes only the
current phase's permitted evidence.

```sh
npx tsx devel/assess_difficulty.ts snapshot --run-dir docs/difficulty_runs/new_assessment
node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts prompt level_02 --pass first --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts lock level_02 --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts prompt level_02 --pass second --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts validate --run-dir docs/difficulty_runs/new_assessment
npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/new_assessment
```

The [active current38 plan](active_plans/active/difficulty_38_refresh.md) records the detailed
method and phase gates. A fingerprint is a freshness check for this developer workflow, not a
production, CI, or difficulty threshold. Keep human observations separate from expert estimates.
