import { createRouter, createWebHistory } from 'vue-router'

import FullLayout from '@/layouts/LayoutsFull.vue'
import BlankLayout from '@/layouts/LayoutsBlank.vue'

import HomeView from '@/views/HomeView.vue'
import ServiceAssemblyBicycles from '@/views/ServiceAssemblyBicycles.vue'
import ServiceMaintenanceBicycles from '@/views/ServiceMaintenanceBicycles.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FullLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView
        }
      ]
    },
    {
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: '/montagem',
          name: 'Mounting',
          component: ServiceAssemblyBicycles
        },
        {
          path: '/manutencao',
          name: 'Maintenance',
          component: ServiceMaintenanceBicycles
        }
      ]
    }
  ]
})

export default router
