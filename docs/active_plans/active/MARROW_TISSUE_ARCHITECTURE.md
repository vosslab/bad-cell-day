# Marrow tissue architecture

## Status and baseline

**Status: DONE_WITH_CONCERNS.** M1 scope and M2 artwork were accepted; scoped source integration,
root code/build gates, focused browser evidence, fresh reviews, and root disposition are complete.
This is a bounded surface-art milestone, not a gameplay-defect claim. Baseline built `main.js`
SHA-256:
`41d34b7498e5660fd967c46e27fb09b4e65ee089c31884924e7916c31c8726c3`;
the 36-room `JSON.stringify(LEVELS)` SHA-256 is
`936b1982be8542788a747281a00577e34963f4f82ee19186c1f6c3764321200a`. Marrow rooms
`11, 09, 10, 23, 12, 21, 36` occupy positions 10-16. Root selected this after preserving the
GemLair candidate and rejecting repetitive lungroom. Existing marrow surfaces use simple bands;
the aim is recognizable corrupted-bone architecture. No unresolved stability failure is known
from the supplied current-source baseline. The accepted [liver atlas contract](liver_tissue_architecture.md)
is the implementation precedent.

## Scope and contract

- Create one original transparent `src/assets/marrow_tissue_surface.svg`, `viewBox="0 0 128 120"`.
  Use ivory/pink broken rounded trabecular struts, blood-cell pockets, and corrupted growth; keep
  the result humorous and gross while reading as bone. Preserve a continuous opaque tread.
- For surfaces under 40 px high, use crop `(0, 0, 128, 20)` and transparent gutter y=20..24; at
  40 px or taller, use crop `(0, 24, 128, 96)`. Repeat with rounded shared tile boundaries and
  clip to the collision rectangle.
- Apply only to active horizontal solid surfaces with `width >= height`. Retain the existing
  continuous 3 px Canvas rim, procedural fallback, carriers, counterweights, fragile/static
  distinctions, and all other atlas behavior. Make no gameplay-defect or playability claim.
- Keep all 36 definitions, order, geometry, physics, controls, types, state, configuration, and
  options unchanged. Integration may add one private renderer cache/branch and the asset to the
  three existing build asset lists only. Add no geometry, preview/tooling, framework, or permanent
  tests. No other atlas changes.

## Gates and evidence

| Gate                             | Owner                                                     | Status / decision                                                                                                                                                                                                                                                                                                        |
| -------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Plan and scope                   | Root                                                      | M1 approved.                                                                                                                                                                                                                                                                                                             |
| Artwork and render inspection    | Astra artist, then root                                   | ACCEPTED by root after actual-size review at 12, 14, 16, 24, 70, 120, and 200 px and repeated/clipped tile review. SVG SHA-256 `d06dc101396315b32be6e389a2da2f093c1471a5427f84fbb5461388587989c9`. XML, 25 IDs, 17 references, opaque tread, and transparent gutter checks passed. Human readability remains unmeasured. |
| Source integration               | Luna integrator                                           | COMPLETE; one private marrow image cache/branch and one marrow asset addition in each of the three existing build lists.                                                                                                                                                                                                 |
| Focused integration checks       | Integrator                                                | PASS; focused TypeScript, ESLint, Prettier, shell syntax, diff checks, accepted SVG identity, unchanged existing atlas identities, and 36-level JSON hash verified.                                                                                                                                                      |
| Root code/build gates             | Root                                                      | Code gate, official build, 2/2 standard smokes, source-current checks, and HTTP 200 disk/served identity pass.                                                                                                                                                                                                            |
| Focused browser evidence          | Root browser owner                                        | PASS. Corrected level 36 SHOVE/missed-launch lower-fold route and clear; reduced-motion level 11 cycle-pair; isolated atlas-failure movement with full raw events. One hero moving is sufficient for this art-only fallback check; see the [acceptance report](../reports/MARROW_TISSUE_ACCEPTANCE.md).                               |
| Independent reviews and closeout | Fresh SPEC, then QUALITY, then integration reviewer; root | SPEC PASS; QUALITY and integration ACCEPT_WITH_CONCERNS. Root accepts DONE_WITH_CONCERNS. Human visual readability, enjoyment, discovery, comfort, and playability remain unmeasured.                                                                                                                                             |

Art acceptance requires recognizable bone against muscle/gut/liver, readable continuous tread,
clean repeats, clipping, and no false hazard gaps. Use the existing dedicated
`devel/capture_gameplay_screenshots.mjs` or a private one-time helper; no new capture tool or full
36-room journey. Human fun and readability remain unmeasured. Preserve evidence and any failures;
do not suppress blanket errors. If artwork or fallback fails, retain procedural art and stop for a
narrow correction. No CHANGELOG entry is included at this planning gate; the documentation owner
can record accepted implementation work at closeout.

At each gate, invite clarification, challenges, decisions, and escalation. Root owns bounded scope
and art acceptance; cross-cutting design changes or architecture decisions go to the architect for
approval before scope changes.
