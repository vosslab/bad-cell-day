# Cana's Friendly Fire

## Status and decision

Status: `ACCEPTED_DONE_WITH_CONCERNS`. Root accepts this bounded production milestone with concerns
after the fresh SPEC, six QUALITY passes, integration review, campaign evidence, and final repository
gate. Human discovery, readability, enjoyment, and coordination remain unmeasured. The separately
approved current41 difficulty assessment is in capture.

The implementation handoff must invite clarification, challenge, a decision, or escalation on
ambiguous scope. Require agents to restate accepted decisions, apply them, and verify them before
proceeding.

The private prototype is documented in the [Phase A report](../../../tests/_temp/crossfire_room_prototype/REPORT.md)
and its [plan](crossfire_room_prototype.md). Evidence supports a coherent room and shared mechanic,
but does not establish human discovery, readability, fun, or production behavior. The missed-shot run
recovers Gem but ends at 16 seconds with neither exit reached. Production must show a complete
recovery clear after a miss.

## Production contract

Add stable ID `level_41`, title **Cana's Friendly Fire**, in the intestine stage, immediately after
`level_07` and before `level_11` (display position 11). This is a forgiving FLOAT introduction and
optional villain mischief before marrow's reasoning puzzles. Preserve all accepted current40 room
definitions and their relative order; `level_20` remains the finale and last. No current difficulty
result is implied by this room's acceptance; the separately approved whole-current41 assessment is
now in progress.

Pac deliberately steps onto START to begin Gem's bubble gun. Isp uses the open column and Gem's FLOAT
bubble to reach the upper latch, opening Pac's lower route. These are the required cooperative jobs
and a legal ordinary both-exit clear. Cana's boomerang may shove active, pushable Gem on body contact
on either projectile leg. Set Gem's horizontal velocity to the projectile's actual direction times
260, at most once per complete flight; do not accumulate impulse. A crossfire dunk is optional. The
hint must distinguish the required Pac-start, Isp-FLOAT, and latch sequence from optional crossfire;
it must not imply a dunk is required.

Use existing intestine anatomy, characters, and dunk presentation. Keep ordinary near-point
circle/AABB contact. A single transient per-flight boolean is sufficient. Existing friction,
gravity, the four-second acid return, and Gem's own bubble-gun lifecycle own the resulting motion.
The rule runs in the real interference update path.

## Source ownership and limits

- `src/level_friendly_fire.ts`: level definition and room scene exports.
- `src/levels.ts`: register the room and place it in campaign order.
- `src/interference.ts` and `src/types/interference.ts`: the small fixed crossfire rule and its
  transient per-flight state.
- Keep the permanent rule contract short. Prefer a focused new test file if the existing
  `tests/test_interference.mjs` cannot accommodate it within its current file limit. Protect only
  one Gem response across both legs; do not assert internal flag names or new-room content/cadence.

Do not add a generic event system, options, enemy AI, new effect or lifecycle, save state, hero
changes, swept-geometry helper, or edits to existing rooms or assets. The original return-only,
two-flight production concept remains set aside.

## Implementation and evidence gates

1. Before source edits, snapshot public `LEVELS` as JSON from current40. After integration, compare
   the JSON-normalized filter excluding `level_41` against that snapshot, including relative order;
   confirm finale20 remains last.
2. Implement only the owned files above. Exercise the actual interference rule through public level
   data and `step_game`, without private collision hooks, teleports, or state writes. Show a normal
   clear, safe idle, one-hit dunk, four-second return, actual Gem bubble release, and both distinct
   routes. Show a missed or wrong-direction contact, recovery, and then both exits; recovery without
   a clear does not pass.
3. Protect only the stable shared contract if warranted: one Gem response across outbound and
   returning legs of a flight, while ordinary hero and crate interference continues. Do not make
   permanent tests track tunable level geometry, order, or cadence.
4. Run focused source checks and native room routes, then `./check_codebase.sh` and the official
   build through `source source_me.sh && ./run_playwright_tests.sh --build` once. Check served bundle
   identity and use the existing `devel/capture_gameplay_screenshots.mjs` path. Browser evidence must
   cover ordinary completion, miss recovery, Gem contact/dunk/return/bubble, and both routes; root
   reviews the original captures.
5. Exercise natural save, reload, replay, and Next 41-to-11 progression, preserving completed IDs
   for the legacy 40. Because the shared interference rule changes, rerun every current41 native and
   built-browser room on the new source/build. Reuse old route inputs and helpers where useful, never
   old results as fresh proof; add no debug APIs or framework.
6. Correct paused fake-clock state before Play. Preserve each unique attempt and artifact before a
   run. A startup public-level snapshot is enough; no timestamp gate is needed.
7. After evidence is ready, write a fresh SPEC review before six independent QUALITY passes:
   Plan, Test, Style, Docs, Legacy, and Comment. Then obtain fresh integration review and root
   acceptance. Report focused checks separately from the fresh full suite and rendered-artifact
   acceptance.

Do not claim human fun, discovery, readability, or coordination without player evidence. Current38
remains frozen; rooms 39-41 remain unassessed. Complete the approved current41 assessment before
further expansion.

## Implementation handoff ledger

2026-10-17: Root accepts the bounded milestone as `DONE_WITH_CONCERNS`. The shared rule gives active
pushable Gem one actual-direction horizontal shove per complete boomerang flight; the room requires
Pac to start bubbles and Isp to FLOAT to the upper latch, which opens Pac's lower route. Crossfire is
optional; Gem's four-second acid return and bubble gun resume normally. All 41 native routes and the
fresh empty-save browser journey completed with both exits, zero deaths, and zero browser errors;
browser saves/reloads, Next 41-to-11, finale replay, and a separate synthetic legacy40 diagnostic
also passed. The official build and post-correction repository gate passed. The six QUALITY
dispositions are Plan, Style, Legacy, and Comment: no findings; Docs: closeout resolved here; Test:
the medium return-contact finding was corrected and accepted on fresh re-review. The fresh SPEC and
integration reviews accept with concerns. Evidence links and limitations are summarized in
[`tests/_temp/friendly_fire_closeout/REPORT.md`](../../../tests/_temp/friendly_fire_closeout/REPORT.md).
The visual sample notes the rectangular suspended acid appearance as a nonblocking art opportunity;
human play remains unknown. The synthetic save check is not a real-user import. Level 3's reported
sideways perception remains unresolved. The current41 difficulty assessment is in capture and must
precede further expansion.
