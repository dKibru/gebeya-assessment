<template>
    <FrontLayout>
        <section class="py-10 bg-gray-50">
            <div class="container max-w-screen-xl mx-auto px-4">


                <div v-if="$page.props.flash.checkout" >
                    <!-- component -->
                    <div class="bg-gray-100 h-screen">
                        <div class="bg-white p-6  md:mx-auto">
                            <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
                                <path fill="currentColor"
                                      d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                                </path>
                            </svg>
                            <div class="text-center">
                                <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Payment Done!</h3>
                                <p class="text-gray-600 my-2">{{$page.props.flash.checkout}}</p>
                                <p> Have a great day!  </p>
                                <div class="py-10 text-center">
                                    <Link href="/" class="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                                        GO BACK
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="flex flex-col md:flex-row gap-4 lg:gap-8" v-else>
                    <main class="md:w-2/3">

                        <article v-if="!$page.props.auth.user" class="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">
                            <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                                <div class="mb-4 lg:mb-0">
                                    <h3 class="text-xl font-semibold">Have an account?</h3>
                                    <p class="text-gray-600">By creating account you will get more benefits</p>
                                </div>
                                <div class="">
                                    <Link class="px-4 py-2 inline-block text-blue-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600" href="/login"> Sign in </Link>

                                    <Link class="px-4 py-2 inline-block text-white bg-blue-600 shadow-sm border border-transparent rounded-md hover:bg-blue-700" href="/register"> Create account </Link>
                                </div>
                            </div>
                        </article> <!-- card.// -->

                        <article class="border border-gray-200 bg-white shadow-sm rounded p-4 lg:p-6 mb-5">

                            <h2 class="text-xl font-semibold mb-5" v-if="$page.props.auth.user">Checkout</h2>
                            <h2 class="text-xl font-semibold mb-5" v-else>Guest Checkout</h2>

                            <div class="grid grid-cols-2 gap-x-3">
                                <div class="mb-4">
                                    <label class="block mb-1"> First name *</label>
                                    <div class="text-red-500" v-if="errors.first_name">{{ errors.first_name }}</div>
                                    <div class="text-red-500" v-else-if="Object.keys(errors).length">&nbsp;</div>
                                    <input v-model="form.first_name" class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Type here">
                                </div>

                                <div class="mb-4">
                                    <label class="block mb-1"> Last name </label>
                                    <div class="text-red-500" v-if="errors.last_name">{{ errors.last_name }}</div>
                                    <div class="text-red-500" v-else-if="Object.keys(errors).length">&nbsp;</div>
                                    <input v-model="form.last_name" class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Type here">
                                </div>
                            </div>

                            <div class="grid lg:grid-cols-2 gap-x-3">
                                <div class="mb-4">
                                    <label class="block mb-1"> Phone </label>
                                    <div class="text-red-500" v-if="errors.phone">{{ errors.phone }}</div>
                                    <div class="text-red-500" v-else-if="Object.keys(errors).length">&nbsp;</div>
                                    <div class="flex  w-full">
                                        <input disabled class="appearance-none w-24 border border-gray-200 bg-gray-100 rounded-tl-md rounded-bl-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" type="text" placeholder="Code" value="+251">
                                        <input  v-model="form.phone" class="appearance-none flex-1 border border-gray-200 bg-gray-100 rounded-tr-md rounded-br-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400" type="text" placeholder="Type phone">
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <label class="block mb-1"> Email  *</label>
                                    <div class="text-red-500" v-if="errors.email">{{ errors.email }}</div>
                                    <div class="text-red-500" v-else-if="Object.keys(errors).length">&nbsp;</div>
                                    <input  v-model="form.email" class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="email" placeholder="Type here">
                                </div>
                            </div>

                            <label class="flex items-center w-max my-4">
                                <input  v-model="form.term"  type="checkbox" class="h-4 w-4">
                                <span class="ml-2 inline-block text-gray-500"> I agree with Terms and Conditions </span>
                            </label>
                            <div class="text-red-500 block" v-if="errors.term">{{ errors.term }}</div>

                            <hr class="my-4">

                            <h2 class="text-xl font-semibold mb-5">Shipping information *</h2>

                            <div class="text-red-500" v-if="errors.shipping">{{ errors.shipping }}</div>

                            <!-- radio selection -->
                            <div class="grid sm:grid-cols-3 gap-3 mb-6">
                                <label class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                                    <span><input  v-model="form.shipping" value="express" type="radio" class="h-4 w-4 mt-1"></span>
                                    <p class="ml-2">
                                        <span>Express delivery</span>
                                        <small class="block text-sm text-gray-400">3-4 days via Fedex</small>
                                    </p>
                                </label>
                                <label class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                                    <span><input v-model="form.shipping" value="post" type="radio" class="h-4 w-4 mt-1"></span>
                                    <p class="ml-2">
                                        <span>Post office</span>
                                        <small class="block text-sm text-gray-400">20-30 days via post</small>
                                    </p>
                                </label>
                                <label class="flex p-3 border border-gray-200 rounded-md bg-gray-50 hover:border-blue-400 hover:bg-blue-50 cursor-pointer">
                                    <span><input v-model="form.shipping" value="self" type="radio" class="h-4 w-4 mt-1"></span>
                                    <p class="ml-2">
                                        <span>Self pick-up</span>
                                        <small class="block text-sm text-gray-400">Nearest location</small>
                                    </p>
                                </label>
                            </div>
                            <!-- radio selection .//end -->

                            <div class="grid md:grid-cols-3 gap-x-3">
                                <div class="mb-4 md:col-span-2">
                                    <label class="block mb-1"> Address* </label>
                                    <div class="text-red-500" v-if="errors.address">{{ errors.address }}</div>
                                    <input v-model="form.address"  class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Type here">
                                </div>


                            </div>



                            <div class="flex justify-end space-x-2">
                                <Link class="px-5 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600" href="/cart">  Back  </Link>
                                <span v-on:click="checkout" class="cursor-pointer px-5 py-2 inline-block text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700" >  Checkout </span>
                            </div>

                        </article> <!-- card.// -->

                    </main>
                    <aside class="md:w-1/3">

                        <article class="text-gray-600" style="max-width: 350px">

                            <h2 class="text-lg font-semibold mb-3">Summary</h2>
                            <ul>
                                <li class="flex justify-between mb-1">
                                    <span>Total price:</span>
                                    <span>${{totalPrice/100}}</span>
                                </li>
                                <li class="flex justify-between mb-1">
                                    <span>Discount:</span>
                                    <span class="text-green-500">- $0.00</span>
                                </li>
                                <li class="flex justify-between mb-1">
                                    <span>TAX:</span>
                                    <span>$0.00</span>
                                </li>
                                <li class="border-t flex justify-between mt-3 pt-3">
                                    <span>Total price:</span>
                                    <span class="text-gray-900 font-bold">${{totalPrice/100}}</span>
                                </li>
                            </ul>

                            <hr class="my-4">

