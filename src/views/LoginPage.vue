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
          message="Username or password incorrecttttt"
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
                <ion-input label="Password" label-placement="floating" fill="outline" type="password" v-model="password"  mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-button :onclick="login" expand="block">Log in</ion-button>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center" style="margin-top:30px">
              <ion-col class="textcenter">
                <p :onclick="goToSignup"><u>Don't have an account yet ?</u></p>
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
        password: '',
        wrongCreds: false,
      };
    },
    async mounted() {

    },
    methods: {
      login() {
        const formData = new FormData();
        formData.append('login', this.username);
        formData.append('password', this.password);

        this.$axios.post(`${this.$API_URL}/login`, formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(
          response => {
            if(response.status === 200){
              if(response.data.nouser){
                this.setWrong(true);
              } else {
                this.$store.commit("SET_AUTH", true);
                this.$store.commit("SET_TOKEN", response.data.token);
                this.$store.commit("SET_USER", response.data.user);
                this.$store.commit("SET_ADMIN", response.data.user.isAdmin);
                this.$router.push('/home');
              }
            } else {
              console.log('error axios');
            }
            
          }
        ).catch(
          error => {
            console.error('Error:', error);
          }
        )
      },
      setWrong(param){
        this.wrongCreds = param;
      },
      goToSignup(){
        this.$router.push("/signup");
      }
    }
  };
</script>