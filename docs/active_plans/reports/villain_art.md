# Molecular villain art

The authored assets are [gem.svg](../../../src/assets/gem.svg) and
[cana.svg](../../../src/assets/cana.svg). Both use a transparent 240-square viewBox,
navy outlines, a baseline at 224, semantic drawing groups, and accessible title/description.
The existing `isp.svg` and `pac.svg` establish the drawing language.

## Scaffold construction

- Gem follows the supplied gemcitabine reference: upper six-member cytosine ring,
  linked lower five-member sugar, hydroxymethyl side branch, hydroxyl branch,
  and two fluorine terminals sharing one sugar carbon. Its upper ring carries
  angry eyes; the huge jagged beard overlaps its lower edge and part of the linking bond.
  The sugar polygon and paired terminal branches remain visible.
- Cana follows the supplied canagliflozin reference: fluorophenyl linked to
  thiophene, then a methylphenyl ring linked directly to a six-member glucose ring.
  The methylphenyl ring carries the smug face and smooth bare chin. Sugar branches
  form its hands and feet. The thiophene sulfur becomes a warm terminal accent.
- Filled ring polygons and thickened bonds define each silhouette. Facial features
  decorate those ring masses. Atom letters, stereochemistry, most multiple bonds,
  and explicit hydrogen counts are omitted for sprite readability. These are
  molecular character illustrations, not chemical structure diagrams.
- All geometry is original SVG construction based on the supplied structures;
  neither reference image nor watermark is embedded.

## Verification

Both files parse as XML and render successfully through librsvg at 48 and 200 px.
The proof sheet is `/private/tmp/villain_art_review.png`. Inspection at 48 px shows
the purple jagged beard and angry eyes distinctly from Cana's green smooth grin.
The larger rendering preserves Gem's separate sugar ring and Cana's diagonal chain
of four rings. Outlines and terminal groups fit inside the viewport.

Chromium's local Playwright launch failed at the macOS sandbox MachPortRendezvous
permission boundary before a page opened. Consumer browser acceptance remains an
integration check; the proof sheet uses the standalone SVG renderer.

## Drawing references

Focused skill-local passages used:

- `scientific_illustration/A_Handbook_of_Biological_Illustration-1988.md`,
  lines 278-294: clarity at reduction, restrained detail, and foreground outline hierarchy.
- `svg_authoring/Mastering_SVG-2018.md`, lines 635-658: viewport and viewBox scaling.

These books guide construction. The user's supplied chemical reference images
are the subject evidence. The parent approved the scaffold mapping before drawing.
