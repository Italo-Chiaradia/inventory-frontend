<template>
  <HeaderSearch/>
  <main class="max-w-screen-lg m-auto mt-16 flex flex-wrap gap-x-4 gap-y-4 px-4">
    <CardProduct v-for="product in state.products" :key="product.id" :product="product" />
  </main>
</template>

<script setup>
  import axios from "axios";
  import CardProduct from '@/components/CardProduct.vue';
  import HeaderSearch from '@/components/HeaderSearch.vue';
  import { reactive, onMounted } from "vue";

  const state = reactive({
    products: [],
    isLoading: true
  })

  onMounted(async () => {
    try {
      const response = await axios.get("/api/products")
      state.products = response.data
    } catch (error) {
      console.error('Error fetching products', error)
    } finally {
      state.isLoading = false
    }
  })
</script>
