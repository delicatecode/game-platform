import type { PageLoad } from "../$types";
import DeveloperRepository from "../../../../repositories/developer";


/**
 * DI
 */
const repository = new DeveloperRepository();


export const load: PageLoad = async ({ params }) => {

  console.log(params)
  return {}
}
