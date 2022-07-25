<template>
    <FrontLayout :menu="menu">



        <div v-if="showModal" id="defaultModal" tabindex="-1" class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex" aria-modal="true" role="dialog">
            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700" v-click-out-side="closeModal">
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
                        <!--                                <article class="">-->

                        <!-- item-cart -->
                        <div class="flex flex-wrap lg:flex-row gap-5  mb-4">
                            <div class="w-full lg:w-2/5 xl:w-2/4">
                                <figure class="flex leading-5">
                                    <div>
                                        <div class="block w-16 h-16 rounded border border-gray-200 overflow-hidden">
                                            <img src="images/items/1.jpg" alt="Title">
                                        </div>
                                    </div>
                                    <figcaption class="ml-3">
                                        <p><a href="#" class="hover:text-blue-600">Modern Product Name Goes Here as demo </a></p>
                                    </figcaption>
                                </figure>
                            </div>
                            <div class="">
                                <!-- selection -->
                                <div class="w-24 relative">
                                    <select class="block appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                    <i class="absolute inset-y-0 right-0 p-2 text-gray-400">
                                        <svg width="22" height="22" class="fill-current" viewBox="0 0 20 20"><path d="M7 10l5 5 5-5H7z"></path></svg>
                                    </i>
                                </div>
                                <!-- selection .//end -->
                            </div>
                            <div>
                                <div class="leading-5">
                                    <p class="font-semibold not-italic">$1156.00</p>
                                    <small class="text-gray-400"> $460.00 / per item </small>

                                </div>

                            </div>
                            <div>
                                <a class="px-4 align-right py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100" href="#">
                                    <i class="fa fa fa-times-circle"></i>
                                </a>
                            </div>

                            <!--                                        <div class="leading-5">-->
                            <!--                                            <a class="px-4 py-2 inline-block text-red-600 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100" href="#">  Remove </a>-->
                            <!--                                        </div>-->
                        </div> <!-- item-cart end// -->

                        <hr class="my-4">


                    </div>
                    <!-- Modal footer -->
                    <div class="flex  items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                        <button v-on:click="closeModal" type="button" class=" text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                        <button data-modal-toggle="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                    </div>
                </div>
            </div>
        </div>


        <section class="py-5 sm:py-7 bg-blue-100" v-if="client">
            <div class="container max-w-screen-xl mx-auto px-4">
                <!-- breadcrumbs start -->
                <h2 class="text-3xl font-semibold mb-2">{{client.name}} store</h2>
                <ol class="inline-flex flex-wrap text-gray-600 space-x-1 md:space-x-3 items-center">
                    <li class="inline-flex items-center" v-for="b in breadcrumb">
                        <Link class="text-gray-600 hover:text-blue-600" :href="b.url">{{b.label}}</Link>
                        <i class="ml-3 text-gray-400 fa fa-chevron-right"></i>
                    </li>
                    <li class="inline-flex items-center"> Detail </li>
                </ol>
                <!-- breadcrumbs end -->
            </div><!-- /.container -->
        </section>






        <section class="py-12">
            <div class="container max-w-screen-xl mx-auto px-4">

                <div class="flex flex-col md:flex-row -mx-4">
                    <aside class="md:w-1/3 lg:w-1/4 px-4">

                        <!-- filter wrap -->

                        <a class="md:hidden mb-5  w-full text-center px-4 py-2 inline-block text-lg text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:text-blue-600" href="#">
                            Filter by
                        </a>

                        <div class="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
                            <h3 class="font-semibold mb-2">Category </h3>

                            <ul class="text-gray-500 space-y-1">
                                <li v-for="m in menu">
                                    <label class="flex items-center">
                                        <input v-model="filterCategories" :value="m.id" type="checkbox"  class="h-4 w-4">
                                        <span class="ml-2 text-gray-500"> {{m.name}} </span>
                                    </label>
                                </li>
                            </ul>

                            <hr class="my-4">

                            <h3 class="font-semibold mb-2">Price range</h3>
                            <ul class="space-y-1">
                                <li>
                                    <label class="flex items-center">
                                        <span class="ml-2 text-gray-500 mr-4"> Min. Price </span>
                                        $<input v-model="min_price" type="number" checked="" class="h-8 px-2 w-20 border-gray-600 bg-gray-200">
                                    </label>
                                </li>
                                <li>
                                    <label class="flex items-center">
                                        <span class="ml-2 text-gray-500 mr-4"> Max Price </span>
                                        $<input v-model="max_price" type="number" checked="" class="h-8 px-2 w-20 border-gray-600 bg-gray-200">
                                    </label>
                                </li>

                            </ul>

                            <hr class="my-4">

                            <button v-on:click="filterRequest" type="submit" class="my-2 px-4 py-2 text-center w-full inline-block text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"> Filter </button>
