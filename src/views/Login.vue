<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const route = router.currentRoute
const username = ref("")
const password = ref("")

const login = () => {
  // Auth user against API
  window.user = username.value
  const redirectPath = route.value.query.redirect || '/protected'
  if (Array.isArray(redirectPath)) {
    throw new Error('Invalid query parameter for redirect.')
  }
  router.push(redirectPath)
}
</script>

<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" name="username" type="text" class="input">
      <label for="password">Password</label>
      <input v-model="password" name="password" type="password" class="input">
      <button class="btn">Login</button>
    </form>
  </div>
</template>