# Liver bridge confrontation

**Status: PARKED.** The unaccepted bridge-guard variant is removed from production source. Keep
Level 16's original Gem ferry gag and the accepted 48-room source. The recorded experiment remains
available under `tests/_temp/liver_variant_park/experiment_snapshot/`.

## Hypothesis and decision

The experiment moved Gem from `(180, 450)` to `(625, 450)`, aimed `lair_bubble` at `(525, 430)`,
and revised the hint and quips to cue jumping past the bridge guard. It asked whether this made
Gem's physical role more sustained during the ferry-to-boss route than the original opening gag.
The original encounter already has Pac physically push Gem onto the ferry before Gem falls into
slime.

Root parked the candidate because the corrected route adds repeated jump-over choreography and
villain congestion around the paired targets without enough improvement to justify changing shared
physics or world-boundary behavior. At the time this experiment was parked, production source was
restored from the immediate-before snapshots: Gem was at `(180, 450)`, the bubble target was
`(675, 430)`, and the original hint and quips were restored. No engine algorithm was adopted.

## Evidence and limits

The private imported-room trial cloned only Gem's home and bubble target. The original ordinary
route clears at frame 1421; its opening pushes Gem onto the ferry, where he falls into slime. On the
candidate, that same route fails joint completion after Pac pushes Gem down the bridge to about
`x=928`; a Pac-only jump-over-and-return also fails after Isp later pushes Gem down the bridge. The
corrected ordinary route adds jump-overs by Pac, Isp, and Pac again, and clears at frame 1522 with
Gem at about `x=649.85`. The bubble hits Pac as Isp approaches. This supports a distinct physical
confrontation in the recorded route, not its readability, fairness, or fun.

The separate villain-pair geometry report reproduces Gem and Cana touching over the usable blue
TARGET area at frame 1480, with Isp on their top. The supplied ordinary recovery inputs do not
clear that jam. A follow-up schedule of 80 frames Isp right+jump, 35 left, then 90 neutral also leaves
the same pair in place. The report explicitly does not establish that every possible route or input
fails: the candidate's corrected frame-1522 jump route clears. These results describe the tested
inputs only.

See the preserved [private trial report](../../../tests/_temp/liver_variant_park/experiment_snapshot/private_trial_REPORT.md),
[implementation report](../../../tests/_temp/liver_variant_park/experiment_snapshot/implementation_REPORT.md),
and [villain-pair geometry report](../../../tests/_temp/liver_variant_park/experiment_snapshot/villain_pair_geometry_REPORT.md),
with their route inputs, results, source snapshots, and hashes. The trial does not authorize or
support adopting the proposed two-body contact-row push algorithm. No engine or boundary change was
made.
