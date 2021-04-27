import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import Inventory from '../views/Inventory.vue'
import { store } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Start',
    component: StartPage
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory,
    async beforeEnter (to, from, next) {
      if (store.getters.enableMove) {
        next()
      }
      else {
        next({ path: '/'})
      }
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
