<template>
  <div class="bg-white rounded-xl shadow-md overflow-hidden hover:scale-[1.01] transition transform">
    <img v-if="animal.photo?.url" :src="getImageUrl(animal.photo)" alt="photo de l'animal"
      class="h-48 w-full object-cover" />
    <div class="p-4">
      <h2 class="text-xl font-bold text-gray-800">{{ animal.name }}</h2>
      <p class="text-gray-600 text-sm">{{ animal.breed }}</p>
      <p class="text-gray-500 text-xs mt-2">Taille : {{ animal.size }}</p>
      <router-link :to="`/animals/${animal.documentId}`" class="inline-block mt-4 text-blue-600 hover:underline">
        Voir la fiche →
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  animal: Object
})

const getImageUrl = (photo) => {
  return photo.url.startsWith('http')
    ? photo.url
    : `http://localhost:1337${photo.formats?.small?.url || photo.url}`
}
</script>
