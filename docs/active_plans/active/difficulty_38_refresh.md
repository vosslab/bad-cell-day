# Current 38-room difficulty assessment

**Status: ROOT ACCEPTED - DONE_WITH_CONCERNS.** The 38-room assessment profiles the current source
after the accepted `level_37`, `level_38`, and `level_04` changes. Keep `current_36` and its outputs
frozen as historical evidence. The continuous game-development goal remains ACTIVE.

## Goal and authority

Create a reusable, evidence-backed expert profile of all 38 rooms in current campaign order to guide
the next gameplay decision. Preserve the existing two-pass first-encounter/source-aware method:
compare each author's visible-cue expectations with current mechanics and routes, including actual
earlier learning, both heroes' contributions, common mistakes, recovery, and causal rating changes.
The [rubric](../../DIFFICULTY_RUBRIC.md) owns method and interpretation;
[types.ts](../../../devel/difficulty/types.ts) owns record shape; existing CLI tools own capture,
locking, validation, and report generation. This assessment does not change gameplay or campaign
order and does not create a feature queue. Root owns release of assessors, adjudication, and acceptance.

The current chapter ranges are lungs 1-5, intestine 6-10, marrow 11-17, liver 18-26, brain 27-37,
and tumor 38. Assess the captured roster as it stands; do not reorder rooms while the run is frozen.
Preserve the distinct accepted finale. Human outcomes remain unknown without direct player evidence.

## Method and evidence limits

- Assess the mandatory both-exit route for two humans sharing a keyboard. Keep collectibles separate
  and single-operator input demand as a note. Use the existing eight dimensions and ordinal anchors;
  use `null` when evidence is insufficient.
- First pass uses only the rubric, type contract, and the current or earlier chronological
  observation packets. It must not use source, snapshot, authored solutions, historical ratings,
  future packets, or another assessor's answers. Earlier exposure is not proof of learning.
- Record hypotheses for actions not witnessed in idle captures; idle changes cannot establish
  feedback from those proposed actions. If a locked first-pass record describes an idle change in
  `observed_feedback`, preserve it and treat it only as a passive transition with unknown cause.
  Screenshots establish canvas visibility, visible DOM text is separate, and idle captures do not
  establish routes, mistakes, or recovery.
- For each assigned room, lock its first-pass record through the existing CLI before opening the
  next future packet. The same paired author then inspects source,
  authored mechanics, legal ordinary-input routes, and recovery; compares causal findings without
  editing pass one; and grounds prior learning in its actual earlier introduction.
- Cite claims to retained artifacts with repo-relative path, SHA-256, locator, and claim. Keep
  collectibles, human observations, and single-operator demands separate from the two-human baseline.
- Treat scores as ordinal expert estimates, not measured difficulty, player success, discovery,
  enjoyment, frustration, completion time, comfort, rank gates, or a command to sort rooms. Do not
  add hazards, tighten jumps, or add travel just to raise values. Difficulty waves and breathers are
  not automatically defects.

## Execution and ownership

1. **CAPTURE COMPLETE:** capture owner froze the current source/build snapshot and completed the
   fresh idle capture in `docs/difficulty_runs/current_38`. The owner maintains only that run's
   snapshot, README, observations, and capture temp evidence. PNGs remain ignored and locally
   available. See the `README.md`.
2. **ROOT CHECKPOINT COMPLETE:** root independently rechecked source currency, packet roster, and
   capture counts, then confirmed `CAPTUREREADY` and assigned seven paired groups. The original
   `g6` author reported future-packet exposure before writing any records or locks and stopped;
   fresh `g6b` replaced only that untouched assignment. Other groups and capture evidence remain
   valid.
3. **FIRST PASS REVIEW ACCEPTED WITH CONCERNS:** the independent review reports
   `DONE_WITH_CONCERNS / ACCEPT_WITH_CONCERNS` for all 38 first-pass records and locks. Schema,
   IDs, evidence hashes/locators, lock hashes, screenshot review, and strictly increasing lock times
   within all seven groups pass. No first-phase source exposure or fabricated interaction feedback
   was found. A metadata check later found 18 first-pass `created_at` values later than their lock
   times; use actual lock times, hashes, and sequence for chronology, preserving all locked records. See
   `tests/_temp/difficulty38_first_review/REPORT.md`.
4. **PAIRED PASS RECORDS READY:** all seven groups completed all 38 source-aware records and each
   author's local `validateSecond` passed. First-pass and lock hashes remain unchanged. All 38
   `control_friction` ratings are `null`: source maps and native `GameInput` routes do not verify
   browser keyboard/focus/input handling; no new tests are required. Preserve the
   three passive idle transitions in levels 12, 23, and 36 as observations with unknown causes, not
   evidence that proposed player actions worked. Actual lock metadata, not author-entered
   `created_at`, governs first-pass chronology.
   - g6b reported a broad `src` and `devel` search returning historical assessment title/ID hits,
     without scores or opening a file. Root allows targeted `src`-only continuation; first-pass
     blindness remains intact.
   - g3 reported title/ID-only historical assessment exposure during source work. Root allows
     source/trace-grounded completion; first-pass blindness remains intact.
   - g1 reported a broader `rg` search of `tests` and `docs` that exposed a historical Level03
     assessment/score row before levels 03 and 37 were written; levels 02, 01, and 04 were already
     drafted. Root allows source/trace-grounded completion, while recording that g1's affected
     source-aware estimates are not independent of historical judgments. Early SPEC reviewed g1's
     levels 03 and 37 as `ACCEPT_WITH_LIMIT`; first-pass evidence remains unexposed.
   Fresh early/middle/late/final SPEC reviews completed. The corrected 15-record batch substantively
   passed re-SPEC; final spot SPEC accepted levels 05, 11, 12, and 14. Corrections include prior-room
   position/attribution fixes in levels 10, 11, 12, and 23; level 14 clarity 2 without hint evidence;
   level 26 execution 3 on mandatory actions only; and level 12's no-cargo model proof (8.76 seconds,
   both exits, cargo unchanged). The level 05 route now waits for STOP to restore before Pac crosses
   to STEADY; its current native trace completes both exits at 10.98 seconds. These source traces
   cover levels 04, 05, 12, 37, and 38, not the full journey. Root accepted removing five duplicate
   per-step level 05 trace citations while retaining the route-level trace and source evidence; the
   final tool text refresh is active.
