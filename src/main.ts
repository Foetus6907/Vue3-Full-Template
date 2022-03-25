import messages from "@intlify/vite-plugin-vue-i18n/messages";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import { createStore } from "vuex";

const i18n = createI18n({
  locale: localStorage.locale || "en",
  messages,
});

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state: any) {
      state.count++;
    },
  },
});

const app = createApp(App);
app.use(i18n);
app.use(store);
app.mount("#app");
