<template>
  <div class="h-screen w-full bg-auto bg-no-repeat bg-center">
    <Toast />
    <div class="h-full w-full grid grid-cols-5">
      <div
        class="h-full w-full bg-gradient-to-r from-blue-800 via-blue-800 to-gray-100/30"
      ></div>

      <div
        class="col-span-3 h-full flex flex-col justify-center bg-gray-100/30"
      >
        <div class="">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2490/2490505.png"
              class="w-32 mx-auto"
            />
            <div class="text-center">
              <h2 class="mt-3 text-3xl font-extrabold">
                Création de compte
              </h2>
              <p class="mt-2 text-xl text-gray-800 font-semibold">
                Ou connexion à un compte existant
                <RouterLink
                  class="font-medium text-blue-700 hover:text-red-700"
                  to="/login"
                >
                  ici
                </RouterLink>
              </p>
            </div>
          </div>

          <div class="">
            <div>
              <div class="mt-4 relative">
                <div class="relative flex justify-center text-center text-md">
                  <p v-if="errorMessage" class="text-red-500">
                    {{ errorMessage }}
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-2">
              <div class="sm:grid space-y-3 sm:space-y-0 gap-6">
                <div>
                  <label
                    for="name"
                    class="block text-sm text-gray-800 font-semibold"
                  >
                    Username
                  </label>
                  <div class="mt-1">
                    <input
                      id="name"
                      name="name"
                      v-model="formData.username"
                      type="name"
                      required
                      class="appearance-none block w-full px-3 py-2 border-4 border-gray-900 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm text-gray-800 font-semibold"
                  >
                    Email
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="appearance-none block w-full px-3 py-2 border-4 border-gray-900 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm text-gray-800 font-semibold"
                  >
                    Mot de passe
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      name="password"
                      v-model="formData.password"
                      type="password"
                      required
                      class="appearance-none block w-full px-3 py-2 border-4 border-gray-900 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1">
                  <label
                    for="repeatPassword"
                    class="block text-sm font-medium text-gray-800 font-semibold"
                  >
                    Confirmez mot de passe
                  </label>
                  <div class="mt-1">
                    <input
                      id="repeatPassword"
                      name="repeatPassword"
                      v-model="formData.repeatPassword"
                      type="password"
                      required
                      class="appearance-none block w-full px-3 py-2 border-4 border-gray-900 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div class="pt-4 col-span-2">
                  <button
                    type="submit"
                    class="w-full bg-gradient-to-r from-blue-700 via-white to-red-700 flex justify-center py-2 px-4 border-4 border-gray-900 rounded-md shadow-sm text-lg text-gray-900 font-bold"
                    @click="register()"
                  >
                    Créer un compte
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="h-full w-full bg-gradient-to-l from-red-800 via-red-800 to-gray-100/30"
      ></div>
    </div>
  </div>
</template>

<script>
import Toast from "@/components/pop-ups/Toast.vue";
import axios from 'axios'

export default {
  components: {
    Toast,
  },
  data() {
    return {
      formData: {
        username: '',
        email: '',
        role: 'ROLE_USER',
        password: '',
        repeatPassword: '',
      },
      errorMessage: '',
    }
  },
  layout: 'empty',
  methods: {
    register() {
      if (
        !this.formData.username ||
        !this.formData.email ||
        !this.formData.password
      ) {
        this.errorMessage = 'Veuillez remplir tous les champs.'
        return
      }

      // Vérifier la validité de l'adresse e-mail
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.formData.email)) {
        this.errorMessage = 'Veuillez saisir une adresse e-mail valide'
        setTimeout(() => {
          this.errorMessage = ''
        }, 3500) // masquer le message après 3,5 secondes
        return
      }

      // Vérifier que les mots de passe correspondent
      if (this.formData.password !== this.formData.repeatPassword) {
        this.errorMessage = 'Les mots de passe ne correspondent pas.'
        setTimeout(() => {
          this.errorMessage = ''
        }, 3500)
        return
      }

      // Vérifier que le mot de passe respecte les critères de sécurité
      if (this.formData.password.length < 8) {
        this.errorMessage =
          'Le mot de passe doit contenir au moins 8 caractères.'
        setTimeout(() => {
          this.errorMessage = ''
        }, 3500)
        return
      }

      this.errorMessage = ''

      axios
        .post('http://localhost:8080/api/auth/signup', this.formData)
        .then((response) => {
          console.log('User created successfully. ID:', response.data)
          setTimeout(() => {
            this.$router.push('/login')
          }, 100)
        })
        .catch((error) => {
          console.error('Error creating user:', error)

          if (
            error.response &&
            error.response.status === 400 &&
            error.response.data.message
          ) {
            this.errorMessage = error.response.data.message
          } else {
            this.errorMessage = 'Cette adresse email est déjà utilisée'
          }
        })
    },
  },
}
</script>
