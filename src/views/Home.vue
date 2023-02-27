<script setup lang="ts">
import { reactive } from 'vue';
import sourceData from '@/data.json'
import { Destination } from '@/interfaces/destination'
const destinations = reactive(sourceData.destinations)
const destinationImages: Record<string, string | undefined> = import.meta.glob(`~/images/*.jpg`, {eager: true})
const destinationImgUrl = (destination: Destination) => {
  const image = destinationImages[`./images/${destination.image}`]
  return image ? image : ''
}
debugger
</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id, slug: destination.slug}}"
      >
        <h2
          v-text="destination.name"
        ></h2>
        <img
          :src="destinationImgUrl(destination)"
          :alt="destination.name"
        >
      </router-link>
    </div>
  </div>
</template>
