<template>
    <h3>Este es el componente de las directivas con parámetros</h3>
    <p v-bold v-rojo>Hola mundo</p>
    <p v-color.modificador1="'green'">Segundo hola mundo</p>
    <p v-style:fontSize="'32px'">Estilos</p>
</template>

<script setup lang="ts">
const vBold = {
    mounted(el: HTMLElement) {
        el.style.fontWeight = "800"
    }
}
const vRojo = {
    mounted(el: HTMLElement) {
        el.style.color = "red"
    }
}

type Binding = {
    arg?: string,
    dir?: any,
    instance?: any,
    modifiers?: any[],
    oldValue?: any,
    value?: any
}

const vColor = {
    mounted(el: HTMLElement, binding: Binding) {
        console.log(binding)
        el.style.color = binding.value
    }
}

const vStyle = {
    mounted(el: HTMLElement, binding: Binding) {
        if (!binding.arg) return
        // console.log(binding)
        el.style[binding.arg] = binding.value
    }
}
</script>