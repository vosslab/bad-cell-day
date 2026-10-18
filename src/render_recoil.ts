import type { Rect } from "./types/geometry";
import type { PlayerId } from "./types/player";
import type { GameState } from "./types/simulation";

const LUNG_RECOIL_ART = "./assets/lung_recoil_tissue.svg";
const INTESTINE_RECOIL_ART = "./assets/intestine_recoil_tissue.svg";
const BRAIN_RECOIL_ART = "./assets/brain_recoil_tissue.svg";
const FRAME_WIDTH = 300;
const FRAME_HEIGHT = 80;

let lung_recoil_image: HTMLImageElement | undefined;
let intestine_recoil_image: HTMLImageElement | undefined;
let brain_recoil_image: HTMLImageElement | undefined;

function recoil_image(stage: GameState["level"]["stage"]): HTMLImageElement {
  if (stage === "intestine") {
    if (!intestine_recoil_image) {
      intestine_recoil_image = new Image();
      intestine_recoil_image.src = INTESTINE_RECOIL_ART;
    }
    return intestine_recoil_image;
  }

  if (stage === "brain") {
    if (!brain_recoil_image) {
      brain_recoil_image = new Image();
      brain_recoil_image.src = BRAIN_RECOIL_ART;
    }
    return brain_recoil_image;
  }

  if (!lung_recoil_image) {
    lung_recoil_image = new Image();
    lung_recoil_image.src = LUNG_RECOIL_ART;
  }

  return lung_recoil_image;
}

export function draw_recoil_surface(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  state: GameState,
  platformId: string,
): void {
  const image = recoil_image(state.level.stage);
  if (!image.complete || image.naturalWidth === 0) return;

  const jointlySupported = (id: PlayerId): boolean => {
    const player = state.players[id];
    return player.grounded && player.supportId === platformId;
  };
  const loaded = jointlySupported("isp") && jointlySupported("pac");

  context.save();
  context.beginPath();
  context.rect(rect.x, rect.y, rect.width, rect.height);
  context.clip();
  context.drawImage(
    image,
    0,
    loaded ? FRAME_HEIGHT : 0,
    FRAME_WIDTH,
    FRAME_HEIGHT,
    rect.x,
    rect.y,
    rect.width,
    rect.height,
  );

  // The cue stays in the tissue body, below the heroes' feet and away from
  // the high-contrast contact membrane that marks the collision boundary.
  const cue = loaded ? "ONE OFF · ONE UP" : "TOGETHER, THEN ONE OFF";
  const cueX = rect.x + rect.width / 2;
  const cueY = rect.y + rect.height * 0.68;
  context.font = "800 9px system-ui, sans-serif";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.lineJoin = "round";
  context.lineWidth = 3;
  context.strokeStyle = "#352233";
  context.fillStyle = "#ffedc6";
  context.strokeText(cue, cueX, cueY);
  context.fillText(cue, cueX, cueY);
  context.restore();
}
