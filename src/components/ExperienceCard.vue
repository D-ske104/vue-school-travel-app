<script setup lang="ts">
import { defineProps } from 'vue'
import { Experience } from '@/interfaces/experience'

interface Props {
  experience: Experience
}
const props = defineProps<Props>()

const experienceImgUrl: string = await import (`~/images/${props.experience.image}`)
</script>

<template>
  <div class="class">
    <img :src="experienceImgUrl" :alt="props.experience.name">
    <span class="card__text">
      {{ props.experience.name }}
    </span>
  </div>
</template>