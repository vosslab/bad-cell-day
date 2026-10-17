# Current39 playability proof

**Status: ROOT ACCEPTED `DONE_WITH_CONCERNS`; bounded plan closed.** Native feasibility and the
empty-save browser journey passed, and fresh SPEC, distinct QUALITY, and integration reviews each
accepted with concerns. The continuous game-development goal remains ACTIVE. This proof establishes
scripted room and campaign operability while leaving human discovery, comfort, fairness, and fun for
separate evaluation.

## Goal and boundary

Establish two separate facts against the accepted 39-room campaign: each current room has at least
one ordinary public-source route to both exits, and the built game can carry an empty new save through
the campaign to the finale using its visible controls and normal saved completions. Record actual
misses, retries, and recovery. This is an operability proof, not a human discovery, comfort, fairness,
or fun assessment.

The accepted Boneheads module hash, campaign registry hash, and `dist/main.js` handoff hash are respectively
`84546de3ebba8af467223dd23be7b22091c96c09fa9ddd91528f132957e5fe10`,
`014855376da782c2907b8211e2fb3c7c259a331ec099610eba11514a98a10759`, and
`eccb9bb6c703ab438870bf76d0da536d87a17aab021e1e2a8ce6d0dcd5a28020`. The first hash identifies
`src/level_grounded_carry.ts`; it is not a whole-source fingerprint. Root's current code gate,
official build, two standard browser smokes, and Boneheads reviews are closed. Confirm provenance
before gathering evidence; root owns any needed rebuild or restoration.

## Approach

1. **Freeze the roster and evidence baseline.** Record the 39 ordered stable IDs and titles from
   current `LEVELS`, accepted source/build hashes, prior selected-route receipts, and the boundary
   between current and historical evidence. Leave frozen current38 difficulty artifacts unchanged.
2. **Prove native room feasibility in four isolated groups.** Root assigned a fresh Luna tester to
   each position range: 1-10, 11-20, 21-30, and 31-39. Aggregate group owners alone write each
   group's final route ledger. Native_2 merges helper proofs for stable IDs `level_36` and `level_24`
   (positions 17 and 19); native_3 merges helper proofs for `level_16`, `level_18`, `level_17`,
   `level_25`, and `level_22`; native_4 merges helper proofs for `level_31`, `level_29`,
   `level_33`, `level_19`, and `level_20`. Each tester uses current public `LEVELS`,
   `create_game_state`, `create_empty_input`, and `step_game`; give every room ordinary per-hero
   movement/jump inputs that complete both exits. Record replayable coalesced input phases, outcome,
   deaths/retries, important state transitions, and failed attempts. Source-aware route construction
   may help feasibility, but the result is not novice evidence. No teleports, direct state writes,
   geometry edits, or direct pad toggles.
   **Complete.** Aggregate replays for positions 1-10, 11-20, 21-30, and 31-39 pass 10/10, 10/10,
   10/10, and 9/9 routes. Root's independent Node check passes with exit 0: the current public roster
   contains exactly 39 unique known IDs, every route has legal nonempty intervals with valid keys and
   frame counts, the recorded baseline hashes still match, and `level_20` remains last. Replay
   commands and group outcomes are recorded in the four ignored ledgers:
   [tests/_temp/current39_playability/native_1/REPORT.md](../../../tests/_temp/current39_playability/native_1/REPORT.md),
   [tests/_temp/current39_playability/native_2/REPORT.md](../../../tests/_temp/current39_playability/native_2/REPORT.md),
   [tests/_temp/current39_playability/native_3/REPORT.md](../../../tests/_temp/current39_playability/native_3/REPORT.md), and
   [tests/_temp/current39_playability/native_4/REPORT.md](../../../tests/_temp/current39_playability/native_4/REPORT.md).
