import { ORGAN_THEMES } from "./anatomy";
import type { OrganPalette, OrganStage, TissueSurfaceAppearance } from "./types/anatomy";
import type { Rect } from "./types/geometry";

let brain_tissue_surface_image: HTMLImageElement | undefined;
let intestine_tissue_surface_image: HTMLImageElement | undefined;
let liver_tissue_surface_image: HTMLImageElement | undefined;
let lung_tissue_surface_image: HTMLImageElement | undefined;
let marrow_tissue_surface_image: HTMLImageElement | undefined;

function draw_tissue_surface_atlas(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  image: HTMLImageElement,
): void {
  const sourceY = rect.height < 40 ? 0 : 24;
  const sourceHeight = rect.height < 40 ? 20 : 96;
  const tileWidth = (128 * rect.height) / sourceHeight;
  for (let offset = 0; offset < rect.width; offset += tileWidth) {
    const start = Math.round(offset);
    const end = Math.round(offset + tileWidth);
    context.drawImage(
      image,
      0,
      sourceY,
      128,
      sourceHeight,
      rect.x + start,
      rect.y,
      end - start,
      rect.height,
    );
  }
}

function draw_tissue_body(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  palette: OrganPalette,
): void {
  const { x, y, width, height } = rect;
  // The darker tissue is still solid all the way to the collision bottom.
  context.fillStyle = palette.wash;
  context.fillRect(x, y, width, height);
  if (height <= 8 || width <= 8) {
    context.fillStyle = palette.flesh;
    context.fillRect(x, y, width, Math.max(1, height - 2));
    return;
  }
  if (height > width * 2) {
    const wallLight = context.createLinearGradient(x, y, x + width, y);
    wallLight.addColorStop(0, palette.wash);
    wallLight.addColorStop(0.5, palette.flesh);
    wallLight.addColorStop(1, palette.wash);
    context.fillStyle = wallLight;
    context.fillRect(x + 2, y, Math.max(0, width - 4), height);
    return;
  }
  const lobes = Math.max(1, Math.ceil(width / 105));
  const span = width / lobes;
  const base = height < 40 ? height * 0.72 : height * 0.62;
  const swell = height < 40 ? height * 0.16 : height * 0.2;
  context.beginPath();
  context.moveTo(x, y);
  context.lineTo(x + width, y);
  context.lineTo(x + width, y + base);
  for (let lobe = lobes - 1; lobe >= 0; lobe -= 1) {
    const left = x + lobe * span;
    context.quadraticCurveTo(
      left + span * 0.8,
      y + base + swell,
      left + span / 2,
      y + base + swell,
    );
    context.quadraticCurveTo(left + span * 0.2, y + base + swell, left, y + base);
  }
  context.closePath();
  const bodyLight = context.createLinearGradient(x, y, x, y + height);
  bodyLight.addColorStop(0, palette.lesion);
  bodyLight.addColorStop(0.28, palette.flesh);
  bodyLight.addColorStop(1, palette.wash);
  context.fillStyle = bodyLight;
  context.fill();
  context.strokeStyle = palette.vessel;
  context.lineWidth = Math.min(5, height * 0.12);
  context.stroke();
}

function draw_vertical_tissue(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  palette: OrganPalette,
): void {
  const { x, y, width, height } = rect;
  context.beginPath();
  context.moveTo(x + width * 0.48, y);
  for (let offset = 0; offset < height; offset += 55) {
    context.bezierCurveTo(
      x + width * 0.1,
      y + offset + 20,
      x + width * 0.9,
      y + offset + 38,
      x + width * 0.48,
      y + Math.min(height, offset + 55),
    );
  }
  context.strokeStyle = palette.vessel;
  context.lineWidth = Math.min(7, width * 0.33);
  context.stroke();
  context.strokeStyle = palette.lesion;
  context.lineWidth = Math.min(2.5, width * 0.13);
  context.stroke();
}

