<template>
  <div class="bg-gradient-to-b from-blue-50 to-white py-12 px-4 text-center">
    <h1 class="text-4xl font-extrabold text-blue-600 mb-4">Bienvenue sur Adopta'Compagnon 🐾</h1>
    <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
      Notre mission est simple : aider les animaux abandonnés à trouver un foyer aimant.
      Découvrez nos refuges partenaires, parcourez les profils de nos petits compagnons à quatre pattes
      et laissez-vous toucher par leur histoire. ❤️
    </p>
    <router-link
      to="/animals"
      class="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
    >
      Voir les animaux disponibles
    </router-link>

    <div class="mt-12 grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto text-left">
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-xl font-bold text-blue-500 mb-2">🌟 Adoption responsable</h2>
        <p class="text-sm text-gray-600">
          Chaque adoption est accompagnée d’un suivi pour garantir le bien-être de l’animal.
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-xl font-bold text-blue-500 mb-2">🏡 Refuges partenaires</h2>
        <p class="text-sm text-gray-600">
          Nous travaillons avec des refuges de confiance situés en Normandie.
        </p>
      </div>
      <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h2 class="text-xl font-bold text-blue-500 mb-2">❤️ Animaux à aimer</h2>
        <p class="text-sm text-gray-600">
          Chiens, chats, lapins... ils n’attendent qu’une seconde chance avec vous.
        </p>
      </div>
    </div>
  </div>
</template>
