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
      token: null,
      isLoggedIn: false,
      username: '',
      email: '',
    },
  }),
  persist: true,
  actions: {
    saveUserToStorage() {
      if (process.client) {
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    },
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
      this.saveUserToStorage();
    }
  }
});
