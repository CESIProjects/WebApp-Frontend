import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null
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
    }
  }
});
