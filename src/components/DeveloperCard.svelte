
<script lang="ts">
  /* svelteui */
import { Paper } from "@svelteuidev/core";

  /* app */
  import type { DeveloperCardResponse } from "../models/developer";


  export let item: DeveloperCardResponse;
  export let navigateTo: string;
</script>



<Paper
  shadow="sm"
  radius="md"
>
  <a
    class="developer__card"
    href={navigateTo}>
    {item.codeName}
    cccccccc
  </a>
</Paper>


<style>
  .developer__card {
    width: calc(85% - 200px);
  }
  a {
   transition: color 0.3s;
   text-decoration:none;
  }

  a:hover{
    color : #ff7043;
  }
</style>