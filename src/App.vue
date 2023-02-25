<script setup lang="ts">
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<template>
  <TheNavigation/>
  <div class="container">
    <router-view :key="$route.path"></router-view>
  </div>
</template>
