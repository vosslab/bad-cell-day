# Current 32-room difficulty assessment

## Status: DONE_WITH_CONCERNS; frozen R3 baseline

The accepted `MovingGem` / `new32gameplay` milestone is `DONE_WITH_CONCERNS`. The closed
[Moving Gem acceptance report](moving_gem_acceptance.md) leaves the continuous goal active. This
assessment is root-approved. All 32 blind first-pass records and locks exist; root checked their
hashes and order, sampled records across authors, and confirmed assessors' blindness statements.
After that review, root released source to the same four paired assessors, who completed all 32
source-aware passes. Full validation passed and the map, report, chart, dossiers, and cross-room
findings now exist. Fresh SPEC, a different fresh QUALITY review, and integration review all
returned ACCEPT_WITH_CONCERNS. Root accepted the assessment as DONE_WITH_CONCERNS after final
repository checks: `source source_me.sh && python3 -m pytest tests/ -q` exited 0 (3,712 passed;
chunk `a8dc38`), and `./check_codebase.sh` exited 0 (typecheck, lint typecheck, ESLint, Prettier,
and 90 Node tests; chunk `4e5e52`). An earlier check failed with TS5097 because ignored
`tests/_temp/marrow_weapon_probe/probe.ts` was included; archiving the helper as `.ts.txt` made the
check pass without product or compiler changes. The assessment is accepted with concerns and its R3
data remain frozen. Human fun and control comfort are unmeasured.

The R2 auxiliary full-campaign/save evidence and frozen R3 baseline differ only in inactive Cana's
display position (x80 to x750). R3 captures and focused normal/reduced-motion browser checks are
separate evidence; do not merge their provenance or describe either as human outcome evidence. The
approved next gameplay milestone is recorded in
[`recurring_marrow.md`](../active/recurring_marrow.md).

The frozen `current_31` run remains historical evidence. Do not copy its records, scores, routes,
or findings into a current 32-room assessment. The existing CLI requires current snapshot and
capture provenance plus first-pass, lock, and second-pass records for all 32 rooms; a partial run
cannot produce an honest current map or report. See the
[difficulty assessment plan](../active/difficulty_assessment.md),
[difficulty rubric](../../DIFFICULTY_RUBRIC.md), and the existing workflow evidence at
`tests/_temp/difficulty_32_workflow/REPORT.md`.

## Frozen inputs

Use the current accepted R3 build and campaign as one frozen snapshot:

| Input | SHA-256 |
| --- | --- |
| `dist/main.js` | `fd873084465c54343074f7a1d1d5eb4c0b40d0cd3c511b5f71c765df9aea1498` |
| `dist/main.js.map` | `d945732eb5f4526a2888b783c0f2ec0fbb26a0711a43e32357d2c7359b39680e` |

The campaign map was produced by the report workflow. Root acceptance verified all 55 embedded
source contents against disk and verified that served `index.html`, `main.js`, and `main.js.map`
match `dist/`. It also verified all 32 rooms in the game and normal, reduced-motion, and save
behavior. Preserve those checks as baseline context; this ledger does not claim new player-outcome
evidence.

The current snapshot was created successfully and the existing capture tool completed for all 32
rooms. Snapshot campaign SHA-256 is `e35a3db7af0347547b2dffbae14af4d70f60de251e3f4ab8b52ef02e93ae4400`;
source fingerprint is `37536853e15a63e16db398864a144a0294b500b05a79877d5743afc6142af12a`. The
capture receipt and source binding are under `docs/difficulty_runs/current_32/observations/`.
All 32 packets have three retained PNGs (96 total), one consistent main/map binding, no browser
errors, and closed hints. Exact commands and review notes are in
`tests/_temp/difficulty_32_capture/REPORT.md`. All 32 first-pass JSON records and locks exist. Root
checked their hashes/order and sampled the four authors before source release. The paired records
passed full validation and report generation under the same snapshot. Generated outputs are
`docs/difficulty_runs/current_32/campaign_map.json` and the report, chart, and dossiers under
`docs/difficulty_runs/current_32/report/`; reporter command history is in
`tests/_temp/difficulty_32_reporter/REPORT.md`. Fresh SPEC and QUALITY review evidence is in
`tests/_temp/difficulty_32_spec/REPORT.md` and
`tests/_temp/difficulty_32_quality/REPORT.md`.

## Assessment method

Use fresh Luna6 general-agent assessors for paired assignments, with each assessor writing both
passes for their assigned campaign window. Resume pass two only after all 32 first-pass records
are reviewed and locked. Apply the shared-keyboard, two-human,
first-time-player viewpoint consistently across the whole campaign. Score the rubric's eight
dimensions with evidence and rationale, and keep puzzle and platforming axes separate. Treat
solution clarity, recovery cost, and control friction as burdens beside the axes. Use `null` where
the evidence cannot support a score. Do not add score thresholds, pass/fail gates, or forced
monotonic difficulty.

