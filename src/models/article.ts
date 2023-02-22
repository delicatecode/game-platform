import type { Article } from "../types/article";
import type { Developer } from "../types/developer";


export interface ArticleResponse extends Article {
  developer: Developer;
}
