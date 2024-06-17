import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../components/TabsComponent.vue';
import store from '../main';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/first',
    },
    {
      path: '/first',
      component: () => import('../views/FirstPage.vue'),
    },
    {
      path: '/login',
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('../views/SignupPage.vue'),
    },
    {
      path: '/admin',
      component: () => import('../views/AdminPage.vue'),
    },
    {
      path: '/eventlist',
      component: () => import('../views/EventListPage.vue'),
    },
    {
      path: '/settings',
      component: () => import('../views/SettingsPage.vue'),
    },
    {
      path: '/user/:id',
      component: () => import('../views/UserPage.vue'),
    },
    {
      path: '/',
      component: Tabs,
      children: [
        {
          path: '',
          redirect: '/home',
        },
        {
          path: 'home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'friends',
          component: () => import('../views/FriendsPage.vue'),
        },
        {
          path: 'forum',
          component: () => import('../views/ForumPage.vue'),
        },
        {
          path: 'profile',
          component: () => import('../views/ProfilePage.vue'),
        },
        {
          path: 'search',
          component: () => import('../views/SearchPage.vue'),
        },
        {
          path: 'game',
          component: () => import('../views/GamePage.vue'),
        },
      ],
    },
  ]
})

router.beforeEach((to, from, next) => {
  const auth = store.getters["auth"];
  const user = store.getters["user"];
  if (auth && user || to.path == '/first'|| to.path == '/signup') {
    next();
  } else if (to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
});


export default router
