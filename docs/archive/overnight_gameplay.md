# Overnight gameplay execution plan

Status: COMPLETE. Three encounters, scenery, final campaign/trial traversal, and fresh
documentation/integration acceptance are complete. Decisions, evidence, and remaining human-play
limits are recorded in [overnight_execution.md](../active_plans/reports/overnight_execution.md).

## Outcome and boundaries

Improve two or three cooperative villain encounters in the existing middle or late campaign. Use
the current Gem float/sticky and Cana dizzy/shove effects where they improve a readable partner
route. Keep the existing 20 room IDs and order, save and intro behavior, hero shapes, and simple
controls. The optional trial remains isolated behind its existing save path.

Treat the previous overnight suggestions as candidates. The current baseline and architecture
review determine which encounters change. This is a gameplay pass, not a campaign rewrite or an
algorithm redesign. Existing browser evidence for the trial is recorded in
[interference_ledger.md](../active_plans/reports/interference_ledger.md); it does not establish the campaign
baseline or final-build acceptance.

## Owners and handoffs

| Owner | Responsibility | Handoff |
| --- | --- | --- |
| Manager | Coordinate work, resolve decisions, integrate, and maintain the execution ledger | Keep work moving; do not author gameplay code |
| Encounter architecture | Select two or three room IDs and define only the shared contracts needed for those encounters | Get architect approval for cross-cutting changes before implementation |
| Campaign baseline | Traverse the current 20-room campaign with legal controls and report room-level evidence | Finish before room selection; distinguish operability from two-player enjoyment |
| Gameplay implementer(s) | Implement the selected room encounters under exclusive file ownership | Follow the approved room selection and shared contracts |
| SVG artist | Create original tumor scenery that preserves hero and gameplay readability | Integrate only after encounter gameplay is in place |
| Integration/review | Run required checks, inspect the final build, and report results | Refresh affected evidence after any later fix or rebuild |

Invite questions, challenges, and proposed changes through the manager. Resolve contract or room
selection questions before dependent implementation. Keep file ownership exclusive and report
affected files, checks, failures, and unverified behavior.

## Execution order

1. **Establish stability and baseline.** Build and inspect the current tree, then traverse all 20
   rooms in order with ordinary controls. Record stable ID, cooperation, route reasoning,
   discoverability, and failure/recovery cost. Separate optional collectibles and waits from the
   required route. Assess each hero's contribution and control handoffs. This proves operation by
   one player, not novice ease or two-person enjoyment.
2. **Select encounters and contracts.** Use baseline evidence to choose up to three rooms with a
   specific cooperative benefit. The architecture owner proposes the smallest necessary room data
   or interaction contracts. Architect approval is required for cross-cutting design changes.
3. **Implement and review gameplay.** Make each selected encounter's cause and effect legible,
   retain safe recovery, and use existing interference behavior. Reproduce any suspected engine
   defect before assigning a narrow correction to its owning module. If a baseline failure blocks
   work, make a separate stabilization experiment log with reproduction, hypothesis, observation,
   correction, and retest; do not mix root-cause debugging into this gameplay plan.
4. **Integrate original scenery.** After gameplay is stable, add a restrained original tumor scenery
   set and apply it only where it preserves readable characters, faces, hazards, and collision
   edges. Keep existing hero art. Avoid distracting motion and respect reduced-motion behavior.
5. **Verify and close.** Run `./check_codebase.sh`, `./build_github_pages.sh`, and
   `./run_playwright_tests.sh --build`. Then traverse all 20 rooms and the isolated trial on the
   final build using ordinary controls. Verify exits, progression after reload, retry, pause/resume,
   simultaneous controls, arrow-key scroll prevention after canvas focus loss, recovery from
   plausible traps, and reduced-motion trial behavior. Inspect screenshots and console/page errors.
   Record exact build identity and SHA-256 hashes for the artifacts served and inspected.

## Completion evidence

The execution report records the selected and deferred rooms, each changed route and cooperation
benefit, owner/reviewer findings, exact commands and outcomes, final-build traversal, screenshots,
artifact hashes, and remaining issues. Mark seeded saves, deterministic timing, partial coverage, and
source-only checks as such. A passing focused check does not establish the full campaign run.
Human enjoyment and two-player experience remain unclaimed without observations with people.

If a fix or rebuild follows final verification, refresh affected evidence on that build. Do not
replace tracked generated artifacts without required approval. Archive the completed plan with the
repository-required `git mv`; no other staging, publication, or commit is authorized.

## Final acceptance

Selected stable rooms 13, 17, and 19 are implemented and specification/quality accepted.
The final built campaign passes all 20 rooms continuously from fresh storage, with zero
retries/errors and all 20 Replay entries retained after reload. The isolated trial and
reduced-motion room 13 recovery pass. Seven final effects runs and the reduced-motion trial pass.
All 25 unit tests, type/lint/format checks, the production build, two permanent browser smokes,
and focused documentation checks pass on the recorded final artifact. `final_game_integration`,
`final_docs_respec`, and `final_docs_quality` each ACCEPT. The ledger retains artifact identity,
source/asset provenance, and proof boundaries. The plan is archived after acceptance; no
publication occurred. Human enjoyment, fairness, discovery, and two-human play remain unmeasured,
and 390px canvas text remains very small. Four-book work is focused reading, not whole-book study.
