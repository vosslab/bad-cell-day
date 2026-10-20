## 2026-10-19

### Documentation

- Restored 37 altered `current_58` first-pass records from exact lock-matching Git blobs. All 58
  first-pass files now parse and match their unchanged locks; all 58 paired records parse and cite
  the matching first-pass hash. Paired records remain pending validation. See the
  [current58 setup](difficulty_runs/current_58/README.md) and
  [assessment ledger](active_plans/active/CURRENT58_ASSESSMENT.md).

- Removed raw observations from 11 superseded difficulty runs and 947 obsolete scratch directories
  (6,979 files; about 1.76 GiB). Retired six low-value Node tests, reducing that suite from 96 to
  90; all 90 remaining tests passed. Kept current57/current58 captures and the legacy observation
  directory, which remains the assessor's default input. Historical reports, scores, and paired
  records remain as summaries; retired raw citations are no longer reproducible. See
  [difficulty assessment](LEVEL_DIFFICULTY.md).
- Recorded tentative opening feedback: mostly good, with tight platform jumps as a possible area to
  inspect if specific evidence appears. No room or blanket physics change is inferred. See
  [human guidance](HUMAN_GUIDANCE.md).
- Recorded accepted current58 assessment preparation and its chronological first-pass gates. The
  source/build freeze remains active; current57 stays the latest accepted map. Corrected the closed
  Crossed Paths probe record: the tested candidate is 1.5 seconds faster than the workable baseline,
  while minimum wait and human comfort remain unknown; level 22 stays unchanged.
  See [current58 setup](difficulty_runs/current_58/README.md),
  [assessment ledger](active_plans/active/CURRENT58_ASSESSMENT.md), and
  [Crossed Paths probe](active_plans/active/CROSSED_PATHS_PACING.md).
- Added a source-aware impact review for the current58 changes to levels 32, 58, and 19. It preserves frozen current57 scores, verifies earlier lessons against live campaign order, separates optional strategies from required work, and records bounded native/browser evidence and its limits. A native probe after Gem falls to the floor leaves full completion unresolved: Isp opens the upper latch, but neither the three continuations nor the extension reaches both exits; no trap or geometry defect is demonstrated. See [CURRENT58_DIFFICULTY_IMPACT.md](active_plans/reports/CURRENT58_DIFFICULTY_IMPACT.md), [gameplay direction](active_plans/reports/gameplay_direction.md), and [Gem floor recovery](active_plans/active/GEM_FLOOR_RECOVERY.md).

### Completed Milestones

- Root accepted the full 58-room expert difficulty assessment with concerns. Fresh SPEC passed;
  QUALITY and integration found no material issues. The source/build freeze is released and the
  current58 report, map, and chart are now the latest accepted assessment; current57 remains
  historical. Practical read: keep the opening lung-recoil relay, watch late Cana's Control
  Freak-Out and the finale's 75/100 platforming estimates in ordinary play, and do not reorder rooms
  by score alone. Cargo Exchange has the highest puzzle estimate (93/100), with supported
  recoverability. These are expert estimates, not calibrated human outcomes. See the [assessment](active_plans/active/CURRENT58_ASSESSMENT.md),
  [current58 run ledger](difficulty_runs/current_58/README.md), and
  [campaign difficulty index](LEVEL_DIFFICULTY.md).
- Independently completed and verified the fresh current58 browser journey: all 58 rooms in one
  attempt each, zero retries, ordinary Next progression, and the Patient Rescued ending. The fresh
  empty-save roster persisted across reloads; the frozen bundle identity matched and browser errors
  and failed requests were empty. This verifies prepared runtime and save progression, not human
  play, comfort, or enjoyment. See the [journey receipt](../tests/_temp/current58_campaign_playthrough/journey_receipt_2026-10-19T12-08-02-083Z.json).
- Integrated the approved `level_19` Cana finish candidate and accepted the bounded milestone as
  `DONE_WITH_CONCERNS` at 00:14:39 UTC. The STOP/STEADY/RESCUE opening remains; blue TARGET steadies
  the high bridge, and Cana guards the far finish with nearest-hero boomerang aim. Registered routes
  clear in 978 and 1000 frames with no deaths. Browser ordinary play clears in 8.167 seconds with
  zero deaths and 2/2 sparks, saves 57/58, advances to `level_20`, and restores Replay/Ready after
  reload. The late retake follows Pac's arrival at the far target; it does not establish recovery
  from a missed crossing. Root reviewed all seven original views; fresh
  SPEC passed, QUALITY and integration passed with concerns. This is not a full-58, human-play,
  discovery, or enjoyment claim. The current57 difficulty map remains frozen and does not rate this
  revision. See the [Cana finish ledger](active_plans/active/CANA_FINISH_PROTOTYPE.md) and
  [Phase B report](../tests/_temp/cana_finish_delivery/PHASE_B_REPORT.md).

## 2026-10-18

### Completed Milestones

- Integrated the private physical Gem-loading candidate into registered **Bring Your Own Villain**
  (`level_32`): Pac starts above the launch-side dock, Gem starts on it, and the hint describes
  loading the ferry before Pac waits on POWER. After the V0 browser capture showed crowding, root
  approved a scoped layout correction. The native ordinary route and loading-position correction
  complete at frames 1701 and 1727. Root's 96/96 gate, build, and two standard browser smokes passed;
  fresh V1 browser captures show a readable opening, FLOAT/latch, and both routes clearing. The
  seeded flow saves 34/58, advances to `level_46` at display 35, and preserves Replay/Ready after
  reload. Fresh SPEC, QUALITY, and integration passed; root accepted this bounded milestone as
  `DONE_WITH_CONCERNS` at 23:51:45 UTC. No full-58 journey or human-play claim is made. See
  the [delivery ledger](active_plans/active/VILLAIN_BOARDING_PROTOTYPE.md),
  [Phase A report](../tests/_temp/villain_boarding_delivery/PHASE_A_REPORT.md), and
  [Phase B report](../tests/_temp/villain_boarding_delivery/PHASE_B_REPORT.md).

### Decisions and Failures

- Set aside the private reciprocal-shot prototype. The fresh ordinary direct route cleared both
  exits in 424 frames before any target lock; the staged paired route took 1,601 frames and waited
  for its first lock at frame 539. The second position did not prove an opposite shot path, and the
  separate floor continuation was not a missed-jump recovery proof. No production source changed;
  retain all five native attempts in `tests/_temp/reciprocal_shot_prototype/`. Preserve current58 and
  return to gameplay selection. See the [prototype ledger](active_plans/active/RECIPROCAL_SHOT_PROTOTYPE.md)
  and [result report](../tests/_temp/reciprocal_shot_prototype/REPORT.md).
- Set aside the private **Membrane Relay** prototype. Its final native-input run (exit 0) had no
  successful clear: Pac reached the lower exit after opening both ruptures on the recovery route,
  but Isp failed to complete the bubble-assisted high exit; the primary attempt also failed before
  opening rupture B. The two sampled bypass checks did not find a solo upper route. Earlier clears
  used an invalid high-exit geometry and do not count. No campaign or production source changed; the
  prototype fixture and retained attempts are in `tests/_temp/membrane_relay_prototype/`, with the
  decision ledger in [Membrane Relay](active_plans/active/MEMBRANE_RELAY_PROTOTYPE.md).

### Documentation

- Promoted the frozen **The Liver-y Service** candidate as `level_58` after `level_28`; registered
  native proof confirms the other 57 definitions and their relative order remain unchanged.
  The unbaited recovery attempt also completes after an ordinary Pac jump clears the exit approach.
  Built-browser views and ordinary routes pass against the verified bundle; seeded save/Next/reload
  and legacy 57-ID checks pass. Root's 96-check gate, build, standard smokes, and fresh SPEC pass
  with concerns; fresh QUALITY and integration also pass with concerns. Root reviewed all five
  original views and accepted the milestone as `DONE_WITH_CONCERNS` at 2026-10-18 23:13:33 UTC.
  No full58 journey, difficulty assessment, or human-play claim is made. See the
  [delivery report](../tests/_temp/livery_service_delivery/PHASE_B_REPORT.md) and
  [promotion evidence](../tests/_temp/livery_service_delivery/NATIVE_EVIDENCE.md).
- Recorded root's accepted fresh current57 browser journey: all 57 rooms completed and saved in
  order from an empty context, with finale and reload evidence. The initial native-only level56
  route failure and corrected browser route remain distinct; human fun, discovery, and keyboard
  comfort are still unknown. See the [delivery report](active_plans/reports/CURRENT57_DELIVERY.md),
  [gameplay direction ledger](active_plans/reports/gameplay_direction.md), and [usage evidence](USAGE.md).

### Additions and New Features

- Added owner-locked optional sparks to Breathing Room's first Isp launch and later Pac launch.
  Native prototype routes show the unchanged ordinary clear at 1,071 frames with 0/2 sparks, a
  two-spark optional route at 1,040 frames, and a one-frame Pac-aim variation at 1,041 frames.
  Root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 22:43:21 UTC after fresh SPEC,
  QUALITY, integration, native, and built-browser review. Browser ordinary and bonus routes cleared
  with 0/2 and 2/2; save, Next, reload, and replay preserved the two-spark maximum. The accepted JS
  and map hashes are `1d36a558fe681a2237e7966124eab5ed09fc702a26c0d066e8070cf8f55694d8` and
  `bd0eb35b36a66764cddd01338bb4684acc70901b63bfba490d8fa4e83e69f8b0`. The other 56 levels are
  unchanged; current57 difficulty and full57 journey evidence remain frozen before this revision.
  No human discovery or enjoyment is claimed. See the
  [accepted plan](active_plans/active/BREATHING_ROOM_BONUS.md) and
  [browser evidence](../tests/_temp/breathing_room_bonus_routes/BROWSER_ACCEPTANCE.md).

