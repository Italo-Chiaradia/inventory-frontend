<template>
  <HeaderSearch />
  <form @submit.prevent="handleNewProduct" class="max-w-screen-md m-auto mt-6 mb-10 px-4 flex flex-col gap-4">
    <header class="border-b-2 border-gray-500 flex flex-col items-start mt-8">
      <RouterLink to="/" class="flex items-center gap-2 hover:text-yellow-500 transition-all">
        <PhArrowLeft :size="24" />
        <span class="text-2xl">Voltar</span>
      </RouterLink>
      <div class="flex w-full justify-between items-center">
        <h1 class="text-3xl my-4">Novo produto</h1>
        <button class="bg-green-400 py-2 px-5 hover:bg-green-600 transition-all uppercase text-md font-bold text-white rounded-full">
          Adicionar
        </button>
      </div>
    </header>
    <div class="mt-6">
      <label for="name" class="text-xl">Nome</label>
      <input v-model="formNewProduct.name" type="text" id="name" placeholder="Digite o nome do produto" class="input-base mt-2" required>
    </div>
    <div class="flex gap-4">
      <div class="flex-1">
        <label for="quantity" class="text-xl mb-2">Quantidade em estoque</label>
        <input v-model="formNewProduct.quantity" type="number" min=0 max=999 name="quantity" placeholder="1" class="input-base mt-2" required>
      </div>
      <div class="flex-1">
        <label for="price" class="text-xl mb-2">Preço unitário</label>
        <input v-model="formNewProduct.price" type="text" name="price" placeholder="R$ 499,99" class="input-base mt-2" required>
      </div>
    </div>
    <div>
      <label for="description" class="text-xl">Descrição</label>
      <textarea v-model="formNewProduct.description" id="description" class="input-base mt-2 resize-none h-52" placeholder="Escreva sobre o produto"></textarea>
    </div>
  </form>
</template>

<script setup>
  import { PhArrowLeft } from "@phosphor-icons/vue";
  import HeaderSearch from '@/components/HeaderSearch.vue';
  import { RouterLink } from "vue-router";
  import { reactive } from "vue";
  import axios from 'axios';
  import router from "@/router";

  const formNewProduct = reactive({
    name: '',
    quantity: '',
    price: '',
    description: ''
  })

  const handleNewProduct = async () => {
    try {
      await axios.post('/api/products', formNewProduct)
      alert("Produto cadastrado com sucesso!")
      router.push('/')
    } catch(error) {
      console.error(error)
    }
  }
</script>