<!--                            <h3 class="font-semibold mb-2">Sort by</h3>-->
<!--                            <ul class="space-y-1">-->
<!--                                <li>-->
<!--                                    <label class="flex items-center">-->
<!--                                        <input name="myselection" type="radio" checked="" class="h-4 w-4">-->
<!--                                        <span class="ml-2 text-gray-500"> Lightblue </span>-->
<!--                                    </label>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <label class="flex items-center">-->
<!--                                        <input name="myselection" type="radio" class="h-4 w-4">-->
<!--                                        <span class="ml-2 text-gray-500"> Orange </span>-->
<!--                                    </label>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <label class="flex items-center">-->
<!--                                        <input name="myselection" type="radio" class="h-4 w-4">-->
<!--                                        <span class="ml-2 text-gray-500"> Silver </span>-->
<!--                                    </label>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <label class="flex items-center">-->
<!--                                        <input name="myselection" type="radio" class="h-4 w-4">-->
<!--                                        <span class="ml-2 text-gray-500"> Darkblue </span>-->
<!--                                    </label>-->
<!--                                </li>-->
<!--                            </ul>-->
                        </div>
                        <!-- filter wrap -->

                    </aside> <!-- col.// -->
                    <main class="md:w-2/3 lg:w-3/4 px-4">

                        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">

                            <div v-for="product in products.data">
                                <!-- COMPONENT: PRODUCT CARD -->
                                <article class="mb-4">
                                    <Link :href="product.url" class="rounded  bg-gray-100 border border-gray-200 block relative p-1 hover:border-blue-300">
                                        <img :src=product.img class="mx-auto mix-blend-multiply w-auto" height="240" alt="Product title here">
                                    </Link>
                                    <div class="pt-3">
<!--                                    <span v-on:click="addToMyCart(product)" class="cursor-pointer float-right px-3 py-2 text-gray-400 border border-gray-300 rounded-md hover:border-blue-400 hover:text-blue-600" >-->
<!--                                        <i class="fa fa-shopping-cart"></i>-->
<!--                                    </span>-->
                                        <p class="font-semibold">${{product.price/100}}</p>
                                        <h6>
                                            <a :href="product.url" class="text-gray-600 hover:text-blue-500">
                                                {{product.name}}
                                            </a>
                                        </h6>
                                        <small v-if="product.category" class="text-sm text-gray-400"> {{product.category.name}}</small>
                                    </div>
                                </article>
                                <!-- COMPONENT: PRODUCT CARD //END -->
                            </div>

                        </div> <!-- grid .// -->

                    </main>  <!-- col.// -->
                </div> <!-- grid.// -->

            </div> <!-- container .// -->
        </section>






    </FrontLayout>
</template>

<script>
    import {Link, useForm, usePage} from '@inertiajs/inertia-vue3'
    import clickOutSide from "@mahdikhashan/vue3-click-outside";
    import FrontLayout from "../components/FrontLayout.vue";
    import {computed, reactive, ref} from "vue";
    export default {
        name: "Category",
        components: {
            Link,
            FrontLayout
        },
        setup (props) {

            const cart0 = computed(() => usePage().props.value.category)
            const filterCategories = ref([cart0.value.id])
            // console.log({cart0: })

            return { filterCategories }
        },
        directives : {
            clickOutSide
        },
        props: {
            products: Array,
            client: Object,
            menu: Array,
            breadcrumb : Object,
            // category : Object,
        },

        data: () => {
            return {
                showModal: false,
                min_price : null,
                max_price : null

            }
        },

        methods: {
            filterRequest : function(){
                this.$inertia.post('/'+this.client.slug+'/', {
                    categories : this.filterCategories,
                    min_price : this.min_price,
                    max_price : this.max_price,
                })
            },
            goBack : function (){
                console.log("hey")
            },
            closeModal : function () {
                this.showModal = false
            },
            addToMyCart(product){
                // alert(product)
                this.showModal = true
                console.log(product.name, this.showModal)
            }
        }
    }
</script>

<style scoped>

</style>
