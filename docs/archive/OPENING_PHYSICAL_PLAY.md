# Opening physical play

**Outcome:** Give **Hold That Door!** (`level_02`) and **Glucose Going Up!** (`level_01`) active,
touchable villains and anatomy-shaped movement, then reward the separate landing routes in
**Hold Your Breath** (`level_37`).

**Owners:** `src/levels_tutorial.ts`, `src/villain_scenes_tutorial.ts`, and `src/level_lung_recoil.ts` own the authored changes. `tests/_temp/opening_physical_encounters/REPORT.md` records bounded ordinary-input evidence.

**Boundary:** Preserve the 47-room order, `level_02`'s lesson and safe floor, both existing villain
attacks, `level_01`'s lift/pad requirements and timing, and `level_37`'s recoil/recovery routes. Use
existing fixed mechanics and collectible configuration only. No permanent tests or new mechanics.

**Status:** DONE. Root accepts this bounded opening gameplay change after fresh source SPEC,
QUALITY, and integration acceptance at 2026-10-18 00:10:01 UTC. Native and ordinary browser routes
clear **Hold That Door!** (`level_02`) and **Glucose Going Up!** (`level_01`); both browser smokes
passed, source and served build identities match, and root reviewed all six original captures and
accepts the sampled visuals. Human enjoyment remains an open design judgment, not a new test gate.

**Handoff:** See `tests/_temp/opening_physical_encounters/REPORT.md` for route evidence and observations.
