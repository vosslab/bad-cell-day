import { draw_villain, label, rounded } from "./render_characters";
import type { Rect } from "./types/geometry";
import type { GameState } from "./types/simulation";
import type { VillainScheme } from "./types/villain";

function target_rect(state: GameState, scheme: VillainScheme): Readonly<Rect> | undefined {
  if (scheme.target.kind === "barrier") {
    return state.level.barriers.find((item) => item.id === scheme.target.id)?.rect;
  }
  if (scheme.target.kind === "platform") {
    return state.platforms.find((item) => item.id === scheme.target.id)?.rect;
  }
  return state.hazards.find((item) => item.id === scheme.target.id)?.rect;
}

function scheme_countered(state: GameState, scheme: VillainScheme): boolean {
  if (scheme.target.kind === "barrier") {
    return state.barriers.some((item) => item.id === scheme.target.id && item.open);
  }
  if (scheme.target.kind === "hazard") {
    return state.hazards.some((item) => item.id === scheme.target.id && !item.active);
  }
  const platform = state.platforms.find((item) => item.id === scheme.target.id);
  if (scheme.action === "dna_bridge") return platform?.stabilized ?? false;
  const counterActive = scheme.counterPadIds.some((id) =>
    state.pads.some((pad) => pad.id === id && pad.active),
  );
  return counterActive && (platform?.powered ?? false);
}

function hexagon(context: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
  context.beginPath();
  for (let index = 0; index < 6; index += 1) {
    const angle = (index * Math.PI) / 3;
    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;
    if (index === 0) context.moveTo(px, py);
    else context.lineTo(px, py);
  }
  context.closePath();
  context.stroke();
}

// Draw causal connections first so their translucent wires never cover solid edges.
export function draw_villain_connections(
  context: CanvasRenderingContext2D,
  state: GameState,
  time: number,
): void {
  const scene = state.level.villainScene;
  if (!scene) return;
  const opening = state.time < 3;
  const ending = state.status === "complete" || state.bossDefeated;
  for (const scheme of scene.schemes) {
    const rect = target_rect(state, scheme);
    if (!rect) continue;
    const actor = scene[scheme.villain].position;
    const gem = scheme.villain === "gem";
    const countered = scheme_countered(state, scheme);
    const targetX = rect.x + rect.width / 2;
    const targetY = rect.y + rect.height / 2;
    context.save();
    context.strokeStyle = gem ? "#caa0f5" : "#a7eab5";
    context.lineWidth = opening ? 2 : 1;
    context.globalAlpha = ending ? 0.12 : opening ? 0.65 : countered ? 0.16 : 0.32;
    context.setLineDash(gem ? [3, 7] : [7, 5]);
    context.beginPath();
    context.moveTo(actor.x + 22, actor.y - 18);
    context.bezierCurveTo(actor.x + 45, actor.y + 20, targetX, targetY - 35, targetX, targetY);
    context.stroke();
    context.setLineDash([]);
    if (opening && !ending) {
      // Gem sends DNA toward the target; Cana steals glucose in the opposite direction.
      const progress = (time * 0.8) % 1;
      const fraction = gem ? progress : 1 - progress;
      const back = 1 - fraction;
      const x =
        back ** 3 * (actor.x + 22) +
        3 * back ** 2 * fraction * (actor.x + 45) +
        3 * back * fraction ** 2 * targetX +
        fraction ** 3 * targetX;
      const y =
        back ** 3 * (actor.y - 18) +
        3 * back ** 2 * fraction * (actor.y + 20) +
        3 * back * fraction ** 2 * (targetY - 35) +
        fraction ** 3 * targetY;
      if (gem) {
        label(context, "DNA", x, y, "#ecd5ff", 8);
      } else {
        hexagon(context, x, y, 5);
      }
    }
    context.restore();
  }
}

