<template>
  <InfoListPage
    title="最新消息"
    :items="items"
  />
</template>

<script setup>
import InfoListPage from '~/components/InfoListPage.vue'
import { computed } from 'vue'

// 假資料
const fakeNews = [
  { id: 1, title: '城市裡的森林書屋！台中首座高綠覆率「羅布森圖書館」動土', date: '2025/06/23' },
  { id: 2, title: '圖書館「走讀文化古蹟之旅」親子活動', date: '2025/06/06' },
  { id: 3, title: '睽違14年！彰化永靖鄉立圖書館將動土', date: '2025/06/27' },
  { id: 4, title: '暑期閱讀推廣活動開跑，歡迎踴躍參加', date: '2025/07/01' },
  { id: 5, title: '新書上架：AI與未來社會專題', date: '2025/07/05' },
  { id: 6, title: '本館將於7/10進行系統維護，暫停部分服務', date: '2025/07/10' },
  { id: 7, title: '兒童繪本故事時間每週六上午舉辦', date: '2025/07/12' },
  { id: 8, title: '志工招募中，歡迎加入我們的行列', date: '2025/07/15' },
  { id: 9, title: '數位資源推廣講座即將登場', date: '2025/07/18' },
  { id: 10, title: '本館榮獲全國閱讀推廣績優單位', date: '2025/07/20' },
]

const items = computed(() =>
  fakeNews.map(n => ({
    id: n.id,
    type: '新聞',
    title: n.title,
    date: n.date,
    views: '',
    link: `/news/${n.id}`
  }))
)
</script>