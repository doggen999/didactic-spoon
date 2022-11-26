import { defineStore } from "pinia";

import { randomizedCardsArray } from "../utils/utils";
import GAMESTATE from "../consts/enums";

export const useGameStore = defineStore("game", {
  state: () => ({
    points: 0,
    progress: GAMESTATE.NEW,
    cards: randomizedCardsArray(),
    displayedCards: [],
    activeCards: [],
    timeout: false,
  }),
});
