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
      <div class="example-content">
          <ion-list>
            <ion-item>
              <ion-input label="Username" placeholder=""></ion-input>
            </ion-item>
            <ion-item>
              <ion-input label="Password" placeholder="" type="password"></ion-input>
            </ion-item>
            <ion-button @click="login">Log in</ion-button>
          </ion-list>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import {  
            IonContent, 
            IonPage, 
            IonList, 
            IonItem, 
            IonInput,
            IonButton
          } from '@ionic/vue';

  export default {
    components: { 
                  IonContent, 
                  IonPage, 
                  IonList, 
                  IonItem, 
                  IonInput,
                  IonButton
                },
    methods: {
      login() {
        this.$router.push('/home');
      }
    }
  };
</script>