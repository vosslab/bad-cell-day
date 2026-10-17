import { overlaps } from "./collisions";
import { label, rounded } from "./render_characters";
import type { GameState } from "./types/simulation";

let acid_dunk_image: HTMLImageElement | undefined;

function loaded_acid_dunk_image(): HTMLImageElement | undefined {
  if (typeof Image === "undefined") return undefined;
  if (!acid_dunk_image) {
    acid_dunk_image = new Image();
    acid_dunk_image.src = "./assets/acid_dunk_splash.svg";
  }
  return acid_dunk_image.complete && acid_dunk_image.naturalWidth > 0 ? acid_dunk_image : undefined;
}

function draw_fallback_splash(
  context: CanvasRenderingContext2D,
  x: number,
  surfaceY: number,
): void {
  context.save();
  context.fillStyle = "#c7e64d";
  context.strokeStyle = "#492947";
  context.lineWidth = 3;
  context.beginPath();
  context.ellipse(x, surfaceY, 26, 8, 0, 0, Math.PI * 2);
  context.fill();
  context.stroke();
  context.beginPath();
  context.arc(x, surfaceY - 5, 19, Math.PI, Math.PI * 2);
  context.stroke();
  context.restore();
}

export function draw_villain_dunks(context: CanvasRenderingContext2D, state: GameState): void {
  const image = loaded_acid_dunk_image();
  for (const body of state.villainBodies) {
    if (body.respawnRemaining <= 0) continue;

    const acid = state.hazards.find((hazard) => {
      const definition = state.level.hazards.find((item) => item.id === hazard.id);
      return definition?.kind === "slime" && hazard.active && overlaps(body.rect, hazard.rect);
    });
    const x = body.rect.x + body.rect.width / 2;
    const surfaceY = acid?.rect.y ?? body.rect.y + body.rect.height;
    if (image) {
      // The approved art's local (64,72) anchor meets the live slime surface.
      context.drawImage(image, x - 64, surfaceY - 72, 128, 96);
    } else {
      draw_fallback_splash(context, x, surfaceY);
    }

    const name = body.villain === "gem" ? "GEM" : "CANA";
    const remaining = Math.ceil(body.respawnRemaining);
    const message = `${name}: GLUB! BACK IN ${remaining}s`;
    context.save();
    context.font = "800 9px system-ui, sans-serif";
    const width = Math.min(190, context.measureText(message).width + 14);
    context.restore();
    const left = Math.max(5, Math.min(state.level.world.width - width - 5, x - width / 2));
    const top = Math.max(48, surfaceY - 94);
    const color = body.villain === "gem" ? "#c7a5f1" : "#a5e6b6";
    rounded(context, { x: left, y: top, width, height: 18 }, "#192b3aee", 7, color);
    label(context, message, left + width / 2, top + 9, "#fff0c9", 9);
  }
}
