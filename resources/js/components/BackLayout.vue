<template>
    <div class="flex min-h-screen dark:bg-gray-900">

        <aside id="sidebar" class="fixed -left-full top-0 bottom-0 md:static z-40 w-60 overflow-y-auto bg-blue-800 flex-shrink-0">

            <header class="flex items-center justify-between h-14 px-4 py-2 mb-2 border-b border-blue-700 bg-blue-100">
                <Link class="inline-block" href="/">
                    <img src="/logo.png" height="36" class="max-h-9 hover:opacity-90 ">
                </Link>
                <button onclick="hide_sidebar()" class="md:hidden float-right appearance-none border border-transparent bg-transparent text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
            </header>

            <ul>


                <li class=" relative">
                    <Link v-for="m in menu" :href="m.url" class="flex px-5 py-3 items-center w-full text-white hover:text-white hover:bg-blue-700">
                        <i :class="'text-gray-100 w-5 fa'+ m.icon"></i>
                        <span class="ml-3">{{m.label}}</span>
                    </Link>
                </li>


            </ul>

            <hr class="border-blue-600">

            <div class="px-5 my-6">
<!--                <button class="inline-block w-full text-left px-4 py-2 text-black bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500">-->
<!--                    Create account <span class="float-right" aria-hidden="true">+</span>-->
<!--                </button>-->
            </div>
        </aside>

        <main class="w-full">

            <header class="h-14 z-10 py-3 bg-white shadow-sm border-b border-gray-200">
                <div class="container h-full flex items-center justify-between px-6 mx-auto">

                    <!-- Mobile hamburger -->
                    <button onclick="open_sidebar()" class="p-1 mr-5  md:hidden focus:outline-none focus:shadow-outline-purple">
                        <svg xmlns="http://www.w3.org/2000/svg" height="28" width="28" viewBox="0 0 24 24" fill="currentColor">
                            <path fill="currentColor" d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                        </svg>
                    </button>

                    <!-- Search input -->
                    <form>
                        <div class="relative">
                            <input class="appearance-none border border-transparent bg-transparent rounded-md py-1 px-2 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Search for " aria-label="Search">
                        </div>
                    </form>
                    <ul v-if="$page.props.auth.as" class="flex items-center flex-shrink-0 space-x-2">
                        <li >
                            <Link method="POST" href="/admin/logoutas" class="px-2 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-200" aria-label="Button name">
                                return to admin
                            </Link>
                        </li>
                    </ul>
                    <ul class="flex items-center flex-shrink-0 space-x-2" v-else>
                        <li>
                            <button class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-blue-200" aria-label="Button name">
                                <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z"></path></svg>
                            </button>
                        </li>
                        <li>
                            <Link href="/logout" class="h-10 pr-4 flex items-center justify-center bg-gray-200 border border-transparent rounded-full hover:border-blue-400 overflow-hidden" aria-label="Button name">
                                <img src="/images/avatars/avatar.jpg" width="32" height="32" class="w-10 h-10 pr-1 rounded-full"> Logout ( {{$page.props.auth.user.name}} )
                            </Link>
                        </li>
                    </ul>
                </div>
            </header>

            <notifications />

            <slot></slot>
        </main>
    </div>
</template>

<script>
    import { Link } from '@inertiajs/inertia-vue3'
    export default {
        name: "BackLayout",
        components: {
            Link
        },
        props : {
            menu : Array
        }
    }
</script>

<style scoped>

</style>
