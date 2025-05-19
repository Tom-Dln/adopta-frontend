<template>
  <div v-if="animal" class="max-w-4xl mx-auto px-4 py-8">
    <div class="bg-white shadow-md rounded-xl overflow-hidden">
      <img
        v-if="animal.photo?.url"
        :src="getImageUrl(animal.photo)"
        alt="photo de l'animal"
        class="w-full h-72 object-cover"
      />
      <div class="p-6">
        <h1 class="text-3xl font-bold mb-2 text-blue-600">{{ animal.name }}</h1>
        <p class="text-gray-700 mb-4 italic">{{ animal.description }}</p>
        <div class="grid grid-cols-2 gap-4 text-sm text-gray-600">
          <div><strong>Race :</strong> {{ animal.breed }}</div>
          <div><strong>Âge :</strong> {{ animal.age }} ans</div>
          <div><strong>Taille :</strong> {{ animal.size }}</div>
          <div><strong>Stérilisé :</strong> {{ animal.sterilized ? 'Oui' : 'Non' }}</div>
          <div><strong>Type :</strong> {{ animal.type?.name }}</div>
          <div><strong>Refuge :</strong> {{ animal.shelter?.name }}</div>
        </div>
        <router-link
          :to="`/adopt/${animal.id}`"
          class="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Adopter {{ animal.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const animal = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get(
      `http://localhost:1337/api/animals?filters[documentId][$eq]=${route.params.documentId}&populate=*`
    )
    animal.value = res.data.data[0] || null
  } catch (error) {
    console.error('Erreur récupération animal :', error)
  }
})

const getImageUrl = (photo) => {
  return photo?.url?.startsWith('http')
    ? photo.url
    : `http://localhost:1337${photo.formats?.small?.url || photo.url}`
}
</script>
