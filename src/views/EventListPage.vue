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
        <ion-title>Your events</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    <div class="content">
      <h1>All events</h1>
      <div v-if="events.length != 0">
        <ion-note>This list show all the events that you've joined so far</ion-note>
        <ion-list style="margin-top:20px">
          <div v-for="(item,index) in events" :key="index">
          <ion-item v-if="item.joined">
            <p>{{ item.title }}</p>
          </ion-item>
          </div>
        </ion-list>
      </div>
      <div v-else>
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <ion-col size="auto">
              <p>You haven't joined any event so far. Join one now !</p>
            </ion-col>
          </ion-row>
        </ion-grid> 
      </div>
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
            IonGrid,
            IonRow,
            IonCol,
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
                  IonGrid,
                  IonRow,
                  IonCol
                },
    data() {
      return {
        add,
        events: []
      };
    },
  async mounted(){
    await this.fetchEvents()
  },
  methods: {
    async fetchEvents() {
      try {
        const response = await this.$axios.get(`${this.$API_URL}/user/${this.$store.getters["user"].id}/events`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.$store.getters["token"]}`
          }
        });

        if (response.status === 200) {
          if (response.data.nouser) {
            console.log("hello")
          } else {
            this.events = response.data.events;
            console.log("hello")
          }
        } else {
          console.log('Error: non-200 status code received');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
  }
  };
</script>