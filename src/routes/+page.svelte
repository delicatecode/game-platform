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
	  <ion-title>
		ちょこっとゲーム
	  </ion-title>
	</ion-toolbar>
  </ion-header>
  <ion-content fullscreen={true}>
	<ion-segment value="default">
	  <ion-segment-button value="default">
	    <ion-label>ゲーム</ion-label>
	  </ion-segment-button>
	  <ion-segment-button value="segment">
	    <ion-label>記事</ion-label>
	  </ion-segment-button>
	</ion-segment>
	{JSON.stringify(data.games)}
  </ion-content>
</IonPage>
  