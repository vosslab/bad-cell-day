# Lung recovery proof

[Editable three-state comparison](comparison.svg) | [Rendered comparison](comparison.png)

The completion-screen illustration uses two distinct color ranges with limited dark-red overlap. Purple skin retains
its cartoon identity and is separate from the tissue recovery palettes.

| Tissue | Color range | Visual treatment |
| --- | --- | --- |
| Healthy | Warm pink, coral, warm red, reddish brown | Clear branches, folds, warm highlights, organized tissue |
| Cancer | Dark purple, violet, maroon, deep red, burgundy | Dark overlapping nodules, uneven masses, mottling, tendrils |

Only dark reds and burgundies intentionally overlap. Light pink is reserved for healthy tissue. Condition is communicated through structure,
lightness and texture as well as hue. Three cancer gradients vary the dominant colors
between sites; each mixes hues within its surface, core nodules and highlights. Outlines,
saturation, lighting and lesion geometry retain the established cartoon treatment.

The source is `src/assets/patient_recovery.svg`; `src/patient_recovery.tsx` supplies
completion-dependent clipping. Both the patient and enlarged lungs use the same artwork.
Six connected territories restore independently using existing completed level IDs.
These are game sites, not anatomical lobes.

The comparison shows 0/6, 3/6 and 6/6. Restored lung territories reveal warmer, lighter
flesh-pink surfaces, membrane highlights and clear airways along the existing anatomy.
Silhouettes, folds, branches and site positions stay fixed. The proof omits the gameplay
route and current/next emphasis to expose tissue. Lung disease tint is 80 percent; other
regions retain 32 percent, preserving their distinct underlying colors.

[Early completion screen](completion.png) | [Restored lungs](restored-completion.png) | [All six recovery steps](sequence.png)

Drawing references in the SVG creator skill's local book corpus:

- *A Handbook of Biological Illustration* (1988), Clarity, Shading Convention and
  Perspective: restrained detail, upper-left lighting and stronger foreground contours.
- *Mastering SVG* (2018), Clipping and Masking: reusable artwork revealed through
  independent clipping paths.

Validation includes SVG XML parsing, production build and browser completion captures.
The three-state comparison and actual completion screen were visually inspected.
This is a game illustration, not a clinical portrayal of cancer or recovery.
