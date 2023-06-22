<template>
    <h1>Eventos comunicacion</h1>
    <MiImput :valor = "valorImput" @cambia-valor="funcionCambio"/>   
    <p>{{ valorImput }}</p> 
</template>


<script setup lang="ts">
    import {ref} from "vue"
    import MiImput from "./MiImput.vue"
    const valorImput = ref("hola mundo")

    const funcionCambio = (evento:InputEvent) => {
        console.log(evento)
        valorImput.value = (evento.target as HTMLInputElement).value
            }
</script>
