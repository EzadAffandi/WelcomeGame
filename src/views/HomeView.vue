<template>
  <ion-page>
    <ion-content>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button>
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
      <div id="map" class="map"></div>
    </ion-content>
  </ion-page>
</template>

<script>

import { IonContent, IonFab, IonFabButton, IonIcon, IonPage } from '@ionic/vue'
import { add } from 'ionicons/icons';
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// import { useGeolocation } from '@vueuse/core'

export default{
  components: { IonContent, IonPage, IonFab, IonFabButton, IonIcon },
  data() {
    return {
      add,
      admin: false,
    }
  },
  mounted() {
    // const { coords } = useGeolocation()
    let defaultCoords = [47.633, 6.847]

      // Create the map instance with default coordinates
      let map = L.map('map').setView(defaultCoords, 16)
      // Add the tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)
      // Add a marker to the default or current position
      L.marker(defaultCoords).addTo(map).bindPopup('You are here.').openPopup()

      setTimeout(() => {
        map.invalidateSize()
      }, 10)
    //Default coordinates if geolocation is not supported or available
    this.admin = this.$store.getters["user"].admin;

  },
  methods: {
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
