<template>
  <div v-for="postItem in posts" :key="postItem.id" class="max-w-5xl mx-auto">
    <div class="flex justify-between text-lg text-gray-500 my-2">
      <p class="bg-red-500 rounded-full px-4 py-1 text-white">{{postItem.categoryName}}</p>
      <p>Publié {{ formatDate(postItem.publicationDate) }} par <span class="font-bold capitalize">{{postItem.username}}</span></p>
    </div>
    <img src="/test_blog.jpg" style="height: 18rem;" class="bg-auto w-full rounded-3xl mb-4">

    <div class="relative bg-white shadow-md rounded-lg w-full p-4">
      <div class="overflow-hidden mb-4">
        <div class="absolute top-8 right-8" v-if="userStore.user.id === postItem.userId">
          <button class="text-gray-500 hover:text-gray-700 focus:outline-none">
            <Icon name="material-symbols:edit-square-outline" size="2rem" /> 
          </button>
        </div>
        
        <div class="p-4 text-center">
          <h1 class="text-2xl font-bold text-gray-800">{{ postItem.title }}</h1>
        </div>

        <div class="flex justify-center items-center">
          <div class="p-6 bg-gray-100 w-full rounded-lg">
            <p class="text-gray-700 leading-relaxed">{{ postItem.content }}</p>
          </div>
        </div>
        <div class="flex justify-center items-center border-t border-black mt-4">
          <div class="pt-6 w-full grid grid-cols-2 gap-4 items-center">
            <div class="mr-2 group flex justify-center">
              <div class="flex group" @click="addLike(postItem.likedByCurrentUser)">
                <div class="group-hover:bg-red-500 group-hover:bg-opacity-20 rounded-full transition duration-300 mr-2 px-1.5 py-1"
                    :class="{'text-red-500': postItem.likedByCurrentUser, 'group-hover:text-red-500': !postItem.likedByCurrentUser}">
                  <Icon :name="postItem.likedByCurrentUser ? 'material-symbols:favorite' : 'material-symbols:favorite-outline'" size="1.5rem" />
                </div>
                <span class="text-lg mt-1 group-hover:text-red-500 transition duration-300" :class="{'text-red-500': postItem.likedByCurrentUser}">{{ postItem.likeCount }}</span>
              </div>
            </div>
            <div class="mr-2 group flex justify-center">
                <div class="flex"><div class="group-hover:bg-blue-500 rounded-full group-hover:text-white transition duration-300 mr-2 px-1.5 py-1"><Icon name="iconamoon:comment-dots-light" size="1.5rem" /></div><span class="text-lg mt-1">12</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <p>Ajouter un commentaire</p>
      <textarea name="content" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
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
  },
  methods: {
    async fetchPost() {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/${this.route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.userStore.user.token}`,
          },
        });
        const post = response.data;

        const likesResponse = await axios.get(`http://localhost:8080/api/likes/post/${this.route.params.id}`);
        const likes = likesResponse.data;

        post.likeCount = likes.length;
        post.likedByCurrentUser = likes.includes(this.userStore.user.id);

        this.posts = [post];
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    },
    async addLike(isLiked) {
      try {
        if (isLiked) {
          await axios.delete(`http://localhost:8080/api/likes/delete?userId=${this.userStore.user.id}&postId=${parseInt(this.route.params.id)}`);
        } else {
          await axios.post(`http://localhost:8080/api/likes/post?userId=${this.userStore.user.id}&postId=${parseInt(this.route.params.id)}`);
        }
        this.fetchPost()
      } catch (error) {
        console.error('Error adding like:', error);
      }
    },
    formatDate(date) {
      return formatDistanceToNow(new Date(date), { addSuffix: true, locale: fr });
    }
  }
};
</script>
