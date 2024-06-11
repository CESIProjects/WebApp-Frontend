<template>
  <div
    class="h-screen w-full bg-[url('https://mrwallpaper.com/images/hd/arc-de-triomphe-france-1ikitad7j4ix10a5.jpg')] bg-auto bg-no-repeat bg-center"
  >
  <Toast v-if="showToast" />
    <div class="flex justify-center items-center h-full bg-gray-800/50">
      <div
        class="max-w-xl mx-auto flex flex-col justify-center bg-gray-100 rounded-lg p-8"
      >
        <div class="text-center -mt-4">
          <h2 class="text-3xl font-bold text-gray-800">
            Création du compte
          </h2>
        </div>

        <div class="">
          <div>
            <div class="mt-6 relative">
              <div class="relative flex justify-center text-center text-md">
                <p v-if="errorMessage" class="text-red-500">
                  {{ errorMessage }}
                </p>
              </div>
            </div>
          </div>

          <div class="mt-2">
            <div class="space-y-8">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div class="mt-1">
                    <input
                      id="username"
                      name="username"
                      v-model="formData.username"
                      type="username"
                      required
                      class="appearance-none bg-white text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700"
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
                      class="appearance-none bg-white text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
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
                      class="appearance-none bg-white text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="repeatPassword"
                    class="block text-sm font-medium text-gray-700"
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
                      class="appearance-none bg-white text-black block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div>
                <div
                  type="submit"
                  class="w-full border-2 cursor-pointer hover:bg-white bg-gray-200 transition border-y-gray-500 border-l-blue-400 border-r-red-400 flex justify-center py-2 px-4 rounded-md text-lg text-gray-800 font-bold"
                  @click="register()"
                >
                  Créer un compte
                </div>
                <p class="mt-4 text-sm text-gray-700 text-center">
                  Vous avez déja un compte ? Cliquez
                  <button
                    @click="$emit('switch', true)"
                    class="font-medium text-red-400 hover:text-blue-500"
                  >
                    ici
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Toast from '@/components/pop-ups/Toast.vue'
  import axios from 'axios'
  
  export default {
    components: {
      Toast,
    },
    layout: 'auth',
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
        showToast: false,
      }
    },
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
  
            this.showToast = true
            setTimeout(() => {
              this.showToast = false
              this.$emit('redirectToLogin') 
            }, 1000)
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