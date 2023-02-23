/* app */
import type { Stripe } from "./stripe";


export interface Developer {
  developerId: string;
  fullNanme: string;
  codeName: string;
  profileImage: { src: string; } | null;
  biography: string;
  description?: string;
  stripe: Stripe[];
}
