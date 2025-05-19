<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Adopter {{ animal?.name || '...' }}</h1>

    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label class="block font-medium">Nom complet</label>
        <input v-model="form.full_name" type="text" class="input" required />
      </div>
      <div>
        <label class="block font-medium">Email</label>
        <input v-model="form.email" type="email" class="input" required />
      </div>
      <div>
        <label class="block font-medium">Téléphone</label>
        <input v-model="form.phone" type="text" class="input" required />
      </div>
      <div>
        <label class="block font-medium">Message</label>
        <textarea v-model="form.message" rows="4" class="input" required></textarea>
      </div>

      <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Envoyer la demande
      </button>

      <p v-if="submitted" class="text-green-600 mt-4 font-semibold">
        Votre demande a bien été envoyée, merci !
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const animal = ref(null)
const submitted = ref(false)

const form = ref({
  full_name: '',
  email: '',
  phone: '',
  message: '',
  request_status: 'pending', // valeur par défaut côté Strapi
  animal: null
})

onMounted(async () => {
  // Cherche l'animal par documentId
  const res = await axios.get(
    `http://localhost:1337/api/animals?filters[documentId][$eq]=${route.params.documentId}&populate=*`
  )
  animal.value = res.data.data[0]
  form.value.animal = animal.value?.id
})

const submitForm = async () => {
  try {
    await axios.post('http://localhost:1337/api/adoption-requests', {
      data: form.value
    })
    submitted.value = true
    form.value.full_name = ''
    form.value.email = ''
    form.value.phone = ''
    form.value.message = ''
  } catch (error) {
    console.error('Erreur envoi de la demande', error)
  }
}
</script>

<style scoped>
.input {
  @apply w-full border border-gray-300 rounded px-3 py-2 mt-1;
}
</style>
