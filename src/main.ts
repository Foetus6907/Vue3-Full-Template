import messages from "@intlify/vite-plugin-vue-i18n/messages";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import store from "@/store/store";
import router from "@/router/router";

const i18n = createI18n({
  locale: localStorage.locale || "en",
  messages,
});

const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(router);
app.mount("#app");
