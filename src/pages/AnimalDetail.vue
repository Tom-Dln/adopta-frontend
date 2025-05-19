<template>
  <div class="bg-gradient-to-b from-amber-50 via-white to-orange-50 min-h-screen py-16 px-4">
    <div class="max-w-5xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-amber-700 mb-4">
        Fiche de {{ animal?.name || 'l’animal' }}
      </h1>
      <p class="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Voici toutes les informations sur ce compagnon à quatre pattes prêt à rejoindre votre foyer 🐾
      </p>
    </div>

    <Loader v-if="loading" />

    <div v-else-if="animal" class="max-w-4xl mx-auto px-4">
      <div class="bg-white shadow-md rounded-2xl overflow-hidden border border-orange-100">
        <img
          v-if="animal.photo?.url"
          :src="getImageUrl(animal.photo)"
          alt="photo de l'animal"
          class="w-full h-72 object-cover"
        />
        <div class="p-6">
          <h2 class="text-3xl font-semibold text-amber-700 mb-2">{{ animal.name }}</h2>
          <p class="text-gray-700 mb-6 italic">{{ animal.description }}</p>

          <div class="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
            <div><strong>Race :</strong> {{ animal.breed }}</div>
            <div><strong>Âge :</strong> {{ animal.age }} ans</div>
            <div><strong>Taille :</strong> {{ animal.size }}</div>
            <div><strong>Stérilisé :</strong> {{ animal.sterilized ? 'Oui' : 'Non' }}</div>
            <div><strong>Type :</strong> {{ animal.type?.name }}</div>
            <div><strong>Refuge :</strong> {{ animal.shelter?.name }}</div>
          </div>

          <router-link
            :to="`/adopt/${animal.documentId}`"
            class="inline-block mt-2 px-6 py-2 bg-amber-600 text-white text-sm font-medium rounded-full shadow hover:bg-amber-700 hover:shadow-md transition"
          >
            💌 Adopter {{ animal.name }}
          </router-link>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-500">
      <p>Animal introuvable 😿</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import Loader from '../components/Loader.vue'

const route = useRoute()
const animal = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await axios.get(
      `http://localhost:1337/api/animals?filters[documentId][$eq]=${route.params.documentId}&populate=*`
    )
    animal.value = res.data.data[0] || null
  } catch (error) {
    console.error('Erreur récupération animal :', error)
  } finally {
    loading.value = false
  }
})

const getImageUrl = (photo) => {
  return photo?.url?.startsWith('http')
    ? photo.url
    : `http://localhost:1337${photo.formats?.small?.url || photo.url}`
}
</script>
