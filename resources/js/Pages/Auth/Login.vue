<template>
    <FrontLayout>
        <section class="bg-gray-100 py-10" style="min-height: 86vh">
            <div class="container max-w-screen-xl mx-auto px-4">


                <!--  COMPONENT: SIGN IN -->
                <div style="max-width:360px" class="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg">
                    <form @submit.prevent="submit">
                        <h2 class="mb-5 text-2xl font-semibold">Sign in</h2>

                        <div class="mb-4">
                            <label class="block mb-1"> Email </label>
                            <input v-model="form.email" class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Type here">
                            <div class="text-red-500" v-if="errors.email">{{ errors.email }}</div>
                        </div>

                        <div class="mb-4">
                            <label class="block mb-1"> Password </label>
                            <input v-model="form.password" class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="password" placeholder="Type here">
                            <div class="text-red-500" v-if="errors.password">{{ errors.password }}</div>
                        </div>

                        <label class="flex items-center w-max mb-5">
                            <input checked="" name="" type="checkbox" class="h-4 w-4">
                            <span class="ml-2 inline-block text-gray-500"> Remember me </span>
                        </label>

                        <button type="submit" class="px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" href="#">  Sign in </button>

                        <!-- Inline style for decoration -->
                        <div class="text-center border-b my-5" style="line-height: 0.1rem;">
                            <span class="px-3 bg-white text-gray-400">or</span>
                        </div>



                        <p class="text-center mt-5">
                            Don’t have an account?  <Link class="text-blue-500" href="/register">Sign up</Link>
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
                password: null
            })

            function submit() {
                Inertia.post('/login', form)
            }

            return { form, submit }
        },
        name: "Login",
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
