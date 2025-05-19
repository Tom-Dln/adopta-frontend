<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <router-link to="/" class="text-xl font-bold text-blue-600">Adopta'Compagnon</router-link>
      <div class="space-x-4 text-gray-700 font-medium">
        <router-link to="/" class="hover:text-blue-500">Accueil</router-link>
        <router-link to="/animals" class="hover:text-blue-500">Animaux</router-link>
        <router-link to="/shelters" class="hover:text-blue-500">Refuges</router-link>
      </div>
    </div>
  </nav>
</template>
