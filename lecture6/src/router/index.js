import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import OnlyProfit from '@/views/OnlyProfit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/about',
      name: 'About',
      component: About
    },

    {
      path: '/profit',
      name: 'OnlyProfit',
      component: OnlyProfit
    }
  ]
})

export default router