5. **VALIDATION, FINDINGS, REVIEWS, AND ROOT ACCEPTANCE COMPLETE:** full current38 validation/report
   passed and generated 38 room records, the campaign map, dossiers, chart, and `FINDINGS`. Fresh
   SPEC completed after the recorded corrections; fresh different QUALITY and integration accepted
   with concerns. Root accepted the assessment as `DONE_WITH_CONCERNS`, with no unresolved material
   finding or architectural drift. The generated assessment is frozen to the captured source/build
   bindings recorded in the run README.
6. **CLOSEOUT COMPLETE:** preserve the assessment limits and acceptance in the run README and this
   plan. The continuous game-development goal remains ACTIVE. Root approved the separate
   [pad-role cue plan](pad_role_cues.md) for local level 07 effect cues; that work preserves release
   inference and mechanics, shows no full solution, introduces no framework, and is outside this
   assessment closeout. The source remains frozen until root receives this closeout.

The existing command boundary is:

```sh
node devel/capture_difficulty_observations.mjs --run-dir docs/difficulty_runs/current_38
npx tsx devel/assess_difficulty.ts prompt LEVEL_ID --pass first --run-dir docs/difficulty_runs/current_38
npx tsx devel/assess_difficulty.ts lock LEVEL_ID --run-dir docs/difficulty_runs/current_38
npx tsx devel/assess_difficulty.ts prompt LEVEL_ID --pass second --run-dir docs/difficulty_runs/current_38
npx tsx devel/assess_difficulty.ts validate --run-dir docs/difficulty_runs/current_38
npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/current_38
```

Run commands only at their phase gate; prompt output does not authorize disclosure beyond the
current phase.

## Completion checks and recovery

- All 38 public roster packets, snapshot, source/build bindings, receipt, and image identities match
  the current source/build; ignored PNGs remain available for validation.
- Independent review accepted all 38 first-pass records and immutable locks with concerns before
  source release. All 38 paired records are complete and their local `validateSecond` checks pass;
  first-pass and lock hashes remain unchanged.
- Full-run validation/report and map, dossiers, chart, and findings generation pass. Fresh SPEC,
  different QUALITY, integration, and root acceptance are complete with concerns.
- Findings compare evidence and progression rather than sorting scores; cite actionable priorities
  and distinguish unknowns from verified mechanics. The existing finale remains a separate accepted
  payoff; assess whether current evidence reveals a real priority before proposing follow-up.
- Current source remains valid; no historical run or PNG artifact is mutated. No numeric threshold,
  difficulty CI gate, byte/pixel matrix, or full-campaign play claim is added.

If capture or a blocking check fails, identify the affected provenance or record evidence and
re-capture/rescore only in a fresh run without overwriting locks. If the selected run has stale
source/build bindings, stop and have root choose a fresh directory before continuing. Do not invent
record types or duplicate rubric requirements to compensate.

## Decisions and open checkpoint

| Item | State | Owner / evidence |
| --- | --- | --- |
| Preserve the current 38-room order and accepted finale | DECIDED | Root; current source map and campaign-payoff reassessment |
| Set aside Move the Crossfire proposal | DECIDED | Root; physical-villain scout found overlap with existing Cana targeting and SHOVE patterns |
| Assess current38 to identify an evidence-backed next gameplay priority | SELECTED | Root; findings and review remain pending |
| Capture handoff and first-pass release | COMPLETE | Root confirmed CAPTUREREADY; see the `README.md` |
| Choose assessment ownership and paired groupings | COMPLETE | Root assigned seven paired groups; see the `README.md` |
| Release source-aware paired pass | COMPLETE WITH CONCERNS | Root issued ALL38LOCKED_SOURCE_RELEASE after accepting the first-review artifact |
| Paired source-aware records | COMPLETE | All 38 records complete; every author's local `validateSecond` passed |
| Full-run validation and report artifacts | COMPLETE | 38 records, map, dossiers, chart, and FINDINGS are frozen to captured source/build |
| SPEC review | COMPLETE WITH CORRECTIONS | Corrected batch passed re-SPEC; final spot accepted levels 05, 11, 12, and 14 |
| Different QUALITY review | ACCEPTED WITH CONCERNS | Fresh review recomputed both axes and accepted the synthesis |
| Integration review | ACCEPTED WITH CONCERNS | No unresolved material finding or architectural drift |
| Root assessment acceptance | DONE_WITH_CONCERNS | Root accepted current38; continuous game-development goal remains ACTIVE |
| Approved next candidate | SELECTED | Root approved the separate pad-role/local level 07 cue plan |

