<template>
  <div>
    <div class="absolute top-5 left-5 hover:scale-110 transition duration-300">
      <Icon name="material-symbols:arrow-back" size="2.5rem" @click="$router.back()" />
    </div>
    <div
      v-for="postItem in posts"
      :key="postItem.id"
      class="w-11/12 mx-auto relative pt-8"
    >
      <div class="flex justify-between text-lg text-gray-500 my-2">
        <p class="bg-red-500 rounded-full px-4 py-1 text-white">
          {{ postItem.categoryName }}
        </p>
        <p>
          Publié {{ formatDate(postItem.publicationDate) }} par
          <span class="font-bold capitalize">{{ postItem.username }}</span>
        </p>
      </div>
      <img
        src="/test_blog.jpg"
        style="height: 18rem"
        class="bg-auto w-full rounded-3xl mb-4"
      />

      <div class="relative bg-white shadow-md rounded-lg w-full p-4">
        <div class="overflow-hidden mb-4">
          <div
            class="absolute top-8 right-8"
            v-if="userStore.user.id === postItem.userId"
          >
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
                  <div
                    class="group-hover:bg-red-500 group-hover:bg-opacity-20 rounded-full transition duration-300 mr-2 px-1.5 py-1"
                    :class="{
                      'text-red-500': postItem.likedByCurrentUser,
                      'group-hover:text-red-500': !postItem.likedByCurrentUser,
                    }"
                  >
                    <Icon
                      :name="
                        postItem.likedByCurrentUser
                          ? 'material-symbols:favorite'
                          : 'material-symbols:favorite-outline'
                      "
                      size="1.5rem"
                    />
                  </div>
                  <span
                    class="text-lg mt-1 group-hover:text-red-500 transition duration-300"
                    :class="{ 'text-red-500': postItem.likedByCurrentUser }"
                    >{{ postItem.likeCount }}</span
                  >
                </div>
              </div>
              <div class="mr-2 group flex justify-center">
                <div class="flex">
                  <div
                    class="group-hover:bg-blue-500 rounded-full group-hover:text-white transition duration-300 mr-2 px-1.5 py-1"
                  >
                    <Icon name="iconamoon:comment-dots-light" size="1.5rem" />
                  </div>
                  <span class="text-lg mt-1">{{ comments.length }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 border-b-4 border-gray-300 py-4">
        <p class="text-xl mb-2">Ajouter un commentaire</p>
        <textarea
          v-model="newCommentText"
          class="w-full border rounded p-2 mb-2"
        ></textarea>
        <button @click="addComment()" class="bg-blue-500 text-white rounded px-4 py-2">
          Envoyer
        </button>
      </div>
      <div class="bg-white p-4 shadow-md rounded-lg mt-4">
        <div class="flex flex-col space-y-4">
          <div
            v-for="comment in comments"
            :key="comment.id"
            class="flex flex-col space-y-1"
          >
            <span class="text-lg font-bold capitalize">{{ comment.username }}</span>
            <div>{{ comment.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import { fr } from "date-fns/locale";
import { useUserStore } from "@/stores/user";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      posts: [],
      comments: [],
    };
  },
  computed: {
    userStore() {
      return useUserStore();
    },
    route() {
      return useRoute();
    },
  },
  mounted() {
    this.fetchPost();
    this.fetchComments();
  },
  methods: {
    async fetchPost() {
      const config = useRuntimeConfig();

      try {
        const response = await axios.get(
          config.public.localhost + "/api/posts/" + this.route.params.id,
          {
            headers: {
              Authorization: `Bearer ${this.userStore.user.token}`,
            },
          }
        );
        const post = response.data;

        const likesResponse = await axios.get(
          config.public.localhost + "/api/likes/post/" + this.route.params.id
        );
        const likes = likesResponse.data;

        post.likeCount = likes.length;
        post.likedByCurrentUser = likes.includes(this.userStore.user.id);

        this.posts = [post];
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    },
    async fetchComments() {
      const config = useRuntimeConfig();

      try {
        const response = await axios.get(
          config.public.localhost + "/api/comments/post/" + this.route.params.id,
          {
            headers: {
              Authorization: `Bearer ${this.userStore.user.token}`,
            },
          }
        );
        this.comments = response.data;
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    },
    async addLike(isLiked) {
      const config = useRuntimeConfig();

      try {
        if (isLiked) {
          await axios.delete(
            config.public.localhost +
              "/api/likes/delete?userId=" +
              this.userStore.user.id +
              "&postId= " +
              parseInt(this.route.params.id)
          );
        } else {
          await axios.post(
            config.public.localhost +
              "/api/likes/post?userId=" +
              this.userStore.user.id +
              "&postId=" +
              parseInt(this.route.params.id)
          );
        }
        this.fetchPost();
      } catch (error) {
        console.error("Error adding like:", error);
      }
    },
    async addComment() {
      const config = useRuntimeConfig();

      try {
        await axios.post(config.public.localhost + "/api/comments/post", {
          content: this.newCommentText,
          postId: parseInt(this.route.params.id),
          userId: this.userStore.user.id,
        });
        this.newCommentText = "";
        this.fetchComments();
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    },
    formatDate(date) {
      return formatDistanceToNow(new Date(date), { addSuffix: true, locale: fr });
    },
  },
};
</script>
