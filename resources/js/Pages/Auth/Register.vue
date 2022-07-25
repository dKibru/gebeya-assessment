<template>
    <FrontLayout>
        <section class="bg-gray-100 py-10" style="min-height: 86vh">
            <div class="container max-w-screen-xl mx-auto px-4">


                <!--  COMPONENT: SIGN IN -->
                <div style="max-width:480px" class="mt-10 mb-20 p-4 md:p-7 mx-auto rounded bg-white shadow-lg">
                    <form action="">
                        <h2 class="mb-5 text-2xl font-semibold">Sign up</h2>

                        <div class="grid md:grid-cols-2 gap-x-2">
                            <div class="mb-4">
                                <label class="block mb-1"> First name </label>
                                <input class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Type here">
                            </div>

                            <div class="mb-4">
                                <label class="block mb-1"> Last name </label>
                                <input class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Type here">
                            </div>
                        </div> <!-- grid -->

                        <div class="mb-4">
                            <label class="block mb-1"> Phone </label>

                            <div class="flex  w-full">
                                <input class="appearance-none w-24 border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" type="text" placeholder="Code" value="+998">
                                <input class="appearance-none flex-1 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" type="text" placeholder="Type phone">
                            </div>
                        </div>

                        <div class="mb-4">
                            <label class="block mb-1"> Email </label>
                            <input class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Type here">
                        </div>

                        <div class="mb-4">
                            <label class="block mb-1"> Create password </label>
                            <input class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="password" placeholder="Type here">
                        </div>

                        <button type="submit" class="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"> Register </button>

                        <label class="flex items-center w-max my-4">
                            <input checked="" name="" type="checkbox" class="h-4 w-4">
                            <span class="ml-2 inline-block"> I agree with Terms and Conditions </span>
                        </label>

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
    export default {
        name: "Register",
        components: {
            FrontLayout,
            Link
        }
    }
</script>

<style scoped>

</style>
