<template>
  <ion-page>
    <ion-content>
      <ion-searchbar></ion-searchbar>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonContent, IonPage, IonSearchbar } from '@ionic/vue';

  export default {
    components: { IonContent, IonPage, IonSearchbar },
  };
</script>