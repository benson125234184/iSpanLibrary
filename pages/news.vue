<template>
  <InfoListPage
    title="最新消息"
    :items="items"
  />
</template>
<script setup>
import InfoListPage from '~/components/InfoListPage.vue'
import { computed } from 'vue'
import { useNews } from '~/composables/useNews'

const { newsList } = useNews()
// 只顯示最新消息
const items = computed(() =>
  newsList.value.map(n => ({
    id: n.id,
    type: '新聞',
    title: n.title,
    date: n.date,
    views: '',
    link: `/news/${n.id}`
  }))
)
</script>

<style scoped>
.news-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1.5rem;
}
</style> 