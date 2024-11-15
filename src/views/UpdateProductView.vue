<template>
  <HeaderSearch />
  <form @submit.prevent="handleUpdateProduct" class="max-w-screen-md m-auto mt-6 mb-10 px-4 flex flex-col gap-4">
    <header class="border-b-2 border-gray-500 flex flex-col items-start">
      <RouterLink to="/" class="flex items-center gap-2 hover:text-yellow-500 transition-all">
        <PhArrowLeft :size="24" />
        <span class="text-2xl">Voltar</span>
      </RouterLink>
      <div class="flex w-full justify-between items-center mt-8">
        <h1 class="text-3xl my-4">Atualizar produto</h1>
        <div>
          <button type="submit" class="bg-green-400 py-2 px-5 hover:bg-green-600 transition-all uppercase text-md font-bold text-white rounded-full">
            Salvar
          </button>
          <button @click="handleDeleteProduct" type="button" class="bg-red-400 py-2 px-5 ml-2 hover:bg-red-600 transition-all uppercase text-md font-bold text-white rounded-full">
            Exluir
          </button>
        </div>
      </div>
    </header>
    <div class="mt-6">
      <label for="name" class="text-xl">Nome</label>
      <input v-model="formProduct.name" type="text" id="name" placeholder="Digite o nome do produto" class="input-base mt-2" required>
    </div>
    <div class="flex gap-4">
      <div class="flex-1">
        <label for="quantity" class="text-xl mb-2">Quantidade em estoque</label>
        <input v-model="formProduct.quantity" type="number" min=0 max=999 name="quantity" placeholder="1" class="input-base mt-2" required>
      </div>
      <div class="flex-1">
        <label for="price" class="text-xl mb-2">Preço unitário</label>
        <input v-model="formProduct.price" type="text" name="price" placeholder="R$ 499,99" class="input-base mt-2" required>
      </div>
    </div>
    <div>
      <label for="description" class="text-xl">Descrição</label>
      <textarea v-model="formProduct.description" id="description" class="input-base mt-2 resize-none h-52" placeholder="Escreva sobre o produto"></textarea>
    </div>
  </form>
</template>

<script setup>
  import { PhArrowLeft } from "@phosphor-icons/vue";
  import HeaderSearch from '@/components/HeaderSearch.vue';
  import { RouterLink, useRoute } from "vue-router";
  import { reactive, onMounted } from "vue";
  import axios from 'axios';
  import router from "@/router";

  const route = useRoute()
  const productId = route.params.id

  const state = reactive({
    product: [],
    isLoading: true
  })

  const formProduct = reactive({
    name: '',
    quantity: '',
    price: '',
    description: ''
  })

  const handleUpdateProduct = async () => {
    const updatedProduct = {
      name: formProduct.name,
      quantity: formProduct.quantity,
      price: formProduct.price,
      description: formProduct.description
    };

    try {
      const response = await axios.put(`/api/products/${productId}`, updatedProduct); // Envia os dados diretamente
      alert("Produto atualizado com sucesso!");
      router.push('/'); // Redireciona para a página inicial
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
      alert("Erro ao atualizar o produto. Verifique os dados e tente novamente.");
    }
  };

  const handleDeleteProduct = async () => {
    try {
      const confirmDelete = window.confirm("Tem certeza que deseja excluir este produto?")
      if (confirmDelete) {
        await axios.delete(`/api/products/${productId}`)
        alert('Produto excluído com sucesso!')
        router.push('/')
      }
    } catch (error) {
      console.error("Error deleting product", error)
    }
  }

  onMounted(async () => {
    try {
      const response = await axios.get(`/api/products/${productId}`)
      state.product = response.data

      formProduct.name = state.product.name
      formProduct.quantity = state.product.quantity
      formProduct.price = state.product.price
      formProduct.description = state.product.description

    } catch (error) {
      console.error("Error fetching product", error)
    } finally {
      state.isLoading = false
    }
  })
</script>
