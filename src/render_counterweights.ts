import { ORGAN_THEMES } from "./anatomy";
import { label, rounded } from "./render_characters";
import { draw_tissue_surface } from "./render_tissue";
import type { OrganPalette, OrganStage } from "./types/anatomy";
import type { Rect } from "./types/geometry";
import type { CounterweightDefinition } from "./types/level";
import type { CounterweightState, GameState, PlatformState } from "./types/simulation";

const READOUT_EDGE = "#f5d68a";
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
    height: 125,
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
  stage: OrganStage,
  time: number,
): void {
  const { x, y, width, height } = deck.rect;
  draw_tissue_surface(
    context,
    deck.rect,
    stage,
    {
      kind: "counterweight",
      active: deck.active,
      powered: deck.powered,
      stabilized: deck.stabilized,
    },
    time,
  );
  // Solid arrows report actual carrier displacement; dashed arrows only show load pull.
  const movement = Math.sign(deck.displacement.y);
  const faceLabel = `DECK ${side}`;
  // The opaque face keeps text separate from the sac's tissue and attachment folds.
  rounded(
    context,
    { x: x + width / 2 - 47, y: y + height / 2 - 6, width: 89, height: 16 },
    INK,
    5,
    "",
  );
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
      READOUT_EDGE,
      1,
      "",
    );
  }
}

function draw_tension_vessels(
  context: CanvasRenderingContext2D,
  pair: CounterweightState,
  decks: readonly [PlatformState, PlatformState],
  palette: OrganPalette,
  time: number,
): void {
  const [a, b] = decks;
  const ax = a.rect.x + a.rect.width / 2;
  const bx = b.rect.x + b.rect.width / 2;
  const coupled = pair.riders[0] && pair.riders[1];
  const loaded = pair.loads[0] !== pair.loads[1];
  const moving = a.displacement.y !== 0 || b.displacement.y !== 0;
  // Curved translucent cords are connective tissue, never a horizontal foothold.
  const slack = coupled && loaded ? 5 : 15;
  const contraction = moving ? Math.sin(time * 5) * 1.5 : 0;
  context.save();
  context.globalAlpha *= 0.75;
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(ax, a.rect.y + 1);
  context.bezierCurveTo(ax - slack, a.rect.y - 40, ax + slack, 199, ax, 174);
  context.quadraticCurveTo((ax + bx) / 2, 174 + slack * 2 + contraction, bx, 174);
  context.bezierCurveTo(bx - slack, 199, bx + slack, b.rect.y - 40, bx, b.rect.y + 1);
  context.strokeStyle = palette.shadow;
  context.lineWidth = 7;
  context.stroke();
  context.strokeStyle = palette.vessel;
  context.lineWidth = 4;
  context.stroke();
  context.strokeStyle = palette.edge;
  context.lineWidth = 1;
  context.setLineDash([3, 6]);
  context.stroke();
  context.setLineDash([]);
  // Attachment sacs squeeze only for actual travel; rider/load cues remain readable at time 0.
  for (let side = 0; side < decks.length; side += 1) {
    const deck = decks[side];
    const load = pair.loads[side];
    if (!deck || load === undefined) continue;
    const x = deck.rect.x + deck.rect.width / 2;
    const squeeze = deck.displacement.y !== 0 ? 2 : 0;
    const spread = 10 + Math.min(load, 5) - squeeze;
    context.beginPath();
    context.moveTo(x - spread, 171);
    context.bezierCurveTo(x - spread - 3, 178 + squeeze, x - 4, 182 + squeeze, x + 1, 178);
    context.bezierCurveTo(x + spread, 183, x + spread + 3, 170, x + spread - 2, 168);
    context.bezierCurveTo(x + 2, 165, x - 2, 171, x - spread, 171);
    context.closePath();
    context.fillStyle = pair.riders[side] ? palette.flesh : palette.shadow;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = pair.blocked ? palette.lesion : palette.edge;
    context.stroke();
    context.beginPath();
    context.moveTo(x - 3, 172);
    context.quadraticCurveTo(x, 178, x + 3, 172);
    context.lineWidth = 1;
    context.stroke();
  }
  context.restore();
}

