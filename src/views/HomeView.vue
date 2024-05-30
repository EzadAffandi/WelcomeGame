<template>
  <ion-page>
    <ion-content>

      <div id="map" class="map"></div>

    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// import { useGeolocation } from '@vueuse/core'

export default defineComponent({
  name: 'HomeView',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  setup() {
    // const { coords } = useGeolocation()

    onMounted(() => {
      // Default coordinates if geolocation is not supported or available
      let defaultCoords = [47.633, 6.847]

      // Create the map instance with default coordinates
      let map = L.map('map').setView(defaultCoords, 13)

      // Add the tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      // Add a marker to the default or current position
      L.marker(defaultCoords).addTo(map).bindPopup('You are here.').openPopup()
    })
  }
})

</script>

<style>
.map {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
