<template>
  <div class="bg-gradient-to-b from-orange-50 via-white to-amber-50 py-16 px-4 text-center">
    <h1 class="text-4xl font-extrabold text-amber-700 mb-4">
      Bienvenue sur Adopta'Compagnon 🐾
    </h1>
    <p class="text-lg text-gray-700 max-w-2xl mx-auto mb-6 leading-relaxed">
      Notre mission est simple : aider les animaux abandonnés à trouver un foyer aimant.
      Découvrez nos refuges partenaires, parcourez les profils de nos petits compagnons à quatre pattes
      et laissez-vous toucher par leur histoire. ❤️
    </p>

    <router-link
      to="/animals"
      class="inline-block mt-4 px-6 py-3 bg-amber-600 text-white font-semibold rounded-full shadow-md hover:bg-amber-700 transition"
    >
      Voir les animaux à adopter
    </router-link>

    <div class="mt-14 grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto text-left">
      <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-orange-100">
        <h2 class="text-xl font-bold text-orange-600 mb-2">🌿 Adoption responsable</h2>
        <p class="text-sm text-gray-600 leading-relaxed">
          Chaque adoption est accompagnée d’un suivi pour garantir le bien-être de l’animal, à court et long terme.
        </p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-green-100">
        <h2 class="text-xl font-bold text-green-600 mb-2">🏡 Refuges partenaires</h2>
        <p class="text-sm text-gray-600 leading-relaxed">
          Nos structures partenaires sont soigneusement sélectionnées en Normandie pour leur engagement et leur éthique.
        </p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition border border-pink-100">
        <h2 class="text-xl font-bold text-pink-600 mb-2">❤️ Des animaux à aimer</h2>
        <p class="text-sm text-gray-600 leading-relaxed">
          Chiens, chats, lapins... tous attendent une seconde chance et un humain pour les aimer.
        </p>
      </div>
    </div>
  </div>
</template>
