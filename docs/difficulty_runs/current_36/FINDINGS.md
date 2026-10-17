# Current36 cross-room findings

**Status: ROOT ACCEPTED DONE_WITH_CONCERNS.** This synthesis uses the current36 paired dossiers and
generated map in captured campaign order. The seven-record correction batch and level 07
recovery-evidence correction are complete. Fresh SPEC, recovery SPEC, QUALITY, and integration
reviews accept with concerns.

## Scope and limits

The assessment covers 36 rooms for a hypothetical first-time pair of humans sharing a keyboard and
trying to reach both exits. Its scores are ordinal expert estimates, not measured player outcomes.
The idle first pass leaves the platforming axis unknown for all 36 rooms; the paired pass adds
source-supported routes and bounded scripted evidence, not evidence that a novice pair discovered,
completed, enjoyed, or felt comfortable playing them. Shared-keyboard comfort, completion time,
success rate, and frustration remain unmeasured. Keep `null` and `unknown` visible.

During broad source lookup, authors b16, b36, a09, and a10 incidentally encountered older-assessment
snippets. The locked first pass remains unchanged, but source-aware numerical estimates cannot be
called experimentally independent of those historical judgments. The affected dossiers disclose
the exposure; the current map and findings should be grounded in current cues, mechanics, and route
evidence.

The source-aware set includes current-source ordinary-input native probes for `level_01@2` and
`level_03@4` in `tests/_temp/difficulty36_a01/level_01_probe.json` and
`tests/_temp/difficulty36_a02/l03_probe_result.json`. Each supports one bounded route to both exits.
They are sampled room evidence, not a current 36-room journey. The broader route inventory also
contains historical traces, partial routes, and rooms for which no reusable trace was located;
`no-reusable-trace` does not mean a route is impossible. See the
[campaign report](report/LEVEL_DIFFICULTY_REPORT.md), [chart](report/difficulty_campaign.svg), and
the linked [room dossiers](report/difficulty_levels/LEVEL_02.md).

## Campaign shape and variety

The profile varies by the kind of cooperation and movement it asks for; it does not rise steadily.
The early sequence preserves a low-risk interval in `level_06@5` (final puzzle 43, platforming 21,
clarity 1, recovery 1) before the ferry/bridge sequence intensifies at `level_05@8` (68/61, clarity
2, recovery 2) and `level_07@9` (75/61, clarity 3, recovery 2). Level 34 has been inserted at
position 7, but the two earlier rooms retain their contrasting profiles. Level 05's fold catches a
sampled miss at the first gap; a later lethal fall still resets the room. In level 07, the retained fold-present candidate catches the sampled near-bank miss and the
recorded continuation clears both exits without a reset. Its no-fold comparison dies at that same
endpoint, and the current source has matching fold geometry. The retained route evidence comes from
the historical candidate, not a replay of the current build. A separate bounded bridge-to-fold shortcut
attempt dies before reaching the fold; it does not establish a normal-route near-arrival failure.
Preserve the handoff lessons and the breather; the recovery evidence does not support an early
crossing fix or a smoother score curve. See the [level 05 dossier](report/difficulty_levels/LEVEL_05.md),
[level 06 dossier](report/difficulty_levels/LEVEL_06.md), and
[level 07 dossier](report/difficulty_levels/LEVEL_07.md).

`level_23@13` is a deliberate change of problem type: the pair coordinates counterweight riders,
load, and cargo-driven direction changes. Its final puzzle estimate is 100 while platforming is 21,
with clarity burden 3 and recovery 2. That separation is more informative than a single “hard” label.
The room uses repeated, role-specific cooperation and bounded misses that current-source probes
recover without a reset. Preserve it as the campaign's first substantial load-reversal lesson rather
than reducing its puzzle demand to match adjacent rooms. See the
[level 23 dossier](report/difficulty_levels/LEVEL_23.md).

Later rooms expand cooperation through different structures. `level_30@19` (93 puzzle, 54
platforming, cooperation 4) requires reciprocal partner-carrying over two hero-specific toxic
strips, with a dry island for the role swap. `level_29@33` uses a cargo courier and cross-deck
transfer, while `level_20@36` retains a finale requiring simultaneous two-target occupancy. These
are distinct transfers, not repeated fixed-pad puzzles. They offer useful patterns for further
cooperative design: reversible roles, cargo as shared weight, and partner-enabled routes. Preserve
those contrasts even where a cue or recovery concern merits focused work. See the
[level 30 dossier](report/difficulty_levels/LEVEL_30.md),
[level 29 dossier](report/difficulty_levels/LEVEL_29.md), and
[level 20 dossier](report/difficulty_levels/LEVEL_20.md).

## One unproven cooperative expansion hypothesis

