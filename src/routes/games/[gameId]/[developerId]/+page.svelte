<script>
  /* svelteui */
  import { Button } from "@svelteuidev/core";

  /* ionic */
  import IonPage from "ionic-svelte/components/IonPage.svelte";

</script>


<IonPage>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <a href={`/games`}>
          <Button
            color="pink"
            variant="subtle"
          >
            戻る
          </Button>
        </a>
      </ion-buttons>
      <ion-title>

      </ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>

  </ion-content>
</IonPage>

<style></style>