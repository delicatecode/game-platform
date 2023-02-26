/* app */
import type { ArticleResponse } from "../models/article";
import type ArticleRepository from "../repositories/article";
import type DeveloperRepository from "../repositories/developer";



export default class ArticlesUsecase {
  constructor (
    article: ArticleRepository,
    devloper: DeveloperRepository,
  ) {}


  /**
   * @method
   * @param data
   * @return Promise<ArticleResponse[]>
   */
  getAll (data?: ArticleResponse[]): Promise<ArticleResponse[]> {
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