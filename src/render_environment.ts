import { ORGAN_THEMES } from "./anatomy";
import type { OrganStage } from "./types/anatomy";
import type { GameState } from "./types/simulation";

const images: Partial<Record<OrganStage, HTMLImageElement>> = {};

function environment_image(stage: OrganStage): HTMLImageElement {
  let image = images[stage];
  if (!image) {
    image = new Image();
    image.src = ORGAN_THEMES[stage].assetPath;
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
  const theme = ORGAN_THEMES[stage];
  context.save();
  const wash = context.createLinearGradient(0, 0, width, height);
  wash.addColorStop(0, theme.palette.wash);
  wash.addColorStop(1, theme.palette.background);
  context.fillStyle = wash;
  context.fillRect(0, 0, width, height);
  const image = environment_image(stage);
  // Static peripheral anatomy stretches with the authored world, behind every play layer.
  if (image.complete && image.naturalWidth > 0) {
    context.drawImage(image, 0, 0, width, height);
  }
  context.restore();
}