3. **Integrate one empty-save built-browser journey.** With all four route ledgers complete, a fresh
   integrator replays their inputs in order against the accepted built game at `http://127.0.0.1:8127/`
   from a new Playwright context with no preloaded progress. Select rooms and advance through visible
   menus and Next controls. At positions 10, 20, 30, and 39, record the game's own saved completions,
   reload normally, and resume through the visible UI. Reach both exits in every room and complete
   position 39. Verify that the finale is last and the normal save survives each reload. Read save
   state for evidence; never write or seed it. The existing capture script is isolated and seeded, so
   use a temporary `.mjs` runner in the ignored evidence folder if needed; keep it out of permanent
   tooling. Screenshots may document a relevant interaction but are not a visual matrix.
   **Complete.** Run from the repository root with:

   ```sh
   node --import tsx tests/_temp/current39_playability/browser/journey.mjs
   ```

   It passed against the accepted bundle hash
   `eccb9bb6c703ab438870bf76d0da536d87a17aab021e1e2a8ce6d0dcd5a28020`, starting with an empty
   completion list and no runner storage writes. All 39 rooms completed in campaign order, one
   attempt each, with zero deaths, retries, page errors, or console errors. Normal earned progress
   survived reloads at positions 10, 20, 30, and 39, preserving exactly 10, 20, 30, and 39 expected
   IDs. After the first three reloads, the next unlocked room reopened through Levels. The position
   39 completion screen showed the ending, no Next control, and replay. After the final reload, the
   saved completion remained and the finale reopened through Levels; the ending overlay was observed
   before that reload. The paused browser clock
   was checked before and after an awaited page read. The final report, complete receipt, and
   progress receipt are [browser/REPORT.md](../../../tests/_temp/current39_playability/browser/REPORT.md),
   [journey_receipt.json](../../../tests/_temp/current39_playability/browser/journey_receipt.json),
   and [journey_progress.json](../../../tests/_temp/current39_playability/browser/journey_progress.json).
   Earlier failed attempts and the per-room browser timing adjustments are retained separately in
   the browser folder; these were corrected as harness or route timing issues, with no product defect
   demonstrated. Source and build were unchanged.
4. **Adjudicate evidence and hand off.** Keep native feasibility and built-browser journey results
   distinct. Fresh SPEC, distinct QUALITY, and integration reviews each accepted the evidence with
   concerns. Root accepts this bounded plan as `DONE_WITH_CONCERNS`; no product blocker or source
   change was required. The reports are
   [tests/_temp/current39_playability/spec/REPORT.md](../../../tests/_temp/current39_playability/spec/REPORT.md),
   [tests/_temp/current39_playability/quality/REPORT.md](../../../tests/_temp/current39_playability/quality/REPORT.md),
   and [tests/_temp/current39_playability/integration/REPORT.md](../../../tests/_temp/current39_playability/integration/REPORT.md).
   The plan authorizes no engine/config abstraction, difficulty refresh, or permanent test.

## Failure handling

- A guessed or mistimed route that misses is an attempt to diagnose, adjust, and retain in the log;
  it is not by itself a blocked room or product defect.
- Call a native room unresolved only after the assigned tester cannot find a route with ordinary
  inputs. Report the exact trace, last reachable state, and separate inability to solve from a
  demonstrated unreachable exit, unrecoverable softlock, or control/simulation defect.
- For a browser miss, first verify bundle provenance, input focus, and that the exact native input
  sequence is replayed as intended. Reproduce a suspected control/save/progression defect through
  visible browser actions and record the state. Root prioritizes any demonstrated blocker before
  integration continues. No automatic code fix or broad gate follows from a failed attempt.
- A pass supports only scripted operability. Do not infer human discovery, two-player coordination,
  balance, comfort, or enjoyment. Do not require zero deaths; show retries and recovery candidly.

## Completion checks

- **Complete:** all 39 stable IDs appear exactly once in the frozen roster receipt and are covered
  by one passing aggregate native route per room that reaches both exits with ordinary inputs.
- Each route ledger can be replayed from a new simulation state and records the current source
  provenance, inputs, status, deaths/retries, and any recovery or failed attempt.
- **Complete:** one built-browser journey begins with empty progress, completes all 39 in current
  order through visible controls, naturally saves completed rooms, survives reload at the three chapter boundaries
  and finale, and records completion of the finale as position 39.
- Native and browser receipts identify the accepted source/build hashes. Failed rooms or journey
  stages have evidence and a root decision; there is no unsupported playability claim. **Concern:**
  the browser report records the initial `level_04` miss only as a scalar summary, and an earlier
  position-24 failure trace was overwritten. The reports disclose both gaps; neither is reconstructed.
  The successful final journey remains intact, and root accepts this bounded result despite the
  historical failure-record limits.
- **Complete with concerns:** fresh SPEC, distinct QUALITY, and integration reviews each accept
  with concerns. Root accepts this plan as `DONE_WITH_CONCERNS`. The next priority is recorded in
  [`gameplay_direction.md`](../reports/gameplay_direction.md); the broader development goal remains
  ACTIVE.

## File scope

- `docs/active_plans/active/CURRENT39_PLAYABILITY.md`: this closed bounded execution and acceptance ledger.
- `tests/_temp/current39_playability/`: ignored `baseline/`, isolated `native_1/` through
  `native_4/`, `browser/`, `spec/`, `quality/`, `integration/`, and `closeout/` evidence. No permanent
  tests or production files.
