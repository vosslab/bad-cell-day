import type { GameState } from "./types/simulation";

const organs: Record<string, HTMLImageElement> = {};

export function draw_tumor_organs(
  context: CanvasRenderingContext2D,
  state: GameState,
  time: number,
): void {
  const kind =
    state.level.id === "level_13" || state.level.id === "level_17"
      ? "bubble"
      : state.level.id === "level_19"
        ? "glucose"
        : undefined;
  if (!kind) return;
  let image = organs[kind];
  if (!image) {
    image = new Image();
    image.src = `./assets/tumor_${kind}_organ.svg`;
    organs[kind] = image;
  }
  if (!image.complete || image.naturalWidth === 0) return;
  context.save();
  // The upper center is empty in these authored encounters, behind every play layer.
  context.translate(state.level.world.width / 2, 171);
  const breath = Math.sin(time * 0.7) * 0.012;
  context.scale(1 + breath, 1 - breath);
  context.globalAlpha = 0.72;
  context.drawImage(image, -160, -100, 320, 200);
  context.restore();
}
