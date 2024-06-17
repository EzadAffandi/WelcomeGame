<template>
  <ion-page>
    <ion-header>
        <ion-toolbar>
          <ion-grid>
            <div class="points">
            <ion-row class="ion-align-items-center ion-justify-content-end">
              <ion-col size="auto">
                <p style="font-size: larger">{{points}}</p>
              </ion-col>
              <ion-col style="display: flex;" size="auto">
                <ion-icon style='color:yellow' :icon=trophy size="large"></ion-icon>
              </ion-col>
            </ion-row>
            </div>
          </ion-grid>
          
        </ion-toolbar>
      </ion-header>
    <ion-content>
      <div id="map" class="map">
      </div>
      
      <ion-alert
        :is-open="alertClickMap"
        header="Create an event"
        :buttons="alertButtons"
        message="Do you want to create an event here ?"
        @didDismiss="setOpenAlertMap(false)"
      ></ion-alert>

      <ion-alert
        :is-open="alertGetPoints"
        header="Notification"
        :buttons="dismissButton"
        message="Congratulations ! You have received 10 points from joining an event !"
        @didDismiss="setOpenAlertPoints(false)"
      ></ion-alert>
      
      <ion-modal :is-open="isOpenAddEvent" @didDismiss="setOpenAddEvent(false)">
      <ion-header>
        <ion-toolbar style="padding-top: 30px;">
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
                <ion-input label="Title" label-placement="floating" fill="outline" v-model="inputEventName" mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-input label="Description" label-placement="floating" fill="outline" v-model="inputEventDesc"  mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-input :disabled="true" label="Latitude" label-placement="floating" fill="outline" v-model="inputEventLat"  mode="md"></ion-input>
              </ion-col>
              <ion-col>
                <ion-input :disabled="true" label="Longitude" label-placement="floating" fill="outline" v-model="inputEventLong"  mode="md"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-button :onclick="createEvent" expand="block">Create</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
      </ion-content>
    </ion-modal>

    <ion-modal :is-open="isOpenDetailEvent" @didDismiss="setOpenDetailEvent(false)">
      <ion-header>
        <ion-toolbar style="padding-top: 30px;">
          <ion-title>Event's details</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="setOpenDetailEvent(false)">Close</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-grid>
            <ion-row class="ion-justify-content-center">
              <ion-col>
                <ion-input label="Name" label-placement="floating" fill="outline" v-model="eventNameDetail" mode="md" :readonly="true"></ion-input>
              </ion-col>
            </ion-row>
            <ion-row class="ion-justify-content-center">
              <ion-col v-if="eventJoined">
                <ion-button expand="block" :disabled="true" fill="outline">Event joined</ion-button>
              </ion-col>
              <ion-col v-else>
                <ion-button v-if="loadingJoin" :onclick="joinEvent" expand="block" :disabled="loadingJoin"><ion-spinner></ion-spinner></ion-button>
                <ion-button v-else :onclick="joinEvent" expand="block" >Join Event</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
      </ion-content>
    </ion-modal>

    </ion-content>
  </ion-page>
</template>

<script>

import { IonButtons, IonContent, IonFab, IonFabButton, IonIcon, IonModal, IonPage, IonHeader, IonToolbar, IonButton, IonTitle, IonGrid, IonCol, IonRow, IonInput, IonAlert, IonSpinner } from '@ionic/vue'
import { trophy} from 'ionicons/icons';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// import { useGeolocation } from '@vueuse/core'

