<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Animaux à adopter 🐾</h1>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <AnimalCard v-for="animal in animals" :key="animal.id" :animal="animal" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import AnimalCard from '../components/AnimalCard.vue'

const animals = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:1337/api/animals?populate=*')
  animals.value = res.data.data
})
</script>
