# Hero response execution

Updated 2026-10-15. This pass implements the coherent hero-response direction in
[game_feel_opportunities.md](game_feel_opportunities.md). The accepted 22-room campaign and its
physics, controls, saves, and puzzle rules remain the baseline. Its historical expansion artifact hash is
`ac0a8f29eeff6f604896f251c59d6ac2f4b6dd05eb8d9ba7a96267a1fdb472d6`; the new presentation is verified separately below.

| Task | Status | Evidence or remaining work |
| --- | --- | --- |
| Typed feedback contract and lifecycle | DONE; specification and quality ACCEPT | Actual-owner attribution, one-shot transitions, reset/freeze, five focused tests. |
| Held-control and latch hero poses | DONE; source specification/quality ACCEPT | Canonical art, foot anchoring, static reduced motion; targeted browser pass. |
| Paired victory presentation | DONE; source specification/quality ACCEPT | Desktop, narrow and short layouts inspected; Next/Replay reachable with scrolling. |
| Opening lift boarding cues | DONE; corrected source review ACCEPT | Authored left-side approach and actual underside-contact recovery; physics/timing unchanged. |
| Automated acceptance | DONE | 38 tests, type/lint/format, production build, two canonical browser tests. |
| Targeted browser acceptance | DONE | Corrected cue normal/reduced runs pass; before/after badge clearance preserved. |
| Full-campaign regression | DONE | Fresh Play/21 Next journey completes all 22 rooms, zero retries/errors, byte-identical reload and 22 Replay entries. |
| Integration and documentation reviews | ACCEPT | Integrated artifact/evidence review and hero-response report review accepted. |
| Human enjoyment and interpretation | Unmeasured | Two people without coaching; record attribution and confusion separately from operability. |

## Presentation ownership

[src/types/presentation.ts](../../../src/types/presentation.ts) owns read-only per-hero `holding`
and `acknowledgeRemaining` values. `RenderOptions.heroFeedback` is optional for direct render
previews without runtime history. Runtime always supplies it.
[src/hero_feedback.ts](../../../src/hero_feedback.ts) provides create/update/snapshot operations;
the runtime owns immutable replacement history separately from mutable game state. Rendering
receives detached snapshots and does not advance history.

An eligible solo contribution requires an owned pad accepting the actual occupant, sufficient
real weight, and an active pad. Hold posture additionally requires hold activation. Any/joint
pads and crates receive no solo credit. Latch acknowledgment requires an observed false-to-true
transition, with the operator still present and playing without active interference. Abandoned
or interrupted transitions are consumed immediately and cannot replay on later re-entry or
recovery. Ongoing interference/death/completion clears these transient responses.

[src/runtime.ts](../../../src/runtime.ts) observes immediately after every fixed simulation
step. Start, replay, retry, and automatic death restart replace history with the fresh game.
Pause does not run the observer, so response age freezes. Completion has its separate shared
presentation rather than retaining a solo latch reaction. No simulation or save schema changes.

## Foundation verification

- `npx tsc --noEmit -p tsconfig.json`: exit 0 before and after foundation implementation.
- `node --import tsx --test tests/test_hero_feedback.mjs`: 5 tests pass. Stable contracts cover
  actual-owner attribution, abandoned/crate/joint exclusions, single-transition expiry/re-entry,
  reset/frozen snapshots/interruption, and equality of observed/unobserved simulation and input.
  Permanent assertions do not fix the acknowledgment's tunable duration.
- `npx eslint --max-warnings 0 src/types/presentation.ts src/hero_feedback.ts src/runtime.ts
  tests/test_hero_feedback.mjs`: exit 0.
- Focused Prettier formatting applied. Integrated verification follows below.

## Current integrated acceptance

Hero-response milestone: DONE. Integration review: ACCEPT. Documentation review: ACCEPT.
Continuous development goal: ACTIVE.

Final corrected `dist/main.js` SHA-256:
`facb97697aef32e9585835e2fcb48e910316ef4e937b7a34d0a3cc772a087347`.
Final source-map SHA-256:
`af7c8a3ad00ed060e6e199985f2ed7b24e20e4ce35336392900d08b36ffb7bd6`.

- Manager canonical checks: `./check_codebase.sh` passes 38 unit tests plus type/lint/format;
  `./build_github_pages.sh` passes; two canonical Playwright tests pass in 2.6 seconds.
- [hero_response_browser.md](hero_response_browser.md): ordinary-input seeded Replay checks in
  normal/reduced motion pass for both heroes' holds and latches, pause/resume, expiry/re-entry,
  release, retry, Replay, automatic death restart, completion layouts, and delayed lift recovery.
  Seeded Replay evidence is separate from fresh campaign progression.
- [hero_campaign_browser.md](hero_campaign_browser.md): final corrected artifact completes all
  22 rooms continuously from a fresh save using ordinary keys; zero retries/errors. Reload keeps
  the save byte-identical and all 22 Replay entries. All 33 mapped sources match disk (31 authored
  plus two dependencies), and six document images decode.
- The original cue panel overlapped Pac's identity badge at RESTORE center. Raising the panel
  clears RESTORE and launch positions in both modes on this actual final build. No level geometry,
  collision, lift speed, cycle timing, controls, or save rules changed in this response pass.
- Source foundation specification/quality, visual specification, boarding specification, and
  corrected panel source review ACCEPT. The original presentation quality finding is retained as
  resolved evidence, rather than erasing the failed capture.

Latch acknowledgment is credited only to the actual eligible owner at the observed transition;
any/joint/crate contributions receive no solo credit. Paired canonical heroes lead the completion
heading while existing villain reactions and immediate actions remain. Narrow completion retains
internal panel scrolling; 1000x450 needs page scrolling. All-content-visible claims would exceed
this evidence.

Active interference interruption, fallback art, every wall/stack arrangement, and same-trip paired
boarding do not have exhaustive runtime/visual acceptance in the targeted lane. Unit/source
coverage and the fresh campaign regression have distinct scopes. Human enjoyment, novice
comprehension and two-person coordination remain unknown. No commit or deployment occurs.
