import { defineStore } from 'pinia';

interface User {
    token: String;
    isLoggedIn: Boolean;
    username: String;
    email: String;
}

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {
      token: null,
      isLoggedIn: 0,
      username: '',
      email: '',
    },
  }),
  actions: {
    loadUserFromStorage() {
      if (process.client && localStorage.getItem('user')) {
        this.user = JSON.parse(localStorage.getItem('user'));
      }
    },
    saveUserToStorage() {
      if (process.client) {
        localStorage.setItem('user', JSON.stringify(this.user));
      }
    },
    resetUser() {
      this.user = null;
      if (process.client) {
        localStorage.removeItem('user');
      }
    },
    setUser(user) {
      this.user = user;
      this.saveUserToStorage();
    }
  }
});