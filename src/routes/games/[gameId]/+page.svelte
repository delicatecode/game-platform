
<script lang="ts">
  /* svelte */
  import type { PageData } from "./$types";
  import { AnchorFm } from 'sveltekit-embed'

  /* ionic */
  import { IonPage } from "ionic-svelte";


  export let data: PageData;

  let html = '<div id="#app"></div><script type="module" src="https://first-feather.surge.sh/assets/index-576030ec.js">/<script>'


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
        {data.gameId}
      </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content fullscreen={true}>
    <div
	    contenteditable="true"
	    bind:innerHTML={html}
    ></div>
    <!-- <AnchorFm
      height="400"
      episodeUrl={html}
    /> -->
    {@html html}
  </ion-content>
</IonPage>