<script lang="ts">
  /* svelte */
  import type { PageData } from "./$types";

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
  <ion-content fullscreen={true}>
	<ion-segment value="default">
	  <ion-segment-button
	  	value="default"
		on:click={selectGame}
	  >
	    <ion-label>ゲーム</ion-label>
	  </ion-segment-button>
	  <ion-segment-button
	  	value="segment"
		on:click={selectArticles}
	  >
	    <ion-label>記事</ion-label>
	  </ion-segment-button>
	</ion-segment>
	{#if currentTab === 'games'}
	  <GameList items={data.games} />
	{/if}

	{#if currentTab === 'article'}
	  <ArticleList items={data.articles} />
	{/if}

	{JSON.stringify(data.data.example)}
  </ion-content>
</IonPage>
  