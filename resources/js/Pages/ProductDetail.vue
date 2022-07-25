<template>

    <FrontLayout :menu="menu"  >



        <div
            v-if="showModal"
            class="fixed  inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="my-modal"
        >
        <div  id="defaultModal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">

            <div class="relative bg-white p-4  w-full max-w-2xl h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" >
                    <!-- Modal header -->
                    <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Mini Cart
                        </h3>
                        <button v-on:click="closeModal" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="border border-gray-200 bg-white shadow-sm rounded mb-5 p-3 lg:p-5">
                                                        <article v-if="productIsNotInTheCart"  class="">

                        <!-- item-cart -->
                        <div class="flex flex-wrap lg:flex-row gap-5  mb-4">
                            <div class="w-full lg:w-2/5 xl:w-2/4">
                                <figure class="flex leading-5">
                                    <div>
                                        <div class="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                            <img :src="product.img" alt="Title">
                                        </div>
                                    </div>
                                    <figcaption class="ml-3">
                                        <p>{{product.name}}</p>

    <!--                                        <a class="px-4 mt-2 align-right py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 text-sm rounded-md hover:bg-gray-100" href="#">-->
    <!--                                            Remove <i class="fa fa fa-times-circle"></i>-->
    <!--                                        </a>-->
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="">
                                <!-- selection -->
                                <div class="w-24 relative">
                                    Qtty : <input v-model="form.qtty" min="0" type="number" class="block appearance-none border border-gray-200 bg-white rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full" />
                                </div>
                                <!-- selection .//end -->
                            </div>
                            <div>
                                <div class="leading-5">
                                    <p class="font-semibold not-italic">${{(form.qtty * product.price)/100}}</p>
                                    <small class="text-gray-400"> ${{product.price/100}} / per item </small>

                                </div>

                            </div>
                            <div>
                            </div>

                            <!--                                        <div class="leading-5">-->
                            <!--                                            <a class="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100" href="#">  Remove </a>-->
                            <!--                                        </div>-->
                        </div> <!-- item-cart end// -->

                        <hr class="my-4">
                                                        </article>
                        <article v-for="(c, i) in cart.data" class="">

                            <!-- item-cart -->
                            <div class="flex flex-wrap lg:flex-row gap-5  mb-4">
                                <div class="w-full lg:w-2/5 ">
                                    <figure class="flex leading-5">
                                        <div>
                                            <div class="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                                <img :src="c.img" alt="Title">
                                            </div>
                                        </div>
                                        <figcaption class="ml-3">
                                            <p><a href="#" class="hover:text-blue-600">{{c.name}} </a></p>
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
                                <div>
                                    <span v-on:click="removeItem(i)" class="px-4 cursor-pointer align-right py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100" href="#">
                                        <i class="fa fa fa-times-circle"></i>
                                    </span>
                                </div>
                            </div> <!-- item-cart end// -->

                            <hr class="my-4">
                        </article>


                    </div>
                    <!-- Modal footer -->
                    <div class="flex  items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button v-on:click="closeModal" type="button" class=" text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                        <button v-on:click="updateModal" data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                    </div>
                </div>
            </div>
            </div>
        </div>


        <section class="bg-blue-100 py-4">
            <div class="container max-w-screen-xl mx-auto px-4">

                <h2 class="text-3xl font-semibold mb-2">{{client.name}} store</h2>
                <!-- breadcrumbs start -->
                <ol class="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
                    <li class="inline-flex items-center" v-for="b in breadcrumb">
                        <Link class="text-gray-600 hover:text-blue-600" :href="b.url">{{b.label}}</Link>
                        <i class="ml-3 text-gray-400 fa fa-chevron-right"></i>
                    </li>
                    <li class="inline-flex items-center"> Detail </li>
                </ol>
                <!-- breadcrumbs end -->
            </div> <!-- container .// -->
        </section>


        <section class="bg-white py-10">
            <div class="container max-w-screen-xl mx-auto px-4">

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <aside>
                        <!-- gallery -->
                        <div class="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                            <img class="object-cover inline-block" width="400" :src="product.img" alt="Product title">
                        </div>
<!--                        <div class="space-x-2 overflow-auto text-center whitespace-nowrap">-->
<!--                            <a href="#" class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500">-->
<!--                                <img class="w-14 h-14" src="images/items/detail/thumb.jpg" alt="Product title">-->
<!--                            </a>-->
<!--                            <a href="#" class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 ">-->
<!--                                <img class="w-14 h-14 object-cover" src="images/items/detail/thumb1.jpg" alt="Product title">-->
<!--                            </a>-->
<!--                            <a href="#" class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500">-->
<!--                                <img class="w-14 h-14 object-cover" src="images/items/detail/thumb2.jpg" alt="Product title">-->
<!--                            </a>-->
<!--                            <a href="#" class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500">-->
<!--                                <img class="w-14 h-14 object-cover" src="images/items/detail/thumb3.jpg" alt="Product title">-->
<!--                            </a>-->
<!--                            <a href="#" class="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500">-->
<!--                                <img class="w-14 h-14 object-cover" src="images/items/detail/thumb4.jpg" alt="Product title">-->
<!--                            </a>-->
<!--                        </div>-->
                        <!-- gallery end.// -->
                    </aside>
                    <main>
                        <h2 class="font-semibold text-2xl mb-4">
                            {{product.name}}
                        </h2>

