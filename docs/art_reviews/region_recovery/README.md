# Whole-patient recovery review

[Whole recovery sequence](sequence.png) | [Untreated versus rescued](whole-patient.png) |
[Base body alone](base_sequence.png) | [Editable base-body proof](base_sequence.svg) |
[All six region pairs](overview.png)

The previous review accepted changes inside the organs while the surrounding patient
remained effectively static. That was insufficient. This revision changes the base body
itself: cool, dark purple skin and depleted supporting tissue gradually become warm
human skin tones and pink; broad bruised areas disappear; tired eyes and a frown become an alert,
relieved expression. The sickly-purple starting appearance, silhouette, organ artwork and layout are preserved.

Each pair uses the actual `PatientRecovery` component, with a 560-pixel-high body SVG at
identical dimensions and position. Before means no sites cleared in the selected region;
after means all its sites cleared. Earlier regions remain complete. The sequence also
shows the seven boundaries at 320 pixels high. The base-only proof hides organ overlays,
site markers and counts beneath the body, exposing whether the body artwork changes on
its own. Stage headings identify the comparison cases; they are not part of the artwork.

## What changes at each region

| Region | Sites before / after | Visible base-body contribution, alongside organ recovery |
| --- | --- | --- |
| [Lungs](lungs.png) | 0 / 6 | Broad shoulders and upper arms regain warm flesh color and clear skin. The remaining forearms and legs still look depleted. |
| [Intestine](intestine.png) | 6 / 17 | Pink supporting tissue returns across the lower abdomen and hips; bruising clears around the intestinal cavity. This is the most localized base change, but is visible without the intestine overlay. |
| [Marrow](marrow.png) | 17 / 27 | Both legs and feet become lighter and warmer across their full width, giving the small marrow channels a substantial patient-wide counterpart. |
| [Liver](liver.png) | 27 / 41 | Dark forearm and hand bruising recedes, restoring both arms. Overall coloration and expression continue to improve. |
| [Brain](brain.png) | 41 / 57 | The head and face regain warm flesh color; dark cheek patches clear and alert eyes replace the tired appearance. |
| [Tumor](tumor.png) | 57 / 58 | The last neck/abdominal bruising and fatigue disappear. The torso becomes uniformly healthy pink, the smile opens, and the protruding tumor is gone. |

The beginning, midpoint and endpoint are distinguishable from the patient artwork alone.
At the midpoint, healed shoulders, hips and legs contrast with still-bruised forearms and
face. At the endpoint, the dark fatigue treatment and all six regional strain layers are
absent. The final patient is visibly warmer and clearer throughout, rather than merely
showing fewer organ markers. These are visual review findings, not a player study.

## Implementation and ownership

`src/assets/patient_recovery.svg` owns the healthy surroundings, fatigue treatment, six
soft-edged recovery masks and six strain patches. The healthy and diseased treatments
reuse the same geometry, preserving the patient's identity. The untreated layer explicitly
retains its original purple gradient, highlights and shadows; the recovered layer uses
a separate peach/copper/brown palette. This keeps the starting patient stable while all
six regions cumulatively restore natural skin. The final repair site uses the recovered
skin palette too. The tan torso is replaced
with a pink supporting-tissue gradient. Organ fragments and their restoration details
are unchanged by this revision.

`src/patient_recovery.tsx` blends those base layers from existing completed level IDs.
Each region's fraction controls its local recovery. The mean of the regional fractions
controls overall fatigue, blush and expression, giving every region a contribution even
when the finale contains only one site. This is a fictional illustration convention, not
a physiological symptom map or a clinical health metric. Counts, saves, campaign order,
replay, practice, completion actions and enlarged-organ rendering retain their contracts.

## Acceptance and evidence

- Reviewed all six equal-sized region pairs, the full sequence and the base-only sequence.
  Acceptance requires broad base-tissue change as well as organ recovery; removing masses
  or changing progress indicators alone does not meet it.
- Checked 21 rendered patient states against campaign IDs: cleared sites and remaining
  masses match saved progress. The endpoint has zero fatigue and regional strain opacity.
- The editable base-only SVG contains its own artwork definitions; it needs no external
  asset files. Its PNG is captured from the actual component with organ overlays hidden.
- Production build, TypeScript, focused ESLint and SVG XML validation cover the source.
  [Lung completion](completion_lungs.png) and [final victory](completion_rescued.png) were
  captured from the built game using normal keyboard input. Both completed successfully;
  saved counts persisted when Replay returned to play, with no browser page errors.
- Compared all six organ fragments and three cancer shapes with the previous source:
  their geometry and organ paint are unchanged. The healed tumor skin patch now matches
  the recovered skin; its shape and restoration behavior are preserved. The standalone base-only SVG was also rendered
  and inspected over HTTP, including its internal references.
- Compared the untreated body with the previous capture: only four edge pixels differed
  out of 235,200, confirming the starting appearance is visually preserved.
- `source source_me.sh && pytest tests/`: 2,877 passed after the skin-palette revision.

These snapshots are review artifacts; regenerate them when the artwork changes.
The earlier lung-only review remains evidence for organ detail, not this base-body revision.

## Drawing references

Used the SVG skill's local *A Handbook of Biological Illustration* (1988), sections
"Clarity", "Emphasis and Comparison" and "Shading Convention", to prioritize readable
large color masses and consistent lighting over extra surface detail. Used *Mastering SVG*
(2018), "Clipping and masking", for reuse of the same geometry through soft recovery masks.
Local source paths beneath the skill's `references/local-only/` are
`scientific_illustration/A_Handbook_of_Biological_Illustration-1988.md` and
`svg_authoring/Mastering_SVG-2018.md`.
