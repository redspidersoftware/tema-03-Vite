<template>
    <h1>Hola {{props.nombre}}</h1>
    <p>{{ props.email }}</p>
</template>

<script setup lang="ts">
    const props = defineProps<{
        nombre: string,
        email: string,
    }>()
</script>   