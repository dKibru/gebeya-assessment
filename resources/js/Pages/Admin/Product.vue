<template>
    <BackLayout :menu="menu">
        <section class="container p-6 mx-auto">

            <h1 class="mb-4 text-xl md:text-2xl font-semibold text-black">
                Products
            </h1>


            <!-- scrolling horiz. table -->
            <div class="overflow-x-auto shadow-sm">

                <table class="w-full whitespace-no-wrap">
                    <thead>
                    <tr class="text-xs font-semibold tracking-wide text-left uppercase bg-gray-200">
                        <th class="px-3 py-3" width="400">Name</th>
                        <th class="px-3 py-3">Price</th>
                        <th class="px-3 py-3">Categories</th>
                        <th class="px-3 py-3">Date</th>
                        <th class="px-3 py-3 text-right" width="100">Manage</th>
                    </tr>
                    </thead>
                    <tbody class="bg-white divide-y">

                    <tr class="text-gray-700 dark:text-gray-400" v-for="c in products.data">
                        <td class="px-3 py-3">
                            <div class="flex items-center leading-tight">
                                <div class="mr-3 hidden md:block flex-shrink-0">
                                    <img width="36" height="36" class="object-cover w-10 h-10 rounded-full" :src="c.img" alt="">
                                </div>
                                <div>
                                    <p class="font-semibold">{{c.name}}</p>
                                    <p class="text-sm text-gray-500"> Store : {{c.client.name}} </p>
                                </div>
                            </div>
                        </td>
                        <td class="px-3 py-3">
                            $ {{c.price/100}}
                        </td>
                        <td class="px-3 py-3">
                            <div v-if="c.categories.length">
                              <span v-for="cc in c.categories" class="px-2 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
                                {{cc.name}}
                              </span>
                            </div>
                        </td>
                        <td class="px-3 py-3">
                            {{c.created_at}}
                        </td>
                        <td class="px-3 py-3 flex justify-end gap-1">
<!--                            <a class="px-2 py-1 inline-block text-red-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-red-600" href="#">-->
<!--                                <i class="fa fa-trash"></i>-->
<!--                            </a>-->
<!--                            <a class="px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600" href="#">-->
<!--                                <i class="fa fa-pen"></i>-->
<!--                            </a>-->
<!--                            <a class="px-2 py-1 inline-block text-gray-500 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600" href="#">-->
<!--                                <i class="fa fa-ellipsis-h"></i>-->
<!--                            </a>-->
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
    export default {
        name: "AdminProduct",
        components : {
            BackLayout
        },
        props : {
            menu : Array,
            products : Array
        }
    }
</script>

<style scoped>

</style>
