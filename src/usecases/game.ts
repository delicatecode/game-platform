/* app */
import type DeveloperRepository from "../repositories/developer";
import type GameRepository from "../repositories/game";




export default class GameUsecase {
  constructor (
    private game: GameRepository,
    private developer: DeveloperRepository,
  ) {}

  getAll () {

  }

}
