<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Popup de création d'une publication -->
    <div
      class="fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      :class="{ 'opacity-100': dialogVisible, 'opacity-0 hidden': !dialogVisible }"
    >
      <div
        class="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
      >
        <div
          class="flex items-center px-8 py-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900 bg-white rounded-t-md"
        >
          Création d'une publication
        </div>
        <div
          class="relative bg-gray-100 p-8 font-sans space-y-4 text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500"
        >
          <input
            type="text"
            v-model="postData.title"
            placeholder="Titre"
            class="bg-white py-2 px-4 focus:outline-none border border-gray-200"
          />
          <textarea
            type="description"
            v-model="postData.description"
            placeholder="Description"
            class="bg-white py-2 px-4 focus:outline-none w-full h-40 max-h-40 border border-gray-200"
          />
          <select
            id="category"
            v-model="postData.category"
            required
            class="text-gray-700 bg-white py-2 px-4 focus:outline-none border border-gray-200"
          >
            <label for="category" class="block text-sm font-medium text-gray-700">
              Choix de la catégorie
            </label>
            <option
              v-for="category in categories"
              :key="category.id"
              class="text-gray-700"
              :value="category.id"
            >
              {{ category.name }}
            </option>
          </select>
        </div>
        <div
          class="flex flex-wrap items-center justify-center gap-x-4 p-4 shrink-0 text-blue-gray-500 bg-white"
        >
          <button
            @click="dialogVisible = false"
            class="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center bg-red-400/10 hover:bg-red-700/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Annuler
          </button>
          <button
            @click="submitForm"
            class="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Confirmer
          </button>
        </div>
      </div>
    </div>

    <div class="">
      <div
        v-if="modalCategory"
        class="fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div
          class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <button
            class="absolute top-3 right-3 text-white text-xl z-50"
            @click="modalCategory = !modalCategory"
          >
            <Icon name="ep:close-bold" color="black" />
          </button>
          <form @submit.prevent="createCategory" class="flex flex-col space-y-4">
            <div class="text-xl">Création d'une catégorie :</div>
            <input
              type="text"
              v-model="newCategoryName"
              placeholder="Entrer une catégorie"
              class="bg-gray-200 py-2 px-4 focus:outline-none"
            />
            <div class="flex justify-end space-x-4">
              <button
                class="bg-gray-500 py-2 px-4 font-semibold text-white"
                @click="modalCategory = !modalCategory"
              >
                Annuler
              </button>
              <button
                type="submit"
                class="bg-green-500 py-2 px-4 font-semibold text-white"
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!-- Navbar -->
    <div class="flex items-center justify-between py-4 h-24 px-8 bg-white">
      <div class="font-semibold text-3xl text-gray-800">Mes publications</div>
      <div class="flex items-center">
        <input
          placeholder="Rechercher par nom"
          class="border-2 border-gray-200 rounded-md px-4 py-3 bg-gray-100 w-72"
        />
      </div>
    </div>

    <!-- Page content -->

    <div class="mx-auto text-black bg-gray-100 border-t">
      <div class="flex items-center justify-center p-8">
        <div
          @click="modalCategory = true"
          class="w-full max-w-72 mr-6 flex items-center hover:scale-105 hover:bg-gray-300 text-center transition border-2 border-gray-400 px-4 py-3 text-gray-500 hover:text-gray-600 rounded-lg cursor-pointer bg-white"
        >
          <div class="text-lg text-left font-normal border-gray-200 w-full h-full mr-2">
            Ajouter une categorie
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>

        <div
          @click="dialogVisible = true"
          class="w-full max-w-72 flex items-center hover:scale-105 hover:bg-gray-700 text-center transition border px-4 py-3 text-gray-200 hover:text-gray-300 rounded-lg cursor-pointer bg-gray-500"
        >
          <div class="text-lg text-left font-normal border-gray-200 w-full h-full mr-2">
            Créer une publication
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
      <div class="grid grid-cols-2 mx-auto gap-x-8 px-8">
        <div
          class="mb-10 border border-gray-500 bg-white rounded-lg"
          v-for="post in posts"
          :key="post.id"
        >
          <NuxtLink :to="{ name: 'post-id', params: { id: post.id } }" class="">
            <img
              src="/test_blog.jpg"
              style="height: 14rem"
              class="bg-auto w-full rounded-t-lg"
            />
            <div class="pl-3">
              <div class="flex justify-between">
                <div class="text-2xl font-bold py-3 truncate">{{ post.title }}</div>
                <div class="mt-4 mr-3">
                  <span
                    class="bg-orange-100 border border-orange-400 rounded-lg text-black font-semibold px-4 pb-2 pt-1"
                    >{{ post.categoryName }}</span
                  >
                </div>
              </div>

              <div class="my-3 font-normal text-gray-600 text-lg truncate pr-1">
                {{ post.content }}
              </div>
              <div class="py-1 mb-2 flex justify-between">
                <div class="flex items-center gap-x-2 group text-gray-800 text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="w-8 h-8 bg-gray-400 p-1 rounded-full"
                  >
                    <path
                      fill="white"
                      d="m14.856 15.5l1.5-1.5H6.252a2.25 2.25 0 0 0-2.25 2.25v.577c0 .892.32 1.756.9 2.435c1.395 1.634 3.442 2.531 6.097 2.707q-.007-.274.064-.561l.23-.924c-2.373-.12-4.108-.858-5.251-2.196a2.25 2.25 0 0 1-.54-1.461v-.578a.75.75 0 0 1 .75-.749zM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m7.1 9.165l-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"
                    />
                  </svg>
                  <NuxtLink
                    class="group-hover:underline capitalize font-normal"
                    :to="'/profile/' + post.userId"
                  >
                    <span v-if="post.username !== userStore.user.username">{{
                      post.username
                    }}</span>
                    <span v-else>Moi</span>
                  </NuxtLink>
                </div>
                <div class="mr-2 group"></div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      newCategoryName: "",
      modalCategory: false,
    };
  },
  mounted() {
    this.fetchPosts();
    this.fetchCategories();
  },
  computed: {
    userStore() {
      const userStore = useUserStore();
      return userStore;
    },
  },
  methods: {
    fetchCategories() {
      const config = useRuntimeConfig();
      axios
        .get(config.public.localhost + "/api/categories")
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    createCategory() {
      const newCategory = {
        name: this.newCategoryName,
      };

      const config = useRuntimeConfig();
      axios
        .post(config.public.localhost + "/api/categories/post", newCategory)
        .then((response) => {
          console.log("Category created successfully:", response.data);
          this.fetchCategories();
          this.modalCategory = false;
          this.newCategoryName = "";
        })
        .catch((error) => {
          console.error("Error creating category:", error.response.data);
          // Ajoutez ici une gestion spécifique des erreurs pour afficher à l'utilisateur
          // ou pour déboguer plus en détail.
        });
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
