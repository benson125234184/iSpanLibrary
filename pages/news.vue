<template>
  <HeaderBar />
  <InfoListPage
    title="公告"
    :tabs="['公告', '活動']"
    :activeTab="activeTab"
    :types="['新聞', '活動']"
    :items="filteredItems"
    @update:activeTab="activeTab = $event"
    @search="onSearch"
  />
  <FooterBar />
</template>
<script setup>
import HeaderBar from '~/components/HeaderBar/index.vue'
import FooterBar from '~/components/FooterBar.vue'
import InfoListPage from '~/components/InfoListPage.vue'
import { ref, computed } from 'vue'
const activeTab = ref('公告')
const allItems = [
  { id: 1, type: '新聞', title: '閱讀和鍛煉：NLPI 和 NTSU 共同創造注重健康的閱讀生活方式', date: '2025-06-23', views: 60, link: '#' },
  { id: 2, type: '新聞', title: '國家公共資訊圖書館主辦「智慧圖書館時代 2025 資訊素養論壇」，聚焦提升國家資訊素養，為數字時代奠定知識基礎', date: '2025-05-15', views: 371, link: '#' },
  { id: 3, type: '新聞', title: 'NLPI 的「此時此地：當代提克溫畫」展覽：提克克大師的藝術精神', date: '2025-04-30', views: 466, link: '#' },
  { id: 4, type: '新聞', title: '美國國家公共資訊圖書館為 2025 年世界閱讀日推出 "Readventure：Orienteering into Picture Books"', date: '2025-04-15', views: 505, link: '#' },
  { id: 5, type: '新聞', title: 'NLPI 與 NARLabs 發聲訪解碼新舞台合作，3月推出「科學家祕密基地@台中」', date: '2025-03-07', views: 804, link: '#' }
]
const searchType = ref('')
const searchKeyword = ref('')
const filteredItems = computed(() => {
  return allItems.filter(item => {
    const matchType = !searchType.value || item.type === searchType.value
    const matchKeyword = !searchKeyword.value || item.title.includes(searchKeyword.value)
    return matchType && matchKeyword
  })
})
function onSearch({ type, keyword }) {
  searchType.value = type
  searchKeyword.value = keyword
}
</script> 