<template>
  <div class="msg">
    <h1>Sorry</h1>
    <h3>We dont have resorce that you want</h3>
  </div>
</template>

<script setup lang="ts">
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>

<style scoped>
.msg {
  text-align: center;
}
</style>
