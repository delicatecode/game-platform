/* sveltekit */
import type { PageLoad } from "./$types";

/* app */
import DeveloperRepository from "../../repositories/developer";
import GameRepository from "../../repositories/game";
import GameUsecase from "../../usecases/game";


const provider = new GameUsecase(
  new GameRepository(),
  new DeveloperRepository()
)


export const load: PageLoad = async () => {
  const data = await provider.getAll();
}
