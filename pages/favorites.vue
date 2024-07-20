<template>
  <div class="min-h-screen bg-gray-100">
    <Navbar :title="'Mes favoris'" :searchBar="true" />
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
      favoritesIds: [],
    };
  },
  async mounted() {
    this.fetchPostsIds();
  },
  computed: {
    userStore() {
      const userStore = useUserStore();
      return userStore;
    },
  },
  methods: {
    fetchPostsIds() {
      const config = useRuntimeConfig();
      axios
        .get(config.public.localhost + "/api/likes/user/" + this.userStore.user.id)
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            this.favoritesIds.push(response.data[i].id.postId);
            this.fetchPostFavorite(this.favoritesIds[i]);
          }
          // this.fetchPostFavorite(this.favoritesIds)
        })
        .catch((error) => {
          console.error("Error fetching customers:", error);
        });
    },
    fetchPostFavorite(postId) {
      const config = useRuntimeConfig();
      axios
        .get(config.public.localhost + "/api/posts/" + postId)
        .then((response) => {
          this.posts.push(response.data);
        })
        .catch((error) => {
          console.error("Error fetching customers:", error);
        });
    },
  },
};
</script>
