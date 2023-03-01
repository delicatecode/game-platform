
<script lang="ts">
  /* svelte */
  import type { PageData } from "./$types";

  /* ionic */
  import { IonPage } from "ionic-svelte";

  /* app */
  import GameDetail from "../../../components/GameDetail.svelte";
	import { Button } from "@svelteuidev/core";


  export let data: PageData;



</script>

<IonPage>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <a href={'/'}>
          <Button
            color="pink"
            variant="subtle" 
          >
            戻る
          </Button>
        </a>
      </ion-buttons>
      <ion-title>
        {data.game.title}
      </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen={true} class="contentApp">
    <GameDetail item={data.game} />
  </ion-content>
</IonPage>

<style>
  .contentApp {
    margin: 0 auto;
  }
</style>