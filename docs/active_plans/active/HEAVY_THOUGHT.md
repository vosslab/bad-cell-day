# A Heavy Thought promotion ledger

**Status:** Root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 17:57:51 UTC.
No milestone work remains; the broader game goal remains active.

The approved private split-cargo room is registered as **A Heavy Thought**, stable `level_56`,
immediately after **Passing Thoughts** (`level_52`) and before **Attention, Please!** (`level_27`).
All 55 existing level definitions and their relative order are preserved. Gameplay values and scene
positions/attacks match the frozen fixture; only ID, title, subtitle, hint, and short villain dialogue
were authored for the promotion.

The room's approved mechanics are joint heavy-sac loading, a `requiresPower` diagonal ferry, Isp
power from upper HOLD while Pac rides and brakes, Isp leaving upper control and traversing the high
route, reunion, and both heroes unloading the sac onto HOLD to open the final passage. Preserve both
recurring villains' actual attacks. There is no Isp membrane.

## Evidence and gates

- `tests/_temp/heavy_thought_promotion/before_55.json` records the normalized registered baseline
  before promotion. The approved native fixture is preserved in this evidence directory.
- `tests/_temp/heavy_thought_promotion/REPORT.md` records registered route and recovery evidence,
  fixtures, inputs, traces, and the baseline comparison. The ordinary route completes in 2,505 frames;
  the missed-transfer recovery ends alive at frame 742 with Pac back on the ferry deck and BRAKE active.
  It does not claim recovery after losing the sac.
- The registered replay, TypeScript check, and focused Prettier formatting passed. Root's final
  96-check code gate, Pages build, and two browser smokes also passed; the canonical build identity
  is in the current [gameplay checkpoint](../reports/gameplay_direction.md#a-heavy-thought-registration-checkpoint-2026-10-18).
- Root reviewed seven final public views: six of this room and one opening-room check. The focused
  progression reached 45/56, Next to display 46, then Replay/Ready after reload. This is not a fresh
  56-room journey. Levels 54-56 remain unassessed; the historical current53 evidence is unchanged.
  See the [final integration report](../../../tests/_temp/heavy_thought_integration/REPORT.md).

## Readability correction

The original public capture showed persistent attack labels covering Isp on the upper crossing, with
the stage heading also drawn over the playfield. The correction removes both canvas captions, keeps
organ identity in the existing heading/HUD, and puts bubble/boomerang advice in the existing hero
cards. Pad ownership, automatic activation, key labels, the Hint toggle, and the already-accepted
default tip remain unchanged; gameplay and level data are unchanged. Root reviewed seven final views
and accepted fresh SPEC/QUALITY with concerns; the prior readability blocker is closed. The milestone
was accepted as `DONE_WITH_CONCERNS` at 2026-10-18 17:57:51 UTC. See the [public-play report](../../../tests/_temp/heavy_thought_public_play/final_report.md),
[SPEC re-review](../../../tests/_temp/heavy_thought_respec/REPORT.md),
[QUALITY re-review](../../../tests/_temp/heavy_thought_requality/REPORT.md),
and [final integration report](../../../tests/_temp/heavy_thought_integration/REPORT.md).
