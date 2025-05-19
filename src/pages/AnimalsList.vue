<template>
  <div class="bg-gradient-to-b from-white to-blue-50 min-h-screen py-12 px-4">
    <div class="max-w-5xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-blue-600 mb-4">Animaux à adopter 🐾</h1>
      <p class="text-lg text-gray-700 max-w-2xl mx-auto">
        Découvrez ici tous les animaux actuellement disponibles à l'adoption. Nos compagnons n'attendent
        qu'une chose : un foyer chaleureux, un peu d'amour, et une nouvelle vie à vos côtés.
      </p>
    </div>

    <Loader v-if="loading" />

    <div v-else class="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4">
      <AnimalCard
        v-for="animal in animals"
        :key="animal.id"
        :animal="animal"
      />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import AnimalCard from '../components/AnimalCard.vue'
import Loader from '../components/Loader.vue'

const animals = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:1337/api/animals?populate=*')
    animals.value = res.data.data
  } catch (e) {
    console.error('Erreur chargement animaux :', e)
  } finally {
    loading.value = false
  }
})
</script>
