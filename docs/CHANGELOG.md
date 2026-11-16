## 2026-11-15

### Additions and New Features

- Added independent two-thumb pads for Isp and Pac with movement plus held jump, captured dragging,
  visible zone feedback and labeled instructions. Coarse-pointer landscape uses external rails and
  the full game aspect; portrait pauses with a rotate prompt and explicit resume.

### Behavior or Interface Changes

- Keyboard and touch holds now combine independently at physics sampling. Lifecycle boundaries
  clear both sources. Existing keyboard mappings, physics, levels and saves remain intact.

### Fixes and Maintenance

- Corrected the mobile completion ledger's superseded browser count and parent-review status
  after the six-pass audit.
- Restored mobile Hint visibility in the existing scrollable status area; opening it replaces
  status text and closing it restores status without covering the world or changing desktop hints.
- Formatted two pre-existing hero-feedback tests that failed the baseline Prettier gate.
- Archived 108 completed, accepted, or set-aside plan records under `docs/archive/` and repaired their local links and referring documentation; reports and audits retain their existing homes. Normalized every changelog day to canonical category order while preserving all 315 historical entries and original section context; strict parser warnings fell from nine to zero.
- Converted 291 unavailable historical observation links in 26 documents to plain citations with their labels and full original paths; no evidence was redirected to unrelated same-named difficulty records. The absent raw observations remain unavailable.

### Removals and Deprecations

- Removed the two permanent hero-feedback and support-pose Node suites (nine cases, 255 lines) that froze rendering feedback and internal pose state. Retained distinct physics, interference, counterweight, boss, recoil, save-migration, touch-composition, and difficulty-provenance protection; visual feedback and pose regressions now require visual review.

### Developer Tests and Notes

- Added native-tap Hint coverage at 844x390 and 568x320. Final checks passed all 92 Node tests and
  four browser tests; unchanged five-route touch replays passed again on the corrected final build.
- Added focused input composition and real Chromium CDP two-touch coverage. Exact route evidence,
  build identity, commands and remaining limits are recorded in the mobile acceptance report.
- `npm ci` used the existing lockfile and writable cache after default cache access failed;
  npm reported nine existing moderate advisories. No dependency upgrade was made.
- Cleanup verification passed the canonical code gate (83 retained Node cases), production build, and 1,643 focused Markdown-link, guidance, source-length, ASCII, and whitespace checks. All four browser test/helper files stayed byte-identical and browser execution was excluded. The legacy audit found no unreferenced owned source or asset and no authored source at the 900-line split advisory, so no gameplay code was removed or split.
## 2026-10-20

### Behavior or Interface Changes

#### Completion-screen artwork

- Changed recovered skin from lavender to warm flesh tones while preserving the approved
  sickly-purple starting palette. Skin recovery remains cumulative across all six regions;
  the final healed tumor skin patch matches. Refreshed the comparisons and completion views.

#### Completion-screen artwork

- Replaced the static base patient with progressively recovering skin, supporting tissue,
  local bruising and facial expression. Each region restores a broad area of the body;
  the endpoint retains purple identity with warm lavender skin and a pink torso.
  Refreshed all six region pairs and added an editable base-body-only progression proof.
  The previous review accepted organ-scale changes but missed the unchanged base patient;
  acceptance now requires visible recovery with organ overlays hidden.

#### Completion-screen artwork

- Captured and reviewed equal-sized whole-patient before/after pairs for all six regions.
  Added restored intestinal folds, marrow blood cells, liver vessels and brain highlights;
  replaced the healed tumor lump with a small repair site and removed cleared-region tint
  seams. See the [region review](art_reviews/region_recovery/README.md).

#### Completion-screen artwork

- Reduced pink in cancer highlights, reserving the lighter pink/coral range for healthy
  tissue while retaining dark-red and burgundy overlap.

#### Completion-screen artwork

- Restored purple skin and established overlapping healthy/cancer color ranges. Added violet,
  deep-red and maroon lesion gradients with contrasting core hues, preserving the existing
  shapes, lighting and whole-territory lung restoration.

#### Completion-screen artwork

- Strengthened lung recovery across whole territories with warmer tissue, membrane highlights
  and clearer airways, preserving the same anatomy at 0/6, 3/6 and 6/6. Refreshed the
  [three-state comparison](art_reviews/lung_recovery/comparison.png).

#### Completion-screen artwork

- Differentiated skin, lungs, brain, intestine, liver and marrow colors; reduced the common
  disease tint so cancer masses contrast with recognizable surrounding tissue.

#### Completion-screen artwork

- Refined the lung proof with muted flesh and maroon, unequal contours, branching bronchi,
  and three irregular cancer masses with darker nodules and tendrils. Removed the whole-body
  purple wash and made the facial expression reflect existing recovery progress.

#### Completion-screen artwork

- Added the three-column recovery illustration and a lung surface proof with coral shading,
  alveolar details, mottled disease, irregular growths, and curved restoration territories.
  Preserved completion information and existing actions. Other organs retain the initial
  surface treatment pending the lung visual review. See [lung proof](art_reviews/lung_recovery/README.md).

