<script setup lang="ts">
import { useUserStore } from "../stores/user";

const config = useRuntimeConfig();

const userStore = useUserStore();
const user = computed(() => userStore.user);

console.log(config.public.localhost);
</script>

<template>
  <div>
    <div>
      <NuxtLayout v-if="user.isLoggedIn">
        <NuxtPage />
      </NuxtLayout>
      <Authentication v-if="!user.isLoggedIn" />
    </div>
  </div>
</template>
