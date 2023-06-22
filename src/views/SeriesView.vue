<template>
    <h1>Series</h1>
    <div v-for="(s, index) in serie" 
        :class="`serie 
        ${index%2 === 1 ? 'odd':'even'} 
        ${s.vista ? 'vista' : ''}
        `"
        @click="cambiaEstado(index)">
        <span style="flex-grow: 1; text-align: left;"> {{s.titulo}}</span>        
        <span> {{s.sugiriente}}</span>
        <span> {{s.año}}</span>
        <span> <input type="checkbox" :checked="s.vista"/></span>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import {Series}  from "../models";


const serie = ref<Series[]> ([
    {
        titulo : "Tu tambien lo harias",
        año: 2023,
        sugiriente: "Gorka",
    },
    {
        titulo : "Black Mirror",
        año: 2023,
        sugiriente: "Sandra",
    },
    {
        titulo : "The Mandalorian",
        año: 2023,
        sugiriente: "Antonio",
    },
    {
        titulo : "Death Note",
        año: 2021,
        sugiriente: "Aitor",
    },
    {
        titulo : "Paquita salas",
        año: 2020,
        sugiriente: "Javi",
    }
])

const cambiaEstado= (index:number) =>{
    serie.value= serie.value.map((serie,id) =>{
        if (id !== index) return serie
        return{...serie,vista: serie.vista ? false: true}
    })
}

</script>

<style scoped>
.serie{
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    padding:  1rem 0.5rem;
    gap: 1rem;

}
.serie.even{
    background-color: darkgray;
}
.serie.odd{
    background-color: grey;
}
.serie:hover{
    background-color:cyan;
}
.serie.even:hover{
    background-color:cyan;
}
.serie.odd:hover{
    background-color:cyan;
}
.vista{
    text-decoration-line: line-through;
    font-style: italic;    
}
</style>


