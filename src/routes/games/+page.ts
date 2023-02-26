/* svelte */
import type { PageLoad } from "./$types";

/* app */
import DeveloperRepository from "../../repositories/developer";
import GameRepository from "../../repositories/game";
import GamesUsecase from "../../usecases/GamesUsecase";


/**
 * DI
 */
const repository = new GamesUsecase(
  new GameRepository(),
  new DeveloperRepository()
)


export const load: PageLoad = async () => {
  const games = await repository.getAll();
  return {
    games
  }
}
