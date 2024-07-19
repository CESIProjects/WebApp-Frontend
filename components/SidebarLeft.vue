<template>
  <nav
    class="sticky border-gray-200 top-0 flex flex-col h-screen text-xl text-white bg-gradient-to-r bg-gray-200 border-r"
  >
    <!-- bg-gradient-to-l from-blue-600 to-blue-900 -->
    <div class="flex flex-col">
      <div class="flex px-6 py-5 border-b border-gray-300">
        <div class="font-semibold text-gray-700">
          (RE)SSOURCES
          <br />
          RELATIONNELLES
        </div>
      </div>

      <div class="flex flex-col justify-center mx-6 py-2 mt-4">
        <NuxtLink
          to="/"
          class="flex items-center hover:scale-105 hover:bg-gray-500 hover:text-gray-100 text-center transition px-4 py-3 text-gray-600 rounded-lg bg-gray-300 border border-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.7"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Accueil
        </NuxtLink>
      </div>

      <div class="flex flex-col justify-center mx-6 py-2">
        <NuxtLink
          to="/posts"
          class="flex items-center hover:scale-105 hover:bg-gray-500 hover:text-gray-100 text-center transition px-4 py-3 text-gray-600 rounded-lg bg-gray-300 border border-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.7"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
            />
          </svg>
          Mes publications
        </NuxtLink>
      </div>

      <div class="flex flex-col justify-center mx-6 py-2">
        <NuxtLink
          to="/favorites"
          class="flex items-center hover:scale-105 hover:bg-gray-500 hover:text-gray-100 text-center transition px-4 py-3 text-gray-600 rounded-lg bg-gray-300 border border-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>

          Mes favoris
        </NuxtLink>
      </div>

      <div class="flex flex-col justify-center mx-6 py-2">
        <NuxtLink
          to="/contact"
          class="flex items-center hover:scale-105 hover:bg-gray-500 hover:text-gray-100 text-center transition px-4 py-3 text-gray-600 rounded-lg bg-gray-300 border border-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mr-2 text-"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
          Contact
        </NuxtLink>
      </div>
    </div>
    <div class="mx-auto h-full">
      <div class="h-full mx-auto w-[2px]"></div>
    </div>
    <div class="flex w-full border-t border-gray-300">
      <NuxtLink
        :to="'/profile/' + userStore.user.id"
        class="flex items-center justify-start p-3 bg-gray-300 gap-x-2 cursor-pointer text-gray-600 hover:bg-gray-600 hover:text-gray-100 transition truncate w-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <div
          class="truncate w-full capitalize"
          v-if="userStore.user && userStore.user.username"
        >
          {{ userStore.user.username }}
        </div>
      </NuxtLink>

      <div
        class="bg-red-800 flex items-center border-white transition px-5 group cursor-pointer hover:bg-gray-700"
        @click="logout"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="size-6 transition group-hover:scale-110"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
          />
        </svg>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
import { useUserStore } from "@/stores/user.ts";

export default {
  data() {
    return {
      dialogVisible: false,
      createPost: false,

      posts: [],
      categories: [],
      searchQuery: "",
      showForm: false,
      editMode: false,
      formData: {
        name: "",
        email: "",
        password: "",
      },
      postData: {
        visible: false,
        title: "",
        description: "",
        category: "",
      },
      newCategoryName: "",
      modalCategory: false,
    };
  },
  computed: {
    userStore() {
      const userStore = useUserStore();
      return userStore;
    },
    filteredCategories() {
      return this.categories.filter((category) =>
        category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  // watch: {
  //   // Watch for changes in the user object and redirect to /register if user or user.name is not found
  //   user: {
  //     handler(newVal) {
  //       if (!newVal || !newVal.name) {
  //         this.$router.push('/register');
  //       }
  //     },
  //     immediate: true // Trigger the watcher immediately upon component creation
  //   }
  // },

  mounted() {
    this.fetchCategories();
  },
  methods: {
    logout() {
      this.userStore.resetUser();
      this.$router.push("/");
    },
    fetchCategories() {
      axios
        .get("http://localhost:8080/api/posts")
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

      axios
        .post("http://localhost:8080/api/categories", newCategory)
        .then((response) => {
          this.fetchCategories();
          this.modalCategory = false;
          this.newCategoryName = "";
        })
        .catch((error) => {
          console.error("Error creating category:", error);
        });
    },
    deleteCategory() {
      axios
        .delete(`http://localhost:8080/api/categories/${id}`)
        .then(() => {
          this.categories = this.categories.filter((c) => c.id !== id);
          this.fetchCategories();
        })
        .catch((error) => {
          console.error("Error deleting category:", error);
        });
    },
    handleDialogSubmit(formData) {
      // Gérer les données soumises depuis la boîte de dialogue
      console.log("Données soumises:", formData);
      // Réinitialiser la visibilité de la boîte de dialogue
      this.dialogVisible = false;
    },
    async submitForm() {
      try {
        // Obtenir la date de publication actuelle au format ISO 8601
        const publicationDate = new Date().toISOString();

        // Construction de l'objet à envoyer dans la requête POST
        const postData = {
          title: this.postData.title,
          content: this.postData.description,
          publicationDate: publicationDate,
          popular: true, // Vous devez déterminer comment définir cette valeur
          userId: 0, // Vous devez déterminer comment obtenir l'ID de l'utilisateur
          categoryId: 0, // Vous devez déterminer comment obtenir l'ID de la catégorie
        };

        // Effectuer la requête POST avec Axios
        const response = await axios.post(
          "http://localhost:8080/api/posts/post",
          postData
        );

        // Vérifier si la requête a réussi (statut HTTP 2xx)
        if (response.status === 200 || response.status === 201) {
          // Afficher un message de succès ou effectuer d'autres actions nécessaires
          console.log("Publication réussie !");

          // Émettre un événement pour indiquer que la publication est réussie
          this.$emit("post-success");

          // Cacher le dialogue après la soumission
          this.visible = false;
        } else {
          // Si la requête a échoué, afficher un message d'erreur ou effectuer d'autres actions nécessaires
          console.error("Échec de la publication.");
        }
      } catch (error) {
        console.error("Erreur lors de la publication :", error);
      }
    },
  },
};
</script>

<style scoped>
.bg-main-color {
  background-color: #710000;
}

.police {
  font-family: cursive;
}
</style>

<style scoped>
.bg-main-color {
  background-color: #710000;
}
</style>
