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
    },
    messaging: {
      pushAllowed: false,
      token: null
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
    SET_JWT(state, value) {
      state.user.jwt = value;
    },
    SET_REFERSH_TOKEN(state, value) {
      state.refreshToken = value;
    },
    SET_ALLOW_PUSH(state, value) {
      state.messaging.pushAllowed = value;
    },
    SET_MESSAGING_TOKEN(state, value) {
      state.messaging.token = value;
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
    },
    allowPush({ commit }, value) {
      commit("SET_ALLOW_PUSH", value);
    },
    fetchMessagingToken({ commit }, token) {
      commit("SET_MESSAGING_TOKEN", token);
    }
  },
  modules: {}
});
