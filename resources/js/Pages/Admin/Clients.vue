<template>
    <BackLayout :menu="menu">
        <section class="container p-6 mx-auto">

            <h1 class="mb-4 text-xl md:text-2xl font-semibold text-black">
                Clients
<!--                <button class=" text-left px-4 py-2 md:text-sm text-black mx-8 bg-yellow-400 border border-transparent rounded-md hover:bg-yellow-500">-->
<!--                    <i class="fa fa-plus-circle"></i>-->
<!--                </button>-->
            </h1>


            <!-- scrolling horiz. table -->
            <div class="overflow-x-auto shadow-sm">

                <table class="w-full whitespace-no-wrap">
                    <thead>
                    <tr class="text-xs font-semibold tracking-wide text-left uppercase bg-gray-200">
                        <th class="px-3 py-3" width="200">Client</th>
                        <th class="px-3 py-3">Store Listing</th>
                        <th class="px-3 py-3">Store Status</th>
                        <th class="px-3 py-3">Joined at</th>
                        <th class="px-3 py-3 text-right" width="200">Manage</th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y">

                    <tr class="text-gray-700 dark:text-gray-400" v-for="c in clients.data">
                        <td class="px-3 py-3">
                            <div class="flex items-center leading-tight">
                                <div class="mr-3 hidden md:block flex-shrink-0">
<!--                                    <img width="36" height="36" class="object-cover w-10 h-10 rounded-full" src="images/avatars/avatar1.jpg" alt="">-->
                                </div>
                                <div>
                                    <p class="font-semibold">{{c.name}}</p>
                                    <p class="text-sm text-gray-500"> {{c.email}} </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-3 py-3">
                            <p class="text-sm text-gray-500"> {{c.products.length}} Products </p>
                            <p class="text-sm text-gray-500"> {{c.categories.length}} Categories </p>
                        </td>
                        <td class="px-3 py-3">
              <span class="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                Active
              </span>
                        </td>
                        <td class="px-3 py-3">
                            {{c.fdates.created_at}}
                        </td>
                        <td class="px-3 py-3 flex justify-end gap-1">
                            <Link method="POST"  :href="'/admin/client/'+c.id+'/delete'" title="deactivate store" class="px-2 py-1 inline-block text-red-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-red-600">
                                <i class="fa fa-trash"></i>
                            </Link>
<!--                            <a class="px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600" href="#">-->
<!--                                <i class="fa fa-pen"></i>-->
<!--                            </a>-->
                            <Link target="_blank" :href="c.url"  title="view front store"  class="px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600" >
                                <i class="fa fa-eye"></i>
                            </Link>
                            <Link :href="'/admin/loginas/'+c.id"  :title="'log in as '+c.name" method="post"  class="px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600" >
                                <i class="fa fa-user-cog"></i>
                            </Link>
                        </td>
                    </tr>


                    </tbody>
                </table>

            </div>
            <!-- scrolling horiz. table -->

        </section>
    </BackLayout>
</template>

<script>
    import BackLayout from "../../components/BackLayout.vue";
    import { Link } from '@inertiajs/inertia-vue3'
    export default {
        name: "AdminClients",
        components : {
            BackLayout,
            Link
        },
        props : {
            menu : Array,
            clients : Array
        }
    }
</script>

<style scoped>

</style>
