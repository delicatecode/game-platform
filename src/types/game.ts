/* app */
import type { Category } from './category';
import type { Image } from './image';


/**
 * @type
 */
export type Game = {
  gameId: string;
  developerId: string;
  title: string;
  subTitle?: string;
  ruleDescription: string;
  url: string;
  scriptTag?: string;
  category: Category
  thumbnailImage: Image;
  coverImage: Image;
  updatedAt?: Date;
  createdAt?: Date;
}
