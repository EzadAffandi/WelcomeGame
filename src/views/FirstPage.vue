<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .textcenter{
    text-align: center;
  }
</style>

<template>
  <ion-page>
    <ion-content>
      <div class="example-content">
        <ion-grid>
            <ion-row class="ion-justify-content-center">
                <img height="300" src='../assets/wglogo.png' alt="welcome game logo"/>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <h1>Hello !</h1>
            </ion-row>
            <ion-row class="ion-justify-content-center" style="margin-bottom:50px">
                <p class="textcenter">Welcome Game is a game created to make your life in UTBM interesting</p>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col class="textcenter">
                    Been here before ?
                </ion-col>
                <ion-col class="textcenter">
                    First timer ?
                </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
                <ion-col>
                    <ion-button :onclick="goLogin" expand="block">Log in</ion-button>
                </ion-col>
                <ion-col>
                    <ion-button :onclick="goSignup" expand="block" fill="outline">Sign up</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import {  
            IonContent, 
            IonPage, 
            IonButton,
            IonGrid,
            IonRow,
            IonCol,
          } from '@ionic/vue';


  export default {
    components: { 
                  IonContent, 
                  IonPage, 
                  IonButton,
                  IonGrid,
                  IonRow,
                  IonCol,
                },
    data() {
      return {
        items: [1,2]
      };
    },
    async mounted() {
      
    },
    methods: {
      goLogin() {
        this.$router.push('/login');
      },
      goSignup(){
        this.$router.push('/signup');
      }
    }
  };
</script>