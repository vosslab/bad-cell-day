# Gut Feeling production closeout

## Decision status

**ROOT ACCEPTED `DONE_WITH_CONCERNS` at 2026-10-17 19:13:44 UTC.** The private
feasibility result was accepted as `KEEP_WITH_CONCERNS` at 2026-10-17 18:52:15 UTC. The production
implementation, canonical code/build/standard-browser gates, public SPEC, six fresh QUALITY passes,
and focused rendered evidence are complete. The targeted documentation correction re-review and
final integration review both returned `ACCEPT_WITH_CONCERNS`; their receipts are linked under
[review closeout](#review-closeout).

## Scope and preservation

Stable `level_45`, **Gut Feeling**, is at campaign position 6, between `level_37` and `level_06`, in
the intestine chapter. The current 45-room roster is lungs 1-5, intestine 6-12, marrow 13-19, liver
20-31, brain 32-44, and tumor 45. The addition preserves the 44 earlier serialized room definitions
and their relative order. It uses the existing scene registry, level list, campaign order, and
intestine renderer. No shared engine, state, save, or configuration layer was added.

The authored co-op route is causal: Isp nudges Gem into a step for Pac; Isp boards the stationary
lift first; Pac then holds the pad to power Isp's ride. If the lift has left, Pac keeps holding
while Isp waits on the dock for its return. Activating the pad starts both villains' weapons, which
recur independently; Pac returns by the lower route, passes Cana, and reaches the orange exit. The
registered definition retains the approved fixture geometry and mechanics. Scripted evidence
supports this route but does not establish uniqueness, human discovery, fairness, or fun.

## Evidence

- Imported-production registry verification passed: all 44 earlier serialized definitions and
  relative order are unchanged; the roster has 45 entries; the insertion is
  `level_37`, `level_45`, `level_06`; the existing progression policy unlocks 45 after 37, keeps 06
  locked until 45 is cleared, and permits replay of an already-earned 06.
- Four registered-production 120 Hz native replays completed both exits: normal route (1467 frames),
  missed-step retry (1535), ten-frame pad release and return (1449), and early activation followed
  by a missed lift cycle and return boarding (2291). These deterministic routes are sampled
  evidence.
- Root reports 96 canonical code checks, the official build, and both standard browser smokes
  passing (2/2). Disk and served JavaScript SHA-256 is
  `09bf03a284d259660a93ba5e29aae9038e4c9c7c7f78a4d0bf4e743337cc8907`; the source map SHA-256 is
  `fcf9ca2ea09628845826bfe8723402e0a012c2af67ebf5dc2a034236a897fbc0`. All 72 mapped sources are
  present and match.
- Seven standard built-browser views passed with zero deaths or browser errors; root reviewed all
  seven originals. Two complete recovery cases also passed on the same JavaScript bundle: a full
  missed-step retry and a full early-activation/missed-cycle return-boarding route. Both completed
  with zero deaths, zero browser errors, and zero retries; root viewed both completion PNGs. The
  earlier over-short input prefixes did not complete and are superseded by the full saved sequences;
  no source, helper, or game change was made for that correction. The original seven-view receipt is
  preserved at `tests/_temp/gut_feeling_browser_recovery_cases/receipts/`. The full recovery report,
  captures, and receipt are in `tests/_temp/gut_feeling_full_recovery_validation/`. Its receipt is
  `tests/_temp/gut_feeling_full_recovery_validation/gameplay_screenshot_receipt.json`, SHA-256
  `9e0e758cff97d31a2a6061d0d86f9ddab443e015a726adfb324e62aee0403311`, captured at
  `2026-10-17T19:06:33.123Z`.
- Public SPEC disposition is `ACCEPT_WITH_CONCERNS`. All six fresh audit passes (Plan, Test, Style,
  Docs, Legacy, Comment) are complete; the focused audit and pass receipts are in the ignored local
  `tests/_temp/gut_feeling_six_pass_audit/` directory. These temporary artifacts are local evidence,
  not shipped regression tests.

The production module SHA-256 is
`2f04edeb784dec16103ceb88ac5b52518940e2796d70f5da288d4699d02df617`; the registered room JSON
SHA-256 is `90d089f10f96656deec0f2917d53a3437a40a84a5e78b6cf1cfecf5942d92785`.

## Review findings and disposition

The actionable documentation findings are corrected: current roster pointers now show all 45 rooms
and their actual organ positions; current difficulty documentation states that current44 is frozen
historical evidence and does not score Gut Feeling; the plan states the causal two-hero behavior and
accurately distinguishes passed gates from pending review; the changelog entry is under the existing
Additions and New Features category; and the design decision links to both owner source files.

Two low advisories are retained without new gates or source changes. The plan filename
`EARLY_MOVEMENT_RELAY.md` remains as assigned; no filename churn was requested. The in-game hint's
readability remains an advisory: root reviewed the rendered states and identified no concrete issue
requiring a rewrite, and no human readability claim is made. If a concrete source, browser, or review
blocker emerges, correct it at its owning source or room and rerun the affected check. Do not add an
arbitrary threshold or require a new full 44-room run.

Human discovery, readability, enjoyment, fairness, difficulty, overjump recovery, and paired comfort
remain unknown. The immutable current44 difficulty files remain historical and unchanged; no score
or assessment is inferred for level 45. No remote publication is claimed.

## Opening-miss follow-up

The phrase "overjump recovery" above records the human outcome as unknown. A later bounded native
probe demonstrates one ordinary-input cooperative recovery after the opening jump lands on Gem and
Isp walks off the high fold: Isp later supports Pac's jump to the middle tissue, and the shared lift
route reaches both exits. Root independently replayed the same saved input and trace. This sampled
route does not establish human discovery, a solo route, or universal recovery. It does not change the
historical production decision or its timestamp. See the
[follow-up evidence note](../../../tests/_temp/gut_feeling_recovery_evidence_closeout/REPORT.md).

## Review closeout

The fresh targeted documentation correction re-review returned `ACCEPT_WITH_CONCERNS` at
`tests/_temp/gut_feeling_docs_rereview/REPORT.md`; the final integration review returned
`ACCEPT_WITH_CONCERNS` at `tests/_temp/gut_feeling_final_integration/REPORT.md`. Root accepted this
bounded production milestone as `DONE_WITH_CONCERNS` at 2026-10-17 19:13:44 UTC. The filename and
hint-density advisories remain low and nonblocking. Human discovery, readability, enjoyment,
fairness, difficulty, overjump recovery, and paired comfort remain unmeasured; this acceptance makes
no human-outcome or universal-recovery claim. The broad continuous gameplay goal remains active.

## Evidence paths

- [Production plan](../active/EARLY_MOVEMENT_RELAY.md)
- [Production implementation evidence](../../../tests/_temp/gut_feeling_production/REPORT.md)
- [Public SPEC review](../../../tests/_temp/gut_feeling_public_spec/REPORT.md)
- [Six-pass audit](../../../tests/_temp/gut_feeling_six_pass_audit/REPORT.md)
- [Full recovery browser report](../../../tests/_temp/gut_feeling_full_recovery_validation/REPORT.md)
- [Current 45-room source order](../../../src/levels.ts)
