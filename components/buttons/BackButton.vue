<template>
    <button type="button" @click="goBack" class="back-button">
        ← {{ props.message || '回上一頁' }}
    </button>
</template>

<script setup>
import { useFetch } from '#app'

const props = defineProps({
    step: { type: Number, required: true },
    userId: { type: Number, required: true },
    jwt: { type: String, required: true },
    message: { type: String, default: '' }
})

const emit = defineEmits(['update:step', 'update:reservations'])

const goBack = async () => {
    if (props.step === 3) {
        const { data } = await useFetch('http://localhost:8080/api/seats/reservations/all-upcoming', {
            method: 'GET',
            query: { userId: props.userId },
            headers: {
                Authorization: `Bearer ${props.jwt}`
            }
        })

        if (data.value && data.value.length > 0) {
            emit('update:reservations', data.value)
            emit('update:step', 2)
        } else {
            emit('update:step', 1)
        }
    } else if (props.step > 1) {
        emit('update:step', props.step - 1)
    }
}
</script>

<style scoped>
.back-button {
    margin: 1rem;
    padding: 8px 14px;
    background-color: lightgray;
    border: 1px solid #999;
    border-radius: 6px;
    cursor: pointer;
    font-size: large
}
</style>
