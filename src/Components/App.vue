<template>
    <div v-on:click="onClick">Hello from {{ message }}. Click me!</div>
</template>
<script>
export default {
    name: "app",
    data: () => ({ message: "Vue" }),
    methods: {
        onClick: function (event) {
            alert(`Hi from ${this.message}`);
        },
    },
};
</script>
<style>

</style>
