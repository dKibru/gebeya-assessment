<template>
    <FrontLayout>
        <section class="bg-gray-100 py-10" style="min-height: 86vh">
            <div class="container max-w-screen-2xl mx-auto px-4">


                <!--  COMPONENT: SIGN IN -->
                <div  class="mt-10 max-w-screen-md mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg">
                    <form @submit.prevent="submit">
                        <h2 class="mb-5 text-2xl font-semibold">Sign up</h2>



                        <div class="mb-4">
                            <label class="block mb-1"> Full name </label>
                            <div class="text-red-500" v-if="errors.name">{{ errors.name }}</div>
                            <input v-model="form.name" class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Type here">
                        </div>

                        <div class="mb-4">
                            <label class="block mb-1"> Email </label>
                            <div class="text-red-500" v-if="errors.email">{{ errors.email }}</div>
                            <input v-model="form.email" class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="email" placeholder="Type here">
                        </div>

                        <div class="grid md:grid-cols-2 gap-x-2">
                            <div class="mb-4">
                                <label class="block mb-1"> Password </label>
                                <div class="text-red-500" v-if="errors.password">{{ errors.password }}</div>
                                <input v-model="form.password" type="password" class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"  placeholder="Type here">
                            </div>

                            <div class="mb-4">
                                <label class="block mb-1"> Confirm Password </label>
                                <div class="text-red-500" v-if="errors.password">&nbsp;</div>
                                <input v-model="form.password_confirmation" type="password" class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"  placeholder="Type here">
                            </div>
                        </div> <!-- grid -->

                        <label class="flex items-center w-max my-4">
                            <input v-model="form.client" name="" type="checkbox" class="h-4 w-4">
                            <span class="ml-2 inline-block"> I am a store owner / client </span>
                        </label>

                        <button type="submit" class="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"> Register </button>


                        <hr>

                        <p class="text-center mt-5">
                            Already have an account?  <Link class="text-blue-500" href="/login">Sign in</Link>
                        </p>
                    </form>
                </div>
                <!--  COMPONENT: SIGN IN //END -->

            </div>
        </section>
    </FrontLayout>
</template>

<script>
    import FrontLayout from "../../components/FrontLayout.vue";
    import { Link } from '@inertiajs/inertia-vue3'
    import { reactive } from 'vue'
    import { Inertia } from '@inertiajs/inertia'

    export default {
        setup () {
            const form = reactive({
                email: null,
                password: null,
                password_confirmation: null,
                name : null,
                client : true
            })

            function submit() {
                Inertia.post('/register', form)
            }

            return { form, submit }
        },
        name: "Register",
        components: {
            FrontLayout,
            Link
        },
        props : {
            errors: Object,
        }
    }
</script>

<style scoped>

</style>
