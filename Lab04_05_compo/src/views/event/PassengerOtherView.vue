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
    <p>Other view</p>
  </div>
</template>
