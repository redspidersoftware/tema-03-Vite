<template>    
    <div :class="`tarea ${hecho ? 'completada' : ''}`">
        <p class="titulo">Titulo de la tarea</p>
        <div class ="acciones">
            <span class="fecha"> Fecha</span>
            <button class="toggle" @click="cambaEstado"> Hecho / mohecho</button>
        </div>
    </div>
  </template>
<script setup lang="ts">
import {ref} from "vue"
const hecho = ref(false)
const cambaEstado = () => {
    hecho.value =!hecho.value
}
</script>

<style scoped>
.tarea {
    background-color: blueviolet;
    border-radius: 1rem;
    padding:  1rem;    
    display: flex;
    flex-direction: column;
    min-height: 10rem;
    min-width: 10rem ;
    justify-content:  space-between;
    transition: all 0.3s;
}
.tarea.completada {
    opacity: 0.25;
    filter: blur(2px);
    background-color: rgb(27, 162, 23);
}
.acciones{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
button{
    background-color: transparent;
    padding: 0.2rem 0.4rem;
    outline: none;
}
</style>