The current map shows several distinct kinds of consequential partnership: load reversal in
`level_23`, reciprocal carrying in `level_30`, and simultaneous target occupancy in `level_20`. One
candidate to explore those patterns without adding another fixed HOLD relay or two-lift cargo room:
two heroes jointly compress living lung tissue; when one steps off, the tissue recoils and launches
the partner, who can operate a route that opens the return path. A villain could accidentally
trigger or assist the launch, but that role is only a possibility, not a current finding.

Root selects and authorizes this as the next bounded prototype experiment in a separate milestone.
It remains unproven, and a production decision follows evidence from the experiment; it is not
evidence of fun. Test whether it creates cooperation
distinct from HOLD relays, parcel cargo, or lift handoffs, with controllable launch geometry and a
safe reciprocal return path. Set it aside if it does not make a distinct cooperative choice. The
assessment authorizes no gameplay or engine changes and establishes no new physics framework,
configuration, or feature quota.

The late brain sequence clusters four cargo-transfer puzzles at `level_35@31`, `level_31@32`,
`level_29@33`, and `level_33@34`. They vary in nearest-hero targeting, duct transfer,
counterweight exchange, and return-throw/latch dependencies, while still repeating parcel delivery
as a structural theme. This is a design opportunity, not evidence of player boredom or a fault that
requires reordering. It supports exploring a bodily partnership rather than adding another parcel
relay.

Within that sequence, `level_35@31` first clearly teaches required boomerang cargo delivery,
`level_31@32` practices that delivery pattern, and `level_33@34` composes the return throw with
valve/latch behavior. Do not attribute prior cargo-projectile teaching to
`level_27@30`: its route uses nearest-hero targeting and manually pushed cargo as a step. At `level_19@35`,
the boomerang was introduced in `level_02`, practiced for traversal in `level_04` and `level_07`, and
appears later in `level_29`. This distinction preserves the intended novelty curve and avoids a false
cross-room transfer claim. See the [level 35](report/difficulty_levels/LEVEL_35.md),
[level 31](report/difficulty_levels/LEVEL_31.md),
[level 33](report/difficulty_levels/LEVEL_33.md), and
[level 27](report/difficulty_levels/LEVEL_27.md) dossiers.

Four source-aware rooms have low final confidence: `level_28@23`, `level_25@28`, `level_22@29`, and
`level_27@30`. Three receive puzzle estimates of 75 or 93 and all have clarity burden 3, but their
route evidence is limited or source-inferred. Treat these as reasons to get targeted route or player
evidence before changing their designs, not as confirmed high-difficulty problems. See the
[level 28](report/difficulty_levels/LEVEL_28.md),
[level 25](report/difficulty_levels/LEVEL_25.md),
[level 22](report/difficulty_levels/LEVEL_22.md), and
[level 27](report/difficulty_levels/LEVEL_27.md) dossiers.

## Follow-up evidence opportunities

The early ferry/bridge sequence has a recovery contrast: level 05's fold catches one sampled
first-gap miss, and the retained historical fold-present candidate for level 07 catches a sampled
near-bank miss. Both fold-present continuations clear without a reset; the current level 07 source
has matching fold geometry, but the candidate was not replayed on the current build. Preserve those
handoff lessons; this evidence does not identify an early crossing defect.

`level_30@19` offers a useful first-play observation opportunity. Current source and a scripted route
establish that Isp carries Pac across the first hero-specific lethal strip, then Pac carries Isp
across the second, swapping roles on dry ground. This is a distinct cooperative structure worth
preserving. The screen depicts the strips as raised green forms and does not directly state the
carrier solution, but the assessment cannot show whether first-time pairs misread this. Observe a
pair before changing its cues or route. See the [level 30 dossier](report/difficulty_levels/LEVEL_30.md).

The low-confidence late routes also merit targeted route or player evidence before any design change.
Their high puzzle estimates coexist with limited route evidence and low confidence; they are inquiry
opportunities, not confirmed broken or overly difficult rooms. No full campaign playthrough was part
of this run.

## Interpreting level 19 without overreading flavor

`level_19@35` now has clarity burden 3 (not 4), recovery 3, and cooperation 4. Its source-aware
rationale identifies the real undercued dependency as STOP, STEADY, RESCUE, then separate boss
targets. The screen also labels DIZZY/SHOVE effects and earlier `level_16` already introduces
two-hero boss targets. The signal-knot and brain-signal line can remain anatomical flavor; the
first-pass signal-routing idea is an assessor hypothesis, not observed player confusion or a proven
missing-feature cue. The current assessment supports preserving the flavor while allowing fresh
reviewers to assess the actual pad/target sequence. See the
[level 19 dossier](report/difficulty_levels/LEVEL_19.md).

Root selects and authorizes the separate lung-tissue prototype as the next bounded experiment; the
production decision follows its evidence. Do not make the profile monotonic or reduce a room solely because its estimate
is numerically high. Preserve the campaign's movement breather, distinct cargo peak, reciprocal
carry, and finale cooperation while evaluating concrete route evidence and first-play observations.
A full campaign refresh is not a prerequisite for each future gameplay change.
