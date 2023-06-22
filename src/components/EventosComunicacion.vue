<template>
    <h1>Eventos comunicación : version: {{version}} nombre:{{ nombre_aplicacion }} </h1>
    <MiImput :valor = "valorImput" @cambia-valor="funcionCambio"/>   
    <p>{{ valorImput }}</p> 

</template>


<script setup lang="ts">
    import {ref, inject} from "vue"
    import MiImput from "./MiImput.vue"
    const valorImput = ref("hola mundo")

    const funcionCambio = (evento:InputEvent) => {
        console.log(evento)
        valorImput.value = (evento.target as HTMLInputElement).value
    }

    const version = inject("version")
    const nombre_aplicacion = inject("nombre_aplicacion")
</script>
