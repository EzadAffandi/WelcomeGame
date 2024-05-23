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
          <ion-col>
            <ion-note>{{bio}}</ion-note>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-button v-if="!edit" :onclick="triggerEdit" disabled="true">Edit</ion-button>
            <ion-button v-if="edit" fill="outline" :onclick="triggerEdit">Confirm</ion-button>
          </ion-col>
        </ion-row>
      </div>
      </ion-grid>
      
      <ion-list>
        <ion-item>
          <ion-input label="Username :" :value="username" :readonly="!edit"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="First name : " :value="firstname" :readonly="!edit"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Last name :" :value="lastname" :readonly="!edit"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Promo :" :value="promo" :readonly="!edit"></ion-input>
        </ion-item>
        <ion-item>
          <ion-input label="Phone Number :" :value="phone" :readonly="!edit"></ion-input>
        </ion-item>
        <ion-item>
          <ion-button expand="block" fill="clear" :onclick="goToAdmin">View your administration progress</ion-button>
        </ion-item>
        <ion-item>
          <ion-button expand="block" color="danger" fill="clear" :onclick="logout">Log out</ion-button>
        </ion-item>
      </ion-list>
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
            IonInput,
            IonGrid, 
            IonRow,
            IonCol,
            IonNote,
            IonIcon,
          } from '@ionic/vue';

          import { checkmarkCircleOutline } from 'ionicons/icons';

  export default {
    components: { 
                  IonContent, 
                  IonPage,
                  IonButton,
                  IonList,
                  IonItem,
                  IonInput,
                  IonGrid,
                  IonRow,
                  IonCol,
                  IonNote,
                  IonIcon
                },
    data() {
      return {
        checkmarkCircleOutline,
        username: "user.name",
        firstname: "John",
        lastname: "Doe",
        phone: "07 11 22 33 44",
        bio: "Your bio will appear here",
        promo: "2022",
        friendCount: 10,
        points: 2788,
        admin: "true",
        edit: false,
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
      this.$store.dispatch("resetUser");
      this.$router.push("/login")
    }
  }
  };
</script>