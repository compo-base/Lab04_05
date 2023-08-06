<script setup lang="ts">
import type { PropType } from 'vue'
import type { PassengerInfo } from '@/type'

defineProps({
  event: {
    type: Object as PropType<PassengerInfo>,
    require: true
  }
})
</script>

<template>
  <div v-if="event">
    <div class="detail">
      <h1>{{ event.first_name }} {{ event.last_name }}</h1>
      <p>Sex : {{ event.gender }}</p>
      <p>Email : {{ event.email }}</p>
      <p>Travel Date : {{ event.travelDate }}</p>
      <p>Flight : {{ event.Source }} {{ event.Destination }}</p>
    </div>
  </div>
</template>
