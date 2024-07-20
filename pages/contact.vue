<template>
  <div class="overflow-hidden min-h-screen bg-gray-100">
    <Navbar :title="'Formulaire de contact'" :searchBar="false" />

    <div
      class="relative bg-gray-100 p-8 font-sans space-y-4 text-base antialiased font-light leading-relaxed border-t  border-t-blue-gray-100  text-blue-gray-500 h-full"
    >
      <input
        type="text"
        placeholder="Sujet"
        class="bg-white py-2 px-4 focus:outline-none border border-gray-200"
      />
      <textarea
        type="description"
        placeholder="Description"
        class="bg-white py-2 px-4 focus:outline-none w-full h-40 max-h-40 border border-gray-200"
      />
    </div>
  </div>
</template>
