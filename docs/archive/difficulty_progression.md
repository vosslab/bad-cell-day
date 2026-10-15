# Difficulty progression

Status: implementation and integration acceptance complete. Comparative human evaluation remains
open as a follow-up. Baseline: 2026-10-14 before difficulty changes. Keep the existing
character-prominence closeout separate.

## Intended outcome

The campaign teaches cooperation in a credible order, preserves strong puzzles, and makes later
challenges build on earlier lessons. The human reported that old level 1 was decently challenging
and old level 2 much easier because the latter was walking while the former had jumps. All 20 rooms
were reviewed; queued ideas remain candidates. Existing stable IDs and saved achievements remain
meaningful. See [LEVEL_DIFFICULTY.md](../LEVEL_DIFFICULTY.md) for the ongoing evaluation method.

## Evidence and decisions

The complete source-based inventory, separate difficulty dimensions, evidence limits, inversions,
and candidate ordering are in [difficulty_audit.md](../active_plans/audits/difficulty_audit.md).
Execution state belongs in [difficulty_ledger.md](../active_plans/reports/difficulty_ledger.md).

1. Review all 20 current rooms before choosing production changes. **Complete:** source
   investigation; the old 1/2 inversion has human corroboration, other comparisons remain
   hypotheses.
2. Apply approved D1: use the bounded stage order with explicit chapter introductions. **Complete:**
   `02,01,04,03 / 06,08,05,07 / 11,09,10,12 / 13,14,15,16 / 18,17,19 / 20`.
   Onboarding now starts with "Hold That Door!" and follows with "Glucose Going Up!". Stable IDs,
   save format v1, unlock behavior, and authored geometry are preserved; the old level 1's lift and
   jumping remain unchanged.
3. Apply the bounded reorder and onboarding copy. **Complete:** campaign assembly uses the approved
   order; exact geometry comparison passes. The save regression covers a legacy reordered fixture
   and replaying a completed room by its stable ID.
4. Run full required checks and fresh ordinary-input/browser progression acceptance, then obtain
   fresh independent specification, quality, and integration review. **Complete:**
   fresh opening progression, Next, old-save replay, and seeded level 20 completion/replay were
   observed. The full codebase check passes. Specification, quality, and integration reviews pass.
5. Evaluate difficulty with human attempts, separately for first-time and experienced play, one
   person controlling two characters, and two-person cooperation. This comparative follow-up remains
   open after implementation acceptance; it does not block the current implementation closeout.

## Completion checks

- Every existing stable ID remains attached to the same earned room record.
- New-player entry, unlocks, menu, HUD number, Next, replay, and final ending match the chosen order.
- All 20 rooms retain ordinary-input completion; changed rooms have focused counterexample and
  recovery checks where their cooperative dependency changes. Geometry is unchanged; built browser
  acceptance passes for the observed opening, persistence, and final-room routes.
- Built browser evidence covers onboarding, transitions, persistence, and final completion.
  **Pass:** fresh order `02 -> 01 -> 04 -> 03`, Next to 06, legacy save replay, and seeded keyboard
  completion/replay of selected room 20. This was not a fresh 20-room playthrough; see the
  [difficulty_browser.md](../active_plans/reports/difficulty_browser.md) report for scope and evidence limits.
- Difficulty claims distinguish source inference, experienced scripted proof, and human evidence.
- Human evaluation remains explicitly pending until observed and is a separate follow-up; no
  scripted timing is substituted.

Implementation completion: all checks and independent reviews pass. Comparative human evaluation
remains a nonblocking follow-up and is not claimed complete.
