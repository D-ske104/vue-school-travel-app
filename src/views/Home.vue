<script setup lang="ts">
  import { reactive } from 'vue';
  import sourceData from '@/data.json'
  const destinations = reactive(sourceData.destinations)
</script>

<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div class="destinations">
      <router-link
        v-for="destination in destinations"
        :key="destination.id"
        :to="{name: 'destination.show', params:{id: destination.id}}"
      >
        <h2
          v-text="destination.name"
        ></h2>
        <img
          :src="`/images/${destination.image}`"
          :alt="destination.name"
        >
      </router-link>
    </div>
  </div>
</template>
