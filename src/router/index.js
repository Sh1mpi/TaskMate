import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Add from '@/views/Add.vue'
import Edit from '@/views/Edit.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/add',
    component: Add
  },
  {
    path: '/tasks/:id',
    component: Edit
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
