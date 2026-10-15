import { ORGAN_THEMES } from "./anatomy";
import type { OrganPalette, OrganStage, TissueSurfaceAppearance } from "./types/anatomy";
import type { Rect } from "./types/geometry";

function cell(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  rx: number,
  ry: number,
  fill: string,
  edge: string,
): void {
  context.beginPath();
  context.ellipse(x, y, rx, ry, -0.2, 0, Math.PI * 2);
  context.fillStyle = fill;
  context.fill();
  context.strokeStyle = edge;
  context.lineWidth = 2;
  context.stroke();
}

function draw_organ_interior(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  stage: OrganStage,
  palette: OrganPalette,
  time: number,
): void {
  const { x, y, width, height } = rect;
  context.strokeStyle = palette.vessel;
  context.lineWidth = 3;
  for (let row = 0; row < height; row += 42) {
    for (let offset = -18; offset < width + 35; offset += 52) {
      const variation = Math.sin(offset * 1.73 + row * 0.61);
      const breath = Math.sin(time * 1.3 + offset * 0.023 + row * 0.04);
      const depth = Math.min(25 + variation * 4, height * 0.58) * (1 + breath * 0.035);
      const cx = x + offset + (row % 84 === 0 ? 0 : 26) + variation * 4;
      const cy = y + row + 24 + variation * 3 + breath * Math.min(1.5, height / 15);
      if (stage === "lungs") {
        // Clustered air sacs have dark lumens and warm shared septa.
        cell(context, cx, cy, 25 + variation * 4, depth, palette.lesion, palette.vessel);
        cell(context, cx + 1, cy + 1, 15 + breath, depth * 0.57, palette.vessel, palette.flesh);
        cell(context, cx + 15, cy - 10, 7, Math.max(2, depth * 0.3), palette.flesh, palette.edge);
      } else if (stage === "intestine") {
        context.beginPath();
        context.moveTo(cx - 22, cy + 19);
        context.bezierCurveTo(cx - 22, cy - 25, cx + 6, cy - 25, cx + 6, cy + 5);
        context.bezierCurveTo(cx + 6, cy + 20, cx + 21, cy + 19, cx + 23, cy - 17);
        context.strokeStyle = palette.vessel;
        context.lineWidth = 9;
        context.stroke();
        context.strokeStyle = palette.lesion;
        context.lineWidth = 3;
        context.stroke();
      } else if (stage === "marrow") {
        cell(context, cx, cy, 20, depth, palette.vessel, palette.lesion);
        context.beginPath();
        context.moveTo(cx - 22, cy - 18);
        context.quadraticCurveTo(cx + 3, cy + 2, cx + 23, cy + 18);
        context.moveTo(cx + 23, cy - 18);
        context.quadraticCurveTo(cx - 1, cy + 2, cx - 22, cy + 18);
        context.strokeStyle = palette.lesion;
        context.lineWidth = 6;
        context.stroke();
        cell(context, cx + 7, cy + 1, 5, 3, "#dc6878", palette.shadow);
        cell(context, cx - 7, cy - 3, 4, 3, "#ef9a9c", palette.shadow);
      } else if (stage === "liver") {
        context.beginPath();
        for (let side = 0; side <= 6; side += 1) {
          const angle = (side * Math.PI) / 3;
          const px = cx + Math.cos(angle) * 22;
          const py = cy + Math.sin(angle) * depth;
          if (side === 0) context.moveTo(px, py);
          else context.lineTo(px, py);
        }
        context.fillStyle = palette.lesion;
        context.fill();
        context.strokeStyle = palette.vessel;
        context.lineWidth = 3;
        context.stroke();
        for (let spoke = 0; spoke < 6; spoke += 1) {
          const angle = (spoke * Math.PI) / 3;
          context.beginPath();
          context.moveTo(cx, cy);
          context.lineTo(cx + Math.cos(angle) * 17, cy + Math.sin(angle) * depth * 0.8);
          context.strokeStyle = palette.flesh;
          context.lineWidth = 2;
          context.stroke();
        }
        cell(context, cx, cy, 4, 4, palette.vessel, palette.shadow);
      } else if (stage === "brain") {
        context.beginPath();
        context.moveTo(cx - 23, cy + 8);
        context.bezierCurveTo(cx - 35, cy - 18, cx + 16, cy - 25, cx + 12, cy - 5);
        context.bezierCurveTo(cx + 8, cy + 9, cx - 8, cy - 4, cx - 7, cy + 10);
        context.bezierCurveTo(cx - 6, cy + 24, cx + 18, cy + 21, cx + 23, cy + 8);
        context.strokeStyle = palette.vessel;
        context.lineWidth = 12;
        context.stroke();
        context.strokeStyle = palette.lesion;
        context.lineWidth = 6;
        context.stroke();
      } else {
        const swell = Math.sin(offset * 0.7 + row + time) * 4;
        cell(context, cx, cy, 24 + swell, depth, palette.lesion, palette.shadow);
        cell(context, cx + 6, cy + 2, 7, Math.max(2, depth * 0.5), palette.vessel, palette.flesh);
        cell(context, cx - 17, cy - 8, 9, Math.max(2, depth * 0.45), palette.flesh, palette.vessel);
      }
    }
  }
}

