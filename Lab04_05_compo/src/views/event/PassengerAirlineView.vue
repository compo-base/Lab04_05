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
  <div v-if="event" class="outside">
    <div class="detail">
      <h1>{{ event.first_name }} {{ event.last_name }}</h1>
      <p>- Airline Id: {{ event.airlineId }}</p>
      <p>- Travel Date : {{ event.travelDate }}</p>
      <p>- Flight : {{ event.Source }} --> {{ event.Destination }}</p>
    </div>
  </div>
</template>

<style scoped>
.outside {
  border: solid 2px rgb(150, 148, 148);
}
.detail {
  margin: 20px;
}
h1 {
  font-weight: 500;
}
</style>
