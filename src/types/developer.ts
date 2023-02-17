/* app */
import type { Stripe } from "./stripe";


export interface Developer {
  fullNanme: string;
  profileImage: { src: string; } | null;
  biography: string;
  stripe: Stripe[];
}
