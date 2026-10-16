import { stands_on } from "./collisions";
import { PUSH_CONTACT_REACH } from "./constants";
import { label, rounded } from "./render_characters";
import type { Rect } from "./types/geometry";
import type { PadDefinition } from "./types/level";
import type { GameState } from "./types/simulation";

function draw_side_contact(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  left: boolean,
  color: string,
): void {
  const gripX = rect.x + (left ? 2 : rect.width - 2);
  context.strokeStyle = "#fff4d9";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(Math.max(4, rect.x - 50) + 23, rect.y - 62);
  context.lineTo(gripX, rect.y - 12);
  context.lineTo(gripX, rect.y - 2);
  context.stroke();
  rounded(context, { x: gripX - 4, y: rect.y - 10, width: 8, height: 8 }, color, 2, "#fff4d9");
}

function draw_push_sides(context: CanvasRenderingContext2D, rect: Readonly<Rect>): void {
  // Keep the plaque beside the body, away from its top rider and the pad below.
  // The shaft-facing side also leaves the lower-right recovery recess visible.
  const towardRight = rect.x + rect.width / 2 < 305;
  const x = towardRight ? rect.x + rect.width + 14 : rect.x - 100;
  const y = rect.y - 24;
  rounded(context, { x, y, width: 86, height: 18 }, "#142b3b", 4, "#ffe0ba");
  label(context, "PUSH SIDES", x + 43, y + 9, "#fff4d9", 10);
  // Short, symmetric leaders end at the grips; neither prescribes a route.
  context.strokeStyle = "#ffe0ba";
  context.lineWidth = 1.5;
  const gripY = rect.y + rect.height * 0.6;
  context.beginPath();
  context.moveTo(rect.x - 6, gripY);
  context.lineTo(rect.x + 2, gripY);
  context.moveTo(rect.x + rect.width + 6, gripY);
  context.lineTo(rect.x + rect.width - 2, gripY);
  context.stroke();
}

function draw_cargo_contacts(context: CanvasRenderingContext2D, state: GameState): void {
  for (const crate of state.crates) {
    let standingOnTop = false;
    let sideContact = false;
    for (const player of Object.values(state.players)) {
      if (!player.grounded) continue;
      if (stands_on(player.rect, crate.rect)) {
        standingOnTop = true;
        continue;
      }
      const verticalOverlap =
        player.rect.y < crate.rect.y + crate.rect.height &&
        player.rect.y + player.rect.height > crate.rect.y;
      if (!verticalOverlap) continue;
      // Show grounded side reach; input, helpers, and obstacles still decide movement.
      const leftGap = crate.rect.x - player.rect.x - player.rect.width;
      const rightGap = player.rect.x - crate.rect.x - crate.rect.width;
      const left = leftGap >= -0.01 && leftGap <= PUSH_CONTACT_REACH;
      const right = rightGap >= -0.01 && rightGap <= PUSH_CONTACT_REACH;
      if (left || right) {
        draw_side_contact(context, crate.rect, left, player.id === "isp" ? "#6cd4ff" : "#ffc06c");
        sideContact = true;
      }
    }
    if (sideContact) {
      // Above-left clears the large hero art and the nearby lower-dock gate tag.
      const x = Math.max(4, crate.rect.x - 50);
      const y = crate.rect.y - 80;
      rounded(context, { x, y, width: 46, height: 18 }, "#142b3b", 4, "#fff4d9");
      label(context, "GRIP", x + 23, y + 9, "#fff4d9", 11);
    }
    if (standingOnTop) draw_push_sides(context, crate.rect);
  }
}

function draw_gate_receipt(
  context: CanvasRenderingContext2D,
  state: GameState,
  pad: PadDefinition,
  rect: Readonly<Rect>,
  open: boolean,
): void {
  const color = pad.accepts === "isp" ? "#6cd4ff" : pad.accepts === "pac" ? "#ffc06c" : "#d6a0ff";
  const centerX = rect.x + rect.width / 2;
  const centerY = rect.y + rect.height / 2;
  // This is the actual endpoint of the existing dotted source-pad connection.
  rounded(
    context,
    { x: centerX - 6, y: centerY - 6, width: 12, height: 12 },
    open ? "#142b3b" : color,
    open ? 6 : 3,
    color,
  );
  context.font = "800 11px system-ui, sans-serif";
  const width = Math.max(76, context.measureText(pad.label).width + 16);
  const x = Math.max(4, Math.min(state.level.world.width - width - 4, centerX - width / 2));
  // Tall upper membranes leave room above exits and cargo; lower tags sit above crossings.
  const y = rect.y === 0 ? rect.y + 65 : rect.y - 42;
  rounded(context, { x, y, width, height: 32 }, "#142b3b", 5, color);
  label(context, pad.label, x + width / 2, y + 10, "#fff4d9", 11);
  label(context, open ? "OPEN" : "LOCKED", x + width / 2, y + 23, "#fff4d9", 10);
}

// Pure current-state feedback stays visible when paused or reduced motion is enabled.
export function draw_cargo_feedback(context: CanvasRenderingContext2D, state: GameState): void {
  if (state.level.id !== "level_23") return;
  context.save();
  context.setLineDash([]);
  for (const pad of state.level.pads) {
    for (const effect of pad.effects) {
      if (effect.kind !== "door") continue;
      const definition = state.level.barriers.find((barrier) => barrier.id === effect.barrierId);
      const barrier = state.barriers.find((item) => item.id === effect.barrierId);
      if (definition && barrier)
        draw_gate_receipt(context, state, pad, definition.rect, barrier.open);
    }
  }
  draw_cargo_contacts(context, state);
  context.restore();
}
