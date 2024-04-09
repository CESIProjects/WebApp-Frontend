import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';

import App from './App.vue';
import LayoutDefault from './layouts/default.vue';
import LayoutRegister from './layouts/register.vue';
import LayoutLogin from './layouts/login.vue';
import Home from './views/HomeView.vue';
import RegisterView from './views/RegisterView.vue';
import './assets/main.css'
import AboutView from './views/AboutView.vue';
import PostView from './views/PostView.vue';
import RessourceView from './views/RessourceView.vue';
import LoginView from './views/LoginView.vue';

const routes = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      { 
        path: '/', 
        name: 'home', 
        component: Home 
      },
      {
        path: '/about', 
        name: 'about', 
        component: AboutView
      },
      {
        path: '/post', 
        name: 'post', 
        component: PostView
      },
      {
        path: '/ressource', 
        name: 'ressource', 
        component: RessourceView
      },
    ]
  },
  {
    path: '/',
    component: LayoutRegister,
    children: [
      { 
        path: '/register', 
        name: 'register', 
        component: RegisterView 
      }
    ]
  },
  {
    path: '/',
    component: LayoutLogin,
    children: [
      {
        path: '/login',
        name: 'login',
        component: LoginView
      }
    ]
  },
];

app.use(pinia)
app.use(IonicVue)
app.use(router)

router.isReady().then(() => {
    app.mount('#app');
});
