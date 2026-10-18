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

const HERO_STRIDE_ART: Readonly<Record<PlayerId, readonly [string, string]>> = {
  isp: ["./assets/isp_stride_a.svg", "./assets/isp_stride_b.svg"],
  pac: ["./assets/pac_stride_a.svg", "./assets/pac_stride_b.svg"],
};

const heroPoseImages = new Map<string, HTMLImageElement>();
const heroStrideImages = new Map<string, HTMLImageElement>();

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

export function hero_stride_image(id: PlayerId, frame: 0 | 1): HTMLImageElement {
  const canonical = character_image(id);
  const urls = HERO_STRIDE_ART[id];
  // Start both requests together when stride art first becomes relevant.
  for (const url of urls) {
    if (!heroStrideImages.has(url)) {
      const image = new Image();
      image.src = url;
      heroStrideImages.set(url, image);
    }
  }
  const image = heroStrideImages.get(urls[frame]);
  return image && image.complete && image.naturalWidth > 0 ? image : canonical;
}
