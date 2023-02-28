
<script lang="ts">
  /* svelte */
  /* app */
  import type { GameResponse } from "../models/game";


  /**
   * 流し込む
   */
  export let item: GameResponse;



</script>



<ion-card class="card">
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
  .card {
    width: calc(50% - 6px);
    cursor: pointer;
    display: block;
    position: relative;
    margin: 0 12px 12px 0;
    transition: .4s;
    box-shadow: none;
  }
  .card:nth-child(2n) {
    margin-right: 0;
  }
  .card:hover {
    background-color: rgba(245, 245, 245, 1);
  }
  .card__nav {
    text-decoration: none;
  }
</style>



