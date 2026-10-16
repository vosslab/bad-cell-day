# Living sound acceptance ledger

Status: DONE_WITH_CONCERNS. Fresh integration ACCEPTS WITH CONCERNS, with no product blocker, and
the manager accepts the milestone. Continuous game development remains ACTIVE.

The unchanged 26-room campaign now has optional, state-linked sound. New, absent, and invalid
`soundEnabled` values default to false; saved booleans and earned records remain in the existing
schema. One visible Sound control reports its state accessibly. Runtime unlocks audio on trusted
document clicks and accepted keydowns; a saved enabled value alone creates no audio context at boot.
Gameplay transitions produce cues. Existing visual cues and room definitions/order remain intact.
The final-room hint and Cana opening explain the one-shot interrupt and renewed attack without
changing physics. The default-off rule follows [FUN_VIBES_DESIGN_STYLE.md](../../FUN_VIBES_DESIGN_STYLE.md).

## Scope and contracts

- Add no music, gameplay rules, random physics, dependencies, rooms, or boss phases.
- Give distinct cues to hero jumps and landings, tissue/control responses, Gem bubble and Cana
  boomerang warning/release/effects, collectibles, death, cooperative victory, and the finale.
- Play cues for real state transitions, not every frame. Keep visual cues available.
- Runtime recognizes trusted document clicks and accepted keydowns as the audio gate. Do not pass
  DOM `Event` values through public controls or add an audio event bus; simulation updates and
  `start_level` do not create or resume audio contexts. Audio unavailability must not stop gameplay.
- Pause, hidden page, mute, retry, and disposal cancel queued and active audio; resuming has no
  stale backlog.
- Keep final-room definitions/order stable. The `level_20` hint and Cana opening copy now explain
  the one-shot interrupt, bridge hold, and Pac's gap/boomerang cue; physics remain unchanged.

## Evidence ledger

| Requirement | Result | Evidence |
| --- | --- | --- |
| Sound design and persistence | ACCEPTED | Optional state-linked audio; new/absent/invalid preferences default off; saved booleans and earned data persist. One accessible toggle; trusted-gesture runtime gate. |
| Source and static checks | PASS | Frozen source; `./check_codebase.sh` passes both TypeScript configurations, lint, Prettier, and 78 Node checks. |
| Fresh SPEC and QUALITY | ACCEPT | Both independent reviews accept with no blockers, including copy-only finale wording correction. |
| Official build and served artifact | PASS | `main.js` SHA-256 `e0931606c9f2003e4c08483949614a8088b8701506223350e5b0823e6e738da3`; map SHA-256 `255eaaa613355d68604b3259ebb238ce55e835999d2e4b9291b49aeec5d65873`. Local and served bytes match. |
| Permanent browser smoke | PASS 2/2 | Authorized no-rebuild retry passes both unchanged tests with identical hashes; port 8152 is empty. Earlier MachPort launch failures occurred before test bodies and remain recorded in `tests/_temp/living_sound_build/receipt.md`. |
| Focused audio browser | DONE_WITH_CONCERNS | 11 cases pass with native output, four effects, Bubble Bouncer, Return to Sender, finale charge/cancel/recharge/complete, and zero-RMS mute/pause/retry. No product defects or browser errors. See `tests/_temp/living_sound_browser/REPORT.md`. |
| Fresh campaign | DONE | One Play plus 25 Next completes all rooms in order with sound on. All Replay entries scroll into view; save bytes and preference persist identically after reload. See `tests/_temp/living_sound_campaign/REPORT.md`. |
| Villain trial | PASS | Two completions with Replay/reset and Back to levels; sound on, 48 native starts, unchanged empty save, all 26 campaign button states preserved. See `tests/_temp/living_sound_trial/REPORT.md`. |
| Full Python suite | PASS | `source source_me.sh && python3 -m pytest -q tests`: 1,980 passed in 2.08s. No permanent tests were added. |
| Integration and manager | DONE_WITH_CONCERNS | Fresh integration accepts with concerns and no product blocker; manager accepts the milestone. |

No permanent tests were added. Plan-specific harnesses and raw evidence remain under
`tests/_temp/living_sound_*`; helper attempts are retained as inert artifacts and are not product
failures.

## Evidence and limits

Frozen audio uses short sine/triangle tones for hero actions, pads, collectibles, villain actions,
interference effects, death, shared victory, and four finale charge milestones. It adds no loops,
random behavior, dependency, or audio event bus. Focused native browser checks cover gesture order,
save persistence, real cue output, lifecycle silence, and responsive controls. The completed
campaign receipt records all Replay entries scrolled into view before reload and a byte-identical
1,981-byte save with `soundEnabled: true`. The separate villain-trial receipt verifies two
completions, Replay/reset, Back to levels, and unchanged empty campaign progress.

Temporary focused reports retain early helper/oracle failures and their corrected routes; reviews
found no product defect. Genuine OS/tab hiding remains unmeasured. The external visibility fixture
does not prove host behavior. Physical speaker/headphone listening, human enjoyment, and paired-play
comfort remain unmeasured.

The manager's one-time inline Node probe reports `PASS`: 900 fixed steps match between audio
observation enabled with an unavailable `AudioContext` and unobserved simulation. Fresh, missing,
and invalid sound preferences normalize to false; stored true/false values and an earned record
remain unchanged. This is optional implementation proof, not a permanent test or human-listening
evidence.
