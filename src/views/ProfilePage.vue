<style scoped>
  .example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .username{
    font-size: larger
  }

  ion-col.counterInfo{
    text-align: center;
  }

  .profileRecap {
    margin-left: 10px;
  }

  ion-page{
    margin-top: constant(safe-area-inset-top);
    margin-top: env(safe-area-inset-top);
    }
</style>

<template>
  <ion-page>
    <ion-content>
    <div class="content">
      <ion-grid>
        <div class="profileRecap">
        <ion-row class="ion-align-items-center ion-justify-content-start">
          <ion-col size="auto">
            <p class="username">{{username}}</p>
          </ion-col>
          <ion-col style="display: flex;" size="auto">
            <ion-icon :icon="checkmarkCircleOutline"/> 
          </ion-col>
          <ion-col offset="8" size="1">
            <ion-icon :onclick="goToSettings" size="large" :icon="settingsOutline"/>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col size="auto">
          <img height="80" style="border-radius: 50%;" src="../assets/noprofile.png" alt="profilepic"/>
          </ion-col>
          <ion-col>
          <ion-row class="ion-justify-content-center">
            <ion-col class="counterInfo" size="3">
            Points
            </ion-col>
            <ion-col class="counterInfo" size="3">
              Friends
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-col class="counterInfo" size="3">
              {{ points }}
            </ion-col>
            <ion-col class="counterInfo" size="3">
               {{ friendCount }}
            </ion-col>
          </ion-row>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          
        </ion-row>
        <ion-row>
          <p>{{ firstname }} {{ lastname }}</p>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-note>{{bio}}</ion-note>
          </ion-col>
        </ion-row>
        <ion-row>
          <p>Promotion {{ promo }}</p>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button :onclick="triggerEdit" fill="outline" size="small" color="medium">Edit profile</ion-button>
          </ion-col>
          <ion-col>
            <ion-button :onclick="triggerEdit" fill="outline" size="small" color="medium">Message</ion-button>
          </ion-col>
        </ion-row>
      </div>
      </ion-grid>
      
    </div>
    </ion-content>
  </ion-page>
</template>

<script>
  import { 
            IonContent, 
            IonPage,
            IonButton,
            IonList,
            IonItem,
            IonGrid, 
            IonRow,
            IonCol,
            IonNote,
            IonIcon,
          } from '@ionic/vue';

          import { checkmarkCircleOutline, settingsOutline } from 'ionicons/icons';

  export default {
    components: { 
                  IonContent, 
                  IonPage,
                  IonButton,
                  IonList,
                  IonItem,
                  IonGrid,
                  IonRow,
                  IonCol,
                  IonNote,
                  IonIcon
                },
    mounted() {
      this.admin = this.$store.getters["user"].admin;
    },
    data() {
      return {
        checkmarkCircleOutline,
        settingsOutline,
        username: "user.name",
        firstname: "John",
        lastname: "Doe",
        phone: "07 11 22 33 44",
        bio: "Your bio will appear here",
        promo: "2022",
        friendCount: 10,
        points: 2788,
        admin: "true"
      };
    },
  methods: {
    goToSettings(){
      this.$router.push("/settings")
    },
    triggerEdit(){
      this.edit = !this.edit
    },
    
  }
  };
</script>