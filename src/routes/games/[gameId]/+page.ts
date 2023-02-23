import type { PageLoad } from "./$types";


/**
 * DI
 */


export const load: PageLoad = async ({ params }) => {


  return {
    props: {
      title: params.gameId,
    }
  }
}
