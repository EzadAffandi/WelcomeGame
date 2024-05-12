import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../components/TabsComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
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
          path: 'profile',
          component: () => import('../views/ProfilePage.vue'),
        },
        {
          path: 'search',
          component: () => import('../views/SearchPage.vue'),
        },
      ],
    },
  ]
})

export default router
