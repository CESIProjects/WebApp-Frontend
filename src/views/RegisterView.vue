<template>
  <div class="min-h-screen bg-white">
    <div class="flex-1 flex flex-col justify-center">
      <div class="mx-auto w-full h-auto max-w-sm lg:w-96">
        <div class="text-center">
          <h2 class="mt-3 text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
         <p class="mt-2 text-xl ">
            Or login to your account
            <RouterLink class="font-medium hover:text-blue-900" to="/login">here</RouterLink>
          </p>
        </div>

        <div class="mt-6">
          <div>
            <div class="mt-6 relative">
              <div class="relative flex justify-center text-center text-md">
                <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
              </div>
            </div>
          </div>

          <div class="mt-2">
            <div class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <div class="mt-1">
                  <input
                    id="name"
                    name="name"
                    v-model="formData.name"
                    type="name"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                  >
                </div>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div class="mt-1">
                  <input
                    id="email"
                    name="email"
                    v-model="formData.email"
                    type="email"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                  >
                </div>
              </div>

              <div class="space-y-1">
                <label for="password" class="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div class="mt-1">
                  <input
                    id="password"
                    name="password"
                    v-model="formData.password"
                    type="password"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                  >
                </div>
              </div>

              
              <div class="space-y-1">
                <label for="repeatPassword" class="block text-sm font-medium text-gray-700">
                  Repeat Password
                </label>
                <div class="mt-1">
                  <input
                    id="repeatPassword"
                    name="repeatPassword"
                    v-model="formData.repeatPassword"
                    type="password"
                    required
                    class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                  >
                </div>
              </div>

              <div>
                <button type="submit" class="w-full bg-purple-500 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2" @click="register()">
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '../stores/user';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
      },
      errorMessage: '',
    };
  },
  methods: {
    register() {
      if (!this.formData.name || !this.formData.email || !this.formData.password) {
        this.errorMessage = 'Veuillez remplir tous les champs.';
        return;
      }

      // Vérifier la validité de l'adresse e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.formData.email)) {
        this.errorMessage = "Veuillez saisir une adresse e-mail valide";
        setTimeout(() => {
          this.errorMessage = "";
        }, 3500); // masquer le message après 3,5 secondes
        return;
      }

      // Vérifier que les mots de passe correspondent
      if (this.formData.password !== this.formData.repeatPassword) {
        this.errorMessage = 'Les mots de passe ne correspondent pas.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 3500);
        return;
      }

      // Vérifier que le mot de passe respecte les critères de sécurité
      if (this.formData.password.length < 8) {
        this.errorMessage = "Le mot de passe doit contenir au moins 8 caractères.";
        setTimeout(() => {
          this.errorMessage = "";
        }, 3500);
        return;
      }
 
      this.errorMessage = '';

      axios.post('http://localhost:8080/api/users', this.formData)
        .then(response => {
          console.log('User created successfully. ID:', response.data);

          const userStore = useUserStore();
          userStore.setUser({
            name: this.formData.name,
            email: this.formData.email,
          });

          setTimeout(() => {
            this.$router.push('/');
          }, 100);
        })
        .catch(error => {
          console.error('Error creating user:', error);

          if (error.response && error.response.status === 400 && error.response.data.message) {
            this.errorMessage = error.response.data.message;
          } 
          else {
            this.errorMessage = 'Cette adresse email est déjà utilisée';
          }
        });
    },
  },
};
</script>
