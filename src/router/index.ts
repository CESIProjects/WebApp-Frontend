import { createRouter, createWebHistory } from 'vue-router'
import LayoutDefault from '../layouts/default.vue'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import PostView from '../views/PostView.vue'
import RegisterView from '../views/RegisterView.vue'
import LoginView from '../views/LoginView.vue'
import RessourceView from '../views/RessourceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'layout',
      component: LayoutDefault
    },
    {
      path: '/',
      name: 'home',
      meta: { layout: 'LayoutDashboard' },
      component: HomeView
    },
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
  ]
})

export default router