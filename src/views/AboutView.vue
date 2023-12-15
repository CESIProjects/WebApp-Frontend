<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Welcome, {{ user.name }}!</p>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user';

export default {
  computed: {
    user() {
      const userStore = useUserStore();
      return userStore.user;
    },
  },
};
</script>
