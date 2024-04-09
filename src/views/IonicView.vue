<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title
          class="bg-gradient-to-r from-blue-700 via-white to-red-700 text-gray-800 font-bold py-4 text-center uppercase"
        >
          (RE) Sources Relationelles
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-page :fullscreen="true">
      <div id="container" class="p-8">
        <h1 class="text-2xl font-semibold text-center pb-10">
          Découvrez l'actualité avec l'application officielle de ressources
          relationelles
        </h1>
        <ion-img
          src="https://cdn-icons-png.flaticon.com/512/2490/2490505.png"
          class="w-32 mx-auto"
        />
        <ion-title size="large" class="text-center text-3xl py-8">
          Connexion au compte
        </ion-title>
        <ion-input
          label="Email"
          label-placement="floating"
          :counter="true"
          maxlength="30"
        ></ion-input>

        <ion-input
          id="custom-input"
          label="Mot de passe"
          label-placement="floating"
          :counter="true"
          maxlength="23"
        ></ion-input>
        <div class="flex justify-center">
          <ion-button>
            Se connecter
          </ion-button>
        </div>
        <div class="flex flex-col items-end">
          <p class="text-right pt-10">Vous n'avez pas de compte ?</p>
          <ion-button fill="outline">S'inscrire</ion-button>
        </div>
      </div>
    </ion-page>
    <ion-tabs class="absolute bottom-0 right-0 left-0">
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" class="flex justify-between px-8">
        <ion-tab-button
          tab="home"
          href="/home"
          class="flex flex-col items-center"
        >
          <ion-icon :icon="playCircle" />
          <ion-label>Accueil</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="radio"
          href="/radio"
          class="flex flex-col items-center"
        >
          <ion-icon :icon="radio" />
          <ion-label>Publications</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="library"
          href="/library"
          class="flex flex-col items-center"
        >
          <ion-icon :icon="library" />
          <ion-label>Catalogue</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="search"
          href="/search"
          class="flex flex-col items-center"
        >
          <ion-icon :icon="search" />
          <ion-label>Deconnexion</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { playCircle, radio, library, search } from 'ionicons/icons'

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
      errorMessage: '',
      playCircle,
      radio,
      library,
      search,
    }
  },
}
</script>
