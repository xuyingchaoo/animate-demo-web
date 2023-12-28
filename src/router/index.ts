/*
 * @Author: xuyingchao
 * @Date: 2023-11-28 14:54:40
 * @LastEditors: xuyingchao
 * @LastEditTime: 2023-12-27 11:06:54
 * @Descripttion: 
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/scrollmagic',
      name: 'scrollmagic',
      component: () => import('../views/scrollmagic.vue')
    },
    {
      path: '/Animate',
      name: 'Animate',
      component: () => import('../views/Animate.vue')
    },
    {
      path: '/wow',
      name: 'wow',
      component: () => import('../views/wow.vue')
    },
    {
      path: '/aos',
      name: 'aos',
      component: () => import('../views/aos.vue')
    },
    {
      path: '/hover',
      name: 'hover',
      component: () => import('../views/hover.vue')
    },
    {
      path: '/GSAP',
      name: 'GSAP',
      component: () => import('../views/GSAP.vue')
    }
  ]
})

export default router
