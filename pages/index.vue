<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Navbar -->
    <div
      class="flex items-center justify-between border-gray-800 py-4 h-24 px-8 bg-white"
    >
      <div class="font-semibold text-3xl text-gray-800">Accueil des publications</div>
      <div class="flex items-center">
        <input
          placeholder="Rechercher par nom"
          class="border-2 border-gray-200 rounded-md px-4 py-3 bg-gray-100 w-72"
        />
      </div>
    </div>

    <!-- Page content -->

    <div class="mx-auto text-black bg-gray-100 border-t">
      <!-- <div v-for="category in categories" :key="category.id" class="flex overflow-x-auto gap-x-4 ">
        <div class="bg-blue-400 text-lg px-4 py-1 rounded-xl"> 
          {{ category.name }}
        </div>
      </div> -->
      <div class="grid grid-cols-2 mx-auto gap-x-8 p-8">
        <div
          class="mb-10 border border-gray-500 bg-white rounded-lg"
          v-for="post in posts"
          :key="post.id"
        >
          <NuxtLink :to="{ name: 'post-id', params: { id: post.id } }" class="">
            <img
              src="/test_blog.jpg"
              style="height: 14rem"
              class="bg-auto w-full rounded-t-lg"
            />
            <div class="pl-3">
              <div class="flex justify-between">
                <div class="text-2xl font-bold py-3 truncate">{{ post.title }}</div>
                <div class="mt-4 mr-3">
                  <span
                    class="bg-orange-100 border border-orange-400 rounded-lg text-black font-semibold px-4 pb-2 pt-1"
                    >{{ post.categoryName }}</span
                  >
                </div>
              </div>

              <div class="my-3 font-normal text-gray-600 text-lg truncate pr-1">
                {{ post.content }}
              </div>
              <div class="py-1 mb-2 flex justify-between">
                <div class="flex items-center gap-x-2 group text-gray-800 text-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    class="w-8 h-8 bg-gray-400 p-1 rounded-full"
                  >
                    <path
                      fill="white"
                      d="m14.856 15.5l1.5-1.5H6.252a2.25 2.25 0 0 0-2.25 2.25v.577c0 .892.32 1.756.9 2.435c1.395 1.634 3.442 2.531 6.097 2.707q-.007-.274.064-.561l.23-.924c-2.373-.12-4.108-.858-5.251-2.196a2.25 2.25 0 0 1-.54-1.461v-.578a.75.75 0 0 1 .75-.749zM12 2.005a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m7.1 9.165l-5.903 5.902a2.7 2.7 0 0 0-.706 1.247l-.458 1.831a1.087 1.087 0 0 0 1.319 1.318l1.83-.457a2.7 2.7 0 0 0 1.248-.707l5.902-5.902A2.286 2.286 0 0 0 19.1 12.67"
                    />
                  </svg>
                  <NuxtLink
                    class="group-hover:underline capitalize font-normal"
                    :to="'/profile/' + post.userId"
                  >
                    <span v-if="post.username !== userStore.user.username">{{
                      post.username
                    }}</span>
                    <span v-else>Moi</span>
                  </NuxtLink>
                </div>
                <div class="mr-2 group"></div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    userStore() {
      const userStore = useUserStore();
      return userStore;
    },
  },
  methods: {
    fetchPosts() {
      const config = useRuntimeConfig();
      axios
        .get(config.public.localhost + "/api/posts")
        .then((response) => {
          this.posts = response.data;
        })
        .catch((error) => {
          console.error("Error fetching customers:", error);
        });
    },
  },
};
</script>
