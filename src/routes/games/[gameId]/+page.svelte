
<script lang="ts">
  /* svelte */
  import type { PageData } from "./$types";

  /* ionic */
  import { IonPage } from "ionic-svelte";


  export let data: PageData;


</script>

<IonPage>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <a href={'/'}>
          <button>戻る</button>
        </a>
      </ion-buttons>
      <ion-title>
        {data.game.title}
      </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen={true}>
    {JSON.stringify(data.game)}
  </ion-content>
</IonPage>