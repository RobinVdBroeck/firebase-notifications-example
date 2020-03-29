import Vue from "vue";
import App from "./App.vue";
import { setup as setupFirebase } from "./firebase";
import router from "./router";

setupFirebase();

Vue.config.productionTip = false;
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
