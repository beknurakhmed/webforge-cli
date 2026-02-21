import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import PostDetail from './pages/PostDetail.vue'
import Category from './pages/Category.vue'
import About from './pages/About.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/post/:id', component: PostDetail },
  { path: '/category/:slug', component: Category },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
