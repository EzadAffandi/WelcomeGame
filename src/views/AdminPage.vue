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
        <ion-title>Admin checklist</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    <div class="content">
      <h1>Your Checklist</h1>
      <ion-note>The items listed below are the most common administration processes need to be done by international students and some items might not be related to you</ion-note>
      <ion-list>
        <ion-item v-for="(item,index) in listCheck" :key="index">
          <ion-checkbox :checked="item.check">{{ item.name }}</ion-checkbox>
        </ion-item>
      </ion-list>
      <ion-note>Add your own items to the list are coming soon !</ion-note>
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
            IonNote,
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
                  IonNote,
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
    triggerEdit(){
      this.edit = !this.edit
    },
    logout(){
      this.$router.push("/login")
    }
  }
  };
</script>