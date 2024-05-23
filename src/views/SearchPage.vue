<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>

<template>
  <ion-page>
    <ion-content>
      <div class="example-content">Search here</div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonContent, IonPage } from '@ionic/vue';

  export default {
    components: { IonContent, IonPage },
  };
</script>