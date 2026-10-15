import type { PlayerId } from "./types/player";

export const CHARACTER_ART: Record<PlayerId, string> = {
  isp: "./assets/isp.svg",
  pac: "./assets/pac.svg",
};

const images: Partial<Record<PlayerId, HTMLImageElement>> = {};

export function character_image(id: PlayerId): HTMLImageElement {
  let image = images[id];
  if (!image) {
    image = new Image();
    image.src = CHARACTER_ART[id];
    images[id] = image;
  }
  return image;
}
