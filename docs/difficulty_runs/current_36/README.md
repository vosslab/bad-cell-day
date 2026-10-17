# Current36 difficulty run

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS.** All 36 blind first-pass records were reviewed and
locked before the same authors completed the paired source-aware pass. Seven SPEC-requested
corrections and the level 07 recovery-evidence correction are complete. Full validation and report
consistency checks pass. Fresh SPEC, recovery SPEC, QUALITY, and integration reviews accept with
concerns; private receipts are listed in the
[difficulty_36_acceptance.md](../../active_plans/reports/difficulty_36_acceptance.md).

## Purpose and method

This run assesses all 36 rooms in the captured campaign for a first-time pair of humans sharing a
keyboard and attempting both exits. The existing [difficulty rubric](../../DIFFICULTY_RUBRIC.md),
[typed record contract](../../../devel/difficulty/types.ts), and assessment CLI remain authoritative.
Scores are evidence-backed ordinal expert estimates, not player measurements, pass/fail thresholds,
or instructions to sort or reorder the rooms. Keep collectibles separate, record one-operator input
demand as a note, and use `null` when the evidence cannot support an estimate.

First-pass records are source-blind and locked from the three idle captures for each room. Those
frames support visible opening-cue judgments only; they do not establish routes, action feedback,
mistakes, or recovery. After the complete first-pass set was reviewed and locked, root released source
to the same paired authors for a source-aware pass using authored mechanics and retained route probes
where available. The paired pass records what source and sampled routes establish, while keeping
human discovery and outcomes unknown. The excluded drafts, replacements, authorized digest-only
repairs, and custody evidence are documented in the plan and ignored review receipts. Root accepted
the fresh first-pass re-review. The source-aware map/report incorporate the accepted second-pass
correction batch. Root accepts the bounded assessment as expert design evidence with concerns.

During broad source lookup, authors b16, b36, a09, and a10 incidentally encountered snippets from
older assessments. Their first-pass locks remain unchanged. The source-aware estimates must not be
described as experimentally independent of historical judgments; current judgments should be
grounded in current cues, mechanics, and route evidence. Detailed custody and review chronology is
in the [assessment plan](../../active_plans/active/difficulty_36_refresh.md) and ignored receipts.

The source-aware pass must describe the authored mechanics, plausible mandatory two-hero routes,
mistakes and recovery where supported, each hero's contribution, prior concept introductions, and
causal comparisons to the locked first pass. It must not rewrite first-pass records or treat a
scripted route as a human outcome.

## Frozen capture and provenance

The run snapshot was the first artifact. Capture used the existing observation CLI against the
local preview, with no gameplay keys and hints closed. Each of the 36 rooms has a packet and three
idle screenshots at approximately 0, 1.5, and 4 seconds (108 PNGs total); PNGs are intentionally
ignored by Git. The packet records visible opening cues, not what a player would do or what feedback
follows an action. No full visual review of the 108 images was part of the preparation gate.

| Input | SHA-256 |
| --- | --- |
| Campaign roster | `4c4c10a5fce64ae23413479150bc892ba422cc17fb295828828274b7b1824958` |
| Source fingerprint | `e9085325305887a8099bca9c980eb1f3c0b33bee4800356afe4db671ff8c5398` |
| `dist/main.js` | `21d792e2cdf03e25b3c8164964cc02d3f6b55728e6458d5f409f2ab83f0c2843` |
| `dist/main.js.map` | `fd1f791cca9fb7c0ba344342dabd7946147fce7d557f0111a06ce6f772d06d65` |
| Capture receipt | `8e086d66c5c140f2a91f7d90a92ee4e27f39faa8b1f804b416a12f2071c7f7a3` |

The snapshot, capture receipt, and source binding agree on the 36 IDs, titles, positions, packet
hashes, and image hashes. The packet inventory reports no browser errors. Source, build, and art
were held constant through this assessment and corrected report. Later changes make this
source-bound assessment historical; they do not erase its recorded evidence.

The exact preparation commands, initial sandboxed Chromium launch failure, and bounded resolution
are recorded in ignored `tests/_temp/difficulty36_prepare/REPORT.md`. Independent re-review and
completed lock evidence are in ignored `tests/_temp/difficulty36_first_rereview/REPORT.md`.

## Evidence limits

Idle captures cannot establish learning, player success, feedback after actions, control reliability,
recovery cost, enjoyment, or shared-keyboard comfort. Source inspection and scripted routes can
support a route explanation; they do not measure a human journey. The paired records include narrow
current-source native input probes to both exits for `level_01@2` and `level_03@4`, retained at
`tests/_temp/difficulty36_a01/level_01_probe.json` and
`tests/_temp/difficulty36_a02/l03_probe_result.json`. These are sampled room evidence, not a current
36-room journey. Other route evidence varies in freshness and coverage: `no-reusable-trace` means
none was located in the bounded inventory, not that a route is impossible. A bounded native probe
reports clears for 11 rooms; a later correction adds native clears for levels 14 and 36 and a partial
route for level 15. The level 15 historical browser run needed additional inputs beyond its retained
route. These results do not substitute for a fresh 36-room journey.

The accepted [current32 assessment](../current_32/README.md) is historical context only. Its findings
must be checked against the current36 source-aware records and changed campaign before reuse.

## Outputs and follow-up

The existing explicit-run validator and report commands passed for the complete paired set:

```sh
npx tsx devel/assess_difficulty.ts validate --run-dir docs/difficulty_runs/current_36
npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/current_36
```

Outputs are `campaign_map.json`, `report/LEVEL_DIFFICULTY_REPORT.md`,
`report/difficulty_campaign.svg`, and one dossier per room under `report/difficulty_levels/`. The
full command output is captured in ignored `tests/_temp/difficulty36_report_owner/validate_final.log`
and `report_final.log`; a scoped verifier confirms 36 inputs and outputs and agreement between
report-table values and the map. The seven SPEC-requested second-pass corrections and the later level 07 recovery-evidence correction
are reflected in these outputs. The level 07 no-fold baseline death is distinguished from the
retained historical fold-present candidate's catch and continuation; the current source has matching
fold geometry, but that candidate was not replayed on the current build. The separate shortcut death
at x=926.8 occurs before the fold and does not establish a normal-route arrival failure. The map
places level 07 at puzzle 75, platforming 61, recovery 2, clarity 3, and unknown control friction.
Level 05's same-evidence comparison was checked and retained unchanged. Root selects and authorizes a
separate bounded lung-tissue compression/recoil prototype to launch a partner toward a reciprocal
return path. Test whether it creates a cooperative choice distinct from HOLD relays, parcel cargo,
and lifts; set it aside if it does not. The idea is unproven, and any production decision follows the
experiment's evidence. No new physics framework, configuration, or feature quota is called for, and
future gameplay changes do not require another full campaign refresh. Human outcomes remain
unmeasured without separate direct player evidence.
