<style scoped>
.example-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.textcenter {
  text-align: center;
}
</style>

<template>
  <ion-page>
    <ion-content>
      <div class="example-content">
        <ion-toast
          :is-open="wrongCreds"
          message="Service not yet available"
          :duration="5000"
          @didDismiss="setWrong(false)"
        ></ion-toast>
        <ion-grid>
          <ion-row class="ion-justify-content-center">
            <img height="300" src="../assets/wglogo.png" alt="welcome game logo" />
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-col>
              <ion-input
                label="Username"
                label-placement="floating"
                fill="outline"
                v-model="username"
                mode="md"
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-col>
              <ion-input
                label="First name"
                label-placement="floating"
                fill="outline"
                v-model="fname"
                mode="md"
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-col>
              <ion-input
                label="Last name"
                label-placement="floating"
                fill="outline"
                v-model="lname"
                mode="md"
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-col>
              <ion-input
                label="Phone number"
                label-placement="floating"
                fill="outline"
                v-model="phone"
                mode="md"
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-col>
              <ion-input
                label="Email"
                label-placement="floating"
                fill="outline"
                v-model="email"
                mode="md"
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-col>
              <ion-input
                label="Password"
                label-placement="floating"
                fill="outline"
                type="password"
                v-model="password"
                mode="md"
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-col>
              <ion-input
                label="Password confirmation"
                label-placement="floating"
                fill="outline"
                type="password"
                v-model="password_confirm"
                mode="md"
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center">
            <ion-col>
              <ion-button :onclick="fetchRegister" expand="block">Sign up</ion-button>
            </ion-col>
          </ion-row>
          <ion-row class="ion-justify-content-center" style="margin-top: 30px">
            <ion-col class="textcenter">
              <p :onclick="goToLogin"><u>Already have an account ?</u></p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonToast,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/vue'

export default {
  components: {
    IonContent,
    IonPage,
    IonInput,
    IonButton,
    IonToast,
    IonGrid,
    IonRow,
    IonCol
  },
  data() {
    return {
      username: '',
      fname: '',
      lname: '',
      phone: '',
      email: '',
      password: '',
      password_confirm: '',
      wrongCreds: false
    }
  },
  methods: {
    signup() {
      this.setWrong(true)
    },
    setWrong(param) {
      this.wrongCreds = param
    },
    async fetchRegister() {
      try {
        const formData = new FormData()
        formData.append('username', this.username)
        formData.append('first_name', this.fname)
        formData.append('last_name', this.lname)
        formData.append('phone', this.phone)
        formData.append('email', this.email)
        formData.append('password', this.password)
        formData.append('password_confirmation', this.password_confirm)
        const response = await this.$axios.post(`${this.$API_URL}/register`, formData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (response.status === 200) {
          if (response.data.nouser) {
            this.setWrong(true)
          } else {
            this.$store.commit('SET_AUTH', true)
            this.$store.commit('SET_TOKEN', response.data.token)
            this.$store.commit('SET_USER', response.data.user)
            console.log(response.data.message)
            this.$router.push('/home')
          }
        } else {
          console.log('Error: ' + response.status + ' status code received')
        }
      } catch (error) {
        console.log('Error: ', error)
      }
    },
    goToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>
