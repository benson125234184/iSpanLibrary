<template>
  <div class="info-list-bg">
    <img src="/public/images/library-building.jpg" class="info-list-banner" alt="banner" />
    <div class="info-list-container">
      <div class="info-list-title">{{ title }}</div>
      <div class="info-list-tabs">
        <button v-for="tab in tabs" :key="tab" :class="['info-list-tab', {active: tab === activeTab}]" @click="$emit('update:activeTab', tab)">{{ tab }}</button>
      </div>
      <div class="info-list-search-bar">
        <select v-model="selectedType" class="info-list-select">
          <option value="">都</option>
          <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
        </select>
        <input v-model="keyword" class="info-list-input" placeholder="Please enter keyword" />
        <button class="info-list-search-btn" @click="$emit('search', {type: selectedType, keyword})">搜尋</button>
      </div>
      <table class="info-list-table">
        <thead>
          <tr>
            <th>類別名稱</th>
            <th>標題</th>
            <th>公告日期</th>
            <th>打</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.type }}</td>
            <td><a :href="item.link">{{ item.title }}</a></td>
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
  margin: -120px auto 0 auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 2.5rem 2rem 2rem 2rem;
  position: relative;
  z-index: 2;
}
.info-list-title {
  font-size: 2.2rem;
  color: #222;
  font-weight: bold;
  margin-bottom: 1.5rem;
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
  color: #c0392b;
  font-weight: 600;
  padding: 0.5rem 2.5rem;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
}
.info-list-tab.active, .info-list-tab:hover {
  background: #c0392b;
  color: #fff;
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
  border: 1px solid #ccc;
}
.info-list-search-btn {
  background: #c0392b;
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
  background: #a93226;
}
.info-list-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
  background: #fff;
}
.info-list-table th, .info-list-table td {
  border-bottom: 1px solid #eee;
  padding: 0.9rem 0.5rem;
  text-align: left;
  font-size: 1.08rem;
}
.info-list-table th {
  color: #c0392b;
  font-weight: 700;
  background: #faf6f3;
}
.info-list-table td a {
  color: #222;
  text-decoration: underline;
}
</style> 