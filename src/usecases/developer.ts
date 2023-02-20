import type DeveloperRepository from "../repositories/developer";
import type GameRepository from "../repositories/game";


export default class DeveloperUsecase {
  constructor (
    private developer: DeveloperRepository,
    private game: GameRepository,
  ) {
  }
}