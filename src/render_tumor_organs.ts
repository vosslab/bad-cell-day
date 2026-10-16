import type { GameState } from "./types/simulation";
import { label } from "./render_characters";

const organs: Record<string, HTMLImageElement> = {};

function organ_image(kind: string, source: string): HTMLImageElement | undefined {
  if (typeof Image === "undefined") return undefined;
  let image = organs[kind];
  if (!image) {
    image = new Image();
    image.src = source;
    organs[kind] = image;
  }
  return image.complete && image.naturalWidth > 0 ? image : undefined;
}

function draw_gem_pump_fallback(context: CanvasRenderingContext2D, x: number, y: number): void {
  context.save();
  context.translate(x, y);
  context.lineCap = "round";
  context.lineJoin = "round";
  context.strokeStyle = "#311c32";
  context.lineWidth = 9;
  context.beginPath();
  context.moveTo(-27, -7);
  context.bezierCurveTo(-35, -22, -24, -33, -14, -23);
  context.moveTo(20, -5);
  context.bezierCurveTo(30, -23, 40, -20, 42, -31);
  context.moveTo(28, 15);
  context.bezierCurveTo(40, 24, 43, 25, 51, 20);
  context.stroke();
  context.beginPath();
  context.moveTo(0, -23);
  context.bezierCurveTo(-19, -39, -39, -21, -29, 1);
  context.bezierCurveTo(-22, 15, -8, 26, 12, 34);
  context.bezierCurveTo(20, 17, 42, 12, 43, -7);
  context.bezierCurveTo(44, -27, 18, -37, 0, -23);
  context.closePath();
  context.fillStyle = "#864354";
  context.fill();
  context.stroke();
  for (const [nodeX, nodeY] of [
    [-12, -6],
    [16, 5],
  ] as const) {
    context.beginPath();
    context.moveTo(nodeX, nodeY - 6);
    context.lineTo(nodeX + 6, nodeY - 3);
    context.lineTo(nodeX + 6, nodeY + 3);
    context.lineTo(nodeX, nodeY + 6);
    context.lineTo(nodeX - 6, nodeY + 3);
    context.lineTo(nodeX - 6, nodeY - 3);
    context.closePath();
    context.fillStyle = "#e3ad61";
    context.fill();
    context.strokeStyle = "#593941";
    context.lineWidth = 2;
    context.stroke();
  }
  context.restore();
}

function draw_pump_targets(
  context: CanvasRenderingContext2D,
  state: GameState,
  x: number,
  y: number,
): void {
  const boss = state.level.boss;
  if (!boss) return;
  const pads = boss.targetPadIds.flatMap((id) => {
    const definition = state.level.pads.find((pad) => pad.id === id);
    if (!definition || (definition.accepts !== "isp" && definition.accepts !== "pac")) return [];
    const active = state.bossDefeated || (state.pads.find((pad) => pad.id === id)?.active ?? false);
    return [{ owner: definition.accepts, active }];
  });
  const spacing = 22;
  pads.forEach(({ owner, active }, index) => {
    const badgeX = x + (index - (pads.length - 1) / 2) * spacing;
    const color = owner === "isp" ? "#72d8ff" : "#ffbb65";
    context.beginPath();
    context.arc(badgeX, y, 7, 0, Math.PI * 2);
    context.fillStyle = active ? (owner === "isp" ? "#174a68" : "#68411e") : "#382a3a";
    context.fill();
    context.strokeStyle = color;
    context.lineWidth = active ? 2 : 1;
    context.stroke();
    label(context, owner === "isp" ? "I" : "P", badgeX, y, active ? "#f5f5e9" : color, 8);
  });
}

