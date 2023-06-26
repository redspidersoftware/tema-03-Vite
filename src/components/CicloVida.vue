<template>
    <h1> CicloVida</h1>
    <button @click="cambiaToggle">{{toggle ? "ON":"OFF"}} </button>
</template>

<script setup lang ="ts">
import { ref, onMounted ,onUpdated, onUnmounted} from "vue";

const toggle = ref(false)
const cambiaToggle= ()=>{
    toggle.value = !toggle.value
}

onMounted(() => {
    console.log("el componente he sido montado")
})

onUpdated(() => {
    console.log("el componente he sido updateado")
    
})

onUnmounted(() => {
    console.log("el componente he sido desmontado")
})

</script>