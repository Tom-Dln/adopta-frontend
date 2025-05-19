<template>
  <div class="bg-gradient-to-b from-amber-50 via-white to-orange-50 min-h-screen py-16 px-4">
    <div class="max-w-5xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-amber-700 mb-4">Animaux à adopter 🐾</h1>
      <p class="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Tous ces compagnons attendent une nouvelle vie pleine d'amour, de sécurité, et d'aventures partagées.
        Faites leur connaissance et laissez votre cœur choisir.
      </p>
    </div>

    <Loader v-if="loading" />

    <div
      v-else
      class="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4"
    >
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
