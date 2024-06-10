<template>
    <div >
        <Login @switch="login = false" v-if="login" />
        <Register @switch="login = true" v-else @redirectToLogin="redirectToLogin" />
    </div>
</template>

<script>
import { useUserStore } from '../stores/user.ts'

export default {
    data() {
        return {
            login: true
        }
    },
    methods: {
        redirectToLogin() {
            this.login = true;
        }
    },
    computed: {
        user() {
            const userStore = useUserStore()
            return userStore.user
        },
    },
}
</script>
