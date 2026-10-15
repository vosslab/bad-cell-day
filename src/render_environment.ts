import { label } from "./render_characters";
import type { LevelDefinition } from "./types/level";
import type { GameState } from "./types/simulation";

type Stage = LevelDefinition["stage"];

export const STAGE_THEMES: Record<Stage, readonly [string, string, string, string]> = {
  garden: ["#39212c", "#754451", "#79c9a0", "CELL ENTRANCE"],
  sewers: ["#321c2a", "#62333e", "#9bbb67", "CYTOPLASM CHAOS"],
  laboratory: ["#382335", "#754251", "#82cbd1", "MICROTUBULE MADNESS"],
  factory: ["#3d242d", "#754039", "#c19a76", "GEM SLIME FACTORY"],
  citadel: ["#342035", "#643746", "#b0a0d7", "CANA CONTRAPTIONS"],
  boss: ["#361725", "#773240", "#da9bba", "BAD CELL DAY"],
};

const images: Partial<Record<Stage, HTMLImageElement>> = {};

function environment_image(stage: Stage): HTMLImageElement {
  let image = images[stage];
  if (!image) {
    image = new Image();
    image.src = `./assets/environment_${stage}.svg`;
    images[stage] = image;
  }
  return image;
}

export function draw_environment(
  context: CanvasRenderingContext2D,
  state: GameState,
  _time: number,
): void {
  const { width, height } = state.level.world;
  const stage = state.level.stage;
  const [dark, light, , title] = STAGE_THEMES[stage];
  context.save();
  const wash = context.createLinearGradient(0, 0, width, height);
  wash.addColorStop(0, light);
  wash.addColorStop(1, dark);
  context.fillStyle = wash;
  context.fillRect(0, 0, width, height);
  const image = environment_image(stage);
  // Static peripheral anatomy stretches with the authored world, behind every play layer.
  if (image.complete && image.naturalWidth > 0) {
    context.drawImage(image, 0, 0, width, height);
  }
  label(context, title, width / 2, 25, "#f4d5d9", 11);
  context.restore();
}
