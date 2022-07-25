<template>
        <FrontLayout :menu="menu">




            <section class="py-5 sm:py-7 bg-blue-100" v-if="client">
                <div class="container max-w-screen-xl mx-auto px-4">
                    <!-- breadcrumbs start -->
                    <h2 class="text-3xl font-semibold mb-2">{{client.name}} store</h2>
                    <!-- breadcrumbs end -->
                </div><!-- /.container -->
            </section>






            <section class="py-10">
                <div class="container max-w-screen-xl mx-auto px-4">
                    <h2 class="text-3xl font-bold mb-8">New products</h2>

                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                </div>
            </section>








        </FrontLayout>
</template>

<script>
    import { Link } from '@inertiajs/inertia-vue3'
    import clickOutSide from "@mahdikhashan/vue3-click-outside";
    import FrontLayout from "../components/FrontLayout.vue";
    import { ref, onMounted } from 'vue'

    const count = ref(0)

    export default {
        // setup(props) {
        //     const count = ref(0)
        //
        //     return {
        //         products : props.products,
        //         client : props.client,
        //         menu : props.menu
        //     }
        // },
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
            menu: Array
        },
        data: () => {
            return {
                showModal: false
            }
        },

        methods: {
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
