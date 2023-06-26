<template>
    <h3>Mi input</h3>
    <input type="text" :value="value" @input="handleChange" />
    <span>{{ value }}</span>
</template>

<script setup lang="ts">
defineProps(["value"])

const emit = defineEmits(["update:value"])

const handleChange = (event: Event) => {
    emit("update:value", (event.target as HTMLInputElement).value)
}
</script>