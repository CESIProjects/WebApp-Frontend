import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createPinia } from 'pinia';
import App from './App.vue';
import LayoutDefault from './layouts/default.vue';
import Home from './views/HomeView.vue';

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
