import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Brazil from '@/views/Brazil.vue'
import Hawaii from '@/views/Hawaii.vue'
import Jamaica from '@/views/Jamaica.vue'
import Panama from '@/views/Panama.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/brazil', name: 'brazil', component: Brazil},
  {path: '/hawaii', name: 'Hawaii', component: Hawaii},
  {path: '/jamaica', name: 'Jamaica', component: Jamaica},
  {path: '/panama', name: 'Panama', component: Panama},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
