# Current 45-room Gut Feeling documentation correction delta

This is a bounded follow-up to the immutable current44 audit below, not a rewrite of that record.
The six fresh Plan, Test, Style, Docs, Legacy, and Comment passes reviewed the additive Gut Feeling
delta. Their report and pass receipts are retained in the ignored local
`tests/_temp/gut_feeling_six_pass_audit/` directory.

## Findings and disposition

- **Medium, resolved:** `USAGE.md` and `LEVEL_DIFFICULTY.md` described the 44-room source as current.
  They now identify the 45-room roster and current organ positions, while labeling current44 as
  immutable historical assessment evidence that does not score Gut Feeling.
- **Low, resolved:** the production ledger now states the causal co-op sequence and reports passed
  code/build/standard-browser/SPEC/six-pass gates accurately. The changelog is under the existing
  Additions and New Features heading, and the design decision links to the room module and registry.
- **Low, retained advisory:** the explicit filename `EARLY_MOVEMENT_RELAY.md` remains unchanged. No
  plan filename churn was requested.
- **Low, retained advisory:** the in-game hint's readability remains unmeasured by human play. Root
  reviewed rendered states and found no concrete issue requiring source prose changes; no hint
  rewrite or new gate was added.

## Evidence and limits

Root reports 96 code checks, the official build, and both standard browser smokes passing. Four
registered native routes complete in 1467, 1535, 1449, and 2291 frames with both exits. Seven
standard built-browser views and two full recovery routes passed on the same verified served bundle;
root reviewed the originals, and all nine views had zero deaths/errors. The two recovery routes use
the complete saved ordinary-input sequences; the earlier short prefixes did not reach completion.
All 72 mapped sources match the served source map. Human discovery, readability, fun, fairness,
difficulty, overjump recovery, and paired comfort remain unknown. No remote publication is claimed.

The [production closeout record](../reports/GUT_FEELING_ACCEPTANCE.md) is ROOT ACCEPTED
`DONE_WITH_CONCERNS` at 2026-10-17 19:13:44 UTC after targeted documentation correction re-review
and final integration review both returned `ACCEPT_WITH_CONCERNS`. The filename and hint-density
advisories remain low; human outcomes and overjump recovery remain unmeasured, and the broad
continuous gameplay goal remains active. This delta does not alter the **current44 audit** or the
still older **historical 43-room audit** below.

---

# Current 44-room audit

Completed a fresh six-pass review of the full pending worktree on 2026-10-17 at the current 44-room
campaign boundary. The reviewers examined `git diff HEAD` (staged and unstaged) and untracked
source, assets, docs, and generated artifacts. Pass reports are retained under `tests/_temp/`:
`audit44_plan/REPORT.md`, `audit44_test/REPORT.md`, `audit44_style/REPORT.md`,
`audit44_docs/REPORT.md`, `audit44_legacy/REPORT.md`, and `audit44_comment/REPORT.md`.

## Findings and disposition

The six passes reported five distinct findings:

- Plan: one low finding that the physical-villains plan presented its 43-room acceptance snapshot as
  current.
- Docs: one medium finding that the patient-map plan presented its 43-room acceptance snapshot as
  current.
- Test: one medium advisory proposing permanent coverage for acid return, projectile removal, and
  attacker cooldown reset. The reviewer identifies a coverage gap; root considers current behavior
  proven by focused temporary evidence and does not treat this as a release blocker. The proposal is
  retained for human consideration; no permanent test was added.
- Style: one low finding about duplicated all-complete predicates in `app.tsx` and the patient map.
  Root defers cleanup under KISS because no behavior mismatch was found; no shared progress
  abstraction was added.
- Legacy: one low finding about the `hitPushableGem` latch name after removal of the pushable opt-in.
  Root defers renaming the transient field under KISS.
- Comment: no findings.

The two documentation findings are corrected here and in the relevant active plans. The earlier
43-room audit below remains an intact historical checkpoint. No reviewer found a blocker or high
gameplay issue. The broad continuous gameplay goal remains active.

## Evidence and limits

