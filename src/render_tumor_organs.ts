import type { GameState } from "./types/simulation";
import { label } from "./render_characters";

const organs: Record<string, HTMLImageElement> = {};

// This is the finale's boss body, rather than another background organ.
export function draw_tumor_core(
  context: CanvasRenderingContext2D,
  state: GameState,
  time: number,
): void {
  const boss = state.level.boss;
  if (!boss) return;
  let image = organs.core;
  if (!image) {
    image = new Image();
    image.src = "./assets/tumor_core.svg";
    organs.core = image;
  }
  const centerX = boss.rect.x + boss.rect.width / 2;
  const centerY = boss.rect.y + boss.rect.height / 2;
  context.save();
  context.translate(centerX, centerY);
  const breath = Math.sin(time * 1.5) * 0.018;
  if (state.bossDefeated) {
    // A deflated core leaves the chamber open, with the same recognizable body.
    context.translate(0, 29);
    context.scale(1.03, 0.7);
  } else {
    context.scale(1 + breath, 1 - breath);
  }
  if (image.complete && image.naturalWidth > 0) {
    context.drawImage(image, -150, -98.4375, 300, 196.875);
  } else {
    context.beginPath();
    context.ellipse(0, 0, 106, 72, 0, 0, Math.PI * 2);
    context.fillStyle = "#a34f66";
    context.fill();
    context.strokeStyle = "#311c32";
    context.lineWidth = 5;
    context.stroke();
    label(context, ":(", 0, 0, "#ffe2dc", 32);
  }
  for (const targetPadId of boss.targetPadIds) {
    const target = state.level.pads.find((pad) => pad.id === targetPadId);
    if (!target || (target.accepts !== "isp" && target.accepts !== "pac")) continue;
    const active =
      state.bossDefeated || (state.pads.find((pad) => pad.id === targetPadId)?.active ?? false);
    const isIsp = target.accepts === "isp";
    const badgeX = isIsp ? -91 : 91;
    const badgeY = 48;
    const color = isIsp ? "#72d8ff" : "#ffbb65";
    context.beginPath();
    context.arc(badgeX, badgeY, 13, 0, Math.PI * 2);
    context.fillStyle = active ? (isIsp ? "#174a68" : "#68411e") : "#382a3a";
    context.fill();
    context.strokeStyle = color;
    context.lineWidth = 2;
    context.stroke();
    label(context, isIsp ? "I" : "P", badgeX, badgeY, color, 11);
  }
  context.restore();
  label(
    context,
    state.bossDefeated ? "CELL SAVED!" : "TUMOR CORE",
    centerX,
    centerY - 112,
    state.bossDefeated ? "#bcffb2" : "#ffe1a6",
    12,
  );
}

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
