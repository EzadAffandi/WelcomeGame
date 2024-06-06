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
  <ion-page class="page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Settings</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
    <div class="content">
      <ion-list>
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
  import { add } from 'ionicons/icons';
  import { 
            IonHeader, 
            IonToolbar, 
            IonTitle, 
            IonContent, 
            IonPage,
            IonList,
            IonItem,
            IonCheckbox,
            IonButtons,
            IonBackButton,
            IonFab,
            IonFabButton,
            IonIcon,
          } from '@ionic/vue';

  export default {
    components: { 
                  IonHeader, 
                  IonToolbar, 
                  IonTitle, 
                  IonContent, 
                  IonPage,
                  IonList,
                  IonItem,
                  IonCheckbox,
                  IonButtons,
                  IonBackButton,
                  IonFab,
                  IonFabButton,
                  IonIcon,
                },
    data() {
      return {
        add,
        listCheck: [{name: "VLS-TS", check: false},{name: "Ameli", check: false},{name: "Assurance Habitation", check: false}]
      };
    },
  methods: {
    goToAdmin(){
      this.$router.push("/admin")
    },
    logout(){
      this.$store.dispatch("resetUser");
      this.$router.push("/login")
    }
  }
  };
</script>