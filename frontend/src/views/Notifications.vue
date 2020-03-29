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
export default {
  name: "notifications",
  data: () => ({
    notifications: [
      {
        key: 0,
        message: "dummy data"
      }
    ]
  })
};
</script>

<style></style>
