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
        <li class="nav-item">
          <router-link class="nav-link" to="login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="register">Register</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="notifications"
            >Notifcations</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
