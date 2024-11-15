<template>
  <RouterLink :to='`/update-product/${product.id}`' class="flex flex-col max-w-60 rounded-md overflow-hidden shadow-md border-2 hover:scale-105 transition-all">
    <img :src="Produto" class="max-w-full h-auto object-cover">
    <div class="flex-1 flex items-center justify-center text-center py-2 mt-4 bg-slate-700 text-white font-bold">
      {{product.name}}
    </div>
    <div class="flex">
      <div class="flex-1 py-2 text-center bg-green-500 text-white font-bold">
        R$ {{product.price}}
      </div>
      <div class="flex-1 py-2 text-center bg-gray-500 text-white font-bold">
        {{product.quantity}}x
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
  import Produto from '@/assets/images/product-1.jpg'
  import { RouterLink } from 'vue-router';
  import { defineProps } from 'vue';

  defineProps({
    product: Object
  })

</script>
