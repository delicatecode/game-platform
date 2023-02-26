/* svelte */
import type { PageLoad } from "./$types";

/* app */
import DeveloperRepository from "../../../repositories/developer";
import GameRepository from "../../../repositories/game";
import GamesUsecase from "../../../usecases/GamesUsecase";
import { data } from "../../../data/games";


/**
 * DI
 */
const repository = new GamesUsecase(
  new GameRepository(),
  new DeveloperRepository()
)


export const load: PageLoad = async ({ params }) => {

  const gameId = params.gameId;
  const game = await repository.get(gameId, data[0]);

  return {
    game,
  }
}
