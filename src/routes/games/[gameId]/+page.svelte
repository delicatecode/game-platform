
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
        {data.props.title}
      </ion-title>
    </ion-toolbar>
  </ion-header>
</IonPage>