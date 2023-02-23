<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import sourceData from '@/data.json'
const route = useRoute()
const destinationId = computed(()=>{
  // FIXME:
  // parseIntできない場合のケアが出来ていない。
  // const result = route.params.id.test(/^\d+$/) とかでよさそう。
  // result: false ならば、 404とかに飛ばす必要がありそう。
  return parseInt(route.params.id as string)
})
const destination = computed(()=>{
  return sourceData.destinations.find(destination => destination.id === destinationId.value )
})
</script>

<template>
  <h1>{{ destination.value.name }}</h1>
  <h2>Hello Destination {{ destinationId }}</h2>
</template>
