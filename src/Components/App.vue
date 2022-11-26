<template>
    <div class="app">
        <div class="header">
            <span>Points: {{ store.points }}</span>
            <span>{{ store.timeout ? 'TIMEOUT' : '' }}</span>
            <button :disabled="store.progress === GAMESTATE.NEW" @click="reset">
                {{ store.progress === GAMESTATE.INPROGRESS ? 'Reset' : 'New' }}
            </button>
        </div>
        <board />
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useGameStore } from '../stores/game';

import GAMESTATE from '../consts/enums'
import Board from '../Components/Board'

export default defineComponent({
    name: "app",
    components: { Board },
    setup() {
        const store = useGameStore();
        const reset = () => { store.$reset(); }
        return { store, GAMESTATE, reset };
    }
}); 
</script>

<style>
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.app {
    max-width: 700px;
    width: 90vw;
    position: fixed;
    height: max-content;
    inset: 0;
    margin: auto;
}

.header {
    display: flex;
    justify-content: space-between;
    margin-block: 10px;
}
</style>
