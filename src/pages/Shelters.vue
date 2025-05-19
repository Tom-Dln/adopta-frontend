<template>
  <div class="max-w-4xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6 text-center">Nos refuges partenaires</h1>

    <div class="space-y-6">
      <div
        v-for="shelter in shelters"
        :key="shelter.id"
        class="bg-white shadow-md rounded-lg p-6"
      >
        <h2 class="text-xl font-semibold text-blue-600">{{ shelter.name }}</h2>
        <p class="text-gray-600">{{ shelter.address }}</p>
        <p class="text-gray-500 text-sm">📞 {{ shelter.phone }}</p>
        <p class="text-gray-500 text-sm">✉️ {{ shelter.contact_email }}</p>
        <a
          v-if="shelter.website"
          :href="`https://${shelter.website}`"
          class="text-sm text-blue-500 hover:underline"
          target="_blank"
        >Visiter le site</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const shelters = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:1337/api/shelters')
  shelters.value = res.data.data
})
</script>
