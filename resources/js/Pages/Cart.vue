<template>

    <FrontLayout :menu="menu"  >

        <section class="py-5 sm:py-7 bg-blue-100">
            <div class="container max-w-screen-xl mx-auto px-4">
                <!-- breadcrumbs start -->
                <h2 class="text-3xl font-semibold mb-2">Shopping cart</h2>

            </div><!-- /.container -->
        </section>
        <section class="py-10">
            <div class="container max-w-screen-xl mx-auto px-4">

                <div class="flex flex-col md:flex-row gap-4">
                    <main class="md:w-3/4">

                        <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">

                            <!-- item-cart -->
                            <div v-for="(c, i) in cart.data">
                            <div class="flex flex-wrap lg:flex-row gap-5  mb-4">
                                <div class="w-full lg:w-2/5 xl:w-2/4">
                                    <figure class="flex leading-5">
                                        <div>
                                            <div class="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                                <img :src="c.img" alt="Title">
                                            </div>
                                        </div>
                                        <figcaption class="ml-3">
                                            <p>{{c.name}}</p>
<!--                                            <p class="mt-1 text-gray-400"> Color: Yellow, Type: Jeans </p>-->
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="">
                                    <!-- selection -->
                                    <div class="w-24 relative">

                                        <input v-model="cart.data[i].qtty" v-on:change="changeCart" :id="c.product" type="number" class="block appearance-none border border-gray-200 bg-white rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" />
                                    </div>
                                    <!-- selection .//end -->
                                </div>
                                <div>
                                    <div class="leading-5">
                                        <p class="font-semibold not-italic">${{(c.price*c.qtty)/100}}</p>
                                        <small class="text-gray-400"> ${{c.price/100}} / per item </small>
                                    </div>
                                </div>
                                <div class="flex-auto">
                                    <div class="float-right">
                                        <span v-on:click="removeItem(c.product)" class="cursor-pointer px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100" href="#">  Remove </span>
                                    </div>
                                </div>
                            </div> <!-- item-cart end// -->

                            <hr class="my-4">
                            </div>



                            <h6 class="font-bold">Free Delivery within 1-2 weeks</h6>
                            <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>

                        </article> <!-- card end.// -->

                    </main>
                    <aside class="md:w-1/4">

                        <article class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">

                            <ul class="mb-5">
                                <li class="flex justify-between text-gray-600  mb-1">
                                    <span>Total price:</span>
                                    <span>${{totalPrice/100}}</span>
                                </li>
                                <li class="flex justify-between text-gray-600  mb-1">
                                    <span>Discount:</span>
                                    <span class="text-green-500">- $0.00</span>
                                </li>
                                <li class="flex justify-between text-gray-600  mb-1">
                                    <span>TAX:</span>
                                    <span>$0.00</span>
                                </li>
                                <li class="text-lg font-bold border-t flex justify-between mt-3 pt-3">
                                    <span>Total price:</span>
                                    <span>${{totalPrice/100}}</span>
                                </li>
                            </ul>

                            <div v-on:click="checkout" class="cursor-pointer px-4 py-3 mb-2 inline-block text-lg w-full text-center font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700" href="/checkout"> Checkout </div>

                            <Link class="px-4 py-3 inline-block text-lg w-full text-center font-medium text-green-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100" href="/"> Back to shop </Link>

                        </article> <!-- card end.// -->

                    </aside> <!-- col.// -->
                </div> <!-- grid.// -->

            </div>
        </section>

    </FrontLayout>
</template>

<script>
    import FrontLayout from "../components/FrontLayout.vue";
    import Inertia from '@inertiajs/inertia'
    import { Link } from '@inertiajs/inertia-vue3'
    import clickOutSide from "@mahdikhashan/vue3-click-outside";
    import { useForm } from '@inertiajs/inertia-vue3'
    import { usePage } from '@inertiajs/inertia-vue3'
    import { computed } from 'vue'
    import { ref, reactive } from 'vue'
    export default {
        name: "Cart",
        setup (props) {
            const cart0 = computed(() => usePage().props.value.auth.cart)
            // // cart0.value.push()
            const cart = reactive({ data : cart0})
            // console.log("carta", cart)
            const form = useForm({
                cart: cart0,
                // qtty: 0,
                // product : props.product.id
            })
            //
            return { form, cart }
        },
        components: {
            FrontLayout,
            Link
        },
        directives: {
            clickOutSide
        },
        data: () => {
            return {
                showModal: false,
                qtty : 1,
            }
        },
        props  : {
            product : Object ,
            client : Object ,
            menu : Array,
            breadcrumb : Array,
        },
        computed : {
            totalPrice : function(){
                const data = this.cart.data
                let res = 0
                data.forEach(d => {
                    res += (d.price* d.qtty)
                })
                return res
            },
        },
        methods: {
            removeItem : function(i){
                // this.cart.data.splice(i, 1);
                this.form
                    .transform((data) => ({
                        item: i,
                    }))
                    .post('/cart/remove', {
                        preserveScroll: true,
                        // onSuccess: () => form.reset('password'),
                    })
            },
            // addToMyCart : function(){
            //     this.showModal = true
            //     this.form.qtty = this.qtty
            // },
            // closeModal : function(){
            //     this.showModal = false
            // },
            // changeCart : function(e){
            //     const v = e.target.value
            //     const i = e.target.id
            //     console.log({v,i}, this.cart)
            //     // this.cart.value = []
            //     this.cart['data'] = []
            // },
            checkout : function(){
                const c = this.cart
                console.log(c)
                this.form.transform(function(data){
                    console.log({data : data.cart.data})
                    return {
                        ...data,
                        // new : {qtty : this.qtty, product : this.product.id, name : this.product.name, price : this.product.price, img : this.product.img}
                        // cart: this.cart.push()   ,
                    }
                }).post('/cart/store',{
                    preserveScroll: true,
                    onSuccess: () => {
                        this.$inertia.visit('/checkout')
                    },
                })
                // console.log(this.auth.value)

                // console.log("cartb", this.page.props)
            }
        }
    }
</script>

<style scoped>

</style>
