<script setup>
import { ref,watch } from 'vue';
import { router, Link } from '@inertiajs/vue3';
import Modal from '@/Pages/Book/Partials/Details.vue'

const showModal = ref(false)
const passData = ref('')

defineProps({
    books: Array,
    message: String
});

let search = ref('');

watch(search, value => {
    router.get('/books', {search: value}, {preserveState: true});
});


</script>

<template>
    <!-- <div v-if="message" class="alert">
        {{ message }}
      </div> -->
    <div class="min-h-screen flex flex-col items-center pt-6 bg-gray-100">
        <div class="overflow-x-auto">
            <div class="flex justify-between pt-3 pl-2">
                <div class="relative max-w-xs">
                    <label for="search" class="sr-only"> Search </label>
                    <input
                        v-model="search"
                        type="text"
                        name="search"
                        class="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-100 dark:border-gray-200 dark:text-gray-400"
                        placeholder="Search..."
                    />
                    <div
                        class="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-5 h-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                </div>

                <div class="flex items-center space-x-2 pr-4">
                    <div class="relative">
                        <Link
                        type="button"
                        href="/books/create"
                        class="font-semibold text-gray-600 hover:text-gray-900"
                        >Add Book + </Link>
                    </div>
                </div>
            </div>

            <div class="flex justify-between pb-2 pl-4">
                <Link
                        type="button"
                        href="/books/search"
                        class="font-semibold text-gray-600 hover:text-gray-900 text-xs underline underline-offset-1"
                        >Advanced search</Link>
            </div>

            <div class="p-1.5 w-full inline-block align-middle">
                <div class="overflow-hidden border rounded-lg">
                    <table class="min-w-full divide-y divide-gray-400">
                        <thead class="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-left text-gray-500"
                                >
                                    ISBN
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-left text-gray-500"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-left text-gray-500"
                                >
                                    Genre
                                </th>
                                <th
                                    scope="col"
                                    class="px-6 py-3 text-xs font-bold text-right text-gray-500"
                                >
                                    Author
                                </th>
                            </tr>
                        </thead>
                        <tbody v-if="books.length" class="divide-y divide-gray-200 ">
                            <tr v-for="book in books" :key="book.id" @click="showModal = true , passData= book.description " style="cursor: pointer;">
                                <td
                                    class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                                >
                                    {{ book.isbn }}
                                </td>
                                <td
                                    class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"
                                >
                                    {{book.name}}
                                </td>
                                <td
                                    class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap"
                                >
                                    {{book.genre}}
                                </td>
                                <td
                                    class="px-6 py-4 text-sm text-right whitespace-nowrap"
                                >
                                        {{book.author}}
                                    
                                </td>
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td colspan="4"
                                    class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap text-center"
                                >
                                    No Data
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <Teleport to="body">
    <!-- use the modal component, pass in the prop -->
    <modal :show="showModal" :details="passData" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </modal>
  </Teleport>
</template>
