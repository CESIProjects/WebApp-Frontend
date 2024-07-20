
<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import CategoryService from '../../services/CategoryServices.ts';

const emits = defineEmits(['modalClosed']);

const modalCategory = ref<boolean>(false);
const newCategoryName = ref<string>('');

const toggleModal = () => {
  modalCategory.value = !modalCategory.value;
  emits('modalClosed');
};

const closeModal = () => {
  modalCategory.value = false;
  emits('modalClosed');
};

const createCategory = async () => {
  if (newCategoryName.value.trim() === '') {
    return;
  }

  try {
    await CategoryService.createCategory(newCategoryName.value);
    console.log('New category created:', newCategoryName.value);

    newCategoryName.value = '';
    closeModal();
  } catch (error) {
    console.error('Error creating category:', error.message);
  }
};
</script>

<template>
  <div
    class="fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
    id="modal-id">
    <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div class="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
      <button class="absolute top-3 right-3 text-white text-xl z-50" @click="closeModal">
        <Icon name="ep:close-bold" color="black" />
      </button>
      <form @submit.prevent="createCategory" class="flex flex-col space-y-4">
        <div class="text-xl">Création d'une catégorie :</div>
        <input type="text" v-model="newCategoryName" placeholder="Entrer une catégorie"
          class="bg-gray-200 py-2 px-4 focus:outline-none" />
        <div class="flex justify-end space-x-4">
          <button class="bg-gray-500 py-2 px-4 font-semibold text-white" @click="closeModal">
            Annuler
          </button>
          <button type="submit" class="bg-green-500 py-2 px-4 font-semibold text-white">
            Ajouter
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


