<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Firebase example</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">
        <template v-if="!user.loggedIn">
          <li class="nav-item">
            <router-link class="nav-link" to="login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="register">Register</router-link>
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="signOut">Sign out</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="notifications"
              >Notifcations</router-link
            >
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase/app";

export default {
  name: "navbar",
  computed: {
    ...mapGetters({ user: "user" })
  },
  methods: {
    async signOut() {
      await firebase.auth().signOut();
      this.$router.replace({ name: "login" });
    }
  }
};
</script>

<style></style>
