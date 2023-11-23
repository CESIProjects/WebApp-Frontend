<template>
  <div class="grid grid-cols-8 gap-4">
    <nav class="h-screen flex flex-col justify-between bg-gray-900 py-4 px-4 text-white text-xl">
        <div class="flex flex-col space-y-4">
            LOGO (RE)Sources
            <input class="bg-gray-800 rounded-lg w-full py-2 px-4 mt-4" placeholder="Rechercher" />
            <RouterLink to="/">Acceuil</RouterLink>
            <RouterLink to="/about">A propos</RouterLink>
            <div>Commentées</div>
            <ul class="flex flex-col gap-4">
                <li class="bg-gray-800 py-2 px-4 rounded-lg">Santé</li>
                <li class="bg-gray-800 py-2 px-4 rounded-lg">Sport</li>
                <li class="bg-gray-800 py-2 px-4 rounded-lg">Education</li>
                <li class="bg-gray-800 py-2 px-4 rounded-lg">Droit</li>
            </ul>
        </div>
        <div class="flex">
          <div>
            <div v-if="user && user.name">
              <RouterLink class="bg-gray-800 py-2 px-4 rounded-lg text-sm" to="/profile">{{ user.name }}</RouterLink>
            </div>
            <div v-else>
              <RouterLink class="bg-gray-800 py-2 px-4 rounded-lg text-sm" to="/register">Compte</RouterLink>
            </div>
          </div>
          <button v-if="user && user.name" @click="logout" class="ml-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
          </button>
        </div>
    </nav>
    <div class="rounded-lg bg-gray-100 col-span-7 p-8 m-4">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import { useUserStore } from '@/stores/user';

export default {
  computed: {
    user() {
      const userStore = useUserStore();
      return userStore.user;
    },
  },
  methods: {
    logout() {
      const userStore = useUserStore();
      userStore.resetUser();
      this.$router.push('/register');
    },
  },
};
</script>
