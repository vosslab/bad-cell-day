# Difficulty progression ledger

Baseline: 2026-10-14 before difficulty changes. This ledger records source investigation,
implementation, and acceptance evidence. Comparative human evaluation remains a follow-up after
implementation closeout.

| Item | State | Evidence / next action |
| --- | --- | --- |
| Human opening observation | Recorded | Old 1 felt decently challenging; old 2 felt much easier. Direct clarification: "level 2 was just walking, level 1 had jumps". No novice measurements for other rooms. |
| All 20 definitions/scenes | Inspected | [difficulty_audit.md](../audits/difficulty_audit.md) records stable IDs, source lines, separate demand profiles, and dependencies. |
| Existing scripted evidence | Inspected | Tutorial/middle/final source and browser reports prove legal experienced routes, with waits and previous exploratory failures disclosed. Not rerun here. |
| Robust inversions | Identified | 1/2, 5/6, 10/11, 12/13; other close comparisons remain hypotheses. |
| Minimal first change | Implemented | Old level 2, "Hold That Door!", opens the campaign; old level 1 is now "Glucose Going Up!" in position 2. Geometry and lift timing are unchanged. |
| Whole-campaign direction | D1 implemented | Bounded stage order `02,01,04,03 / 06,08,05,07 / 11,09,10,12 / 13,14,15,16 / 18,17,19 / 20`; chapter introductions retained. |
| Stable IDs / save contract | Confirmed | Save format remains v1. Existing completed stable IDs remain replayable; unlock uses the first position, the room's own completed ID, or the completed preceding campaign room. Legacy reordered-fixture regression passes. |
| Production edits | Complete | Campaign assembly is reordered by stable ID; no authored room geometry changed. Exact geometry comparison passes. |
| Required checks | Complete | Manager reports `./check_codebase.sh` passed with 17 tests plus type, lint, and format checks. |
| Built browser routes | Passed | [difficulty_browser.md](difficulty_browser.md) records fresh opening `02 -> 01 -> 04 -> 03`, Next to 06, legacy save replay with old level 1 stats retained at new position 2, and seeded selected-final keyboard completion/replay of room 20. First room had no jumps; a missed second-room lift boarding landed safely for recovery. This was not a fresh 20-room playthrough. |
| Fresh independent review | Accepted | Specification and quality reviews accepted; final integration verified current distribution hashes, source-map modules, browser evidence, and campaign coverage. |
| Human difficulty evaluation | Follow-up pending | Compare first-attempt and total time, deaths, manual restarts, help, and stuck points. Separate first-time/experienced, one-person/two-character, and two-person sessions. This does not block implementation closeout. |

Implementation and integration closeout are complete. Do not treat the audit or scripted routes as
comparative human acceptance. Human comparison remains open as a follow-up; the directly observed
old 1/2 inversion is the only human comparison recorded so far.
