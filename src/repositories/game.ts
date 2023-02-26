/* app */
import supabase from '../lib/supabase/client';
import type { GameResponse } from '../models/game';
import type { GamePresenter } from "../presenters/game";
import type { Game } from "../types/game";





export default class GameRepository implements GamePresenter {

  constructor () {}


  getAll (): Promise<Game[]> {
    return new Promise(async (resolve, reject) => {
      const { data, error} = await supabase
        .from('Game')
        .select()
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log(data)
        const items = data as Game[];
        resolve(items)
      }
    })
  }

  get (gameId: string): Promise<Game> {
    return new Promise(async (resolve, reject) => {

    })
  }
}
