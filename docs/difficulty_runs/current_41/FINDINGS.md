# Current 41 findings

**Assessment status: ROOT ACCEPTED DONE_WITH_CONCERNS (frozen baseline).** The current campaign has
paired, source-aware expert assessments for all 41 rooms. Root accepted the first pass before source
release, and fresh QUALITY and integration reviews accepted the completed assessment. See the
[acceptance report](../../active_plans/reports/difficulty_41_acceptance.md). The frozen [campaign
map](campaign_map.json) and report correspond to campaign hash
`c83140ffea2282aa236dadd1078dad7267e1f23303b56c45cbf6dc55fe30b32a` and source fingerprint
`bfb2222807b136470e415b8a27adae494d0add5b8083b2f0b235b64c0fb711ad`. Full-run validation and report
generation passed. This is an expert ordinal assessment, not human playtest evidence.

## What the profiles show

The map preserves first-pass puzzle estimates beside source-aware estimates. First-pass puzzle
scores range from 50 to 82; paired puzzle scores range from 43 to 100, and paired platforming scores
from 11 to 61. All 41 first-pass platforming values are `unknown`: idle frames do not show player
execution. These rubric-weighted ordinal judgments do not measure completion rate, time, enjoyment,
skill, novice performance, or physical keyboard comfort. A scripted ordinary-input clear establishes
route feasibility only.

The campaign teaches and recombines demands rather than rising in a straight line. The opening rooms
introduce the both-exit goal, hero-specific pads, a powered lift, a supported bridge, and a ferry
handoff. A local spike appears at display position 10, stable ID `level_07`, **Double Trouble**:
68 puzzle / 61 platforming, compared with position 9 `level_05` at 50/36 and position 11 `level_41`
at 68/21. Its authored route explains the spike: players use two ferries and a bridge, alternate
Isp STOP/RESCUE and Pac STEADY roles, then Isp boards the second ferry while it is parked and Pac
releases STEADY to send it toward RESCUE. Re-parking is not mandatory. This is an expert source-and-
route diagnosis, not evidence that people find the room hard;
the display-10 room is a useful human follow-up alongside, not instead of, the unresolved level 3
concern. See [Double Trouble](report/difficulty_levels/LEVEL_07.md).

The next puzzle peak is display position 12, stable ID `level_11`, **Split Decision**, at 82 puzzle /
29 platforming, with solution clarity 3. The opening view shows 5/3 and pad colors, leaving the cycle
meaning and reciprocal effects unclear. The
optional hint supplies that causal relationship and is assisted guidance; it does not establish
unassisted clarity. See [Split Decision](report/difficulty_levels/LEVEL_11.md). Positions 11-15 also
include reciprocal gates, heavy cargo, and `Cargo Exchange`, the map's highest puzzle estimate (100)
with platforming 32. The marrow/liver rooms then mix cargo, carry, bubbles, bombs, and route choices;
for example, `Bombs Need Personal Space` is 68/61. In the later brain rooms, low platforming scores
do not imply uniformly easy puzzles: display positions 31, 33, and 37 are stable IDs `level_25`,
`level_27`, and `level_38`, at puzzle/platforming scores 57/21, 50/21, and 68/21 respectively.
These are physical-demand breathers in the expert profile, with distinct reasoning burdens. The
finale is 75/61 with recovery cost 3. Together these contrasts support varied peaks and breathers,
not a monotonic curve or automatic reordering.

Cooperation also has room for more variety in future design discussion. The [carry room](report/difficulty_levels/LEVEL_30.md) requires alternating who carries whom across two hero-specific lethal bands; [Hold Your Breath](report/difficulty_levels/LEVEL_37.md) requires reciprocal launches and role exchange. Those are concrete examples of distinct partner dependencies. Preserving or adding paths that require alternating help and role exchange could broaden the campaign's cooperative vocabulary beyond repeating a hold-pad-then-latch relay. This identifies an opportunity in the existing evidence, not a queued feature or a request to reorder rooms. The records cannot establish whether players notice these distinctions or experience them as fresh.

## Priority human risks and next decisions

Display position 3 is stable ID `level_04`, **Bridge Over Troubled Slime**. A prior human report says
the bridge moves sideways and makes falling easy. Source and a successful ordinary native route
establish a legal supported crossing, with a final estimate of 50/36 and recovery cost 2, but the
sampled route did not reproduce the reported motion. Scripted completion cannot establish readable
movement or a person's fall likelihood. Keep this as the first player-impact question; the report
does not diagnose the physics. Display position 10 Double Trouble is a secondary local-spike
follow-up, without a claim of measured human difficulty.

## Provenance and limits

The capture contains three idle frames per room, no keys, and no retries. First-pass records and locks
were not rewritten. The accepted first-pass set was reviewed before source release; the same authors
then completed the paired source/route pass. The early, middle, and late segments retain their
original records with the documented re-spec corrections. No evidence indicates first-pass source
contamination. A superseded early review that opened future images was replaced and is not the
accepted coverage. One middle reviewer disclosed seeing `CHANGELOG.md` during orientation, could not
reconstruct its contents, and said it did not inform judgments. Group 2 authored timestamps are
estimates; lock timestamps, hashes, and within-group order govern chronology. None of these
disclosures is treated as evidence of a changed score.

Native traces establish selected legal routes and mechanics, not human mastery or communication.
The display-position-3 (`level_04`) bridge-motion/fall report remains unresolved; keep `current_38`
historical, with no inherited scores. Generated Markdown received a display-only normalization pass
recorded in `tests/_temp/difficulty41_findings/style_cleanup.txt`; its follow-up reported no out-of-range
codepoints, trailing whitespace, or broken local links. No score quota or new level queue follows
from this profile. Reviewers should challenge causal claims unsupported by room evidence and escalate
disagreement. Root accepted this source-bound assessment as a design baseline; it does not establish
human success, enjoyment, discovery, or keyboard comfort.
