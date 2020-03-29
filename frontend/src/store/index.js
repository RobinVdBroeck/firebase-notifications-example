import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    user: {
      loggedIn: false,
      data: null,
      jwt: null,
      refreshToken: null
    }
  },
  getters: {
    user(state) {
      return state.user;
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_JWT(state, data) {
      state.user.jwt = data;
    },
    SET_REFERSH_TOKEN(state, data) {
      state.refreshToken = data;
    }
  },
  actions: {
    async fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        const idToken = await user.getIdToken();
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email
        });
        commit("SET_JWT", idToken);
        commit("SET_REFERSH_TOKEN", user.refreshToken);
      } else {
        commit("SET_USER", null);
      }
    }
  },
  modules: {}
});
