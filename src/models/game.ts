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
  | 'subTitle'
  | 'thumbnailImage'
  | 'category'
  | 'url'
> & {
  developer: GameDeveloper;
}


export type GameDetailResponse = Omit<
    Game,
  | 'createdAt'
> & {
  developer: GameDeveloper;
}
