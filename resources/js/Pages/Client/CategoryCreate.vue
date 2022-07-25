<template>
    <BackLayout :menu="menu">
        <section class="container p-6 mx-auto">

            <h1 class="mb-4 text-xl md:text-2xl font-semibold text-black">
                New Category
            </h1>

            <div  class="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg">
                <form @submit.prevent="submit">
                    <h2 class="mb-5 text-2xl font-semibold">Create</h2>

                    <div class="mb-4">
                        <label class="block mb-1"> Name </label>
                        <input v-model="form.name" class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Type here">
                        <div class="text-red-500" v-if="errors.name">{{ errors.name }}</div>
                    </div>

                    <label class="flex items-center w-max mb-5">
                        <input v-model="form.navbar" name="" type="checkbox" class="h-4 w-4">
                        <span class="ml-2 inline-block text-gray-500"> Show on navbar </span>
                    </label>


                    <button type="submit" class="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" href="#">  Save </button>

                </form>
            </div>

        </section>
    </BackLayout>
</template>

<script>
    import BackLayout from "../../components/BackLayout.vue";
    import { Link } from '@inertiajs/inertia-vue3'
    import { reactive } from 'vue'
    import { Inertia } from '@inertiajs/inertia'

    export default {
        name: "CategoryCreate",
        setup () {
            const form = reactive({
                name: null,
                navbar: true
            })

            function submit() {
                Inertia.post('/client/categories', form)
            }

            return { form, submit }
        },
        components : {
            BackLayout,
            Link
        },
        props : {
            menu : Array,
            admins : Array,
            errors : Object
        }
    }
</script>

<style scoped>

</style>
