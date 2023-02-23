<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '@/data.json'
const route = useRoute()
const destinationId = computed(()=>{
  return parseInt(route.params.id as string)
})
const destination = computed(()=>{
  const result = sourceData.destinations.find(destination => destination.id === destinationId.value )
  if (result === undefined) {
    throw new Error("invalid destination!")
  }
  return result
})
</script>

<template>
  <h1>{{ destination.name }}</h1>
  <h2>Hello Destination {{ destinationId }}</h2>
</template>
