# Surface texture anchor

## Outcome

Keep the level-3 platform DNA texture visually fixed to its target while the target rectangle
continues to follow platform movement. Preserve active/countered colors, clipping, edges, and all
physics, attacks, collapse grace, and co-op behavior. Other target kinds retain their animation.

## Evidence and limits

The current renderer moves the DNA wave with time. The level-3 motion probe found the bridge fixed
in the sampled route, but did not identify what the user perceived. This change addresses that
specific visual motion cue; it does not establish or claim a diagnosis of the reported motion.

Root accepted this bounded change as `DONE_WITH_CONCERNS`. The broad code gate, production build,
standard smokes, served-bundle identity, and four dedicated captures passed. Empty-input level-3
views after 2, 3, and 6 seconds check the anchored pattern; they do not represent Pac-held views.
The accepted ordinary clear also completed. Fresh SPEC, distinct QUALITY, and integration reviews
accept with concerns and no blocker or plan drift. Current38 remains frozen; rooms 39 and 40 remain
unassessed.

## Phase B ledger

| Gate | State | Evidence |
| --- | --- | --- |
| Source hash and scoped checks | PASS | SHA-256 `a6875651bec2e17f52299bb71bd9e398d527209f5d707d2311812943b3b77589`; scoped ESLint and Prettier pass. |
| Capture cases | PASS | `tests/_temp/surface_texture_anchor/cases.json`, SHA-256 `979fff9ebee3510cfbc3a4042cbbc5640878a8dc2bb4bfc2af9d2b3daf1dbb49`; empty-input views at 2s and 6s plus the ordinary clear. |
| Root code gate | PASS | `./check_codebase.sh`: both TypeScript checks, lint, format, and 92 checks. |
| Build and standard smokes | PASS | `source source_me.sh && ./run_playwright_tests.sh --build`: build and 2/2 smokes. |
| Served bundle | PASS | HTTP 200; served and `dist/main.js` SHA-256 `d13a5371f454193ba19c0818a382e5d0f593e08882ec8702ab1c5b382709a0ea`. |
| Dedicated captures | PASS | Four original views inspected by root; zero deaths/errors. Logs: `tests/_temp/surface_texture_anchor/capture_attempt01.log` and `tests/_temp/surface_anchor_spec/capture_attempt02.log`. |
| Fresh SPEC | ACCEPT_WITH_CONCERNS | `tests/_temp/surface_anchor_spec/REPORT.md`; root accepts qualitative 2s/3s anchored-pattern comparison. |
| Distinct QUALITY | ACCEPT_WITH_CONCERNS | `tests/_temp/surface_anchor_quality/REPORT.md`; no correctness or KISS blocker. |
| Integration | ACCEPT_WITH_CONCERNS | `tests/_temp/surface_anchor_integration/REPORT.md`; no blocker or plan drift; accepted acid-push baseline reconciled. |
| Root acceptance | DONE_WITH_CONCERNS | Root reviewed all four original views and accepted the bounded presentation change. |

The evidence does not reproduce or diagnose the user's reported motion, establish physical platform
motion, show a player riding the platform, or visually prove wall animation. The 2s/3s comparison is
qualitative, not pixel equivalence. No permanent branch test was added under the KISS decision.
Current38 remains frozen; rooms 39 and 40 remain unassessed. The optional human question remains
pending. Counterweight load/FLOAT is set aside: upward Isp removes the rider and both rider gates
require direction zero, so Pac cannot drive the deck. The continuous gameplay goal remains ACTIVE.

Next root decision: consider a bounded private villain-crossfire experiment. No production work or
mechanism is approved by this note.