// Level16's Gem remains the only live character; this pump replaces the old central display.
export function draw_gem_pump(
  context: CanvasRenderingContext2D,
  state: GameState,
  time: number,
): void {
  const boss = state.level.boss;
  if (!boss) return;
  const centerX = boss.rect.x + boss.rect.width / 2;
  // The actor and his speech occupy the lower center, so the pump uses the quiet space above.
  const centerY = boss.rect.y - 76;
  const image = organ_image("glucose", "./assets/tumor_glucose_organ.svg");
  const width = 110;
  const height = width / 1.6;
  context.save();
  context.translate(centerX, centerY);
  if (state.bossDefeated) {
    context.translate(0, 8);
    context.scale(1.04, 0.62);
  } else {
    const breath = Math.sin(time * 1.5) * 0.018;
    context.scale(1 + breath, 1 - breath);
  }
  if (image) {
    context.drawImage(image, -width / 2, -height / 2, width, height);
  } else {
    draw_gem_pump_fallback(context, 0, 0);
  }
  context.restore();
  label(
    context,
    state.bossDefeated ? "SUGAR NAP" : "SUGAR PUMP",
    centerX,
    centerY - height / 2 - 9,
    state.bossDefeated ? "#bcffb2" : "#ffe1a6",
    9,
  );
  draw_pump_targets(context, state, centerX, centerY + height / 2 - 3);
}

function draw_cana_signal_fallback(context: CanvasRenderingContext2D): void {
  context.lineCap = "round";
  context.strokeStyle = "#311c32";
  context.lineWidth = 8;
  context.beginPath();
  context.moveTo(-42, -12);
  context.lineTo(-69, -26);
  context.moveTo(43, -11);
  context.lineTo(70, -27);
  context.moveTo(-33, 20);
  context.lineTo(-60, 40);
  context.moveTo(35, 20);
  context.lineTo(63, 39);
  context.stroke();
  context.beginPath();
  context.ellipse(-20, 0, 40, 32, -0.15, 0, Math.PI * 2);
  context.ellipse(22, 0, 42, 33, 0.13, 0, Math.PI * 2);
  context.fillStyle = "#a34f66";
  context.fill();
  context.lineWidth = 4;
  context.stroke();
  context.beginPath();
  context.moveTo(-39, -8);
  context.bezierCurveTo(-20, -29, -5, -10, -18, 7);
  context.moveTo(9, -19);
  context.bezierCurveTo(33, -34, 48, -11, 30, 2);
  context.strokeStyle = "#582e48";
  context.stroke();
  context.beginPath();
  context.arc(2, 9, 7, 0, Math.PI * 2);
  context.fillStyle = "#e3ad61";
  context.fill();
  context.strokeStyle = "#593941";
  context.lineWidth = 3;
  context.stroke();
}

// Cana is the separate live actor; this knot is his level-19 tissue display.
export function draw_cana_signal_knot(
  context: CanvasRenderingContext2D,
  state: GameState,
  time: number,
): void {
  const boss = state.level.boss;
  if (!boss) return;
  const centerX = boss.rect.x + boss.rect.width / 2;
  const centerY = boss.rect.y + boss.rect.height / 2 - 5;
  const image = organ_image("signal_knot", "./assets/tumor_signal_knot.svg");
  const width = 160;
  const height = 100;
  context.save();
  context.translate(centerX, centerY);
  if (state.bossDefeated) {
    context.translate(0, 8);
    context.scale(1.04, 0.65);
  } else {
    const breath = Math.sin(time * 1.5) * 0.018;
    context.scale(1 + breath, 1 - breath);
  }
  if (image) {
    context.drawImage(image, -width / 2, -height / 2, width, height);
  } else {
    draw_cana_signal_fallback(context);
  }
  context.restore();
  label(
    context,
    state.bossDefeated ? "SIGNAL QUIET" : "SIGNAL KNOT",
    centerX,
    centerY - height / 2 - 14,
    state.bossDefeated ? "#bcffb2" : "#ffe1a6",
    10,
  );
  draw_pump_targets(context, state, centerX, centerY + height / 2 + 10);
}

// This is the finale's boss body, rather than another background organ.
export function draw_tumor_core(
  context: CanvasRenderingContext2D,
  state: GameState,
  time: number,
): void {
  const boss = state.level.boss;
  if (!boss) return;
  const image = organ_image("core", "./assets/tumor_core.svg");
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
  if (image) {
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
  const image = organ_image(kind, `./assets/tumor_${kind}_organ.svg`);
  if (!image) return;
  context.save();
  // The upper center is empty in these authored encounters, behind every play layer.
  context.translate(state.level.world.width / 2, 171);
  const breath = Math.sin(time * 0.7) * 0.012;
  context.scale(1 + breath, 1 - breath);
  context.globalAlpha = 0.72;
  context.drawImage(image, -160, -100, 320, 200);
  context.restore();
}
