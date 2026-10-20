# Current 44-room difficulty refresh

## Goal and context

Create a fresh, complete, source-bound expert difficulty assessment for the current 44-room
campaign, then use its evidence to select one concrete next gameplay priority. This is gameplay
assessment using the existing workflow, not new assessment infrastructure. The current roster has
44 live rooms and 12 live liver rooms; the assessment baseline's code gate passed 96 checks, both
build smokes passed, and 71 bundled map sources matched. The observed app hash was
`2d43091057039295e806bc171dd0b20dad159ef548209728344009940f96c1bb`; the liver SVG hash was
`cb5ac8e30bbce1e3366811d0d3ae7793a0a8658e81c4fcc2f65c6583c151d2ee`. Current44 is now the
source-bound assessment; current41 remains frozen historical evidence and contributes no scores.

The [difficulty rubric](../../DIFFICULTY_RUBRIC.md), typed contract, and existing CLIs remain
authoritative. Estimate the mandatory two-human shared-keyboard route across all eight dimensions,
with puzzle and platforming as separate derived axes. Keep optional collectibles and the
one-operator input note separate. Expert ordinal estimates cannot establish human success,
discovery, enjoyment, comfort, or measured difficulty.

## Approach

1. With root execution approval received, confirm the checkout is still the intended stable assessment
   baseline. Create `docs/difficulty_runs/current_44/` with
   `npx tsx devel/assess_difficulty.ts snapshot --run-dir docs/difficulty_runs/current_44`.
   Confirm that the snapshot contains the complete 44-room roster and the expected current source
   and build identity before capture. If roster, source, or build identity differs, stop and resolve
   the baseline before using it.
2. Capture the full snapshot roster with
   `node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/current_44`.
   Use the existing capture helper and its three idle frames per room. Keep PNGs as ignored local
   artifacts; track the observation JSON and required provenance files.
3. Assign fresh, source-blind Luna authors in chronological room groups (approximately eight
   groups; choose exact boundaries and authors from the captured roster). Each author records and
   locks their assigned rooms in campaign order before receiving the next packet. Review the whole
   campaign's first-pass records and locks before releasing any source access. The coordinator must
   enforce this campaign-wide gate because the CLI enforces locks only per room.
4. Have each first-pass author continue their same paired assignments for pass two. Use the
   original assignment and locked first pass; inspect source and existing ordinary-input route
   evidence where available. Record mandatory routes, both heroes' roles, previous mechanic
   introductions and transfer, plausible common mistakes and consequences, recovery, and
   source-hindsight comparison. Idle-only actions remain hypotheses and feedback remains `null`;
   mark unsupported dimensions unknown. Do not require a new long journey or route matrix.
5. Run full validation and report generation with the explicit run directory. Resolve schema,
   capture, provenance, or semantic findings at their owning boundary, preserve locked first-pass
   records, and obtain fresh review of corrected records. Any source or build change invalidates
   these inputs: create a fresh run and repeat snapshot, full capture, and first pass. Never edit
   frozen provenance to imply freshness.
6. Synthesize the validated map, report, chart, dossiers, and evidence into `FINDINGS.md`. Select a
   concrete highest-value next gameplay action based on player impact, evidence strength, and issue
   ownership (design, cues, controls, or recovery). Do not sort by score, impose monotonic difficulty,
   or turn findings into an automatic feature queue. Obtain fresh SPEC review, then distinct QUALITY
   review, then integration review; record concerns and limits for root's closeout decision.
7. At assessment closeout, update the current pointer and closeout documentation, including the
   stale 43-room claim in `LEVEL_DIFFICULTY.md`. Keep the broad continuous gameplay goal active.

## File scope

- `docs/difficulty_runs/current_44/`: fresh snapshot, observations, paired records, locks, map,
  report, chart, dossiers, findings, and run README. JSON and reports are tracked; captured PNGs
  remain ignored local evidence.
- `docs/active_plans/active/difficulty_44_refresh.md`: this execution ledger and status.
- `docs/active_plans/reports/` and current difficulty navigation/closeout docs: acceptance evidence
  and current pointer after assessment completion, including `LEVEL_DIFFICULTY.md` correction.
