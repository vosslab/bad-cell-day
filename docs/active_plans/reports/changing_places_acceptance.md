# Changing Places acceptance ledger

Status: **DONE_WITH_CONCERNS; accepted by root.** The selected revised `level_29`, **Changing
Places**, is delivered. It follows `level_27` and precedes `level_19`; `level_20` remains last, and
the existing 28 stable IDs retain their relative order. The continuous gameplay goal remains ACTIVE;
this delivery turn is PROGRESS. This addition has no difficulty score or new campaign map.

## Accepted design

Pac and one ordinary signal sac ride lift A while Isp rides lift B. The opposing loads bring the
lifts to a shared stop at `y=340`; Isp crosses the upper signal fold while Pac carries the sac over
the lower bridge. Pac transfers the same sac to B, both heroes reboard to reverse the lifts, and
each exits on the opposite side. The clutch pauses both lifts during crossing. Existing mechanics
provide the puzzle; no shared engine behavior, runtime state, new type, attack quota, or mandatory
villain hit was added.

The independent review identified a specific upper-fold order that could leave the only sac against
the left wall. The accepted recovery removes the upper-left outer wall and adds a local floor from
`x=180..220` at `y=340` plus a shelf from `x=0..180` at `y=326`, outside the shaft. The tested sac
stops at `x=180` and can be pushed back onto A. This addresses the reviewed mistake; it does not
promise recovery from every possible error.

Cana remains at `(630,515)` with the existing nearest-target boomerang: 1.2-second windup and
cooldown, speed 400, and radius 12. Ordinary routes include both a 360-tick pause that dodges and a
500-tick pause that hits Isp and then recovers. This supports an optional timing choice in scripted
routes; human enjoyment and interpretation are not established.

## Delivery and acceptance evidence

| Gate | Result |
| --- | --- |
| Production source and seven ordinary-input route proofs | PASS; includes wall recovery with and without Cana |
| TypeScript, lint, formatting, and repository code gate | PASS; two TS configurations and 82 Node checks |
| Official local Pages build and source/asset/served parity | PASS; build report verified 50 source-map entries, 18 SVGs, and 22 HTTP paths |
| Focused normal/reduced browser, recovery, lifecycle, and unchanged smokes | PASS; 2/2 smokes, no browser errors |
| Fresh empty-context 29-room campaign, Replay/reload, and finale | PASS; exact order, one Play plus 28 Next, zero retries |
| Genuine old-28 save compatibility and isolated Trial | PASS |
| Fresh SPEC and distinct QUALITY | ACCEPT / DONE_WITH_CONCERNS |
| Fresh integration and root acceptance | ACCEPT / DONE_WITH_CONCERNS |

The owner reports and detailed scripts are retained under `tests/_temp/changing_places_implementation/`,
`tests/_temp/changing_places_build/`, `tests/_temp/changing_places_browser/`,
`tests/_temp/changing_places_campaign/`, `tests/_temp/changing_places_spec/`,
`tests/_temp/changing_places_quality/`, and `tests/_temp/changing_places_integration/`. These are
temporary evidence paths, not permanent repository gates. Root independently replayed all seven
native routes and reviewed the browser, campaign, and integration evidence, including six images.

Source pins: `level_changing_places.ts` SHA-256
`4479af9ad29dca8d05b8b7a8314f4a3d800f912d771276fc940b3d3918bfaffa`; `levels.ts` SHA-256
`642f6012d0c1a49045743d7e4fb70592d86d0a664e4ab90ddd3754dd02804242`; serialized room SHA-256
`715481f81a77441f0007e71de0a81a93ea36ae48b1a67519c0cc3cc51245678d`. Accepted local artifact pins:
main `050e7cbf0a89981e4e93b71cb60e1d069ef424908cabdebd921d9fd5c8807d19`; map
`60d3b76eb8cd31f0245f5dc10dbd279f9b35fe1909c267f3c6d20696fcd6acab`. Build and served pins match.
This records local artifact acceptance, not deployment.

## Concerns and limits

SPEC and QUALITY found no blocker or plan drift. The Gem graphic overlaps the lower-left portion of
the status panel, the DIZZY `RECOVER` caption touches B's deck label, and the recovery shelf has no
explicit instruction. The main role and load cues remain readable; no source changes were selected.
First-time discovery of the shelf and warning, human enjoyment, novice difficulty, paired-keyboard
comfort, and all viewport sizes remain unmeasured. Scripted completion does not answer those
questions. Do not modify the frozen pre-Gem `current_28` assessment or claim a new numerical score.

Recorded check issues were resolved without product changes: the first Python suite run had one
Markdown-link failure because temporary evidence paths were written as links; those six references
were changed to inline code and the full rerun passed 2020/2020. A first sandboxed Chromium launch
failed at MachPort bootstrap before page load; a narrow retry passed. The first stdin replay helper
invocation could not resolve imports relative to its archived location; correcting only the
one-time invocation imports let all seven routes pass. An initial raw object comparison differed on
optional `undefined` serialization; the normalized comparison confirmed the old 28 definitions and
order were preserved. None of these were product failures.

The [Cargo Exchange acceptance ledger](cargo_exchange_acceptance.md) records the prior accepted
28-room baseline. Its build pins were main
`18110af62885e168fbec9b054ed000fc733ee8c47973eaf339c20af3f0e93319` and map
`69787512c7ffbf32a8e4a938006a54756f82e04ef1727497e4dbc032b143c47f`. The frozen
`README.md` is a pre-Gem snapshot; it is
unchanged and is not a current 29-room assessment.
