# Current46 design findings

## Scope and limits

The [generated campaign report](report/LEVEL_DIFFICULTY_REPORT.md), [map](campaign_map.json),
and 46 room dossiers describe expert cognitive-walkthrough estimates for the frozen current46
order. They do not measure player success, fun, time, frustration, or shared-keyboard reliability.
All 46 first-pass platforming axes and all 46 control-friction ratings are unknown; four first-pass
puzzle axes are also unknown. Idle captures record no player actions. Scripted routes show that a
route is feasible, not that a new pair will discover or execute it. Treat the estimates as prompts
for design and later human observation, not as an objective quality score.

The final puzzle estimates span 43-82 and final platforming estimates span 11-68. Clarity and
recovery burdens span 1-3. These ranges describe uneven task demands, not a target curve or a reason
to smooth the campaign. Preserve rooms that already deliver clear, distinct cooperation; current
evidence does not justify broad replacement or score-driven edits.

## Progression across the campaign

The positional notes compare expert profiles and source-checked causal accounts. Prior-room
exposure informs novelty estimates but does not establish that a new pair learned or mastered
those mechanics.

- **Lungs, positions 1-5:** The opening teaches pad roles, gates, and the both-exits goal, then
  quickly asks for a two-hero lift condition at position 2. Positions 3-4 shift to ferry and bridge
  handoffs over lethal slime; position 5 instead introduces reciprocal recoil launches and return
  latches, with a safe lower regroup. Opening-region puzzle estimates peak at positions 2 and 5,
  tied with the campaign high at position 32; platforming estimates rise at 3-4 and ease at 5.
  These remain expert estimates: most first-pass platforming axes are unknown.
  Examples: [Glucose Going Up!](report/difficulty_levels/LEVEL_01.md),
  [Bridge Over Troubled Slime](report/difficulty_levels/LEVEL_04.md), and
  [Hold Your Breath](report/difficulty_levels/LEVEL_37.md).

- **Intestine, positions 6-12:** Position 6 uses Gem as a physical step to reach HOLD LIFT, with a
  demonstrated Isp headstep as an alternate; Pac powers the lift for Isp. This is followed by
  the marked drop at position 7, *Narrow Escape*, whose hold-then-latch route sits over a safe
  floor. Position 8 restores demand with movable weight and a bridge whose untimely loss is lethal
  (recovery estimate 3). Position 10, *The Great Cell Shuffle*, has the region's highest platforming
  estimate (68) and also carries recovery estimate 3. It combines a ferry handoff with a bridge that
  collapses lethally after early release. A deliberate scripted trace reproduces that mistake; it
  does not show a human error rate. Positions 11-12 ease platforming after the peak. This profile is
  supported by authored mechanics and replay feasibility, not by observed player recovery or
  success rates.
  See [Narrow Escape](report/difficulty_levels/LEVEL_06.md),
  [Push Comes to Shove](report/difficulty_levels/LEVEL_08.md), and
  [The Great Cell Shuffle](report/difficulty_levels/LEVEL_05.md).

- **Marrow, positions 13-19:** The sequence develops counterweight and cargo roles. Position 16,
  *Cargo Exchange*, has high puzzle demand but low platforming and recovery estimates: cargo load
  and rider placement carry the route. Position 17 raises movement and recovery demands with a
  ferry, bridge, and cargo sequence; positions 18-19 shift to reciprocal route latches and a
  shove-assisted crossing while easing platforming estimates.
  This changes where effort sits rather than steadily raising a tier.
  See [Cargo Exchange](report/difficulty_levels/LEVEL_23.md) and
  [Marrow Cargo Shuffle](report/difficulty_levels/LEVEL_12.md).

