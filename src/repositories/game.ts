/* app */
import type { GamePresenter } from "../presenters/game";
import type { Game } from "../types/game";





export default class GameRepository implements GamePresenter {

  constructor () {}


  getAll (): Promise<Game[]> {
    return new Promise(async (resolve, reject) => {

    })
  }

  get (gameId: string): Promise<Game> {
    return new Promise(async (resolve, reject) => {

    })
  }
}
