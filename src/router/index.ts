import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import StartPage from '../views/StartPage.vue'
import Inventory from '../views/Inventory.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Start',
    component: StartPage
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
