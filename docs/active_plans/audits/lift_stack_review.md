# Lift stack audit synthesis

## Finding

The six fresh Plan, Test, Style, Docs, Legacy, and Comment passes found no source defect. Test
identified one low verification gap: the existing horizontal obstruction probe uses a static
platform, so it tests world-solid clipping and does not exercise the separate external-body
collision path. A separate temporary `create_game_state` proof now covers it. Over 18 movement
steps, the powered lift, crate, and Gem move together 36 pixels right; Cana remains stationary,
Gem stops at contact without overlap, and the lift remains clear of Cana. The proof's support chain
is crate-on-lift, Gem-on-crate, and Cana not on Gem. This isolates the external-body clipping path;
it does not show that a normal level naturally reaches this geometry. The Test finding is addressed
by this focused evidence. The six review passes are closed. The Test concern is addressed by the isolated
external-body fixture; the Docs concern is addressed by the self-contained durable
ledger, design decision, changelog, and this synthesis. The implementation audit
found no source defect.

Docs identified one low durability issue: durable records linked to ignored `tests/_temp/` receipts.
This was resolved by making the active ledger and design decision self-contained and linking this
durable synthesis. Temporary workspaces remain useful for detailed traces, but their contents are
not treated as retained records.

## Pass results

- **Plan:** no finding. Scope remains local to moving-platform carrier handling; campaign and
  production acceptance gates remain explicit.
- **Test:** the low external-body coverage finding is addressed by the temporary isolated proof
  summarized above. Keep implementation probes temporary; no permanent test is added.
- **Style:** no finding. The change is localized and uses the existing support relation and
  collision flow.
- **Docs:** low finding above; addressed in the durable ledger, decision, changelog, and synthesis.
- **Legacy:** no finding. No dead code, compatibility shim, suppression, or unnecessary shared
  abstraction was found.
- **Comment:** no finding. Names and existing comments explain the carrier and support-closure flow.

The passes reviewed `src/mechanisms.ts` at SHA-256
`57dfdf5e559535acceb42d2ac0373aa2d463ba3036f940d7f5557bc2000366fb`. Their detailed receipts are
temporary workspace evidence under `tests/_temp/audit_lift_plan/`, `audit_lift_test/`,
`audit_lift_style/`, `audit_lift_docs/`, `audit_lift_legacy/`, and `audit_lift_comment/`.
The external-body proof and its JSON result are temporary workspace evidence under
`tests/_temp/lift_stack_external_body_proof/`.

## Acceptance status

Root reports the canonical 96-check source run and site build passing, along with two standard
browser smokes. The current generated artifacts have SHA-256 `5bfc6733830635dac45a40e1596f0c6aef3db53feb0d53b723504482c3ad3886`
for `dist/main.js` and `124fa87486d95ecec545616db9499353bee329ddf3c0194b64a7c87c7d3ef3da` for
`dist/main.js.map`.

The current level 25 rebuilt-browser replay completes with zero deaths and no page or console
errors. A separate native trace records Gem supported by a parcel carried by the powered SEND
return lift. Browser replay evidence is a gameplay smoke, not human playability evidence.

Root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18
05:43:21 UTC. The fresh journey receipt
`tests/_temp/current50_campaign_journey/journey_receipt_2026-10-18T05-36-36-601Z.json`
records all 50 campaign rooms complete from a fresh context with an empty initial
save and no runner storage writes. Each room has one attempt and zero retries;
reload checkpoints at positions 10, 20, 30, 40, and 50 preserve matching completion
counts. The final saved progress contains 50 completed IDs and the visible ending
says "Patient rescued!" and "50 / 50 sites cleared." Browser errors are empty. The
served bundle and source map match the accepted hashes above. This is an ordinary-
keyboard replay of prepared successful schedules, not evidence of first-time
discovery, human enjoyment, or universal recovery.

The bounded milestone is closed. The unresolved overlapping-moving-platform
closure edge remains a concern, not a demonstrated failure or a claim of universal
support behavior. See the [transport ledger](../active/LIFT_STACK_TRANSPORT.md)
and [closeout receipt](../../../tests/_temp/lift_stack_closeout/REPORT.md). The
broader gameplay and human playability goal remains active.
