<template>
  <div class="bg-gradient-to-b from-amber-50 via-white to-orange-50 min-h-screen py-16 px-4">
    <div class="max-w-5xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-amber-700 mb-4">
        Formulaire d’adoption pour {{ animal?.name || '...' }}
      </h1>
      <p class="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
        Remplissez les informations ci-dessous pour soumettre votre demande.
        Le refuge vous contactera rapidement pour échanger avec vous 🐾
      </p>
    </div>

    <Loader v-if="loading" />

    <div v-else class="max-w-3xl mx-auto px-4">
      <form @submit.prevent="submitForm" class="space-y-5 bg-white shadow-md rounded-2xl p-6 border border-orange-100">
        <div>
          <label class="block font-medium text-gray-700">Nom complet</label>
          <input v-model="form.full_name" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-medium text-gray-700">Email</label>
          <input v-model="form.email" type="email" class="input" required />
        </div>
        <div>
          <label class="block font-medium text-gray-700">Téléphone</label>
          <input v-model="form.phone" type="text" class="input" required />
        </div>
        <div>
          <label class="block font-medium text-gray-700">Message</label>
          <textarea v-model="form.message" rows="4" class="input" required></textarea>
        </div>

        <button
          type="submit"
          class="bg-amber-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-amber-700 hover:shadow-md transition"
        >
          📩 Envoyer la demande
        </button>

        <p
          v-if="submitted"
          class="text-green-600 mt-4 font-semibold bg-green-50 border border-green-200 px-4 py-2 rounded"
        >
          ✅ Votre demande a bien été envoyée, merci pour votre engagement !
        </p>
      </form>
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
const submitted = ref(false)

const form = ref({
  full_name: '',
  email: '',
  phone: '',
  message: '',
  request_status: 'pending',
  animal: null
})

onMounted(async () => {
  try {
    const res = await axios.get(
      `http://localhost:1337/api/animals?filters[documentId][$eq]=${route.params.documentId}&populate=*`
    )
    animal.value = res.data.data[0]
    form.value.animal = animal.value?.id
  } catch (error) {
    console.error('Erreur récupération animal', error)
  } finally {
    loading.value = false
  }
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
  @apply w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-amber-400;
}
</style>
