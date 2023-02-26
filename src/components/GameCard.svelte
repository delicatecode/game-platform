
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
  <img
    alt={item.thumbnailImage.imageId}
    src={item.thumbnailImage.url}
  />
  <ion-card-header>
    <ion-card-title>{item.title}</ion-card-title>
    <ion-card-subtitle>{item.subTitle}</ion-card-subtitle>
  </ion-card-header>
  
  <ion-card-content>
  </ion-card-content>
  <a href={`/games/${item.gameId}`}>
    <ion-button fill="clear">
      遊ぶ
    </ion-button>
   </a>
</ion-card>



