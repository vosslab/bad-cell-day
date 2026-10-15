import { stands_on } from "./collisions";
import type { PlayerId } from "./types/player";
import type { HeroSupportPose } from "./types/presentation";
import type { GameState } from "./types/simulation";

export function hero_support_pose(state: GameState, id: PlayerId): HeroSupportPose {
  const player = state.players[id];
  const partner = state.players[id === "isp" ? "pac" : "isp"];
  if (state.status !== "playing" || player.atExit || partner.atExit) return "solo";
  if (player.grounded && stands_on(player.rect, partner.rect)) return "riding";
  if (partner.grounded && stands_on(partner.rect, player.rect)) return "supporting";
  return "solo";
}
