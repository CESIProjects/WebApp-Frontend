<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar :title="'Accueil des publications'" :searchBar="true" />
    <div class="mx-auto text-black bg-gray-100 border-t">
      <div class="grid grid-cols-2 mx-auto gap-x-8 p-8">
        <Postcard v-for="post in posts" :key="post.id" :post="post" :userStore="userStore" />
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
