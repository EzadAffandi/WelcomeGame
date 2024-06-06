<template>
    <ion-page class="page">
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        
        <ion-tab-bar style="padding-bottom: 40px">
          <ion-tab-button tab="home" href="/home">
            <ion-icon :icon="mapOutline" />
            <ion-label>Maps</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="friends" href="/friends">
            <ion-icon :icon="peopleOutline" />
            <ion-label>Friends</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="forum" href="/forum">
            <ion-icon :icon="chatbubblesOutline" />
            <ion-label>Forum</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="search" href="/search">
            <ion-icon :icon="search" />
            <ion-label>Search</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="profile" href="/profile">
            <ion-icon :icon="personOutline" />
            <ion-label>Profile</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
</template>

  <script>
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  
    import { peopleOutline, search, personOutline, mapOutline, chatbubblesOutline } from 'ionicons/icons';
  
    export default {
      components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
      data() {
        return {
          peopleOutline,
          mapOutline,
          search,
          personOutline,
          chatbubblesOutline
        };
      },
    };
  </script>