// World pixels, y downward. Every solid pixel and irregular fold is clipped to the
// authoritative collision rectangle; straight bright top/side rims expose its limits.
export function draw_tissue_surface(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  stage: OrganStage,
  appearance: TissueSurfaceAppearance,
  time: number,
): void {
  const { x, y, width, height } = rect;
  if (width <= 0 || height <= 0) return;
  const palette = ORGAN_THEMES[stage].palette;
  context.save();
  context.beginPath();
  context.rect(x, y, width, height);
  context.clip();
  context.setLineDash([]);
  if (!appearance.active) {
    // A collapsed membrane has no filled deck that could imply solid support.
    context.globalAlpha *= 0.45;
    context.setLineDash([2, 7]);
    context.strokeStyle = palette.lesion;
    context.lineWidth = 1;
    context.strokeRect(x + 0.5, y + 0.5, Math.max(0, width - 1), Math.max(0, height - 1));
    context.restore();
    return;
  }
  context.fillStyle = palette.flesh;
  context.fillRect(x, y, width, height);
  draw_organ_interior(context, rect, stage, palette, time);
  // The wet connective lip and dark underside make thick floors feel fleshy.
  context.strokeStyle = palette.shadow;
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(x, y + height - 1);
  for (let offset = 0; offset <= width + 16; offset += 16) {
    context.lineTo(x + offset, y + height - 2 - Math.sin(offset * 0.19) * 2);
  }
  context.stroke();
  if (appearance.kind === "carrier" || appearance.kind === "counterweight") {
    // Aligned muscle fibres distinguish moving tissue from fixed organ walls.
    context.strokeStyle = palette.shadow;
    context.lineWidth = 2;
    for (let offset = 11; offset < width; offset += 17) {
      context.beginPath();
      context.moveTo(x + offset - 6, y + height - 3);
      context.quadraticCurveTo(x + offset + 2, y + height / 2, x + offset - 3, y + 5);
      context.stroke();
    }
    if (!appearance.powered) {
      context.fillStyle = `${palette.shadow}88`;
      context.fillRect(x, y + 3, width, Math.max(0, height - 3));
    }
  }
  if (appearance.kind === "fragile" && !appearance.stabilized) {
    context.strokeStyle = palette.shadow;
    context.lineWidth = 3;
    for (let offset = 23; offset < width; offset += 47) {
      context.beginPath();
      context.moveTo(x + offset, y + 4);
      context.lineTo(x + offset - 5, y + height * 0.45);
      context.lineTo(x + offset + 4, y + height * 0.6);
      context.lineTo(x + offset - 1, y + height);
      context.stroke();
    }
  }
  const rim = appearance.stabilized ? "#c3ffce" : palette.edge;
  context.strokeStyle = rim;
  context.lineWidth = Math.min(2, width, height);
  context.strokeRect(x + 1, y + 1, Math.max(0, width - 2), Math.max(0, height - 2));
  context.fillStyle = rim;
  context.fillRect(x, y, width, Math.min(3, height));
  if (appearance.stabilized) {
    context.strokeStyle = "#c3ffce";
    context.lineWidth = 2;
    for (let offset = 15; offset < width; offset += 30) {
      context.beginPath();
      context.moveTo(x + offset - 3, y + 5);
      context.quadraticCurveTo(x + offset, y + height / 2, x + offset + 3, y + height - 3);
      context.stroke();
    }
  }
  context.restore();
}
