
<script lang="ts">
  import type { GameDetailResponse } from "../models/game";


  export let item: GameDetailResponse;
</script>


<section class="title">
  <h1>{item.title}</h1>
</section>

<section class="description">
  {@html item.ruleDescription}
</section>

<section>
  <iframe
    width="850"
    height="600"
    style="display:block;margin:0px auto"
    title={item.title}
    src={item.url}
    scrolling="no"
    frameborder="no"
    allowfullscreen>
  </iframe>
</section>


<style>
</style>