
<script lang="ts">
	import type { ArticleResponse } from "../models/article";
	import ArticleCard from "./ArticleCard.svelte";




  export let items: ArticleResponse[]
</script>


{#each items as item}
   <ArticleCard item={item}  />
{/each}
