<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '@/data.json'
const route = useRoute()

const destinationId = computed(() => {
  const id = route.params.id
  if (Array.isArray(id)) {
    throw new Error(`"route.params.id" only accepts string, and not string[]. You actually got "${route.params.id}".`)
  }
  return parseInt(id)
})

const destination = computed(() => {
  const destination = sourceData.destinations.find(
    destination => destination.id === destinationId.value
  )
  if (destination)
  return destination
})
</script>

<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
