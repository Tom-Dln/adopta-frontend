// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AnimalsList from '../pages/AnimalsList.vue'
import AnimalDetail from '../pages/AnimalDetail.vue'
import AdoptionForm from '../pages/AdoptionForm.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/animals', name: 'AnimalsList', component: AnimalsList },
  { path: '/animals/:id', name: 'AnimalDetail', component: AnimalDetail },
  { path: '/adopt/:id', name: 'AdoptionForm', component: AdoptionForm }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
