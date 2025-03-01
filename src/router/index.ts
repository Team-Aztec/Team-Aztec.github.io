import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Competitions from '@/views/Competitions.vue'
import Stats from '@/views/Stats.vue'
import History from '@/views/History.vue'

const routes = [
  {
    path: '/',
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
    path: '/historique',
    name: 'Historique',
    component: History,
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
