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
    <ion-header>
      <ion-toolbar>
        <ion-title>Game</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="example-content">
        <div>
          <button @click="sendSms">Send SMS</button>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';

  export default {
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  };
</script>