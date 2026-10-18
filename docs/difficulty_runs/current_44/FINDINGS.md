# Current44 findings

The final 44-room assessment shows a varied campaign with deliberate low-pressure spaces and
several local demand spikes, not a smooth difficulty ramp. The generated [campaign
report](report/LEVEL_DIFFICULTY_REPORT.md) and [campaign map](campaign_map.json) carry the
room-level ratings and evidence; this synthesis uses snapshot campaign order.

The opening rooms introduce doors, powered movement, bridges, and ferry control (positions 1-4).
Position 5, [*Hold Your Breath*](report/difficulty_levels/LEVEL_37.md), is a distinct
recoil/role-exchange puzzle: final puzzle 75, platforming 39, clarity burden 3, with a safe
lower floor and recovery cost 1. Its compressed "ONE OFF / ONE UP" cue is visible alongside both
heroes on TISSUE, personal RETURN pads, and matching exits. Three bounded ordinary-input probes
found no sampled bypass, but do not prove route uniqueness; see the [probe
report](../../../tests/_temp/difficulty44_recoil_bypass_probe/REPORT.md). The low platforming
demand and safe recovery make it a useful early respite after the first handoffs, not a proven
usability failure. Positions 6-8 then revisit lower-demand movement and force/push concepts
before the more consequential ferry-to-bridge relay at position 9.

Position 9, [*The Great Cell Shuffle*](report/difficulty_levels/LEVEL_05.md), is the clearest
early risk cluster: final puzzle 68, platforming 54, clarity 3, recovery 3. Its separate STOP,
STEADY, and RESCUE functions make a meaningful relay, and the roles are distinct. The bridge
stands over lethal slime and collapses after 0.8 seconds without support. The [native
ordinary-input probe](../../../tests/_temp/difficulty44_level05_release_probe/REPORT.md)
confirms one specific premature-release path: after Isp reached the bridge, Pac left STEADY; the
bridge collapsed and Isp died before RESCUE activated. The safe island-side fold does not catch
this fall. This proves a reproducible failure branch, not that players commonly make it or that
a cue would help. Position 10, [*Double Trouble*](report/difficulty_levels/LEVEL_07.md), also
has clarity 3, but its accepted brake-board-release geometry remains KEEP: existing pad/ferry
labels expose the states, and current evidence does not warrant another route change. Position
11 adds a different relay with recovery cost 3. These neighboring rooms make the early
sequence's handoff demands worth attention without implying that all three need retuning.

Later rooms alternate cooperation and movement demands rather than increasing monotonically.
Positions 15 and 17 combine high puzzle estimates (75) with repeated cargo/bridge coordination;
positions 19-24 include several lower-platforming rooms as well as cooperative carry at position
22 (puzzle 75, platforming 61). Those lower scores are plausible breathing spaces, not evidence
of trivial play. Positions 25-28 include a physical-demand peak at position 26, *Bombs Need
Personal Space* (expert platforming estimate 75): Isp crosses raised refuges around a rolling
bomb, with one refuge safe only during a three-second pause in its ten-second cycle. Position
30, *Gem's Liver Lair*, also has an expert platforming estimate of 75; its ferry and bridge
relay crosses physical slime/core hazards. Reasoning and cooperation peak separately at
positions 33-34: *Return to
Sender* and *Crossed Paths* each have expert estimates of 4 on both dimensions (derived puzzle
score 93). Their causes differ: the former chains parcel transfers, lifts, and partner-powered pads;
the latter alternates route-enabling handoffs and a return crossing. Positions 37-40 ease back
into platforming demands (21-36) while preserving varied handoffs; the corrected position 40
timing score is 0 because the mandatory support suppresses the collapse timer. The campaign does
not end on a single steadily rising peak. These contrasts support preserving distinct room
identities and using the cited causes, not the aggregate numbers alone, when choosing changes.

## Recommended next action

Prototype one early barrier-free cooperative movement room, using existing mechanics and
distinct necessary routes so one partner's movement or activation enables the other's traversal.
Keep it an additive prototype; preserve the current 44 rooms and their order. The frozen
snapshot records at least one authored barrier in all first 19 rooms and in 37/44 rooms overall;
the first barrier-free room is position 20. This counts any authored barrier, including
tall-DNA barriers, and does not establish repetition, boredom, or player impact. It does align
with the user's stated interest
in more varied movement and active physical-villain play. Current profiles also show that
movement demand can stay modest while puzzle and cooperation roles vary, so the prototype should
test route and motion variety directly rather than target a score or impose a quota. Do not
draft a full level or change the frozen campaign as part of this assessment. The
[snapshot](snapshot.json) (`cae59b98053e4bc48e4f5b3fdb79bb7f0e8937372f289c2af8ea8c6db3746b34`,
`json:levels`) supports the count.

Keep the level05 premature-release cue as a separate, bounded polish opportunity, not the
campaign's next major action. Its native branch reproduces a consequential death, but it does
not establish that players commonly release early or that a cue improves play; the branch may be
an intended challenge. Position 5's recoil cue is paired with a safe floor and no sampled bypass
clear. Position 10's brake-board-release route remains KEEP, and its current cue path risks
crowding a busy pad/collectible/gate area. These are useful preservation constraints while
exploring movement variety, not reasons to retune those rooms.

## Evidence limits

The 44 room packets contain 132 idle-only PNG frames (three per room). First-pass estimates were
source-blind expert judgments and the locked records remain unchanged; final estimates
incorporate authored source and selected scripted-route evidence. Task difficulty is kept
separate from input reliability; no current44 human keyboard-reliability evidence supports a
control-friction rating. The canonical report validates all 44 records and provides
medium-confidence final profiles, but does not measure human success, discovery, enjoyment,
comfort, time, or mistake frequency. Historical public43 routes and native probes establish
outcomes only for their exact inputs. The level05 release branch is source-informed hindsight
and one bounded native schedule, not a first-pass observation or a population-level prediction.
Campaign positions follow snapshot order, not level ID suffixes. See the [run README](README.md)
for provenance and phase boundaries.
