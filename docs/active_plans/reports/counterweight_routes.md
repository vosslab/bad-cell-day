# Cargo exchange route evidence

Updated 2026-10-15. Source-level acceptance for the additive stable `level_23` room;
browser and whole-campaign acceptance belong to the integration report.

## Authored geometry

[level_counterweight.ts](../../../src/level_counterweight.ts) exports `COUNTERWEIGHT_LEVEL`
and `COUNTERWEIGHT_SCENE`. The room adds no attacks, new pad effects, or scripted cargo movement.
Pac owns the left guarded shaft; Isp owns the right. Their two ordinary crates are visible at spawn.
The full-width solid decks share one 270px coordinate. A occupies x220..390 at initial y230;
B occupies x750..920 at initial y500. Both decks are 170x24px. Inner membranes
x390..430 and x710..750 prevent cross-shaft jumps. Outer rails join upper dock undersides
at y254 and run to y420, leaving an 80px-high lower boarding opening. Shaft bases meet decks
at their lower endpoint. A 4px recovery lip at x150..190, y456 bridges the left rail's
critical boarding height. Its underside is y460, so the 40px crate passes underneath
at the y500 lower dock. Its right edge ends before a straddling rider at x192.75;
extending it to x200 instead blocked that rider's head before reaching the rail.

The left upper dock initially separates Pac's locked exit and RETURN pad from his spawn.
Only Isp's upper DELIVERY latch opens this gate. Pac's eventual RETURN latch opens the entire
lower-right docking passage, which joins its rail continuously. Isp therefore cannot leave
the starting deck behind while the pair rises. Owner-filtered arrival pads reject cargo and
the other hero. Existing closed barriers block crates and decks regardless of their hero filter.

The return crate starts at x1020 behind the x1000..1020 upper cargo gate. DELIVERY at
x950 remains accessible before that gate. Pac and his ordinary crate must share the
lower CARGO PARKED plate (x115..180, minimum weight 2) to latch the cargo gate open.
This uses the existing any-body weighted pad and ordinary door effect. Isp cannot reach
the left plate, and the only left crate contributes one weight. Because the plate ends
at x180, a touching 40px crate is fully outside A, whose left edge is x220. The latch
records actual unloading before the return crate can enter B, preventing equal-loaded
midshaft deadlock without changing the passenger clutch or either crate's weight.

Three 14px cargo stops preserve room to stand behind wrong-way cargo: left upper x120..130,
left lower x30..40, right upper x1060..1070. The hero can hop behind pinned cargo, stand on
the low stop, and push back toward the shaft. These replace a demonstrated living trap at
the initially locked upper-left gate. Initial cargo remains fully on the dock, and Pac starts
between that stop and the crate, so the outbound push needs no setup jump.

A fourth 14px stop protects the essential crate's inner pin at x350. The lower-left membrane
has an enclosed recovery recess at x390..430, y420..486, with a solid back at x430..440.
Its stop starts at y486, allowing Pac to stand at y450 and push the y460 crate left. One right
hop crosses the pinned crate and enters the recess. LOWER DOCK, an ordinary any-body latch
on x220..390, y492..500, permanently opens the recess's visible safety gate on arrival.
The gate keeps cargo out during partial descent; by the time that plate can activate, cargo
already intersects the y486 stop and cannot enter the recess. The latch never closes again,
so it cannot close on a hero. The stop, back, and upper membrane preserve shaft separation.

The gate is necessary: a freely open recess admits cargo before the lower endpoint. A wider
experimental bay let the crate fall below the moving deck and paused the pair at coordinate
242.125, creating another unloading trap. A 38px opening excluded cargo but also prevented a
hero standing on the crate from entering. Both experiments were discarded before source freeze.

This applies the geometry-expert skill to classical dynamic 2D AABBs, positive-down pixel
coordinates, floating-point arithmetic, and deterministic 1/120s input steps. Existing
collision predicates own support and clipping tolerances. The temporary probe uses a 1e-7px
positive-penetration threshold only for its independent overlap oracle; authored geometry
does not introduce a competing runtime tolerance.

## Complete legal route

[Archived counterweight route harness](../../../test-results/counterweight_validation_harnesses/counterweight_route.mjs.txt)
constructs the immutable authored level and only supplies ordinary left/right/jump inputs to
`step_game`. It never edits
runtime positions, loads, pads, barriers, or completion state. Fresh state reconstruction and
replay of recorded ordinary inputs isolate recovery attempts.

The canonical route completes in 2453 steps, 20.442 simulated seconds:

1. Pac pushes the left crate fully aboard A and boards. Load 2:1 lowers Pac and raises Isp.
2. At the lower dock, Pac hops over his crate and pushes it left. Both occupy CARGO PARKED,
   opening the upper cargo gate; Pac then reboards without cargo.
3. Isp reaches DELIVERY, crosses the opened cargo gate, hops behind the upper-right crate,
   steps onto its small stop, and pushes that crate onto B.
4. Load 1:2 raises Pac and lowers Isp. Pac returns over the small cargo stop to RETURN and his
   opened exit. Isp's lower passage opens, and Isp walks into his exit.

