# FLOAT passenger feasibility

Status: DONE_WITH_CONCERNS. 2026-10-15. The source-only candidate is viable for fresh production
implementation as additive stable `level_24`, after `level_13` and before `level_14`, in the liver.
The manager accepted that placement and feasibility. All existing 23 definitions remain outside
this investigation's write scope. This is ordinary-input feasibility and source-render evidence,
not production-build acceptance, novice discovery, enjoyment, or paired-play observation.

## Frozen candidate and custody

The complete proposed `LevelDefinition` is the byte-identical archived
`test-results/float_passenger/feasibility/archive/fixture.ts.txt`.
SHA-256: `1298bbf96a62790a2a5f7f5b0260035f936299571d4392d6d187f498f5925781`.
The source fixture uses candidate ID `float_passenger_candidate`; the production owner assigns
stable `level_24` and integrates the matching scene. No new shared types or simulation changes are
needed. The investigator edited only its assigned temporary directory and this report; the manager
owns shared changelog, guidance, design, and campaign integration documentation.

The final custody archive preserves all investigation files byte for byte at the literal local
path `test-results/float_passenger/feasibility/`. Helpers retain their `.txt` suffixes. The generated
`browser.js` is archived as `browser.js.txt` with identical bytes, so the ignored evidence tree
contains no executable JavaScript or TypeScript source extension. The original `index.html` and
copied assets are historical prototype evidence; restore `browser.js` before serving that page.
The verified source-only server on port 8138 was stopped after copy verification. The shipped-game
server on port 8127 remains available.

This archive is local and Git-ignored. Its paths below are literal custody references rather than
GitHub links. `test-results/float_passenger/CUSTODY.md` records the complete 133-file transfer,
restore commands, original execution paths, and failed-probe preservation;
`test-results/float_passenger/inventory.json` records every source/archive SHA-256 pair.
`test-results/float_passenger/SHA256SUMS` covers the complete archive except itself. Restoration
returns evidence and helpers to their original `tests/_temp/float_passenger/` locations for
reproduction; this adds no permanent test suite or new gameplay proof.

## Hypothesis and method

Hypothesis: Pac deliberately boards Isp, then a useful Gem FLOAT physically transports Pac to a
different upper route. Pac must maintain Isp's lower passage until Isp returns the favor from the
far side. The ride is the new causal action; the two familiar controls make its consequence useful.
This is more than Isp floating to another RESCUE latch.

The geometry-expert workflow framed this as classical 2D motion planning with axis-aligned rectangles,
numeric trajectory measurements, and reachability decisions. Pixels use positive y downward;
seconds drive the existing simulation. Tests call the unchanged `step_game` with ordinary directional
and rising-edge jump inputs. Its existing subdivisions remain at most 1/120 second. No trace
teleports players, injects effects, activates pads, changes runtime state, or skips a mechanism.
Source bounds and no-interference counterexamples complement successful route traces.

The first geometry put the shelf at y340. Thirty-eight stationary partner-boost jump timings without
FLOAT reached best Pac feet y333.6736, exposing a potential bypass. The revised shelf is y310,
240 pixels above the y550 floor and 23.67 pixels beyond that measured best boost. The original
ordinary route still completed. This is a geometry correction, not a physics patch.

## Routes and causal graph

```text
Isp waits on floor LIFT ----> Gem releases useful bubble
Pac boards Isp ------------> FLOAT carries the actual passenger
Pac jumps right -----------> upper shelf, then PAC CROSS hold
PAC CROSS -----------------> opens Isp's distinct lower gate
Isp traverses below -------> ISP RECONNECT latch
ISP RECONNECT -------------> preserves lower gate and opens Pac's upper onward gate
Pac leaves CROSS ---------> upper exit; Isp takes lower exit
```

