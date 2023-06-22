<template>
    <h1> Math</h1>
    <h2>{{ contador }}</h2>

    <p v-if="contador <5"> el contador es menor a 5</p>
    <p v-else-if="contador < 10"> el contador es mayor o igual a 5 pero menor que 10</p>
    <p v-else="contador <5"> el contador es mayor o igual a 10</p>
</template>

<script setup lang="ts">
const contador =3
</script>