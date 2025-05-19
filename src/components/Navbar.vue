<template>
  <nav class="bg-white shadow-md sticky top-0 z-50 border-b border-orange-100">
    <div class="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <!-- Logo -->
      <router-link
        to="/"
        class="text-2xl font-extrabold text-amber-700 flex items-center space-x-2 tracking-tight"
      >
        <span>🐾</span>
        <span>Adopta'Compagnon</span>
      </router-link>

      <!-- Menu -->
      <div class="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
        <router-link
          to="/"
          :class="linkClass('/')"
        >Accueil</router-link>

        <router-link
          to="/animals"
          :class="linkClass('/animals')"
        >Animaux</router-link>

        <router-link
          to="/shelters"
          :class="linkClass('/shelters')"
        >Refuges</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const linkClass = (path) => {
  return [
    "relative pb-1 transition",
    route.path === path
      ? "text-amber-700 border-b-2 border-amber-600 font-semibold"
      : "hover:text-amber-600"
  ].join(" ")
}
</script>
