<script setup lang="ts">
import type { PassengerInfo } from '@/type'
import { computed, ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import PassengerService from '@/services/PassengerService'
import PassengerCard from '@/components/PassengerCard.vue'
import NProgress from 'nprogress'
import { useRouter } from 'vue-router'
import type { AxiosResponse } from 'axios'
const eventsPerPage = ref(5)

const router = useRouter()
const passengers: Ref<Array<PassengerInfo>> = ref([])
const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

NProgress.start()
watchEffect(() => {
  PassengerService.getEvent(eventsPerPage.value, props.page)
    .then((response: AxiosResponse<PassengerInfo[]>) => {
      passengers.value = response.data
      totalEvent.value = response.headers['x-total-count']
    })
    .catch(() => {
      router.push({ name: 'NetworkError' })
    })
    .finally(() => {
      NProgress.done()
    })
})
const hasNextPages = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / eventsPerPage.value)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <main class="container">
    <div class="events-input">
      <label for="events-per-page">Events per page:</label>
      <input type="number" id="events-per-page" v-model.number="eventsPerPage" />
    </div>
    <PassengerCard
      v-for="passenger in passengers"
      :key="passenger.id"
      :passenger="passenger"
    ></PassengerCard>
    <div class="pagination">
      <RouterLink
        :to="{ name: 'passenger', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        id="page-prev"
      >
        Prev page
      </RouterLink>
      <RouterLink
        :to="{ name: 'passenger', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPages"
        id="page-next"
      >
        Next page
      </RouterLink>
    </div>
  </main>
</template>
