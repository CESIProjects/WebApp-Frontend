import { defineStore } from 'pinia';

interface User {
  token: string | null;
  isLoggedIn: boolean;
  username: string;
  email: string;
}

export const useUserStore = defineStore('userStore', {
  state: (): { user: User } => ({
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
        token: null,
        isLoggedIn: false,
        username: '',
        email: '',
      };
      if (process.client) {
        localStorage.removeItem('user');
      }
    },
    setUser(user: User) {
      this.user = user;
    },
  },
});
