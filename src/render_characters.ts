import { character_image } from "./character_art";
import type { Rect } from "./types/geometry";
import type { PlayerState } from "./types/player";

const INK = "#142b42";

export function rounded(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  fill: string,
  radius = 8,
  stroke = INK,
): void {
  context.beginPath();
  context.roundRect(rect.x, rect.y, rect.width, rect.height, radius);
  context.fillStyle = fill;
  context.fill();
  if (stroke) {
    context.strokeStyle = stroke;
    context.lineWidth = 2;
    context.stroke();
  }
}

export function label(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  color = "#eafaff",
  size = 12,
): void {
  context.fillStyle = color;
  context.font = `800 ${size}px system-ui, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, x, y);
}

function ellipse(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  rx: number,
  ry: number,
  fill: string,
): void {
  context.beginPath();
  context.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  context.fillStyle = fill;
  context.fill();
}

export function draw_player(
  context: CanvasRenderingContext2D,
  player: PlayerState,
  time: number,
  dead: boolean,
): void {
  const { x, y, width, height } = player.rect;
  const blue = player.id === "isp";
  const bob = player.grounded ? Math.sin(time * 5 + (blue ? 0 : 2)) * 1.2 : 0;
  const squash = player.grounded ? Math.sin(time * 5) * 0.025 : -0.07;
  ellipse(context, x + width / 2, y + height + 3, width * 0.52, 4, "#07162255");
  context.save();
  context.translate(x + width / 2, y + height);
  context.scale(1 + squash, 1 - squash);
  context.translate(-width / 2, -height + bob);
  const image = character_image(player.id);
  if (image.complete && image.naturalWidth > 0) {
    // The square artwork has its soles at y=224 in a 240-unit viewBox.
    const size = (height * 240) / 224;
    context.translate(width / 2, 0);
    context.scale(player.facing, 1);
    context.drawImage(image, -size / 2, 0, size, size);
    if (dead) {
      label(context, "x", -size * 0.1, size * 0.42, INK, 10);
      label(context, "x", size * 0.1, size * 0.42, INK, 10);
    }
  } else {
    // Keep players visible while the shared SVG request is pending or unavailable.
    rounded(context, { x: 0, y: 0, width, height }, blue ? "#4dcaff" : "#ffad50", 10);
    label(context, dead ? "x x" : ":)", width / 2, height / 2, INK, 12);
  }
  context.restore();
  rounded(context, { x: x - 7, y: y - 22, width: width + 14, height: 17 }, "#102738e8", 6, "");
  label(context, blue ? "ISP" : "PAC", x + width / 2, y - 13, blue ? "#8cddff" : "#ffc980", 9);
  if (player.atExit) label(context, "READY", x + width / 2, y - 34, "#a9f4ad", 10);
  if (dead) {
    for (let index = 0; index < 5; index += 1) {
      const angle = index * 1.256 + time;
      label(
        context,
        "*",
        x + 15 + Math.cos(angle) * 28,
        y + 8 + Math.sin(angle) * 21,
        "#ffe879",
        19,
      );
    }
    ellipse(context, x + 15, y + height - 2, 25, 9, "#e2f7ff66");
  }
}

export function draw_villain(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  gem: boolean,
  time: number,
): void {
  context.save();
  context.translate(x, y + Math.sin(time * 2) * 2);
  // Gem has a broad cape and long beard; Cana has a clean chin and tidy side part.
  if (gem) {
    context.beginPath();
    context.moveTo(-20, 8);
    context.lineTo(-34, 59);
    context.lineTo(30, 59);
    context.lineTo(18, 8);
    context.closePath();
    context.fillStyle = "#914f99";
    context.fill();
    context.strokeStyle = INK;
    context.lineWidth = 3;
    context.stroke();
  }
  rounded(context, { x: -17, y: 22, width: 34, height: 32 }, gem ? "#542f69" : "#287a80", 9);
  rounded(context, { x: -19, y: -14, width: 38, height: 41 }, "#ffd0a1", 13);
  rounded(context, { x: -21, y: -18, width: 42, height: 13 }, gem ? "#65333e" : "#243a49", 7);
  if (!gem) rounded(context, { x: 10, y: -12, width: 9, height: 21 }, "#243a49", 4, "");
  for (const eye of [-8, 8]) {
    ellipse(context, eye, 4, 3, 4, INK);
    context.beginPath();
    context.moveTo(eye - 4, -4 + (eye < 0 ? -2 : 2));
    context.lineTo(eye + 4, -4 + (eye < 0 ? 2 : -2));
    context.strokeStyle = INK;
    context.lineWidth = 3;
    context.stroke();
  }
  if (gem) {
    context.beginPath();
    context.moveTo(-19, 11);
    context.quadraticCurveTo(0, 15, 19, 11);
    context.lineTo(12, 37);
    context.lineTo(0, 46);
    context.lineTo(-13, 36);
    context.closePath();
    context.fillStyle = "#663946";
    context.fill();
    label(context, "~", 0, 21, "#f7b48e", 19);
  } else {
    context.beginPath();
    context.arc(0, 13, 7, 0.15, Math.PI - 0.15);
    context.stroke();
  }
  label(context, gem ? "GEM" : "CANA", 0, 70, gem ? "#edb1f0" : "#a9eee9", 11);
  context.restore();
}

export function draw_boss(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  name: string,
  defeated: boolean,
  final: boolean,
  time: number,
): void {
  const { x, y, width, height } = rect;
  const center = x + width / 2;
  if (defeated) {
    for (let index = 0; index < 12; index += 1) {
      const angle = (index * Math.PI) / 6;
      const distance = final ? 38 + (index % 3) * 14 : 30;
      ellipse(
        context,
        center + Math.cos(angle) * distance,
        y + height / 2 + Math.sin(angle) * distance * 0.6,
        12,
        10,
        index % 2 ? "#ffd86b" : "#ff987d",
      );
    }
    rounded(
      context,
      { x: center - 76, y: y + height / 2 - 15, width: 152, height: 30 },
      "#153b46",
      10,
    );
    label(
      context,
      final ? "CELL SAVED!" : "MACHINE DISABLED",
      center,
      y + height / 2,
      "#d8ffbc",
      13,
    );
    return;
  }
  const color = final ? "#a2519f" : name.toLowerCase().includes("cana") ? "#398a9a" : "#885c98";
  // Bellows and side pistons distinguish the machine from ordinary platforms.
  for (const side of [-1, 1]) {
    rounded(
      context,
      { x: center + side * (width / 2 + 10) - 13, y: y + 30, width: 26, height: height - 25 },
      "#576f7c",
      7,
    );
    ellipse(context, center + side * (width / 2 + 9), y + height, 23, 10, INK);
  }
  rounded(context, rect, color, final ? 25 : 15);
  rounded(
    context,
    { x: x + 12, y: y + 16, width: width - 24, height: Math.max(30, height * 0.38) },
    "#172c43",
    12,
  );
  for (const side of [-1, 1]) {
    ellipse(context, center + side * width * 0.2, y + 32, 10, 8, "#ffda70");
    ellipse(context, center + side * width * 0.2 + Math.sin(time) * 3, y + 33, 3, 5, INK);
  }
  for (let index = 0; index < 4; index += 1) {
    rounded(
      context,
      { x: x + 17 + (index * (width - 34)) / 4, y: y + height - 25, width: 9, height: 12 },
      "#d2e5e8",
      2,
    );
  }
  label(context, name.toUpperCase(), center, y - 17, "#ffe1a6", 11);
}
