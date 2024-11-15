<template>
  <header class="w-full h-20 bg-slate-800 text-white">
    <div class="max-w-screen-lg h-full m-auto items-center flex gap-4 px-2">
      <button title="Deslogar">
        <PhPower :size="32" class="hover:opacity-50 transition-all"/>
      </button>
      <input class="flex-1 p-3 rounded-full text-black focus:ring-yellow-500 focus:outline-none focus:ring-2" type="text" placeholder="Pesquisar produto">
      <button class="bg-yellow-500 p-2 px-4 rounded-full font-bold hover:bg-opacity-80 text-md transition-all">
        Adicionar produto
      </button>
    </div>
  </header>
  <main class="max-w-screen-lg m-auto mt-6 flex flex-wrap gap-x-4 gap-y-4">
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
    <CardProduct />
  </main>
</template>

<script setup>
  import {PhPower} from '@phosphor-icons/vue'
  import CardProduct from '@/components/CardProduct.vue';
</script>
