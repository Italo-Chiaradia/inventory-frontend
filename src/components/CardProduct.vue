<template>
  <RouterLink class="max-w-60 rounded-md overflow-hidden shadow-md border-2 hover:scale-105 transition-all">
    <img :src="Produto" class="max-w-full h-auto object-cover">
    <div class="text-center py-2 mt-4 bg-slate-700 text-white font-bold">
      Notebook
    </div>
    <div class="flex">
      <div class="flex-1 py-2 text-center bg-green-500 text-white font-bold">
        R$ 3898,00
      </div>
      <div class="flex-1 py-2 text-center bg-gray-500 text-white font-bold">
        12x
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import Produto from '@/assets/images/product-1.jpg'
</script>
