/* app */
import type { Category } from './category';
import type { Image } from './image';


/**
 * @type
 */
export type Game = {
  gameId: string;
  title: string;
  subTitle?: string;
  description: string;
  scriptTag: string;
  category: Category
  thumbnailImage: Image;
  coverImage: Image;
  updatedAt?: Date;
  createdAt?: Date;
}
