import type { Vec2 } from "./geometry";

export type VillainScheme = {
  readonly id: string;
  readonly villain: "gem" | "cana";
  readonly target: {
    readonly kind: "barrier" | "platform" | "hazard";
    readonly id: string;
  };
  readonly counterPadIds: readonly string[];
  readonly action: "dna_wall" | "dna_bridge" | "dna_trap" | "glucose_gate" | "energy_drain";
};

type VillainAppearance = {
  readonly position: Readonly<Vec2>;
  readonly opening: string;
  readonly ending: string;
};

export type VillainScene = {
  readonly gem: VillainAppearance;
  readonly cana: VillainAppearance;
  readonly schemes: readonly VillainScheme[];
};
