# Jump to Conclusions acceptance

**Status: ROOT ACCEPTED; DONE_WITH_CONCERNS.**
Root selected KEEP with concerns and explicitly authorized production (D3). Root separately
approved the exact brain tissue asset (D4),
SHA-256 `1c4b95db1af1ed51ca86fa6d3a8443d3f4d00e624a4ba5aac3d5ba0bdb786f4e`. The source position is
34, between `level_31` and `level_29`; the final tumor room remains last. This receipt records
production evidence, review dispositions, root's acceptance, and the remaining limits.

The [production plan](../active/split_launch_room.md) owns requirements and gates. The
[private prototype ledger](../active/split_launch_prototype.md) and its raw traces remain immutable
historical evidence; they do not substitute for production or browser evidence.

## Decision and design

- D3: KEEP with concerns; production explicitly authorized by root.
- D4: exact 300x160 brain recoil asset approved by root; its SHA-256 is recorded above.
- D5: one integrated batch gate: `./check_codebase.sh`, followed by
  `source source_me.sh && ./run_playwright_tests.sh --build`. The second command performs the
  official build and two standard smokes.
- D1: retain the existing level, recoil, barrier, physics, save, and configuration contracts. Add
  no shared types or persistent/runtime contract.
- Human discovery, enjoyment, comfort, and reduced-motion behavior are unmeasured. Human play is
  not a production gate. No full campaign journey or difficulty refresh is required.

## Production evidence

| Item | Owner | State | Receipt / result |
| --- | --- | --- | --- |
| Gameplay implementation and native evidence | Gameplay owner | DONE_WITH_CONCERNS | `tests/_temp/split_launch_production/REPORT.md`: production-level runner and six bounded routes; typecheck and source-order checks pass. Ordinary clear at f676; miss/retry clear at f1201, with Cana SHOVE at f167/f656 and no required hit. The no-joint, no-Isp-hold, no-Pac-latch, and gate-jump controls do not exit. No exhaustive solo-path search is claimed. |
| Approved art and renderer integration | Renderer owner | PASS | Root verified HTTP 200 and disk parity for the approved brain SVG and existing lung SVG. Approved asset SHA-256 is recorded above. |
| Integrated D5 gate | Root | PASS | Both D5 commands pass; built source is current and all five checked HTTP assets match disk. Details follow. |
| Built-browser evidence | Browser owner | PASS | Five cases pass with zero deaths/errors. Ordinary-key clear and retry complete; save/order shows frontier 31 -> 38 Ready / 29 Locked, clear to 29, reload with 38 Replay and 29 Ready, all 37 legacy Replay entries, and `level_20` last. Root directly approved the brain art/cue/state in the captured views. See `tests/_temp/split_launch_browser/REPORT.md`, `receipt_final_20261016.json`, and `save_order_receipt.json`. |
| SPEC review | Fresh reviewer | ACCEPT_WITH_CONCERNS | `tests/_temp/split_launch_spec/REPORT.md`: no blockers or plan drift. The browser runner does not record every miss/regroup/re-entry event; native traces cover it. Human discovery, enjoyment, two-player comfort, and reduced-motion behavior remain unmeasured, as allowed by the plan. |
| QUALITY review | Different fresh reviewer | ACCEPT_WITH_CONCERNS | `tests/_temp/split_launch_quality/REPORT.md`: no blockers or plan drift. Notes no permanent test for level registration or renderer selection/fallback. Root accepts this KISS, plan-approved limitation: temporary routes and existing shared-contract tests are sufficient; no tests or gates are added. |
| Integration review | Fresh reviewer | ACCEPT_WITH_CONCERNS | `tests/_temp/split_launch_integration/REPORT.md`: no blockers or plan drift. It notes the lack of permanent registration/renderer-branch tests; root accepts this KISS limit under the bounded plan. |
| Root acceptance | Root | ROOT ACCEPTED; DONE_WITH_CONCERNS | Root confirms all plan requirements, production and browser evidence, integrated gates, and three reviews are complete, with the limits recorded here. |

The focused browser capture observed no deaths or browser errors in five cases. Intermediate miss,
Cana SHOVE, and re-entry were observed in native traces only; human fun and reduced-motion behavior
were not established. The root viewed the rendered art, cue, and state and approved the displayed
result for this milestone.

The fresh SPEC review accepted with concerns and found no blockers or plan drift. Its concern is an
evidence limit already permitted by the plan: browser capture does not record every miss/regroup/
re-entry event, which remains covered by native traces. Human discovery, enjoyment, two-player
comfort, and reduced-motion behavior remain unmeasured and are not gates.

The fresh QUALITY review accepted with concerns and found no blockers or plan drift. It noted that
no permanent test specifically covers level registration or brain-versus-lung renderer selection
and fallback. Root accepts this deliberate KISS limitation: the temporary native and browser proofs,
plus existing shared-contract tests, provide sufficient evidence for this bounded addition. No test
or gate is added.

The fresh integration review accepted with concerns and found no blocker or plan drift. It confirmed
the same test-coverage limitation and records root's disposition: no permanent test or additional
gate is required for this bounded milestone. Root accepts **Jump to Conclusions** as
DONE_WITH_CONCERNS.

`./check_codebase.sh` passes 92/92 Node checks, main and lint TypeScript, ESLint, and Prettier.
`source source_me.sh && ./run_playwright_tests.sh --build` passes the official build and 2/2 standard
smokes. The built-source-current assertion passes. At HTTP port 8127, index, main bundle, campaign
map, brain SVG, and lung SVG return 200 and match disk. Main SHA-256 is
`f740670ad34e0e94e3f2c0a27a130ee9a34a1b1030e444dced8b726013a4b553`; map SHA-256 is
`af97e8a2ba832cddd12f6e29afd966116251cbea48aba40fd9480e8a50073f76`; index SHA-256 is
`15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`.

## Evidence limits

Native traces, browser-observed behavior, build/source identity, and reviewer conclusions remain
separate evidence types. Do not infer browser intermediate events from native traces. Automated
evidence does not establish discovery, enjoyment, comfort, or reduced-motion behavior. Record what
was not observed. The scoped reviewers also report no durable level-registration or renderer-branch
test; root accepts that maintenance limit as part of the bounded test scope. The continuous gameplay
goal remains active, and separate level-3 villain-push research is outside this room's acceptance.
