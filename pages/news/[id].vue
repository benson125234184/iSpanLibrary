<template>
  <div v-if="news">
    <h1>{{ news.title }}</h1>
    <img :src="news.image" alt="news image" style="width:400px;max-width:100%;border-radius:15px;" />
    <p style="color:#888;font-size:0.9rem;">{{ news.date }}</p>
    <div style="margin-top:1.5rem;white-space:pre-line;">{{ news.content }}</div>
  </div>
  <div v-else>
    <p>找不到此消息</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useNews } from '~/composables/useNews'
const route = useRoute()
const { newsList } = useNews()
const news = newsList.value.find(n => n.id == route.params.id)
</script> 