- **Liver, positions 20-32:** Familiar pad, bubble, cargo, and villain interactions are recombined
  through varied routes, with lower-demand transitions at positions 20-21 and 24. Clarity burden
  rises to 3 at positions 29-30, then position 32, *Gem's Liver Lair*, ties for the campaign's
  highest puzzle estimate while retaining substantial platforming and clarity burdens. The
  dossiers trace these burdens to under-explained causal links and a multi-part boss route; they do
  not show that players actually become confused.
  See [Bubble Bouncer](report/difficulty_levels/LEVEL_26.md),
  [Two for One](report/difficulty_levels/LEVEL_28.md), and
  [Gem's Liver Lair](report/difficulty_levels/LEVEL_16.md).

- **Brain, positions 33-45:** Several rooms in positions 34-37 and 40 carry clarity burden 3 amid
  layered pad, bubble, lift, and route dependencies. Position 34's *Cana's Upside-Down Commute*
  asks Pac to hold OPEN so Gem's bubble can lift Isp to RESCUE; Isp's latch powers Pac's reversed
  lift and opens the tower. The sac moved between upper and lower flow valves belongs to position
  9, *Gut Instinct*. Other brain rooms vary movement load: position 38 has a high platforming
  estimate with lower puzzle demand, while positions 41-44 mix easier rooms with a platforming
  return at 43 before the campaign-high platforming estimate (68) at positions 45-46, tied with
  position 10. Clarity here is an interpretation of
  source and visible cues, not observed misunderstanding.
  See [Cana's Upside-Down Commute](report/difficulty_levels/LEVEL_17.md),
  [Crossed Paths](report/difficulty_levels/LEVEL_22.md),
  [Attention, Please!](report/difficulty_levels/LEVEL_27.md), and
  [Knock It Off](report/difficulty_levels/LEVEL_31.md).

- **Finale, position 46:** *A Very Bad Day for the Tumor* uses STOP/STEADY to hand off the ferry
  and bridge, then Isp's RESCUE and blue TARGET to steady the bridge and open Pac's route; Pac
  reaches orange TARGET, and both heroes hold their owner TARGET pads for two seconds. Bubbles and
  the boomerang recur as interference. Its expert platforming estimate (68) ties position 10 for
  the campaign high while puzzle demand stays substantial, a synthesis of taught
  mechanics rather than evidence that difficulty must culminate in a score maximum. The idle
  capture and scripted route reveal neither human discovery nor performance.
  See [Cana's Control Freak-Out](report/difficulty_levels/LEVEL_19.md) and
  [A Very Bad Day for the Tumor](report/difficulty_levels/LEVEL_20.md).

The report's first-pass gaps matter throughout this sequence: no first-pass platforming axis is
known, and most first encounters contain no player actions. Later source inspection and scripted
routes support causal mechanics and feasibility; they cannot establish unassisted clarity, human
mistakes, recovery behavior, enjoyment, or measured difficulty. Read positional changes as review
prompts, not as a curve to enforce.

## Ranked priorities

1. **Prioritize navigation and cooperation variety.** This has the strongest fit with
   the requested expansion and a specific structural opportunity: source inspection confirms that
   37 rooms contain 109 barriers, every authored barrier is vertical, and positions 7-20 form a
   14-room consecutive run with barriers. This count is structural: it creates an opportunity to
   vary route geometry, but does not establish monotony or low enjoyment. Positions 9 and 42
   already have distinct-route concepts in *Gut Instinct* and *Jump to Conclusions*, so a fork
   alone would repeat existing work.

   **Root disposition:** park the named generic villain-baited fork/reunion concept. A read-only
   novelty check found substantial overlap with existing Neural Misfire, Pick On Someone Else, Gut
   Instinct, Changing Places, and Crossed Paths. After assessment acceptance, the next gameplay work
   is a private navigation-focused prototype with distinct partner jobs and forgiving recovery,
   before any production registration. Its exact layout, organ, and placement remain to be designed.
   Existing-mechanic recombinations and fresh physical geometry are welcome; no engine mechanic or
   proof of mathematical uniqueness is required. An optional human walkthrough can add useful
   evidence but is not a development gate. This assessment authorizes no production feature.

2. **Keep difficulty progression teachable without flattening it.** The highest supported
   demands are concrete combinations with costly mistakes, not abstract evidence that a room is
   too hard. For example, position 10 *The Great Cell Shuffle* has final puzzle 68, platforming 68,
   and recovery burden 3; its source-grounded route combines ferry braking, a steady/rescue
   handoff, and a lethal bridge collapse after premature release. Position 32 *Gem's Liver Lair*
   has final puzzle 82 and platforming 61, with clarity burden 3. Preserve the underlying successful
   rooms while making any future high-demand room teach one new causal link at a time, show the
   consequence clearly, and provide a legible recovery when the intended challenge is coordination
   rather than loss. These ratings do not establish novice failure frequency.

3. **Optional evidence: a small human walkthrough can resolve key unknowns.** If player evidence is
   wanted before tuning scores, start with opening positions 1-5 and one representative route-choice
   or high-demand room. Ask pairs to explain what they think each hero contributes, then observe
   where they try, what feedback they notice, and how they recover. This addresses missing
   first-pass platforming evidence, four unknown first-pass puzzle axes, and absent two-person
   control evidence. Do not
   infer a general difficulty curve from the generated estimates alone.

## Preserve and apply

The campaign has a broad vocabulary worth extending: position 10 has a real lethal handoff window;
position 16 *Cargo Exchange* uses counterweight and cargo roles; position 34 *Cana's Upside-Down
Commute* pairs Pac's held OPEN pad and Gem's bubble with Isp's RESCUE latch and the powered
reversed lift; position 9 *Gut Instinct* relocates one sac between two flow valves; and position
42 *Jump to Conclusions* splits and rejoins routes. These dossiers are examples of different
causal loops, not a ranking of quality.
The accepted additions at positions 24, 27, and 6 respectively (*Step On It*, *Dead Weight*, and
*Gut Feeling*) also provide current production evidence for a path change, mass-based cooperation,
and a physical Gem step (with demonstrated Isp headstep alternate) followed by Pac powering the
lift for Isp. Keep their existing rooms and relative order intact while a new
prototype is explored privately.

The top prototype should feel anatomically rooted in the tissue and organ it occupies, while the
villain acts from the first encounter rather than appearing only as a later decoration. Existing
physical-villain acceptance establishes bodies, collision, counterweight participation, and active
attacks across authored scenes; it does not establish that every scene creates engaging decisions.
The prototype must earn its place through the new player-facing loop and clear route feedback.

## Evidence used

- [Generated campaign report](report/LEVEL_DIFFICULTY_REPORT.md) and [room dossiers](report/difficulty_levels/)
  provide the accepted paired estimates and per-room causal accounts.
- Incremental source reviews and accepted correction receipts are local working evidence under
  `tests/_temp/difficulty46_source_spec_*/`, `tests/_temp/difficulty46_rubric_correction_spec/`,
  and `tests/_temp/difficulty46_b_correction_spec/`. Their accepted conclusions and current
  dispositions are summarized in the [durable assessment receipt](../../active_plans/reports/difficulty_46_acceptance.md).
- Local scripted-feasibility evidence under `tests/_temp/difficulty46_native_feasibility/` records
  44 complete cases and two live incomplete endpoints; the follow-up under
  `tests/_temp/difficulty46_native_followup/` completes `level_08` at frame 1122 and `level_36` at
  frame 702. These are feasibility traces, not measured effort or mistakes. The durable receipt
  preserves the essential counts and limits.
- Production evidence for the relevant accepted additions is in [Step On It](../../active_plans/reports/step_on_it_acceptance.md),
  [Dead Weight](../../active_plans/reports/DEAD_WEIGHT_ACCEPTANCE.md), and
  [Gut Feeling](../../active_plans/reports/GUT_FEELING_ACCEPTANCE.md). The
  [physical-villain acceptance](../../active_plans/reports/physical_villains_acceptance.md) records
  campaign-wide scripted/browser scope and its limits.

## Verification boundary

The canonical combined report command already passed for this frozen source and build:
`npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/current_46` (exit 0).
This document adds design interpretation; it does not alter scores, records, source, or campaign
order. Source and build remain frozen until the assessment review gates finish.

The corrected findings synthesis and all six independent Plan, Test, Style, Docs, Legacy, and
Comment audit passes are complete; Test and Legacy had no findings. Both deduplicated documentation
findings and later clerical items are closed. Targeted QUALITY accepts, separate integration accepts
with concerns, and root accepted this bounded assessment as `DONE_WITH_CONCERNS` at
2026-10-17 22:15:47 UTC. Current46 is the latest accepted frozen expert assessment; the active
source/build freeze has ended while captured artifacts remain immutable. See the
[durable assessment receipt](../../active_plans/reports/difficulty_46_acceptance.md) for evidence,
review dispositions, and current gameplay direction. No human outcomes are established.
