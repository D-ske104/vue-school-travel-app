import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'

const routes: RouteRecordRaw[] = [
  {path: '/', name: 'Home', component: Home},
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: ()=>import('@/views/DestinationShow.vue'),
    props: (route: {params: {id: string, slug?: string}}) => ({...route.params, id: parseInt(route.params.id)}), // FIXME
    beforeEnter(to, _from){
      const exists = sourceData.destinations.find(
        destination => {
          if (Array.isArray(to.params.id)) {
            throw new Error("id is not Array.")
          }
          return destination.id === parseInt(to.params.id)
        }
      )
      if (!exists) return {
        name: 'NotFound',
        params: { pathMatch: to.path.split('/').slice(1) },
        query: to.query,
        hash: to.hash,
      }
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        component: ()=>import('@/views/ExperienceShow.vue'),
        props: (route: {params: {id: string, slug?: string}}) => ({...route.params, id: parseInt(route.params.id)}) // FIXME
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: ()=>import('@/views/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || {top:0}
  }
})

// router.beforeEach(async(to, _from) =>{
//   const exists = sourceData.destinations.find(
//     destination => {
//       if (Array.isArray(to.params.id)) {
//         throw new Error("id is not Array.")
//       }
//       destination.id === parseInt(to.params.id)
//     }
//   )
//   if (!exists) return {name: 'NotFound'}
// })

export default router
