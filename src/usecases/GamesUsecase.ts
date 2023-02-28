/* app */
import type { GameDetailResponse, GameResponse } from "../models/game";
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
          try {
            const games = await this.game.getAll();
            const data = games.map(game => {
              return {
                ...game,
                developer: {
                  developerId: '',
                  codeName: '',
                  profileImage: {
                    imageId: '',
                    url: ''
                  },
                  biography: ''
                }
              } as GameResponse
            }) as GameResponse[]
            resolve(data)

          } catch (e) {
            resolve([])
          }
        }

      } catch (e) {
        reject(e);
      }
    })
  }


  /**
   * @method
   * @param data
   * @returns 
   */
  get (gameId: string, data?: GameDetailResponse): Promise<GameDetailResponse> {
    return new Promise(async (resolve, reject) => {
      try {
        if (data) {
          resolve(data)
        } else {
          const game = await this.game.get(gameId);
          const developer = await this.developer.get(game.developerId)
          const data = {
            ...game,
            developer: {
              developerId: '',
              codeName: '',
              profileImage: {
                imageId: '',
                url: ''
              },
              biography: ''
            }
          } as GameDetailResponse;
          resolve(data)
        }
      } catch (e) {
        alert(JSON.stringify(e))
        reject(e);
      }
    })
  }

}
