<script setup lang="ts">
import type { PropType } from 'vue'
import type { PassengerInfo } from '@/type'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const props = defineProps({
  event: {
    type: Object as PropType<PassengerInfo>,
    required: true
  }
})
const router = useRouter()
const store = useMessageStore()
const { message } = storeToRefs(store)
function EditView() {
  store.updateMessage('update is in progress..')
  setTimeout(() => {
    store.resetMessage()
    router.push({
      name: 'passenger',
      params: {
        id: props.event?.id
      }
    })
  }, 5000)
}
</script>

<template>
  <div v-if="event" class="outside">
    <div class="detail">
      <h1>{{ event.first_name }} {{ event.last_name }}</h1>
      <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <button @click="EditView">Edit Data</button>
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
#flashMessage {
  color: blue;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 600;
}
</style>
