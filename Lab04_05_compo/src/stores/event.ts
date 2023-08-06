import type { PassengerInfo } from '@/type'
import { defineStore } from 'pinia'

export const useEventStore = defineStore('event', {
  state: () => ({
    event: null as PassengerInfo | null
  }),
  actions: {
    setEvent(event: PassengerInfo) {
      this.event = event
    }
  }
})
