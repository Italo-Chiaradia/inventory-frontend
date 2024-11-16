<template>
  <header class="w-full py-8 bg-slate-800 text-white">
    <div class="max-w-screen-lg h-full m-auto items-center flex gap-4 px-4">
      <div class="flex-1 relative">
        <input v-model="value" @input="$emit('search', value)" class="w-full h-full p-3 pl-10 rounded-full text-black focus:ring-yellow-500 focus:outline-none focus:ring-2" type="text" placeholder="Pesquisar produto">
        <PhMagnifyingGlass :size="24" class="absolute top-3 left-3 text-gray-400" /> 
      </div>
      <RouterLink to="/new-product" class="bg-yellow-500 p-2 px-4 rounded-full font-bold hover:bg-opacity-80 text-md transition-all">
        Adicionar produto
      </RouterLink>
      <button title="Sair" @click="handleLogout">
        <PhPower :size="32" class="hover:opacity-50 transition-all"/>
      </button>
    </div>
  </header>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import {PhPower, PhMagnifyingGlass } from '@phosphor-icons/vue'
  
  const value = ref('')

  const router = useRouter()

  const handleLogout = async () => {
    localStorage.removeItem(':inventory-user')
    router.push('/login')
  }
</script>
