# Carry descent acceptance

## Current status

**ROOT ACCEPTED DONE_WITH_CONCERNS at 2026-10-17 11:23:40 UTC.** The bounded correction is complete;
the continuous gameplay goal remains active. The Level 3 lateral cause, human playability, difficulty,
and fun remain unresolved or unmeasured. No room was authorized.

## Evidence

SPEC, QUALITY, and integration accepted. The permanent whole-jump regression first reproduced the
failure (22 pass, 1 fail) and now passes for both carrier roles (23/23 physics tests). The correction
carries the passenger by the carrier's actual clipped vertical movement. A passenger's own obstacle
can release them while the carrier continues; ceiling pair clipping and ordinary walk/jump release
remain intact.

Root reports `./check_codebase.sh` passed 94 checks and the official build plus two browser smokes
passed. A fresh-state native campaign replay cleared 42/42 rooms over 56,098 frames with zero deaths;
this was not a continuous save journey. All 42 semantic definitions remained unchanged from the
post-Split Decision baseline. Root independently verified four native SPEC cases, including held
flight through landing and a statically authored rider-only ledge for both roles. Four original
focused browser captures showed body contact during descent and after landing for both roles in level
30, with zero deaths, retries, or errors. Browser raw evidence is in
`tests/_temp/carry_descent_browser/`; implementation, SPEC, QUALITY, and integration reports are in
the corresponding `tests/_temp/carry_descent_*/REPORT.md` directories.

Frozen identities: physics SHA-256 `1ce24601c4f099ca737ab03eeb8d7e5e98e2e164596d9401214035615cdf84e8`;
test SHA-256 `a86379eaab68ea5bbbdc88ede3e77f9b2ea3eb437191005f8b716e675b5ecda0`; built/served main
SHA-256 `e55c92d5ff55c4b6fb9ec55a2bee667cf371d67f584d0cf4d1eecff7b6a71a6d`. The unchanged semantic
snapshot SHA-256 is `34d375f593a0cd01d48108659ad83597fc8757093404e1006de49b4356834c08`.

The older SPEC report calls `23a385ac90737cd93b7e3fc734e90eb5f0fe859` a commit unavailable in this
checkout. It is the characterization source SHA-256, not a required Git commit; root replayed and
verified the baseline. The historical review report remains unchanged. The separate SHOVE feasibility
note retracts its truncated-run failed-landing claim and remains set aside pending context.
