# Bad Cell Day mobile playability

Parent scope: all four games mobile, preserving laptop play. This local ledger owns Bad Cell Day.

| Milestone | State | Completion evidence |
| --- | --- | --- |
| M1 baseline and locked install | Complete with baseline issue | Existing lock installed using writable npm cache. Baseline TypeScript and ESLint passed; Prettier flagged two existing tests, subsequently formatted. Baseline build passed. |
| M2 input ownership | Complete | Independent captured pointer per hero; ignored extras; zone drag; isolated release; keyboard/touch OR sampling. |
| M3 lifecycle | Complete | Pause/retry/level/complete/death/blur/hidden/dispose clears input. Portrait coarse-pointer play pauses; landscape requires Resume. |
| M4 mobile presentation | Complete | 132x88 pads outside full world; compact safe-area 100dvh fit; fine-pointer desktop layout retained. |
| M5 focused verification | Complete | 92 Node tests; 4 browser tests, including native Hint taps, CDP multi-touch and established keyboard journeys; 1318 focused hygiene checks. |
| M6 representative play | Complete | All five actual CDP two-thumb routes clear with zero deaths/errors: opening 02, heavy push 09, SEND/CATCH 33, recoil 37, joint delivery 56. |
| M16 delivery | Complete; parent integration accepted | Documentation, refreshed dist, hygiene and exact acceptance ledger delivered. No commit or publication. |

Acceptance and limitations: [mobile acceptance](../active_plans/reports/mobile_playability_acceptance.md).
