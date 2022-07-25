<template>
    <BackLayout :menu="menu">
        <section class="container p-6 mx-auto">

            <h1 class="mb-4 text-xl md:text-2xl font-semibold text-black">
                Order #{{order.id}}
            </h1>


            <!-- scrolling horiz. table -->
            <div class="overflow-x-auto shadow-sm">
        <article class="p-3 lg:p-5 mb-5 bg-white border border-blue-600 rounded-md">
            <header class="lg:flex justify-between mb-4">
                <div class="mb-4 lg:mb-0">
                    <p class="font-semibold">
                        <span>Order ID: #{{order.id}} </span>
                        <span class="text-green-500"> • {{order.status}} </span>
                    </p>
                    <p class="text-gray-500"> {{order.created_at}} </p>
                </div>
                <div v-if="order.status == 'paid'">
                    <Link method="POST" :href="'/client/order/'+order.id+'/cancel'" class="px-3 py-1 inline-block text-sm text-red-500 border border-gray-300 rounded-md hover:text-red-500 hover:border-red-600">
                        Cancel order
                    </Link>
                    <Link method="POST" :href="'/client/order/'+order.id+'/complete'"  class="px-3 py-1 inline-block text-white text-sm bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700">
                        Complete order
                    </Link>
                </div>
                <div v-else-if="order.status == 'complete'">
                    <Link method="POST" :href="'/client/order/'+order.id+'/cancel'" class="px-3 py-1 inline-block text-sm text-red-500 border border-gray-300 rounded-md hover:text-red-500 hover:border-red-600">
                        Cancel order
                    </Link>
                </div>
                <div v-else-if="order.status == 'cancel'">
                    <Link Link method="POST" :href="'/client/order/'+order.id+'/complete'" class="px-3 py-1 inline-block text-white text-sm bg-blue-600 border border-blue-600 rounded-md hover:bg-blue-700">
                        Complete order
                    </Link>
                </div>
            </header>
            <div class="grid md:grid-cols-3 gap-2">
                <div>
                    <p class="text-gray-400 mb-1">Person</p>
                    <ul class="text-gray-600">
                        <li>{{order.first_name}} {{order.last_name}}</li>
                        <li>Phone: {{order.phone}}</li>
                        <li>Email: {{order.email}}</li>
                    </ul>
                </div>
                <div>
                    <p class="text-gray-400 mb-1">Delivery address</p>
                    <ul class="text-gray-600">
                        <li>{{order.address}}</li>
                    </ul>
                </div>
                <div>
                    <p class="text-gray-400 mb-1">Payment</p>
                    <ul class="text-gray-600">
<!--                        <li class="text-green-400">Visa card **** 4216</li>-->
                        <li>Shipping fee: $0.00</li>
                        <li>Total paid: ${{order.total_price/100}}</li>
                    </ul>
                </div>
            </div> <!-- grid.// -->

            <hr class="my-4">

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">

                <figure v-for="o in order.details" class="flex flex-row mb-4">
                    <div>
                        <a href="#" class="block w-20 h-20 rounded border border-gray-200 overflow-hidden">
                            <img :src="o.product.img" alt="Title">
                        </a>
                    </div>
                    <figcaption class="ml-3">
                        <p><a href="#" class="text-gray-600 hover:text-blue-600">{{o.product.name}}</a></p>
                        <p class="mt-1 font-semibold">{{o.qtty}}x = ${{o.total_price/100}}</p>
                    </figcaption>
                </figure>


            </div> <!-- grid.// -->
        </article>

            </div>
        </section>
    </BackLayout>
</template>

<script>
    import BackLayout from "../../components/BackLayout.vue";
    import { Link } from '@inertiajs/inertia-vue3'
    export default {
        name: "ClientOrderSingle",
        components : {
            BackLayout,
            Link
        },
        props : {
            menu : Array,
            order : Object
        }
    }
</script>

<style scoped>

</style>