<!--                        <div class="flex flex-wrap items-center space-x-2 mb-2">-->

<!--                            <img class="d-inline-block h-4" src="images/misc/stars-active.svg" alt="Rating">-->
<!--                            <span class="text-yellow-500">9.3</span>-->

<!--                            <svg width="6px" height="6px" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <circle cx="3" cy="3" r="3" fill="#DBDBDB"></circle>-->
<!--                            </svg>-->

<!--                            <span class="text-gray-400">-->
<!--							<i class="fa fa-shopping-bag mr-2"></i> 154 orders-->
<!--						</span>-->

<!--                            <svg width="6px" height="6px" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">-->
<!--                                <circle cx="3" cy="3" r="3" fill="#DBDBDB"></circle>-->
<!--                            </svg>-->

<!--                            <span class="text-green-500">Verified</span>-->

<!--                        </div>-->

                        <p class="mb-4 font-semibold text-xl">${{product.price/100}}
                            <span class="text-base font-normal"> </span>
                        </p>

                        <p class="mb-4 text-gray-500 text-justify" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lectus turpis, ornare id pharetra ut, elementum at risus. Aliquam ornare dui erat, et scelerisque ante placerat vel. Phasellus nec placerat quam, vel luctus nisi. Nulla viverra vitae lorem a lobortis. Sed arcu nisi, condimentum quis mi a, pharetra egestas enim.
                        </p>


                        <ul class="mb-5 min-w-300">
                            &nbsp;
<!--                            <li class="mb-1"> <b class="font-medium w-36 inline-block">Model#:</b>-->
<!--                                <span class="text-gray-500">Odsy-1000</span>-->
<!--                            </li>-->
<!--                            <li class="mb-1"> <b class="font-medium w-36 inline-block">Color:</b>-->
<!--                                <span class="text-gray-500">Brown</span>-->
<!--                            </li>-->
<!--                            <li class="mb-1"> <b class="font-medium w-36 inline-block">Delivery:</b>-->
<!--                                <span class="text-gray-500">Russia, USA &amp; Europe</span></li>-->
<!--                            <li class="mb-1"> <b class="font-medium w-36 inline-block">Color:</b>-->
<!--                                <span class="text-gray-500">Brown</span>-->
<!--                            </li>-->
                        </ul>


                        <!-- action buttons -->
                        <div class="flex flex-wrap gap-2">
                            <!-- select-custom -->
                            <!-- select-custom .//end  -->

                            <input  v-model="qtty" type="number" class="px-4 py-2 w-16 inline-block text-black border-blue-600 bg-white border border-transparent rounded-md hover:bg-gray-100" />
                            <div v-on:click="addToMyCart" class="px-4 py-2 cursor-pointer inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700" href="#">
                                <i class="fa fa-shopping-cart mr-2"></i>
                                Add to cart
                            </div>
<!--                            <a class="px-4 py-2 inline-block text-blue-600 border border-gray-300 rounded-md hover:bg-gray-100" href="#">-->
<!--                                <i class="fa fa-heart mr-2"></i>-->
<!--                                Save for later-->
<!--                            </a>-->
                        </div>
                        <!-- action buttons .//end -->
                    </main>
                </div> <!-- grid .// -->
            </div> <!-- container .// -->
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
        name: "ProductDetail",
        setup (props) {
            const cart0 = computed(() => usePage().props.value.auth.cart)
            // cart0.value.push()
            const cart = reactive({ data : cart0})
            console.log("carta", cart)
            const form = useForm({
                cart: cart0,
                qtty: 0,
                product : props.product.id
            })

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
            productIsNotInTheCart : function(){
                const data = this.cart.data
                let res = true
                data.forEach(d => {
                    console.log(this.product.id , d.product)
                    if(this.product.id == d.product){
                        res = false
                    }
                })
                return res
            },
        },
        methods: {
            removeItem : function(i){
                this.cart.data.splice(i, 1);
            },
            addToMyCart : function(){
                this.showModal = true
                this.form.qtty = this.qtty
            },
            closeModal : function(){
                this.showModal = false
            },
            changeCart : function(e){
                const v = e.target.value
                const i = e.target.id
                console.log({v,i}, this.cart)
                // this.cart.value = []
                this.cart['data'] = []
            },
            updateModal : function(){
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
                        this.showModal = false
                        this.qtty = 0
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
