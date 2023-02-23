import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

import ExampleRepository from "../repositories/example";



export const load: PageLoad = async () => {
  const repo = new ExampleRepository();
  const example = await repo.get('facebook');
  return {
    post: {
      ...example
    }
  }
}
