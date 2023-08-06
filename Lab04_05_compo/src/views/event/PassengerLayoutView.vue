<script setup lang="ts">
import { ref } from 'vue'
import { type PassengerInfo } from '@/type'
import PassengerServiece from '@/services/PassengerService'
import { useRouter } from 'vue-router'
const event = ref<PassengerInfo | null>(null)
const props = defineProps({
  id: String
})
const router = useRouter()
PassengerServiece.getEventById(Number(props.id))
  .then((response) => {
    event.value = response.data
  })
  .catch((error) => {
    console.log(error)
    if (error.response.status === 404) {
      router.push({ name: '404-resource', params: { resource: 'event' } })
    } else {
      router.push({ name: 'network-error' })
    }
  })
</script>

<template>
  <div v-if="event">
    <div id="nav">
      <router-link :to="{ name: 'passenger-detail', params: { id } }">Detail | </router-link>
      <router-link :to="{ name: 'passenger-airline', params: { id } }">Airline | </router-link>
      <router-link :to="{ name: 'event-other', params: { id } }">Other | </router-link>
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
