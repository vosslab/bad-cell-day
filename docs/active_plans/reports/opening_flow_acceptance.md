# Opening flow investigation ledger

Status: **DONE_WITH_CONCERNS / KEEP for the bounded opening investigation.** The combined
source-blind observation and source-informed causal check do not demonstrate an opening defect that
supports a gameplay change. The accepted campaign baseline is 29 rooms. The prior Double Trouble
milestone is closed with all gates accepted; the continuous gameplay goal remains active. This is an
investigation result, not authorization for a production change.

## Baseline and boundaries

The current local build and HTTP 200 response on the protected server match: `main.js`
`e6f6e58983aabe757da7c96b39c36795663adc8238e114f31ae5f5ba669cfa29` and `main.js.map`
`7ba2592b3eabc435e8909f3a32f259dab06a3e7df90bda293cda2a70f1ea16b4`. The current campaign has 29
rooms; only `level_07` changed in the last milestone, and that milestone is accepted. The historical
`current_28` assessment does not score this campaign. See the
[campaign momentum ledger](campaign_momentum_acceptance.md). Root's fresh 29-room check confirms the
accepted room order and current build match.

Keep source and build artifacts frozen during first-use observations. Port 8127 is protected: never
restart, stop, start, or signal its server. Use the public game flow; do not use source, routes, maps,
datasets, injected state, or seeds during the source-blind observation.

## Question and evidence boundary

Investigate whether earlier rooms teach the cooperation needed for increasingly varied puzzles, and
identify high-impact friction before selecting any implementation. Preserve challenging attacks,
fair failures, useful consolidation, and clever alternative solutions.

The methods are a paired source-blind AI exploratory pass and a source-informed cognitive walkthrough.
They can surface candidate interaction or learning issues. They are not human usability or enjoyment
measurements, and they do not establish novice difficulty or paired-control comfort. An earlier gut
relay probe skipped earlier learning and had unattended real-clock hazards; it is not evidence that
onboarding is broken. Do not reuse frozen `current_28` numeric scores or add new scores here.

At the early interpretation and boundary checkpoint, invite clarification, challenge, decisions, or
escalation before interpreting candidate friction as a production need.

## Lanes and dependencies

| Lane | Owner | Scope and readiness | Dependency |
| --- | --- | --- | --- |
| Opening first use | `playwright_operator` (Sol, high) | FROZEN / DONE_WITH_CONCERNS. Rooms 1-3 cleared; Room 2's Hint persisted into entry, so its unassisted teaching was not evaluated. The source-blind report distinguishes chosen Restart from actual deaths. Room 4 remained unresolved; Rooms 5-8 were unavailable and unobserved. | AI inspection only, not human usability, fun, or difficulty evidence. Keep the report withheld from current difficulty first-pass authors until their locks. |
| Opening teaching analysis | `explorer` (Sol, high) | DONE_WITH_CONCERNS / KEEP. In `tests/_temp/opening_teaching_analysis/`, the isolated task/dependency review covers IDs `02, 01, 04, 03, 06, 08, 05, 07`. | Root compared it with the frozen source-blind UI evidence. No production change is selected. |
| Opening gate diagnostic | `opening_gate_diagnostic` | DONE_WITH_CONCERNS / KEEP. Root reviewed the full report, final trace rows, and frozen screenshot. After the recorded `W+D` 650 ms and idle 800 ms, native state has RESCUE latched, both gates open, and Isp supported on the right shore. Ordinary `D` for 400 + 500 + about 300 ms passes both membranes, pushes Pac, and reaches both exits. | The final browser screenshot remains an unresolved source-blind observation. Native timings round browser intervals; this is causal reproduction, not exact browser replay or human proof. No gate or control defect is demonstrated. |
| Additional-room native prototype | `branch_managers_prototype` | DONE_WITH_CONCERNS in `tests/_temp/branch_managers_prototype/`. Native proof covers the main route, two recoveries, and a death/reset replay. | Root REJECTS production priority because the reciprocal pad sequence repeats level 24. No further variant is authorized and no gameplay change is selected. No browser or human-play evidence is claimed. |
| Opening-flow ledger | Root | Active. Keep this record current with owners, readiness, evidence, decisions, and handoff status. | Record selection only after root synthesis. |

The source-blind record remains explicit: Rooms 1-3 cleared; Room 2's persisted Hint prevents an
unassisted teaching judgment; Room 4 did not clear in the original probe; Rooms 5-8 were unobserved.
Room 1 includes a chosen Restart; Room 3 and the first Room 4 attempt include actual deaths; a later
Room 4 attempt includes a chosen Restart. These are distinct events in the frozen report. The native
diagnostic shows a viable ordinary-input recovery from the final Room 4 state, with the open gate
outline and released movement explaining the stillness. Keep the original observer's interpretation
as evidence; the diagnostic does not rewrite the source-blind record.

Do not treat this AI inspection as a human usability, enjoyment, novice difficulty, or paired-control
measure. No production change is selected. Branch Managers remains rejected for production priority
because its partner handoff repeats level 24. The current 29-room assessment is a separate pending
decision; see the [29-room assessment](difficulty_29_acceptance.md) for its gates, owners, and status.
Its first-pass authors remain under the evidence hold recorded there until their locks.

## Decisions and handoff

- Bounded opening investigation is DONE_WITH_CONCERNS / KEEP; the continuous gameplay goal remains
  ACTIVE.
- The original Room 4 non-clear remains part of the source-blind evidence. Native replay shows that
  RESCUE was latched and both gates were open; ordinary rightward input recovers and completes.
  Rounded native timings do not prove exact browser replay or human experience.
- No production change is selected because no gate or control defect is demonstrated. Preserve the
  original observation and useful room challenges.
- Keep the source-blind report withheld from current 29-room difficulty first-pass authors until
  their locks; use the separate 29-room assessment for the next campaign decision.
- Branch Managers is rejected for production priority because its partner handoff repeats level 24.
  Its native proof is complete, no further variant is authorized, and no gameplay change is selected.
- The accepted current build and 29-room order remain the scope; no scores from `current_28` transfer.

Ledger disposition: **DONE_WITH_CONCERNS / KEEP; no production change selected.** The continuous
gameplay goal remains ACTIVE.
