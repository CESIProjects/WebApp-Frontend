<template>
  <div class="grid grid-cols-12 police">
    <nav
      class="sticky border-r-2 border-gray-200 top-0 flex flex-col justify-between h-screen col-span-2 text-xl text-white bg-gradient-to-r bg-blue-900"
    >
      <!-- bg-gradient-to-l from-blue-600 to-blue-900 -->
      <div class="flex flex-col pt-4">
        <div class="flex mx-6">
          <div class="font-semibold">
            (RE) SOURCES
            <br />
            RELATIONNELLES
          </div>
        </div>
        <div class="border-t-2 border-gray-200 my-5 mx-6"></div>
        <div class="flex flex-col justify-center gap-y-5 mx-6">
          <NuxtLink
            to="/"
            class="flex items-center hover:scale-105 hover:bg-gray-900 transition border-2 px-4 py-3 text-gray-100"
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
        <div class="flex flex-col mb-5 mt-6 text-lg">
          <NuxtLink
            to="/posts"
            class="group flex items-center justify-between gap-x-2 bg-blue-400 text-blue-900 border-blue-300 hover:bg-gray-900 hover:text-blue-400 font-semibold p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            Publications
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/documents"
            class="group flex items-center justify-between bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-900 hover:text-gray-200 font-semibold p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
            Documents
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
              />
            </svg>
          </NuxtLink>
          <NuxtLink
            to="/resource"
            class="group flex items-center justify-between bg-red-400 text-red-900 border-red-300 font-bold p-3 hover:bg-gray-900 hover:text-red-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
              />
            </svg>
            Catalogue
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.7"
              stroke="currentColor"
              class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
              />
            </svg>
          </NuxtLink>
          <div
            @click="dialogVisible = true"
            class="group mx-6 p-3 mt-6 hover:bg-gray-200 border-2 rounded-lg bg-gray-900 hover:cursor-pointer hover:border-gray-900 border-orange-200 transition hover:scale-105 flex justify-between items-center hover:text-black text-gray-100"
          >
            <div
              class="text-lg text-left font-normal border-r-2 border-gray-200 w-full mr-2"
            >
              Publier
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
      </div>
      <div class="flex w-full mt-5 border-t-2 border-white">
        <NuxtLink
            to="/profile/1"
            class="flex items-center justify-start p-3 bg-blue-800 gap-x-2 cursor-pointer text-white hover:bg-blue-700 transition truncate w-full"
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
            <div class="truncate w-full" v-if="userStore.user && userStore.user.username">
              {{ userStore.user.username }}
            </div>
        </NuxtLink>

        <div class="bg-red-800 flex items-center border-l-2 border-white transition px-5 group cursor-pointer hover:bg-red-900" @click="logout">
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
    <div
      class="col-span-7 p-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 relative"
    >
      <slot />
      <!-- <div class="absolute right-0 top-4 border-l-2 border-y-2 rounded-l-xl bg-white">
              <div class="p-6 flex justify-center items-center">
              <div class="text-3xl">Bienvenue sur le réseau ministériel</div>
              <img src="./assets/mascotte-JO.png" class="w-52 transform " />
              </div>
          </div> -->
    </div>

    <div
      class="col-span-3 px-8 border-l-2 border-gray-700 text-xl bg-gradient-to-r bg-red-700"
    >
      <div class="">
        <div
          v-if="modalCategory"
          class="fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
          id="modal-id"
        >
          <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
          <button
            class="absolute top-3 right-3 text-white text-xl z-50"
            @click="modalCategory = !modalCategory"
          >
            <i class="pi pi-times"></i>
          </button>
          <div
            class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
          >
            <form
              @submit.prevent="createCategory"
              class="flex flex-col space-y-4"
            >
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
        <div
          v-if="dialogVisible"
          class="fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
          id="modal-id"
        >
          <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
          <button
            class="absolute top-3 right-3 text-white text-xl z-50"
            @click="dialogVisible = !dialogVisible"
          >
            <i class="pi pi-times"></i>
          </button>
          <div
            class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
          >
            <form @submit.prevent="submitForm" class="flex flex-col space-y-4">
              <div class="text-xl">Création d'une publication :</div>
              <input
                type="text"
                v-model="postData.title"
                placeholder="Titre"
                class="bg-gray-200 py-2 px-4 focus:outline-none"
              />
              <textarea
                type="description"
                v-model="postData.description"
                placeholder="Description"
                class="bg-gray-200 py-2 px-4 focus:outline-none w-full h-40 max-h-40"
              />
              <select
                id="category"
                v-model="postData.category"
                required
                class="text-gray-700 bg-gray-200 py-2 px-4 focus:outline-none"
              >
                <option class="text-gray-400" value="">
                  Choisir une catégorie
                </option>
                <option class="text-gray-700" value="cat1">Catégorie 1</option>
                <option class="text-gray-700" value="cat2">Catégorie 2</option>
              </select>
              <div class="flex justify-end space-x-4">
                <button
                  class="bg-gray-500 py-2 px-4 font-semibold text-white"
                  @click="dialogVisible = false"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  @click="submitForm"
                  class="bg-green-500 py-2 px-4 font-semibold text-white"
                >
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-span-9">
          <div class="w-10/12 mx-auto px-8">
            <div class="mb-10" v-for="(post, index) in posts" :key="index">
              <img
                src="~/assets/test_blog.jpg"
                style="height: 18rem;"
                class="bg-auto w-full rounded-3xl"
              />
              <div class="my-4">
                <span
                  class="bg-red-500 rounded-full text-white font-semibold px-4 py-1"
                >
                  Catégorie
                </span>
              </div>
              <div class="text-4xl font-bold">{{ post.title }}</div>
              <div class="my-3 font-semibold text-gray-500 text-lg">
                {{ post.content }}
              </div>
              <div class="py-1 mb-2 flex justify-between">
                <div class="flex">
                  <img
                    src="~/assets/Gouvernement_N.png"
                    class="w-8 h-8 mt-1 mr-3 rounded-full border-2"
                    alt=""
                  />
                  <div class="pt-1">Compte TEST</div>
                </div>
                <div class="mr-2 cursor-pointer group">
                  <div class="flex">
                    <div
                      class="group-hover:bg-red-500 group-hover:bg-opacity-50 transition rounded-full p-2 mr-2"
                    >
                      <img src="~/assets/svg/like_post.svg" />
                    </div>
                    <span class="mt-1">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-span-3 text-xl">
          <div
            class="sticky top-10 bg-red-700 text-white rounded-xl p-4 mr-4 mt-4"
          >
            <div class="relative w-full text-black">
              <input
                type="text"
                class="w-full py-3 pl-10 pr-4 placeholder:text-black rounded-xl border-2 focus:outline-none"
                placeholder="Rechercher"
                v-model="searchQuery"
              />
              <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
              >
                <span class="pi pi-search"></span>
              </div>
            </div>
            <div class="py-4 mt-4 rounded-3xl">
              <div class="flex justify-between border-b pb-2">
                <div class="font-bold">Catégorie :</div>
                <button
                  class="bg-green-500 py-1 px-2.5 rounded-full hover:scale-110 transition"
                  @click="modalCategory = !modalCategory"
                >
                  <i class="pi pi-plus" style="font-size: 1rem;"></i>
                </button>
              </div>
              <ul class="flex flex-col space-y-4 my-4">
                <li v-for="category in filteredCategories" :key="category.id">
                  <div class="font-semibold flex justify-between">
                    {{ category.name }}
                    <button
                      class="hover:bg-red-500 rounded-full py-1 px-2 -mt-1"
                      @click="deleteCategory(category.id)"
                    >
                      <i class="pi pi-times"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '@/stores/user.ts'

