<template>
    
    <!--<div>
        Helo world
        <input type = "text" v-model="valorInput" />
        <button @click="pasarPorConsola"> Pasar por consola</button>
        <p>{{ valorMayusculas }}</p>
    </div>-->

    <!--<ConatadorComposable/>
    <MiContador />
    <ListaTareas />
    -->
        <BotonOnOff :active ="modoOscuro" :toggle="cabiaModo"/>
        <TextoPersonalizado texto="Este es el texto" :esOscuro ="modoOscuro"/>
    <div>

    </div>
  </template>
  
  <script setup lang="ts">
  import {ref} from "vue"
  //#region  tema 3
// import {ref, computed} from "vue"
// const valorInput = ref("Añada la sal a la salsa")

// const pasarPorConsola = () =>{
//     console.log(valorInput.value)
// }

// const valorMayusculas = computed(()=>{
//     return valorInput.value.toUpperCase()
// })
//#endregion

//  Pantalla 1 - Lista de tareas
//@ts-ignore
import ListaTareas from "@components/ListaTareas.vue"
//@ts-ignore
import MiContador from "@components/MiContador.vue"
//@ts-ignore
import ConatadorComposable from "@components/ConatadorComposable.vue"
//@ts-ignore
import BotonOnOff from "@components/BotonOnOff.vue"
//@ts-ignore
import TextoPersonalizado from "@components/TextoPersonalizado.vue"

const modoOscuro = ref(true)

const cabiaModo=() =>{
    modoOscuro.value = !modoOscuro.value
}

  </script>
  <style scoped>
  
  </style>
  