<template>
  <ion-app>
      <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>
<style>


.page{
  margin-top: 30px;
}
</style>
<script>
  import { IonApp, IonRouterOutlet} from '@ionic/vue';

  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'App',
    components: { IonApp, IonRouterOutlet},
  });
</script>