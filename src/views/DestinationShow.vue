<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { Destination } from '@/classes/destination';
const route = useRoute()

let destination = ref<Destination>()
const initData = async () => {
  const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}.json`)
  const data: Destination = await response.json()
  destination.value = data
}
watch(
  ()=>route.params,
  initData,
  { immediate: true }
)
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
