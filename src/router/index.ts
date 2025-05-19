import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Competitions from '@/views/Competitions.vue'
import Stats from '@/views/Stats.vue'
import History from '@/views/History.vue'
import Organisation from '@/views/Organisation.vue'

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
    path: '/organisation',
    name: 'Organisation',
    component: Organisation,
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
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

router.beforeEach((_to, _from, next) => {
  next()
})

export default router