function draw_organ_structure(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  stage: OrganStage,
  palette: OrganPalette,
  time: number,
): void {
  const { x, y, width, height } = rect;
  if (height <= 8) return;
  if (height > width * 2) {
    draw_vertical_tissue(context, rect, palette);
    return;
  }
  const shallow = height < 40;
  const stride = shallow ? 90 : 140;
  const depth = shallow ? height * 0.45 : height * 0.82;
  const breath = Math.sin(time * 1.3) * Math.min(1.2, height * 0.025);
  if (stage === "marrow") {
    // A continuous cortex feeds broad trabeculae through the marrow cavity.
    context.beginPath();
    context.moveTo(x, y + 12);
    for (let offset = 0; offset < width + 70; offset += 70) {
      context.quadraticCurveTo(x + offset + 35, y + 21, x + offset + 70, y + 12);
    }
    context.strokeStyle = palette.lesion;
    context.lineWidth = shallow ? 4 : 15;
    context.stroke();
    context.strokeStyle = palette.edge;
    context.lineWidth = shallow ? 1.5 : 3.5;
    context.stroke();
    for (let offset = 35; offset < width; offset += shallow ? stride : 95) {
      context.beginPath();
      context.moveTo(x + offset, y + 14);
      context.bezierCurveTo(
        x + offset - 17,
        y + depth * 0.35,
        x + offset + 18,
        y + depth * 0.68,
        x + offset + 25,
        y + depth + breath,
      );
      if (!shallow) {
        context.moveTo(x + offset + 6, y + depth * 0.42);
        context.quadraticCurveTo(
          x + offset + 35,
          y + depth * 0.53,
          x + offset + 56,
          y + depth * 0.75,
        );
      }
      context.strokeStyle = palette.vessel;
      context.lineWidth = shallow ? 5 : 16;
      context.stroke();
      context.strokeStyle = palette.lesion;
      context.lineWidth = shallow ? 3 : 10;
      context.stroke();
      context.strokeStyle = palette.edge;
      context.lineWidth = shallow ? 1 : 2;
      context.stroke();
    }
    return;
  }
  if (stage === "brain") {
    // Clefts divide connected lobes across the available height.
    for (let offset = -35; offset < width + stride; offset += stride) {
      context.beginPath();
      context.moveTo(x + offset, y + depth * 0.65);
      context.bezierCurveTo(
        x + offset - 8,
        y + depth * 0.2,
        x + offset + 85,
        y + 5,
        x + offset + 104,
        y + depth * 0.25,
      );
      context.bezierCurveTo(
        x + offset + 136,
        y + depth * 0.86 + breath,
        x + offset + 23,
        y + depth + breath,
        x + offset + 54,
        y + depth * 0.48,
      );
      context.strokeStyle = palette.vessel;
      context.lineWidth = shallow ? 5 : 18;
      context.lineCap = "round";
      context.stroke();
      context.strokeStyle = palette.lesion;
      context.lineWidth = shallow ? 2 : 6;
      context.stroke();
    }
    return;
  }
  if (stage === "intestine") {
    for (let offset = -25; offset < width + stride; offset += stride) {
      context.beginPath();
      context.moveTo(x + offset, y + depth * 0.8);
      context.bezierCurveTo(
        x + offset - 7,
        y + 5,
        x + offset + 82,
        y + 5,
        x + offset + 82,
        y + depth * 0.5,
      );
      context.bezierCurveTo(
        x + offset + 82,
        y + depth + breath,
        x + offset + 148,
        y + depth + breath,
        x + offset + 151,
        y + 9,
      );
      context.strokeStyle = palette.vessel;
      context.lineWidth = shallow ? 5 : 18;
      context.lineCap = "round";
      context.stroke();
      context.strokeStyle = palette.lesion;
      context.lineWidth = shallow ? 2 : 6;
      context.stroke();
    }
    return;
  }
  if (stage === "lungs") {
    const sacCount = Math.max(1, Math.round(width / (shallow ? 95 : 100)));
    const sacSpan = width / sacCount;
    for (let sac = 0; sac < sacCount; sac += 1) {
      const offset = (sac + 0.5) * sacSpan;
      const cx = x + offset;
      const cy = y + (shallow ? depth * 0.66 : depth * 0.52) + breath;
      context.beginPath();
      context.ellipse(
        cx,
        cy,
        shallow ? 30 : sacSpan * 0.43,
        Math.max(3, depth * (shallow ? 0.57 : 0.45)),
        sac % 2 === 0 ? -0.12 : 0.12,
        0,
        Math.PI * 2,
      );
      context.fillStyle = palette.vessel;
      context.fill();
      context.strokeStyle = palette.lesion;
      context.lineWidth = shallow ? 2 : 7;
      context.stroke();
      context.beginPath();
      context.moveTo(cx, y + 7);
      context.quadraticCurveTo(cx - sacSpan * 0.18, cy, cx, cy + depth * 0.35);
      context.strokeStyle = palette.flesh;
      context.lineWidth = shallow ? 1 : 4;
      context.stroke();
    }
    return;
  }
  for (let offset = 40; offset < width + stride; offset += stride) {
    const cx = x + offset;
    const cy = y + Math.max(9, depth * 0.62) + breath;
    context.beginPath();
    context.ellipse(
      cx,
      cy,
      shallow ? 30 : Math.min(51, height * 0.28),
      Math.max(3, Math.min(depth * 0.64, height * 0.28)),
      0.17,
      0,
      Math.PI * 2,
    );
    context.save();
    context.globalAlpha *= 0.65;
    context.fillStyle = palette.lesion;
    context.fill();
    context.restore();
    context.strokeStyle = palette.vessel;
    context.lineWidth = shallow ? 2 : 5;
    context.stroke();
    context.beginPath();
    context.moveTo(cx - 32, cy - 6);
    context.quadraticCurveTo(cx, cy + depth * 0.15, cx + 31, cy + 7);
    context.strokeStyle = stage === "liver" ? palette.flesh : palette.shadow;
    context.lineWidth = shallow ? 1.5 : 4;
    context.stroke();
  }
}

