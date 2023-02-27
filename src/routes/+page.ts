/* svelte */
import type { PageLoad } from "./$types";


/* app */
import GamesUsecase from "../usecases/GamesUsecase";
import ArticlesUsecase from "../usecases/ArticlesUsecase";
import GameRepository from "../repositories/game";
import ArticleRepository from "../repositories/article";
import DeveloperRepository from "../repositories/developer";
import { data as gamesData } from "../data/games";
import { data as articlesData } from "../data/articles";
import ExampleRepository from "../repositories/example";



const repository1 = new GamesUsecase(
  new GameRepository(),
  new DeveloperRepository(),
);


const repository2 = new ArticlesUsecase(
  new ArticleRepository(),
  new DeveloperRepository(),
);

const example = new ExampleRepository();


export const load: PageLoad = async () => {
  const games = await repository1.getAll(gamesData);
  const articles = await repository2.getAll(articlesData);
//   alert(JSON.stringify(games))

  // const lock = await example.get('youtube')
  return {
    games,
    articles,
    // data: {
    //   example: lock
    // }
  }
}
