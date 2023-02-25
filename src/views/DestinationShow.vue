<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '@/data.json'
const route = useRoute()

interface Props {
  id: number,
}

const props = defineProps<Props>()

const destination = computed(() => {
  const destination = sourceData.destinations.find(
    destination => destination.id === props.id
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