Exact pair endpoint checks pass at both 270 and 0. Every sampled deck pair remains equal and
opposite; every hero/crate remains outside positive-area solid intersections throughout all probes.
Milestone-linked Gem/Cana schemes react to the two actual arrival pads. Canonical per-step input
data is generated at `test-results/counterweight/room_inputs.json`; read-only route snapshots are
generated at `test-results/counterweight/room_snapshots.mjs.txt`.
Separate replayable ordinary-input recordings are generated at
`test-results/counterweight/room_wrong_order_inputs.json` and
`test-results/counterweight/room_reboarding_inputs.json`. The two inner pin attempts are recorded
at `test-results/counterweight/room_inner_pin_inputs.json` and
`test-results/counterweight/room_right_inner_pin_inputs.json`.

## Recovery and bypass probes

All these ordinary-input source probes pass:

- Both initial exits remain locked, including repeated jumps against their gates and rails.
- Pac jumps over the untouched outbound crate; two passenger loads of 1:1 remain balanced.
  Repeated Isp jumps remove his passenger eligibility and never replace the missing ballast.
- Wrong-way outbound cargo pins at its upper stop, then returns aboard through ordinary hops
  and pushing. Lower-left cargo deliberately pins at its stop and is pushed back aboard.
  Upper-right cargo deliberately pins at its stop and returns to B for the reciprocal trip.
- A fresh state plus 1500 frames of Pac right input reaches the exact reproduced mandatory
  inner pin: coordinate 270, Pac x320/y464, crate x350/y460. One 100-frame right hop reaches
  the recess at x395/y450. Walking left unloads the crate, claims CARGO PARKED, and the ordinary
  reciprocal delivery completes both exits. Every simulation tick across all probes independently
  checks that the outbound crate never crosses x350 into the recess.
- A separate attempt holds Isp left for 1500 frames during return delivery, pinning his crate
  at x750/y460. Pac claims RETURN and Isp walks right to complete both exits. That crate has
  already served its required role and needs no further movement.
- Pac parks cargo and stays off A for ten seconds. Both decks wait. Isp may load the return
  crate while Pac remains on the lower dock for ten seconds; reboarding restores travel.
- Pac jumps from the returning A before full upper docking. The pair waits for five seconds;
  walking back aboard and falling onto the reachable deck finishes the return.
- Isp jumps onto the upper dock before full outbound docking. The pair waits for five seconds;
  jumping back aboard restores motion and reaches the exact first endpoint.
- The exact previously failing wrong-order input starts at coordinate 200, then Isp uses
  right-jump 100 steps, right-jump 70, left-jump 9, walks to x810 and waits 120 steps.
  The gate now retains his crate; reboarding resumes the first descent. Parking and normal
  return loading then complete both exits. No retry or state editing is used.
- Early upper attempts at coordinates 180, 220 and 250 cannot reach the return crate even
  after ten seconds pushing against its gate; reboarding completes the first descent.
- Early left unloading attempts at coordinates 180, 220 and 250 finish the first descent
  before cargo can leave. Passing below the rail requires crate top >=420 (bottom >=460),
  while passing over the lip requires bottom <=456. These intervals do not overlap;
  cargo therefore passes below the lip with top >=460, at the full y500 endpoint.
- Reverse boarding with Pac at x192.75 raises A until his head meets the rail at y420,
  coordinate 226/deck y456. Walking left lands on the recovery lip; walking right reboards.
  A separate probe walks all the way off the lip onto the y500 floor and waits ten seconds.
  A side jump from x119 onto the y456 lip, then walking right, restores the return. This
  also succeeds after hopping onto parked cargo and back to the lip. No short return timer
  or four-pixel jump through the rail is required.
- Retry-style fresh state construction restores authored cargo, both initial decks, empty latches,
  and unsolved status before each independent initial-state attempt.

The maximum free jump rise is about 92px. The lip's top is only 44px above the lower dock;
even from it the upper dock remains 226px higher. Cargo and the 14px stops do not bridge
that gap. The rails
cannot be used as steps: their tops meet the underside of the covering upper docks. Full-height
inner walls and the enclosed recovery recess prevent hero stacking or exchanging crates across
shafts. Once the recovery gate opens, the lower stop blocks further cargo entry. A loaded A
cannot rise for a repeat early approach: its maximum opposing load is the same two bodies on B,
which balances the pair. Returning A requires unloading its crate first. Each shaft has
only one hero and one crate, so authored-room two-hero/two-crate stacking is unreachable. Shared
engine fixtures separately own synthetic stacked-load, ceiling, and cross-body transactions.

## Verification and limits

- `node --import tsx tests/_temp/counterweight_route.mjs`: PASS.
- `npx tsc --noEmit -p tsconfig.json`: PASS after room authoring.
- `npx eslint src/level_counterweight.ts`: PASS.
- `npx prettier --write src/level_counterweight.ts`: clean.

The room author does not edit campaign order, build output, or shared engine code. The parent
integrator owns fresh production-browser route, reduced-motion legibility, full-campaign
regression, save/frontier, pause, retry, and final ending acceptance. Source input evidence is not
browser acceptance. Human discovery, enjoyment, and two-person coordination remain unmeasured.

## Harness custody

The original temporary source was archived byte-for-byte at
`test-results/counterweight_validation_harnesses/counterweight_route.mjs.txt`; verify it with that
directory's `SHA256SUMS`. Restore it to `tests/_temp/counterweight_route.mjs` from the repository
root using the copy command in the archive README. The recorded route inputs and JSON snapshots
remain under `test-results/counterweight/`; `room_snapshots.mjs.txt` is JSON despite its suffix.
