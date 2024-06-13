<template>
  <ion-page>
    <ion-content>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button @click="setOpenAddEvent(true)">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <div id="map" class="map"></div>
      <ion-modal :is-open="isOpenAddEvent" @didDismiss="setOpenAddEvent(false)">
      <ion-header>
        <ion-toolbar>
          <ion-title>Add event</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpenAddEvent(false)">Cancel</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-grid>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-input label="Name" label-placement="floating" fill="outline" v-model="eventName" mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-input label="Description" label-placement="floating" fill="outline" type="password" v-model="eventDesc"  mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-button :onclick="login" expand="block">Create</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
      </ion-content>
    </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script>

import { IonButtons, IonContent, IonFab, IonFabButton, IonIcon, IonModal, IonPage, IonHeader, IonToolbar, IonButton, IonTitle, IonGrid, IonCol, IonRow } from '@ionic/vue'
import { add } from 'ionicons/icons';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// import { useGeolocation } from '@vueuse/core'

export default{
  components: { IonContent, IonPage, IonFab, IonFabButton, IonIcon, IonModal, IonButtons, IonHeader, IonToolbar, IonButton, IonTitle, IonGrid, IonCol, IonRow },
  data() {
    return {
      add,
      admin: false,
      isOpenAddEvent: false,
      events: [{id:1,x:47.633,y:6.847,name:'test'},{id:2,x:47.632,y:6.843,name:'test2'}]
    }
  },
  async mounted() {
    console.log(this.$store.getters["token"])
    await this.fetchEvents();
    await this.setMap();
    this.admin = this.$store.getters["user"].admin;
    console.log(this.events)
  },
  methods: {
    setOpenAddEvent(param){
      this.isOpenAddEvent = param;
    },
    async fetchEvents() {
      try {
        const response = await this.$axios.get(`${this.$API_URL}/event`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.$store.getters["token"]}`
          }
        });

        if (response.status === 200) {
          if (response.data.nouser) {
            this.setWrong(true);
          } else {
            this.events = response.data.events;
          }
        } else {
          console.log('Error: non-200 status code received');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    },
    async setMap(){
      // const { coords } = useGeolocation()
      let defaultCoords = [47.633, 6.847]

      // Create the map instance with default coordinates
      let map = L.map('map').setView(defaultCoords, 17)
      // Add the tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
      // Add a marker to the default or current position
      L.marker(defaultCoords).addTo(map)
      console.log(this.events)
      await this.events.forEach((element) =>{
        L.circle([element.latitude, element.longitude], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 50
        }).addTo(map);
      });
      setTimeout(() => {
        map.invalidateSize()
      }, 10)
      //Default coordinates if geolocation is not supported or available
    }
  }
}

</script>

<style scoped>
.map {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
