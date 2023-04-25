<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { ref,watch } from 'vue';
import { router, Link, useForm } from '@inertiajs/vue3';
import Modal from '@/Pages/Book/Partials/Details.vue'

const showModal = ref(false)
const passData = ref('')

defineProps({
    books: Array,
    search: Boolean
});

const form = useForm({
    name: '',
    isbn: ''
});

const submit = () => {
    form.post('result')
};

</script>

<template>
    <!-- <div v-if="message" class="alert">
        {{ message }}
      </div> -->
    <div class="min-h-screen flex flex-wrap flex-col  items-center pt-6 bg-gray-100">
        <div class="overflow-x-auto">
            <div class="flex flex-row justify-around py-3 pl-2 order-2">
                <form @submit.prevent="submit">
                    <div>
                        <InputLabel for="name" value="Name" />

                        <TextInput
                            id="name"
                            type="text"
                            class="mt-1 block w-full text-input-dark"
                            v-model="form.name"
                            required
                            autofocus
                            autocomplete="name"
                        />

                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div>
                        <InputLabel for="isbn" value="Isbn" />

                        <TextInput
                            id="isbn"
                            type="text"
                            class="mt-1 block w-full text-input-dark"
                            v-model="form.isbn"
                            required
                            autofocus
                            autocomplete="isbn"
                        />

                        <InputError class="mt-2" :message="form.errors.name" />
                    </div>

                    <div class="flex items-center justify-end mt-4">

                        <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                            Search
                        </PrimaryButton>
                    </div>

                </form>
            </div>

            <div v-if="search" class="p-1.5 w-full inline-block align-middle">
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
            <div v-else class="p-1.5 w-full inline-block align-middle"></div>
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
