<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { RouterLinkProps } from 'vue-router'

interface Props extends RouterLinkProps {
  to: string
}

const props = defineProps<Props>()

const isExternal = computed(() => {
  return typeof props.to === "string" && props.to.startsWith('http')
})

</script>

<template>
  <a
    v-if="isExternal"
    :href="props.to"
    target="_blank"
    rel="noopener"
    class="external-link"
    ><slot></slot></a>
  <router-link v-else v-bind="$attrs" :to="to"><slot></slot></router-link>
</template>
