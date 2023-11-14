<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

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
        <div class="py-1 mb-2 flex rounded-full hover:bg-gray-800">
            <img class="mr-3 h-2/3 rounded-xl" src="http://fakeimg.pl/64x64/ff0000/000"><span class="mt-1">Compte TEST</span>
        </div>
    </nav>
    <div class="rounded-lg bg-gray-100 col-span-7 p-8 m-4">
      <RouterView />
    </div>
  </div>
</template>
