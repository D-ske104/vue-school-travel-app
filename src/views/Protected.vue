<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const username = ref(window.user);
const logout = () => {
  window.user = undefined
  router.push({name: 'Home'})
}
</script>

<template>
  <div>
    <h1>Greetings, {{ username }}</h1>
    <button @click="logout">Logout</button>
  </div>
</template>
