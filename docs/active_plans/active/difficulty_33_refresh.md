# Current33 difficulty assessment

## Goal and context

Create a complete expert map of the current 33-room campaign that can guide the next gameplay
priority. Keep first-encounter estimates distinct from source-informed hindsight. The existing
[difficulty rubric](../../DIFFICULTY_RUBRIC.md), [typed contract](../../../devel/difficulty/types.ts),
and CLI remain authoritative and unchanged. `current_32` and earlier runs are immutable historical
evidence. The captured build was frozen through the capture; root later deferred this assessment
before source-aware work and released gameplay changes to proceed. Idle captures establish visible
starting evidence only; they cannot establish player learning, control reliability, human success,
or enjoyment.

Assess the mandatory route for two humans to reach both exits. Record optional collectibles
separately. Keep one-person simultaneous-control demand as a note. Treat scores as evidence-backed
ordinal estimates, not human measurements or numeric gates. Give focused attention to the changed
`level_10` cue, recurring `level_11` attack, global latch wording, new `level_33`, and the changed
prior order for `level_19` and `level_20`; assess all 33 roster positions under the existing
contract.

## Approach

1. Start a new `docs/difficulty_runs/current_33/` run with `snapshot` as its first artifact, then
   capture the complete current build with the existing CLI. Do not alter source or rebuild during
   this run. The capture produces 33 packets and 99 ignored PNGs; verify their provenance before
   authoring records.
2. Assign four fresh authors to chronological windows: positions 1-8, 9-16, 17-24, and 25-33.
   Each receives only the rubric, typed contract, and the current/earlier packets and images
   permitted by roster position. They do not see source, hints, routes, prior findings, or future
   packets. Review all 33 first-pass records before locking the complete set. Keep unknowns as
   `null`, mark unwitnessed actions as hypotheses, and cite packet/image artifacts with hashes and
   locators.
3. After root releases the complete reviewed lock set, the same four authors continue their paired
   rooms in pass two using source and ordinary-input route evidence. Document actual mechanics,
   both heroes' work, mandatory routes, mistakes and recovery, earlier introductions, optional
   collectibles, and causal hindsight comparisons without changing pass one.
4. Use the existing explicit-run CLI for `validate` and `report`. Review provenance and evidence,
   then prepare concise `FINDINGS.md`, run `README.md`, an acceptance record, and the later top-level
   difficulty-doc pointer. Root owns integration, acceptance, and the separate next-gameplay
   priority.

If a capture, citation, or record fails, repair the actual error with its fresh owner. Preserve
valid blind locks and never rewrite a locked first pass; if a correction would alter a locked first
pass or its freshness inputs, restart in a fresh run. Any source or build change invalidates the
run: rebuild as needed, then create a fresh run, snapshot, and full capture before continuing. No
consequential method decision is open; escalate any newly discovered ambiguity to root before the
dependent gate. Do not add mechanisms, configurations, permanent tests, numeric gates, or gameplay
edits in this milestone.

## File scope

| Path | Purpose |
| --- | --- |
| `docs/active_plans/active/difficulty_33_refresh.md` | This plan and bounded execution contract. |
| `docs/difficulty_runs/current_33/` | Snapshot, packets, records, locks, report, findings, README. |
| `docs/active_plans/reports/difficulty_33_acceptance.md` | Acceptance evidence after completion. |
| `docs/LEVEL_DIFFICULTY.md` | Add the current33 pointer after acceptance. |
| `tests/_temp/difficulty_33_plan/` | Ignored planning scratch only; no permanent tests. |

The execution ledger belongs to its separate documentation owner. Keep all current_32 files,
captures, locks, generated outputs, and historical reports untouched.

## Status and owners

Status: DEFERRED. Root redirected the next gameplay work to a bounded early-recovery prototype
based on the existing `level_05@7` and `level_07@8` evidence. The unaccepted first-pass drafts were
discarded; no first-pass lock/pair or valid current assessment exists. The snapshot and observations
remain historical evidence from before the early-recovery source/build changes. Current32 remains
historical design guidance. This plan does not resume unless root releases a new assessment task;
any future assessment would need to establish its own freshness boundary.

| Gate | Owner | Status |
| --- | --- | --- |
| Approval and capture release | Root | Approved; capture complete |
| First-pass drafts | Four authors | Unaccepted drafts discarded; no complete review/lock set |
| Source-aware pass | Same four authors | Deferred; no source release or paired pass |
| Validate, report, findings, and run README | Assessment/documentation owners | Deferred; README records capture-only status |
| Integration, acceptance, priority, and top-level pointer | Root / docs owner | Deferred; no acceptance record or top-level pointer |

## Completion checks

- Snapshot was the first artifact in the new run and binds the unchanged accepted build. All 33
  current roster entries have valid packets and three retained images each; current_32 is unchanged.
- Four fresh authors completed the assigned chronological windows using only authorized blind
  evidence. Exactly 33 first-pass records were reviewed and locked before any pass-two source
  release; locks and first-pass bytes remain paired and unchanged.
- Exactly 33 reviewed second-pass records cite their corresponding locks and current fingerprints.
  Both passes cover all eight dimensions with evidence or explicit unknowns/confidence; each pair
  compares hindsight causally. Mandatory two-hero routes reach both exits; collectibles stay
  separate; `level_19` and `level_20` prior exposure reflects the inserted `level_33`.
- Existing commands pass with `--run-dir docs/difficulty_runs/current_33`:

  ```sh
  npx tsx devel/assess_difficulty.ts validate --run-dir docs/difficulty_runs/current_33
  npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/current_33
  ```

- The generated map, report, chart, dossiers, concise findings, run README, and acceptance record
  agree on roster, provenance, limitations, and priority evidence. The next gameplay priority is a
  separate root decision; this assessment makes no gameplay edits or claims of measured human
  difficulty, fun, or control reliability.

## Review route if resumed

The approved route, if root resumes this assessment, is: fresh capture owner; fresh blind authors
and lock review; paired source-aware continuation; fresh SPEC review; different fresh QUALITY
review; fresh integration review; root verdict. The prior six-pass audit is complete and is not
repeated for this data task.

## Execution receipts

- Capture succeeded: snapshot was the first run artifact; 33 packets and 99 PNGs passed the
  read-only integrity audit. The helper exited 0 and confirmed HTTP/local build and source-map
  fingerprints. No assessment records existed at capture handoff. The one-time receipt is at
  `tests/_temp/difficulty_33_capture/REPORT.md`; that ignored temporary file is not retained in
  the repository.
- The captured `main.js` fingerprint is `afbb2df1ebd8b743b437916ff4a8669e348358874218cbe4387949fbb8e8a0be`;
  the source map fingerprint is `3d73f85c96157a47240381a9c00a4b2166934feaaca768f64cb5ff969bdb23c2`.
  These bind the approved frozen build; they are provenance, not assessment results.
- Authors stopped before a complete review and lock set. Their unaccepted drafts were discarded;
  no first-pass lock/pair or valid current assessment exists, and no score was promoted. See the
  capture-only `README.md`.
- Root deferred this scoring cycle to prioritize the early retry burden already documented for
  `level_05@7` and `level_07@8` in `FINDINGS.md`.
  The separate one-time recovery probe at `tests/_temp/early_recovery_probe/PROBE.md` demonstrates
  one sampled survivable `level_05` miss on a clone, including preserved STOP/STEADY/RESCUE duties;
  it also documents the softened ferry landing and lack of browser or human acceptance. This
  ignored temporary receipt is not retained in the repository. This is the current gameplay
  direction, not a result of current33 scoring.
