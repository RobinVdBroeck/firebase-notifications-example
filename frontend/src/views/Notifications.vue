<template>
  <div>
    <ol>
      <li v-for="notification in notifications" :key="notification.key">
        {{ notification.message }}
      </li>
    </ol>
  </div>
</template>

<script>
import firebase from "firebase/app";

export default {
  name: "notifications",
  data: () => ({
    notifications: [
      {
        key: 0,
        message: "dummy data"
      }
    ],
    unsubscribe: null
  }),
  mounted() {
    const messaging = firebase.messaging();
    this.unsubscribe = messaging.onMessage(payload => {
      console.log("Received message", payload);
    });
  },
  destroyed() {
    this.unsubscribe?.();
  }
};
</script>

<style></style>