- Generated the paired expert difficulty report and map for the frozen 57-room campaign. All 57
  records passed `validateSecond`; after scoped semantic corrections to records 14, 25, and 33, the
  final report command exited 0 and wrote report, SVG, and map for all 57 rooms. Root accepted the
  assessment as `DONE_WITH_CONCERNS` at 2026-10-18 21:42:04 UTC. Integration's FAIL was solely stale
  status labels; root verified the correction and closed that clerical finding, without a fresh
  integration PASS or rerun. This is not human-play evidence and changes no game source or build. The
  accepted current53 assessment remains historical and unchanged. See the
  [current57 report](difficulty_runs/current_57/report/LEVEL_DIFFICULTY_REPORT.md),
  [findings](difficulty_runs/current_57/FINDINGS.md),
  [acceptance report](active_plans/reports/difficulty_57_acceptance.md), and
  [run ledger](difficulty_runs/current_57/README.md).

- Promoted the accepted F5 crossing geometry into **A Very Bad Day for the Tumor** (`level_20`),
  preserving the opening handoff and two-second paired TARGET finish. Isp holds the high TARGET while
  Pac dodges Cana's outbound boomerang, rides its rightward return shove, and jumps to the far ledge;
  the lower fold supports a missed landing and rejoin. The 57 IDs/order and all 56 other definitions
  match the pre-edit snapshot. Registered-scene native clear and miss/rejoin, TypeScript, and focused
  formatting pass. Root's canonical 96-check gate, official build, and two browser smokes passed.
  Five focused views and the seeded 57/57 save, Replay, and reload flow passed against the served
  build. SPEC, QUALITY, and integration passed with concerns. Root reviewed the source, receipts, and
  all five originals and accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18
  19:55:59 UTC. The edge-positioned STEADY input remains an ordinary-input forgiveness observation,
  not a source defect or mandatory one-frame human action. The revision is unassessed; frozen53
  scores remain unchanged, including its estimate that predates the level40 roof change. No fresh
  57-room journey or human discovery/fun claim is made. No milestone work remains; the broad game goal
  remains active. See the [delivery ledger](active_plans/active/finale_assist_delivery.md),
  [SPEC](../tests/_temp/finale_assist_spec/REPORT.md),
  [QUALITY](../tests/_temp/finale_assist_quality/REPORT.md), and
  [integration](../tests/_temp/finale_assist_integration/REPORT.md).
  See the [delivery ledger](active_plans/active/finale_assist_delivery.md).

- Promoted the approved **Breathing Room** trial to stable `level_57` at lung position 6 / campaign
  position 6, after **Hold Your Breath** and before **Gut Feeling**. The preceding 56 definitions and
  their relative order are preserved. Registered native clear and miss/rejoin replays, TypeScript, and
  focused formatting checks passed. Root's 96-check gate, official build, two browser smokes, five
  focused browser views, and save/Next/reload flow passed with served-build hash verification. Fresh
  SPEC, QUALITY, and integration passed with concerns and no material blocker. Root accepted the
  bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 18:42:16 UTC after reviewing the source,
  receipts, and five original views. The focused browser flow seeded only the five prior completions;
  no fresh 57-room journey was run. Levels 54-57 are unassessed, historical current53 scoring is
  unchanged, and human discovery/fun remain unknown. No milestone work remains; the broad game goal
  remains active. See the [promotion ledger](active_plans/active/BREATHING_ROOM.md),
  [SPEC](../tests/_temp/breathing_room_spec/REPORT.md),
  [QUALITY](../tests/_temp/breathing_room_quality/REPORT.md),
  [integration](../tests/_temp/breathing_room_integration/REPORT.md), and
  [Phase B evidence](../tests/_temp/breathing_room_delivery/PHASE_B_REPORT.md).

- Updated **Bombs Need Personal Space** (`level_14`) so Pac can hold OPEN / PAUSE while Isp
  boards the longer traveling refuge, then release it across the bomb gap. Added a far shore and
  a lower landing lip; the existing RESCUE pad still opens Pac's exit. Registered-scene ordinary
  play clears at frame 2116, and a separate miss/reboard route returns Pac to the refuge at frame
  1825. The 57 registered IDs/order and all other room definitions match the pre-edit snapshot.
  TypeScript, focused formatting, five browser views, and the bounded save/Next/reload flow passed.
  Fresh SPEC, QUALITY, and integration passed with concerns. Root reviewed the source, receipts, and
  all five original views and accepted the revision as `DONE_WITH_CONCERNS` at 2026-10-18 19:15:58
  UTC. The revision remains unassessed for human play and difficulty; no fresh 57-room journey or
  current53 rescore was run. No milestone work remains; the broad gameplay goal remains active. See
  [delivery plan](active_plans/active/liver_refuge_delivery.md).

