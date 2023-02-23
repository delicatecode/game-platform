import type { ArticleResponse } from "../models/article";
import type ArticleRepository from "../repositories/article";
import type DeveloperRepository from "../repositories/developer";



export default class ArticlesUsecase {
  constructor (
    article: ArticleRepository,
    devloper: DeveloperRepository,
  ) {}


  getAll (): Promise<ArticleResponse[]> {
    return new Promise(async (resolve, reject) => {

    })
  }
}