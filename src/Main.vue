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
        <!--
        <BotonOnOff :active ="modoOscuro" :toggle="cabiaModo"/>
        <TextoPersonalizado texto="Este es el texto" :esOscuro ="modoOscuro"/>
        -->
    <!--
        <AboutUs v-if="pagina==='AboutUS'"/>
        <Contact v-if="pagina==='Contac'"/>
        <Home    v-if="pagina==='Home'"/>
        <Math    v-if="pagina==='Math'"/>
        <Series    v-if="pagina==='Series'"/>
    -->
        <!--<div>
            <button @click="() => pagina ='Home'">Home</button>
            <button @click="() => pagina ='Contac'">Contacto</button>
            <button @click="() => pagina ='AboutUS'">Sobre nosotros</button>
        </div>-->

        <!--<p> otra forma de redireccionar</p>-->
        <!--
        <div>
            <button @click="(redirige('Home'))">Home</button>
            <button @click="(redirige('Contac')) ">Contacto</button>
            <button @click="(redirige('AboutUS'))">Sobre nosotros</button>
            <button @click="(redirige('Math'))">Math</button>
            <button @click="(redirige('Series'))">Series</button>
        </div>
        -->
    <EventosComunicacion/>
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
//import ListaTareas from "@components/ListaTareas.vue"
//@ts-ignore
//import MiContador from "@components/MiContador.vue"
//@ts-ignore
//import ConatadorComposable from "@components/ConatadorComposable.vue"
//@ts-ignore
//import BotonOnOff from "@components/BotonOnOff.vue"
//@ts-ignore
//import TextoPersonalizado from "@components/TextoPersonalizado.vue"

import EventosComunicacion from "./components/EventosComunicacion.vue"


//const modoOscuro = ref(true)

// const cabiaModo=() =>{
//     modoOscuro.value = !modoOscuro.value
// }

// import { AboutUs,Contact,Home,Math, Series} from "./views"
// import{Routes} from "./models"

// const pagina = ref<Routes>("Home")

// const redirige = (ruta:Routes) =>{
//     pagina.value = ruta
// }

  </script>
  <style scoped>
  
  </style>
  