function draw_tumor_expression(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  palette: OrganPalette,
): void {
  const cx = rect.x + rect.width * 0.62;
  const cy = rect.y + Math.min(rect.height * 0.63, rect.height - 24);
  context.beginPath();
  context.ellipse(cx, cy, 22, 17, -0.16, 0, Math.PI * 2);
  context.fillStyle = palette.vessel;
  context.fill();
  context.strokeStyle = palette.shadow;
  context.lineWidth = 3;
  context.stroke();
  context.fillStyle = palette.edge;
  context.beginPath();
  context.ellipse(cx - 7, cy - 2, 3, 4, 0, 0, Math.PI * 2);
  context.ellipse(cx + 7, cy - 3, 3, 4, 0, 0, Math.PI * 2);
  context.fill();
  context.beginPath();
  context.moveTo(cx - 8, cy + 7);
  context.quadraticCurveTo(cx + 1, cy + 13, cx + 10, cy + 5);
  context.stroke();
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
  const atlas_surface =
    (appearance.kind === "solid" || appearance.kind === "carrier") && width >= height;
  let surface_art_drawn = false;
  if (atlas_surface && stage === "brain") {
    if (!brain_tissue_surface_image) {
      brain_tissue_surface_image = new Image();
      brain_tissue_surface_image.src = "./assets/brain_tissue_surface.svg";
    }
    if (brain_tissue_surface_image.complete && brain_tissue_surface_image.naturalWidth > 0) {
      draw_tissue_surface_atlas(context, rect, brain_tissue_surface_image);
      surface_art_drawn = true;
    }
  }
  if (atlas_surface && stage === "intestine") {
    if (!intestine_tissue_surface_image) {
      intestine_tissue_surface_image = new Image();
      intestine_tissue_surface_image.src = "./assets/intestine_tissue_surface.svg";
    }
    if (
      intestine_tissue_surface_image.complete &&
      intestine_tissue_surface_image.naturalWidth > 0
    ) {
      draw_tissue_surface_atlas(context, rect, intestine_tissue_surface_image);
      surface_art_drawn = true;
    }
  }
  if (atlas_surface && stage === "liver") {
    if (!liver_tissue_surface_image) {
      liver_tissue_surface_image = new Image();
      liver_tissue_surface_image.src = "./assets/liver_tissue_surface.svg";
    }
    if (liver_tissue_surface_image.complete && liver_tissue_surface_image.naturalWidth > 0) {
      draw_tissue_surface_atlas(context, rect, liver_tissue_surface_image);
      surface_art_drawn = true;
    }
  }
  if (atlas_surface && stage === "lungs") {
    if (!lung_tissue_surface_image) {
      lung_tissue_surface_image = new Image();
      lung_tissue_surface_image.src = "./assets/lung_tissue_surface.svg";
    }
    if (lung_tissue_surface_image.complete && lung_tissue_surface_image.naturalWidth > 0) {
      draw_tissue_surface_atlas(context, rect, lung_tissue_surface_image);
      surface_art_drawn = true;
    }
  }
  if (atlas_surface && stage === "marrow") {
    if (!marrow_tissue_surface_image) {
      marrow_tissue_surface_image = new Image();
      marrow_tissue_surface_image.src = "./assets/marrow_tissue_surface.svg";
    }
    if (marrow_tissue_surface_image.complete && marrow_tissue_surface_image.naturalWidth > 0) {
      draw_tissue_surface_atlas(context, rect, marrow_tissue_surface_image);
      surface_art_drawn = true;
    }
  }
  if (!surface_art_drawn) {
    draw_tissue_body(context, rect, palette);
    context.save();
    draw_organ_structure(context, rect, stage, palette, time);
    context.restore();
    if (appearance.kind === "solid" && width >= 170 && height >= 65) {
      draw_tumor_expression(context, rect, palette);
    }
  }
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
    const collapseProgress = Math.max(0, Math.min(1, appearance.collapseProgress ?? 0));
    const maximumCrackDepth = Math.max(0, height - 6);
    const crackDepth = maximumCrackDepth * collapseProgress;
    if (collapseProgress > 0) {
      context.save();
      context.globalAlpha *= collapseProgress * 0.58;
      context.fillStyle = palette.shadow;
      context.fillRect(x + 1, y + 3, Math.max(0, width - 2), Math.max(0, height - 3));
      context.restore();
    }
    context.save();
    context.globalAlpha *= collapseProgress;
    context.strokeStyle = palette.edge;
    context.lineWidth = 1.5 + collapseProgress * 3.5;
    for (let offset = 23; offset < width; offset += 47) {
      context.beginPath();
      context.moveTo(x + offset, y + 4);
      context.lineTo(x + offset - 5, y + 4 + crackDepth * 0.45);
      context.lineTo(x + offset + 4, y + 4 + crackDepth * 0.68);
      context.lineTo(x + offset - 1, y + 4 + crackDepth);
      context.stroke();
    }
    context.restore();
  }
  const rim = appearance.stabilized ? "#c3ffce" : palette.edge;
  if (!surface_art_drawn) {
    context.strokeStyle = rim;
    context.lineWidth = Math.min(2, width, height);
    context.strokeRect(x + 1, y + 1, Math.max(0, width - 2), Math.max(0, height - 2));
  }
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
