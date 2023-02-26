import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import sourceData from '@/data.json'

const routes: RouteRecordRaw[] = [
  {path: '/', name: 'Home', component: Home},
  {
    path: '/protected',
    name: 'protected',
    component: () => import('@/views/Protected.vue'),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    path: '/invoices',
    name: 'invoices',
    component: () => import('@/views/Invoices.vue'),
    meta: {
      requiresAuth: true,
    }
  },
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
    return savedPosition || new Promise(resolve=>{
      setTimeout(() => resolve({top:0, behavior: 'smooth'}), 300)
    })
  }
})

router.beforeEach((to, from)=>{
  if(to.meta.requiresAuth && !window.user) {
    // need to login if not already logged in
    return {name: 'login', query: { redirect: to.fullPath }}
  }
})

export default router
