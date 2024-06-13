<template>
  <div class="max-w-5xl mx-auto p-4 relative">
    <div v-for="postItem in posts" :key="postItem.id" class="bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <!-- Edit Icon -->
      <div class="absolute top-0 right-0 mt-4 mr-4">
        <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
          <!-- Heroicon pencil icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232a3 3 0 114.243 4.243l-9.193 9.193-4.243 1.061 1.061-4.243 9.193-9.193z" />
          </svg>
        </button>
      </div>
      
      <!-- Article Header -->
      <div class="p-6 text-center bg-gray-100">
        <h1 class="text-3xl font-bold text-gray-800">a</h1>
        <p class="text-sm text-gray-500 mt-2">Publié le 12 Mars 2024</p>
        <p class="text-sm text-gray-500">par <span class="font-semibold"><a href="#">b</a></span></p>
      </div>
      
      <!-- Article Content -->
      <div class="bg-gray-100 flex justify-center items-center">
        <div class="p-6 bg-white w-[90%] rounded-md">
          <p class="text-gray-700 leading-relaxed">t</p>
        </div>
      </div>
      
      <!-- Article Footer -->
      <div class="bg-gray-100 p-6 text-center">
        <p class="text-gray-600 text-sm">Catégorie: <span class="font-semibold"><a href="#">c</a></span></p>
        <p class="text-gray-600 text-sm mt-2">Mots-clés: <span class="font-semibold">d</span></p>
        
        <!-- Social Share Module -->
        <div class="mt-4">
          <p class="text-gray-600 text-sm">Partager sur :</p>
          <div class="flex justify-center mt-2">
            <!-- Twitter -->
            <a href="#" class="mr-4 text-blue-500 hover:text-blue-700"><i class="fab fa-twitter-square fa-2x"></i></a>
            <!-- Facebook -->
            <a href="#" class="mr-4 text-blue-600 hover:text-blue-800"><i class="fab fa-facebook-square fa-2x"></i></a>
            <!-- LinkedIn -->
            <a href="#" class="text-blue-700 hover:text-blue-900"><i class="fab fa-linkedin fa-2x"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      posts: []
    };
  },
  computed: {
    userStore() {
      return useUserStore();
    },
    route() {
      return useRoute();
    }
  },
  mounted() {
    this.fetchPost();
    console.log(posts)
  },
  methods: {
    async fetchPost() {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/${this.route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.userStore.user.token}`,
          },
        });
        this.posts = [response.data];
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }
  }
};
</script>
