<template>
    <form>
        <label for="input-con-cebolla">
            <input type="radio" id="input-con-cebolla" value="Con cebolla" v-model="opcion"/>
            Con cebolla
        </label>
        <label for="input-sin-cebolla">
            <input type="radio" id="input-sin-cebolla" value="Sin cebolla" v-model="opcion"/>
            Sin cebolla
        </label>
        <label for="input-no-me-gusta">
            <input type="radio" id="input-no-me-gusta"  value="No me gusta" v-model="opcion"/>
            No me gusta
        </label>
    </form>
    <p>{{ opcion }}</p>
</template>

<script setup lang="ts">
import{ref} from "vue"

const opcion = ref(null)
</script>

