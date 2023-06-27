<template>
    <h3>Mi contador</h3>
    <button @click="decrementaContador">Menos</button>
    <span>{{ contador }}</span>
    <button @click="incrementaContador">Más</button>
</template>

<script setup lang="ts">
import useContador from "../composables/useContador"

const { contador, incrementaContador, decrementaContador } = useContador()
</script>