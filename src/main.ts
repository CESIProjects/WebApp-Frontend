import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue';
import LayoutDefault from './layouts/default.vue';
import Home from './views/HomeView.vue';
import RegisterView from './views/RegisterView.vue';
import './assets/main.css'
import AboutView from './views/AboutView.vue';
import PostView from './views/PostView.vue';
import RessourceView from './views/RessourceView.vue';

const pinia = createPinia();

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app');
