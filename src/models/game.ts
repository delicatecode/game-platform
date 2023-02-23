/* app */
import type { Developer } from "../types/developer";
import type { Game } from "../types/game";


type GameDeveloper = Pick<
    Developer,
  | 'developerId'
  | 'codeName'
  | 'profileImage'
  | 'biography'
>;



export type GameResponse = Pick<
    Game,
  | 'gameId'
  | 'title'
  | 'thumbnailImage'
  | 'category'
> & {
  developer: GameDeveloper;
}

// export interface GameResponse extends Game {
//   developer: GameDeveloper;
// }
