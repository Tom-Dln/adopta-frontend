<template>
  <div
    class="bg-white rounded-2xl shadow-sm hover:shadow-lg transform hover:scale-[1.015] transition overflow-hidden border border-orange-100"
  >
    <img
      v-if="animal.photo?.url"
      :src="getImageUrl(animal.photo)"
      alt="photo de l'animal"
      class="h-48 w-full object-cover"
    />
    <div class="p-4">
      <h2 class="text-xl font-semibold text-amber-700 mb-1">{{ animal.name }}</h2>
      <p class="text-sm text-gray-700">{{ animal.breed }}</p>
      <p class="text-xs text-gray-500 mt-1">Taille : {{ animal.size }}</p>

      <router-link
        :to="`/animals/${animal.documentId}`"
        class="inline-block mt-4 px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-full shadow-sm hover:bg-amber-700 hover:shadow-md transition"
      >
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
