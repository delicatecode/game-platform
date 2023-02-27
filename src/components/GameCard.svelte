
<script lang="ts">

  /* svelte */
  import { createEventDispatcher } from "svelte";

  /* app */
  import type { GameResponse } from "../models/game";


  const dispatch = createEventDispatcher<{ navigateTo: string }>();

  /**
   * 流し込む
   */
  export let item: GameResponse;



  function onNavigate() {
    dispatch('navigateTo', item.gameId);
  }

</script>



<ion-card>
  <a class="card__nav" href={`/games/${item.gameId}`}>
    <img
      alt={item.thumbnailImage.imageId}
      src={item.thumbnailImage.url}
    />
    <ion-card-header>
      <ion-card-title>{item.title}</ion-card-title>
      <ion-card-subtitle>{item.subTitle}</ion-card-subtitle>
    </ion-card-header>
  
    <ion-card-content>
      <ion-item>
        <ion-avatar slot="start">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
        </ion-avatar>
        <ion-label>
          {item.developer.codeName} さん
        </ion-label>
      </ion-item>
    </ion-card-content>
  </a>
</ion-card>


<style>
  .card__nav {
    text-decoration: none;
  }
</style>



