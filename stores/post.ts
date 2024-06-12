import { defineStore } from 'pinia';

interface Post {
    title: String;
}

export const usePostStore = defineStore("postStore", {
  state: () => ({
    post: {
      title: "",
    },
  }),
  persist: true,
  actions: {
    resetPost() {
      this.post = {
        title: "",
      };
    },
    setPost(post: any) {
      this.post = post;
    },
  },
});