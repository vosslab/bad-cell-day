import { ORGAN_THEMES } from "./anatomy";
import { label } from "./render_characters";
import type { OrganStage } from "./types/anatomy";
import type { Rect } from "./types/geometry";
import type { HazardDefinition } from "./types/level";

let acid_tissue_surface_image: HTMLImageElement | undefined;

function clip_rect(context: CanvasRenderingContext2D, rect: Readonly<Rect>): void {
  context.beginPath();
  context.rect(rect.x, rect.y, Math.max(0, rect.width), Math.max(0, rect.height));
  context.clip();
}

function oval(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  rx: number,
  ry: number,
  color: string,
): void {
  context.beginPath();
  context.ellipse(x, y, Math.max(0, rx), Math.max(0, ry), 0, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

export function draw_receptor_patch(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  color: string,
  active: boolean,
  latch: boolean,
): void {
  const { x, y, width, height } = rect;
  if (width <= 0 || height <= 0) return;
  context.save();
  clip_rect(context, rect);
  context.fillStyle = active ? "#8cd7a3" : "#633c56";
  context.fillRect(x, y, width, height);
  context.strokeStyle = color;
  context.lineWidth = 2;
  // Repeated receptor cups respond by flattening into the membrane under load.
  for (let offset = 6; offset < width; offset += 12) {
    context.beginPath();
    context.moveTo(x + offset - 4, y + 1);
    context.quadraticCurveTo(x + offset, y + (active ? 2 : height * 0.9), x + offset + 4, y + 1);
    context.stroke();
  }
  context.strokeStyle = active ? "#d7ffcf" : color;
  context.lineWidth = 2;
  context.strokeRect(x + 1, y + 1, Math.max(0, width - 2), Math.max(0, height - 2));
  if (latch) {
    oval(
      context,
      x + width - 5,
      y + height / 2,
      3,
      Math.min(3, height / 2),
      active ? "#e2ffd9" : color,
    );
  }
  context.restore();
}

export function draw_membrane_valve(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  color: string,
  open: boolean,
  stage: OrganStage,
): void {
  const { x, y, width, height } = rect;
  if (width <= 0 || height <= 0) return;
  const palette = ORGAN_THEMES[stage].palette;
  context.save();
  clip_rect(context, rect);
  context.setLineDash([]);
  const vertical = height > width;
  const span = vertical ? width : height;
  const length = vertical ? height : width;
  // Open valves retract to both sides. The central passage is fully transparent.
  const lip = open ? Math.min(3, span / 5) : span / 2 + 1;
  for (const side of [0, 1]) {
    context.save();
    context.translate(x, y);
    if (!vertical) {
      context.translate(width, 0);
      context.rotate(Math.PI / 2);
    }
    if (side === 1) {
      context.translate(span, 0);
      context.scale(-1, 1);
    }
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(lip, 0);
    for (let offset = 0; offset < length; offset += 20) {
      context.quadraticCurveTo(
        lip - (open ? 1 : 4),
        offset + 5,
        lip,
        Math.min(length, offset + 10),
      );
      context.quadraticCurveTo(
        lip + (open ? 1 : 3),
        offset + 15,
        lip,
        Math.min(length, offset + 20),
      );
    }
    context.lineTo(0, length);
    context.closePath();
    context.fillStyle = open ? palette.flesh : palette.vessel;
    context.fill();
    context.strokeStyle = color;
    context.lineWidth = 2;
    context.stroke();
    if (!open) {
      context.strokeStyle = `${color}99`;
      context.lineWidth = 1.5;
      for (let offset = 10; offset < length; offset += 20) {
        context.beginPath();
        context.moveTo(0, offset - 5);
        context.quadraticCurveTo(lip * 0.4, offset + 4, lip - 2, offset);
        context.stroke();
      }
    }
    context.restore();
  }
  context.restore();
}

export function draw_nutrient_sac(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  heavy: boolean,
): void {
  const { x, y, width, height } = rect;
  if (width <= 0 || height <= 0) return;
  context.save();
  clip_rect(context, rect);
  // A full rectangular membrane preserves the cargo's push and landing bounds.
  context.fillStyle = heavy ? "#774564" : "#a65856";
  context.fillRect(x, y, width, height);
  oval(
    context,
    x + width / 2,
    y + height / 2,
    width * 0.61,
    height * 0.58,
    heavy ? "#bb829d" : "#e6a16f",
  );
  context.strokeStyle = heavy ? "#edb9db" : "#ffe0a4";
  context.lineWidth = 2;
  context.strokeRect(x + 1, y + 1, Math.max(0, width - 2), Math.max(0, height - 2));
  for (let offset = 8; offset < width; offset += 13) {
    oval(context, x + offset, y + height * 0.69, 5, 4, heavy ? "#8f4d79" : "#b96355");
    oval(context, x + offset - 2, y + 7, 3, 2, "#ffe4b788");
  }
  // Two paired nuclei give heavy cargo an additional static cue besides TEAM.
  oval(context, x + width * (heavy ? 0.34 : 0.5), y + height * 0.42, 7, 9, "#532d53");
  if (heavy) oval(context, x + width * 0.68, y + height * 0.42, 7, 9, "#532d53");
  // Bilateral vertical ribs mark the push surfaces without suggesting a direction.
  for (const gripX of [x + 4, x + width - 4]) {
    oval(context, gripX, y + height * 0.47, 2, 4, "#ffe0ba");
    oval(context, gripX, y + height * 0.72, 2, 4, "#ffe0ba");
  }
  context.restore();
  if (heavy) {
    context.save();
    label(context, "TEAM", x + width / 2, y - 9, "#e9d0ef", 9);
    context.restore();
  }
}

export function draw_cellular_exit(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  color: string,
): void {
  const { x, y, width, height } = rect;
  if (width <= 0 || height <= 0) return;
  context.save();
  clip_rect(context, rect);
  oval(context, x + width / 2, y + height / 2, width / 2, height / 2, color);
  oval(
    context,
    x + width / 2,
    y + height / 2 + 2,
    Math.max(0, width / 2 - 4),
    Math.max(0, height / 2 - 3),
    "#583951",
  );
  oval(
    context,
    x + width / 2,
    y + height / 2,
    Math.max(0, width / 2 - 8),
    Math.max(0, height / 2 - 7),
    "#162d3c",
  );
  context.strokeStyle = "#ffe3c6aa";
  context.lineWidth = 2;
  for (let index = 0; index < 10; index += 1) {
    const angle = (index * Math.PI) / 5;
    context.beginPath();
    context.moveTo(
      x + width / 2 + Math.cos(angle) * (width / 2 - 1),
      y + height / 2 + Math.sin(angle) * (height / 2 - 1),
    );
    context.lineTo(
      x + width / 2 + Math.cos(angle) * (width / 2 - 6),
      y + height / 2 + Math.sin(angle) * (height / 2 - 6),
    );
    context.stroke();
  }
  context.restore();
}

function draw_cyst(context: CanvasRenderingContext2D, rect: Readonly<Rect>, time: number): void {
  const { x, y, width, height } = rect;
  context.fillStyle = "#7e294e";
  context.fillRect(x, y, width, height);
  for (let row = 0; row < height; row += 15) {
    for (let offset = 0; offset < width; offset += 17) {
      oval(context, x + offset + 7, y + row + 8, 10, 9, "#c65779");
      oval(context, x + offset + 6, y + row + 9, 4, 4, "#602147");
    }
  }
  const cx = x + width / 2;
  const cy = y + height / 2;
  const radius = Math.min(width, height) * 0.28;
  oval(context, cx, cy, radius, radius, "#42213d");
  // A malignant nucleus with a bright stress fissure reads as a cyst bomb.
  context.strokeStyle = "#fff0ad";
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(cx - radius * 0.4, cy + radius * 0.6);
  context.lineTo(cx + radius * 0.2, cy);
  context.lineTo(cx - radius * 0.1, cy - radius * 0.2);
  context.lineTo(cx + radius * 0.5, cy - radius * 0.7);
  context.stroke();
  oval(context, cx + radius * 0.6, cy - radius, 2 + (Math.sin(time * 8) + 1), 3, "#ffe6a4");
}

export function draw_tissue_hazard(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  kind: HazardDefinition["kind"],
  active: boolean,
  time: number,
): void {
  const { x, y, width, height } = rect;
  if (width <= 0 || height <= 0) return;
  context.save();
  clip_rect(context, rect);
  context.globalAlpha *= active ? 1 : 0.24;
  context.setLineDash([]);
  if (kind === "villain") {
    draw_cyst(context, rect, time);
  } else if (kind === "spikes") {
    // A dark gum-bed occupies the whole lethal rect, including between teeth.
    context.fillStyle = "#873348";
    context.fillRect(x, y, width, height);
    for (let offset = 0; offset < width; offset += 16) {
      context.beginPath();
      context.moveTo(x + offset - 2, y + height);
      context.quadraticCurveTo(x + offset + 4, y + height * 0.4, x + offset + 8, y);
      context.quadraticCurveTo(x + offset + 10, y + height * 0.65, x + offset + 17, y + height);
      context.closePath();
      context.fillStyle = "#fff0c9";
      context.fill();
      context.strokeStyle = "#bd6f79";
      context.lineWidth = 2;
      context.stroke();
    }
  } else if (kind === "slime") {
    context.fillStyle = "#729c43";
    context.fillRect(x, y, width, height);
    if (typeof Image !== "undefined") {
      if (!acid_tissue_surface_image) {
        acid_tissue_surface_image = new Image();
        acid_tissue_surface_image.src = "./assets/acid_tissue_surface.svg";
      }
      if (acid_tissue_surface_image.complete && acid_tissue_surface_image.naturalWidth > 0) {
        const sourceY = height < 40 ? 0 : 24;
        const sourceHeight = height < 40 ? 20 : 96;
        const tileWidth = (128 * height) / sourceHeight;
        for (let offset = 0; offset < width; offset += tileWidth) {
          const start = Math.round(offset);
          const end = Math.round(offset + tileWidth);
          context.drawImage(
            acid_tissue_surface_image,
            0,
            sourceY,
            128,
            sourceHeight,
            x + start,
            y,
            end - start,
            height,
          );
        }
      }
    }
    for (let offset = 5; offset < width; offset += 22) {
      const bubbleY = y + height * 0.5 + Math.sin(time * 2 + offset) * Math.min(2, height / 6);
      oval(context, x + offset, bubbleY, 8, Math.min(height * 0.5, 7), "#b9d65f");
      oval(context, x + offset - 2, bubbleY - 2, 2, 2, "#e6f59b");
    }
  } else {
    context.fillStyle = "#c0446e";
    context.fillRect(x, y, width, height);
    const vertical = height > width;
    const length = vertical ? height : width;
    context.beginPath();
    for (let offset = 0; offset <= length + 8; offset += 8) {
      const jitter = Math.sin(offset * 1.7 + time * 7) * (vertical ? width : height) * 0.25;
      const px = vertical ? x + width / 2 + jitter : x + Math.min(length, offset);
      const py = vertical ? y + Math.min(length, offset) : y + height / 2 + jitter;
      if (offset === 0) context.moveTo(px, py);
      else context.lineTo(px, py);
    }
    context.strokeStyle = "#fff1d5";
    context.lineWidth = 2;
    context.stroke();
  }
  // Bright continuous membrane states the complete harmful footprint.
  context.strokeStyle = kind === "slime" ? "#d6ee91" : "#ffd4b1";
  context.lineWidth = 2;
  context.strokeRect(x + 1, y + 1, Math.max(0, width - 2), Math.max(0, height - 2));
  context.restore();
}
