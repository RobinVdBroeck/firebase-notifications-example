import Vue from "vue";
import App from "./App.vue";
import { setup as setupFirebase } from "./firebase";
import router from "./router";
import store from "./store";

setupFirebase();

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
