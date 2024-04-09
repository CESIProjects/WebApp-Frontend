<template>
  <div class="min-h-screen bg-white">
    <div class="flex-1 flex flex-col justify-center">
      <div class="mx-auto w-full h-auto max-w-sm lg:w-96">
        <div class="text-center">
          <h2 class="mt-3 text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p class="mt-2 text-xl">
            Or create a new account
            <RouterLink class="font-medium hover:text-blue-900" to="/register"
              >here</RouterLink
            >
          </p>
        </div>

        <div class="mt-6">
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
            <div class="space-y-4">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                >
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
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                >
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
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="w-full bg-purple-500 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                  @click="login()"
                >
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
        email: "",
        password: "",
      },
      errorMessage: "",
    };
  },
};
</script>
