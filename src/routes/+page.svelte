<script lang="ts">
import { IonPage } from "ionic-svelte";


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
  </ion-content>
</IonPage>
  
  <!-- <ion-card>
	<ion-card-header>
		<ion-card-subtitle>Great success!!</ion-card-subtitle>
		<ion-card-title>Welcome to your app!</ion-card-title>
	</ion-card-header>

	<ion-card-content>
		Thank you for using this starter. Click buttons below to open these guides (will
		open in new window). Don't forget to open DevTools to see this app in mobile mode. Happy coding!!!
	</ion-card-content>

	<ion-item>
		<ion-label>Visit Ionic Showcase app with sourceviewer</ion-label>
		<ion-button href="https://ionicsvelte.firebaseapp.com/" target="_new" fill="outline" slot="end"
			>View</ion-button
		>
	</ion-item>

	<ion-item>
		<ion-label>Visit Ionic component docs</ion-label>
		<ion-button
			href="https://ionicframework.com/docs/components"
			target="_new"
			fill="outline"
			slot="end">View</ion-button
		>
	</ion-item>
	<ion-item>
		<ion-label>Visit Svelte Kit docs</ion-label>
		<ion-button
			href="https://kit.svelte.dev/docs/introduction"
			target="_new"
			fill="outline"
			slot="end">View</ion-button
		>
	</ion-item>
	<ion-item>
		<ion-label>Visit Svelte docs</ion-label>
		<ion-button href="https://svelte.dev/docs" target="_new" fill="outline" slot="end"
			>View</ion-button
		>
	</ion-item>
  </ion-card> -->