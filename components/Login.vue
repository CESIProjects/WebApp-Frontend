<template>
  <div
    class="h-screen w-full bg-[url('https://mrwallpaper.com/images/hd/arc-de-triomphe-france-1ikitad7j4ix10a5.jpg')] bg-auto bg-no-repeat bg-center"
  >
    <div class="flex justify-center items-center h-full bg-gray-800/50">
      <div
        class="max-w-xl mx-auto flex flex-col justify-center bg-gray-100 rounded-lg p-8"
      >
        <div class="text-center -mt-4">
          <h2 class="text-3xl font-bold text-gray-800">Connexion au compte</h2>
        </div>

        <div class="">
          <div>
            <div class="mt-6 relative">
              <div class="relative flex justify-center text-center text-md">
                <p v-if="errorMessage" class="text-red-500">
                  {{ errorMessage }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-2">
            <div class="space-y-8">
              <div>
                <label for="username" class="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <div class="mt-1">
                  <input
                    id="username"
                    name="username"
                    v-model="formData.username"
                    autocomplete="off"
                    type="username"
                    required
                    class="appearance-none block w-full px-3 bg-white text-black py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div class="space-y-1 pb-8">
                <label for="password" class="block text-sm font-medium text-gray-700">
                  Mot de passe
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    v-model="formData.password"
                    type="password"
                    required
                    class="appearance-none block w-full px-3 py-2 bg-white text-black border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div
                  type="submit"
                  class="w-full border-2 cursor-pointer hover:bg-white bg-gray-200 transition border-y-gray-500 border-l-blue-400 border-r-red-400 flex justify-center py-2 px-4 rounded-md text-lg text-gray-800 font-bold"
                  @click="login()"
                >
                  Se connecter
                </div>
                <p class="mt-4 text-sm text-gray-700 text-center">
                  Ou créer un nouveau compte
                  <button
                    @click="$emit('switch', true)"
                    class="font-medium text-red-400 hover:text-blue-500"
                  >
                    ici
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useUserStore } from "../stores/user.ts";

export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      errorMessage: "",
    };
  },
  methods: {
    login() {
      if (!this.formData.username || !this.formData.password) {
        this.errorMessage = "Veuillez remplir tous les champs.";
        return;
      }

      this.errorMessage = "";

      const config = useRuntimeConfig();
      axios
        .post(config.public.localhost + "/api/auth/signin", {
          username: this.formData.username,
          password: this.formData.password,
        })
        .then((response) => {
          console.log("User login successfully. ID:", response);

          const userStore = useUserStore();
          userStore.setUser({
            username: this.formData.username,
            token: response.data.accessToken,
            role: response.data.role,
            email: response.data.email,
            id: response.data.id,
            isLoggedIn: true,
          });

          console.log("User connected:", userStore.user);
        })
        .catch((error) => {
          console.error("Error login user:", error);

          if (
            error.response &&
            error.response.status === 400 &&
            error.response.data.message
          ) {
            this.errorMessage = error.response.data.message;
          } else {
            this.errorMessage = "Cette adresse email est déjà utilisée";
          }
        });
    },
  },
};
</script>
