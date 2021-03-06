import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

function requireNotAuth(to, from, next) {
  const user = store.getters.user;

  if (!user.loggedIn) {
    next();
  } else {
    next("/");
  }
}

function requireAuth(to, from, next) {
  const user = store.getters.user;

  if (user.loggedIn) {
    next();
  } else {
    next("/login");
  }
}

const routes = [
  {
    path: "/",
    redirect: "/notifications"
  },
  {
    path: "/login",
    name: "login",
    beforeEnter: requireNotAuth,
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    beforeEnter: requireNotAuth,
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/notifications",
    name: "notifications",
    beforeEnter: requireAuth,
    component: () =>
      import(
        /* webpackChunkName: "notifications" */ "../views/Notifications.vue"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
