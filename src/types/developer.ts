/* app */
import type { Image } from "./image";
import type { Stripe } from "./stripe";


export interface Developer {
  developerId: string;
  fullNanme: string;
  codeName: string;
  profileImage: Image;
  biography: string;
  description?: string;
  stripe: Stripe[];
}
