<script setup lang="ts">
import TheNavigation from '@/components/TheNavigation.vue'
</script>

<template>
  <TheNavigation/>
  <div class="container">
    <router-view v-slot="{Component}">
      <transition name="moveUp" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<style lang="css">
.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  50% { opacity: 0.5; }
  100% { opacity: 1; }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-400px); }
}
/* .slide-enter-active,
.slide-leave-active{
  transition: opacity 1s, transform 1s;
}
.slide-enter-from,
.slide-leave-to{
  opacity:0;
  transform: translateX(-30%);
} */
</style>