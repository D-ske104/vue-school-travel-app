<script setup lang="ts">
import { reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { Destination } from '@/classes/destination';
const route = useRoute()
let destination: Destination = reactive(new Destination())
// FIXME:
// 壊れている
const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}`)
const data: Destination = await response.json()
destination = data
</script>

<template>
  <section>
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
