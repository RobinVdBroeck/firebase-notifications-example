<template>
  <div>
    <Navbar />
    <main role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  }
};
</script>
