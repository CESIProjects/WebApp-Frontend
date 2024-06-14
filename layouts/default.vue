<template>
  <div class="grid grid-cols-12 police">
    <SidebarLeft />
    <div class="col-span-10 p-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 relative">
      <slot/>
      <!-- <div class="absolute right-0 top-4 border-l-2 border-y-2 rounded-l-xl bg-white">
              <div class="p-6 flex justify-center items-center">
              <div class="text-3xl">Bienvenue sur le réseau ministériel</div>
              <img src="./assets/mascotte-JO.png" class="w-52 transform " />
              </div>
          </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '@/stores/user.ts'
import SidebarLeft from '~/components/SidebarLeft.vue'

export default {
  components: { SidebarLeft },
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
      selectedCategory: null,
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
    this.fetchPosts()
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
    async fetchPosts() {
      try {
        const response = await axios.get('http://localhost:8080/api/posts');
        this.posts = response.data; // Assign fetched posts to data variable
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    },
    async fetchPostsByCategory(categoryId) {
      this.selectedCategory = categoryId;
      try {
        console.log('test')
        const response = await axios.get(`http://localhost:8080/api/posts?categoryId=${categoryId}`);
        console.log(response.data)
        this.posts = response.data;
        console.log(this.posts)
      } catch (error) {
        console.error('Error fetching posts by category:', error);
      }
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
          popular: true,
          userId: 0,
          categoryId: 0,
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