<!--                            <div class="flex gap-3">-->
<!--                                <input class="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" type="text" placeholder="Coupon code">-->
<!--                                <button type="button" class="px-4 py-2 inline-block text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600"> Apply  </button>-->
<!--                            </div>-->

<!--                            <hr class="my-4">-->

                            <h2 class="text-lg font-semibold mb-3">Items in cart</h2>

                            <figure class="flex items-center mb-4 leading-5" v-for="(c,i) in cart.data">
                                <div>
                                    <div class="block relative w-20 h-20 rounded p-1 border border-gray-200">
                                        <img width="70" height="70" :src="c.img" alt="Title">
                                        <span class="absolute -top-2 -right-2 w-6 h-6 text-sm text-center flex items-center justify-center text-white bg-gray-400 rounded-full"> {{i+1}} </span>
                                    </div>
                                </div>
                                <figcaption class="ml-3">
                                    <p> {{c.name}} <br> {{c.qtty}} Items  </p>
                                    <p class="mt-1 text-gray-400"> Total: ${{(c.qtty * c.price)/100}} </p>
                                </figcaption>
                            </figure>


                        </article>

                    </aside> <!-- col.// -->
                </div> <!-- grid.// -->



            </div> <!-- container.// -->
        </section>
    </FrontLayout>
</template>


<script>
    import FrontLayout from "../components/FrontLayout.vue";
    import { Link } from '@inertiajs/inertia-vue3'
    import clickOutSide from "@mahdikhashan/vue3-click-outside";
    import { useForm } from '@inertiajs/inertia-vue3'
    import { usePage } from '@inertiajs/inertia-vue3'
    import { computed } from 'vue'
    import { ref, reactive } from 'vue'
    export default {
        name: "Checkout",
        setup (props) {
            const cart0 = computed(() => usePage().props.value.auth.cart)
            // // cart0.value.push()
            const cart = reactive({ data : cart0})
            // console.log("carta", cart)
            const form = useForm({
                first_name : "" ,
                last_name : "",
                phone : "",
                email : "",
                shipping : "",
                address : "",
                term: false
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
            errors: Object,
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
        //     removeItem : function(i){
        //         this.cart.data.splice(i, 1);
        //     },
        //     addToMyCart : function(){
        //         this.showModal = true
        //         this.form.qtty = this.qtty
        //     },
        //     closeModal : function(){
        //         this.showModal = false
        //     },
        //     changeCart : function(e){
        //         const v = e.target.value
        //         const i = e.target.id
        //         console.log({v,i}, this.cart)
        //         // this.cart.value = []
        //         this.cart['data'] = []
        //     },
            checkout : function(){
                this.form.transform(function(data){
                    return {
                        ...data,
                    }
                }).post('/checkout',{
                    preserveScroll: true,
                    onSuccess: () => {

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
