<template>
    <div>
        Helo world
        <input type = "text" v-model="valorInput" />
        <button @click="pasarPorConsola"> Pasar por consola</button>
        <p>{{ valorMayusculas }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
import {ref, computed} from "vue"
const valorInput = ref("Añada la sal a la salsa")

const pasarPorConsola = () =>{
    console.log(valorInput.value)
}

const valorMayusculas = computed(()=>{
    return valorInput.value.toUpperCase()
})

  </script>
  <style scoped>
  
  </style>
  