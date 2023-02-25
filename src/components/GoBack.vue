<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
  <button @click="router.back()">go back</button>
</template>