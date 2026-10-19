# Bursting Point recovery

Status: **DONE_WITH_CONCERNS; ACCEPTED BY ROOT** at 2026-10-18 13:37:18 UTC. Root read the final
integration report and original public captures. The three source changes, canonical checks,
official build, standard browser smokes, and public-build capture passed. The later `level_40` roof
change is after the frozen current53 difficulty snapshot; its level 40 recovery estimate was unknown
and does not score this revision. The broad game goal remains active.

## Outcome

After Pac ruptures the fragile roof, it stays open until a fresh level start. Isp can then use a
later Gem bubble to reach the high exit after missing the original opening.

## Scope

- Allow an unstable platform definition to set `resetAfter` to `null`, meaning it does not regrow
  automatically.
- Keep runtime `respawnTime` numeric and preserve existing countdown and stabilization behavior for
  finite reset durations.
- Set only `level_40`'s `fragile_roof` to `null`; retain its 1.2-second collapse and all geometry,
  routes, spawns, attacks, and progression.
- Clarify the hint that the broken lid stays open. Add no other mechanics, controls, state, or
  permanent tests.

## Steps

1. **Complete.** Inspect every `resetAfter` reference and the retained failed-opening schedule.
2. **Complete.** Update the shared platform type, unstable-platform transition, and Bursting Point
   definition.
3. **Complete.** Replay the retained prefix, show the roof open past its former regrowth time, and
   complete the route with a later bubble. A fresh level starts with an intact roof. Public inputs,
   receipts, and captures are retained under `tests/_temp/bursting_roof_public_capture/`.

## Verification and review

Existing positive-reset coverage remains authoritative; no permanent tests were added. Root ran
`./check_codebase.sh` (exit 0; 96 existing checks), `./build_github_pages.sh` (exit 0), and
`./run_playwright_tests.sh` (exit 0; two existing smokes). The public-build capture exited 0, loaded
the on-disk bundle, and recorded three views with no deaths or browser errors. Evidence and limits
are in the [acceptance record](../reports/bursting_point_recovery.md) and the temporary capture
report at `tests/_temp/bursting_roof_public_capture/REPORT.md`.

Scripted proof establishes the tested routes, not universal recovery or human playability. The
frozen current53 assessment does not score this later roof revision. Root's integration report is
retained at `tests/_temp/bursting_roof_integration/REPORT.md`.

The public capture's 587-frame open-roof view remained in `playing`; its 961-frame route reached
`complete`. Root accepted the bounded milestone as recorded above.
