<script setup lang="ts">
import type { PassengerInfo } from '@/type'
import { ref } from 'vue'
import type { Ref } from 'vue'
import PassengerService from '@/services/PassengerService'

const Passenger = ref<PassengerInfo | null>(null)
const props = defineProps({
  id: String
})

PassengerService.getEventById(Number(props.id))
  .then((response) => {
    Passenger.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })
</script>

<template>
  <div v-if="Passenger" class="outside">
    <div class="detail">
      <h1>{{ Passenger.first_name }} {{ Passenger.last_name }}</h1>
      <p>Sex : {{ Passenger.gender }}</p>
      <p>Email : {{ Passenger.email }}</p>
      <p>Travel Date : {{ Passenger.travelDate }}</p>
      <p>Flight : {{ Passenger.Source }} {{ Passenger.Destination }}</p>
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
