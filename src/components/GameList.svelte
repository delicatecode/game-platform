

<script lang="ts">
	import type { GameResponse } from "../models/game";
	import GameCard from "./GameCard.svelte";



  export let items: GameResponse[]

  function onNavigate(event: CustomEvent<string>) {
    alert(event.detail);
  }
</script>


<div class="gameList">
  <div>
    {#each items as item}
      <GameCard item={item} /> 
    {/each}
  </div>
</div>


<style>
  .gameList {
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
  } 
  .gameList > div {
    display: flex;
    flex-wrap: wrap;
  }
</style>