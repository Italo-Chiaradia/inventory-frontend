import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import LoginUserView from '@/views/LoginUserView.vue';
import RegisterUserView from '@/views/RegisterUserView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {requiresAuth: true}
  },
  {
    path: "/login",
    name: 'login',
    component: LoginUserView
  },
  {
    path: "/register",
    name: 'register',
    component: RegisterUserView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem(":inventory-user")
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({name: 'login'})
  } else {
    next()
  }
})

export default router