The floor is continuous at y550; misses fall onto safe ground. Isp begins x250, Pac x170. Gem's
horizontal shot is aimed low at y535 so a correctly boarded Pac is above its collision lane.
Isp's 70-pixel LIFT pad enables the cooldown and windup. Leaving before impact resets/cancels an
enabled shot through existing semantics; an already applied FLOAT naturally lasts 1.4 seconds.

Pac's broad upper shelf spans x310..1100 at y310. Isp's upper filter at x305..325 reaches y330,
preventing Isp from FLOATing into Pac's route. Pac's CROSS hold occupies x470..580, well beyond
the boarding edge, and opens Isp's lower gate at x650. That gate fills the corridor between
the underside of the shelf and the floor. Isp's RECONNECT latch at x890..980 sustains that gate
and opens Pac's upper gate at x800. Distinct exits remain on their respective floors near x1010.

Both heroes make consequential decisions: Isp positions and stays under the rider, then travels
below; Pac boards, chooses a dismount, and holds CROSS until the reconnect. Pac cannot replace
Isp on LIFT/RECONNECT; Isp cannot operate CROSS. The upper route cannot be reached by ordinary solo
or partner-boost jump. The lower gate cannot be jumped around because the upper shelf is its ceiling.
Pac can walk below the upper gate but cannot ascend to the upper exit from the floor. There are no
crates, moving platforms, hazards, boss conditions, or extra attack requirements.

Gem supplies the mandatory useful attack. Cana's lower gate has an active scheme and reacts to
Pac's hold and Isp's reconnect; adding a separate boomerang would distract from the transport.
The existing campaign already supplies recurring Cana attacks. The manager explicitly accepted
one attack in this candidate.

## Ordinary route and tolerance

The reusable ordinary-input route is
`test-results/float_passenger/feasibility/archive/probe.ts.txt`, with full
`test-results/float_passenger/feasibility/initial_trace.json`.
At 16 ms it completes at approximately 11.40 simulated seconds:

1. Settle for 0.1 s. Pac jumps right for 0.39 s, then releases both inputs for 0.6 s to land on Isp.
2. Wait 3.0 s. Pac is riding Isp during FLOAT, near effect age 0.92 s.
3. Pac jumps right for 1.1 s onto the broad upper route, then walks right for 0.4 s onto CROSS.
4. Isp walks right for 3.2 s to RECONNECT, then another 0.6 s toward the lower exit.
5. Pac walks right for up to 2.5 s; the simulation completes before the interval ends.

The bounded sweep used 580 trials: dt 8.33, 16, 33.33, and 50 ms; boarding offsets -20, -10, 0,
+10, +20 pixels; and 29 dismount ages from 0.30 to 1.70 s after actual FLOAT impact.
Every boarding offset and every dt completes for each sampled dismount age 0.85..1.65 s,
a common 0.80 s sampled interval. Earlier departures commonly miss, as expected. There were zero
deaths in the complete sweep. This supports forgiving execution rather than a narrow timing trick;
it is not a continuous proof or a measurement of novice comfort. Directional control of the
carrier during the ride remains unnecessary: the designed boarding shaft is vertical because
existing head-rider movement carries upward but does not horizontally attach the rider.

The sweep and recovery code is
`test-results/float_passenger/feasibility/archive/experiments.ts.txt`.
Its inspectable outputs are
`test-results/float_passenger/feasibility/experiments.json` and
`test-results/float_passenger/feasibility/experiment_summary.json`.
The original boost characterization is
`test-results/float_passenger/feasibility/archive/boost_probe.ts.txt` and
`test-results/float_passenger/feasibility/boost_probe.json`.
An additional 120 moving boost trials across four dt values and 30 jump delays, with attacks
removed, never landed on the upper shelf or activated CROSS. Those moving approaches also hit the
solid shelf underside before entering the upper route; source collision geometry explains that
result. Finite search alone is not claimed to exhaust arbitrary input sequences.

## Recovery and liveness

All five named ordinary-input recoveries pass, preserving the simulation's actual pad and effect
behavior. Detailed before/after states are in `experiments.json`:

