<template>
  <div>
    <h1>Sorry,</h1>
    <p>The resource {{ resource }} not here.</p>
  </div>
</template>

<script setup lang="ts">
const { resource } = defineProps()
</script>
