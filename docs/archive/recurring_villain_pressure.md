# Recurring villain pressure

Status: DONE_WITH_CONCERNS; MANAGER ACCEPTED. D1 mechanics, authoring, presentation, and tests
pass fresh SPEC and distinct QUALITY. Frozen-build, focused/trial/pose, continuous 24-room
campaign, and archive gates pass. Fresh independent integration ACCEPTS WITH CONCERNS; the manager
explicitly accepts and closes this plan. Evidence and the latest shared Podman budget observation
are recorded in
[recurring_villain_pressure_acceptance.md](../active_plans/reports/recurring_villain_pressure_acceptance.md).
Continuous game development remains ACTIVE; the mandatory host gate passes at the latest recorded
observation, so feature development may proceed again. This completed feature plan is archived.
See [HUMAN_GUIDANCE.md](../HUMAN_GUIDANCE.md) and the settled direction in
[DESIGN_DECISIONS.md](../DESIGN_DECISIONS.md).

## Baseline and stability

The 24-room campaign has 14 armed rooms and 16 attacks: 10 bubbles and six
boomerangs. Before D1, 14 attacks had disable-control bindings; 12 attacks could be
latch-silenced across 11 rooms. These are attack counts, not room numbers. Four
attacks could be held silent in rooms 07, 19, and 20 (both finale attacks). The trial
uses the same shared behavior and needs separate acceptance. This inventory does
not establish a route failure.

Preserve all 24 room geometries and their order, attack effects, lanes, and timing
initially. Authoring changes migrate the fields honestly and correct only narrow,
inaccurate hints. The five existing enabling controls become one-way starts;
room 13 BUBBLES and room 24 LIFT retain their causal contributions. Keep the
historical 23-room pre-anatomy difficulty records immutable. The current 24-room
campaign has no new numerical assessment or human-play acceptance.

The separate [partner_readability.md](partner_readability.md) lane owns carrying poses and
protects physics and geometry. Implementation, fresh SPEC, distinct QUALITY, actual normal/reduced
rides, and the synthetic edge/loading matrix pass. The combined final build has 78 canonical
Node checks, 22 served files, and 17 decoded SVGs. Its main is
`6571ce6ff561d87e3acdcb1a0ab773d8ecbc45c400aebf1d91a753c95045739c`, map
`b3509b9757f251e234d71b9ebf92d855566fb25815fad00142d06204a36a8a4b`.
All 183 frozen inputs remain bound to this artifact; no build follows freeze.

The Playwright-owned local-server repair passes fresh SPEC and distinct QUALITY.
The unchanged permanent two-worker journeys passed six pairs: 12 pages, 96 HTTP
200 responses, and zero reported errors. CLI/config validation, root/MIME/404
behavior, bind failure, and cleanup were observed. Backlog sensitivity is observed;
the precise kernel mechanism is inferred, and no universal transport cure is claimed.
See [browser_transport_investigation.md](../active_plans/reports/browser_transport_investigation.md).

## Approved D1 contract

Authoritative owners are [src/types/interference.ts](../../src/types/interference.ts),
[src/interference.ts](../../src/interference.ts), and
[src/weapon_pose.ts](../../src/weapon_pose.ts). D1 changes shared campaign and
trial behavior; the final acceptance record distinguishes source review from browser evidence.

- Authored `startsOnPadId?` and `interruptedByPadIds?` replace the old enabling and
  disabling names without aliases. Runtime attackers require `started: boolean`
  and `usedInterruptPadIds: string[]`; initialize started when no start pad exists.
- A start pad starts its attacker once, on first active observation. After start,
  consume all active, unused interrupt pad IDs together. Cancel only that attack's
  flight and reset its existing full cooldown, followed by its full windup. The
  start or interrupt tick does not decrement that reset. Holding, latching, or
  reentering a used pad does not reset again; each different pad has one use per attempt.
- Shared eligibility is playing, boss undefeated, and runtime attacker started.
  Missing runtime state is ineligible; a pose with no runtime attacker is undefined.
  Dead/completed states do not advance. Boss defeat clears flights and action markers
  while already applied effects recover. Pause freezes state; retry creates a fresh attempt.
- Action markers are `release | catch | interrupted`. `WeaponAction` adds `waiting`
  and `interrupted` in place of `silenced`. An interrupt uses the existing 0.35-second
  recover duration. Windup has priority, and a natural catch remains distinct.
- Preserve mechanism update order and its existing one-substep observation lag.
  Add no save fields, timers, phases, or tuning changes. Earned boss defeat and room
  completion end pressure; countered puzzle schemes remain separate from weapons.

## Execution gates

