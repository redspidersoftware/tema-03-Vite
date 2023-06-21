<template>
    <h2>El Contador composable</h2>
    <button @click="incrementar">{{ contador }}</button>
</template>

<script setup lag="ts">

 import useContador from "@hooks/useContador"
const  {contador, incrementar} = useContador ()

</script>