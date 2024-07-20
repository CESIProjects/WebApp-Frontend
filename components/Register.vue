<script setup lang="ts">
import { reactive, ref } from 'vue';
import Toast from '@/components/pop-ups/Toast.vue';
import axios from 'axios';
import { useRuntimeConfig } from '#imports';

// Define emits
const emit = defineEmits<{
  (e: 'redirectToLogin'): void;
}>();

// Define form data interface
interface FormData {
  username: string;
  email: string;
  role: string;
  password: string;
  repeatPassword: string;
}

// Reactive form data
const formData = reactive<FormData>({
  username: '',
  email: '',
  role: 'ROLE_USER',
  password: '',
  repeatPassword: ''
});

// Reactive state variables
const errorMessage = ref<string>('');
const showToast = ref<boolean>(false);

// Register function
const register = async () => {
  if (!formData.username || !formData.email || !formData.password) {
    errorMessage.value = "Veuillez remplir tous les champs.";
    return;
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errorMessage.value = "Veuillez saisir une adresse e-mail valide";
    setTimeout(() => {
      errorMessage.value = "";
    }, 3500);
    return;
  }

  // Check if passwords match
  if (formData.password !== formData.repeatPassword) {
    errorMessage.value = "Les mots de passe ne correspondent pas.";
    setTimeout(() => {
      errorMessage.value = "";
    }, 3500);
    return;
  }

  // Check password length
  if (formData.password.length < 8) {
    errorMessage.value = "Le mot de passe doit contenir au moins 8 caractères.";
    setTimeout(() => {
      errorMessage.value = "";
    }, 3500);
    return;
  }

  errorMessage.value = "";

  // Initialize runtime config
  const config = useRuntimeConfig();
  const apiUrl = `${config.public.localhost}/api/auth/signup`;

  try {
    // Directly send registration request
    const response = await axios.post(apiUrl, formData);
    console.log('User created successfully. Response:', response.data);

    showToast.value = true;
    setTimeout(() => {
      showToast.value = false;
      emit('redirectToLogin');
    }, 1000);
  } catch (error: any) {
    console.error('Error creating user:', error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      errorMessage.value = error.response.data.message || "Une erreur est survenue lors de la création du compte.";
    } else {
      errorMessage.value = "Une erreur est survenue lors de la connexion au serveur.";
    }
  }
};
</script>

<template>
  <div
    class="h-screen w-full bg-[url('https://mrwallpaper.com/images/hd/arc-de-triomphe-france-1ikitad7j4ix10a5.jpg')] bg-auto bg-no-repeat bg-center"
  >
    <Toast v-if="showToast" />
    <div class="flex justify-center items-center h-full bg-gray-800/50">
      <div
        class="max-w-xl mx-auto flex flex-col justify-center bg-gray-100 rounded-lg p-8"
      >
        <div class="text-center -mt-4">
          <h2 class="text-3xl font-bold text-gray-800">Création du compte</h2>
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
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="username" class="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <div class="mt-1">
                    <input
                      id="username"
                      name="username"
                      v-model="formData.username"
                      type="username"
                      required
                      class="appearance-none bg-white text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="appearance-none bg-white text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div>
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
                      class="appearance-none bg-white text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="repeatPassword"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Confirmez mot de passe
                  </label>
                  <div class="mt-1">
                    <input
                      id="repeatPassword"
                      name="repeatPassword"
                      v-model="formData.repeatPassword"
                      type="password"
                      required
                      class="appearance-none bg-white text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div
                  type="submit"
                  class="w-full border-2 cursor-pointer hover:bg-white bg-gray-200 transition border-y-gray-500 border-l-blue-400 border-r-red-400 flex justify-center py-2 px-4 rounded-md text-lg text-gray-800 font-bold"
                  @click="register()"
                >
                  Créer un compte
                </div>
                <p class="mt-4 text-sm text-gray-700 text-center">
                  Vous avez déja un compte ? Cliquez
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
