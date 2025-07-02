<template>
  <div class="info-list-bg">
    <!-- <img src="/images/library-building.jpg" class="info-list-banner" alt="banner" /> -->
    <div class="info-list-container">
      <div class="info-list-title">{{ title }}</div>
      <div class="info-list-tabs">
        <button v-for="tab in tabs" :key="tab" :class="['info-list-tab', {active: tab === activeTab}]" @click="$emit('update:activeTab', tab)">{{ tab }}</button>
      </div>
      <table class="info-list-table">
        <thead>
          <tr>
            <!-- <th>類別名稱</th> -->
            <th>標題</th>
            <th>公告日期</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <!-- <td>{{ item.type }}</td> -->
            <td>
              <NuxtLink :to="item.link || `/news/${item.id}`">{{ item.title }}</NuxtLink>
            </td>
            <td>{{ item.date }}</td>
            <td>{{ item.views }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
const props = defineProps({
  title: String,
  tabs: Array,
  activeTab: String,
  types: Array,
  items: Array
})
const emit = defineEmits(['update:activeTab', 'search'])
const selectedType = ref('')
const keyword = ref('')
watch(() => props.activeTab, () => {
  selectedType.value = ''
  keyword.value = ''
})
</script>
<style scoped>
.info-list-bg {
  background: #f8fafc;
  min-height: 100vh;
  padding-bottom: 40px;
}
.info-list-banner {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  display: block;
}
.info-list-container {
  max-width: 1100px;
  margin: 40px auto 0 auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  position: relative;
  z-index: 2;
}
.info-list-title {
  font-size: 2.5rem;
  color: #003366;
  font-weight: bold;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  border-left: 6px solid #003366;
  padding-left: 18px;
}
.info-list-tabs {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.info-list-tab {
  background: none;
  border: none;
  font-size: 1.15rem;
  color: #003366;
  font-weight: 600;
  padding: 0.5rem 2.5rem;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
}
.info-list-tab.active, .info-list-tab:hover {
  background: #e3eaf6;
  color: #003366;
}
.info-list-search-bar {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: center;
}
.info-list-select, .info-list-input {
  font-size: 1.08rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #b0c4de;
}
.info-list-search-btn {
  background: #003366;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 2rem;
  font-size: 1.08rem;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.18s;
}
.info-list-search-btn:hover {
  background: #002244;
}
.info-list-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0,51,102,0.06);
  overflow: hidden;
}
.info-list-table thead th {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #e3eaf6;
  color: #003366;
  font-weight: 700;
  font-size: 1.13rem;
  letter-spacing: 1px;
  border-bottom: 2px solid #b0c4de;
  padding: 1.1rem 0.7rem;
}
.info-list-table th, .info-list-table td {
  padding: 1.1rem 0.7rem;
  text-align: left;
  font-size: 1.08rem;
}
.info-list-table tbody tr {
  transition: background 0.18s;
}
.info-list-table tbody tr:hover {
  background: #f0f6fa;
}
.info-list-table td {
  border-bottom: 1px solid #b0c4de;
  color: #003366;
  vertical-align: middle;
}
.info-list-table td a {
  color: #003366;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.18s;
}
.info-list-table td a:hover {
  color: #00509e;
}
@media (max-width: 900px) {
  .info-list-container {
    padding: 1.2rem 0.5rem 1.5rem 0.5rem;
  }
  .info-list-title {
    font-size: 1.5rem;
    padding-left: 10px;
  }
  .info-list-table th, .info-list-table td {
    padding: 0.7rem 0.3rem;
    font-size: 0.98rem;
  }
}
</style> 