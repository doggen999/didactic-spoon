<template>
    <div>
        <div>A simple counter</div>
        <div>The counter is {{ store.count }} and the double count is {{ store.doubleCount }}</div>
        <button @click="store.increment">Increment</button>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api';
import { useCustomStore } from '../stores/custom.js';

export default {
    name: "app",
    setup() {
        const store = useCustomStore();
        return { store };
    }
};
</script>
<style>

</style>
