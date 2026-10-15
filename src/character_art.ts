import type { PlayerId } from "./types/player";

type ActorId = PlayerId | "gem" | "cana";

export const CHARACTER_ART: Record<ActorId, string> = {
  isp: "./assets/isp.svg",
  pac: "./assets/pac.svg",
  gem: "./assets/gem.svg",
  cana: "./assets/cana.svg",
};

const images: Partial<Record<ActorId, HTMLImageElement>> = {};

export function character_image(id: ActorId): HTMLImageElement {
  let image = images[id];
  if (!image) {
    image = new Image();
    image.src = CHARACTER_ART[id];
    images[id] = image;
  }
  return image;
}
