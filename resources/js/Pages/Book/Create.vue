<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextArea from '@/Components/TextArea.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import BookLayout from '@/Layouts/BookLayout.vue';

const form = useForm({
    name: '',
    genre: '',
    isbn: '',
    author: '',
    description: '',
});

const submit = () => {
    form.post('create')
};
</script>

<template>
    <BookLayout>
        <Head title="Publish Books" />

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
                <InputLabel for="genre" value="Genre" />

                <TextInput
                    id="genre"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.genre"
                    required
                    autofocus
                    autocomplete="genre"
                />

                <InputError class="mt-2" :message="form.errors.genre" />
            </div>

            <div>
                <InputLabel for="isbn" value="Isbn" />

                <TextInput
                    id="isbn"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.isbn"
                    required
                    autofocus
                    autocomplete="isbn"
                />

                <InputError class="mt-2" :message="form.errors.isbn" />
            </div>

            <div>
                <InputLabel for="author" value="Author" />

                <TextInput
                    id="author"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.author"
                    required
                    autofocus
                    autocomplete="author"
                />

                <InputError class="mt-2" :message="form.errors.author" />
            </div>

            <div>
                <InputLabel for="description" value="Description" />

                <TextArea
                    id="description"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.description"
                    required
                    autofocus
                    autocomplete="description"
                />

                <InputError class="mt-2" :message="form.errors.description" />
            </div>

            <div class="flex items-center justify-end mt-4">

                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Add Book
                </PrimaryButton>
            </div>
        </form>
    </BookLayout>
</template>
