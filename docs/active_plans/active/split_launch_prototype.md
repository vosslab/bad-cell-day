# Split launch prototype

**Status: CLOSED PRIVATE LEDGER; ROOT KEPT WITH CONCERNS.** This file records the bounded native
trial for brain room 38, **Jump to Conclusions**. Root selected KEEP and explicitly authorized
production under D3, and approved the exact art under D4. The prototype remains private evidence;
production registration and acceptance are recorded separately in the [production plan]
(split_launch_room.md) and [acceptance report](../reports/split_launch_acceptance.md).

## Decision ledger

- Root decision D1: existing `LevelDefinition`, `GameState`, player, villain, and interference types
  are authoritative. Use supported owner-specific pads and barriers; do not invent a shared
  contract. Recurring Cana must pressure a route decision, while hits stay avoidable and recoverable.
- Applied: the fixture uses ordinary level data and owner-specific route pads/gates. Cana's
  nearest-target boomerang is placed to cross the route under test; no hit is required to clear.
- Verified: trace 01 completes both routes; trace 05 confirms a miss, regroup, retry, and clear.
  Trace 05 records Cana's actual Pac `shove` effect at frames 167 and 656. The route remains
  completable, and the attack is avoidable rather than a required hit.
- Root decision D2: require an onward partner-held route before the reciprocal return favor. Isp
  takes the lower hold; while it is held, Pac crosses the upper route and reaches an OPEN ISP latch.
  Pac's latch releases Isp through the lower gate; both continue to convergence. Both first
  departures matter. A miss must recover on the floor, and the hold must allow Cana evasion.
- Applied: the Isp hold opens a Pac-only upper membrane and stabilizes the upper crossing; Pac's
  far latch keeps that membrane open and opens Isp's lower gate. The upper crossing begins beyond
  the recoil corridor so it cannot obstruct the launch. The retry floor runs below both gates.
- Root decision D3: KEEP the bounded prototype with concerns and explicitly authorize production.
- Root decision D4: approve the exact brain tissue asset, SHA-256
  `1c4b95db1af1ed51ca86fa6d3a8443d3f4d00e624a4ba5aac3d5ba0bdb786f4e`.
- Root decision D5: use one integrated batch gate, `./check_codebase.sh` followed by
  `source source_me.sh && ./run_playwright_tests.sh --build`; the latter performs the official build
  and two standard smokes.
- Verified: trace 01 records Pac on `upper_crossing` while Isp holds `isp_lower_support`; Pac's
  `pac_open_isp` latch opens `isp_lower_gate`, after which Isp leaves the hold and both reach their
  exits. Trace 05 misses the first crossing, returns Isp to the recoil surface, retries, and clears.
- Root challenge: test a direct Isp exit attempt from the recoil's right edge, since an 80px lower
  gate may be jumped and make Pac's latch optional. If observed, use the existing full-height
  Isp-only barrier pattern and replay the route.
- Applied: the 80px gate variant is frozen in `tests/_temp/split_launch_prototype/candidate_gate_80.ts`.
  The accepted candidate uses a full-height Isp-only gate from y=0 through the fallback floor.
- Verified: identical ordinary inputs in traces 02 and 03 let Isp jump through the 80px gate to
  their exit without Pac's latch (trace 02), but stop Isp at x=1095 against the full-height gate
  (trace 03). Both fixture definitions and traces are retained separately.
- Outcome: root selected KEEP with concerns and explicitly authorized bounded production (D3).
  This room's causal route is a
  joint split, partner-held upper crossing, reciprocal latch, then convergence; it is distinct from
  room 37's own-return latch and return-to-help sequence. This is native scripted evidence only;
  it does not establish human discovery, readability, enjoyment, or comfort. Human play is not a
  production gate.

## Question and route hypothesis

Can a joint load of the existing recoil surface split Isp and Pac onto useful lower and upper routes,
where each must complete a distinct onward handoff before both can converge? This must teach a
different causal pattern from room 37's one-up / own-return / return-to-help sequence.

The rough geometry starts with the existing 300x80 recoil body over a continuous fallback floor.
Isp walks off to a broad lower hold. That hold opens a Pac-only membrane and stabilizes the upper
crossing. The recoil launches Pac rightward onto that crossing; Pac travels back left to an OPEN ISP
latch. The latch keeps the membrane open and opens Isp's lower gate. Isp can then leave the hold,
while Pac continues right and drops to the convergence floor. A failed or released upper crossing
falls to the same floor and can be retried by regrouping on the recoil. Cana's nearest-target
boomerang should pressure the hold/upper crossing decision, with room for a safe dodge.

The actual definition, clearances, and route lengths will follow simulation evidence. The upper
landing must be reachable with the `-730` recoil impulse and exceed ordinary jump reach from the
fallback floor. No art, production registration, engine changes, teleports, or synthetic state
writes are in scope.

## Method

1. Import the actual `LevelDefinition`, `GameState`, `GameInput`, and villain scene types with
   `import type`; call the actual `create_game_state` and `step_game` at 1/120 second.
2. Drive only ordinary left/right/jump inputs. Save raw inputs and trace both heroes' position,
   velocity, grounded/support state, pads, barriers, Cana phases/projectiles/effects, and outcome.
3. Replay a complete split, reciprocal handoff, convergence, and two-exit route. Test the demonstrated
   direct-gate-jump bypass, a no-recoil ordinary-jump attempt, and miss/retry recovery. Do not treat
   these bounded controls as an exhaustive reachability matrix.
4. Keep the fixture only as evidence. If the route repeats room 37, allows a meaningful solo or
   ordinary-jump bypass, makes either handoff optional, or cannot recover from a miss, recommend
   SET ASIDE and record the source-grounded reason.

## File scope and verification

- `tests/_temp/split_launch_prototype/`: ordinary level fixture, native route harness, input scripts,
  and trace outputs only.
- Run `npx tsc --noEmit -p tsconfig.json`; record exact command and exit status.
- Root inspected this ledger and raw traces and selected KEEP with concerns, authorizing production.
  Fresh SPEC, QUALITY, and integration reviews apply to the production implementation.

Scripted reachability does not establish human discovery, enjoyment, readability, or two-player
comfort.

Native evidence and raw frame traces are in `tests/_temp/split_launch_prototype/REPORT.md` and its
`traces/` directory. The trace runner uses `node --import tsx .../run_routes.ts`; the required
`npx tsc --noEmit -p tsconfig.json` completed with exit 0 and no output.