- `tests/_temp/difficulty44_*/`: scoped review and validation receipts.
- No production source, tests, runtime configuration, assessment pipeline, or permanent test changes.

## Gates and ledger

| Gate | Owner | Status / next action |
| --- | --- | --- |
| Stable 44-room source/build baseline | Root / preparation | DONE; approved and confirmed by fresh 44-room snapshot |
| Full capture and evidence inventory | Preparation | DONE_WITH_CONCERNS; full capture complete, see `README.md` |
| Chronological first pass and per-room locks | Fresh Luna author groups | ACCEPTED_WITH_CONCERNS by root; all 44 records and locks match (`cc4475`); first pass remains unchanged |
| Campaign-wide first-pass review and source release | Root / fresh reviewers | ACCEPTED_WITH_CONCERNS; source released by root at 2026-10-17 16:55:58 UTC |
| Same-author paired source-aware pass | Original author groups | COMPLETE; all eight PHASE2 handoffs received |
| Source-aware factual review | Fresh reviewers | A/C and B corrections accepted by focused SPEC; D accepted with concerns; E and F/G/H review complete, with E/F/G correction work tracked below and H accepted with concerns |
| Focused record corrections | Assigned correction owners | COMPLETE_WITH_CONCERNS; A/C, B, source-artifact-only, E, F, typed-error, G1/G2, and control-friction corrections received focused SPEC acceptance |
| Per-file `validateSecond` diagnostics | Assessment coordinator | DONE_WITH_CONCERNS; 28/44 passed and 16 first errors are attributed in the diagnostic receipt |
| Full validation and report generation | Assessment coordinator | FINAL combined command exited 0 after control-friction corrections and generated all 44 rooms |
| Findings and fresh SPEC review | Assessment coordinator / fresh SPEC reviewer | ACCEPTED; final SPEC receipt records four narrow corrections and their scope |
| Distinct QUALITY review | Fresh reviewer | ACCEPTED; separate quality receipt |
| Integration review | Fresh reviewer | ACCEPT; targeted receipt at `REPORT.md`; original NEEDS_WORK remains historical |
| Current pointer and closeout documentation | Documentation owner | DONE; status, links, and hashes recorded |
| Root acceptance | Root | DONE_WITH_CONCERNS at 2026-10-17 18:14:54 UTC; bounded assessment accepted |
| Next gameplay action | Root | Approved for development: private additive early barrier-free movement co-op prototype using existing mechanics/physical villains, distinct enabling roles, preserving all 44 successful rooms/order; no new room implemented |

### First-pass ownership status

First-pass counts and handoff receipts are complete. All paired-phase handoffs are also received
under the same authors after root's source release. Do not edit locked first-pass records.

| Group | Author | Positions and rooms | Locks present | Handoff |
| --- | --- | --- | ---: | --- |
| A | `difficulty44_author_a` | 1-5: `level_02`, `level_01`, `level_04`, `level_03`, `level_37` | 5/5 | PHASE2 handoff received; `PHASE2.md` |
| B | `difficulty44_author_b` | 6-11: `level_06`, `level_08`, `level_34`, `level_05`, `level_07`, `level_41` | 6/6 | PHASE2 handoff received; `PHASE2.md` |
| C | `difficulty44_author_c` | 12-18: `level_11`, `level_09`, `level_10`, `level_23`, `level_12`, `level_21`, `level_36` | 7/7 | PHASE2 handoff received; `PHASE2.md` |
| D | `difficulty44_author_d` | 19-24: `level_13`, `level_40`, `level_24`, `level_30`, `level_44`, `level_43` | 6/6 | PHASE2 handoff received; `PHASE2.md` |
| E | `difficulty44_author_e` | 25-30: `level_32`, `level_14`, `level_26`, `level_28`, `level_15`, `level_16` | 6/6 | PHASE2 handoff received; `PHASE2.md` |
| F | `difficulty44_author_f` | 31-36: `level_18`, `level_17`, `level_25`, `level_22`, `level_27`, `level_39` | 6/6 | PHASE2 handoff received; `PHASE2.md` |
| G | `difficulty44_author_g` | 37-40: `level_35`, `level_31`, `level_42`, `level_38` | 4/4 | PHASE2 handoff received; `PHASE2.md` |
| H | `difficulty44_author_h` | 41-44: `level_29`, `level_33`, `level_19`, `level_20` | 4/4 | PHASE2 handoff received; `PHASE2.md` |

