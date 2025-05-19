<template>
  <div class="bg-gradient-to-b from-white to-blue-50 min-h-screen py-12 px-4">
    <div class="max-w-5xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-blue-600 mb-4">Nos refuges partenaires 🏡</h1>
      <p class="text-lg text-gray-700 max-w-2xl mx-auto">
        Découvrez les structures qui œuvrent chaque jour pour le bien-être des animaux.
        Ce sont grâce à ces refuges que l'aventure Adopta'Compagnon est possible.
      </p>
    </div>

    <Loader v-if="loading" />

    <div v-else class="max-w-4xl mx-auto space-y-6">
      <div
        v-for="shelter in shelters"
        :key="shelter.id"
        class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
      >
        <h2 class="text-xl font-semibold text-blue-600 mb-1">{{ shelter.name }}</h2>
        <p class="text-gray-600">{{ shelter.address }}</p>
        <p class="text-gray-500 text-sm mt-2">📞 {{ shelter.phone }}</p>
        <p class="text-gray-500 text-sm">✉️ {{ shelter.contact_email }}</p>
        <a
          v-if="shelter.website"
          :href="`https://${shelter.website}`"
          class="inline-block mt-2 text-sm text-blue-500 hover:underline"
          target="_blank"
        >Visiter le site</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Loader from '../components/Loader.vue'

const shelters = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:1337/api/shelters')
    shelters.value = res.data.data
  } catch (e) {
    console.error('Erreur chargement refuges :', e)
  } finally {
    loading.value = false
  }
})
</script>
