# Villain crossfire experiment

## Goal and status

Test whether Cana's boomerang can create a player-directed crossfire moment by nudging pushable
Gem toward acid, followed by the existing four-second absence and home-return behavior. This is a
new gameplay-rule hypothesis. It is not a claim that the production engine currently supports
boomerang hits on Gem.

Status: CLOSED. Root accepts the private experiment as `DONE_WITH_CONCERNS` after fresh SPEC,
QUALITY, and integration reviews. This closeout does not authorize production changes. Current38
remains frozen; rooms 39 and 40 remain unassessed.

Experiment ledger: DONE_WITH_CONCERNS. The `REPORT.md`
records the matched deterministic input schedule, returning-hit evidence, four-second return,
idle-home check, review reconciliation, and root's decision to set aside this candidate as a
production design. Retain only the causal possibility of villains foiling each other.
The [surface texture anchor](SURFACE_TEXTURE_ANCHOR.md) records the completed prior phase and its
limits. The [gameplay direction report](../reports/gameplay_direction.md) records current direction.

## Hypothesis and setup

Compare an authored clone under identical ordinary inputs with and without the hypothesized rule.
Place Gem at a safe home outside the boomerang's automatic dunk path. A useful candidate is for
Pac to push Gem into Cana's firing lane after the outbound pass, then jump clear so the returning
boomerang nudges Gem into acid. The geometry may differ if it better preserves that choice.

Use only existing ordinary level-definition fields, hero inputs, and `step_game`. In the private
experimental trial only, an explicit after-step hook may apply a fixed horizontal velocity impulse
to Gem on confirmed Cana-boomerang/body contact, at most once per boomerang flight across outbound
and return legs. Ground its value in the existing boomerang shove response. This hook implements
the proposed rule for the experiment; it does not demonstrate native production support. Keep
private per-flight bookkeeping in the ignored helper. Do not add production state or options.

## Evidence and decision

Run the native experiment under `tests/_temp/villain_crossfire_experiment/`. Preserve unique attempt
files and logs; never overwrite or reconstruct an earlier attempt as original evidence. Record
public inputs, projectile leg and direction, confirmed body contact, one impulse per flight, Gem
motion, acid absence, home return, and ordinary attack resumption if achieved. The matched control
uses the same authored state and inputs with the private rule disabled, so Pac's own shove cannot
be credited to crossfire. Try meaningful Pac positioning/push-and-dodge actions; reject an
auto-loop that dunks Gem at spawn without player choice. If Isp occupies a separate lane, test Gem's
FLOAT timing before or after the return. If the encounter is a full room, also establish ordinary
both-exit clearance.

The `REPORT.md` records the route,
results, and root's SET_ASIDE decision for this candidate. The follow-on
[private room prototype](crossfire_room_prototype.md) owns further testing of the retained causal
possibility. Keep the hypothesis only if evidence shows actual
boomerang contact changes Gem's path, player action controls the setup, and the existing return
and attack recurrence remain usable without extra state or complexity. Otherwise preserve the
negative evidence and set it aside. This experiment makes no human-fun or discovery claim and does
not authorize a production room, room ID/order change, art, engine patch, build, browser run, or
permanent test.

## File scope

- This plan defines the completed private experiment and its decision rule.
- `tests/_temp/villain_crossfire_experiment/REPORT.md` records native outcomes and the decision.
- `tests/_temp/villain_crossfire_plan/REPORT.md` remains the planning contract handoff.
- Native helper, inputs, and attempt evidence stay in the separate ignored
  `tests/_temp/villain_crossfire_experiment/` directory.

## Review questions

Root approved the contact proof, 260 px/s impulse, and bounded route before hook work began. The
result ledger records `DONE_WITH_CONCERNS`; this candidate is set aside for production. Any further
work requires root approval of the separate private room prototype plan.
