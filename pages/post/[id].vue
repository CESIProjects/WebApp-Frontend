<script>
import axios from 'axios';
import { usePostStore } from '@/stores/post.ts';
import { useUserStore } from '@/stores/user.ts';

export default {
  data() {
    return {
      post: {
        title: '',
      },
    };
  },
  computed: {
    postStore() {
      return usePostStore();
    },
    userStore() {
      const userStore = useUserStore();
      return userStore;
    },
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    fetchPost() {
      axios
        .get('http://localhost:8080/api/post', {
          headers: {
            Authorization: `Bearer ${this.userStore.user.token}`,
          },
        })
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          console.error('Error fetching post:', error);
        });
    },
  },
};
</script>

<template>
  <div class="max-w-5xl mx-auto p-4 relative">
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Edit Icon -->
      <div class="absolute top-0 right-0 mt-4 mr-4">
        <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
          <!-- Heroicon pencil icon -->
          <!-- FUTURE NEED : introduce a verification, if the connected user is the author, he can see this -->
          <svg xmlns="http://www.w3.org/2000/svg" class="mt-3 mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232a3 3 0 114.243 4.243l-9.193 9.193-4.243 1.061 1.061-4.243 9.193-9.193z" />
          </svg>
        </button>
      </div>
      
      <!-- Article Header -->
      <div class="p-6 text-center bg-gray-100">
        <h1 class="text-3xl font-bold text-gray-800">Titre du post</h1>
        <p class="text-sm text-gray-500 mt-2">Publié le 12 Mars 2024</p>
        <p class="text-sm text-gray-500">par <span class="font-semibold"><a href="#">Greg</a></span></p>
      </div>
      
      <!-- Article Content -->
      <div class="bg-gray-100 flex justify-center items-center">
        <div class="p-6 bg-white w-[90%] rounded-md">
          <p class="text-gray-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum, nulla et ultricies volutpat, augue dui tincidunt libero, a suscipit turpis sem non nisl. Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed laoreet diam nec tincidunt scelerisque.</p>
          
          <p class="text-gray-700 mt-4 leading-relaxed">Curabitur vehicula justo sit amet libero elementum, at vestibulum erat lacinia. Mauris at turpis a elit suscipit malesuada. Nullam non libero nec nisi tempor tristique. Phasellus finibus lectus non nisl convallis, id posuere ipsum feugiat. Integer euismod velit sit amet sapien gravida, sit amet malesuada eros cursus.</p>
          
          <p class="text-gray-700 mt-4 leading-relaxed">Vivamus consectetur leo non eros cursus, id tempus magna congue. Aliquam erat volutpat. Donec vehicula lacus nec neque consectetur, non faucibus arcu dapibus. In hac habitasse platea dictumst.</p>
        </div>
      </div>
      
      <!-- Article Footer -->
      <div class="bg-gray-100 p-6 text-center">
        <p class="text-gray-600 text-sm">Catégorie: <span class="font-semibold"><a href="#">Technologie</a></span></p>
        <p class="text-gray-600 text-sm mt-2">Mots-clés: <span class="font-semibold">Innovation, Développement, Design</span></p>
        
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