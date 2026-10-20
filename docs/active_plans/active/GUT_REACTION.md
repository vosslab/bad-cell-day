# Gut Reaction

**Status: DONE (root decision: 2026-10-18 01:22:05 UTC).** Source, art, and gameplay are accepted.
The final native and browser recovery evidence and fresh SPEC, QUALITY, and integration reviews are
recorded below and in the linked temporary reports. No further code work remains in this milestone.

## Player outcome

**Gut Reaction** (`level_48`) is an intestine room at campaign position 11, between `level_05` and
`level_07`. The previous 47 room definitions remain unchanged and in relative order. Isp can take an
optional first recoil launch for the high Spark while Pac rides the low moving fold. They meet at
the second recoil: Isp launches Pac to the high exit, then takes the low exit. Gem's bubble and
Cana's boomerang remain active. The room uses existing movement and recoil behavior; it adds no
pads, barriers, hazards, crates, or new engine, state, or configuration.

## Integrated implementation

- The intestine atlas and renderer branch are in place, and the SVG is included in all three build
  asset lists. Root inspected four art previews and four game prefixes covering both tissue poses,
  the high and low routes, Cana making Isp DIZZY, and the final role swap.
- The integrated JavaScript SHA-256 is
  `fbec533727024db35fd0e8860fd967e3101b3174504b36f5b8e80513077d3923`. Root's 96-check code gate,
  official build, and both standard smokes pass.
- The registry comparison confirms 48 imported rooms, with the earlier 47 definitions unchanged
  and in relative order; Gut Reaction is position 11. The temporary evidence is in
  `tests/_temp/gut_reaction_registry/REPORT.txt`.

## Route evidence

- Native intended route: completes in 1,084 frames with both Sparks.
- Native same-run recovery: Pac misses the high landing, returns to the moving fold and second
  recoil, then completes in 1,728 frames with both Sparks.
- The intended browser route needed Isp to hold left 80 frames instead of 60 to leave the moving
  fold. The corrected browser clear passes, and the original failure is preserved. Root replayed
  that correction natively; it completes in 1,124 frames with both Sparks.
- The completed same-run recovery deliberately misses Pac's first high landing, returns to the
  second recoil, then launches Pac again and clears with Isp. The browser capture records Pac
  airborne on the retry at `(989.82, 396.25)` and a clear with both Sparks, zero retries, and no
  page or console errors on the approved JavaScript build; the receipt records Isp at
  `(686.13, 544.00)` and Pac at `(1170.07, 214.00)` at clear. The final ordinary-input correction is
  `Isp:left 4->16` in the recovery setup and a paced second-launch release; these are input changes,
  not source changes. Native replay matches the corrected 16-frame release: Pac is airborne at
  frame 798, back on the second tissue at frame 950, and clears at frame 1789 with both Sparks and
  zero deaths. The earlier 4-frame native variant remains historical evidence at frame 1777.
  Browser and native details are in `REPORT.md`
  and `REPORT.md`.

## Acceptance limits

Fresh SPEC and QUALITY reviews accepted the bounded change; integration accepted it with the stale
ledger evidence concern resolved by this closeout. Human discovery, enjoyment, comfort, and the
complete 48-room journey remain unmeasured.

**Owners.** [Room definition](../../../src/level_gut_reaction.ts),
[recoil renderer](../../../src/render_recoil.ts),
[campaign registration](../../../src/levels.ts),
[intestine atlas](../../../src/assets/intestine_recoil_tissue.svg), and
[build asset handling](../../../build_github_pages.sh).
