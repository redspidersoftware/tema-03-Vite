<template>
    <div>
        <h2>El Contador</h2>
        <button @click="incrementar">Contador: {{ contador }}</button>
    </div>

  </template>

  <script setup lag="ts">
import {ref} from "vue"
const contador = ref(0)
const incrementar= ()=>{
    contador.value++
}

</script>