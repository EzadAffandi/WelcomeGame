<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .points {
    font-size: large;
    border-radius: 30%;
    position: fixed;
    top: 8px;
    right: 60px;
  }
</style>

<template>
  <ion-page>
    <ion-content>
      <div class="points">
        <ion-grid>
          <ion-row class="ion-align-items-center ion-justify-content-start">
            <ion-col size="auto">
              <p>2788</p>
            </ion-col>
            <ion-col size="auto">
              <ion-icon style="color:yellow" :icon="star"/>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
      <div class="example-content">Maps here</div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow } from '@ionic/vue';
  import { star } from 'ionicons/icons';

  export default {
    components: { IonContent, IonPage, IonIcon, IonCol, IonRow, IonGrid},
    data() {
      return {
        star
      };
    },
  };
</script>
