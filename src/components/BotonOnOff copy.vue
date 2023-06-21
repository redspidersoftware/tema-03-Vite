<template>
    <button :class ="active ? 'active' : 'inactive'" @click="toggle"> {{ active ? "On":"Off" }} </button>
</template>

<script setup lang="ts">
import {ref} from "vue"

const active = ref(true)
const toggle=()=>{
    active.value = !active.value
}
</script>

<style scoped>
button{
    transition: all 0.3s;
}
.active{
    background-color: rgb(4, 130, 4);
    box-shadow: 0 0 2rem rgba(22, 97, 22, 0.963);
}
.inactive{
    background-color: rgb(244, 26, 6);
    box-shadow: 0 0 2rem rgba(148, 70, 6, 0.963);
}
</style>

