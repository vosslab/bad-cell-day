import type { OrganPalette, OrganStage } from "./types/anatomy";

type OrganTheme = {
  readonly name: string;
  readonly heading: string;
  readonly assetPath: string;
  readonly palette: OrganPalette;
};

// Presentation identity has one owner; stable level IDs and saves do not use these keys.
export const ORGAN_THEMES: Readonly<Record<OrganStage, OrganTheme>> = {
  lungs: {
    name: "Lungs",
    heading: "LUNGS: A SHARED BREATH",
    assetPath: "./assets/environment_lungs.svg",
    palette: {
      background: "#39212c",
      wash: "#754451",
      flesh: "#bd727d",
      edge: "#ffe1b5",
      vessel: "#a3345e",
      lesion: "#e998ad",
      shadow: "#291b2b",
    },
  },
  intestine: {
    name: "Intestine",
    heading: "INTESTINE: TWISTS AND TURNS",
    assetPath: "./assets/environment_intestine.svg",
    palette: {
      background: "#321c2a",
      wash: "#62333e",
      flesh: "#c27e69",
      edge: "#ffe3ae",
      vessel: "#9b3d55",
      lesion: "#d59b58",
      shadow: "#291b28",
    },
  },
  marrow: {
    name: "Marrow",
    heading: "MARROW: INSIDE THE BONES",
    assetPath: "./assets/environment_marrow.svg",
    palette: {
      background: "#382335",
      wash: "#754251",
      flesh: "#c48995",
      edge: "#fff0ca",
      vessel: "#a63861",
      lesion: "#e6b59d",
      shadow: "#2b1c30",
    },
  },
  liver: {
    name: "Liver",
    heading: "LIVER: THE LIVING FILTER",
    assetPath: "./assets/environment_liver.svg",
    palette: {
      background: "#3d242d",
      wash: "#754039",
      flesh: "#af6665",
      edge: "#ffdb9f",
      vessel: "#842c50",
      lesion: "#de9a68",
      shadow: "#301b29",
    },
  },
  brain: {
    name: "Brain",
    heading: "BRAIN: THINKING TOGETHER",
    assetPath: "./assets/environment_brain.svg",
    palette: {
      background: "#342035",
      wash: "#643746",
      flesh: "#b57f9c",
      edge: "#ffe0cf",
      vessel: "#83416b",
      lesion: "#dfa5ba",
      shadow: "#28192f",
    },
  },
  tumor: {
    name: "Tumor",
    heading: "TUMOR: BAD CELL DAY",
    assetPath: "./assets/environment_tumor.svg",
    palette: {
      background: "#361725",
      wash: "#773240",
      flesh: "#b45c80",
      edge: "#ffdba7",
      vessel: "#7c254e",
      lesion: "#e4a06f",
      shadow: "#271329",
    },
  },
};