function draw_dna_motif(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  countered: boolean,
  active: boolean,
  time: number,
): void {
  const vertical = rect.height > rect.width;
  const length = vertical ? rect.height : rect.width;
  const center = vertical ? rect.x + rect.width / 2 : rect.y + rect.height / 2;
  const amplitude = Math.min(6, (vertical ? rect.width : rect.height) * 0.24);
  context.save();
  // DNA lives inside the target, leaving the owner color and exact collision edge exposed.
  context.beginPath();
  context.rect(rect.x + 3, rect.y + 3, Math.max(0, rect.width - 6), Math.max(0, rect.height - 6));
  context.clip();
  context.globalAlpha = active ? 0.8 : 0.2;
  context.strokeStyle = countered ? "#d4f8d6" : "#e4bcff";
  context.lineWidth = 1.5;
  for (const side of [-1, 1]) {
    context.beginPath();
    for (let offset = 3; offset <= length - 3; offset += 2) {
      const wave = Math.sin(offset * 0.18 + time * 0.8) * amplitude * side;
      const x = vertical ? center + wave : rect.x + offset;
      const y = vertical ? rect.y + offset : center + wave;
      if (offset === 3) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.stroke();
  }
  for (let offset = 7; offset < length - 3; offset += 11) {
    const wave = Math.sin(offset * 0.18 + time * 0.8) * amplitude;
    context.beginPath();
    if (vertical) {
      context.moveTo(center - wave, rect.y + offset);
      context.lineTo(center + wave, rect.y + offset);
    } else {
      context.moveTo(rect.x + offset, center - wave);
      context.lineTo(rect.x + offset, center + wave);
    }
    context.stroke();
  }
  context.restore();
}

function draw_glucose_motif(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  supplied: boolean,
): void {
  context.save();
  context.strokeStyle = supplied ? "#c9ffd0" : "#9ac5a5";
  context.fillStyle = supplied ? "#b4f2a9" : "#314b45";
  context.lineWidth = 1.5;
  // A small reservoir is inset from the target's collision boundary.
  const x = rect.x + rect.width / 2;
  const y = rect.y + rect.height / 2;
  for (let index = -1; index <= 1; index += 1) {
    context.globalAlpha = supplied ? 0.9 : 0.4;
    hexagon(context, x + index * 9, y, Math.min(3.5, rect.height * 0.2));
    if (supplied) context.fill();
  }
  context.restore();
}

function dialogue(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  worldWidth: number,
  color: string,
): void {
  context.save();
  context.font = "800 9px system-ui, sans-serif";
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (context.measureText(next).width > 192 && line) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  const width = Math.min(
    210,
    Math.max(...lines.map((entry) => context.measureText(entry).width)) + 16,
  );
  const height = lines.length * 12 + 10;
  // Low perches leave room above; high perches put the bubble beside the actor.
  const beside = y - 84 - height < 46;
  const bubbleX = beside ? x + (x < worldWidth / 2 ? 1 : -1) * (width / 2 + 40) : x;
  const left = Math.max(5, Math.min(worldWidth - width - 5, bubbleX - width / 2));
  const top = beside ? Math.max(46, y - 62) : y - 84 - height;
  rounded(context, { x: left, y: top, width, height }, "#192b3aee", 7, color);
  lines.forEach((entry, index) =>
    label(context, entry, left + width / 2, top + 11 + index * 12, "#f5f5e9", 9),
  );
  context.restore();
}

export function draw_villain_scene(
  context: CanvasRenderingContext2D,
  state: GameState,
  time: number,
): void {
  const scene = state.level.villainScene;
  if (!scene) return;
  const ending = state.status === "complete" || state.bossDefeated;
  for (const scheme of scene.schemes) {
    const rect = target_rect(state, scheme);
    if (!rect) continue;
    const countered = scheme_countered(state, scheme);
    if (scheme.villain === "gem") {
      const active =
        scheme.target.kind === "barrier"
          ? !state.barriers.some((item) => item.id === scheme.target.id && item.open)
          : scheme.target.kind === "hazard"
            ? state.hazards.some((item) => item.id === scheme.target.id && item.active)
            : state.platforms.some((item) => item.id === scheme.target.id && item.active);
      draw_dna_motif(context, rect, countered, active, time);
    } else {
      const supplied =
        scheme.target.kind === "platform"
          ? state.platforms.some((item) => item.id === scheme.target.id && item.powered)
          : countered;
      draw_glucose_motif(context, rect, supplied);
    }
  }
  for (const villain of ["gem", "cana"] as const) {
    const actor = scene[villain];
    const schemes = scene.schemes.filter((scheme) => scheme.villain === villain);
    const counteredCount = schemes.filter((scheme) => scheme_countered(state, scheme)).length;
    const fullyCountered = schemes.length > 0 && counteredCount === schemes.length;
    const partiallyCountered = counteredCount > 0 && !fullyCountered;
    const pose = ending
      ? "escape"
      : state.time < 3
        ? "opening"
        : fullyCountered
          ? "countered"
          : "idle";
    const scatter = ending ? Math.sin(time * 5) * 7 : 0;
    draw_villain(
      context,
      actor.position.x + scatter,
      actor.position.y,
      villain === "gem",
      time,
      pose,
    );
    const quip = ending
      ? actor.ending
      : state.time < 3
        ? actor.opening
        : fullyCountered
          ? villain === "gem"
            ? "Stop unpicking my brilliant DNA!"
            : "Hey! That's MY glucose supply!"
          : partiallyCountered
            ? villain === "gem"
              ? "One trap down. Another is still live!"
              : "One glucose supply down. Another still feeds my machine!"
            : villain === "gem"
              ? "A beard needs time to scheme."
              : "Smooth chin. Very unsmooth plan.";
    dialogue(
      context,
      quip,
      actor.position.x,
      actor.position.y,
      state.level.world.width,
      villain === "gem" ? "#ba91e8" : "#96d5a4",
    );
  }
}
