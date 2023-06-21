<template>
    <div :class="esOscuro ? 'oscuro' : 'claro'">
        <h2>{{ texto }}</h2>
    </div>
</template>


<script setup lang="ts">
    defineProps<{
        texto:string,
        esOscuro: boolean
    }>()

</script>

<style scoped>
.oscuro{
    background-color:rgb(70, 73, 71);
    color:  rgb(46, 42, 42);
}
.claro{
    background-color: white;
    color: rgb(141, 206, 223);
}
</style>