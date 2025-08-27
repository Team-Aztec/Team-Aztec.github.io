import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Competitions from '@/views/Competitions.vue'
import Stats from '@/views/Stats.vue'
import History from '@/views/History.vue'
import Organisation from '@/views/Organisation.vue'
import Tournaments from '@/views/Tournaments.vue'
import League from '@/views/League.vue'

const DEFAULT_TITLE = 'Aztec France'

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
    path: '/tournois',
    name: 'Tournois',
    component: Tournaments,
  },
  {
    path: '/aztec-circuit-national',
    name: 'Aztec Circuit National',
    component: League,
    meta: {
      title: 'Aztec Circuit National -',
    },
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

  document.title = `${_to.meta.title ?? ''}${DEFAULT_TITLE}`
})

export default router