export default{
  components: { IonContent, IonPage, IonFab, IonFabButton, IonIcon, IonModal, IonButtons, IonHeader, IonToolbar, IonButton, IonTitle, IonGrid, IonCol, IonRow, IonInput, IonAlert, IonSpinner },
  data() {
    return {
      trophy,
      admin: false,
      map:'',
      isOpenAddEvent: false,
      isOpenDetailEvent: false,
      alertClickMap: false,
      alertGetPoints: false,
      loadingJoin: false,
      eventNameDetail:'',
      eventIdDetail:'',
      eventLatDetail:0,
      eventLongDetail:0,
      eventJoined: false,
      inputEventName:'',
      inputEventDesc:'',
      inputEventLat:0,
      inputEventLong:0,
      points: 2788,
      events: [{id:1,x:47.633,y:6.847,name:'test'},{id:2,x:47.632,y:6.843,name:'test2'}],
      alertButtons : [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //console.log('Alert canceled');
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: () => {
            this.setOpenAddEvent(true);
          },
        },
      ],
      dismissButton: ['Dismiss']
    }
  },
  async mounted() {
    console.log(this.$store.getters["token"])
    await this.fetchEvents();
    await this.setMap(47.633, 6.847);
    this.admin = this.$store.getters["user"].isAdmin;
    console.log(this.events)
  },
  methods: {
    setOpenAddEvent(param){
      this.isOpenAddEvent = param;
    },
    setOpenDetailEvent(param){
      this.isOpenDetailEvent = param;
    },
    setOpenAlertMap(param){
      this.alertClickMap = param;
    },
    setOpenAlertPoints(param){
      this.alertGetPoints = param;
    },
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
    async setMap(lat,long){
      // const { coords } = useGeolocation()
      let defaultCoords = [lat, long]
      let myCoords = [47.633, 6.847]

      // Create the map instance with default coordinates
      let map = L.map('map').setView(defaultCoords, 17)
      // Add the tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
      // Add a marker to the default or current position
      L.marker(myCoords).addTo(map)
      await this.events.forEach((element) =>{
        L.circle([element.latitude, element.longitude], {
          color : element.joined ? 'green' : 'red',
          fillColor: element.joined ? 'green' : 'red',
          fillOpacity: 0.5,
          radius: 50,
          title: element.title,
          id: element.id,
          joined: element.joined
        }).addTo(map).bindPopup(this.eventPopup);
      });

      map.on('click',this.onMapClick);
      setTimeout(() => {
        map.invalidateSize()
      }, 10)

      this.mapInstance = map;
      //Default coordinates if geolocation is not supported or available
    },
    onMapClick(e){
      console.log(e);
      this.setOpenAlertMap(true);
      this.inputEventLat = e.latlng.lat;
      this.inputEventLong = e.latlng.lng;
    },
    eventPopup(e){
      console.log(e)
      this.setOpenDetailEvent(true);
      this.eventIdDetail = e.options.id;
      this.eventNameDetail = e.options.title;
      this.eventJoined = e.options.joined;
      this.eventLatDetail = e._latlng.lat;
      this.eventLongDetail = e._latlng.lng;
    },
    async createEvent(){
      const formData = new FormData();
      formData.append('title', this.inputEventName);
      formData.append('latitude', this.inputEventLat);
      formData.append('longitude', this.inputEventLong);
      formData.append('radius', 50);
      try{
      const response = await this.$axios.post(`${this.$API_URL}/event`, formData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.$store.getters["token"]}`
          }
        });

        if (response.status === 201) {
          if (response.data.nouser) {
            this.setWrong(true);
          } else {
            console.log('event created')
            await this.fetchEvents();
            this.mapInstance.remove();
            await this.setMap(response.data.event.latitude,response.data.event.longitude);
          }
        } else {
          console.log('Error: non-200 status code received');
        }
      } catch (error) {
        console.error('Error:', error);
      }
      await this.fetchEvents(); 
      
      this.setOpenAddEvent(false);
    },
    async joinEvent(){
      this.loadingJoin = true;
      const formData = new FormData();
      formData.append('user_id', this.$store.getters["user"].id);
      try{
      const response = await this.$axios.post(`${this.$API_URL}/event/${this.eventIdDetail}/join`, formData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.$store.getters["token"]}`
          }
        });

        if (response.status === 200) {
          console.log(response.data)
          this.eventJoined = true;
          this.setOpenAlertPoints(true);
          this.points = this.points + 10;
          await this.fetchEvents();
          this.mapInstance.remove();
          await this.setMap(this.eventLatDetail,this.eventLongDetail);
        } else {
          console.log('Error: non-200 status code received');
        }
      } catch (error) {
        console.error('Error:', error);
      }
      this.loadingJoin = false;
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
