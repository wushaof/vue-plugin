import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/quality',
    name: 'quality',
    component: () => import('@/views/QualitySupervision.vue')
  },
  {
    path: '/weldingrail',
    name: 'weldingrail',
    component: () => import('@/views/WeldingRail.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router