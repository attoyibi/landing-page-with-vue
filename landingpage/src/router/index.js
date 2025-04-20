import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import DashboardLayout from '@/layouts//DashboardLayout.vue'

import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import Products from '../views/Products.vue'
import NotFound from '../views/NotFound.vue'
import LoginPage from '../views/LoginPage.vue'
import AboutView from '../views/AboutView.vue'
import Profile from '../views/ProfileView.vue'
import ContactView from '../views/ContactView.vue'

// Simulasi fungsi autentikasi
const isAuthenticated = () => {
  return localStorage.getItem('auth') === 'true' // Simulasi autentikasi
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView,
        },
        {
          path: 'login',
          name: 'login',
          component: LoginPage,
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/Products.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: AboutView, // Lazy-loading bisa dilakukan jika diperlukan
        },
        {
          path: 'contact',
          name: 'contact',
          component: ContactView, // Lazy-loading bisa dilakukan jika diperlukan
        },
      ],
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        { path: '', name: 'dashboard', component: Dashboard },
        { path: 'profile', name: 'profile', component: Profile }
      ],
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*', // Catch-all untuk halaman yang tidak ditemukan
      name: 'not-found',
      component: NotFound,
    },
  ],
})

//  Route Guard untuk Private Route
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    alert(' Anda harus login terlebih dahulu')
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
