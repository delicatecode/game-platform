import type { Article } from "../types/article";
import type { Developer } from "../types/developer";
import type { Game } from "../types/game";



export interface DeveloperResponse extends Developer {
  games: Game[];
  articles: Article[];
}
