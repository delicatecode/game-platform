import type { Article } from "../types/article";
import type { Developer } from "../types/developer";
import type { Game } from "../types/game";
import type { ArticleDeveloper } from "./article";
import type { GameDeveloper } from "./game";



export type DeveloperCardResponse = GameDeveloper | ArticleDeveloper;



export interface DeveloperDetailResponse extends Developer {
  games: Game[];
  articles: Article[];
}
