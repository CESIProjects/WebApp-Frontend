<script>
import axios from 'axios';
import { useUserStore } from '@/stores/user.ts';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  computed: {
    userStore() {
      const userStore = useUserStore();
      return userStore;
    },
  },
  mounted() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      axios
        .get('http://localhost:8080/api/user', {
          headers: {
            Authorization: `Bearer ${this.userStore.user.token}`,
          },
        })
        .then((response) => {
          this.user = response.data;
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
        });
    },
  },
};
</script>

<template>
  <div class="max-w-3xl mx-auto p-4">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Profile Header -->
      <div class="p-6 bg-gray-100">
        <div class="flex items-center">
          <!-- Profile Image -->
          <img src="" alt="Profil Picture" class="w-16 h-16 rounded-full mr-4">

          <!-- Profile Info -->
          <div>
            <h1 class="text-xl font-bold text-gray-800">Nom d'utilisateur</h1>
            <p class="text-sm text-gray-500">Email : email@example.com</p>
            <p class="text-sm text-gray-500">Rôle : Administrateur</p>
          </div>
        </div>
      </div>
      
      <!-- Profile Content -->
      <div class="p-6">
        <!-- Change Password -->
        <div class="mb-4">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Modifier le mot de passe</h2>
          <form>
            <div class="flex flex-col md:flex-row md:items-center">
              <input type="password" placeholder="Nouveau mot de passe" class="border rounded-md px-4 py-2 mb-2 md:mr-2">
              <input type="password" placeholder="Confirmer le mot de passe" class="border rounded-md px-4 py-2 mb-2 md:mr-2">
              <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Changer</button>
            </div>
          </form>
        </div>

        <!-- Posts Count -->
        <div class="mb-4">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Nombre de posts créés</h2>
          <p class="text-gray-600">23</p>
        </div>

        <!-- Other Information -->
        <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Autres informations</h2>
          <p class="text-gray-600">Date de création du compte : 10 Avril 2022</p>
          <!-- Add more information as needed -->
        </div>
      </div>
    </div>
  </div>
</template>