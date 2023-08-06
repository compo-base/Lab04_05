<template>
  <RouterLink :to="{ name: 'passenger-detail', params: { id: passenger?.id } }">
    <div class="passenger-card">
      <h3>{{ passenger?.first_name }} {{ passenger?.last_name }}</h3>
      <p>{{ passenger?.email }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { type PropType } from 'vue'
import type { PassengerInfo } from '@/type'

// Define props for the component
const props = defineProps({
  passenger: {
    type: Object as PropType<PassengerInfo>,
    required: true
  }
})
</script>

<style scoped>
.passenger-card {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  color: rgb(35, 169, 78);
}
</style>
