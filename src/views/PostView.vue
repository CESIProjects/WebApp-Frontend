<template>
  <div class="about">
    <h1>Page de publication</h1>
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
