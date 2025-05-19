// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import AnimalsList from '../pages/AnimalsList.vue'
import AnimalDetail from '../pages/AnimalDetail.vue'
import AdoptionForm from '../pages/AdoptionForm.vue'
import Shelters from '../pages/Shelters.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/animals', name: 'AnimalsList', component: AnimalsList },
  { path: '/animals/:documentId', name: 'AnimalDetail', component: AnimalDetail },
  { path: '/adopt/:id', name: 'AdoptionForm', component: AdoptionForm },
  { path: '/shelters', name: 'Shelters', component: Shelters }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
