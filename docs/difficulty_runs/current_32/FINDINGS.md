# Current32 cross-room findings

## Scope and limits

This review covers all 32 source-aware paired assessments in frozen campaign order. Scores are
ordinal expert estimates for a new two-human pair sharing a keyboard. Scripted routes establish
feasibility; they do not measure novice success, enjoyment, time, frustration, or shared-keyboard
comfort. Every final control-friction rating remains unknown. See the [campaign report](report/LEVEL_DIFFICULTY_REPORT.md),
[chart](report/difficulty_campaign.svg), and its linked [room dossiers](report/difficulty_levels/LEVEL_02.md).

Use `level_NN@position` below to distinguish stable room ID from campaign position. The report keeps
unknown first-pass axes explicit; idle observations cannot establish movement, practice, recovery,
or mastery. The paired set has medium final confidence throughout, which still reflects expert
judgment rather than observed players.

## Campaign shape

The profile changes by puzzle and platforming demand rather than rising steadily. The main early
physical spike is `level_05@7` and `level_07@8`: both combine a ferry/bridge handoff, two lethal slime
crossings, and an estimated recovery cost of 3. Platforming then eases at `level_11@9` and
`level_09@10`, before the distinct counterweight cargo puzzle `level_23@12` raises puzzle demand
while keeping platforming at 39 and hazards absent. Preserve this change of problem type; do not
smooth it to make adjacent numbers climb.

Later, `level_16@23` has another high-demand profile: platforming 68, hazards 3, recovery cost 3,
and clarity burden 3. The next room, `level_18@24`, lowers puzzle demand and clarity burden, while
its vertical route keeps platforming demand. In the brain, `level_25@26` and `level_22@27` are
lower-risk movement intervals before `level_29@30`'s two-deck courier challenge. Its final puzzle
estimate is 79: level23 already teaches both-rider counterweights and cargo-driven direction
changes, while level29 adds a single-sac transfer between decks and crossed courier roles. The
visible WAIT/RIDER/LOAD panel and recovery shelf support those decisions. The final
`level_20@32` has the highest puzzle estimate (93) through coordinated target pads and a two-second
charge, with clarity burden 1. These profiles support challenge from cooperation and causal
planning without making every peak depend on lethal hazards.

## Ranked gameplay priorities

1. **Clarify the latch cue in `level_32@18` (cues).** The visible `[L]` suffix looks like a key
   binding, but it names the latch activation type; runtime movement has no L action and eligible
   pad occupancy activates the latch. A source-free probe tried L near the upper area but did not
   visibly reach the pad, so it cannot show an occupancy failure. Focused public-key browser runs
   establish completion and ordinary recovery. Replace the input-looking label with a clear
   occupancy instruction, while leaving the verified carrier, FLOAT, and latch route intact. See
   the [room dossier](report/difficulty_levels/LEVEL_32.md),
   `tests/_temp/moving_gem_discovery_probe/REPORT.md`, and
   `tests/_temp/moving_gem_focused_browser/REPORT.md`.
2. **Resolve the order conflict in `level_10@11` (cues).** Cana's opening dialogue says "Brake
   before boarding!" while the authored route boards and rides the lift before Isp reaches STOP near
   the upper landing. This is a concrete conflict between the visible line and the source-supported
   sequence; whether players follow it literally is unknown. Rewrite the line to cue the actual
   sequence. Keep the lift, bridge, and three-pad dependency intact. See the
   [room dossier](report/difficulty_levels/LEVEL_10.md).
3. **Review the retry burden in `level_05@7` and `level_07@8` (recovery/design).** Both routes
   expose the pair to two lethal gaps and a multi-stage ferry/bridge sequence. The assessments rate
   recovery cost 3 because a lethal fall restarts substantial setup, although missed holds can be
   corrected locally before a fall. If this early risk cluster is selected for gameplay work, first
   look for a local recovery improvement that preserves the STOP/STEADY/RESCUE handoffs. The
   assessment does not show how often new players fall. See the
   [level 05 dossier](report/difficulty_levels/LEVEL_05.md) and
   [level 07 dossier](report/difficulty_levels/LEVEL_07.md).

## Preserve the variety

The early campaign teaches pad holds, route openings, ferry control, and bridge stabilization through
repeated handoffs. Later rooms expand that cooperation with different dependencies: counterweight
cargo exchange in `level_23@12`, FLOAT rides in `level_24@16` and `level_32@18`, reciprocal rider and
carrier roles in `level_30@17`, and load-based route reversal in `level_29@30`. These structures
make both heroes' contributions consequential in different ways. Future work can build from route
choice, cargo transfer, and reversible roles instead of adding more rooms or repeating the same
fixed hold-pad sequence.

Villain effects appear in several later rooms. Treat them as meaningful challenge only where a
required decision or supported mistake/recovery depends on the effect; a warning line or successful
script alone does not establish player pressure. Preserve the counterweight and reciprocal-role
puzzles as campaign variety, and avoid lowering the final room's cooperative demand just to create a
smooth score curve.

The frozen snapshot records `facts.interference=0` (no bubble or boomerang definitions) across six
consecutive rooms at positions 9-14: `level_11@9`, `level_09@10`, `level_10@11`, `level_23@12`,
`level_12@13`, and `level_21@14`. Across the full campaign, nine rooms have no weapon definition:
`level_11`, `level_09`, `level_10`, `level_23`, `level_12`, `level_21`, `level_14`, `level_15`, and
`level_18`. Some villains still change platforms or gates, so this is a weapon gap rather than an
absence of villain effects. It creates an opportunity to prototype carefully tuned recurring attacks
in selected rooms while preserving low-threat breathers and `level_23@12` as the first counterweight
lesson. The snapshot describes authored mechanics; it does not show that players are bored or that
these rooms need weapons.

## Evidence gaps

The 32 first passes rely on idle screenshots and visible text. They support possible first decisions,
not observed play or learning. Source definitions clarify mechanics, and scripted clears clarify
legal routes, but neither measures player behavior. All paired control-friction values remain
unknown; no two-human simultaneous-input study was part of this assessment. Keep these estimates
separate from any future human attempt, retry, hint, or completion-time observations.
