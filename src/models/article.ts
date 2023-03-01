/* app */
import type { Developer } from "../types/developer";
import type { Article } from "../types/article";


export type ArticleDeveloper = Pick<
    Developer,
  | 'developerId'
  | 'codeName'
  | 'profileImage'
  | 'biography'
>;


export interface ArticleResponse extends Article {
  developer: ArticleDeveloper;
}