- Registered **A Heavy Thought** (`level_56`) at brain position 6 / campaign position 45, after
  **Passing Thoughts** and before **Attention, Please!**. Its partner route has Isp power the elevated
  ferry while Pac rides the heavy sac, then Pac returns to the deck to brake; they reunite and deliver
  the sac together. The prior 55 definitions and their relative order are preserved. The readability
  correction removes the stage caption and weapon legend from the canvas, keeping organ identity in
  the heading/HUD and guidance in existing hero cards; it adds no mechanics or configuration. The
  ordinary registered route completes in 2,505 frames; a missed-transfer recovery confirms ferry
  reboard and BRAKE at 742 frames, without claiming cargo-loss recovery. The final code gate, build,
  and two browser smokes passed. Root accepted fresh SPEC/QUALITY with concerns and reviewed all seven
  public views. The focused flow completed 45/56 after seeding 44 prior completions, reached
  Attention, Please! at display 46, and preserved Replay/Ready after reload. Fresh re-SPEC/re-QUALITY
  close the prior readability blocker. Root accepted the bounded milestone as `DONE_WITH_CONCERNS`
  at 2026-10-18 17:57:51 UTC after reviewing the final integration report and all seven original
  views. No fresh 56-room journey or difficulty rescore was run; historical current53 evidence is
  unchanged, and levels 54-56 are unassessed. No milestone work remains; the broad game goal remains
  active. See the
  [promotion ledger](active_plans/active/HEAVY_THOUGHT.md),
  [gameplay checkpoint](active_plans/reports/gameplay_direction.md#a-heavy-thought-registration-checkpoint-2026-10-18),
  [registered replay report](../tests/_temp/heavy_thought_promotion/REPORT.md), and
  [final integration report](../tests/_temp/heavy_thought_integration/REPORT.md).

- Root accepted the bounded **A Heavy Thought** recovery probe as `DONE_WITH_CONCERNS`, with no
  source change. Ordinary-input evidence shows the visible loading overpush drops the sac below the
  ferry, while the unloading route carries both heroes and cargo through the exit lane before it
  closes behind them. Restart remains a reasonable retry; human recovery and discoverability are
  unobserved. See the [recovery ledger](active_plans/active/HEAVY_THOUGHT_RECOVERY.md) and
  [probe report](../tests/_temp/heavy_thought_recovery_probe/REPORT.md).

- Connected the authored tumor tissue atlas to eligible tumor platforms using the existing lazy atlas
  pattern and fallback. The GitHub Pages build now requires and copies the fixed SVG. Collision
  geometry, room definitions and order, rendering rim, and gameplay behavior remain unchanged. Root
  accepted the bounded integration as `DONE_WITH_CONCERNS` at 2026-10-18 16:51:17 UTC after the 96-check
  code gate, Pages build, two browser smokes, three public views, and SPEC, QUALITY, and integration
  review. Seeded prior progress limits the finale evidence to focused delivery; no fresh campaign,
  human-playability, or measured-fun claim is made. See the [tumor surface plan](active_plans/active/TUMOR_SURFACE.md),
  [public-play report](../tests/_temp/tumor_surface_public_play/REPORT.md),
  [SPEC](../tests/_temp/tumor_surface_spec/REPORT.md),
  [QUALITY](../tests/_temp/tumor_surface_quality/REPORT.md), and
  [integration](../tests/_temp/tumor_surface_integration/REPORT.md).

- Clarified the default help with the established partner physics: heroes can push each other,
  jump-over contact to swap sides, and jump onto a partner for a lift. The Hint toggle and IDs are
  unchanged. Root accepted the text change as `DONE_WITH_CONCERNS` at 2026-10-18 16:34:05 UTC after
  the official build, two browser smokes, and SPEC, QUALITY, and integration review. The rebuilt
  JavaScript disk/HTTP SHA-256 is `fc822865d2ef61f9b0c22dd01299a3ad2375aad20302b6391419ad88e0ee86eb`;
  the source map/HTTP SHA-256 is `3ebf5dd4fd9a0a51128c55bf5b1a3d991708a391a39e13bb5210c86b44bf3463`.
  The 55-room journey remains evidence for its earlier build and is recorded separately. See the
  [current55 delivery ledger](active_plans/reports/CURRENT55_DELIVERY.md) and
  [partner-contact diagnosis](../tests/_temp/opening_partner_contact_diagnosis/REPORT.md),
  [SPEC](../tests/_temp/partner_tip_spec/REPORT.md),
  [QUALITY](../tests/_temp/partner_tip_quality/REPORT.md), and
  [integration](../tests/_temp/partner_tip_integration/REPORT.md).

- Registered root-approved **The Weight of Cana** (`level_55`) at marrow position 5 / campaign
  position 21, after **Elevator Etiquette** (`level_10`) and before **Cargo Exchange** (`level_23`).
  The prior 54 definitions and their relative order are preserved. Root accepted the bounded
  addition as `DONE_WITH_CONCERNS` at 2026-10-18 16:05:16 UTC after the canonical code gate, official
  build, browser smokes, six public helper views, nine final capture reviews, focused UI progression,
  SPEC, QUALITY, and final integration. The room remains unassessed alongside `level_54`; no fresh
  55-room journey or difficulty rescore was performed or required. Historical current53 evidence is
  unchanged; human discovery and enjoyment are unknown. See the
  [Weight of Cana plan](active_plans/active/WEIGHT_OF_CANA.md),
  [public-play report](../tests/_temp/weight_of_cana_public_play/conciseREPORT.md), and
  [final integration](../tests/_temp/weight_cana_final_integration/REPORT.md).

- Clarified Cargo Exchange counterweight copy: deck faces now identify `DECK A` / `DECK B`, and
  stationary load effects use `WEIGHT` wording. Existing arrows and movement wording are unchanged.
  This addresses an observed confusion between "A PULL" and the A-key control; it makes no claim of
  measured human improvement. Root accepted this bounded correction as `DONE_WITH_CONCERNS` at
  15:06:40 UTC after the existing checks, build, two-view capture, SPEC, QUALITY, and integration.
  See the [decision](DESIGN_DECISIONS.md#name-cargo-exchange-decks-and-report-weight-effects) and
  [capture report](../tests/_temp/counterweight_identity_copy/REPORT.md).

- Registered **Cana's Moving Target** (`level_54`) at intestine position 6 / campaign position 11,
  after **Cana-stipation** and before **The Great Cell Shuffle**. The existing 53 room definitions
  retain their relative order. The approved moving ferry, fixed-fold brace, carried-origin Cana
  boomerang, and lower route are promoted from the private fixture with the approved player hint.
  Native ordinary (7.133 s) and Pac lower-path recovery (6.592 s) traces are retained; the latter
  starts after Isp is above. An independent initial-Isp-miss/reboard route completed in 7.133 s.
  The final build, two browser smokes, seven public views, seeded save/reload progression, SPEC,
  QUALITY, and final integration were accepted with concerns at 2026-10-18 14:53:35 UTC. The progress
  run saved level54 at 11/54 and loaded The Great Cell Shuffle at display position 12. No fresh
  54-room journey or difficulty assessment was performed; human discovery and enjoyment are unknown.
  The historical 53-room journey and frozen current53 difficulty evidence are unchanged. See the
  [Moving Target plan](active_plans/active/MOVING_TARGET.md) and
  [final integration report](../tests/_temp/moving_target_final_integration/REPORT.md).

- Registered root-approved **Cana-stipation** (`level_53`) at intestine position 5 / campaign
  position 10, after **Gut Instinct** (`level_34`) and before **The Great Cell Shuffle** (`level_05`).
  The prior 52 room definitions retain their relative order. The frozen private candidate's geometry
  and attacks are preserved; the approved production differences are its stable ID/exports, type
  imports, both-villain scene registration, and full Hint. Private native and browser evidence
  includes a reciprocal `final_lift` ride, an ordinary fall-and-reboard route, and legal Gem-FLOAT
  alternate. The source gate, official build, served identity, public capture, public SPEC, and six
  independent audits passed. The fresh 53-room journey passed in one attempt per room with zero
  retries, errors, or failed requests and reload checkpoints at 10, 20, 30, 40, 50, and 53. Root
  reviewed the original finale showing Patient rescued, 53/53, and all organs cleared. Root accepted
  QUALITY after six fresh audits and final-lift condition closure; final integration accepted with
  concerns and its sole stale-status finding is resolved. Root accepted the bounded milestone as
  `DONE_WITH_CONCERNS` at 2026-10-18 11:33:03 UTC. The broader gameplay goal remains active. See
  the
  [review synthesis](active_plans/audits/cana_stipation_review.md).
  Current difficulty evidence remains frozen at current46; human discovery and enjoyment are unknown.
  See the [Cana tunnel production ledger](active_plans/active/cana_tunnel.md).

- Added **Passing Thoughts** (`level_52`) at brain position 5 / campaign position 41, after
  **Crossed Paths** (`level_22`) and before **Attention, Please!** (`level_27`). The 52-room source
  roster preserves the other 51 room definitions and their relative order. Canonical source checks,
  official build, standard browser smokes, public-route capture, SPEC, and six audits are complete;
  the low style finding was the uppercase plan filename and is fixed. A fresh 52-room prepared-input
  campaign journey passed, including save/reload checkpoints and the 52/52 rescue screen. Final
  integration accepted with concerns and no material finding; root accepted the bounded milestone as
  `DONE_WITH_CONCERNS` at 2026-10-18 10:28:36 UTC. Prepared input does not establish first-time
  human playability or enjoyment. The current46 assessment remains frozen and does not score this
  room. Player-facing README blurbs use room titles without internal IDs, and the duplicate Backseat
  Driver pitch above the PLAY link is removed for clearer entry flow. See the
  [acceptance cleanup report](../tests/_temp/passing_thoughts_acceptance_cleanup/REPORT.md).
  See the [Passing Thoughts plan](active_plans/active/passing_thoughts.md)
  and [evidence reconciliation](../tests/_temp/passing_thoughts_evidence_reconcile/REPORT.md).

- Approved a bounded hero-locomotion pass: four authored stride SVG poses, selected only for solo
  grounded running, with a position-derived cycle and canonical loading fallback. Stride suppresses
  idle bob and squash; world position fixes the pose while stationary or paused. Existing cues,
  collision brackets, and all 51 rooms/order from the stride-start shared worktree remain protected.
  Source/build gates and standard browser smokes passed. The 9-view correction capture exited 0
  with no retries/errors and ended on Pac STICKY; the paused trace records 31 stable pose draws per
  hero and 20 stopped canonical draws. All six audits are complete and substantive findings are
  closed via correction SPEC/QUALITY. Final integration accepted with concerns and no material
  defect; root accepted the sampled implementation and visuals as `DONE_WITH_CONCERNS` at
  2026-10-18 09:00:34 UTC. This is not a human-fun finding. See the
  [hero stride ledger](active_plans/active/HERO_STRIDES.md).

- Promoted the private foreground Gem trial into existing **Gem's Liver Lair** (`level_16`,
  campaign position 36). The approved change moves Gem onto the bridge, shortens that bridge to
  leave a 60 px jump, and explains the shove, RESCUE, respawn, and target sequence in the Hint.
  The other 50 room definitions and campaign order remain unchanged. Public SPEC accepts with
  concerns; `./check_codebase.sh` passed TypeScript, lint, format, and 96 existing Node tests; the
  official build and focused eight-view public capture passed.
  Root reviewed all eight public images and accepts the sampled visuals with concerns: views 03 and
  04 and the final panel show zero retries and 2/2 Sparks. The standard two-smoke browser process
  passed. The Hint line-format correction preserves the exact runtime string; the official rebuild
  passed with unchanged minified JavaScript and matching HTTP bytes. All six audits and fresh
  correction review completed; final integration accepted with concerns and no material blocker.
  Root recorded the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 08:35:35 UTC. The exact
  one-time runners were retired after preserving source-blind timed inputs. Scripted visuals do not establish human
  enjoyment or difficulty. See the [Liver Lair foreground ledger](active_plans/active/LIVER_LAIR_FOREGROUND.md).

- Added **A Bone to Pick** (`level_51`) at marrow position 6 / campaign position 20, after Cargo
  Exchange and before Marrow Cargo Shuffle. Its moving-rib route, actors, attacks, and geometry copy
  the accepted private fixture; only the stable ID, title, and approved Hint differ. Public SPEC is
  accepted, all six focused audits are complete, and nine local public-build views show the clean
  clear and missed-boarding recovery. Root's fresh no-seed public journey completed all 51 rooms in
  one attempt with zero retries/errors and save/reload checkpoints at 10, 20, 30, 40, 50, and 51;
  QUALITY accepts the six focused audits with findings reconciled. Root accepted final integration
  with no material finding and the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 07:55:48
  UTC. Human outcomes remain unmeasured; the frozen difficulty assessment remains current46 and the
  broad gameplay goal remains active. See the [production ledger](active_plans/active/marrow_rendezvous.md),
  [audit synthesis](active_plans/audits/bone51_review.md), and
  [integration review](../tests/_temp/bone51_final_integration/REPORT.md), plus the [acceptance and cleanup record](../tests/_temp/bone51_acceptance_record/REPORT.md),
  [closeout receipt](../tests/_temp/bone51_evidence_closeout/REPORT.md).

- The shared villain renderer now acknowledges heroes who land on and ride Gem or Cana with the
  existing countered pose and physical-contact quip. Escape, interruption, and active weapon/body
  pose cues retain priority. Contact speech reuses the push-quip slot and can appear during windup,
  as it already can for pushes; it does not interrupt or disable attacks, and weapon, muzzle/aim,
  windup, and throw behavior remain active. Root accepted the bounded milestone as `DONE` at
  2026-10-18 06:44:23 UTC after fresh SPEC, QUALITY, and integration acceptance, the 96-check code
  gate, official build, two existing browser smokes, and review of five original captures. Sampled
  visuals do not establish human discovery, enjoyment, fairness, or comfort. At this 06:44
  acceptance checkpoint the broad gameplay goal remained ACTIVE and the public campaign had 50
  rooms. See the
  [foothold feedback ledger](active_plans/active/villain_foothold_feedback.md) and
  [closeout report](../tests/_temp/villain_rider_feedback_closeout/REPORT.md).

### Behavior or Interface Changes

- Replaced nutrient sacs' canvas decoration with authored light/heavy SVGs, drawn inside their
  existing cargo rectangles. A small fill and outline remain visible while an SVG loads or is
  unavailable; the heavy `TEAM` label remains. Cargo bounds, mechanics, and room order are
  unchanged. Root accepted the bounded milestone with concerns at 2026-10-18 14:07:29 UTC after
  96 existing checks, the canonical build, two browser smokes, and review of five public captures.
  The 24 px view has reduced internal detail; the captures do not establish human discovery or
  enjoyment. See the [readability plan](active_plans/active/NUTRIENT_SAC_READABILITY.md) and
  [capture report](../tests/_temp/nutrient_sac_public_capture/REPORT.md).
- Clarified the `level_50` Hint's launch position, split timing, and leftward floor-to-shelf
  regroup route. The first source-blind walkthrough did not inspect the Hint. A separate later
  hint-assisted expert continuation did not complete; the causal report recommended keeping the
  original Hint. Root chose the clearer landmarks from the combined observations and native route
  evidence, which does not demonstrate improved discovery, completion, or fun. The source change
  is Hint-only. Root's 96-check code gate, official build, two existing browser smokes, and normal
  Hint capture passed; SPEC, QUALITY, and final integration accept. Root accepted the milestone as
  `DONE_WITH_CONCERNS` at 2026-10-18 07:10:04 UTC. Integration records a bounded baseline caveat
  about temporal attribution of existing reduced-motion helper work; it is not a functional finding,
  and no provenance gate was added. No fresh 50-room journey was run for this text-only revision;
  earlier journey evidence remains historical.
  See the [hint clarity plan](active_plans/active/backseat_driver_hint_clarity.md),
  [implementation evidence](../tests/_temp/backseat_hint_clarity_implementation/REPORT.md), and
  [root evidence record](../tests/_temp/backseat_hint_evidence_record/REPORT.md),
  [integration report](../tests/_temp/backseat_hint_integration/REPORT.md), and
  [closeout report](../tests/_temp/backseat_hint_closeout/REPORT.md).

### Fixes and Maintenance

- Fixed Bursting Point (`level_40`) recovery: Pac's roof stays open after collapse so a later Gem
  bubble can still carry Isp to the exit. Root's canonical checks, build, existing browser smokes,
  and three-view public-build capture passed; see the
  [recovery record](active_plans/reports/bursting_point_recovery.md).
- Closed the bounded current53 expert difficulty assessment as `DONE_WITH_CONCERNS`; root accepted
  at 2026-10-18 13:19:42 UTC after final integration, QUALITY, SPEC, and original-chart review. The
  active source/build freeze ended at acceptance while captured evidence remains frozen. FINDINGS
  received ASCII/Latin-1 punctuation and wrapping cleanup; finished one-time helpers were retired
  after inventory and hash preservation. The broad game goal remains active. See the
  [acceptance receipt](active_plans/reports/difficulty_53_acceptance.md).
- Retired 16 completed ignored Passing Thoughts one-off executables after preserving their inputs
  and results. The retirement record lists each path.
- Rotated `docs/CHANGELOG.md` after it exceeded the 800-line threshold. The active file keeps the
  complete 2026-10-18 and 2026-10-17 blocks; the complete 2026-10-16 block moved to
  [CHANGELOG-2026-10b.md](CHANGELOG-2026-10b.md).

- Completed an evidence-only continuation from the actual level 56 loading-sac loss. Ordinary inputs reboard the ferry at frame 369, jointly open DELIVER at frame 2414, and clear both exits at frame 2463 / 20.525 s. The sac remains on the floor; no geometry or source/build change was made. This is native simulation evidence, not a browser or human-play result. Root accepted the investigation as DONE_WITH_CONCERNS at 2026-10-18 21:52:46 UTC. See the [continuation record](active_plans/active/HEAVY_SAC_LOSS_CONTINUATION.md).

### Opening and pacing review

- Recorded KEEP dispositions for the opening mechanics and **Knock It Off** (`level_31`). Causal
  review reversed the initial `level_04` reading: Isp pushes Pac onto STEADY, stabilizing the bridge
  and opening Isp's route. A source-blind expert walkthrough cleared `level_02` through ordinary
  inputs with zero retries; this does not establish human discovery or enjoyment. The 53.2-second
  `level_31` schedule, including 39.85 seconds without held keys, does not establish forced waiting
  or a minimum time. Root approved a private shared-load reversal comparison against **Changing
  Places** (`level_29`); no public room or gameplay change was approved. See the current checkpoint
  in [gameplay_direction.md](active_plans/reports/gameplay_direction.md).
- Kept the baseline shared-load reversal private and parked its Gem unwanted-passenger variant:
  the scripted transfer leaves the sac unmoved and dies at 10.38 seconds; missed-boarding recovery
  covers only the opening ride, and the alternate is incomplete. This does not prove all routes
  fail. The bounded physical-villain feedback review is complete and its renderer-only follow-up is
  accepted; this does not promote the shared-load variant or authorize physics rescue or public
  level 51. See [shared_load_reversal.md](active_plans/active/shared_load_reversal.md) and the
  [foothold feedback ledger](active_plans/active/villain_foothold_feedback.md).

### Moving lift stack correction

- Implemented transitive supported-stack carrying at the moving-platform boundary in
  `src/mechanisms.ts`. The focused stack, world-clipping, and ordinary-jump probes and scoped lint,
  format, and TypeScript checks pass. Six audit passes are complete, and a focused external-body
  fixture confirms shared lift/crate/Gem movement stops at stationary Cana without overlap. Root
  reports 96 canonical checks, build, two browser smokes,
  and the rebuilt-browser level 25 replay passing. Root accepted the bounded milestone as
  `DONE_WITH_CONCERNS` at 2026-10-18 05:43:21 UTC after integration review and a fresh-save browser
  journey completed all 50 rooms in one attempt each, with zero retries and no browser errors.
  Reload checkpoints at 10, 20, 30, 40, and 50 retained matching completion counts. The journey
  verifies prepared ordinary-input runtime and save/reload behavior, not human playability or
  discovery; integration retains the unproven overlapping-carrier concern. See the
  [active transport ledger](active_plans/active/LIFT_STACK_TRANSPORT.md),
  [audit synthesis](active_plans/audits/lift_stack_review.md), and
  [closeout receipt](../tests/_temp/lift_stack_closeout/REPORT.md).

## 2026-10-17

### Audit closeout

- Corrected two current50 notes to identify `level_47` through `level_50` as stable IDs, not
  campaign positions. Recorded the root audit disposition and pending full browser journey; the
  broader gameplay goal and human-outcome limits remain explicit.

### Additions and New Features

- Added **Backseat Driver** (`level_50`) as brain room 11 / campaign position 46, after
  **Jump to Conclusions** (`level_38`) and before **Changing Places** (`level_29`). It preserves the
  accepted tandem-shove fixture's geometry and recurring Cana attack, adding only the approved blue
  and orange passive Sparks. Root accepted production integration as `DONE_WITH_CONCERNS` at
  2026-10-18 04:37:11 UTC after 96 source checks, the canonical site build, two standard browser
  checks, six original capture reviews, and fresh SPEC, QUALITY, and integration reviews. Browser
  completion followed appended 120-frame held-right intervals; this does not prove those frames were
  all necessary. Native evidence records a `RETURN_STEP` catch. The seeded run does not prove an
  unseeded full 50-room journey, human playability, discovery, or enjoyment. The frozen 46-room
  assessment remains historical evidence. See the [production evaluation](active_plans/active/BACKSEAT_DRIVER.md).

- Collected Sparks now leave a brief owner-colored ring at their authored position. Runtime-owned
  presentation history observes collection transitions after fixed steps, freezes while paused,
  expires after 0.45 seconds, and resets with each attempt; reduced motion shows a stable mark.
  Collection, rewards, controls, and audio are unchanged. Root accepted the bounded milestone as
  `DONE_WITH_CONCERNS` at 2026-10-18 04:02:55 UTC after existing combined checks/build/two browser
  smokes, corrected observer proof, normal and reduced-motion captures, and fresh SPEC, QUALITY, and
  integration reviews. The later capture-runner preference correction had scoped syntax/format
  checks and captures; the combined gate was not rerun afterward. Visual evidence is sampled, with
  partial overlap in the reduced-motion still; player discovery and enjoyment remain unmeasured.
  See the [pickup feedback plan](active_plans/active/SPARK_PICKUP_FEEL.md) and its temporary evidence
  receipts.

- Added **Bone Voyage** (`level_49`) at marrow campaign position 16, after `level_11` and before
  `level_09`, preserving the previous 48 rooms' definitions and relative order. The room uses the
  approved rib, bank, Gem watchpost, light sac, exits, and recurring Gem and Cana attacks, plus the
  two approved passive Sparks. Current-source ordinary-input replay clears clean and miss/retry
  routes in 1,482 and 2,972 frames with zero deaths and both Sparks collected; the retry includes
  Cana's actual SHOVE on Pac. Root accepted the bounded milestone as `DONE_WITH_CONCERNS` at
  2026-10-18 03:41:43 UTC after 96 existing checks, the current build, both browser smokes, seven
  original capture reviews, and fresh SPEC, QUALITY, and integration reviews. The production evaluation ledger records evidence and limits;
  human discovery, readability, fun, comfort, difficulty, and universal recovery remain unmeasured.

- Updated **Elevator Etiquette** (`level_10`, `campaign17`) around its shared lift, STOP, Pac
  STEADY, and Isp RESCUE puzzle. Isp jumps from the bridge to the upper bone shelf at `(985, 230)`
  and its exit at `(985, 170)`; Pac finishes separately at the lower exit `(930, 250)`. Cana uses
  her own perch at `(1030, 100)` and keeps a recurring boomerang aimed at `(900, 285)` that starts
  on STEADY (cooldown 1.3, windup 0.9, speed 210, radius 12). Both villains are active, and Cana's
  opening is `Top floor! My boomerang has right of way!`. The hint describes the split routes,
  attack pressure, and retry. The room retains its other original
  platforms, pads, gates, hazards, Sparks, spawns, and schemes; the other 47 rooms, roster order,
  engine, rendering, types, and state are unchanged. Current-source ordinary-input replays and six
  built-browser captures show clean completion and a grounded missed-shelf retry, with zero deaths;
  deliberate exposure produces DIZZY and SHOVE. Root accepted the bounded milestone as
  `DONE_WITH_CONCERNS` on 2026-10-18 02:59:08 UTC after SPEC, QUALITY, and integration accepted with
  concerns. Sampled visuals retain some label overlap and minor edge decoration clipping. Human
  discovery, fairness, comfort, enjoyment, and the full 48-room journey remain unmeasured; the broad
  continuous-game goal remains active. See the [Elevator Overlook ledger](active_plans/active/ELEVATOR_OVERLOOK.md)
  and its implementation, capture, and review reports.

- Added Cana's recurring lower-lane boomerang to **Gut Instinct** after Pac seals KEEP LOWER. The
  hint describes the two sac routes, both seals, Cana's pressure, and Pac's valve-support recovery;
  both Gem and Cana are marked active. The bounded milestone was accepted with concerns; human
  discovery, readability, enjoyment, alternate-input recovery, and the full 48-room journey remain
  unmeasured. See the [acceptance ledger](active_plans/active/GUT_INSTINCT_CANA.md).

- Added intestine room **Gut Reaction** (`level_48`) at campaign position 11, between **The Great
  Cell Shuffle** and **Double Trouble**. Isp can optionally take a first bounce for the high Spark
  while Pac rides the moving fold, then they use a second recoil tissue for separate exits; Gem and
  Cana keep their attacks active.

- Added lower lung folds to **Stop Right There!** (`level_03`) so either hero can recover a missed
  ferry transfer and continue the crossing. Isp still controls the ferry with STOP, Gem's bubbles
  can lift Isp off the pad, and Pac opens Isp's route at RESCUE.

- The opening now asks both heroes to move and act physically: short tissue hops create footing
  above a safe floor, Gem rides the partners' existing lift, and Cana arrives on a balcony. In
  room five, Isp and Pac can collect separate sparks above their recoil return landings.

- Gameplay quality is the development focus following acceptance of the public 47-room build. The
  private Crosscurrent Cells candidate still needs gameplay correction; it is not promoted. The
  latest human guidance asks whether the game is enjoyable and what to improve, and says further
  test expansion is not of interest.

- In **Narrow Escape** at campaign position 7, Isp and Pac ride opposite counterweight decks while
  Gem's physical mass lowers Isp's side and raises Pac's; the safe floor and folds support recovery
  after a missed landing. Campaign-wide airborne poses now distinguish ascent, apex, and descent.

**Organic moving tissue surfaces**

- Wide, thin carrier decks now reuse the existing organ atlas strips while retaining
  their landing rim and motion/power cues. The verified build, standard browser smokes, and seven
  focused captures pass; SPEC, all six QUALITY passes, integration, and root accept the bounded
  change. Human outcomes remain unmeasured. See the
  [active ledger](active_plans/active/MOVING_TISSUE_SURFACES.md).

**The Long Gut reciprocal ferry room**

- The new intestine room gives Isp and Pac reciprocal tissue ferries while Gem and Cana remain
  active, with a safe lower floor for regrouping after a missed transfer. Validated native and
  browser clears include a same-run recovery after correcting the ordinary-input tail. See the
  [production ledger](active_plans/active/LONG_GUT.md) for placement, evidence, and limits.

**Current46 difficulty assessment report**

- The canonical report command generated the map, report, chart, and 46 dossiers after a correction
  limited to six stale fingerprint headers. The corrected findings synthesis and all six fresh
  Plan/Test/Style/Docs/Legacy/Comment QUALITY passes are complete. Two deduplicated documentation
  findings and later clerical items are closed; Test and Legacy had no findings. Targeted QUALITY
  accepts, and separate integration accepts with concerns. Root accepted this bounded assessment as
  `DONE_WITH_CONCERNS` at 2026-10-17 22:15:47 UTC. Current46 is now the latest accepted frozen expert
  assessment, current44 is a historical accepted checkpoint, and the active source/build freeze has
  ended while this run's captured artifacts remain immutable. Root parked the named villain-baited fork/reunion
  concept after a novelty check found substantial overlap with existing rooms. Next gameplay work is
  exploratory private navigation with distinct partner roles and forgiving recovery, using existing
  mechanics; details remain to be designed. The broad gameplay goal remains active. No human outcomes
  or gameplay authorization are claimed. See the [review receipt](active_plans/reports/difficulty_46_acceptance.md),
  [active plan](active_plans/active/difficulty_46_refresh.md), and
  [run receipt](difficulty_runs/current_46/README.md).

**Dead Weight production authorization**

- Root authorized additive **Dead Weight** (`level_46`) at campaign position 27 in the liver, after `level_32` and
  before `level_14`, preserving the relative order of the previous 45 rooms. The corrected private
  candidate is now registered with two authorized fold/right-wall changes. Root reports the current
  code/build/smoke gates and seven browser cases passed; fresh SPEC accepts with concerns, and sampled
  visuals are accepted with concerns. Native routes complete at 1,101 frames for continuous input
  and 1,945 for bounded same-run over-push recovery (scheduled tails 1,224 and 1,986). All three
  initial audit findings are closed, and fresh SPEC/QUALITY/final integration accept with concerns.
  Root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-17 20:45:51 UTC. Human
  discovery, fun, comfort, general floor recovery, and difficulty remain unknown; the broad gameplay
  goal remains active. See the
  [status record](active_plans/reports/DEAD_WEIGHT_ACCEPTANCE.md) and
  [production ledger](active_plans/active/LIVE_BALLAST.md).

**Lung tissue atlas production integration**

- Copied the frozen accepted 128 by 120 atlas unchanged and added the existing lazy-image renderer
  branch for active solid horizontal lung surfaces. The shared crop/repeat helper, fallback, clip,
  and 3px landing rim remain in use; moving, fragile, recoil, and vertical surfaces are unchanged.
  The one-time production comparison confirms that all 45 room definitions and their order are
  preserved. The initial official build compiled but failed one of two smokes because the SVG was
  absent from the explicit build lists; the correction adds it to required-source, copy, and final
  dist checks. The corrected official build passed both smokes. Root verified matching source,
  dist, and HTTP SVG identity, 72 mapped sources matching disk, and five focused captures with no
  deaths or browser errors; root reviewed all five originals and kept the visual result with
  concerns.
  Public SPEC accepts with concerns. The initial six Plan/Test/Style/Docs/Legacy/Comment passes are
  complete; their stale-plan findings are corrected, with the original receipts retained. The
  targeted build-fix re-review accepted the build-script correction; fresh final integration
  accepted with concerns. Root accepted the bounded milestone as `DONE_WITH_CONCERNS` at
  2026-10-17 20:01:30 UTC. The old 45-level/111-source/32-build counts describe
  only the dated pre-promotion baseline; the production source/asset count is 112 and the current
  build count is 33. The builder asserts the copied SVG with `test -f`; no dedicated permanent
  renderer-unit test was added, a deliberate KISS limit after the corrected build, HTTP smoke, and
  five visible-art captures. Accepted limits include visible nodule cadence on 60/70px floors and
  narrow-end truncation. Human readability and enjoyment are unmeasured. See the
  [acceptance report](active_plans/reports/LUNG_TISSUE_ACCEPTANCE.md) and
  [active plan](active_plans/active/LUNG_TISSUE_ART.md).

**Gut Feeling production closeout**

- Added `level_45`, Gut Feeling, at intestine position 6 after Level 37 and before Level 06,
  preserving the previous 44 definitions and their relative order. Root's 96-check gate, official
  build, standard smokes (2/2), seven standard capture views, and two complete recovery browser
  cases passed on the verified local/served bundle. Public SPEC accepts with concerns; six fresh
  QUALITY passes are complete. Targeted documentation correction re-review and final integration
  review both accept with concerns; root accepted the bounded production milestone as
  `DONE_WITH_CONCERNS` at 2026-10-17 19:13:44 UTC. Human discovery, enjoyment, fairness, overjump
  recovery, and paired comfort remain unknown; the broad gameplay goal remains active. See the
  [acceptance record](active_plans/reports/GUT_FEELING_ACCEPTANCE.md) and
  [production ledger](active_plans/active/EARLY_MOVEMENT_RELAY.md).
- Follow-up native evidence and root replay demonstrate one cooperative opening-miss recovery at
  1607 frames with both exits. This qualifies the earlier overjump-recovery unknown as a human
  outcome limit; it establishes neither human discovery nor universal recovery. The historical
  production acceptance remains dated 2026-10-17 19:13:44 UTC. See the
  Local-only recovery evidence: `tests/_temp/gut_feeling_recovery_evidence_closeout/REPORT.md`.

**Current44 difficulty refresh planning**

- Completed and root accepted the source-bound 44-room expert assessment as `DONE_WITH_CONCERNS` at
  2026-10-17 18:14:54 UTC. Final SPEC, distinct QUALITY, and targeted integration reviews ACCEPT.
  Manual first-pass date estimates remain unreliable; expert ratings do not measure human outcomes;
  E's redundant generic route steps remain disclosed; control friction is unknown; and historical
  route limits remain. The current44 inputs stay immutable while the active source/build freeze ends.
  Root approved a private additive early barrier-free movement co-op prototype using existing
  mechanics and physical villains, with distinct enabling roles and all 44 successful rooms/order
  preserved; no new room had been implemented at this assessment-closeout checkpoint (2026-10-17
  18:14:54 UTC). Gut Feeling was added later as level 45.
  The current pointer records eight dimensions, separate puzzle/platforming axes, unknown control
  friction, and the evidence limits. Findings propose an additive early barrier-free cooperative
  movement prototype; the structural barrier counts do not establish boredom or player impact. See
  the [assessment closeout](active_plans/reports/difficulty_44_acceptance.md),
  [current pointer](LEVEL_DIFFICULTY.md), and [refresh ledger](active_plans/active/difficulty_44_refresh.md).

**Liver tissue profile experiment**

- Root accepted the one-SVG liver profile update as `DONE_WITH_CONCERNS` at 16:19:53 UTC. The
  promoted original Astra art has larger folds in thin surfaces and fuller deep masses. The 44 room
  definitions and order, renderer contract, physics, controls, state, configuration, and other art
  remain unchanged. Code/build checks, both smokes, source/distribution/HTTP asset identity, 71
  mapped-source checks, seven focused views, root visual review, SPEC, QUALITY, and integration
  review passed. Repeated cadence, narrow-end truncation, and limited thin-strip volume remain;
  human outcomes and remote publication are unmeasured. See the
  [acceptance report](active_plans/reports/liver_tissue_profiles_acceptance.md) and
  [plan](active_plans/active/liver_tissue_profiles.md).

**Step On It acceptance**

- Root accepted **Step On It** (`level_44`) as `DONE_WITH_CONCERNS` at 15:57:07 UTC. The room follows
  **Your Turn to Carry** (`level_30`) and precedes **Cellpool Lane** (`level_43`); all previous 43
  definitions and their relative order are preserved. Native replays, existing progress probes, the
  96-check code gate, official build, two browser smokes, six production captures, root visual
  review, public SPEC, QUALITY re-review, and integration review are recorded. Human discovery,
  fairness, enjoyment, difficulty, and paired comfort remain unknown; the broader gameplay goal
  remains active. See the [acceptance report](active_plans/reports/step_on_it_acceptance.md) and
  [production plan](active_plans/active/villain_step_return.md).

**Physical villains and counterweights**

- Implemented the global physical default: Gem and Cana are solid, pushable, and jumpable in every
  authored villain scene while their weapons stay active. Body position drives the attack origin;
  Gem's platform-position fallback and the opt-in flag are removed. Acid absence remains four
  seconds; the bound projectile is removed and the attacker resumes after return. Active villains
  contribute one unit to counterweight load, and active bodies stop weapon-driven cargo; only
  heroes satisfy the two-hero clutch.
- Applied all 43 production room homes and approved geometry. Level 25's production route clears
  at frame 2065; the Level 35 two-parcel source and hint are applied and its production route clears
  at frame 756; the optional trial route clears at frame 1175. Each has zero deaths. See the
  [physical-villains plan](active_plans/active/physical_villains.md).
- Fresh native evidence passes 43 room routes, three recovery cases, and the separate trial (47/47
  outcomes); root's independent replay passes all 47 with stable source. A 12-second idle probe
  keeps all 43 rooms playing without falls or respawns. Root reports 96 code checks and 2/2 standard
  built-browser smokes. The final local and served bundle match
  `26375ae4efc0b8a16ed240d77e79d2fa952a85c9771814d30ee5498cb7233a7a`; all 68 bundled sources
  match the source map with no drift. Eight focused browser cases pass on this bundle: five clears
  and three body contacts, all with zero deaths and browser errors. Root reviewed all eight original
  captures and accepts their sampled visual states. The global SPEC review accepts. All six QUALITY
  passes completed: Plan/Test/Comment found no blocker; initial Style/Legacy exclusion and Docs
  stale-status findings were corrected and accepted by fresh targeted review. Integration accepted
  with concerns and no blocker. Root accepted the
  bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-17 14:47:25 UTC. Human discovery, enjoyment,
  and paired comfort remain unmeasured; the broader continuous gameplay goal remains active.
- Corrected the two Usage descriptions and physical-ownership consequence to report applied Level 35
  source, the 756-frame zero-death native route, and current-bundle browser clear. The settled design
  points to the durable acceptance report for mutable review status.
- Earlier private feasibility found 43/43 baseline clears and physical-clone outcomes of 18
  complete, 23 still playing, and 2 dead. Level 25's unsuccessful floor/lift placements and Level
  35's rejected one-sac and underfloor-roost designs remain brief failure history, not current
  instructions. See the [active plan](active_plans/active/physical_villains.md) for current evidence.
- A late idle diagnostic found Gem self-fall loops in Levels 10 and 39. The homes were corrected
  only to existing support at `(680,310)` and `(650,390)`; unchanged production routes, the
  12-second idle probe, and focused contacts now pass. Fresh correction review accepts.

**Patient body map progress**

- Closed the bounded patient-map milestone as `DONE_WITH_CONCERNS` at 13:05:53 UTC. Current-build first-clear and seeded-finale captures, integration/SPEC/QUALITY rechecks, root code/build/smoke gates, and source/served identity are recorded in the [acceptance ledger](active_plans/reports/patient_body_map_acceptance.md), with limits stated there.

**Cellpool Lane production acceptance**

- Root accepted the additive `level_43` production milestone as `DONE_WITH_CONCERNS`. Native and
  focused browser routes, root code/build checks, both standard smokes, six fresh QUALITY passes,
  integration review, and source/build/served identity passed. The original 42 definitions retain
  their relative order and `level_20` remains last. Human readability, discovery, fun, and difficulty
  remain unmeasured; current41 stays frozen and does not assess this room. See the
  [acceptance receipt](active_plans/reports/CELLPOOL_LANE_ACCEPTANCE.md) and
  [production plan](active_plans/active/CELLPOOL_LANE_ROOM.md). The Level 3 lateral cause remains
  unresolved.

**Neural Misfire**

- Added Neural Misfire as stable `level_42` after `level_31` and before `level_38`, preserving the
  prior 41 serialized room definitions and their relative order. Native replay, root's codebase gate,
  official build, standard smokes, built-browser clear and delayed-miss/later-FLOAT recovery, and
  source/distribution/served identity pass. Root reviewed all 14 original captures. Next/save/reload/
  42-row-menu checks were not run and are not required gates. Fresh integration accepts with concerns;
  root accepts the milestone as `DONE_WITH_CONCERNS` at 10:48:39 UTC. See the
  [acceptance receipt](active_plans/reports/NEURAL_MISFIRE_ACCEPTANCE.md).

**Cana's Friendly Fire and Current Campaign**

- Added **Cana's Friendly Fire** as stable `level_41` at display position 11, after `level_07` and
  before `level_11`. Pac starts Gem's bubble attack; Isp FLOATs to the upper latch and opens Pac's
  lower route. Cana's optional boomerang gives active pushable Gem one actual-direction horizontal
  shove per full flight. Gem retains the four-second acid return and bubble-gun lifecycle. Root
  accepts this bounded milestone as `DONE_WITH_CONCERNS`. All 41 native rooms and the fresh empty-save
  browser journey completed under scripted inputs; saves, reloads, Next 41-to-11, finale replay, and
  the synthetic legacy40 diagnostic also passed. The diagnostic is not a real-user save import.
  Human play remains unknown. See the [Friendly Fire plan](active_plans/active/friendly_fire_room.md)
  and transient receipt `tests/_temp/friendly_fire_closeout/REPORT.md`.
- The current roster is now 41 rooms. Current38 remains frozen historical evidence. Root approved
  and released the full current41 snapshot/capture at 08:27 UTC after source, build, served-artifact,
  and absent-run-directory checks. The assessment does not inherit current38 scores. See the
  [current41 assessment plan](active_plans/active/difficulty_41_refresh.md) and its
  [acceptance report](active_plans/reports/difficulty_41_acceptance.md).

### Behavior or Interface Changes

- In the final room, Gem now stands beside Isp's upper blue TARGET and aims his existing bubble
  across that approach. The hint explains how to retake blue TARGET after a bubble interrupts the
  charge; Cana remains a threat along Pac's lower route.

- Clarified only the level05 subtitle and hint for Pac's STEADY-to-RESCUE handoff. Current build
  captures, source checks, standard smokes, SPEC, and QUALITY are recorded. Integration accepts with
  concerns; targeted changelog correction re-review accepts. Root accepted the bounded milestone as
  `DONE_WITH_CONCERNS` at 2026-10-17 19:31:35 UTC. Human effectiveness and fun remain unmeasured. See the
  [handoff plan](active_plans/active/CELL_SHUFFLE_HANDOFF.md) and
  Local-only closeout evidence: `tests/_temp/cell_shuffle_handoff_closeout/REPORT.md`.

**Boneheads lower-jump recovery**

- Added the static `lower_return_fold` catch surface below the existing lower jump and updated the
  hint to explain how to jump out from it. The assembled 43-room comparison shows only `level_39`
  platforms and hint changed. Fresh-state native production replays complete the ordinary route at
  frame 694 and late-miss recovery at frame 778, both with zero deaths. Root accepted
  `DONE_WITH_CONCERNS` at 15:21:55 UTC after 96 code checks, 2/2 standard build smokes, matching
  disk/served bundles, 68 matching bundled sources, and review of the normal, catch, and recovery
  captures. Human fun, discovery, comfort, and difficulty remain unmeasured. See the
  [acceptance report](active_plans/reports/movement_followup_acceptance.md) and
  [movement follow-up plan](active_plans/active/movement_followup.md).

**Level 4 ferry footing**

- Extended only the `level_03` ferry width from 280 to 310 px so it meets the right shore at
  maximum travel. The approved change preserves the ferry origin, height, motion cycle, other room
  data, and cooperative pads. Root accepted `DONE_WITH_CONCERNS` at 12:39:46 UTC after native,
  semantic, code/build, smoke, review, and three-view browser evidence. The ordinary browser clear
  appended 60 right frames after the supplied route stopped 1.31 px short; native replay clears as
  supplied. Human controls and playability remain unmeasured, and all falls are not guaranteed
  resolved. See the [acceptance receipt](active_plans/reports/LEVEL4_FERRY_DOCKING_ACCEPTANCE.md)
  and [ferry footing plan](active_plans/active/LEVEL4_FERRY_FOOTING.md). The receipt now uses
  inline paths for ignored local evidence and removes the unconfirmed Level 3 concern; exact human
  controls and resolution of all falls remain unproven.

**Carry through jump descent**

- Corrected standing-passenger vertical carry so a passenger follows either hero through an ordinary
  jump's ascent, apex, descent, and landing. The passenger still clips against their own solids and
  releases when their own obstacle catches them. Ceiling pair clipping and rider walk/jump release
  remain intact. Root accepted `DONE_WITH_CONCERNS` at 11:23:40 UTC after SPEC, QUALITY, integration,
  physics, codebase/build, 42-room fresh-state campaign, semantic-preservation, independent native,
  and focused browser evidence passed. This is not a Level 3 bridge diagnosis or a new room. See the
  [plan](active_plans/active/CARRY_DESCENT_FIX.md) and
  [acceptance receipt](active_plans/reports/CARRY_DESCENT_ACCEPTANCE.md).

**Split Decision cues**

- Clarified the level 11 stair cycle and reciprocal latch effects in its subtitle and Cana's opening.
  The route, mechanics, and full Hint remain unchanged; the 42-definition comparison allows only
  those two fields. Root accepted as `DONE_WITH_CONCERNS` at 11:03:30 UTC after SPEC, QUALITY,
  integration, focused semantic/native evidence, codebase/build checks, two standard browser smokes,
  and review of the three original built-browser views. No human readability or difficulty change is
  claimed. See [the plan](active_plans/active/SPLIT_DECISION_CUES.md) and
  [acceptance receipt](active_plans/reports/SPLIT_DECISION_CUES_ACCEPTANCE.md).

### Fixes and Maintenance

- Allowed `Tab` and `Enter` in the gameplay screenshot helper's fixed key whitelist so capture
  cases can navigate the existing Hint UI with ordinary keyboard input. The capture loop already
  dispatches validated keys; the external browser capture is pending.

**44-room audit documentation**

- Marked the patient-map and physical-villain 43-room acceptance evidence as historical while
  retaining its original counts and hashes. Clarified the current roster-derived patient-map rule,
  linked Step On It coverage, and recorded the six-pass 44-room audit and its finding dispositions.
  The earlier 43-room audit remains below as a historical checkpoint.

**Player README gameplay screenshots**

- Replaced the two managed README screenshots with current-build views of Cana's SHOVE interrupting Pac while Isp rides along, and Gem's post-dunk splash with Isp FLOATing. The original captures passed served-build identity checks and root visual review; the post-dunk frame does not show the exact boomerang contact.
- Removed the unreferenced `villains_first_level.png`. Retained `cana_boomerang_console.png` because archived gameplay reports still reference it.

**Player README accuracy**

- Corrected the cast descriptions to match their pad roles and bubble effects, and recorded the level 4
  moving-platform clarification.

**Player-facing README**

- Reworked the README as a player landing page, putting the live GitHub Pages game link
  at the top and centering the page on the heroes, shared-keyboard controls, and teamwork.

**Acid tissue renderer integration**

- Recorded root's 12:18:04 UTC approval of the frozen acid tissue atlas and its SHA-256 in the art
  ledger. Integrated the approved atlas into the shared slime hazard renderer with lazy loading,
  rectangular fallback, existing bubbles and danger edge retained, and registered it in the
  required, copy, and output-check asset lists. Fresh SPEC and QUALITY reviews accepted, integration
  accepted with concerns, and root's semantic, physics, repository, build, smoke, and four-view
  gates passed. Root accepted `DONE_WITH_CONCERNS` at 12:28:04 UTC. The renderer probe covered
  unready/failed-image fallback, though no browser image-load failure was induced; human readability,
  discovery, fun, and difficulty remain unmeasured. See the
  [acceptance receipt](active_plans/reports/ACID_TISSUE_ACCEPTANCE.md) and
  [art plan](active_plans/active/ACID_TISSUE_ART.md).

### Decisions and Failures

- The unbound Cana attack displaced the sac before Pac secured KEEP LOWER. Deferring its start until
  `pac_lower_latch` corrected that failure mode. Root accepted the bounded implementation as
  `DONE_WITH_CONCERNS` at 2026-10-18 02:22:02 UTC after the recorded code/build/smoke gates, five
  built captures, and SPEC, QUALITY, and integration reviews. The broader gameplay goal remains
  active; see the [acceptance ledger](active_plans/active/GUT_INSTINCT_CANA.md).

- Parked the unaccepted Level 16 bridge-guard variant. Its ordinary route and Pac-only jump trial
  fail after Gem is shoved into the target approach; a corrected jump route clears at frame 1522,
  while the supplied ordinary recovery schedule does not clear the touching Gem/Cana pair over
  blue TARGET and the candidate 1522 jump route does. The added congestion and choreography do
  not justify a shared engine change. Keep the original Gem ferry gag; adopt no engine algorithm.
  These are results for the recorded trials, not proof that every recovery input fails. See
  [the parked plan](active_plans/active/LIVER_BRIDGE_CONFRONTATION.md) and preserved trial reports
  in `tests/_temp/liver_variant_park/experiment_snapshot/`.

**Acid tissue art milestone**

- Approved a bounded plan to improve the shared slime appearance across floor pools and suspended
  pockets, with root review of the SVG before integration. The gameplay replay check closed as
  `DONE_WITH_CONCERNS / KEEP`: independent 120 Hz routes cleared level 7 in 1,485 frames and level
  20 in 1,326 with matching exits; the evidence supports no production tune. Updated the finale scout
  role sentence to identify Isp at STOP and removed the manager inference from human guidance.
  Human discovery, fun, and difficulty remain unmeasured. See the [art plan](active_plans/active/ACID_TISSUE_ART.md),
  [replay check](active_plans/active/RETRY_GAMEPLAY_CHECK.md), and
  [gameplay direction](active_plans/reports/gameplay_direction.md).

**Gameplay decision check**

- Added a bounded ledger for two independent ordinary-input gameplay scouts, with root's decision
  pending their role, setup, and recovery evidence. Recorded the user's uncertainty about the level
  involved in the sideways-motion report without inferring a diagnosis. Corrected the Cellpool Lane
  receipt to describe root's preservation-contract check and two route replays accurately. See the
  [active check](active_plans/active/RETRY_GAMEPLAY_CHECK.md),
  [acceptance receipt](active_plans/reports/CELLPOOL_LANE_ACCEPTANCE.md), and
  [human guidance](HUMAN_GUIDANCE.md).

**Decisions and Failures**

- Shelved the private SHOVE carry-room hypothesis after an authored ordinary Isp boarding and
  same-input comparison. Cana's actual right-going hit adds 53 px of Pac reach, but both attack
  and no-attack jumps lose rider support near the apex/descent and fail the landing. The trace
  points to ordinary carrier descent support; this experiment makes no production physics change.
  See [the plan](active_plans/active/SHOVE_CARRY_FEASIBILITY.md) and transient native report
  `tests/_temp/shove_carry_feasibility/REPORT.md`.
- Rejected the private Fold and Ferry (`level_44`) movement candidate: its 3458-frame attempt did not
  clear, its proposed partner boost was unnecessary, and both heroes could ride the 90-pixel ferry
  together, removing the reciprocal role split. The fixture remains unregistered; this result rejects
  this candidate only. See temporary evidence in `tests/_temp/movement_carrier_private/` and the
  [movement follow-up acceptance](active_plans/reports/movement_followup_acceptance.md).
- Root accepts the private full-room crossfire prototype as `DONE_WITH_CONCERNS` for production
  preparation. The ordinary route starts Gem's bubble gun with Pac, then uses Isp's FLOAT route to
  open Pac's lower path; a safe idle run and Gem's resumed bubble are recorded. The missed-shot run
  recovers Gem but does not clear either exit. The proposed `level_41` production plan remains
  `ROOT_APPROVED_PRODUCTION_PREPARATION`; root froze the contract for a fresh implementation
  handoff, with production acceptance still pending.
  See [crossfire_room_prototype.md](active_plans/active/crossfire_room_prototype.md),
  [Cana's Friendly Fire](active_plans/active/friendly_fire_room.md), and transient native report
  `tests/_temp/crossfire_room_prototype/REPORT.md`.
- Root accepted the bounded Level 3 surface-texture anchor as `DONE_WITH_CONCERNS`. Platform DNA
  passes fixed phase 0 at the existing renderer call site and follows the live target rectangle;
  other target kinds retain elapsed-time animation. Root reports `./check_codebase.sh` passed
  (both TypeScript checks, lint, format, and 92 checks), the official build and 2/2 standard smokes
  passed, and the served bundle matched at HTTP 200. Four dedicated captures had zero deaths or
  errors; root inspected all four. Fresh SPEC, distinct QUALITY, and integration accept with
  concerns and no blocker or plan drift. The 2s/3s visual comparison is qualitative. The change
  does not show a player riding the platform, prove wall animation, or resolve the reported physical
  or perceived motion. See
  [SURFACE_TEXTURE_ANCHOR.md](active_plans/active/SURFACE_TEXTURE_ANCHOR.md).
- Root kept the current villain-feedback presentation after the scout found existing named and timed
  effects, reactions, recovery, and pad cues, with no demonstrated production redesign gap. The
  reported level-3 horizontal motion remains unresolved; optional human clarification is pending and
  nonblocking. Root set aside the living-valve doorstop hypothesis: the engine allows retreat from
  closing overlap, not body-held opening, and an ordinary partner gate repeats the relay.
- Root accepted the purposeful-collapse experiment as `DONE_WITH_CONCERNS` after the final native
  runner completed an ordinary clear (6.192 s) and premature-FLOAT recovery (9.400 s), both with
  separate exits and zero deaths, plus fresh SPEC, distinct QUALITY, and integration reviews.
  Scripted evidence supports the roof-opening route and one recovery but does not establish human
  readability, enjoyment, difficulty, or production behavior. Root approved a separate bounded
  production plan for stable `level_40`, **Bursting Point**, after `level_13` and before `level_24`
  at display position 19. See
  [PURPOSEFUL_COLLAPSE_EXPERIMENT.md](active_plans/active/PURPOSEFUL_COLLAPSE_EXPERIMENT.md) and
  [BURSTING_POINT_ROOM.md](active_plans/active/BURSTING_POINT_ROOM.md).
- Root accepted **Bursting Point** (`level_40`) as `DONE_WITH_CONCERNS` after native and built-browser
  clear/recovery evidence, root review of seven original views, accepted production SPEC, exactly six
  fresh QUALITY passes, and fresh integration acceptance with concerns. The prior 39 definitions
  and order compare unchanged; the room is liver position 19, `level_24` is position 20, and
  `level_20` remains last at position 40. Browser evidence confirms zero deaths, retries, and errors,
  save/Next/reload/replay, all 39 prior IDs, and served-bundle identity. The Plan finding was
  reconciled against the saved baseline; the proposed permanent placement test was deferred under
  KISS. The first failed browser input JSON was overwritten; the retained failed JSON is a
  reconstruction, with the contemporaneous failure log and corrected successful receipts retained.
  The accepted 39-room journey remains historical; there is no full 40-room journey or human-play
  result. Stable `level_39` and `level_40` remain difficulty-unassessed, and `current38` stays frozen.

### Developer Tests and Notes

**Current53 paired difficulty assessment**

- Root released source for paired second passes after accepting the complete first-pass gate with
  concerns. After root's explicit GO at 12:58 UTC, the combined report command validated all 53 final
  records and generated the campaign report, map, chart, and 53 dossiers. At that report checkpoint,
  practical synthesis and review were still open. Root accepted the complete assessment with concerns
  at 13:19:42 UTC; the active source/build freeze ended and captured artifacts remain frozen. See the
  [active plan](active_plans/active/difficulty_53_refresh.md) and
  [current53 run receipt](difficulty_runs/current_53/README.md).

**Current 41 Difficulty Assessment**

- Completed and root accepted the full 41-room paired expert assessment as
  `DONE_WITH_CONCERNS` at 09:27:51 UTC. All first-pass records and locks remain intact; the eight
  original author groups completed paired source-aware records. Full validation and report
  generation passed. The accepted map and report remain frozen to their captured source/build
  baseline. All first-pass platforming scores are unknown; expert scores and scripted routes do not
  establish human outcomes or shared-keyboard comfort. Current38 remains historical, with no scores
  inherited. See the [acceptance report](active_plans/reports/difficulty_41_acceptance.md).
- Root released the bounded Level 3 bridge-readability implementation at 09:28 UTC. The plan now
  requires the always-visible subtitle "Pac holds STEADY until Isp reaches RESCUE" and state-derived
  tearing in place with a fixed landing rim. It does not claim to diagnose the reported sideways
  motion. The accepted assessment remains bound to its captured pre-change source/build. See the
  [bridge plan](active_plans/active/BRIDGE_READABILITY.md).
- Root accepted the bridge-readability milestone as `DONE_WITH_CONCERNS` at 09:45:16 UTC after
  reviewing five fresh built-browser captures. The shared renderer now shows state-derived bruising
  and progressive tears with a fixed rim, and Level 3 has the always-visible STEADY/RESCUE subtitle.
  Native routes, canonical checks, official build, and standard smokes pass. The reported lateral
  motion and human fall risk remain unresolved; current41 stays frozen to its earlier source/build.
  See the [acceptance report](active_plans/reports/bridge_readability_acceptance.md).

**Evidence and Playability**

- Completed aggregate ordinary-input native route replays for all 39 rooms in the pre-Bursting Point
  roster, with each route
  reaching both exits from a fresh simulation state. A separate check confirms the 39 unique roster
  IDs, valid route intervals, unchanged accepted baseline hashes, and `level_20` last. A fresh
  empty-save built-browser journey then completed all 39 in current order, one attempt each, with
  zero deaths, retries, or browser errors. Natural save progress survived reloads at positions 10,
  20, 30, and 39. The finale ending appeared before the final reload with no Next control; after
  reload, its saved completion remained and the finale reopened through Levels for replay. Earlier
  failed runs and temporary browser timing adjustments remain documented separately; the final run
  used the accepted unchanged source and bundle. Scripted operability does not establish human
  discovery, comfort, or enjoyment. Fresh SPEC, distinct QUALITY, and integration each accept with
  concerns; root accepts the bounded plan as `DONE_WITH_CONCERNS`. The reviews disclose that the
  initial `level_04` miss survives only as a scalar summary and an earlier position-24 trace was
  overwritten; neither is reconstructed, and neither blocks the accepted final journey. This is
  historical 39-room proof, not a full journey through the current 40-room roster. Root's next
  direction is a bounded current-build level-3 motion observation; the continuous gameplay goal
  remains active. See
  [active_plans/active/CURRENT39_PLAYABILITY.md](active_plans/active/CURRENT39_PLAYABILITY.md).

**Developer Tests and Notes**

- Added a private level-32 loading-dock fixture and ordinary-input native route/recovery evidence.
  Pac physically pushes Gem onto the existing powered ferry, while the accepted bubble/FLOAT/latch
  route remains intact. The candidate awaits root review and a built-browser view; no campaign source
  or generated artifact changed. See `tests/_temp/villain_boarding_prototype/REPORT.md`.

- Root accepted preparation for the new 53-room expert assessment before author dispatch; the
  timestamped confirmation to the first-gate coordinator was recorded at 11:47:07 UTC after checking
  all observation packet/image identities and viewing two original captures. All 53 ordered
  first-pass hypotheses are now locked and passed structural/provenance validation. Root reviewed
  the full set and five qualitative reports, accepted the first-pass gate with concerns, and released
  source for paired second passes at 12:10:20 UTC; the full assessment remains open.
  Root did not accept the B2, C, or D attempts as clean evidence after confirming future-mechanics
  exposure. Their 19 records, 19 locks, and C's misplaced handoff were preserved and hash-verified
  before the invalid canonical copies were removed; replacements B3, C2, and D2 completed clean
  first-pass handoffs.
  Current46 remains the latest accepted map until the full53 assessment is reviewed and accepted.
  See the [active plan](active_plans/active/difficulty_53_refresh.md) and
  [current53 run receipt](difficulty_runs/current_53/README.md).
- Closed the purposeful-collapse private checkpoint, then completed the bounded **Bursting Point**
  production milestone and Phase B documentation. Root-reported source checks, official build and
  standard smokes passed; final native/browser receipts and all fresh reviews support the accepted
  `DONE_WITH_CONCERNS` disposition. This documentation update did not rerun source, build, or browser
  checks. The next bounded observation is level-3 motion on the current build; the continuous gameplay
  goal remains active.

**Documentation audit corrections and changelog rotation**

- Added player-facing patient-map discovery text to README and Usage; corrected the patient-map
  decision status and ferry heading; wrapped the cast bullets without changing their mechanics.
- Organized this day under the canonical changelog categories and rotated complete October 15
  and 14 blocks to `CHANGELOG-2026-10a.md`, keeping October 17 and 16 active.
