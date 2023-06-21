<template>
    <MiSaludo nombre = "Javier" email="mi.email@novale.com"/>
    <h1>Esta es la lista de tareas</h1>
    <div  class="lista">
    <MiTarea/>    
    <MiTarea/> 
    <MiTarea/> 
  </div>
  </template>

  <script setup lang="ts">
  //@ts-ignore
import MiTarea from "@components/MiTarea"
  //@ts-ignore
import MiSaludo from "@components/MiSaludo"
</script>
<style>
.lista{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>