<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <nav class="h-screen col-span-2 flex flex-col justify-between bg-main-color py-4 px-6 text-white text-xl sticky top-0">
        <div class="flex flex-col space-y-8">
            <div class="flex">
              <img src="/Gouvernement_N.png" class="w-12 h-12 mt-1 mr-3 rounded-full" alt="">
              <div>
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
            <button class="rounded-lg bg-white font-semibold text-black py-3 text-lg">+ Ajouter une publication</button>
        </div>
        <div class="flex flex-col">
          <div class="flex my-5"><img src="/svg/settings.svg" class="mr-2">Parametre</div>
          
          <div class="py-1 mb-2 flex rounded-full hover:bg-gray-800">
              <img src="/Gouvernement_N.png" class="w-12 h-12 mt-1 mr-3 rounded-full" alt=""><div>Compte TEST<br><span class="text-gray-200 text-lg">Utilisateur</span></div>
          </div>
        </div>
    </nav>
    <div class="col-span-7 p-8 m-4">
      <RouterView />
    </div>
    <div class="p-8 m-4 col-span-3 text-xl">
      <div class="sticky top-10">
      <div class="relative w-full">
        <input type="text" class="w-full bg-main-color placeholder:text-black py-3 pl-10 pr-4 rounded-3xl focus:outline-none" placeholder="Rechercher">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src="/svg/search.svg" class="w-5 h-5" alt="">
        </div>
      </div>
      <div class="rounded-3xl bg-main-color mt-4 py-4 px-6">
        <div class="font-bold">Catégorie :</div>
        <ul class="flex flex-col space-y-4 my-4">
          <li>
            <div class="font-semibold">Test</div>
            <div class="ml-4 mt-1 text-sm">Ceci décris la caté</div>
          </li>
          <li class="border-t border-gray-800 pt-3">
            <div class="font-semibold">Test</div>
            <div class="ml-4 mt-1 text-sm">Ceci décris la caté</div>
          </li>
          <li class="border-t border-gray-800 pt-3">
            <div class="font-semibold">Test</div>
            <div class="ml-4 mt-1 text-sm">Ceci décris la caté</div>
          </li>
          <li class="border-t border-gray-800 pt-3">
            <div class="font-semibold">Test</div>
            <div class="ml-4 mt-1 text-sm">Ceci décris la caté</div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-main-color{
  background-color: #D4AF37;
}
</style>