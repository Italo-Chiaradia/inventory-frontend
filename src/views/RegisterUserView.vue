<template>
  <div class="w-full h-full grid place-items-center">
    <form @submit.prevent="onHandleFormRegister" class="w-[400px] m-auto rounded-lg overflow-hidden">
      <header class="w-full p-4 bg-slate-800 text-white">
        <h1 class="text-xl text-center">Cadastro de usuário</h1>
      </header>
      <div class="p-4 m-bottom-4 flex flex-col border-2 bg-slate-100 gap-4">
        <input v-model="formRegister.name" type="text" id="name" placeholder="Digite seu nome" class="input-base">
        <input v-model="formRegister.email" type="email" id="email" placeholder="Digite seu e-mail" class="input-base">
        <input v-model="formRegister.password" type="password" id="password" placeholder="Digite sua senha" class="input-base">
        <RouterLink to="/login" class="text-center text-sm text-blue-700 underline">
          Fazer login
        </RouterLink>
        <button class="w-full bg-yellow-500 hover:bg-opacity-80 text-md mt-5 py-1 px-5 rounded-full text-white font-bold">
          CADASTRAR
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
  import axios from 'axios'
  import {reactive} from 'vue'
  import {RouterLink, useRouter} from 'vue-router'

  const router = useRouter()

  const formRegister = reactive({
    name: '',
    email: '',
    password: ''
  })

  const onHandleFormRegister = async () => {
    const newUser = {
      name: formRegister.name,
      email: formRegister.email,
      password: formRegister.password
    }

    try {
      const userAlreadyExist = await axios.get('/api/users', {
        params: {email: newUser.email}
      })
      if (userAlreadyExist.data.length > 0) {
        alert("Este e-mail já está em uso!")
        return
      } else {
        const response = await axios.post('/api/users', newUser)
        alert("Usuário cadastrado com sucesso")
        router.push('/login')
      }
    } catch(error) {
      console.error(error)
    }
  }
</script>
