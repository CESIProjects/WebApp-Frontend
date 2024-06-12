<template>
    
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
