<template>
  <ion-page>
    <ion-content>
      <div id="searchbar">
        <ion-searchbar v-model="searchValue" :oninput="search"></ion-searchbar>
      </div>
      <ion-grid v-if="loading">
        <ion-row class="ion-justify-content-center">
          <ion-col size="auto">
            <ion-spinner></ion-spinner>
          </ion-col>
        </ion-row>
      </ion-grid>
      <div  v-if="!loading && searchValue != ''">
        <div  v-if="result.length == 0">
          <ion-grid>
              <ion-row class="ion-justify-content-center">
                <ion-col size="auto">
                  <p>Ooops, nothing found ! Try searching for something else</p>
                </ion-col>
              </ion-row>
          </ion-grid>
        </div>
        <div v-else>
          <div v-for="(item,index) in result" :key="index">
          <ion-card @click="goToUser(item.id)">
            <ion-card-content>
              <ion-grid>
                <ion-row class="ion-align-items-center">
                  <ion-col size="auto" v-if="item.profilePic==''">
                    <img height="50" style="border-radius: 50%;" src="../assets/noprofile.png" alt="profilepic"/>
                  </ion-col>
                  <ion-col>
                    <p>@{{ item.username }}</p>
                    <p><b>{{ item.firstName }} {{ item.lastName }}</b></p>
                    <p>Promotion : {{ item.promotion }}</p>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
          </div>
        </div>
      </div>
        
      
    </ion-content>
  </ion-page>
</template>

<script>
  import { IonContent, IonPage, IonSearchbar, IonSpinner, IonGrid, IonCol, IonRow, IonCard, IonCardContent} from '@ionic/vue';

  export default {
    components: { IonContent, IonPage, IonSearchbar, IonSpinner, IonGrid, IonCol, IonRow, IonCard, IonCardContent},
    data(){
      return {
        loading: false,
        searchValue: '',
        result: [{id: 1, username: 'admin', firstName: 'John', lastName: 'Doe', promotion: '2022', profilePic: ''},
        {id: 2, username: 'ezad.ly', firstName: 'Izzat', lastName: 'BIN ADNAN', promotion: '2022', profilePic: ''}
        ],
      }
    },
    methods: {
      search(){
        if(this.searchValue!=''){
          this.loading = true;
          setTimeout(() => {
          this.loading = false;
          }, 900)
        }
        
      },
      goToUser(id){
        this.$router.push('/user/' + id);
      }
    }
  };
</script>

<style>
#searchbar{
  margin-bottom: 40px;
}
</style>