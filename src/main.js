import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./Components/App";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  el: "#app",
  render: (h) => h(App),
  pinia,
});
