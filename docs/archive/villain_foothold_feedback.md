# Villain foothold feedback

## Outcome

The shared villain renderer derives riding contact from an active body and a grounded hero standing
on it during play. Riding and existing pushes reuse the countered pose and the villain's push quip.
Exit, interruption, and escape retain their existing priority. The active weapon/body pose keeps its
attack cues; physical-contact speech reuses the existing push-quip slot and can appear during riding
plus windup, as it already can during pushing plus windup. This speech does not interrupt an attack:
weapon objects, muzzle/aim/windup/throw actions, and attack updates remain active, and reactions do
not disable or stagger attacks. Collision behavior and room data are unchanged.

## Acceptance and verification

Root accepted this bounded milestone as `DONE` at 2026-10-18 06:44:23 UTC after personally reading
the final integration report and reviewing all five original captures. Fresh SPEC and QUALITY
reviews, the corrected priority documentation review, and integration all accept. The integration
report is `REPORT.md`;
the concise acceptance record is `REPORT.md`.

Root reports `./check_codebase.sh` exited 0 with 96 existing checks plus type, lint, and format
checks; `./build_github_pages.sh` exited 0; and `./run_playwright_tests.sh` exited 0 with its two
existing smokes. The renderer SHA-256 is
`76d7d4a8c2aa9fc3396861449b29f186968badf5c56c58c8d77e28b1d2603442`. The built `dist/main.js` hash
is `a8705ef9e55816634f918bef67ef29415c5ae4c63c19b9213b0d39d5fdef9600`; its source map hash is
`06f6f16042babab0a87c53915f836395747a54c6d46d0533ea220e8f9648b0ee`.

The five original browser captures cover Gem contact, Gem after leaving, Cana contact during attack
windup, Cana after leaving, and **Step On It** completion. Their receipt records the expected level
and phase, no browser errors, and built bundle hash
`a8705ef9e55816634f918bef67ef29415c5ae4c63c19b9213b0d39d5fdef9600`. The earlier native replay
traces preserve contact timing, attack phases, and leave intervals for the two contact cases. The
one-time replay command and helper were removed at closeout; its frozen traces, cases, images, and
receipts remain under `tests/_temp/`.

No new 50-room journey was run for this renderer-only change. The earlier accepted journey remains
historical evidence for its own build. No permanent renderer test was added: the focused captures
and temporary traces establish this bounded presentation behavior, with no separate stable contract
identified for a permanent test.

## Limits

The renderer observes current contact each frame; it adds no event history, timer, or dialogue cooldown.
The existing quip placement can omit dialogue when no unoccupied screen position is available.
Sampled captures and scripted traces do not establish human discovery, fun, fairness, or comfort.
The broader continuous gameplay goal remains ACTIVE; the campaign remains at 50 public rooms, with
no public level 51 authorized by this milestone.
