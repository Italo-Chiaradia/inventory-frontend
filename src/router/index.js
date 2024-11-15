import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import LoginUserView from '@/views/LoginUserView.vue';
import RegisterUserView from '@/views/RegisterUserView.vue';
import NewProductView from '@/views/NewProductView.vue';
import UpdateProductView from '@/views/UpdateProductView.vue';

const routes = [
  {
    path: "/login",
    name: 'login',
    component: LoginUserView
  },
  {
    path: "/register",
    name: 'register',
    component: RegisterUserView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {requiresAuth: true}
  },
  {
    path: '/new-product',
    name: 'new-product',
    component: NewProductView,
    meta: {requiresAuth: true}
  },
  {
    path: '/update-product/:id',
    name: 'update-product',
    component: UpdateProductView,
    meta: {requiresAuth: true}
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
