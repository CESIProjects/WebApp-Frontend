<template>
  <div class="overflow-hidden min-h-screen bg-gray-100">
    <div class="flex items-center justify-between py-4 h-24 px-8 bg-white">
      <div class="font-semibold text-3xl text-gray-800">Formulaire de contact</div>
    </div>
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
