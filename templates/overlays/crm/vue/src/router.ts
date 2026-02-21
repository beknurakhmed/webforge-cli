import { createRouter, createWebHistory } from 'vue-router'
import DashboardHome from './pages/DashboardHome.vue'
import Contacts from './pages/Contacts.vue'
import Deals from './pages/Deals.vue'
import Settings from './pages/Settings.vue'

const routes = [
  { path: '/', component: DashboardHome },
  { path: '/contacts', component: Contacts },
  { path: '/deals', component: Deals },
  { path: '/settings', component: Settings },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
