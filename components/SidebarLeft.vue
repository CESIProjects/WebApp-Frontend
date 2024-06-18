<template>
  <nav
    class="sticky border-r-2 border-gray-200 top-0 flex flex-col  h-screen text-xl text-white bg-gradient-to-r bg-gray-500">
    <!-- bg-gradient-to-l from-blue-600 to-blue-900 -->
    <div class="flex flex-col">
      <div class="flex px-6 py-5 bg-gray-900">
        <div class="font-semibold">
          (RE)SSOURCES
          <br />
          RELATIONNELLES
        </div>
      </div>
      <div class="border-t-2 border-gray-200"></div>
      <div class="h-8 bg-gray-200  mx-auto w-[2px]"></div>

      <div class="flex flex-col justify-center mx-6">
        <NuxtLink to="/"
          class="flex items-center hover:scale-105 hover:bg-gray-900 text-center transition border-2 px-4 py-3 text-gray-300 rounded-lg bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7"
            stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Accueil
        </NuxtLink>
      </div>
      <div class="h-8 bg-gray-200  mx-auto w-[2px]"></div>

      <div class="flex flex-col  text-xl">
        <NuxtLink to="/posts"
          class="flex items-center hover:scale-105 hover:bg-gray-900 text-center transition border-2 px-4 py-3 text-gray-300 mx-6 rounded-lg bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7"
            stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
          </svg>
          Mes publications
        </NuxtLink>
          <div class="h-8 bg-gray-200  mx-auto w-[2px]"></div>
        <NuxtLink to="/resource"
          class="flex items-center hover:scale-105 hover:bg-gray-900 text-center transition border-2 px-4 py-3 text-gray-300 mx-6 rounded-lg bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" class="w-6 h-6 mr-2"><path fill="white" d="M10.788 3.102c.495-1.003 1.926-1.003 2.421 0l2.358 4.778l5.273.766c1.107.16 1.549 1.522.748 2.303l-.905.882a6.5 6.5 0 0 0-1.517-.616l1.157-1.128l-5.05-.734a1.35 1.35 0 0 1-1.016-.739L11.998 4.04L9.74 8.614a1.35 1.35 0 0 1-1.016.739l-5.05.734l3.654 3.562c.318.31.463.757.388 1.195l-.862 5.029l4.149-2.181c.015.542.098 1.067.238 1.569l-3.958 2.081c-.99.52-2.148-.32-1.96-1.423l.901-5.251l-3.815-3.72c-.801-.78-.359-2.141.748-2.302L8.43 7.88zM23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5 .5l.001 2.503a.5.5 0 1 1-1 0V18h-2.505a.5.5 0 0 1 0-1H17v-2.501a.5.5 0 0 1 1 0v2.5h2.497a.5.5 0 0 1 0 1z"/></svg>          
          Mes favoris
        </NuxtLink>

      </div>
      
    </div>
    <div class="mx-auto h-full">
      <div class="h-full bg-gray-200 mx-auto w-[2px]"></div>
    </div>
    <div class="flex w-full border-t-2 border-white">
      <NuxtLink
        :to="'/profile/' + userStore.user.id"
        class="flex items-center justify-start p-3 bg-gray-800 gap-x-2 cursor-pointer text-white hover:bg-gray-900 transition truncate w-full">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        <div class="truncate w-full capitalize" v-if="userStore.user && userStore.user.username">
          {{ userStore.user.username }}
        </div>
      </NuxtLink>

      <div
        class="bg-red-800 flex items-center border-l-2 border-white transition px-5 group cursor-pointer hover:bg-gray-900"
        @click="logout">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          class="size-6 transition group-hover:scale-110">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
        </svg>
      </div>
    </div>
  </nav>
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
        .get('http://localhost:8080/api/posts')
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
