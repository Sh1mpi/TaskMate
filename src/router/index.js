import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Add from '@/views/Add.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/add',
    component: Add
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
