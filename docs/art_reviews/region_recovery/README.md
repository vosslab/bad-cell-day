# Whole-patient recovery review

[All six region pairs](overview.png) | [Untreated versus fully restored patient](whole-patient.png)

Each pair shows the actual `PatientRecovery` component at identical dimensions, with a
560-pixel-high whole-body SVG. Before means no sites cleared in the selected region;
after means all its sites cleared. Earlier regions remain complete and later regions
remain diseased. This measures the region's entire contribution, not only its last site.
No gameplay or completion layout was changed for this review.

| Region | Total sites before / after | Review and completed refinement |
| --- | --- | --- |
| [Lungs](lungs.png) | 0 / 6 | Strong contrast: bruised tissue becomes warm pink, with clear airways and alveolar detail. |
| [Intestine](intestine.png) | 6 / 17 | Mass removal was clear but restored tubes looked plain. Added fold marks and continuous warm highlights along the existing tract. |
| [Marrow](marrow.png) | 17 / 27 | Smallest colored area; both leg channels now reveal red marrow, blood-cell details and bone highlights. The change is visible across both legs. |
| [Liver](liver.png) | 27 / 41 | Restored surface was too empty. Added branching vessels, restrained lobular marks and warm reddish-brown highlights. |
| [Brain](brain.png) | 41 / 57 | Strong change over a large area. Warmer folds, clearer outlines and curved highlights reinforce restored anatomy. |
| [Tumor](tumor.png) | 57 / 58 | The old healthy state left a large orange lump. Replaced it with a small flat repair site, visibly removing the protruding mass. |

The source of artwork is `src/assets/patient_recovery.svg`; completion-dependent rendering
is owned by `src/patient_recovery.tsx`. These refinements were implemented in those files.
Previously inherited organ outlines are explicit on reusable groups. Fully cleared organs
no longer retain a disease-tinted underlay, eliminating faint clipping seams at adjacent
territories. Purple skin, cancer hue variation and all completion actions are preserved.

## Acceptance and evidence

Success means each pair has a visible organ-scale change in mass coverage and organized
healthy tissue, without relying on statistics. My visual review finds all six pairs meet
that criterion; marrow remains the smallest region and merits particular attention in
player review. This is an artwork review, not a formal usability study.

- Captured seven pairs from the real component with existing campaign IDs and saved-progress
  shape. No separate mock drawing or production debug hook was introduced.
- Checked all 14 rendered bodies: cleared-site count and restored territory count equal
  expected progress; remaining cancer masses equal 58 minus cleared count.
- Inspected every pair at the displayed size, including preserved earlier recovery.
- Production build, TypeScript, focused ESLint and SVG XML checks passed.
- Separate lung browser checks play each of the six rooms with seeded prior progress and
  verify restored territories and visible remaining masses after CSS animations finish.

The snapshots are review artifacts; rerender them when artwork or campaign region counts
change. They do not alter or replace the Levels dialog, campaign order, replay or practice.
