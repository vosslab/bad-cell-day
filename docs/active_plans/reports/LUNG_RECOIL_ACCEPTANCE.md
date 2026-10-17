# Hold Your Breath acceptance receipt

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS.** Root kept the bounded private experiment with concerns,
approved production implementation of **Hold Your Breath** (`level_37`) after `level_03`, and accepted
the completed production milestone after reviewing its native, built-browser, build, and fresh
review evidence. This receipt distinguishes production acceptance from the earlier prototype
decision.

## Approved design and current facts

The production plan uses the existing platform and physics contracts. Both heroes must stand
directly on the same recoil tissue at the start of a native physics substep. After ordinary movement,
the sole hero still supported by that tissue launches vertically at `-730`; launch clears grounded,
support, and coyote state while preserving the ordinary jump buffer and held-jump input. Standing and
coyote refresh only when vertical velocity is nonnegative. There is no force setting, persistent
recoil state, configuration, or permanent disable.

The game now has 37 playable rooms. This room uses recurring Cana's always-active boomerang; Gem is
an observer and does not attack. The first launchee latches the upper owner door to open their own
return path, comes back to help the partner, and then the two heroes exit separately. A static return
fold supports a short reboard or missed-launch retry. Native first-order and fresh-jump full routes
both complete with two recoil launches at tick 979; the miss/retry route completes with three at
tick 1313, after Cana's SHOVE during joint contact causes an emergent release. Bounded solo and
no-joint controls do not clear. The native state did not provide a usable death counter. See
`tests/_temp/lung_recoil_production/README.md`.

The approved tissue art is 300x80, with 300px and 600px states and the Canvas crop reviewed by root.
Its SVG SHA-256 is `adc2912c4555ed0104c81314b425e8a160688f4d48de03475d44aae0c6fedfc9`. Built-art
delivery and focused normal-motion rendering are verified; no reduced-motion capture was available.
See
`tests/_temp/lung_recoil_art/ART_REPORT.md`.

The source-verified chapter positions are lungs (1-5), intestine (6-10), marrow (11-17), liver
(18-26), brain (27-36), and tumor (37). A source-only query verifies 37 rooms, `level_37` at index 4
after `level_03`, `level_20` last, and all earlier 36 definitions and their relative order intact.
The frozen current36 paired assessment remains historical context. No full 37-room journey or
difficulty refresh is required for this room.

## Experiment decision and evidence

The bounded private R1/R2 experiment is retained as `DONE_WITH_CONCERNS`. Its combined SPEC review
is `ACCEPT_WITH_CONCERNS` (`tests/_temp/lung_recoil_spec/REPORT.md`); QUALITY is
`ACCEPT_WITH_CONCERNS` (`tests/_temp/recoil_prototype_quality/REPORT.md`); and integration is
`ACCEPT_WITH_CONCERNS` (`tests/_temp/recoil_prototype_integration/REPORT.md`). Those ignored
temporary reports concern the private prototype only. They do not establish production behavior or
player experience.

## Production gates

| Gate | State | Evidence |
| --- | --- | --- |
| Root production decision and approved D8-D12 contract | Complete | [Production plan](../active/LUNG_RECOIL_ROOM.md) |
| `recoil` type contract (A0) | Complete | Type owner reports the union arm added and typecheck passed |
| Focused recoil contract tests | Pass, 2/2 | Main TypeScript check also exits 0 |
| Production physics and room implementation | Native route proof complete | See `tests/_temp/lung_recoil_production/README.md`; room specifics above |
| Final tissue art and renderer integration | Complete | 300x80 SVG and focused built rendering verified; reduced motion not captured |
| Fresh production SPEC | ACCEPT_WITH_CONCERNS | `tests/_temp/lung_recoil_production_spec/REPORT.md`; no blockers or plan drift |
| Distinct fresh QUALITY | ACCEPT_WITH_CONCERNS | `tests/_temp/lung_recoil_production_quality/REPORT.md`; root closed its scope question using prior Cana Switchboard evidence |
| Fresh integration review | ACCEPT_WITH_CONCERNS | `tests/_temp/lung_recoil_production_integration/REPORT.md`; no blockers or plan drift |
| Final integrated code gate | Pass | `./check_codebase.sh`: 92/92 Node, both TypeScript programs, ESLint, Prettier |
| Official build and standard smokes | Pass, 2/2 | `./run_playwright_tests.sh --build` |
| Built-source and served asset parity | Pass | Assertions current; HTTP 200 and disk parity for index, main, map, and SVG |
| Built-browser route and save/order | Pass | Browser report: clear, reload replay, all 36 legacy Replay entries, `level_37` Ready, finale last; zero deaths/errors |
| Captured launch/landing art | Pass with scope limits | Four normal-motion views; root found readability adequate; no reduced-motion capture |
| SHOVE/miss/re-entry observed in browser | Not established | Completed retry and emergent SHOVE release are native trace evidence; intermediate browser events were not observed. |
| Stable-ID unlock, replay/reload, old earned IDs, finale-last | Pass | Prior save and new-room replay verified; no full 37-room journey or difficulty refresh required |
| Root production acceptance | ROOT ACCEPTED DONE_WITH_CONCERNS | Root reviewed completed evidence and accepted the bounded room milestone |

The built-browser report and save/order receipt are `tests/_temp/lung_recoil_browser/REPORT.md` and
`tests/_temp/lung_recoil_browser/save_order_receipt.json`; the captured route uses main bundle SHA-256
`4f911d92fa403cfc393cf8760d07d3639e598ce1113baa7a5ad9618ce6133750`.

Native traces establish scripted simulation behavior; the focused built-browser route establishes
normal-motion rendering and save/order behavior. Its fixed capture path does not exercise reduced
motion; the native retry's intermediate SHOVE and re-entry events were not observed in browser.
Fresh SPEC, QUALITY, and integration reviews accept with concerns. QUALITY asked whether the shared automatic
pad-plaque placement algorithm expanded recoil scope; root verified it predates this milestone and
was already approved and supported by `tests/_temp/cana_switchboard_spec_recheck/REPORT.md`,
`tests/_temp/cana_switchboard_quality/REPORT.md`, and the
[Cana Switchboard acceptance ledger](cana_switchboard_acceptance.md). Recoil adds only its overlay
and existing build-list entries. Root accepted this room milestone as DONE_WITH_CONCERNS. The
continuous gameplay goal remains active, with no overall-goal completion claimed. The frozen current36
assessment remains historical, with no current37 score or full-campaign journey claim. Human discovery,
enjoyment, and two-person keyboard comfort remain unmeasured unless human play is later observed.
