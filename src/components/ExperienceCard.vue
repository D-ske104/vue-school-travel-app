<script setup lang="ts">
import { defineProps } from 'vue'
import { Experience } from '@/interfaces/experience'

interface Props {
  experience: Experience
}
const props = defineProps<Props>()
</script>

<template>
  <div class="class">
    <img :src="`/images/${props.experience.image}`" :alt="props.experience.name">
    <span class="card__text">
      {{ props.experience.name }}
    </span>
  </div>
</template>