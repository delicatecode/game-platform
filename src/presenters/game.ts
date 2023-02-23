/* app */
import type { Game } from "../types/game";



export interface GamePresenter {
  getAll: () => Promise<Game[]>;
  get: (gameId: string) => Promise<Game>
}