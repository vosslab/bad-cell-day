import type { PlayerId } from "./types/player";
import type { HeroSupportPose } from "./types/presentation";

type ActorId = PlayerId | "gem" | "cana";

export const CHARACTER_ART: Record<ActorId, string> = {
  isp: "./assets/isp.svg",
  pac: "./assets/pac.svg",
  gem: "./assets/gem.svg",
  cana: "./assets/cana.svg",
};

const images: Partial<Record<ActorId, HTMLImageElement>> = {};

const HERO_POSE_ART: Readonly<
  Record<PlayerId, Readonly<Partial<Record<HeroSupportPose, string>>>>
> = {
  isp: {
    supporting: "./assets/isp_supporting.svg",
    riding: "./assets/isp_riding.svg",
  },
  pac: {
    supporting: "./assets/pac_supporting.svg",
    riding: "./assets/pac_riding.svg",
  },
};

const heroPoseImages = new Map<string, HTMLImageElement>();

export function character_image(id: ActorId): HTMLImageElement {
  let image = images[id];
  if (!image) {
    image = new Image();
    image.src = CHARACTER_ART[id];
    images[id] = image;
  }
  return image;
}

export function hero_image(id: PlayerId, pose: HeroSupportPose): HTMLImageElement {
  // Request both images together so the canonical fallback never delays a pose.
  const canonical = character_image(id);
  const url = HERO_POSE_ART[id][pose];
  if (!url) return canonical;
  let image = heroPoseImages.get(url);
  if (!image) {
    image = new Image();
    image.src = url;
    heroPoseImages.set(url, image);
  }
  return image.complete && image.naturalWidth > 0 ? image : canonical;
}
