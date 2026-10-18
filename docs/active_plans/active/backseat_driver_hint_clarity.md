# Backseat Driver hint clarity

**Status:** DONE_WITH_CONCERNS. Root accepted this bounded Hint clarity milestone at 2026-10-18
07:10:04 UTC after the final integration disposition ACCEPT WITH A BOUNDED BASELINE CAVEAT.

## Scope

Revise only the `level_50` Hint string. State the starting stack on Cana's shelf, the low/high
landing split, and the leftward floor route to the small fold and back to Cana's shelf. Preserve
the room's existing geometry, attacks, layout, spawns, title, subtitle, Sparks, controls, and
mechanics.

## Evidence and rationale

The first source-blind walkthrough did not inspect the Hint. In a separate later continuation, an
expert received the existing Hint and then focused on the destination-platform problem; that run
did not complete. The causal report recommended keeping the original room and Hint and verified
native recovery opportunities, rather than recommending a clarity rewrite. Root judged that clearer
first-wait and stack instructions and leftward recovery landmarks were worthwhile based on the
combined observations. The native evidence establishes route opportunities, not that all recovery
paths work or that the revised Hint improves discovery, completion, or fun. There is no human
playtest evidence.

## Acceptance

Use the root-approved copy exactly:

> Keep Isp on Pac and wait on Cana's shelf for a right-going shove. Pac jumps toward the low landing;
> while Pac is airborne, Isp jumps off for the high one. Missed? Head left along the floor, use the
> small fold to jump back up to Cana's shelf, and regroup.

The room-data change is limited to the Hint value. Root completed `./check_codebase.sh` (96
existing checks plus type, lint, and format), the official build, and the two existing Playwright
smokes. The normal keyboard Tab/Enter capture opened the actual Hint and recorded expected gameplay
with zero deaths or browser errors; root reviewed the original capture. The capture helper gained
only literal Tab/Enter entries in its existing fixed key whitelist, with Node syntax, ESLint,
formatting, and actual-consumer capture passing. This helper adjustment is separate from the
Hint-only product scope. Integration accepts with a bounded caveat: the current diff alone cannot
prove when the existing per-view reduced-motion helper work changed; prior records identify that
work as already accepted. The caveat is temporal attribution only, not a functional finding, and no
provenance gate was added. No permanent test or new browser acceptance gate was added. SPEC,
QUALITY, and final integration accept. Root accepts the milestone DONE_WITH_CONCERNS; no fresh
50-room journey was run for this text-only revision, and the earlier journey remains historical.

Implementation evidence: [report](../../../tests/_temp/backseat_hint_clarity_implementation/REPORT.md).
Root evidence and receipts: [evidence record](../../../tests/_temp/backseat_hint_evidence_record/REPORT.md).
