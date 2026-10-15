export type OrganStage = "lungs" | "intestine" | "marrow" | "liver" | "brain" | "tumor";

export type OrganPalette = {
  readonly background: string;
  readonly wash: string;
  readonly flesh: string;
  readonly edge: string;
  readonly vessel: string;
  readonly lesion: string;
  readonly shadow: string;
};

export type TissueSurfaceAppearance = {
  readonly kind: "solid" | "carrier" | "fragile" | "counterweight";
  readonly active: boolean;
  readonly powered: boolean;
  readonly stabilized: boolean;
};
