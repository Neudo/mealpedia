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
      path: '/random',
      name: 'random',
      component: () => import('../views/RandomView.vue')
    },
    {
      path: '/name',
      name: 'name',
      component: () => import('../views/NameView.vue')
    },
    {
      path: '/ingredient',
      name: 'ingredient',
      component: () => import('../views/IngredientView.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/zone',
      name: 'aera',
      component: () => import('../views/AeraView.vue')
    },

  ]
})

export default router
