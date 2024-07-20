<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Popup de création d'une publication -->
    <div
      class="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      :class="{ 'opacity-100': dialogVisible, 'opacity-0 hidden': !dialogVisible }">
      <div
        class="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
        <div
          class="flex items-center px-8 py-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900 bg-white rounded-t-md">
          Création d'une publication
        </div>
        <div
          class="relative bg-gray-100 p-8 font-sans space-y-4 text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
          <input type="text" v-model="postData.title" placeholder="Titre"
            class="bg-white py-2 px-4 focus:outline-none border border-gray-200" />
          <textarea type="description" v-model="postData.description" placeholder="Description"
            class="bg-white py-2 px-4 focus:outline-none w-full h-40 max-h-40 border border-gray-200" />
          <select id="category" v-model="postData.category" required
            class="text-gray-700 bg-white py-2 px-4 focus:outline-none border border-gray-200">
            <label for="category" class="block text-sm font-medium text-gray-700">
              Choix de la catégorie
            </label>
            <option v-for="category in categories" :key="category.id" class="text-gray-700" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-x-4 p-4 shrink-0 text-blue-gray-500 bg-white">
          <button @click="dialogVisible = false"
            class="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center bg-red-400/10 hover:bg-red-700/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Annuler
          </button>
          <button @click="submitForm"
            class="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Confirmer
          </button>
        </div>
      </div>
    </div>


    <Navbar :title="'Mes publications'" :searchBar="true" />
    <div class="mx-auto text-black bg-gray-100 border-t">
      <!-- Boutons de création de contenus -->
      <div class="flex items-center justify-center p-8">
        <div @click="modalCategory = true"
          class="w-full max-w-72 mr-6 flex items-center hover:scale-105 hover:bg-gray-300 text-center transition border-2 border-gray-400 px-4 py-3 text-gray-500 hover:text-gray-600 rounded-lg cursor-pointer bg-white">
          <div class="text-lg text-left font-normal border-gray-200 w-full h-full mr-2">
            Ajouter une categorie
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </div>

        <div @click="dialogVisible = true"
          class="w-full max-w-72 flex items-center hover:scale-105 hover:bg-gray-700 text-center transition border px-4 py-3 text-gray-200 hover:text-gray-300 rounded-lg cursor-pointer bg-gray-500">
          <div class="text-lg text-left font-normal border-gray-200 w-full h-full mr-2">
            Créer une publication
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke-width="2"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>

      <div class="grid grid-cols-2 mx-auto gap-x-8 px-8">
        <Postcard v-for="post in posts" :key="post.id" :post="post" :userStore="userStore" />
      </div>
    </div>
    <ModalCategory v-if="modalCategory" @modalClosed="loadCategories()"/>

  </div>
</template>

<script>
import CategoryService from '../services/CategoryServices';
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      posts: [],
      categories: [],
      postData: {
        title: "",
        description: "",
        category: "",
      },
      dialogVisible: false,
      modalCategory: false,
    };
  },
  mounted() {
    this.fetchPosts();
    this.loadCategories()
  },
  computed: {
    userStore() {
      const userStore = useUserStore();
      return userStore;
    },
  },
  methods: {

    async loadCategories() {
      this.modalCategory = false
      try {
        this.categories = await CategoryService.fetchCategories();
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    

    fetchPosts() {
      const config = useRuntimeConfig();
      axios
        .get(config.public.localhost + "/api/posts/user/" + this.userStore.user.id)
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.error("Error fetching customers:", error);
        });
    },
    async submitForm() {
      try {
        const publicationDate = new Date().toISOString();

        const creationData = {
          title: this.postData.title,
          content: this.postData.description,
          publicationDate: publicationDate,
          popular: true,
          userId: this.userStore.user.id,
          categoryId: this.postData.category,
        };

        const config = useRuntimeConfig();

        const response = await axios.post(
          config.public.localhost + "/api/posts/post",
          creationData
        );

        if (response.status === 200 || response.status === 201) {
          console.log("Publication réussie !");
          this.dialogVisible = false;
          this.fetchPosts();
        } else {
          console.error("Échec de la publication.");
        }
      } catch (error) {
        console.error("Erreur lors de la publication :", error);
      }
    },
  },
};
</script>
