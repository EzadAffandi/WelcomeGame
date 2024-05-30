<style scoped>
  ion-card {
    padding-bottom: 10px;
  }

  ion-button {
    margin: 10px 10px
  }
</style>

<template>
  <ion-page>
    <ion-content>
      <ion-card v-for="(item,index) in posts" :key="index">
        <ion-card-header>
          <ion-card-title>{{ item.title }}</ion-card-title>
          <p>{{item.date}}</p>
          <ion-card-subtitle>By {{item.author}}</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          {{item.description}}
        </ion-card-content>
        <ion-grid>
          <ion-row class="ion-justify-content-end">
            <ion-col size="auto">
              <ion-button>Learn more</ion-button>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/vue';

  export default {
    components: { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,IonButton, IonGrid, IonRow, IonCol },
    data() {
      return {
        posts : [{id: 1, title: 'Developing Welcome Game', date: '10/05/2024', author: 'Ezad Affandi', description: 'This forum talks about things that happened during developpement process ...'},
        {id: 1, title: 'Is it hard to integrate with the locals ?', date: '20/05/2024', author: 'Welcome Game Team', description: 'Having difficulty to express yourselves ? Lets discuss together !'}
        ]
      };
    },
  };
</script>