

<script lang="ts">
	import type { GameResponse } from "../models/game";
	import GameCard from "./GameCard.svelte";



  export let items: GameResponse[]

  function onNavigate(event: CustomEvent<string>) {
    alert(event.detail);
  }
</script>



{#each items as item}
  <GameCard item={item} /> 
{/each}