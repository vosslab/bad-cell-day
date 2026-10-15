# Character art evidence

The authored assets are [isp.svg](../../../src/assets/isp.svg) and
[pac.svg](../../../src/assets/pac.svg). Both are editable, self-contained SVGs with
transparent `0 0 240 240` viewBoxes, navy ink, accessible titles/descriptions, and
prefixed semantic groups. Consumers load these through HTML images and Canvas.

## Molecule-first construction

The user's supplied molecular drawings determine the entire character geometry.
The ring polygons establish body masses and terminal lobes; thickened bond paths
establish connecting limbs. Faces are drawn last over those masses. Each asset's
`*-molecular-scaffold` group contains the complete underlying construction.
The previous independent cartoon bodies and crown inlays have been replaced.

- **Isp:** the supplied vertical ispinesib arrangement becomes a tall blue figure.
  Its upper phenyl ring rises on a bent stalk. The fused six/six middle carries
  eager eyes. The left chlorine substituent becomes a green terminal hand, the
  right branched alkyl group becomes a forked arm, and the lower amide branches
  into a phenyl-ring foot and an amine-chain foot.
- **Pac:** the supplied horizontal paclitaxel arrangement becomes a wide orange
  figure. Its six/eight/six taxane system forms the broad face/body; the attached
  four-member oxetane forms the right hip. The long left side chain branches into
  two phenyl-ring hands. The lower benzoate ring becomes a planted foot and the
  right acetate branch becomes the other foot. The upper acetate branch remains
  visible above the main ring cluster.

These are molecular character illustrations, not chemical diagrams. Major ring
counts, fused-ring connectivity, and branch arrangement follow the supplied images;
atom labels, stereochemistry, bond multiplicities, and small substituents are
simplified. Branch lengths and ring proportions support expressive eyes and tiny
sprite rendering. The original reference shapes were corroborated in the earlier
reference pass against PubChem [ispinesib CID 6851740](https://pubchem.ncbi.nlm.nih.gov/compound/6851740)
and [paclitaxel CID 36314](https://pubchem.ncbi.nlm.nih.gov/compound/36314).
The current construction uses the user's supplied images directly.

## Rendered evidence

`/private/tmp/molecule_first_review.png` shows editable molecular skeletons beside
finished 200 x 200 characters, 30 x 36 sprites, black silhouettes, and cream/navy
background checks. The skeletons are derived directly from the authored SVGs by
removing faces/accents and reducing fills/strokes. Their temporary editable sources
are `/private/tmp/isp_molecular_skeleton.svg` and
`/private/tmp/pac_molecular_skeleton.svg`.

Chromium rendered the actual SVGs through HTML images and Canvas. Faces, colored
limbs, and contrasting tall/wide proportions remain distinguishable at sprite
size. Individual ring details are clearest at title size. Pac intentionally sits
lower and shorter while the two foot baselines remain near y = 224. The drawings
contain no embedded images, scripts, external dependencies, fonts, or visible text.
Python ElementTree checks pass for XML validity, the shared viewBox, unique prefixed
IDs, accessible label references, and self-contained geometry. Browser alpha-bound
checks confirm the full characters fit inside the viewBox.

Game/build acceptance belongs to the separate integration pass. This art pass owns
only these two SVG assets and this report.

## Drawing references used

The SVG creator skill's task-selection and project-workflow references informed
scientific illustration, structured groups, shared coordinates, and rendered proof.
Focused local-only passages under
`/Users/vosslab/.codex/skills/experts/svg-creator-expert/references/`:

- `local-only/drawing_fundamentals/Drawing_Mentor_1-3_Drawing_Materials_Lines_and_Shapes_Perspective_and_3D_Shapes-2013.md`,
  lines 645-662: constructing a subject from basic shapes and testing its flat
  silhouette. Applied directly by making the molecular rings the character masses.
- `local-only/svg_authoring/Mastering_SVG-2018.md`, lines 635-666:
  viewport/viewBox scaling. Applied with the unchanged 240-unit coordinate contract
  and proportional strokes at gameplay and title sizes.
