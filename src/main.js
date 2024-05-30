import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import '@ionic/vue/css/palettes/dark.system.css';

import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue';

import App from './App.vue';
import router from './router';
import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    token: null,
    auth: false,
    user: '',
  },
  getters: {
    user: (state) => state.user,
    auth: (state) => state.auth,
    token: (state) => state.token,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_AUTH(state, value) {
      state.auth = value;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    resetUser({ commit }) {
      commit("SET_TOKEN", null);
      commit("SET_USER", {});
      commit("SET_AUTH", false);
    },
  },

});

export default store;
const app = createApp(App).use(IonicVue).use(router).use(store);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$API_URL = 'http://192.168.1.34:5001';

router.isReady().then(() => {
  app.mount('#app');
});

