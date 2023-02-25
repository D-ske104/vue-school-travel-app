<script setup lang="ts">
import { computed, defineProps } from 'vue';
import sourceData from '@/data.json'
interface Props {
  id: number
  slug: string
  experienceSlug: string
}
const props = defineProps<Props>()
const destination = computed(()=>{
  const destination = sourceData.destinations.find(
    destination => destination.id === props.id
  )
  if (destination === undefined) {
    throw new Error("destination is undefined")
  }
  return destination
})
const experience = computed(()=>{
  const experience = destination.value.experiences.find(
    experience => experience.slug === props.experienceSlug
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