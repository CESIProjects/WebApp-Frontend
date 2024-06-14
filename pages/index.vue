<template>
  <div>
    <div class="w-10/12 mx-auto text-black">
      <div class="mb-10" v-for="post in posts" :key="post.id">
        <NuxtLink :to="{ name: 'post-id', params: { id: post.id } }">
          <img
            src="/test_blog.jpg"
            style="height: 18rem"
            class="bg-auto w-full rounded-3xl"
          />
          <div class="my-4">
            <span
              class="bg-red-500 rounded-full text-black font-semibold px-4 py-1"
              >{{ post.categoryName }}</span
            >
          </div>
          <div class="text-4xl font-bold">{{ post.title }}</div>
          <div class="my-3 font-semibold text-gray-500 text-lg">
            {{ post.content }}
          </div>
          <div class="py-1 mb-2 flex justify-between">
            <div
              class="flex mt-1 z-20 group"
            >
              <div class="pt-1">Écris par : <span class="group-hover:underline capitalize font-bold">{{post.username}}</span></div>
            </div>
            <div class="mr-2 group">
              <div class="flex">
                <div
                  class="group-hover:bg-red-500 rounded-full group-hover:text-white transition duration-300 mr-2 px-1.5 py-1"
                >
                  <Icon name="icon-park-outline:like" size="1.5rem" />
                </div>
                <span class="text-lg mt-1">12</span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useUserStore } from '@/stores/user';
import { useRoute } from 'vue-router';

export default {
    data() {
        return {
            customers: [],
            posts: [],
            showForm: false,
            editMode: false,
            formData: {
                name: '',
                email: '',
                password: '',
            }
        };
    },
    mounted() {
        this.fetchPosts();    
    },
    methods: {
        fetchPosts() {
            axios.get('http://localhost:8080/api/posts')
                .then(response => {
                    this.posts = response.data;
                })
                .catch(error => {
                    console.error('Error fetching customers:', error);
                });
        },
        // editCustomer(id) {
        //     const customer = this.customers.find(c => c.id === id);

        //     this.formData = { ...customer };

        //     this.editMode = true;
        //     this.showForm = true;
        // },
        // deleteCustomer(id) {
        //     axios.delete(`http://localhost:8080/api/customers/${id}`)
        //         .then(() => {
        //             this.customers = this.customers.filter(c => c.id !== id);
        //         })
        //         .catch(error => {
        //             console.error('Error deleting customer:', error);
        //         });
        // },
        // submitForm() {
        //     if (this.editMode) {
        //         axios.put(`http://localhost:8080/api/customers/${this.formData.id}`, this.formData)
        //             .then(() => {
        //                 this.fetchCustomers();
        //             })
        //             .catch(error => {
        //                 console.error('Error updating customer:', error);
        //             });
        //     } else {
        //         axios.post('http://localhost:8080/api/customers', this.formData)
        //             .then(() => {
        //                 this.fetchCustomers();
        //             })
        //             .catch(error => {
        //                 console.error('Error creating customer:', error);
        //             });
        //     }
        //     this.showForm = false;
        //     this.editMode = false;
        // },
    },
}
</script>
