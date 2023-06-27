<template>
    <div v-if="usuario !== null">
        <h4>Detalles de usuario</h4>
        <p><strong>Nombre:</strong> {{ usuario?.nombre }}</p>
        <p><strong>Email:</strong> {{ usuario?.email }}</p>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import usuarios from "../assets/usuarios"

const route = useRoute()

const { id } = route.params

const usuario = usuarios.find(u => u.id.toString() === id)

console.log({ usuario })

const { nuevonombre } = route.query

console.log(nuevonombre)
</script>