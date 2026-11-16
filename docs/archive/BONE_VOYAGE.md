# Bone Voyage production evaluation

**Status:** Root accepted this bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 03:41:43
UTC. Source, current build, existing checks, browser smokes, original capture review, and fresh SPEC,
QUALITY, and integration reviews are accepted. The broad game goal remains active.

## Approved scope

Add stable `level_49`, **Bone Voyage**, at campaign position 16 in marrow, after `level_11`
(**Split Decision**) and before `level_09` (**Two Tons of Trouble**). Preserve the prior 48 room
definitions and their relative order. Use the approved private candidate at
`tests/_temp/bone_voyage_perch_trial/candidate.json` (SHA-256
`176ad2a7e8e455a99d9b793a9cc293a7c1de2bc1aa682bfefb2bbcb4d9263be6`) with only the two approved
passive rewards: `rib_blue` for Isp at `(450,345)` and `lower_orange` for Pac at `(720,515)`. The
approved final hint and villain lines are in the production definition. Keep pads, barriers, and
hazards empty; retain both recurring attacks without start or interrupt triggers. Reuse existing
physics, rendering, atlas art, controls, and save contracts.

## Evidence and limits

The private trial reports a clean 1,482-frame completion and a 2,972-frame miss/retry completion
with zero deaths. The miss first lands on the start shelf; both heroes then deliberately regroup on
`safe_floor` at frame 565 before returning and finishing. This is not evidence of a direct missed-jump
catch on the floor. The private trial also records the sac drop, bank climb, and a real Pac SHOVE on
the successful retry. The earlier bank-Gem layout is parked; the malformed-input run is disqualified.
These trial results were generated against the private candidate, so the current-source replay below
is the production evaluation evidence.

## Current-source replay

The bounded replay imports `LEVELS` from current source, selects stable `level_49`, and creates every
frame with `create_empty_input()`. The command below reproduced the copied schedule at 1/120 second:
the clean clear completed in 1,482 frames (12.350 s), and the miss/retry clear completed in 2,972
frames (24.767 s). Both completed with zero deaths and both Sparks collected. The retry records Pac's
actual `shove` effect from Cana at frame 2,896; both physical villains and both recurring attackers
remain active.

```text
npx tsx tests/_temp/bone_voyage_implementation/runners/replay.mjs
```

The retry's first upper miss lands on `start_shelf` at frame 258. Both heroes deliberately regroup on
`safe_floor` at frame 565. Isp later lands on Pac at frame 1,357, then lands on `upper_rib` at frame
1,457 at `(343.75,344,30,36)`, fully supported by the rib. Isp pushes the sac off the rib at frame
2,706; it settles on `safe_floor` at `(777,510,40,40)` by frame 2,768. Pac pushes it against the bank
at frame 2,820 and stands on it at frame 2,902. At frame 2,965 Pac lands on `finish_bank` at
`(893.52,394,30,36)`, fully supported by the bank. These checkpoints prove a shelf miss followed by
a deliberate floor regroup and retry, not a direct missed-jump floor catch.

The transition trace, intermediate markers, endpoints, and stdout are retained under
`tests/_temp/bone_voyage_implementation/runners/`. The registry comparison confirms that all 48 prior
campaign IDs retain their order and the previous registration entries are unchanged, with `level_49`
between `level_11` and `level_09`. Existing definition modules were not edited.

## Acceptance

- Source ownership: `src/level_bone_voyage.ts` and additive central registration in `src/levels.ts`.
- Root reports `./check_codebase.sh` passed with 96 existing checks, `./build_github_pages.sh`
  passed, and `./run_playwright_tests.sh` passed both browser smokes. Seven original captures were
  reviewed and accepted with small status-label overlaps as nonblocking. Fresh SPEC, QUALITY, and
  integration reviews each accepted with concerns.
- The clean route cleared in 1,482 frames; miss/retry cleared in 2,972 frames. Both ended with two
  Sparks and zero deaths. The retry first lands on `start_shelf` at frame 258, deliberately regroups
  on `safe_floor` at frame 565, and includes Cana SHOVE at frame 2,896. Gem FLOAT is a separate
  exposure capture. The staged headstep adds 12 released frames.
- Root independently verified the private candidate and copied reference match approved SHA-256
  `176ad2a7e8e455a99d9b793a9cc293a7c1de2bc1aa682bfefb2bbcb4d9263be6`. The parked bank-Gem,
  invalid-input, and no-effect captures remain excluded.
- Preserve prior frozen current46 assessment claims and historical roster snapshots. No human discovery,
  readability, fun, comfort, difficulty, or universal recovery claim is made. The broad game goal stays
  active.