### Fixes and Maintenance

#### Repository checks

- Repaired missing documentation targets with the existing link-flattening helper, retained
  valid links, corrected guidance entry structure, and removed completed temporary browser
  drivers. Consolidated build asset validation/copying around one list and rotated older
  changelog days using the repository helper.

## 2026-10-19

### Additions and New Features

#### Completed Milestones

- Integrated the approved `level_19` Cana finish candidate and accepted the bounded milestone as
  `DONE_WITH_CONCERNS` at 00:14:39 UTC. The STOP/STEADY/RESCUE opening remains; blue TARGET steadies
  the high bridge, and Cana guards the far finish with nearest-hero boomerang aim. Registered routes
  clear in 978 and 1000 frames with no deaths. Browser ordinary play clears in 8.167 seconds with
  zero deaths and 2/2 sparks, saves 57/58, advances to `level_20`, and restores Replay/Ready after
  reload. The late retake follows Pac's arrival at the far target; it does not establish recovery
  from a missed crossing. Root reviewed all seven original views; fresh
  SPEC passed, QUALITY and integration passed with concerns. This is not a full-58, human-play,
  discovery, or enjoyment claim. The current57 difficulty map remains frozen and does not rate this
  revision. See the [Cana finish ledger](archive/CANA_FINISH_PROTOTYPE.md) and
  `PHASE_B_REPORT.md`.

### Fixes and Maintenance

#### Documentation

- Restored 37 altered `current_58` first-pass records from exact lock-matching Git blobs. All 58
  first-pass files now parse and match their unchanged locks; all 58 paired records parse and cite
  the matching first-pass hash. Paired records remain pending validation. See the
  `README.md` and
  [assessment ledger](archive/CURRENT58_ASSESSMENT.md).

### Removals and Deprecations

#### Documentation

- Removed raw observations from 11 superseded difficulty runs and 947 obsolete scratch directories
  (6,979 files; about 1.76 GiB). Retired six low-value Node tests, reducing that suite from 96 to
  90; all 90 remaining tests passed. Kept current57/current58 captures and the legacy observation
  directory, which remains the assessor's default input. Historical reports, scores, and paired
  records remain as summaries; retired raw citations are no longer reproducible. See
  [difficulty assessment](LEVEL_DIFFICULTY.md).

### Decisions and Failures

#### Documentation

- Recorded tentative opening feedback: mostly good, with tight platform jumps as a possible area to
  inspect if specific evidence appears. No room or blanket physics change is inferred. See
  [human guidance](HUMAN_GUIDANCE.md).

### Developer Tests and Notes

#### Documentation

- Recorded accepted current58 assessment preparation and its chronological first-pass gates. The
  source/build freeze remains active; current57 stays the latest accepted map. Corrected the closed
  Crossed Paths probe record: the tested candidate is 1.5 seconds faster than the workable baseline,
  while minimum wait and human comfort remain unknown; level 22 stays unchanged.
  See `README.md`,
  [assessment ledger](archive/CURRENT58_ASSESSMENT.md), and
  [Crossed Paths probe](archive/CROSSED_PATHS_PACING.md).

#### Documentation

- Added a source-aware impact review for the current58 changes to levels 32, 58, and 19. It preserves frozen current57 scores, verifies earlier lessons against live campaign order, separates optional strategies from required work, and records bounded native/browser evidence and its limits. A native probe after Gem falls to the floor leaves full completion unresolved: Isp opens the upper latch, but neither the three continuations nor the extension reaches both exits; no trap or geometry defect is demonstrated. See [CURRENT58_DIFFICULTY_IMPACT.md](active_plans/reports/CURRENT58_DIFFICULTY_IMPACT.md), [gameplay direction](active_plans/reports/gameplay_direction.md), and [Gem floor recovery](archive/GEM_FLOOR_RECOVERY.md).

#### Completed Milestones

- Root accepted the full 58-room expert difficulty assessment with concerns. Fresh SPEC passed;
  QUALITY and integration found no material issues. The source/build freeze is released and the
  current58 report, map, and chart are now the latest accepted assessment; current57 remains
  historical. Practical read: keep the opening lung-recoil relay, watch late Cana's Control
  Freak-Out and the finale's 75/100 platforming estimates in ordinary play, and do not reorder rooms
  by score alone. Cargo Exchange has the highest puzzle estimate (93/100), with supported
  recoverability. These are expert estimates, not calibrated human outcomes. See the [assessment](archive/CURRENT58_ASSESSMENT.md),
  `README.md`, and
  [campaign difficulty index](LEVEL_DIFFICULTY.md).

#### Completed Milestones

- Independently completed and verified the fresh current58 browser journey: all 58 rooms in one
  attempt each, zero retries, ordinary Next progression, and the Patient Rescued ending. The fresh
  empty-save roster persisted across reloads; the frozen bundle identity matched and browser errors
  and failed requests were empty. This verifies prepared runtime and save progression, not human
  play, comfort, or enjoyment. See the `journey_receipt_2026-10-19T12-08-02-083Z.json`.
