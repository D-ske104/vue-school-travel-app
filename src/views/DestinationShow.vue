<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '@/data.json'
import ExperienceCard from '@/components/ExperienceCard.vue';
const route = useRoute()

interface Props {
  id: number,
}

const props = defineProps<Props>()

const destination = computed(() => {
  const destination = sourceData.destinations.find(
    destination => destination.id === props.id
  )
  if (destination === undefined) {
    throw new Error("destination is undefined")
  }
  return destination
})
</script>

<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
  <section class="experiences">
    <h2>Top Experiences in {{ destination.name }}</h2>
    <router-link
      v-for="experience in destination.experiences"
      :key="experience.slug"
      :to="{name: 'experience.show', params: {experienceSlug: experience.slug}}"
      v-bind="$attrs"
    >
      <ExperienceCard
        :experience="experience"
      ></ExperienceCard>
    </router-link>
    <router-view />
  </section>
</template>
