/* svelte */
import type { PageLoad } from "./$types";

import ExampleRepository from "../repositories/example";

/* app */
import GamesUsecase from "../usecases/GamesUsecase";
import ArticlesUsecase from "../usecases/ArticlesUsecase";
import GameRepository from "../repositories/game";
import ArticleRepository from "../repositories/article";
import DeveloperRepository from "../repositories/developer";
import { data as gamesData } from "../data/games";



const repository1 = new GamesUsecase(
  new GameRepository(),
  new DeveloperRepository(),
);


const repository2 = new ArticlesUsecase(
  new ArticleRepository(),
  new DeveloperRepository()
);



export const load: PageLoad = async () => {
  const games = await repository1.getAll(gamesData);
//   const articles = await repository2.getAll();
//   alert(JSON.stringify(games))
  return {
    games,
  }
}