### Paired review and correction status

Source-aware reviews are recorded in `REPORT.md`, `REPORT.md`, `REPORT.md`, and `REPORT.md`. Focused corrections for A/C, B, E, F, G1/G2, typed errors, and source-artifact cleanup for nine rooms have fresh SPEC acceptance. E is accepted with concerns about residual generic actor-placeholder route steps; G2 is accepted with concerns about historical simulation evidence not measuring human performance. D and H are accepted with concerns. See the `REPORT.md` for the diagnostic snapshot and combined validation/generation command. First-pass records and production source/build stay frozen.

Focused correction owners completed and received fresh SPEC acceptance for A/C (`level_04`, `level_37`, `level_21`, `level_36`), B (six records), source-artifact-only cleanup for `level_01`, `level_02`, `level_03`, `level_12`, `level_23`, `level_24`, `level_30`, `level_43`, and `level_44`, E (six records), typed-error corrections for `level_34`, `level_41`, `level_11`, and `level_10`, F (six records), G1/G2 (`level_35`, `level_31`, `level_42`, `level_38`), and control-friction corrections for the 20 affected records. E's ACCEPTED_WITH_CONCERNS review notes that redundant generic actor-placeholder route steps remain disclosed; the combined route is not treated as evidence of no route. G2's ACCEPTED_WITH_CONCERNS review preserves the limitation that historical simulation does not measure human performance. The control-friction owner set all 20 unsupported non-null values to unknown while preserving the other eight ratings; fresh SPEC accepted with concerns and root independently confirmed all 44 control-friction diagnostics are null, the other rating axes/clarity/recovery match the initial validated map, and first-pass hashes/locks remain unchanged.

The initial combined report pass and the later control-friction correction are documented in the `REPORT.md`. After the correction received focused SPEC acceptance with concerns and root confirmed the exact null-only correction, the coordinator ran the final combined gate: `npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/current_44`. It exited 0 and reported `Wrote report, SVG, and map for 44 rooms.` The command performs full validation before generation; no separate aggregate validate command was run. Findings and final SPEC are accepted after narrow corrections; distinct QUALITY and targeted integration reviews ACCEPT. Root accepted the bounded assessment as DONE_WITH_CONCERNS at 2026-10-17 18:14:54 UTC. The fresh integration receipt is `REPORT.md`; its original NEEDS_WORK receipt remains historical. See the [acceptance receipt](../reports/difficulty_44_acceptance.md) for hashes, limits, and the approved next gameplay direction.

Future findings evidence includes the sampled `REPORT.md` and `REPORT.md`. Preserve their sample limits; neither establishes unsampled route impossibility or human performance.

### First-pass review concerns

All four fresh review reports accepted their assigned records with concerns: `REPORT.md`, `REPORT.md`, `REPORT.md`, and `REPORT.md`. Root accepted the complete set with concerns and released source access. Preserve these concerns for paired comparison and final review:

- Keep the `level_01` cooperation estimate and `level_12`/`level_26` timing estimates explicitly tentative against source evidence.
- Group C should address relevant earlier visible cues explicitly in paired comparisons without rewriting first-pass experience or implying player mastery.
- Group C disclosed next-prompt metadata exposure before locks in three transitions. No future packet, image, or source exposure was reported.
- Treat manually estimated `created_at` values in groups C, D, and H as unreliable; immutable lock times and documented command order govern chronology.
- Group F disclosed filename-only directory exposure. The central reviewer's memory orientation contained broad-goal context, not room mechanics or routes.
- Group D resumed the same assignment after oversized payload/tool errors and corrected an empty evidence hash before locking `level_30`; its complete six-room set now matches locks.
- Root rechecked the canonical `level_43` lock successfully (exit 0, `019cac`); capture remains fresh for the frozen source/build baseline.

Completion requires a validated complete roster, immutable paired evidence, generated artifacts,
evidence-led findings, review receipts, corrected current navigation, and root's closeout decision.
The assessment completes only this milestone; it does not complete the broader gameplay goal.
