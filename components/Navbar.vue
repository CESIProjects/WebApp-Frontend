<template>
  <div class="flex items-center justify-between border-gray-800 py-4 h-24 px-8 bg-white">
    <div class="font-semibold text-3xl text-gray-800">{{ title }}</div>
    <div class="flex items-center" v-if="searchBar">
      <input
        placeholder="Rechercher par nom"
        class="border-2 border-gray-200 rounded-md px-4 py-3 bg-gray-100 w-72"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    searchBar: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
