<template>
  <div class="bg-white">
    <div class="overflow-hidden">
      <div class="bg-warm-gray-50">
        <div class="py-10 lg:pt-8">
          <div
            class="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8"
          >
            <h1 class="text-center text-4xl font-extrabold text-gray-900">
              Toutes les ressources
            </h1>
          </div>
        </div>
        <section class="relative bg-white" aria-labelledby="contact-heading">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="pb-6 border-b border-gray-900">
              <div class="flex">
                <button
                  class="w-full mt-1 bg-white mr-2 text-gray-800 border-2 hover:border-purple-900 transition py-2 px-6 font-bold uppercase rounded-lg"
                >
                  Trier par ressources
                </button>
                <button
                  class="w-full mt-1 bg-white mr-2 text-gray-800 border-2 hover:border-purple-900 transition py-2 px-6 font-bold uppercase rounded-lg"
                >
                  Trier par ressources
                </button>
                <input
                  class="w-full mt-1 placeholder-center focus:border-purple-500 text-center bg-white mr-2 text-gray-800 border-2 transition py-2 px-6 font-bold uppercase rounded-lg"
                  placeholder="Search"
                />
              </div>
            </div>
            <div class="pb-10 mt-8">
              <div
                class="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                <div
                  v-for="index in 10"
                  :key="index"
                  class="bg-white rounded-lg shadow divide-y divide-gray-400 border-2"
                >
                  <div class="flex divide-gray-200">
                    <div class="w-0 flex-1 flex">
                      <div
                        class="relative text-black text-md -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm font-medium border border-l-white rounded-bl-lg"
                      >
                        <span class="ml-3">test</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
