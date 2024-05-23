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
        <ion-toast
          :is-open="wrongCreds"
          message="Service not yet available"
          :duration="5000"
          @didDismiss="setWrong(false)"
        ></ion-toast>
          <ion-grid>
            <ion-row class="ion-justify-content-center">
                <img height="300" src='../assets/wglogo.png' alt="welcome game logo"/>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-input label="Username" label-placement="floating" fill="outline" v-model="username" mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-input label="First name" label-placement="floating" fill="outline" v-model="fname" mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-input label="Last name" label-placement="floating" fill="outline" v-model="lname" mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-input label="Phone number" label-placement="floating" fill="outline" v-model="phone" mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-input label="Password" label-placement="floating" fill="outline" type="password" v-model="password" mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-button :onclick="signup" expand="block">Sign up</ion-button>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center" style="margin-top:30px">
              <ion-col class="textcenter">
                <p :onclick="goToLogin"><u>Already have an account ?</u></p>
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
            IonInput,
            IonButton,
            IonToast,
            IonGrid,
            IonRow,
            IonCol
          } from '@ionic/vue';

  export default {
    components: { 
                  IonContent, 
                  IonPage, 
                  IonInput,
                  IonButton,
                  IonToast,
                  IonGrid,
                  IonRow,
                  IonCol
                },
    data() {
      return {
        username: '',
        fname: '',
        lname: '',
        phone: '',
        password: '',
        wrongCreds: false,
      };
    },
    methods: {
      signup() {
        this.setWrong(true);
      },
      setWrong(param){
        this.wrongCreds = param;
      },
      goToLogin(){
        this.$router.push("/login");
      }
    }
  };
</script>