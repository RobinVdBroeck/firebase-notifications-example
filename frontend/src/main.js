import Vue from "vue";
import App from "./App.vue";
import { setup as setupFirebase } from "./firebase";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

Vue.config.productionTip = false;
new Vue({
  beforeCreate() {
    setupFirebase({ router: this.$router, store: this.$store });
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
