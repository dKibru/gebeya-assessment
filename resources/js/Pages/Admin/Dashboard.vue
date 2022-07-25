<template>
    <BackLayout :menu="menu">

    </BackLayout>
</template>

<script>
    import BackLayout from "../../components/BackLayout.vue";
    export default {
        name: "Dashboard",
        components : {
            BackLayout
        },
        props : {
            menu : Array
        }
    }
</script>

<style scoped>

</style>
