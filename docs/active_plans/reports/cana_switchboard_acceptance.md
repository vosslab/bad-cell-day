# Cana Switchboard acceptance

## Decision

**DONE_WITH_CONCERNS.** Root accepts the bounded room milestone for stable `level_35`, **Pick On
Someone Else**, at campaign position 30 after `level_27` and before `level_31`. All required native,
source, build, browser, persistence/insertion, visual, SPEC, QUALITY, and integration gates passed.
The room is part of the current 35-room roster; the continuous gameplay direction remains active.

The player's decision is whom Cana targets and which reciprocal cargo route receives the sac. Both
target choices change the route; both heroes make meaningful contributions; each route activates a
genuine receiver dependency for its owner latch. Wrong-target recovery, slow catch, actual hits, and
bounded substitution/shortcut behavior were checked. Hero substitution for cargo remains legal when
mutual contributions stay meaningful.

## Final gate results

- **Native:** Root accepted the corrected width-150 fixture with limits. Independent import matched
  the trace, found zero initial closed-solid overlaps, and replayed both choices with recovery over
  1,555 frames. Fixture SHA-256: `e1f53562a66ed076ebe38e62f91a04adff5a2f78e6a35297f2ad56c079d333fa`.
- **Source and roster:** `./check_codebase.sh` passed 90 Node checks plus TSC, lint, and format. The
  previous 34-room normalized JSON is unchanged (SHA-256
  `44880ac4e31757f4a75ec2f62011dba683434c5cadaa8135a78fabea87f3e94f`); the roster has 35 rooms
  and `level_20` remains last.
- **Build and delivery:** Official build, 2/2 smokes, HTTP 200, and served-byte parity passed. Final
  artifact SHA-256 values: `main.js` `c171fcad743e9da11bb5e1dba90d46be477c98e378dfa6705d62485ee7afeb2b`,
  map `911df5a59b7cf7ae8762bf7553f6bb9b0d7d786653e1fe0b969cb8b97d376d7a`, index
  `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7`.
- **Browser and roster behavior:** `tests/_temp/cana_switchboard_browser/REPORT.md` records a
  public-input clear, Next to 31, reload with 35 Replay, isolated legacy-34 readiness, and finale
  last. Public persistence was tested; raw save bytes were not captured.
- **Final visual review:** `tests/_temp/cana_switchboard_final_capture/REPORT.md` records five views,
  zero deaths/errors, the room clear, and existing level-19 SHOVE context. Warning cues are readable.
  One view has an actor partly covering Pac's OPEN LEFT label while on the pad; the other warning
  view is unobstructed and the label remains mostly discernible. Root accepts this residual.
- **Reviews:** Fresh SPEC, QUALITY, and integration reviews accepted with concerns and no blocking
  findings. Their reports are in `tests/_temp/cana_switchboard_spec_recheck/REPORT.md`,
  `tests/_temp/cana_switchboard_quality/REPORT.md`, and
  `tests/_temp/cana_switchboard_integration/REPORT.md`.
- **Root decision:** DONE_WITH_CONCERNS. The continuous gameplay direction remains active.

## Limits

Human clarity, discovery, enjoyment, novice success, paired-control comfort, and a full unseeded
35-room journey remain unknown. The frozen paired difficulty profile covers the earlier 32-room
roster; levels 33-35 have no scores. No raw save-byte equivalence is claimed. These limits do not
block this room milestone.

## Historical failures and corrections

- The first native draft allowed owner latches without cargo receivers; its endpoint clear did not
  prove the intended puzzle. A roof shortcut also erased target choice. Authored hero-filtered
  membranes closed that bypass while allowing the sac through.
- The original 155px sac overlapped the closed right return gate by 5px. That frozen fixture remains
  historical and was not accepted. The corrected 150px fixture passed the native gate above.
- The first browser catch/recovery image had overlapping OPEN/KEEP plaques in both wings. Shared
  automatic placement and four instruction-string changes corrected that failure; the final capture
  and reviews are recorded in the final gates above.
- The initial smoke launch stopped before tests with sandbox Mach 1100; the authorized narrow retry
  passed 2/2. No failure remains open.

See the [milestone plan](../active/cana_switchboard.md) for concise scope and design decisions.
