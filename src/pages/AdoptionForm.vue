<template>
  <div class="bg-gradient-to-b from-white to-blue-50 min-h-screen py-12 px-4">
    <div class="max-w-5xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-blue-600 mb-4">
        Formulaire d’adoption pour {{ animal?.name || '...' }}
      </h1>
      <p class="text-lg text-gray-700 max-w-2xl mx-auto">
        Remplissez les informations ci-dessous pour soumettre votre demande d’adoption.
        Le refuge vous contactera rapidement pour échanger sur votre futur compagnon 🐾
      </p>
    </div>

    <Loader v-if="loading" />

    <div v-else class="max-w-3xl mx-auto px-4">
      <form @submit.prevent="submitForm" class="space-y-4 bg-white shadow-md rounded-xl p-6">
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

        <button
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Envoyer la demande
        </button>

        <p v-if="submitted" class="text-green-600 mt-4 font-semibold">
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
  @apply w-full border border-gray-300 rounded px-3 py-2 mt-1;
}
</style>
