<template>
  <div class="grid grid-cols-12">
    <nav class="sticky border-r-2 border-gray-700 top-0 flex flex-col justify-between h-screen col-span-2 px-6 py-4 text-xl text-white bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 "> <!-- bg-gradient-to-l from-blue-600 to-blue-900 -->
        <div class="flex flex-col space-y-4">
            <div class="flex">
              <img src="/Gouvernement_N.png" class="w-12 h-12 mt-1 mr-3 rounded-full" alt="">
              <div class="font-semibold">
                (RE) SOURCES <br>RELATIONNELLES
              </div>
            </div>
            <div class="border-t-2 border-gray-200 py-2"></div>
            <div class="flex flex-col space-y-8">
              <RouterLink to="/" class="flex"><img src="/svg/home.svg" class="mr-2">Acceuil</RouterLink>
              <RouterLink to="/about" class="flex"><img src="/svg/dashboard.svg" class="mr-2">Tableau de bord</RouterLink>
              <div class="border-t-2 border-gray-200 py-2"></div>
            </div>
            <div class="flex flex-col space-y-8">
              <div class="flex"><img src="/svg/recent.svg" class="mr-2">Recent</div>
              <div class="flex"><img src="/svg/document.svg" class="mr-2">Document</div>
              <div class="flex"><img src="/svg/like.svg" class="mr-2">Mes Likes</div>
              <div class="border-t-2 border-gray-200 py-2"></div>
            </div>
            <button class="py-3 text-lg font-semibold text-black  bg-gray-200 border-2 border-gray-800 rounded-lg flex flex-col items-center justify-center pt-4 gap-y-2"> 
              <img src="./assets/baguette.png" class="w-20" />
              <div class="text-lg">Ajouter une publication</div>
            </button>
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
        <div class="flex flex-col">
          <div class="flex my-5"><img src="/svg/settings.svg" class="mr-2">Parametre</div>
          
          <div class="py-1 mb-2 flex rounded-full hover:bg-gray-800">
              <img src="/Gouvernement_N.png" class="w-12 h-12 mt-1 mr-3 rounded-full" alt=""><div>
              <div v-if="user && user.name">
                <RouterLink to="/profile">
                  {{ user.name }}
                </RouterLink>
              </div>
              <div v-else>
                <RouterLink to="/register">Se Connecter</RouterLink>
              </div>
              <span class="text-gray-200 text-lg">Utilisateur</span></div>
              <button v-if="user && user.name" @click="logout" class="ml-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                </svg>
              </button>
          </div>
        </div>
    </nav>
    <div class="col-span-7 p-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 relative ">
      <RouterView />
      <!-- <div class="absolute right-0 top-4 border-l-2 border-y-2 rounded-l-xl bg-white">
        <div class="p-6 flex justify-center items-center">
          <div class="text-3xl">Bienvenue sur le réseau ministériel</div>
          <img src="./assets/mascotte-JO.png" class="w-52 transform " />
        </div>
      </div> -->
    </div>
    <div class="col-span-3 p-8 border-l-2 border-gray-700 text-xl bg-gradient-to-r from-red-500 via-red-700 to-red-800"> <!--  bg-gradient-to-r from-red-400 to-red-700 -->
      <div class="sticky top-10">
      <div class="relative w-full">
        <input type="text" class="w-full py-3 pl-10 pr-4  placeholder:text-black rounded-xl border-2 focus:outline-none" placeholder="Rechercher">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src="/svg/search.svg" class="w-5 h-5" alt="">
        </div>
      </div>
      <div class=" py-4 mt-4 rounded-3xl ">
        <div class="font-bold">Catégorie :</div>
        <ul class="flex flex-col space-y-4 my-4">
          <li>
            <div class="font-semibold">Test</div>
            <div class="mt-1 text-sm">Ceci décris la caté</div>
          </li>
          <li class="border-t border-gray-800 pt-3">
            <div class="font-semibold">Test</div>
            <div class="mt-1 text-sm">Ceci décris la caté</div>
          </li>
          <li class="border-t border-gray-800 pt-3">
            <div class="font-semibold">Test</div>
            <div class="mt-1 text-sm">Ceci décris la caté</div>
          </li>
          <li class="border-t border-gray-800 pt-3">
            <div class="font-semibold">Test</div>
            <div class="mt-1 text-sm">Ceci décris la caté</div>
          </li>
        </ul>
      </div>
      </div>
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

<style scoped>
.bg-main-color{
  background-color: #710000;
}
</style>
