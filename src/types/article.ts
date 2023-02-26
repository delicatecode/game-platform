/* app */
import type { Category } from "./category";
import type { Image } from "./image";


/**
 * @type
 */
export type Article = {
  articleId: string;
  title: string;
  description: string;
  category?: Category;
  coverImage?: Image;
  updatedAt: Date;
  createdAt: Date;
  publishedAt: Date;
}
