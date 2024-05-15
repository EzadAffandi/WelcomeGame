<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .content{
    margin-left: 20px;
  }
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
    <div class="content">
      <h1 >Your Welcome Game's Profile</h1>
      <ion-button v-if="!edit" :onclick="triggerEdit">Edit</ion-button>
      <ion-button v-if="edit" fill="outline" :onclick="triggerEdit">Confirm</ion-button>
      <ion-list>
        <ion-item>
          <ion-input label="Username" :value="username" :readonly="!edit"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="First name" :value="firstname" :readonly="!edit"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Last name" :value="lastname" :readonly="!edit"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Phone Number" :value="phone" :readonly="!edit"></ion-input>
        </ion-item>
        <ion-item>
          <ion-button expand="block" fill="clear" :onclick="goToAdmin">View your administration progress</ion-button>
        </ion-item>
        <ion-item>
          <ion-button expand="block" color="danger" fill="clear" :onclick="logout">Log out</ion-button>
        </ion-item>
      </ion-list>
    </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { 
            IonHeader, 
            IonToolbar, 
            IonTitle, 
            IonContent, 
            IonPage,
            IonButton,
            IonList,
            IonItem,
            IonInput 
          } from '@ionic/vue';

  export default {
    components: { 
                  IonHeader, 
                  IonToolbar, 
                  IonTitle, 
                  IonContent, 
                  IonPage,
                  IonButton,
                  IonList,
                  IonItem,
                  IonInput 
                },
    data() {
      return {
        username: "user.name",
        firstname: "John",
        lastname: "Doe",
        phone: "07 11 22 33 44",
        edit: false,
      };
    },
  methods: {
    goToAdmin(){
      this.$router.push("/admin")
    },
    triggerEdit(){
      this.edit = !this.edit
    },
    logout(){
      this.$router.push("/login")
    }
  }
  };
</script>