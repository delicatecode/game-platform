<script lang="ts">
  /* svelte */
  import type { PageData } from "./$types";

  /* svelteui */
  import { Tabs } from "@svelteuidev/core";

  /* ionic */
  import { IonPage } from "ionic-svelte";

  /* app */
  import { curTab } from "../stores/home";
  import GameList from "../components/GameList.svelte";
  import ArticleList from "../components/ArticleList.svelte";


  export let data: PageData;


  let currentTab: string;
  curTab.subscribe(value => currentTab = value);

  function selectGame() {
	curTab.set('games');
  }

  function selectArticles() {
	curTab.set('articles');
  }

</script>

<IonPage>
  <ion-header>
	<ion-toolbar>
	  <ion-title>
		ちょこっとゲーム
	  </ion-title>
	</ion-toolbar>
  </ion-header>
  <ion-content fullscreen={true} class="contentApp">
	<Tabs
	  grow
	  variant="pills"
	  position="center"
	>
	  <Tabs.Tab
	  	label="ゲーム"
      	on:click={selectGame}
	  >
	  	<GameList items={data.games} />
	  </Tabs.Tab>
	  <Tabs.Tab
	    label="記事"
      	on:click={selectArticles}
	  >
	  	<ArticleList items={data.articles} />
	  </Tabs.Tab>
	</Tabs>
  </ion-content>
</IonPage>
 

<style>
  .contentApp {
    margin: 0 auto;
  }
</style>