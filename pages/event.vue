<template>
  <InfoListPage title="活動訊息" :items="items" />
</template>
<script setup>
import InfoListPage from '~/components/InfoListPage.vue'
import { computed } from 'vue'

// 假資料
const fakeEvents = [
  { id: 1, title: '親子共讀故事會 8/5(日)上午10點', date: '2025/07/28' },
  { id: 2, title: 'AI主題講座：未來科技與閱讀 8/12', date: '2025/07/26' },
  { id: 3, title: '夏日閱讀挑戰賽開跑！', date: '2025/07/22' },
  { id: 4, title: '手作書籤DIY活動 8/15下午2點', date: '2025/07/20' },
  { id: 5, title: '英文繪本導讀 8/18上午10點', date: '2025/07/18' },
  { id: 6, title: '樂齡族數位學習班 8/20開課', date: '2025/07/15' },
  { id: 7, title: '暑期電影欣賞週週五下午', date: '2025/07/12' },
  { id: 8, title: '青少年桌遊體驗日 8/22', date: '2025/07/10' },
  { id: 9, title: '新書分享會 8/25下午3點', date: '2025/07/08' },
  { id: 10, title: '志工感恩茶會 8/30', date: '2025/07/05' },
]

const items = computed(() =>
  fakeEvents.map(n => ({
    id: n.id,
    type: '活動',
    title: n.title,
    date: n.date,
    views: '',
    link: `/event/${n.id}`
  }))
)
</script>