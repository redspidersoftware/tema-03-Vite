<template>
    <form @submit.prevent="handleSubmit">
        <input type="text" placeholder="username" v-model="datosFormulario.username" />
        <br />
        <input type="password" placeholder="password" v-model="datosFormulario.password" />
        <br />
        <button type="submit">Enviar</button>
        <button type="reset">Reset</button>
    </form>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"

const miEstado = ref("El valor inicial")

const datosFormulario = reactive({
    username: "miusuario",
    password: "1234"
})

const handleSubmit = (event: Event) => {
    console.log(event)
}
</script>