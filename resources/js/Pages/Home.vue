<template>
        <FrontLayout :menu="menu">




            <section class="py-5 sm:py-7 bg-blue-100" v-if="client">
                <div class="container max-w-screen-xl mx-auto px-4">
                    <!-- breadcrumbs start -->
                    <h2 class="text-3xl font-semibold mb-2">{{client.name}} store</h2>
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
                                <h3 class="font-semibold mb-2">Category  </h3>

                                <ul class="text-gray-500 space-y-1">
                                    <li v-for="m in categories">
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
    import {Link, usePage} from '@inertiajs/inertia-vue3'
    import clickOutSide from "@mahdikhashan/vue3-click-outside";
    import FrontLayout from "../components/FrontLayout.vue";
    import {ref, onMounted, computed} from 'vue'

    const count = ref(0)

    export default {
        setup (props) {

            const filterCategories = ref(props.filter?.categories || [])

            return { filterCategories }
        },
        components: {
          Link,
            FrontLayout
        },
        directives : {
            clickOutSide
        },
        props: {
            products: Array,
            client: Object,
            menu: Array,
            categories : Array
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
              this.$inertia.post('/', {
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
            addToMyCart : function(product){
                // alert(product)
                this.showModal = true
                console.log(product.name, this.showModal)
            }
        }
    }
</script>

<style scoped>

</style>
