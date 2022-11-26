<template>
    <div class="card" :class="{ dimmed: store.displayedCards.includes(index) }" @click="$emit('turn-card', index)">
        {{ store.activeCards.includes(index) || store.displayedCards.includes(index) ? store.cards[index].color :
        store.cards[index].color[0]
        }}
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useGameStore } from '../stores/game';

export default defineComponent({
    name: 'board',
    props: ['index'],
    setup() {
        const store = useGameStore();
        return { store }
    }
})
</script>

<style>
.card {
    aspect-ratio: 1/1;

    display: flex;
    justify-content: center;
    align-items: center;

    border: solid 1px black;
    border-radius: .25rem;

    transition: transform 200ms ease-in-out;

    user-select: none;
}

.dimmed {
    --color: grey;
    color: var(--color);
    border-color: var(--color);
}

.card:not(.dimmed):hover {
    transform: scale(1.05)
}
</style>
