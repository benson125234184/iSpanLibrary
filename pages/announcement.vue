<template>
  <InfoListPage
    title="公告事項"
    :items="items"
  />
</template>
<script setup>
import InfoListPage from '~/components/InfoListPage.vue'
import { computed } from 'vue'

// 假資料
const fakeAnnouncements = [
  { id: 1, title: '本館將於8/1進行消防演練，請配合現場指示', date: '2025/07/25' },
  { id: 2, title: '暑期閉館公告：8/10-8/15全館休館', date: '2025/07/20' },
  { id: 3, title: '新書推薦：2025年7月精選書單', date: '2025/07/18' },
  { id: 4, title: '本館網站將於7/30凌晨維護', date: '2025/07/15' },
  { id: 5, title: '防疫期間入館請配戴口罩', date: '2025/07/10' },
  { id: 6, title: '自修教室延長開放至晚上10點', date: '2025/07/08' },
  { id: 7, title: '圖書歸還箱暫停使用公告', date: '2025/07/05' },
  { id: 8, title: '本館榮獲市府服務品質獎', date: '2025/07/01' },
  { id: 9, title: '暑期志工培訓課程開放報名', date: '2025/06/28' },
  { id: 10, title: '本館將於7/20舉辦防災演練', date: '2025/06/25' },
]

const items = computed(() =>
  fakeAnnouncements.map(n => ({
    id: n.id,
    type: '公告',
    title: n.title,
    date: n.date,
    views: '',
    link: `/announcement/${n.id}`
  }))
)
</script> 