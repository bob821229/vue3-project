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
      path: '/WeatherOutlook',
      name: 'WeatherOutlook',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WeatherOutlookView.vue'),
    },
    {
      path: '/FutureRainfallEstimationView',
      name: 'FutureRainfallEstimationView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/FutureRainfallEstimationView.vue'),
    },
    {
      path: '/EffectiveRainfallView',
      name: 'EffectiveRainfallView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EffectiveRainfallView.vue'),
    },
    {
      path: '/EchartsView',
      name: 'EchartsView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EchartsView.vue'),
    },
    {
      path: '/IrrigationPlanTendaysView',
      name: 'IrrigationPlanTendaysView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IrrigationPlanTendaysView.vue'),
    }
  ]
})

export default router