| Mistake | Observed consequence | Ordinary recovery |
| --- | --- | --- |
| Pac remains in Gem's shot lane | Pac receives STICKY; Isp remains on the floor | Wait out STICKY, board Isp, use the next shot, finish |
| Pac boards after the lift is out of reach | Late jump cannot catch airborne Isp | Both settle, return to boarding positions, repeat ride, finish |
| Pac jumps off too early | Pac misses the shelf and lands on the safe floor | Restore Isp to LIFT, hop around him, board and repeat |
| Pac leaves CROSS too early | Lower gate closes; Isp stops at x620 | Pac returns to CROSS; Isp resumes and reconnects |
| Pac falls after RECONNECT | Earned reconnect remains latched; Pac lands below | Isp returns to LIFT, transports Pac again, both finish |

The final case required removing the prototype's initially proposed permanent bubble suppression
by RECONNECT. Suppression would have made an upper fall a living softlock. The frozen candidate
keeps LIFT as the only attack enable; once Isp walks away it is already quiet, and returning to
LIFT can always request another ride. No attack, collision, or pad semantic change was justified.

If Pac walks left through grounded Isp during a retry, normal partner pushing displaces Isp.
The recovery explicitly restores Isp and has Pac hop over him to the approach side before boarding.
That is physical cooperation to observe in human play, not grounds for a hidden position reset.
Before CROSS, failure replays only the short boarding/shot sequence. After RECONNECT, completed
gate setup survives ordinary falls. No death/reset mechanic is needed for this safe candidate.

## Rendered source evidence

The source-only browser used the actual `render_game`, unchanged character SVGs, liver anatomy,
and keyboard events. Four samples each in normal and reduced motion show boarding, rising,
CROSS, and RECONNECT. Both runs have zero page errors and matching sampled causal states.
The retained `test-results/float_passenger/feasibility/browser_samples.json`
records the states. The restorable capture helper is
`test-results/float_passenger/feasibility/archive/capture.mjs.txt`.

Representative retained images:

- `test-results/float_passenger/feasibility/normal_boarded.png`
- `test-results/float_passenger/feasibility/normal_rising.png`
- `test-results/float_passenger/feasibility/normal_cross.png`
- `test-results/float_passenger/feasibility/reduced_cross.png`

The stack is recognizable from two identity badges and colored footing brackets. The 88-pixel
art overlaps because the physical bodies are 36 pixels tall; faces and molecular parts crowd
during the ride. This remains a presentation concern for fresh quality review. Gem's low muzzle
and power-status plate overlap the floor region but leave LIFT and the landing edge legible.
The physical route does not justify changing canonical character sizing or collision bodies.

## Comparison and rough rubric

These are investigator source estimates using the existing rubric vocabulary, not a fresh locked
difficulty assessment and not changes to historical assessments: reasoning 3, cooperation 4,
execution 2, timing 2, hazards 0, novelty 3, recovery cost 1. Solution clarity burden is provisionally
3 because discovering a deliberately boarded FLOAT is a new inference; actual unassisted clarity
and two-human control friction remain unknown. No aggregate ranking is needed for promotion.

| Existing room | Useful distinction |
| --- | --- |
| `13` | Pac invites a useful FLOAT for Isp to reach RESCUE; candidate instead transports Pac on Isp and transfers responsibility twice |
| `17` | Isp FLOATs off a carrier and powers Pac's lift; candidate uses a hero as the physical carrier, with a safe continuous floor |
| `21` | Four controls alternate upper/lower route access; candidate has fewer controls and makes passenger transport the prerequisite |
| `22` | Separated routes and a backtracking shortcut produce a longer relay; candidate concentrates on a single shared-body ride and two spatial lanes |
| `23` | Reciprocal cargo load exchange is a new mechanism model; candidate recombines existing FLOAT and head riding without new simulation contracts |

