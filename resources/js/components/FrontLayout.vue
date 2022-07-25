<template>
    <div class="common-layout">
        <header class="bg-white py-3 border-b">
            <div class="container max-w-screen-xl mx-auto px-4">
                <div class="flex flex-wrap items-center">
                    <!-- Brand -->
                    <div class="flex-shrink-0 mr-5">
                        <Link href="/"> <img src="/logo.png" height="38" class="h-10" alt="Brand"> </Link>
                    </div>
                    <!-- Brand .//end -->

                    <!-- Search -->
<!--                    <div class="flex flex-nowrap items-center w-full order-last md:order-none mt-5 md:mt-0 md:w-2/4 lg:w-2/4">-->
<!--                        <input class="flex-grow appearance-none border border-gray-200 bg-gray-100 rounded-md mr-2 py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" type="text" placeholder="Search">-->
<!--                        <button type="button" class="px-4 py-2 inline-block text-white border border-transparent bg-blue-600 text-white rounded-md hover:bg-blue-700">-->
<!--                            Search-->
<!--                        </button>-->
<!--                    </div>-->
                    <!-- Search .//end -->

                    <!-- Actions -->
                    <div class="flex items-center space-x-2 ml-auto" v-if="$page.props.auth.user">
                        <Link v-if="$page.props.auth.user.role != 'user'" class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300" href="/home">
                            <i class="text-gray-400 w-5 fa fa-user"></i>
                            <span class="hidden lg:inline ml-1">Dashboard</span>
                        </Link>
                        <Link  class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300" href="/logout">
                            <i class="text-gray-400 w-5 fa fa-user-clock"></i>
                            <span class="hidden lg:inline ml-1">Logout</span>
                        </Link>
                        <Link v-if="$page.props.auth.cart.length" class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300" href="/cart">
                            <i class="text-gray-400 w-5 fa fa-shopping-cart"></i>
                            <span class="hidden lg:inline ml-1">My cart  ( {{$page.props.auth.cart.length}} ) </span>
                        </Link>
                    </div>
                    <div class="flex items-center space-x-2 ml-auto" v-else>
                        <Link  class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300" href="/login">
                            <i class="text-gray-400 w-5 fa fa-user"></i>
                            <span class="hidden lg:inline ml-1">Sign in</span>
                        </Link>
                        <Link v-if="$page.props.auth.cart.length" class="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300" href="/cart">
                            <i class="text-gray-400 w-5 fa fa-shopping-cart"></i>
                            <span class="hidden lg:inline ml-1">My cart ( {{$page.props.auth.cart.length}} ) </span>
                        </Link>
                    </div>
                    <!-- Actions .//end -->

                    <!-- mobile-only -->
                    <div class="lg:hidden ml-2">
                        <button type="button" class="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent">
                            <span class="sr-only">Open menu</span>
                            <i class="fa fa-bars fa-lg"></i>
                        </button>
                    </div>
                    <!-- mobile-only //end  -->

                </div> <!-- flex grid //end -->
            </div> <!-- container //end -->
        </header>


        <nav class="relative shadow-sm">
            <div class="container max-w-screen-xl mx-auto px-4">
                <!-- Bottom -->
                <div class="hidden lg:flex flex-1 items-center py-1">
                    <Link v-for="m in menu" class="px-3 py-2 rounded-md hover:bg-gray-100" :href="m.url"> {{m.name}} </Link>
                </div>
                <!-- Bottom //end -->
            </div> <!-- container //end -->
        </nav>









        <slot></slot>





        <footer class="py-6 bg-gray-200">
            <p class="text-center"><a href="">Gebeya Ecommerce</a></p>
        </footer>



    </div>
</template>

<script>
    import { Link } from '@inertiajs/inertia-vue3'
    export default {
        name: "FrontLayout",
        components: {
            Link
        },
        props : {
            menu : Array
        },


        methods: {
            goBack : function (){
                console.log("hey")
            }
        }
    }
</script>

<style scoped>

</style>
