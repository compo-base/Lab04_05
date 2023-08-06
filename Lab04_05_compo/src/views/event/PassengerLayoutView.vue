<script setup lang="ts">
import { ref } from 'vue'

import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'
const store = useEventStore()
const event = storeToRefs(store).event
const id = ref(event?.value?.id)
</script>

<template>
  <div v-if="event">
    <div id="nav">
      <router-link :to="{ name: 'passenger-detail', params: { id } }">Detail | </router-link>
      <router-link :to="{ name: 'passenger-airline', params: { id } }">Airline | </router-link>
      <router-link :to="{ name: 'event-edit', params: { id } }">Edit | </router-link>
      <router-link :to="{ name: 'event-other', params: { id } }">Other </router-link>
    </div>
    <RouterView :event="event"></RouterView>
  </div>
</template>

<style scoped>
#nav {
  text-align: center;
  margin: 30px;
}
.router-link-active {
  color: black;
}
</style>