After `13` is the stronger placement: useful FLOAT has just been introduced, the safe rider transfer
varies it, and `14` then changes to refuges and hazards. Inserting after `17` would cluster another
reciprocal upper/lower relay immediately before `22`. Earlier exposure does not establish mastery;
this placement is a design hypothesis for later observation.

## Checks and remaining acceptance

`npx tsc --noEmit -p tsconfig.json` exited 0 with no diagnostics while the typed prototype was
present, and again after archived helper cleanup. The initial prototype run had a bad relative
import depth, and an initial typecheck found one unannotated result array; both were corrected
before route evidence was frozen. The manager's concurrent full gate then reported temporary
`node:fs` import scope failures in three scratch helpers. They were not hidden by configuration:
all executable helpers were archived and removed, and the exact project typecheck passed again.
The manager owns the fresh full-gate rerun after integration.

The first sandboxed Chromium launch failed at macOS Mach-port bootstrap with permission denied.
The same local capture command succeeded with approved sandbox escalation. No skipped render
sample is represented as passing. Source browser captures are feasibility evidence only; no
production build, save/frontier migration, all-campaign traversal, full-suite acceptance, or human
play claim is made here. The production owner and fresh reviewers must verify stable-ID integration,
normal/reduced rendering, full route, failed boarding recovery, and post-reconnect fall recovery
against the actual built artifact. The manager retains the final promotion decision.

## Retained evidence hashes

These SHA-256 values identify the local archive references used above. The root custody
inventory also covers every unlisted asset, screenshot, helper, and raw receipt.

| Feasibility archive-relative path | SHA-256 |
| --- | --- |
| `archive/boost_probe.ts.txt` | `3fde0c97f46ce21bd10f064fee183629bd2fd31f3403f8e44e6a81f4de5dc401` |
| `archive/capture.mjs.txt` | `521639580dd48d2c772d84fc87e4226356ede2de69c04d0cd630958a4d76a2a8` |
| `archive/experiments.ts.txt` | `e910bd0ca9d5273b3469814fd4b4d56b39b2b7401d970c000e74853d1381932e` |
| `archive/fixture.ts.txt` | `1298bbf96a62790a2a5f7f5b0260035f936299571d4392d6d187f498f5925781` |
| `archive/probe.ts.txt` | `092fc9ee1527208f217f40df40d4221bb7c1ea778029a9ba90a8ecf89d091bc8` |
| `boost_probe.json` | `d51407f2a17ffe106f336e123fea1ee51a194a6ef8c31f6c5af04551d8487c64` |
| `browser.js.txt` | `2edd1dd097d6c2790186a7884ac87a8f8e9bc60921c5cc0603664b2bacdf63a4` |
| `browser_samples.json` | `27f0d7519e1df4d30fb6ad8d84d1780d1388f2abb5be77b011a5bc6b2c59b3b5` |
| `experiment_summary.json` | `5c68c5730b6e8fcb159c9ae0d6abb53026ce784568cffd2f1b42adb45da4351b` |
| `experiments.json` | `abaf6bdfffbd48da241dd6a132a5156508d6316d07dd900f0c6f554a7a7141fe` |
| `index.html` | `fd812728cf7b2107ba3f8d8efd05271da3ab4dd8632d3b0ed875c2ebb4fbd2b5` |
| `initial_trace.json` | `e7f00651d160845cb7b724823b1c52ac4b6ceb08cc5ee575b3830970795a720e` |
| `normal_boarded.png` | `d4e9af972c2b6ae291d0f5559249d6119f3e48bb1fb8ae9faf726624ff7ee744` |
| `normal_cross.png` | `b8fbc4cacb5b3ee9bba47bec48ad5d5df13f0e235b99b9e62c9d8cf95b3093a4` |
| `normal_rising.png` | `eebb289b757c59b2b28f13ffc7e37006e59f1d49d4a1388e10e3a7c083a04ded` |
| `reduced_cross.png` | `6cf526e8161db514eb03aa30bd6afaaebbd38147840a9d802239ded8eb63a389` |
