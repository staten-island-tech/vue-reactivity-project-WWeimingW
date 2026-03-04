import { createRouter, createWebHistory } from 'vue-router'
import OptionsMenus from '../views/OptionsMenus.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/option',
      name: 'Option',
      component: OptionsMenus,
    },
  ],
})

export default router
