import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/MenuView.vue')
  },
  {
    path: '/menueng',
    name: 'menueng',
    component: () => import('../views/MenuengView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/abouteng',
    name: 'abouteng',
    component: () => import('../views/AboutengView.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/GalleryView.vue')
  },
  {
    path: '/galleryeng',
    name: 'galleryeng',
    component: () => import('../views/GalleryengView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/contactseng',
    name: 'contactseng',
    component: () => import('../views/ContactengView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
