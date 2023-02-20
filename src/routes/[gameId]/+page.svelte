<script>
	import IonPage from "ionic-svelte/components/IonPage.svelte";

</script>

<IonPage>
  <ion-header>
	<ion-toolbar>
	  <ion-buttons slot="start">
		<ion-back-button
		  color={'dark'}
		  text={'戻る'}
		  default-href={''}
		/>
	  </ion-buttons>
	  <ion-title>
		hogehoge
	  </ion-title>
	</ion-toolbar>
  </ion-header>
  <ion-content fullscreen={true}>
	youtube
  </ion-content>
</IonPage>