| Task | Owner | Dependency | Status and evidence |
| --- | --- | --- | --- |
| D1 contract | Architect and manager | Behavior direction | APPROVED; contract above; actual shared types written |
| Mechanics | Mechanics owner | D1 | PASS; once-per-pad interruptions and recurring pressure; fresh SPEC/QUALITY accept |
| Authoring | Authoring owner | Actual D1 type file | PASS; all 24 normalized definitions exact except field renames and seven hints; five starts and 16 attack/pad pairs |
| Presentation | Presentation owner | Shared eligibility | PASS; 61 frozen source Canvas-call cases; waiting/interrupt/recharge/warning cues |
| Tests | Test owner | D1 mechanics | PASS; 14 meaningful mechanic/lifecycle tests; fresh SPEC/QUALITY accept coherent batch |
| Canonical checks and build | Implementation owners | Coherent dependent changes | PASS; 78 Node checks, exact typecheck, production build, 2/2 permanent two-worker tests, 16 HTTP 200 resources |
| Campaign | Fresh browser owner | Frozen final build | PASS; fresh empty save, Play plus 23 Next, 24 completions/finale, 24 Replay entries and byte-identical reload; actual zero retries observed |
| Trial | Fresh browser owner | Frozen final build | PASS; four normal/reduced by fresh/nonempty-save runs; 44 screenshots; save bytes identical |
| Pressure and recovery | Browser owner | Frozen final build | PASS; all 24 required focused cases; 29,329 samples, 59 screenshots, zero collected errors |
| Lifecycle and motion | Browser owners | Frozen final build | PASS; focused/trial normal/reduced evidence plus normal-motion continuous-campaign save/reload |
| Review and integrate | Fresh SPEC, distinct QUALITY, fresh integration | Source and browser evidence | PASS; source SPEC/QUALITY and fresh independent integration ACCEPT WITH CONCERNS |
| Document and archive | Records and custody owners | Frozen evidence | PASS; 1,575 archive files, final ledger digest and exact restores verified; manager explicitly accepts DONE_WITH_CONCERNS; completed plan archived |
| Shared host storage | Operator | Latest observation | PASS; the full Python suite passes and read-only Podman storage is below the mandatory limit; see [the acceptance report](../active_plans/reports/recurring_villain_pressure_acceptance.md) |

## D1 propagation

The manager's answer is the approved contract above. It keeps pressure recurring
without changing encounter timing or adding persisted state. Each affected owner
must restate D1 before dependent implementation. Approval is settled; propagation
closes only after every affected row has confirmation and verified application.

| Task | Updated brief and resulting constraint | Restated interpretation | Application and verification evidence | Pending next-action owner |
| --- | --- | --- | --- | --- |
| Mechanics | Shared types/state and one-use interrupts | Applied and accepted by source reviews | Coherent implementation; 14 mechanic/lifecycle tests | None; integration and manager acceptance complete |
| Authoring | Preserve geometry/order/timing; exact field migration | Applied and accepted by source reviews | Normalized 24-definition identity; seven hint IDs recorded | None; integration and manager acceptance complete |
| Presentation | Derive waiting/interrupted from shared state | Applied and accepted by source reviews | 61 frozen source cases; built warning/resumption evidence | None; integration and manager acceptance complete |
| Tests | Pressure, pad reuse, lifecycle | Applied and accepted by source reviews | Meaningful durable tests; 78 canonical checks | None; integration and manager acceptance complete |
| Browser | Frozen ordinary-key campaign/trial and motion | Restated and applied by browser owners | 24 focused cases, four trial runs, and fresh full 24-room Play/Next run pass; motion limits recorded | None; integration and manager acceptance complete |
| Records | Distinguish approval, implementation, acceptance | Restated and applied by records owner | Full campaign and final custody reconciled; ten canonical records pass focused link/ASCII checks; screenshot provenance frozen separately | None; integration and manager acceptance complete |

## Acceptance limits

Focused acceptance shows pressure resuming after interrupts with the full cooldown
and warning, no repeated interrupt from the same pad, simultaneous consumption of
active unused IDs, and fresh usage after retry. Verify one-way starts, lifecycle
and motion contracts, and the causal roles of BUBBLES and LIFT. These checks pass in their
recorded lanes. Pose/server evidence remains distinct from the accepted continuous campaign and
fresh integration.
The mandatory shared Podman disk-budget gate passes at the latest recorded observation; see the
[acceptance report](../active_plans/reports/recurring_villain_pressure_acceptance.md) for the
command, result, and limits. Earlier failing runs and their host-action chronology remain historical.

Retain route records, baseline/input hashes, and frozen evidence under
`test-results/recurring_pressure/`; use code paths for this ignored archive and link tracked reports. Preserve
the current PNG policy and historical difficulty locks. Record new hashes and route
results only from actual final implementation and browser runs.
