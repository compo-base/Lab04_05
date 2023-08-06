<script setup lang="ts">
import type { PassengerInfo } from '@/type'
import { ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import PassengerService from '@/services/PassengerService'
import PassengerCard from '@/components/PassengerCard.vue'
import NProgress from 'nprogress'
import { useRouter } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

const router = useRouter()
const passengers: Ref<Array<PassengerInfo>> = ref([])

const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})
NProgress.start()
watchEffect(() => {
  PassengerService.getEvent(5, props.page)
    .then((response) => {
      passengers.value = response.data
    })
    .catch(() => {
      router.push({ name: 'NetworkError' })
    })
    .finally(() => {
      NProgress.done()
    })
})
</script>

<template>
  <main class="container">
    <PassengerCard
      v-for="passenger in passengers"
      :key="passenger.id"
      :passenger="passenger"
    ></PassengerCard>
  </main>
</template>
