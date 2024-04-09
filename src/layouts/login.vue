<template>
    <div
      class="h-screen w-full bg-[url('https://mrwallpaper.com/images/hd/arc-de-triomphe-france-1ikitad7j4ix10a5.jpg')] bg-auto bg-no-repeat bg-center"
    >
      <div class="h-full bg-gray-800/50 p-8">
        <div class="h-full max-w-xl mx-auto flex flex-col justify-center ">
          <div class="text-center">
            <h2 class="mt-3 text-3xl font-extrabold text-gray-200">
              Connexion au compte
            </h2>
           <p class="mt-2 text-xl text-gray-200">
              Ou créer un nouveau compte
              <RouterLink class="font-medium text-red-400 hover:text-blue-500" to="/register">ici</RouterLink>
            </p>
          </div>
  
          <div class="mt-6">
            <div>
              <div class="mt-6 relative">
                <div class="relative flex justify-center text-center text-md">
                  <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
                </div>
              </div>
            </div>
  
            <div class="mt-2">
              <div class="space-y-4">
  
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div class="mt-1">
                    <input
                      id="email"
                      name="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    >
                  </div>
                </div>
  
                <div class="space-y-1">
                  <label for="password" class="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      name="password"
                      v-model="formData.password"
                      type="password"
                      required
                      class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm"
                    >
                  </div>
                </div>
  
                <div>
                  <button type="submit" class="w-full bg-gradient-to-r from-blue-700 via-white to-red-700 flex justify-center border-gray-900 py-2 px-4 rounded-md border-4 text-lg text-gray-800 font-bold " @click="login()">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          email: '',
          password: '',
        },
        errorMessage: '',
      };
    },
  };
  </script>
  