export default {
  data() {
    return {
      dialogVisible: false,
      createPost: false,

      posts: [],
      categories: [],
      searchQuery: '',
      showForm: false,
      editMode: false,
      formData: {
        name: '',
        email: '',
        password: '',
      },
      postData: {
        visible: false,
        title: '',
        description: '',
        category: '',
      },
      newCategoryName: '',
      modalCategory: false,
    }
  },
  computed: {
    userStore() {
      const userStore = useUserStore()
      return userStore
    },
    filteredCategories() {
      return this.categories.filter((category) =>
        category.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
      )
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
    this.fetchCategories()
  },
  methods: {
    logout() {
      this.userStore.resetUser()
      this.$router.push('/')
    },
    fetchCategories() {
      axios
        .get('http://localhost:8080/api/categories')
        .then((response) => {
          this.categories = response.data
        })
        .catch((error) => {
          console.error('Error fetching categories:', error)
        })
    },
    createCategory() {
      const newCategory = {
        name: this.newCategoryName,
      }

      axios
        .post('http://localhost:8080/api/categories', newCategory)
        .then((response) => {
          this.fetchCategories()
          this.modalCategory = false
          this.newCategoryName = ''
        })
        .catch((error) => {
          console.error('Error creating category:', error)
        })
    },
    deleteCategory() {
      axios
        .delete(`http://localhost:8080/api/categories/${id}`)
        .then(() => {
          this.categories = this.categories.filter((c) => c.id !== id)
          this.fetchCategories()
        })
        .catch((error) => {
          console.error('Error deleting category:', error)
        })
    },
    handleDialogSubmit(formData) {
      // Gérer les données soumises depuis la boîte de dialogue
      console.log('Données soumises:', formData)
      // Réinitialiser la visibilité de la boîte de dialogue
      this.dialogVisible = false
    },
    async submitForm() {
      try {
        // Obtenir la date de publication actuelle au format ISO 8601
        const publicationDate = new Date().toISOString()

        // Construction de l'objet à envoyer dans la requête POST
        const postData = {
          title: this.postData.title,
          content: this.postData.description,
          publicationDate: publicationDate,
          popular: true, // Vous devez déterminer comment définir cette valeur
          userId: 0, // Vous devez déterminer comment obtenir l'ID de l'utilisateur
          categoryId: 0, // Vous devez déterminer comment obtenir l'ID de la catégorie
        }

        // Effectuer la requête POST avec Axios
        const response = await axios.post(
          'http://localhost:8080/api/posts/post',
          postData,
        )

        // Vérifier si la requête a réussi (statut HTTP 2xx)
        if (response.status === 200 || response.status === 201) {
          // Afficher un message de succès ou effectuer d'autres actions nécessaires
          console.log('Publication réussie !')

          // Émettre un événement pour indiquer que la publication est réussie
          this.$emit('post-success')

          // Cacher le dialogue après la soumission
          this.visible = false
        } else {
          // Si la requête a échoué, afficher un message d'erreur ou effectuer d'autres actions nécessaires
          console.error('Échec de la publication.')
        }
      } catch (error) {
        console.error('Erreur lors de la publication :', error)
      }
    },
  },
}
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
