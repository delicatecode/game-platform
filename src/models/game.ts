import type { Developer } from "../types/developer";
import type { Game } from "../types/game";


export interface GameResponse extends Game {
  developer: Developer;
}
