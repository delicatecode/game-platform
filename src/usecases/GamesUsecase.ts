/* app */
import type { GameResponse } from "../models/game";
import type DeveloperRepository from "../repositories/developer";
import type GameRepository from "../repositories/game";



export default class GamesUsecase {

  /**
   * @constructor 
   * @param game
   * @param developer
   */
  constructor (
    private game: GameRepository,
    private developer: DeveloperRepository,
  ) {}


  /**
   * @method
   * @param data
   * @return Promise<GameResponse[]>
   */
  getAll (data?: GameResponse[]): Promise<GameResponse[]> {
    return new Promise(async (resolve, reject) => {
      try {
        if (data) {
          resolve(data)
        } else {
          resolve([])
        }

      } catch (e) {
        reject(e);
      }
    })
  }

}
