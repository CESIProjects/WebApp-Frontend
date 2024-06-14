<template>
    <div>
        <div class="w-10/12 mx-auto text-black">
            <Categories />
            <div class="mb-10" v-for="post in posts" :key="post.id">
                <NuxtLink :to="{ name: 'post-id', params: { id: post.id } }">
                    <img src="/test_blog.jpg" style="height: 18rem;" class="bg-auto w-full rounded-3xl">
                    <div class="my-4"><span class="bg-red-500 rounded-full text-black font-semibold px-4 py-1">Catégorie</span></div>
                    <div class="text-4xl font-bold" >{{post.title}}</div>
                    <div class="my-3 font-semibold text-gray-500 text-lg">{{post.content}}</div>
                    <div class="py-1 mb-2 flex justify-between">
                        <NuxtLink :to="{ name: 'profile-id', params: { id: post.userId } }" class="flex mt-1 z-20 group">
                            <img src="/Gouvernement_N.png" class="w-8 h-8 mt-1 mr-3 rounded-full border-2" alt=""><div class="pt-1 group-hover:underline">Compte TEST</div>
                        </NuxtLink>
                        <div class="mr-2 group">
                            <div class="flex"><div class="group-hover:bg-red-500 rounded-full group-hover:text-white transition duration-300 mr-2 px-1.5 py-1"><Icon name="icon-park-outline:like" size="1.5rem" /></div><span class="text-lg mt-1">12</span></div>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      posts: []
    };
  },
  computed: {
    userStore() {
      return useUserStore();
    },
    route() {
      return useRoute();
    }
  },
  mounted() {
    this.fetchPost();
    console.log(posts)
  },
  methods: {
    async fetchPost() {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/${this.route.params.id}`, {
          headers: {
            Authorization: `Bearer ${this.userStore.user.token}`,
          },
        });
        this.posts = [response.data];
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }
  }
};
</script>
