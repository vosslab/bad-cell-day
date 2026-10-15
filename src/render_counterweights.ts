import { label, rounded } from "./render_characters";
import type { Rect } from "./types/geometry";
import type { CounterweightDefinition } from "./types/level";
import type { CounterweightState, GameState, PlatformState } from "./types/simulation";

const ROPE = "#f5d68a";
const INK = "#172d39";

export function counterweight_header_rect(
  decks: readonly [PlatformState, PlatformState],
  worldWidth: number,
): Rect {
  const center =
    (decks[0].rect.x + decks[0].rect.width / 2 + decks[1].rect.x + decks[1].rect.width / 2) / 2;
  return {
    x: Math.max(4, Math.min(worldWidth - 292, center - 144)),
    y: 65,
    width: 288,
    height: 99,
  };
}

function draw_arrow(context: CanvasRenderingContext2D, x: number, y: number, sign: number): void {
  context.beginPath();
  context.moveTo(x, y - sign * 6);
  context.lineTo(x, y + sign * 6);
  context.lineTo(x - 4, y + sign * 2);
  context.moveTo(x, y + sign * 6);
  context.lineTo(x + 4, y + sign * 2);
  context.stroke();
}

function draw_deck(
  context: CanvasRenderingContext2D,
  deck: PlatformState,
  side: "A" | "B",
  pull: number,
): void {
  const { x, y, width, height } = deck.rect;
  rounded(context, deck.rect, "#8c6a3c", 5, ROPE);
  rounded(context, { x: x + 2, y: y + 1, width: width - 4, height: 5 }, ROPE, 3, "");
  // Cross braces distinguish the linked decks from powered lifts and ordinary solids.
  context.strokeStyle = "#d9b67a";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(x + 12, y + 9);
  context.lineTo(x + 34, y + height - 3);
  context.moveTo(x + 12, y + height - 3);
  context.lineTo(x + 34, y + 9);
  context.moveTo(x + width - 34, y + 9);
  context.lineTo(x + width - 12, y + height - 3);
  context.moveTo(x + width - 34, y + height - 3);
  context.lineTo(x + width - 12, y + 9);
  context.stroke();
  // Solid arrows report actual carrier displacement; dashed arrows only show load pull.
  const movement = Math.sign(deck.displacement.y);
  const faceLabel = `${side}${movement !== 0 ? " MOVE" : pull !== 0 ? " PULL" : ""}`;
  label(context, faceLabel, x + width / 2 - 5, y + height / 2 + 2, "#fff5d4", 9);
  if (movement !== 0 || pull !== 0) {
    context.setLineDash(movement !== 0 ? [] : [2, 3]);
    context.strokeStyle = "#fff5d4";
    draw_arrow(context, x + width / 2 + 27, y + height / 2 + 1, movement || pull);
    context.setLineDash([]);
  }
}

function draw_readout(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  side: "A" | "B",
  load: number,
  rider: boolean,
): void {
  context.beginPath();
  context.arc(x - 44, y, 6, 0, Math.PI * 2);
  context.fillStyle = rider ? "#b9ffc7" : "#273942";
  context.fill();
  context.lineWidth = 2;
  context.strokeStyle = rider ? "#b9ffc7" : "#fff0ca";
  context.stroke();
  label(context, `${side} RIDER ${rider ? "ON" : "OFF"}`, x + 7, y, "#fff5d4", 10);
  label(context, `LOAD ${load}`, x, y + 17, "#fff5d4", 10);
  // Each filled pip is one actual sampled unit, including heroes and stacked cargo.
  for (let pip = 0; pip < load; pip += 1) {
    const columns = Math.min(load, 10);
    rounded(
      context,
      {
        x: x - ((columns - 1) * 9) / 2 + (pip % 10) * 9 - 3,
        y: y + 26 + Math.floor(pip / 10) * 8,
        width: 6,
        height: 5,
      },
      ROPE,
      1,
      "",
    );
  }
}

