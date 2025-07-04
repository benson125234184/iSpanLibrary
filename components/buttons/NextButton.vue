<template>
    <button class="next-button" :disabled="disabled" @click="emit('next')">
        {{ label }}
    </button>
</template>

<script setup>
const props = defineProps({
    label: { type: String, default: '下一步 →' },
    disabled: { type: Boolean, default: false }
})
const emit = defineEmits(['next'])
</script>

<style>
.next-button {
    background-color: #007bff;
    margin-left: 6rem;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 6px;
    font-size: 1rem;
    cursor: pointer;
}

.next-button:hover {
    background-color: #0056b3;
}
</style>