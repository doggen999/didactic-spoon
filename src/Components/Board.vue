<template>
    <div class="gameboard">
        <card @turn-card="turnCard" v-for="card in store.cards" :key="card.index" :index="card.index" />
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { useGameStore } from '../stores/game'

import GAMESTATE from '../consts/enums'
import Card from '../Components/Card.vue'

const evaluate = (cards) => cards[0].color === cards[1].color

export default defineComponent({
    name: 'board',
    components: { Card },
    setup() {
        const store = useGameStore();

        store.$subscribe(() => {

            if (store.displayedCards.length === store.cards.length) {
                store.progress = GAMESTATE.FINISHED
            }

            if (store.activeCards.length === 2) {
                const correctMatch = evaluate(store.activeCards.map(i => store.cards[i]));

                store.timeout = true;

                if (correctMatch) {
                    store.points++;
                } else {
                    store.points--;
                }

                setTimeout(() => {
                    if (correctMatch) {
                        store.$patch(state => {
                            state.displayedCards = [
                                ...state.displayedCards,
                                ...state.activeCards],
                                state.activeCards = [];
                        })
                    } else {
                        store.$patch(state => state.activeCards = [])
                    }
                    store.timeout = false;
                }, 2000)
            }
            return;
        })

        const turnCard = index => {
            if (store.timeout) { return; }
            if (!store.activeCards.includes(index)) {
                store.$patch(state => {
                    state.activeCards.push(index);
                    state.progress = GAMESTATE.INPROGRESS;
                })
            }
        }

        return {
            store,
            activeCards: store.activeCards,
            turnCard,
            GAMESTATE
        };
    }
})
</script>

<style>
.gameboard {
    display: grid;
    grid-template: repeat(4, 1fr) / repeat(4, 1fr);
    gap: 6px;
}
</style>
