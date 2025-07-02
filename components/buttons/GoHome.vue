<template>
    <button @click="delayedGoHome" class="go-home-button" :disabled="loading">
        <template v-if="loading">
            <span class="spinner"></span> 載入中...
        </template>
        <template v-else>
            回首頁
        </template>
    </button>
</template>


<script setup>
import { useNavigation } from '@/composables/useNavigation'

const { goHome } = useNavigation()

const loading = ref(false)

const delayedGoHome = () => {
    loading.value = true
    setTimeout(() => {
        goHome()
    }, 3000)
}
</script>

<style scoped>
.go-home-button {
    background-color: #60a5fa;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1.5rem;
    margin-top: 3rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
}

.go-home-button:hover {
    background-color: #3b82f6;
}

.spinner {
    border: 3px solid #f3f3f3;
    /* 淺灰 */
    border-top: 3px solid #fff;
    /* 白色轉圈 */
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 0.8s linear infinite;
    display: inline-block;
    margin-right: 8px;
    vertical-align: middle;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>