Root reports `source source_me.sh && ./check_codebase.sh` passed 96 checks and
`source source_me.sh && ./run_playwright_tests.sh --build` passed 2/2. A focused temporary native
Level 17 replay passed: dunk frame 380, return frame 860, and bubble release frame 1222; the
projectile cleared, cooldown reset and paused during absence, and both heroes remained alive and
playing. This proves the focused behavior, not permanent coverage or a full campaign journey.
Fresh root artifact verification found disk and HTTP 8127 JavaScript SHA-256
`2d43091057039295e806bc171dd0b20dad159ef548209728344009940f96c1bb`, and matching liver SVG
SHA-256 `cb5ac8e30bbce1e3366811d0d3ae7793a0a8658e81c4fcc2f65c6583c151d2ee`; all 71 source-map
contents matched current disk sources with zero drift. These are root checks, not checks run for
this documentation edit.

The previous unchanged-source rendered acceptance remains in force: root inspected seven liver
views and six Step On It views. This audit made no new captures. Human discovery, enjoyment, paired
comfort, and remote deployment are not established.

**Final status: DONE_WITH_CONCERNS.** Root accepted the documentation corrections at 2026-10-17
16:29:19 UTC after fresh targeted correction/integration review `ACCEPT_WITH_CONCERNS`
(`tests/_temp/audit44_corrections_review/REPORT.md`). Three advisories remain for human
consideration: proposed permanent coverage for acid return, projectile removal, and attacker
cooldown reset; duplicated all-complete predicates; and the `hitPushableGem` latch name. The broader
continuous gameplay goal remains active.

---

# Historical 43-room worktree audit

Completed a fresh six-pass review of the full pending worktree on 2026-10-17. The boundary included
`git diff HEAD` (staged and unstaged) and untracked source, assets, plans, reports, and generated
artifacts, across the patient map, application and styles, build registration, physical villains,
authored rooms, permanent tests, ferry, acid art, and README composition. Repository authorities
included [AGENTS.md](../../../AGENTS.md), [REPO_STYLE.md](../../REPO_STYLE.md),
[MARKDOWN_STYLE.md](../../MARKDOWN_STYLE.md), and the relevant plans for the patient map, physical
villains, ferry footing, and acid art.

## Findings and disposition

Plan, Test, Legacy, and Comment passes reported no findings. Style reported two low-severity
documentation findings; Docs reported two medium and two low findings. The ferry-heading finding
was duplicated, leaving five unique findings: stale patient-map acceptance status; overdue changelog
rotation and noncanonical current-day categories; missing player guidance for the body map; long
README cast lines; and the ferry decision heading level. The Docs and Style reports retain their
original severities and wording. The original no-finding reviewers did not return an `ACCEPT`
disposition after completing their passes.

All five corrections were applied in the assigned documentation scope and independently accepted
in a fresh targeted correction review. Its report and rotation proof are in
`tests/_temp/release_audit_corrections_review/REPORT.md` and
`tests/_temp/release_audit_docs_fixes/ROTATION_PROOF.md`. No gameplay-code blocker or permanent-test
proposal was found. The broad gameplay goal remains active.

## Evidence and limits

The fresh Style pass independently reran `./check_codebase.sh`: 96 checks passed. The current
artifact check reports 68 bundled sources matching the source map and `dist/main.js` SHA-256
`26375ae4efc0b8a16ed240d77e79d2fa952a85c9771814d30ee5498cb7233a7a`. The prior unchanged-source
evidence supplied to these reviewers reports 2/2 standard Playwright build smokes; 43 main native
trials, three recovery trials, and one trial totaling 47 native trials completed with zero deaths;
43 idle trials ran 12 seconds without falls or respawns; and eight current-browser cases reached
expected phases with zero deaths or browser errors. The coordinator viewed all eight original
captures. These gameplay and browser proofs were not rerun as part of this audit or its
documentation corrections.

Human discovery, enjoyment, and paired-player comfort remain unmeasured. Slight crowding between
adjacent villain names remains an accepted nonblocking concern. No remote deployment was performed.

## Pass reports

The six fresh independent passes and the correction review are preserved under `tests/_temp/`:

- `release_audit_plan/REPORT.md` - no plan findings.
- `release_audit_test/REPORT.md` - no test findings or permanent-test proposal.
- `release_audit_style/REPORT.md` - two low findings; 96-check code gate passed.
- `release_audit_docs/REPORT.md` - two medium and two low findings.
- `release_audit_legacy/REPORT.md` - no legacy findings.
- `release_audit_comment/REPORT.md` - no comment findings.
- `release_audit_corrections_review/REPORT.md` - fresh `ACCEPT` of all five unique corrections.

This closes the bounded worktree audit and its documentation corrections; it does not close the
active gameplay objective or establish remote publication or human-play acceptance.
