# Carry through jump descent

## Goal

Keep a standing passenger supported while either hero carries them through an ordinary walking
jump from ascent through landing. Preserve rider walk/jump detachment and each body's collision
ownership. This physical-support correction does not diagnose the Level 3 bridge report or authorize
a room.

## Ledger

The shared gameplay direction ledger owns the broad campaign goal. Existing characterization found a
transient loss of grounded support during descent followed by landing on the same broad floor. The
earlier private claim of a failed full landing is retracted. This plan changes no room definitions,
serialized order, or campaign claims.

## Geometry contract

Keep the existing pixel-based, y-down AABB contract in `src/collisions.ts`: `stands_on` establishes
contact; `clip_axis` clips against each body's solids; substeps stay at most 1/120 second. Add no
tolerance, kernel, attachment state, or configuration. Carry by the carrier's actual clipped vertical
displacement. Clip rider travel against their solids. A descending obstacle can stop the rider while
the carrier continues; upward ceiling clipping still blocks both. The rider's normal later movement
step handles walk/jump-off input.

## Work and evidence

Add one permanent whole-jump regression for both carrier roles and show it failing before the fix.
Private traces cover whole-flight support, rider walk/jump-off, and a rider-only ledge during descent;
the existing suite covers barrier, FLOAT, and ceiling behavior. Run the Node physics suite, both
strict TypeScript programs, and scoped lint/format checks. Keep all 42 semantic definitions and order
unchanged. Root owns build and browser checks after source freeze.

## Status

**ROOT ACCEPTED DONE_WITH_CONCERNS at 2026-10-17 11:23:40 UTC.** SPEC, QUALITY, and integration
accepted; focused physics, full codebase, official build and browser smokes, fresh-state campaign,
semantic-preservation, independent SPEC verification, and focused browser evidence passed. A
passenger follows the carrier's actual clipped vertical movement through descent and landing, while
the passenger's own obstacle can release them as the carrier continues. Ceiling pair clipping and
ordinary rider walk/jump release remain intact.

The campaign replay covered 42/42 rooms and 56,098 frames with zero deaths; it was a fresh-state
campaign, not a continuous save journey. Focused browser captures showed both roles during descent
and after landing in level 30, with no deaths, retries, or errors. No room was authorized. The Level
3 lateral cause, human playability, difficulty, and fun remain unresolved or unmeasured. The
continuous gameplay goal remains active.
