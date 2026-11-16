# Membrane Relay Prototype

**Status: DONE_WITH_CONCERNS; investigation closed, playable room not established.** The final
private-fixture run produced no clear. Root decided not to promote this candidate. No campaign
registration, production source, or build changed.

The concept used existing mechanics: Isp crosses rupture A; Pac uses Gem's bubble to reach the
upper middle, crosses rupture B, and drops to the lower route; Isp then uses Gem's bubble and the
opened B route to reach the upper exit. The level definition is `tests/_temp/membrane_relay_prototype/private_level_definition.ts`
(SHA-256 `badcbd6c8823b2694492fb4761001e3484da31b428d905e96fa57bce4b6c509e`). The native input
runner is `tests/_temp/membrane_relay_prototype/native_input_runner.mjs` (SHA-256
`5cf751fa66848880a94d677ee67d9659d21b0a25a94151d5aa88cbe29eb96901`). Both hashes identify the
frozen final definition and runner. Inputs use ordinary key states through `step_game` at 1/120 s;
no runtime state injection is used.

Final command: `npx tsx tests/_temp/membrane_relay_prototype/native_input_runner.mjs` (exit 0).
It reported 0 completed and 4 failed attempts. The primary route opened A, but Pac received STICKY
on the bubble approach, never opened B, and Isp did not reach the high exit. The missed-jump route
recorded Pac's bubble bounce, opened both ruptures, and Pac reached the lower exit; Isp's FLOAT was
transient and Isp ended grounded in `bubble_dip` at x=772, y=564, outside the high exit. Neither
attempt completed. The final `completed_trials.json` is empty. `failed_trials.json` retains these
four attempts plus four earlier attempts; earlier clears from the preceding, invalid high-exit
geometry are not proof for this corrected fixture and are not recorded as final clears.

Two bounded counterfactuals did not show a route bypass: with Isp idle and A intact, Pac stayed on
the lower floor and did not reach the upper route; with B intact, Isp reached x=990.8, y=453 but
did not overlap the corrected high exit (exit bottom y=435). These are sampled native inputs, not
an exhaustive uniqueness proof.

The cooperative payoff remains unproven. The concrete failure is the final handoff: after Pac has
opened B, Isp does not convert Gem's live bubble/FLOAT into a stable ascent and exit. The low dip
and live villain timing make the taught route hard to read and repeat; further geometry iteration
was stopped as requested. Any future revision should first make Isp's bubble pickup and ascent
stable with ordinary controls, while preserving the clear reciprocal use of A and B. Do not treat
this private fixture as a campaign candidate or claim human playability or fun.
