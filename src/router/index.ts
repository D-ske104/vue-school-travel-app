import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {path: '/', name: 'Home', component: Home},
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: ()=>import('@/views/DestinationShow.vue'),
    props: (route: {params: {id: string, slug?: string}}) => ({...route.params, id: parseInt(route.params.id)}), // FIXME
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: ()=>import('@/views/ExperienceShow.vue'),
        props: (route: {params: {id: string, slug?: string}}) => ({...route.params, id: parseInt(route.params.id)}) // FIXME
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
