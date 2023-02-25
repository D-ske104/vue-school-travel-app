<script setup lang="ts">
import { computed, defineProps } from 'vue';
import sourceData from '@/data.json'
interface Props {
  id: number
  experienceSlug: string
}
const props = defineProps<Props>()
const experience = computed(()=>{
  const experience = sourceData.destinations.find(
    destination => destination.id === props.id
  )
  if (experience === undefined) {
    throw new Error("experience is undefined")
  }
  return experience
})
</script>

<template>
  <section>
    <h1>{{ experience.name }}</h1>
    <img :src="`/images/${experience.image}`" :alt="experience.name">
    <p>{{ experience.description }}</p>
  </section>
</template>