function draw_pair(
  context: CanvasRenderingContext2D,
  definition: CounterweightDefinition,
  pair: CounterweightState,
  decks: readonly [PlatformState, PlatformState],
  worldWidth: number,
): void {
  const [a, b] = decks;
  const ax = a.rect.x + a.rect.width / 2;
  const bx = b.rect.x + b.rect.width / 2;
  const center = (ax + bx) / 2;
  const header = counterweight_header_rect(decks, worldWidth);
  const headerX = header.x;
  // A static rope and pulley silhouette remains fully legible with reduced motion.
  const ropeY = 174;
  context.strokeStyle = ROPE;
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(ax, a.rect.y);
  context.lineTo(ax, ropeY);
  context.lineTo(bx, ropeY);
  context.lineTo(bx, b.rect.y);
  context.stroke();
  for (const x of [ax, bx]) {
    context.beginPath();
    context.arc(x, ropeY, 10, 0, Math.PI * 2);
    context.fillStyle = INK;
    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(x, ropeY, 3, 0, Math.PI * 2);
    context.fillStyle = ROPE;
    context.fill();
  }
  context.beginPath();
  context.moveTo(center, 164);
  context.lineTo(center, ropeY);
  context.stroke();

  // Fixed docking ticks make full endpoint alignment visible before a rider steps off.
  context.lineWidth = 2;
  for (const [deck, sign] of [
    [a, 1],
    [b, -1],
  ] as const) {
    const initialY = deck.rect.y - sign * pair.position;
    const x = deck.rect.x + deck.rect.width / 2;
    context.beginPath();
    for (const y of [initialY, initialY + sign * definition.travel]) {
      context.moveTo(x - 9, y);
      context.lineTo(x + 9, y);
    }
    context.stroke();
  }

  const both = pair.riders[0] && pair.riders[1];
  const pull = Math.sign(pair.loads[0] - pair.loads[1]);
  const moving = Math.sign(a.displacement.y);
  const direction = moving !== 0 ? moving : pull;
  const atStop = pair.position <= 0 || pair.position >= definition.travel;
  const intoStop =
    (pair.position <= 0 && pull < 0) || (pair.position >= definition.travel && pull > 0);
  const status = !both
    ? "WAIT FOR BOTH"
    : pair.blocked
      ? "BLOCKED"
      : pull === 0
        ? "BALANCED"
        : intoStop
          ? "END STOP"
          : moving !== 0
            ? "MOVING"
            : "LOAD PULL";
  const detail = !both
    ? "A rider on each deck releases the clutch"
    : pair.blocked
      ? "Clear the deck or its cargo path"
      : pull === 0
        ? "Equal loads hold both decks"
        : `${moving !== 0 ? "TRAVEL" : "PULL"}: A ${direction > 0 ? "DOWN" : "UP"} / B ${direction > 0 ? "UP" : "DOWN"}`;
  rounded(context, header, INK, 9, ROPE);
  label(context, status, headerX + 144, 80, "#fff5d4", 13);
  label(context, detail, headerX + 144, 96, "#fff5d4", 9);
  draw_readout(context, headerX + 74, 114, "A", pair.loads[0], pair.riders[0]);
  draw_readout(context, headerX + 214, 114, "B", pair.loads[1], pair.riders[1]);
  const stopText = pair.position <= 0 ? "A UPPER / B LOWER STOP" : "A LOWER / B UPPER STOP";
  if (atStop) label(context, stopText, headerX + 144, 155, "#fff5d4", 9);
  draw_deck(context, a, "A", pull);
  draw_deck(context, b, "B", -pull);
}

// All indicators read the last carrier transaction; drawing never resamples or changes physics.
export function draw_counterweights(context: CanvasRenderingContext2D, state: GameState): void {
  for (const definition of state.level.counterweights ?? []) {
    const pair = state.counterweights.find((item) => item.id === definition.id);
    const a = state.platforms.find((item) => item.id === definition.platformIds[0]);
    const b = state.platforms.find((item) => item.id === definition.platformIds[1]);
    if (!pair || !a || !b) continue;
    context.save();
    draw_pair(context, definition, pair, [a, b], state.level.world.width);
    context.restore();
  }
}
