# Cana Switchboard milestone

## Goal and status

Add a cooperative room where Cana's nearest-hero warning determines which cargo route opens. Reuse
of existing mechanics is acceptable because the target/route choice itself supplies the decision.
Root's bounded verdict is **DONE_WITH_CONCERNS**: the level is accepted as a room in the current
35-room roster. The continuous gameplay direction remains active. Human discovery, enjoyment,
novice success, paired comfort, and an unseeded 35-room journey remain unmeasured.

The room is stable `level_35`, **Pick On Someone Else**, at position 30 after `level_27` and before
`level_31`. It preserves all previous 34 definitions and their relative order, with `level_20` last.
Its route clear, save/reload readiness, and final visual checks are documented in the
[acceptance ledger](../reports/cana_switchboard_acceptance.md).

## Design decisions and evidence

- Root approved a native prototype with ordinary authored starts. Both choices must change the
  cargo route; reciprocal hero contributions, cargo-dependent owner latches, recovery, and bounded
  shortcut checks keep the choice meaningful. A hero may substitute for cargo when both heroes'
  contributions remain meaningful. Both target choices in the reciprocal route suffice; no arbitrary
  full-clear requirement for both orderings.
- The corrected native fixture was independently imported and replayed by root: trace matched, no
  initial closed-solid overlap, and both choices cleared with wrong-target recovery, slow catch, aims,
  and actual hits. Root accepted native feasibility with limits before source work.
- Production adds `src/level_cana_switchboard.ts` and four registrations after `level_27`, before
  `level_31`. Final source checks, build, two smokes, served-byte parity, guided route, reload and
  insertion checks, and final five-view capture passed. Fresh SPEC, QUALITY, and integration reviews
  accepted with concerns and no blocking findings. Root's final bounded verdict is
  DONE_WITH_CONCERNS.
- The capture shows one nonblocking residual: an actor partly covers Pac's OPEN LEFT label while
  occupying the pad; the other warning view is unobstructed and the label remains mostly discernible.
  Root found no basis for another layout system without an observed comprehension failure.

## Limits and follow-up

Native traces and the guided browser clear establish authored mechanics and one room route, not
natural discovery or enjoyment. Public reload persistence was tested, but raw save bytes were not
captured; no byte-equivalence claim is made. The accepted 32-room difficulty profile does not score
levels 33-35. Keep historic assessment artifacts unchanged. Future work may gather human-play
evidence or assess current difficulty as useful; neither is required by this accepted room milestone.

## File scope and task ledger

| Task | Owner | Status |
| --- | --- | --- |
| Bounded native proof | Prototype owner / root | Accepted with limits; receipt in acceptance ledger |
| `level_35` source and registration | Source owner | Complete |
| Source, build, browser, and reviews | Root / reviewers | Passed; no blockers |
| Current roster documentation | Ledger owner | Updated |
| Bounded room acceptance | Root | DONE_WITH_CONCERNS |

No permanent test was added: focused temporary evidence covers this authored room without creating
a layout-specific maintenance contract. The acceptance ledger owns detailed receipts, artifact
identities, and historical failures.
