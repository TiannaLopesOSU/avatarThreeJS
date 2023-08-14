/* Do not change this file. */

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router.js";

const app = createApp(App);
app.use(router); // Make sure router is defined and added here
app.mount("#app");
