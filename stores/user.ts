import { defineStore } from 'pinia';

interface User {
  token: string | null;
  isLoggedIn: boolean;
  role: String;
  username: string;
  email: string;
  id: string;
}

export const useUserStore = defineStore('userStore', {
  state: (): { user: User } => ({
    user: {
      isLoggedIn: false,
      role: "",
      token: null,
      username: "",
      email: '',
      id: ''
    },
  }),
  persist: true,
  actions: {
    resetUser() {
      this.user = {
        token: null,
        isLoggedIn: false,
        role: '',
        username: '',
        email: '',
        id: ''
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
