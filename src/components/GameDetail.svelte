
<script lang="ts">
  /* svelteuiu */
  import { Group, Title, Stack } from "@svelteuidev/core";

  /* app */
  import type { GameDetailResponse } from "../models/game";
	import DeveloperCard from "./DeveloperCard.svelte";


  export let item: GameDetailResponse;
</script>


<Stack align="center"
>
  <Group position="left">
    <Title>{item.title}</Title>
  </Group>
  <section class="description">
    {@html item.ruleDescription}
  </section>
  <Group position="center">
    <!-- <iframe
      width="1000"
      height="1000"
      style="display:block;margin:0 auto"
      title={item.title}
      src={item.url}
      scrolling="no"
      frameborder="no"
      allowfullscreen>
    </iframe> -->
  </Group>
  <DeveloperCard
    item={item.developer}
    navigateTo={`/games/${item.gameId}/${item.developer.developerId}`}
  />
</Stack>





<style>
</style>