The capture packets show only idle states: the selector is seeded, each room is captured at 0,
1.5, and 4 seconds, and hints stay closed. They do not show practice or mastery. Do not infer
first-step feedback, recovery, or control friction from idle images when those are not observable.
Keep interesting challenge distinct from confusion, and do not claim human outcomes.

First-pass work stays blind until all 32 records are locked. Assessors receive the rubric, type
contract, generic style rules, and packets only through the current room. They may inspect all
three idle images for that room and earlier initial images as needed, but no future-room packets
before locking its record. They must not see the current-31 assessments, findings, routes, source,
hints, or the latest solution-bearing `CHANGELOG.md`. This first-pass exception to the usual
repository rules is approved for this assessment. Assessors must not read this manager ledger,
which includes campaign assignments and gameplay context.

Assign disjoint campaign-position windows to first-pass writers:

| Positions | Room IDs in order |
| --- | --- |
| 1-8 | `02`, `01`, `04`, `03`, `06`, `08`, `05`, `07` |
| 9-16 | `11`, `09`, `10`, `23`, `12`, `21`, `13`, `24` |
| 17-24 | `30`, `32`, `14`, `26`, `28`, `15`, `16`, `18` |
| 25-32 | `17`, `25`, `22`, `27`, `31`, `29`, `19`, `20` |

Canonical paired-task attribution and the author strings in the locked records are:

| Paired task | Positions | First-pass author string | Second-pass author string |
| --- | --- | --- | --- |
| `/root/difficulty_32_pair_01_08` | 1-8 | `Luna6` | `Luna6` |
| `/root/difficulty_32_pair_09_16` | 9-16 | `Codex Luna6 independent first-pass assessor` | `Codex Luna6 paired second-pass assessor` |
| `/root/difficulty_32_pair_17_24` | 17-24 | `Luna6` | `Luna6` |
| `/root/difficulty_32_pair_25_32` | 25-32 | `Luna6 paired assessor` | `Luna6 paired assessor` |

The existing `lock` command validates each first-pass record before writing its lock. Lock records
once reviewed; never rewrite them. After the full first-pass set is locked, the same paired writers
may inspect source and intended routes. They record mechanics, legal mandatory routes,
optional collectibles, recovery, and causal comparisons to the locked first pass. Existing current-32
gameplay, browser, native, and source receipts are available for this pass; frozen current-31 scores
remain historical and are not fresh scores.
Coordinate record ownership only; do not override first-pass judgments.

## Execution and acceptance

1. At execution, ensure `docs/difficulty_runs/current_32` is absent or empty. The snapshot command
   must create the run contents first; do not place a README or other file in the directory before
   snapshotting. **COMPLETE:** `snapshot.json` was the first run artifact.
2. Capture all 32 rooms with the existing observation tool. Keep capture seeds as selector setup,
   not gameplay evidence. **COMPLETE:** 32 packets, 96 idle screenshots, receipt, and capture-time
   source binding are present.
3. **COMPLETE:** all 32 blind first-pass records and locks exist. Root checked every hash and room
   order, sampled records across the four authors, and confirmed each author's blindness statement.
   All first-pass locks preceded source release; locked records are immutable.
4. **COMPLETE:** the same four paired assessors completed all 32 source-aware records and
   comparisons after the lock review. First-pass records and locks remain unchanged.
5. **COMPLETE:** full validation passed; report generation produced the campaign map, report, chart,
   and 32 dossiers. Cross-room findings rank a small set of cue and recovery priorities by likely
   player impact, evidence strength, and owning concern.
6. **COMPLETE:** fresh SPEC review returned ACCEPT_WITH_CONCERNS.
7. **COMPLETE:** a different fresh QUALITY review returned ACCEPT_WITH_CONCERNS.
8. **COMPLETE:** fresh integration review across records, generated outputs, findings, and docs
   returned ACCEPT_WITH_CONCERNS.
9. **COMPLETE:** root final checks passed and root accepted the assessment as DONE_WITH_CONCERNS.
   The continuous game-development goal remains ACTIVE.

The CLI validates the exact current roster only after the complete 32-room paired set exists; there
is no standalone per-room validation command. Completion means the existing workflow produces the
paired map, report, chart, and dossiers. Keep the 31-room artifacts immutable and label all expert
estimates as estimates. The continuous user goal already authorizes follow-on gameplay work; root
will record that scope after assessment review.
