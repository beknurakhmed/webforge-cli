import { createRouter, createWebHistory } from 'vue-router';
import Overview from './pages/Overview.vue';
import Analytics from './pages/Analytics.vue';
import Users from './pages/Users.vue';
import Settings from './pages/Settings.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Overview },
    { path: '/analytics', component: Analytics },
    { path: '/users', component: Users },
    { path: '/settings', component: Settings },
  ],
});
