# Physical villains acceptance

**Disposition: `DONE_WITH_CONCERNS`, accepted by root at 2026-10-17 14:47:25 UTC.** The
independent global SPEC review accepted with no blocking findings; all six QUALITY passes completed,
with the initial Style/Legacy configuration-exclusion and Docs stale-status findings corrected and
accepted by fresh targeted review. Independent integration review accepted with concerns and no
blocker. Root reproduced the final evidence and reviewed all eight current-bundle browser captures.
This receipt closes the bounded physical-villains milestone; the broader gameplay goal remains
active.

## Verified outcomes

- Final native evidence covers 43 production routes, three retained same-run recovery routes, and
  the separate trial: 47/47 complete with both heroes at their exits and zero deaths. Root
  independently replayed all 47 outcomes with stable source. A separate 12-second idle probe kept
  all 43 rooms playing with zero falls or respawns. This is deterministic fresh-state evidence, not
  a continuous save journey or an indefinite-idle guarantee.
- The initial-body audit checked 86 bodies against solid platforms, hero spawns, crates, and hazards
  with no intersections. These diagnostics do not impose universal support, pad-clearance, or
  exit-clearance requirements.
- Root reports `./check_codebase.sh` passed 96 checks and `./run_playwright_tests.sh --build`
  passed 2/2. The final local and served `dist/main.js` match SHA-256
  `26375ae4efc0b8a16ed240d77e79d2fa952a85c9771814d30ee5498cb7233a7a`; root confirmed all 68
  bundled sources match the source map, with no drift. The serialized `LEVELS` digest is
  `79a2ee3375a0d7e4d1912e37dd53aa8703ff918c5ac28bc2a37e4bc50859b74f`.
- Eight focused built-browser cases reached their expected phases with zero deaths and no browser
  errors: Level 02, 10, 39, 20, and 35 clears, plus Level 02, 10, and 39 body contacts. Root viewed
  all eight originals and accepts their sampled visual states. The Level 02 riding pose visibly
  balances on a villain. Villain names crowd slightly when both bodies are pushed together; root
  considers this minor polish, not a blocker.

## Scope and limits

The implementation gives every authored villain scene default physical bodies, removes the Gem
platform fallback, keeps active-body cargo collision and counterweight weight, resumes attacks
after the four-second acid absence, and uses the existing balancing pose when a hero rides an active
villain. All 43 room homes are authored. Level 25 uses the single-roost route; Level 35 uses two
separate parcels and its source hint; the optional trial has its own completed production route.
Full source status and rejected-trial context are in the [active plan](../active/physical_villains.md).

Earlier browser results on provisional bundles are historical only. The current bundle evidence is
in `tests/_temp/physical_final_browser_refresh/REPORT.md`; native evidence is in
`tests/_temp/physical_final_native_refresh/REPORT.md`. These ignored temporary reports are working
receipts, not durable documentation links.

Scripted simulation and browser routes do not establish human discovery, enjoyment, paired comfort,
or broad game acceptance. They do not create a continuous save-journey gate or rescore frozen
current41 difficulty. The continuous gameplay goal remains active.

## Final disposition

The source and final artifact remain frozen at bundle SHA
`26375ae4efc0b8a16ed240d77e79d2fa952a85c9771814d30ee5498cb7233a7a`. Root independently
reproduced the 47 native outcomes and 12-second idle probe, reran 96 code checks and 2/2 standard
browser smokes, verified served/source identity, and viewed all eight final browser captures. The
integration report accepts with concerns and no blocker. Crowded adjacent villain names remain
minor polish. Human discovery, enjoyment, and paired comfort remain unmeasured; these do not block
this bounded milestone. The broader continuous gameplay goal remains active.
