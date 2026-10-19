# Breathing Room optional sparks

**Status:** Root accepted `DONE_WITH_CONCERNS` at 2026-10-18 22:43:21 UTC. No milestone work remains.

Add one owner-locked optional spark to each partner launch in stable `level_57`. Isp's spark
(`isp_first_launch_spark`, x=255, y=245) rewards a slight left aim on Pac's first recoil launch.
Pac's spark (`pac_second_launch_spark`, x=830, y=160) rewards a brief left aim on Isp's later recoil
launch, followed by steering right toward the high exit. Existing collection, feedback, and progress
UI remain responsible for display. The source change is limited to `collectibles` in
`src/level_breathing_room.ts`.

The registered native prototype uses fresh `create_game_state`, `create_empty_input`, and
`step_game(..., 1 / 120)` calls. The unchanged ordinary route clears both exits in 1,071 frames and
collects neither spark. A bonus route clears both exits in 1,040 frames and collects both; changing
Pac's left aim by one frame still clears both exits in 1,041 frames and collects both. Evidence and
the all-57 pre-edit snapshot are in `tests/_temp/breathing_room_bonus_routes/`. These scripted
routes demonstrate geometric reachability only; human discovery and enjoyment remain unmeasured.

Root accepted the source after SPEC, QUALITY, and fresh integration `PASS_WITH_CONCERNS`, source and
native-route comparison, and review of the browser flow and all four original captures. Browser
bonus inputs completed both exits with 2/2 sparks and zero retries; ordinary inputs completed with
0/2. Saved `bestCollectibles: 2` survived reload, Next opened Gut Feeling at display 07, and an
ordinary replay retained the saved maximum. Accepted source/build hashes are `dist/main.js`
`1d36a558fe681a2237e7966124eab5ed09fc702a26c0d066e8070cf8f55694d8` and
`dist/main.js.map` `bd0eb35b36a66764cddd01338bb4684acc70901b63bfba490d8fa4e83e69f8b0`. The other 56
registered levels remain unchanged; the current57 difficulty assessment and prior full57 journey
are frozen pre-optional-revision evidence. This bounded scripted route does not measure player
discovery, enjoyment, or input comfort. The broad gameplay goal remains active.