function draw_docking_stops(
  context: CanvasRenderingContext2D,
  deck: PlatformState,
  sign: number,
  position: number,
  travel: number,
): void {
  const initialY = deck.rect.y - sign * position;
  const x = deck.rect.x + deck.rect.width / 2;
  context.beginPath();
  for (const y of [initialY, initialY + sign * travel]) {
    context.moveTo(x - 9, y);
    context.lineTo(x + 9, y);
  }
  context.stroke();
}

function draw_pair(
  context: CanvasRenderingContext2D,
  definition: CounterweightDefinition,
  pair: CounterweightState,
  decks: readonly [PlatformState, PlatformState],
  state: GameState,
  time: number,
): void {
  const [a, b] = decks;
  const header = counterweight_header_rect(decks, state.level.world.width);
  const headerX = header.x;
  draw_tension_vessels(context, pair, decks, ORGAN_THEMES[state.level.stage].palette, time);

  // Fixed docking ticks make full endpoint alignment visible before a rider steps off.
  context.strokeStyle = READOUT_EDGE;
  context.lineWidth = 2;
  draw_docking_stops(context, a, 1, pair.position, definition.travel);
  draw_docking_stops(context, b, -1, pair.position, definition.travel);

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
            : "WEIGHT PULL";
  const detail = !both
    ? "A rider on each deck releases the clutch"
    : pair.blocked
      ? "Clear the deck or its cargo path"
      : pull === 0
        ? "Equal loads hold both decks"
        : `${moving !== 0 ? "TRAVEL" : "WEIGHT"}: A ${direction > 0 ? "DOWN" : "UP"} / B ${direction > 0 ? "UP" : "DOWN"}`;
  rounded(context, header, INK, 9, READOUT_EDGE);
  label(context, status, headerX + 144, 80, "#fff5d4", 13);
  label(context, detail, headerX + 144, 96, "#fff5d4", 9);
  draw_readout(context, headerX + 74, 114, "A", pair.loads[0], pair.riders[0]);
  draw_readout(context, headerX + 214, 114, "B", pair.loads[1], pair.riders[1]);
  const stopText = pair.position <= 0 ? "A UPPER / B LOWER STOP" : "A LOWER / B UPPER STOP";
  if (atStop) label(context, stopText, headerX + 144, 155, "#fff5d4", 9);
  if (state.level.id === "level_23" && definition.id === "cargo_exchange") {
    const pad = state.pads.find((item) => item.id === "cargo_parked");
    const padDefinition = state.level.pads.find((item) => item.id === "cargo_parked");
    if (pad && padDefinition) {
      context.beginPath();
      context.moveTo(headerX + 14, 166);
      context.lineTo(headerX + 274, 166);
      context.strokeStyle = READOUT_EDGE;
      context.lineWidth = 1;
      context.stroke();
      const cargoStatus = pad.latched
        ? "CARGO PARKED | RETURN SAC RELEASED"
        : `CARGO PAD: ${pad.weight}/${padDefinition.minWeight} WEIGHT`;
      label(context, cargoStatus, headerX + 144, 178, "#fff5d4", 10);
    }
  }
  draw_deck(context, a, "A", pull, state.level.stage, time);
  draw_deck(context, b, "B", -pull, state.level.stage, time);
}

// All indicators read the last carrier transaction; drawing never resamples or changes physics.
export function draw_counterweights(
  context: CanvasRenderingContext2D,
  state: GameState,
  time: number,
): void {
  for (const definition of state.level.counterweights ?? []) {
    const pair = state.counterweights.find((item) => item.id === definition.id);
    const a = state.platforms.find((item) => item.id === definition.platformIds[0]);
    const b = state.platforms.find((item) => item.id === definition.platformIds[1]);
    if (!pair || !a || !b) continue;
    context.save();
    draw_pair(context, definition, pair, [a, b], state, time);
    context.restore();
  }
}
