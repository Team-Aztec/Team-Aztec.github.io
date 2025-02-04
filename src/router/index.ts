import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Competitions from '@/views/Competitions.vue'
import Stats from '@/views/Stats.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/competitions',
    name: 'Competitions',
    component: Competitions,
  },
  {
    path: '/statistiques',
    name: 'Statistiques',
    component: Stats,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/home',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'is-active',
})

router.beforeEach((_to, _from, next) => {
  next()
})

export default router
