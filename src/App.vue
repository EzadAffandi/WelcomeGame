<template>
  <ion-app>
    <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>
<style>


ion-page{
margin-top: constant(safe-area-inset-top);
margin-top: env(safe-area-inset-top);
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