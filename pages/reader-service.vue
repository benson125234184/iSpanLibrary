<template>
  <div class="reader-bg">
    <img src="/images/sub03_0103_img08.jpg" class="main-banner" />
    <!-- 路徑導覽 -->
    <div class="reader-panel">
      <aside class="sidebar">
        <div v-for="item in tabList" :key="item.value" :class="['sidebar-item', { active: currentTab === item.value }]"
          @click="currentTab = item.value; goTab(item.value)">
          {{ item.label }}
        </div>
      </aside>
      <section class="tab-content">
        <nav class="breadcrumb">
          <span class="breadcrumb-link" @click="goHome">首頁</span>
          <span> &gt; </span>
          <span class="breadcrumb-link" @click="goReaderService">讀者服務</span>
          <span v-if="currentTabLabel"> &gt; </span>
          <span v-if="currentTabLabel" class="breadcrumb-link" @click="goTab(currentTab)">{{ currentTabLabel }}</span>
        </nav>
        <div v-if="currentTab === 'card'">
          <h2>借書證</h2>
          <div class="tab-block">借書證相關說明或功能...</div>
        </div>
        <div v-else-if="currentTab === 'apply'">
          <h2>借書證申請</h2>
          <div class="tab-block">借書證申請表單或說明...</div>
        </div>
        <div v-else-if="currentTab === 'group-card'">
          <h2>集體圖書館卡申請</h2>
          <div class="tab-block">集體卡申請內容...</div>
        </div>
        <div v-else-if="currentTab === 'borrow-return'">
          <h2>借款/歸還</h2>
          <div class="tab-block">借還書流程說明...</div>
        </div>
        <div v-else>
          <h2>請選擇左側功能</h2>
        </div>
      </section>
    </div>
    <!-- 頁尾 -->
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const tabList = [
  { label: '借書證', value: 'card' },
  { label: '借書證申請', value: 'apply' },
  { label: '集體圖書館卡申請', value: 'group-card' },
  { label: '借款/歸還', value: 'borrow-return' },
]
const currentTab = ref(route.query.tab || 'card')
watch(() => route.query.tab, (val) => {
  if (val) currentTab.value = val
})

const currentTabLabel = computed(() => {
  const found = tabList.find(t => t.value === currentTab.value)
  return found ? found.label : ''
})

function goHome() {
  router.push('/')
}
function goReaderService() {
  router.push('/reader-service')
}
function goTab(tab) {
  router.push({ path: '/reader-service', query: { tab } })
}
</script>

<style scoped>
.reader-bg {
  min-height: 100vh;
  background: #f8fafc;
}

.main-banner {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  display: block;
  margin-bottom: 0;
}

.breadcrumb {
  padding: 0 0 12px 0;
  font-size: 1.05rem;
  color: #333;
}

.breadcrumb-link {
  color: #1976d2;
  cursor: pointer;
  text-decoration: underline;
}

.breadcrumb-link:hover {
  color: #d32d1c;
}

.reader-panel {
  max-width: 1200px;
  margin: -60px auto 0 auto;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  display: flex;
  min-height: 500px;
  overflow: hidden;
}

.sidebar {
  width: 240px;
  background: #f3f4f6;
  border-right: 1px solid #e5e7eb;
  padding: 32px 0 32px 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar-item {
  padding: 16px 32px;
  cursor: pointer;
  font-size: 1.1rem;
  color: #333;
  background: none;
  border-left: 4px solid transparent;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.sidebar-item.active {
  background: #fff;
  color: #d32d1c;
  border-left: 4px solid #d32d1c;
  font-weight: bold;
}

.tab-content {
  flex: 1;
  padding: 48px 40px;
  background: #fff;
  min-height: 400px;
  display: flex;
  flex-direction: column;
}

.tab-content h2 {
  font-size: 1.5rem;
  color: #d32d1c;
  margin-bottom: 1.5rem;
}

.tab-block {
  background: #f8fafc;
  border-radius: 8px;
  padding: 32px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  color: #333;
  font-size: 1.1rem;
}

@media (max-width: 900px) {
  .reader-panel {
    flex-direction: column;
    box-shadow: none;
    border-radius: 0;
  }

  .sidebar {
    width: 100%;
    flex-direction: row;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    padding: 0;
    gap: 0;
  }

  .sidebar-item {
    flex: 1;
    text-align: center;
    padding: 14px 0;
    border-left: none;
    border-bottom: 4px solid transparent;
  }

  .sidebar-item.active {
    border-left: none;
    border-bottom: 4px solid #d32d1c;
  }

  .tab-content {
    padding: 24px 10px;
  }

  .breadcrumb {
    padding: 18px 10px 0 10px;
    font-size: 1rem;
  }
}
</style>