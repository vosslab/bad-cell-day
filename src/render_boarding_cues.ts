import { clip_axis, stands_on } from "./collisions";
import { label, rounded } from "./render_characters";
import type { RenderOptions } from "./types/presentation";
import type { GameState } from "./types/simulation";

// Called within render_game's world transform, before the characters are drawn.
export function draw_boarding_cues(
  context: CanvasRenderingContext2D,
  state: GameState,
  _options: RenderOptions,
): void {
  if (state.status !== "playing") return;
  for (const definition of state.level.platforms) {
    if (definition.kind !== "moving" || !definition.boardingSide) continue;
    const platform = state.platforms.find((item) => item.id === definition.id);
    if (!platform?.active) continue;
    const players = Object.values(state.players);
    const phase =
      (((platform.motionTime / definition.motion.period + (definition.motion.phase ?? 0)) % 1) +
        1) %
      1;
    const descending = definition.motion.offset.y * (phase < 0.5 ? 1 : -1) > 0;
    // Reversed standing checks the lift's bottom against a hero's head. The swept
    // collision probe distinguishes actual blocking contact from nearby bodies.
    const blocked =
      platform.powered &&
      platform.motorOn &&
      descending &&
      players.some(
        (player) =>
          stands_on(platform.rect, player.rect) &&
          clip_axis(platform.rect, 1, "y", [player.rect]) < 0.001,
      );
    const waiting = players.some(
      (player) =>
        !player.atExit &&
        !stands_on(player.rect, platform.rect) &&
        player.rect.y + player.rect.height >= definition.rect.y,
    );
    if (!waiting && !blocked) continue;

    const left = definition.boardingSide === "left";
    const direction = left ? 1 : -1;
    const edge = definition.rect.x + (left ? 0 : definition.rect.width);
    const width = 194;
    const x = left ? edge - width - 14 : edge + 14;
    const y = definition.rect.y - 190;
    const color = blocked ? "#ffe29a" : "#e4f7ff";
    context.save();
    rounded(context, { x, y, width, height: 42 }, "#142b3bf5", 7, color);
    label(
      context,
      blocked ? `STEP ${left ? "LEFT" : "RIGHT"}` : `JUMP FROM ${left ? "LEFT" : "RIGHT"}`,
      x + width / 2,
      y + 13,
      color,
      12,
    );
    label(
      context,
      blocked ? "Then jump onto the lift." : "Missed it? Wait at the side.",
      x + width / 2,
      y + 29,
      "#ffffff",
      10,
    );
    // Keep every arrow stroke outside the solid lift and above the launch floor.
    context.strokeStyle = color;
    context.lineWidth = 2.5;
    context.lineCap = "round";
    context.beginPath();
    if (blocked) {
      const arrowY = definition.rect.y - 35;
      context.moveTo(edge - direction * 8, arrowY);
      context.lineTo(edge - direction * 48, arrowY);
      context.lineTo(edge - direction * 40, arrowY - 6);
      context.moveTo(edge - direction * 48, arrowY);
      context.lineTo(edge - direction * 40, arrowY + 6);
    } else {
      context.moveTo(edge - direction * 46, definition.rect.y - 22);
      context.quadraticCurveTo(
        edge - direction * 31,
        definition.rect.y - 66,
        edge - direction * 6,
        definition.rect.y - 34,
      );
      context.lineTo(edge - direction * 7, definition.rect.y - 44);
      context.moveTo(edge - direction * 6, definition.rect.y - 34);
      context.lineTo(edge - direction * 16, definition.rect.y - 37);
    }
    context.stroke();
    context.restore();
  }
}
