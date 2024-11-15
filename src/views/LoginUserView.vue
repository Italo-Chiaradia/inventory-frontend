<template>
  <div class="w-full h-full grid place-items-center">
    <form @submit.prevent="onHandleFormLogin" class="w-[400px] m-auto rounded-lg overflow-hidden">
      <header class="w-full p-4 bg-slate-800 text-white">
        <h1 class="text-xl text-center">Login de usuário</h1>
      </header>
      <div class="p-4 m-bottom-4 flex flex-col border-2 bg-slate-100 gap-4">
        <input v-model="formLogin.email" type="email" id="email" placeholder="Digite seu e-mail" class="input-base">
        <input v-model="formLogin.password" type="password" id="password" placeholder="Digite sua senha" class="input-base">
        <RouterLink to="/register" class="text-center text-sm text-blue-700 underline">
          Criar conta
        </RouterLink>
        <button class="w-full bg-yellow-500 hover:bg-opacity-80 text-md mt-5 py-1 px-5 rounded-full text-white font-bold">
          ENTRAR
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
  import axios from 'axios'
  import {reactive} from 'vue'
  import {RouterLink, useRouter} from 'vue-router'

  const router = useRouter();

  const formLogin = reactive({
    email: '',
    password: ''
  })

  const onHandleFormLogin = async () => {
    const user = {
      email: formLogin.email,
      password: formLogin.password
    }
    try {
      const response = await axios.get('/api/users', {params: {email: user.email}})

      if (response.data.length == 0) {
        alert("Usuário inexistente!")
        return
      }

      const fetchedUser = response.data[0]
      
      if (fetchedUser.password !== user.password) {
        alert("Senha não confere!")
        return
      }
      
      // Guardando dados do usuário logado
      localStorage.setItem(":inventory-user", JSON.stringify(user));
      router.push('/')
    } catch(error) {

      console.error(error)
    }
  }
</script>
