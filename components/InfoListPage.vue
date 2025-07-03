<template>
  <div class="info-list-bg">
    <!-- <img src="/images/library-building.jpg" class="info-list-banner" alt="banner" /> -->
    <div class="info-list-title-main">{{ title }}</div>
    <div class="info-list-card">
      <div class="info-list-header-row">
        <span class="header-title">標題</span>
        <span class="header-date">公告日期</span>
      </div>
      <div v-for="(item, idx) in items" :key="item.id" class="info-list-news-item">
        <div class="news-title-row">
          <span class="news-title">
            <NuxtLink :to="`/news-detail/${item.id}`">{{ item.title }}</NuxtLink>
          </span>
          <span class="news-date">{{ item.date }}</span>
        </div>
      </div>
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
  background-image: url('/public/images/library-bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  padding: 40px 0 40px 0;
}

.info-list-banner {
  width: 100%;
  max-height: 260px;
  object-fit: cover;
  display: block;
}

.info-list-card {
  max-width: 900px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10);
  padding: 2.5rem 2rem 2rem 2rem;
}

.info-list-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #dbe4ee;
  padding-bottom: 0.9rem;
  margin-bottom: 0.5rem;
}

.header-title {
  font-size: 1.18rem;
  color: #003366;
  font-weight: bold;
  border-left: 5px solid #003366;
  padding-left: 16px;
  letter-spacing: 2px;
}

.header-date {
  font-size: 1.13rem;
  color: #003366;
  font-weight: bold;
  margin-left: 1.5rem;
  letter-spacing: 1px;
}

.info-list-news-item {
  padding: 1.2rem 0;
  border-bottom: 1px solid #dbe4ee;
}

.info-list-news-item:last-child {
  border-bottom: none;
}

.news-title-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.news-title {
  font-size: 1.13rem;
  color: #222;
  font-weight: 500;
  word-break: break-all;
}

.news-date {
  font-size: 1rem;
  color: #888;
  margin-left: 1.5rem;
  white-space: nowrap;
}

.news-title a {
  color: #555;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.18s;
}

.news-title a:hover {
  color: #1976d2;
}

@media (max-width: 900px) {
  .info-list-card {
    padding: 1.2rem 0.5rem 1.5rem 0.5rem;
  }

  .info-list-header-row {
    padding-bottom: 0.6rem;
  }

  .header-title {
    font-size: 1rem;
    padding-left: 10px;
  }

  .header-date {
    font-size: 0.98rem;
  }

  .news-title {
    font-size: 1rem;
  }

  .news-date {
    font-size: 0.95rem;
  }
}

.info-list-title-main {
  text-align: center;
  font-size: 2rem;
  color: #003366;
  font-weight: bold;
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>