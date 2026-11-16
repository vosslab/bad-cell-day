# Level 3 Bridge Grace Candidate

## Outcome

Apply one local tuning adjustment for displayed Level 3, stable `level_04`,
**Bridge Over Troubled Slime**: change only the unstable bridge's
`collapseAfter` from `0.8` to `1.2` seconds. Preserve both co-op pads and gates,
bridge geometry/reset, optional villain acid dunks, and existing attacks and
controls. This candidate responds to the reproduced late-retreat fall. It does
not diagnose or claim to fix the reported side-to-side motion.

## Bounds and decision rule

- No additional mechanic, rescue behavior, art, renderer, or input change.
- The cloned-level experiment is evidence for candidate selection, not
  production acceptance. Root released implementation after `ROOT_CUE_CLOSED`.
- Production acceptance requires the actual public level to preserve the
  ordinary STEADY/RESCUE clear, both optional dunks and returns followed by a
  clear, and the bounded retreat result (a 1.6-second retreat survives; 1.75
  seconds remains too late).
- If candidate behavior breaks a meaningful existing route, stop and report the
  evidence; do not add another mechanism.

## Evidence ledger

| Gate | State | Evidence |
| --- | --- | --- |
| Preflight and cloned-level route replay | PASS | `tests/_temp/level3_bridge_grace/REPORT.md` |
| Production one-field edit, public route replay, and all-level comparison | PASS | Same report and `tests/_temp/level3_bridge_grace/public_results.json` |
| Official build and standard browser smokes | PASS | Root-reported `./check_codebase.sh` (92 Node checks, both TypeScript checks, lint, format); official build and 2/2 smokes |
| Built-browser acceptance | PASS | Four final captures and build identity in `tests/_temp/level3_bridge_grace_browser/REPORT.md`; exploratory failure retained there |
| Fresh SPEC | ACCEPT_WITH_CONCERNS | `tests/_temp/level3_bridge_grace_spec/REPORT.md`; bounded source and plan review |
| Fresh QUALITY | ACCEPT_WITH_CONCERNS | `tests/_temp/level3_bridge_grace_quality/REPORT.md`; no blocker or plan drift |
| Integration | ACCEPT_WITH_CONCERNS | `tests/_temp/level3_bridge_grace_integration/REPORT.md`; no material drift or blocker |
| Root acceptance | DONE_WITH_CONCERNS | Root reviewed the retained evidence and all four final browser images |

## Limits

The 1.2-second value is a modest tested grace adjustment, not a claim of a
mathematically minimal value. Scripted simulation cannot establish human
comfort, fairness, or enjoyment. Side-to-side bridge motion remains unresolved
and outside this change. The frozen current38 assessment is not regenerated.
Browser evidence establishes the captured retreat and completion endpoints; the
native replay supplies exact four-second return timings. The initial browser
route failure under input quantization is retained, and its successful retry
used previously accepted partner-aware timing without a production or tool
change. Human play and the reported bridge motion remain unverified.
