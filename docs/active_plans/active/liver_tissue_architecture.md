# Liver tissue architecture

## Status and authority

**DONE_WITH_CONCERNS; root accepted under L4.** This bounded surface-art milestone is complete.
The original liver atlas applies to active horizontal solid liver surfaces and preserves the
existing landing rim and procedural fallback. It adds no gameplay behavior. Human readability,
enjoyment, discovery, and comfort remain unmeasured. The continuous gameplay goal remains ACTIVE;
no follow-on feature queue is approved.

## Goal and evidence

Give active liver platforms a recognizable lobule and sinusoid surface while preserving a clear,
continuous landing edge. The current 35-room roster is the baseline. An earlier source review
identified generic repeated ellipses as a weaker liver cue than the brain and intestine atlases. Its
ignored receipt, `tests/_temp/organ_identity_priority/REPORT.md`, is historical disposable evidence
and is not repository-retained. This was an art priority, not evidence of a gameplay defect. Root
inspected the `level_13` baseline capture and confirmed the repeated floor ellipses and simple
thin-shelf texture. The baseline TypeScript check passes; the 35-level
`JSON.stringify(LEVELS)` fingerprint is
`f83ed83ffe898a91ec151ce3469ea4d203ce006e3b047312e10e36400040b0c1`. The accepted brain and
intestine plans establish the existing atlas approach.

## Scope and contract

- Create one original transparent asset, `src/assets/liver_tissue_surface.svg`, with hepatocyte
  cords, fused lobules, branching sinusoidal channels, and a restrained grotesque nodule. Match the
  current warm liver palette and keep detail below the bright Canvas landing rim.
- Use `viewBox="0 0 128 120"`. For surfaces under 40 px high, use crop `(0, 0, 128, 20)` and a
  4 px gutter at y=20..24. At 40 px and above, use crop `(0, 24, 128, 96)`. Repeat horizontally
  with rounded shared tile boundaries and clip the final tile to the platform rectangle, reusing the
  existing private atlas helper.
- Apply the atlas only to active, horizontal, solid liver surfaces with `width >= height`. Keep the
  existing continuous 3 px Canvas rim. Do not create false holes, spikes, or pads in the landing
  area. Preserve the current procedural fallback exactly as it is; add no liver-specific fallback
  art logic.
- Keep all 35 definitions, scenes, order, geometry, physics, controls, types, state, and options
  unchanged. Add the asset only to the three existing required-source, copy, and output lists in
  `build_github_pages.sh`. Add no preview interface or permanent tuning/visual tests.
- Do not begin source integration until root accepts the art using actual-size evidence.

## Execution and acceptance

| Gate | Owner | Status / evidence |
| --- | --- | --- |
| Plan and baseline | Root | APPROVED; 35-room roster fingerprint `f83ed83ffe898a91ec151ce3469ea4d203ce006e3b047312e10e36400040b0c1`. |
| Artwork and art decision | Astra artist, then root | ACCEPTED at 16, 18, 20, 70, and 120 px. SVG SHA-256 `fc64f8e2995937335b0e5958620525de2f5a861a0586bb05ca9ef8bfa7c2fc8c`; inspected atlas retained clear tread edges and clean repeats. Historical ignored receipt: `tests/_temp/liver_tissue_artist/REPORT.md` (disposable and not repository-retained). |
| Source integration | Luna integrator | COMPLETE; liver-only renderer/cache branch and three existing build-list additions. Focused TypeScript, lint, formatting, shell syntax, and diff checks passed. |
| Build and source gate | Root | PASS; `./check_codebase.sh` passed 90 Node checks plus TypeScript, lint, and format; official build and 2/2 smokes passed. The 35-definition/scene/order JSON hash remains unchanged. Source-current assertions and HTTP 200/disk identity passed. |
| Frozen-build browser evidence | Root | PASS in ordinary FLOAT, reduced-motion moving-refuge, and ordinary-movement fallback contexts. Details and limits are in the [acceptance report](../reports/liver_tissue_acceptance.md). |
| Independent review | Fresh SPEC, QUALITY, and integration reviewers | ACCEPT_WITH_CONCERNS; no blocking finding. The apparent QUALITY header/position mismatch was stable `level_13`/`level_14` at campaign positions 16/20. |
| Closeout | Root | DONE_WITH_CONCERNS; evidence, observed console behavior, and limits are recorded in the [acceptance report](../reports/liver_tissue_acceptance.md). |

Keep browser evidence focused on surface legibility, landing edges, moving-platform state, and
fallback operation. Reuse existing dedicated capture tools; do not add a preview interface or replay
all 35 rooms without a concrete changed risk. Captures do not establish human readability, enjoyment,
or comfort. If a check finds an actual failure, record it and resolve it at the owning boundary
before proceeding.

## Questions and escalation

At each gate, invite clarification, challenges, decisions, and escalation requests. Challenge
unsupported assumptions, including claims that this source-based priority proves a gameplay defect.
Root resolves bounded scope and acceptance questions. Cross-cutting design changes and architecture
decisions require architect review and approval; return to root before expanding this milestone.
