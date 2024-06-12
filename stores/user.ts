import { defineStore } from 'pinia';

interface User {
    isLoggedIn: Boolean;
    role: String;
    token: String;
    username: String;
}

export const useUserStore = defineStore("userStore", {
  state: () => ({
    user: {
      isLoggedIn: false,
      role: "",
      token: null,
      username: "",

    },
  }),
  persist: true,
  actions: {
    resetUser() {
      this.user = {
        isLoggedIn: false,
        role: "",
        token: null,
        username: "",
      };
    },
    setUser(user: any) {
      this.user = user;
    },
  },
});