import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Competitions from '@/views/Competitions.vue'
import Stats from '@/views/Stats.vue'
import Tournament from '@/views/Tournament.vue'
import Cups from '@/views/Cups.vue'
import Arena from '@/views/Arena.vue'

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
    path: '/aztec-cups',
    name: 'Aztec Cups',
    component: Cups,
  },
  {
    path: '/aztec-arena',
    name: 'Aztec Arena',
    component: Arena,
  },
  // {
  //   path: '/tournament/:tournamentId',
  //   name: 'Tournament',
  //   component: Tournament,
  // },

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
