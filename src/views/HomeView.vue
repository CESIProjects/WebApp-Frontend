<template>
    <div class="grid grid-cols-12">
        <div v-if="modalCategory" class="min-w-screen h-screen fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
            <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <button class="absolute top-3 right-3 text-white text-xl z-50" @click="modalCategory = !modalCategory">
                <i class="pi pi-times"></i>
            </button>
            <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                <form @submit.prevent="createCategory" class="flex flex-col space-y-4">
                    <div class="text-xl">Création d'une catégorie :</div>
                    <input type="text" v-model="newCategoryName" placeholder="Entrer une catégorie" class="bg-gray-200 rounded-lg py-2 px-4 focus:outline-none" />
                    <div class="flex justify-end space-x-4">
                        <button class="bg-gray-500 py-2 px-4 rounded-lg font-semibold text-white" @click="modalCategory = !modalCategory">Annuler</button>
                        <button type="submit" class="bg-green-500 py-2 px-4 rounded-lg font-semibold text-white">Ajouter</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-span-9">
            <div class="w-10/12 mx-auto p-8">
                <div class="mb-10" v-for="(post, index) in posts" :key="index">
                    <img src="/test_blog.jpg" style="height: 18rem;" class="bg-auto w-full rounded-3xl">
                    <div class="my-4"><span class="bg-red-500 rounded-full text-white font-semibold px-4 py-1">Catégorie</span></div>
                    <div class="text-4xl font-bold">{{post.title}}</div>
                    <div class="my-3 font-semibold text-gray-500 text-lg">{{post.content}}</div>
                    <div class="py-1 mb-2 flex justify-between">
                        <div class="flex">
                            <img src="/Gouvernement_N.png" class="w-8 h-8 mt-1 mr-3 rounded-full border-2" alt=""><div class="pt-1">Compte TEST</div>
                        </div>
                        <div class="mr-2 cursor-pointer group">
                            <div class="flex">
                                <div class="group-hover:bg-red-500 group-hover:bg-opacity-50 transition rounded-full p-2 mr-2">
                                    <img src="/svg/like_post.svg">
                                </div>
                                <span class="mt-1">0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="col-span-3 text-xl"
        >
            <div class="sticky top-10 bg-red-700 text-white rounded-xl p-4 mr-4 mt-4">
                <div class="relative w-full text-black">
                    <input
                        type="text"
                        class="w-full py-3 pl-10 pr-4 placeholder:text-black rounded-xl border-2 focus:outline-none"
                        placeholder="Rechercher"
                        v-model="searchQuery"
                    />
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <span class="pi pi-search"></span>
                    </div>
                </div>
                <div class="py-4 mt-4 rounded-3xl">
                    <div class="flex justify-between border-b pb-2">
                        <div class="font-bold">Catégorie :</div>
                        <button class="bg-green-500 py-1 px-2.5 rounded-full hover:scale-110 transition" @click="modalCategory = !modalCategory"><i class="pi pi-plus" style="font-size: 1rem"></i></button>
                    </div>
                    <ul class="flex flex-col space-y-4 my-4">
                        <li v-for="category in filteredCategories" :key="category.id">
                            <div class="font-semibold flex justify-between">
                                {{ category.name }}
                                <button class="hover:bg-red-500 rounded-full py-1 px-2 -mt-1" @click="deleteCategory(category.id)">
                                    <i class="pi pi-times"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      posts: [],
      categories: [],
      searchQuery: '',
      showForm: false,
      editMode: false,
      formData: {
        name: '',
        email: '',
        password: '',
      },
      newCategoryName: '',
      modalCategory: false,
    };
  },
  mounted() {
    this.fetchCategories();
  },
  methods: {
    fetchCategories() {
      axios.get('http://localhost:8080/api/categories')
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
    },
    createCategory() {
      const newCategory = {
        name: this.newCategoryName
      };

      axios.post('http://localhost:8080/api/categories', newCategory)
        .then(response => {
          this.fetchCategories();
          this.modalCategory = false;
          this.newCategoryName = '';
        })
        .catch(error => {
          console.error('Error creating category:', error);
        });
    },
    deleteCategory(id: number) {
      axios.delete(`http://localhost:8080/api/categories/${id}`)
        .then(() => {
          this.categories = this.categories.filter(c => c.id !== id);
          this.fetchCategories();
        })
        .catch(error => {
          console.error('Error deleting category:', error);
        });
    },
  },
  computed: {
    filteredCategories() {
      return this.categories.filter(category =>
        category.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
});
</script>
