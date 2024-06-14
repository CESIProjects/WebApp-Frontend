<script>
import axios from 'axios'
import { useUserStore } from '@/stores/user.ts'

// Créer une instance d'axios personnalisée
const api = axios.create({
  baseURL: 'http://localhost:8080/api/auth'
})

// Ajouter un interceptor pour inclure le token JWT dans l'en-tête Authorization
api.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.user.token
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  return config
}, error => {
  return Promise.reject(error)
})

export default {
  data() {
    return {
      formData: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      },
      postsUser: [],
      getUserById: [],
      errorMessage: '',
      successMessage: '',
      showChangePassword: false,
    };
  },
  computed: {
    userStore() {
      const userStore = useUserStore()
      return userStore
    },
    postCount() {
      return this.postsUser.length;
    }
  },
  mounted() {
    this.fetchPosts(); 
    this.fetchUsername();   
  },
  methods: {
    fetchPosts() {
        api.get(`http://localhost:8080/api/posts/user/${this.$route.params.id}`)
            .then(response => {
                this.postsUser = response.data;
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    },
    fetchUsername() {
        api.get(`http://localhost:8080/api/auth/getUserById/{userId}?userId=${this.$route.params.id}`)
            .then(response => {
                this.getUserById = response.data;
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    },
    updatePassword() {
      if (!this.formData.oldPassword || !this.formData.newPassword || !this.formData.confirmPassword) {
        this.errorMessage = 'Veuillez remplir tous les champs.'
        this.clearMessagesAfterDelay()
        return
      }

      if (this.formData.newPassword !== this.formData.confirmPassword) {
        this.errorMessage = 'Les nouveaux mots de passe ne correspondent pas.'
        this.clearMessagesAfterDelay()
        return
      }

      this.errorMessage = ''
      this.successMessage = ''

      api
        .post(`/updatePassword/${this.userStore.user.id}`, {
          oldPassword: this.formData.oldPassword,
          newPassword: this.formData.newPassword
        })
        .then((response) => {
          this.successMessage = response.data.message
          this.clearMessagesAfterDelay()
          this.formData.oldPassword = ''
          this.formData.newPassword = ''
          this.formData.confirmPassword = ''
        })
        .catch((error) => {
          console.error('Error updating password:', error)

          if (
            error.response &&
            error.response.status === 400 &&
            error.response.data.message
          ) {
            this.errorMessage = error.response.data.message
          } else {
            this.errorMessage = 'Erreur lors de la mise à jour du mot de passe.'
          }
          this.clearMessagesAfterDelay()
        })
    },
    clearMessagesAfterDelay() {
      setTimeout(() => {
        this.errorMessage = ''
        this.successMessage = ''
      }, 2000)
    },
    checkPermission() {
        const userIdFromUrl = parseInt(this.$route.params.id);
        const loggedInUserId = this.userStore.user.id;
        if (!isNaN(userIdFromUrl) && loggedInUserId && userIdFromUrl === loggedInUserId) {
            this.showChangePassword = true;
        } else {
            this.showChangePassword = false;
        }
    }
  },
  created() {
    this.checkPermission();
  }
}
</script>

<template>
  <div class="mx-auto p-4">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="p-6 bg-gray-100">
        <div class="flex items-center">
          <!-- <img src="" alt="Profil Picture" class="w-16 h-16 rounded-full mr-4"> -->
          <div>
            <h1 class="text-xl font-bold text-gray-800">Profil : {{ getUserById.username }}</h1>
            <p  v-if="showChangePassword" class="text-sm text-gray-500">Email : {{ userStore.user.email }}</p>
            <div v-if="showChangePassword">
              <p v-if="userStore.user.role === 'ROLE_USER'" class="text-sm text-gray-500">Rôle : User</p>
              <p v-if="userStore.user.role === 'ROLE_MOD'" class="text-sm text-gray-500">Rôle : Modérateur</p>
              <p v-if="userStore.user.role === 'ROLE_ADMIN'" class="text-sm text-gray-500">Rôle : Administrateur</p>
              <p v-if="userStore.user.role === 'ROLE_SUPERADMIN'" class="text-sm text-gray-500">Rôle : Super Administrateur</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="showChangePassword" class="p-6">
        <div class="mb-4">
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Modifier le mot de passe</h2>
          <form @submit.prevent="updatePassword">
            <div class="grid grid-cols-3">
              <input v-model="formData.oldPassword" type="password" placeholder="Ancien mot de passe" class="border rounded-md px-4 py-2 mb-2 md:mr-2">
              <input v-model="formData.newPassword" type="password" placeholder="Nouveau mot de passe" class="border rounded-md px-4 py-2 mb-2 md:mr-2">
              <input v-model="formData.confirmPassword" type="password" placeholder="Confirmer le mot de passe" class="border rounded-md px-4 py-2 mb-2 md:mr-2">
              <button type="submit" class="bg-blue-500 col-span-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Changer</button>
            </div>
          </form>
          <p v-if="errorMessage" class="text-red-500 text-center">{{ errorMessage }}</p>
          <p v-if="successMessage" class="text-green-500 text-center">{{ successMessage }}</p>
        </div>
        <!-- <div>
          <h2 class="text-lg font-semibold text-gray-800 mb-2">Autres informations</h2>
          <p class="text-gray-600">Date de création du compte : 10 Avril 2022</p>
        </div> -->
      </div>
      <div class="p-6 bg-gray-50">
        <h1 class="text-2xl pb-6">Publication(s) {{ postCount }} :  </h1>
        <div v-for="post in postsUser" :key="post.id" class="mb-10 grid grid-cols-3">
            <div>
                <img
                    src="/test_blog.jpg"
                    class="bg-auto rounded-3xl h-52"
                />
                <div class="mt-2">
                    <div class="text-2xl text-center font-bold">{{ post.title }}</div>
                    <div class="mt-2 font-semibold text-gray-500 text-center text-md">
                        {{ post.content }}
                    </div>
                    <!-- <div class="py-1 mb-2 flex justify-between">
                        <div class="mr-2 group">
                            <div class="flex">
                                <div
                                class="group-hover:bg-red-500 rounded-full group-hover:text-white transition duration-300 mr-2 px-1.5 py-1"
                                >
                                    <Icon name="icon-park-outline:like" size="1.5rem" />
                                </div>
                                <span class="text-lg mt-1">12</span>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
