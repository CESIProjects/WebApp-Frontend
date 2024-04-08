<template>
    <div class="grid grid-cols-12 police">
        <nav
        class="sticky border-r-2 border-gray-700 top-0 flex flex-col justify-between h-screen col-span-2 px-6 py-4 text-xl text-white bg-gradient-to-r bg-blue-900"
        >
        <!-- bg-gradient-to-l from-blue-600 to-blue-900 -->
        <div class="flex flex-col">
            <div class="flex">
            
            <div class="font-semibold">
                (RE) SOURCES
                <br />
                RELATIONNELLES
            </div>
            </div>
            <div class="border-t-2 border-gray-200 mt-5"></div>
            <div class="flex flex-col justify-center gap-y-5 pt-5">
            <RouterLink to="/" class="flex items-center border-2 hover:scale-105 hover:bg-gray-900 transition rounded-lg px-4 py-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Acceuil
            </RouterLink>
            <div class="border-t-2 border-gray-200"></div>
            </div>
            <div class="flex flex-col gap-y-2 pt-5 text-lg">
            <div class="group flex items-center justify-between gap-x-2 rounded-xl bg-blue-400 text-blue-900 border-2 border-blue-300 hover:bg-gray-900 hover:text-blue-400 font-semibold p-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
                Publications
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
                </svg>
            </div>
            <RouterLink to="/documents" class="group flex items-center  justify-between rounded-xl bg-gray-100 border-2 text-gray-500 border-gray-300 hover:bg-gray-900 hover:text-gray-200 font-semibold p-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]">
                <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                </svg>
                Documents
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6 group-hover:rotate-180  transition duration-[0.4s]">
                <path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                </svg>
            </RouterLink>
            <RouterLink to="/post" class="group flex items-center justify-between rounded-xl bg-red-400 border-2 text-red-900 border-red-300 font-bold p-3 hover:bg-gray-900 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]">
                <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                </svg>
                Catalogue
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6 group-hover:rotate-180 transition duration-[0.4s]">
                <path stroke-linecap="round" stroke-linejoin="round" d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525" />
                </svg>
            </RouterLink>
            <div class="border-t-2 border-gray-200 mt-3"></div>
            </div>
            <RouterLink
            to="/post"
            class="py-3 bg-gray-200 border-2 border-gray-800 rounded-lg flex flex-col items-center justify-center pt-4 gap-y-2 mt-4"
            >
            <img src="./assets/baguette.png" class="w-16" />
            <div class="text-lg text-center text-black font-semibold">
                Ajouter un post
            </div>
            </RouterLink>
        </div>
        <div class="flex">
            <div>
            <div v-if="user && user.name">
                <RouterLink
                class="bg-gray-800 py-2 px-4 rounded-lg text-sm"
                to="/profile"
                >
                {{ user.name }}
                </RouterLink>
            </div>
            </div>
            <button v-if="user && user.name" @click="logout" class="ml-3">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.7"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
            </svg>
            </button>
        </div>
        <div class="flex flex-col">
            <div class="flex my-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="currentColor" class="w-6 h-6 mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
            </svg>
            Parametres
            </div>

            <div class="py-1 mb-2 flex rounded-full hover:bg-gray-800">
            <img
                src="/Gouvernement_N.png"
                class="w-12 h-12 mt-1 mr-3 rounded-full"
                alt=""
            />
            <div>
                <div v-if="user && user.name">
                <RouterLink to="/profile">
                    {{ user.name }}
                </RouterLink>
                </div>
                <div v-else>
                <RouterLink to="/register">Se Connecter</RouterLink>
                </div>
                <span class="text-gray-200 text-lg">Utilisateur</span>
            </div>
            <button v-if="user && user.name" @click="logout" class="ml-3">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.7"
                stroke="currentColor"
                class="w-6 h-6"
                >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
                </svg>
            </button>
            </div>
        </div>
        </nav>
        <div
        class="col-span-7 p-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 relative"
        >
            <slot />
        <!-- <div class="absolute right-0 top-4 border-l-2 border-y-2 rounded-l-xl bg-white">
            <div class="p-6 flex justify-center items-center">
            <div class="text-3xl">Bienvenue sur le réseau ministériel</div>
            <img src="./assets/mascotte-JO.png" class="w-52 transform " />
            </div>
        </div> -->
        </div>
        <div
        class="col-span-3 p-8 border-l-2 border-gray-700 text-xl bg-gradient-to-r bg-red-700"
        >
        <!--  bg-gradient-to-r from-red-400 to-red-700 -->
        <div class="sticky top-10">
            <div class="relative w-full">
            <input
                type="text"
                class="w-full py-3 pl-10 pr-4 placeholder:text-black rounded-xl border-2 focus:outline-none"
                placeholder="Rechercher"
            />
            <div
                class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
            >
                <img src="/svg/search.svg" class="w-5 h-5" alt="" />
            </div>
            </div>
            <div class="py-4 mt-4 rounded-3xl">
            <div class="font-bold">Catégorie :</div>
            <ul class="flex flex-col space-y-4 my-4">
                <li>
                <div class="font-semibold">Test</div>
                <div class="mt-1 text-sm">Ceci décris la caté</div>
                </li>
                <li class="border-t border-gray-800 pt-3">
                <div class="font-semibold">Test</div>
                <div class="mt-1 text-sm">Ceci décris la caté</div>
                </li>
                <li class="border-t border-gray-800 pt-3">
                <div class="font-semibold">Test</div>
                <div class="mt-1 text-sm">Ceci décris la caté</div>
                </li>
                <li class="border-t border-gray-800 pt-3">
                <div class="font-semibold">Test</div>
                <div class="mt-1 text-sm">Ceci décris la caté</div>
                </li>
            </ul>
            </div>
        </div>
        </div>
    </div>
</template>

