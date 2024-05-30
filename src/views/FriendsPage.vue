<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  * {
  font-size: 62, 5%;
  box-sizing: border-box;
  margin: 0;
}

body {
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: #fbfaff;
  display: flex;
  align-items: center;
  justify-content: center;
}

main {
  width: 40rem;
  height: 43rem;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 5px 15px 8px #e4e7fb;
  box-shadow: 0px 5px 15px 8px #e4e7fb;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
}
  #leaderboard {
  width: 100%;
  position: relative;
}

table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  color: #141a39;
  cursor: default;
}
tr {
  transition: all 0.2s ease-in-out;
  border-radius: 0.2rem;
}
tr:not(:first-child):hover {
  background-color: #fff;
  transform: scale(1.1);
  -webkit-box-shadow: 0px 5px 15px 8px #e4e7fb;
  box-shadow: 0px 5px 15px 8px #e4e7fb;
}
tr:nth-child(odd) {
  background-color: #f9f9f9;
}

tr:nth-child(1) {
  color: #fff;
}
td {
  height: 5rem;
  font-family: "Rubik", sans-serif;
  font-size: 1.4rem;
  padding: 1rem 2rem;
  position: relative;
}
.number {
  width: 1rem;
  font-size: 2.2rem;
  font-weight: bold;
  text-align: left;
}

.name {
  text-align: left;
  font-size: 1.2rem;
}

.points {
  font-weight: bold;
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.points:first-child {
  width: 10rem;
}
.gold-medal {
  height: 3rem;
  margin-left: 1.5rem;
}
.ribbon {
  width: 42rem;
  height: 5.5rem;
  top: -0.5rem;
  background-color: #5c5be5;
  position: absolute;
  left: -1rem;
  -webkit-box-shadow: 0px 15px 11px -6px #7a7a7d;
  box-shadow: 0px 15px 11px -6px #7a7a7d;
}
.ribbon::before {
  content: "";
  height: 1.5rem;
  width: 1.5rem;
  bottom: -0.8rem;
  left: 0.35rem;
  transform: rotate(45deg);
  background-color: #5c5be5;
  position: absolute;
  z-index: -1;
}

.ribbon::after {
  content: "";
  height: 1.5rem;
  width: 1.5rem;
  bottom: -0.8rem;
  right: 0.35rem;
  transform: rotate(45deg);
  background-color: #5c5be5;
  position: absolute;
  z-index: -1;
}
@media (max-width: 740px) {
    * {
      font-size: 70%;
    }
}

@media (max-width: 500px) {
    * {
      font-size: 55%;
    }
}

@media (max-width: 390px) {
    * {
      font-size: 45%;
    }
}
</style>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Friends</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="leaderboard">
      <div class="ribbon"></div>
      <table>
        <tr>
            <td class="number">1</td>
            <td class="name">Lee Taeyong</td>
            <td class="points">
              258.244 <img class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>
            </td>
          </tr>
        <tr>
            <td class="number">2</td>
            <td class="name">Mark Lee</td>
            <td class="points">258.242</td>
          </tr>
          <tr>
            <td class="number">3</td>
            <td class="name">Xiao Dejun</td>
            <td class="points">258.223</td>
          </tr>
          <tr>
            <td class="number">4</td>
            <td class="name">Qian Kun</td>
            <td class="points">258.212</td>
          </tr>
          <tr>
            <td class="number">5</td>
            <td class="name">Johnny Suh</td>
            <td class="points">258.208</td>
          </tr>
      </table>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
  import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
  import { IonItem, IonLabel, IonList } from '@ionic/vue';

  export default {
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonLabel, IonList,IonItem },
  };
</script>