import { createRouter, createWebHistory } from '@ionic/vue-router';
import AboutView from '../views/AboutView.vue'
import PostView from '../views/PostView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import RessourceView from '../views/RessourceView.vue'
import IonicView from '../views/IonicView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/ressource',
      name: 'ressource',
      component: RessourceView
    },
    {
      path: '/post',
      name: 'post',
      component: PostView
    },
    {
      path: '/ionic',
      name: 'ionic',
      component: IonicView
    },
  ]
})

export default router
