<template>
  <header class="nlpi-header">
    <div class="nlpi-header-main">
      <img src="/public/images/timelogo.png" alt="Time Library Logo" class="nlpi-logo" />
      <div class="nlpi-header-right">
        <div class="nlpi-top-links-bar">
          <div class="nlpi-top-links">
            <a href="#">首頁</a> ／
            <a href="#">網站地圖</a> ／
            <a href="#">雙語字典</a> ／
            <a href="#">聯絡我們</a> ／
            <a href="#">常見問題</a> ／
            <a href="#">Zones for different groups</a>
          </div>
          <div class="nlpi-social-lang">              
            <div class="nlpi-lang-dropdown" @mouseenter="showLangMenu = true" @mouseleave="showLangMenu = false">
              <button class="nlpi-lang-btn">Language ▼</button>
              <div v-if="showLangMenu" class="nlpi-lang-menu">
                <a href="#">繁體中文</a>
                <a href="#">English</a>
                <a href="#">日本語</a>
              </div>
            </div>
          </div>
        </div>
        <nav class="nlpi-nav">             
          <div class="nlpi-nav-link nav-dropdown"
               @mouseenter="showInfoMenu = true"
               @mouseleave="showInfoMenu = false">
            <span class="nav-label">Information</span>
            <div v-if="showInfoMenu" class="dropdown-menu">
              <a href="#">最新消息</a>
              <a href="#">公告事項</a>
              <a href="#">活動訊息</a>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown"
               @mouseenter="showDigitalMenu = true"
               @mouseleave="showDigitalMenu = false">
            <span class="nav-label">Digital Resources</span>
            <div v-if="showDigitalMenu" class="dropdown-menu">
              <a href="#">電子書</a>
              <a href="#">電子期刊</a>
              <a href="#">多媒體資源</a>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown"
               @mouseenter="showReaderMenu = true"
               @mouseleave="showReaderMenu = false">
            <span class="nav-label">Reader Service</span>
            <div v-if="showReaderMenu" class="dropdown-menu">
              <a href="/application/card-application">線上辦證</a>
              <a href="#" @click.prevent="navigateToTab('seat')">座位預約</a>
              <a href="#" @click.prevent="navigateToTab('borrow')">借閱服務</a>
              <a href="#" @click.prevent="navigateToTab('catalogue')">館藏查詢</a>
              <a href="#" @click.prevent="navigateToTab('reserve')">預約服務</a>
              <a href="#" @click.prevent="navigateToTab('ranking')">排行榜</a>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown"
               @mouseenter="showLocationMenu = true"
               @mouseleave="showLocationMenu = false">
            <span class="nav-label">Locations & Hours</span>
            <div v-if="showLocationMenu" class="dropdown-menu">
              <a href="#">分館資訊</a>
              <a href="#">開放時間</a>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown"
               @mouseenter="showAboutMenu = true"
               @mouseleave="showAboutMenu = false">
            <span class="nav-label">About NLPI</span>
            <div v-if="showAboutMenu" class="dropdown-menu">
              <a href="#">圖書館簡介</a>
              <a href="#">組織架構</a>
              <a href="#">聯絡我們</a>
            </div>
          </div>
          <div class="nlpi-service-search-bar">
            <div class="nlpi-service-popup-wrap">
              <button class="nlpi-service-btn" @click="showServicePopup = !showServicePopup">
                <span class="nlpi-btn-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="4" stroke="#444" stroke-width="2"/><path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#444" stroke-width="2" stroke-linecap="round"/></svg>
                </span>
                <span class="nlpi-btn-text">線上服務</span>
              </button>
              <div v-if="showServicePopup" class="nlpi-service-popup-panel">
                <div class="nlpi-popup-content service-cards-content">
                  <h2 class="service-cards-title">線上服務</h2>
                  <div class="service-cards-row">
                    <div class="service-card">
                      <div class="service-card-inner">
                        <div class="service-card-icon">
                          <!-- 身分證 SVG -->
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="12" width="32" height="24" rx="3" stroke="#003366" stroke-width="2"/><rect x="14" y="20" width="8" height="8" rx="2" stroke="#003366" stroke-width="2"/><rect x="26" y="20" width="10" height="2" rx="1" fill="#003366"/><rect x="26" y="26" width="10" height="2" rx="1" fill="#003366"/></svg>
                        </div>
                        <div class="service-card-label">登入</div>
                      </div>
                    </div>
                    <div class="service-card">
                      <div class="service-card-inner">
                        <div class="service-card-icon">
                          <!-- 報名 SVG -->
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="12" y="10" width="24" height="28" rx="2" stroke="#003366" stroke-width="2"/><rect x="16" y="16" width="16" height="2" rx="1" fill="#003366"/><rect x="16" y="22" width="16" height="2" rx="1" fill="#003366"/><rect x="16" y="28" width="10" height="2" rx="1" fill="#003366"/></svg>
                        </div>
                        <div class="service-card-label">報名參加活動</div>
                      </div>
                    </div>
                    <div class="service-card">
                      <div class="service-card-inner">
                        <div class="service-card-icon">
                          <!-- 座位 SVG -->
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="10" y="18" width="28" height="14" rx="3" stroke="#003366" stroke-width="2"/><rect x="14" y="32" width="20" height="4" rx="2" fill="#003366"/></svg>
                        </div>
                        <div class="service-card-label">座位及房間預訂</div>
                      </div>
                    </div>
                    <div class="service-card">
                      <div class="service-card-inner">
                        <div class="service-card-icon">
                          <!-- 場地 SVG -->
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="8" y="16" width="32" height="16" rx="3" stroke="#003366" stroke-width="2"/><rect x="16" y="24" width="16" height="6" rx="2" fill="#003366"/></svg>
                        </div>
                        <div class="service-card-label">場地及房間租賃</div>
                      </div>
                    </div>
                    <div class="service-card">
                      <div class="service-card-inner">
                        <div class="service-card-icon">
                          <!-- 導覽 SVG -->
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect x="10" y="14" width="28" height="20" rx="3" stroke="#003366" stroke-width="2"/><rect x="16" y="20" width="16" height="2" rx="1" fill="#003366"/><rect x="16" y="26" width="10" height="2" rx="1" fill="#003366"/></svg>
                        </div>
                        <div class="service-card-label">參觀與遊覽</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nlpi-btn-divider"></div>
            <button class="nlpi-service-btn" @click="showSearchPopup = !showSearchPopup">
              <span class="nlpi-btn-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#444" stroke-width="2"/><path d="M20 20L17 17" stroke="#444" stroke-width="2" stroke-linecap="round"/></svg>
              </span>
              <span class="nlpi-btn-text">搜尋</span>
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showInfoMenu = ref(false)
const showDigitalMenu = ref(false)
const showReaderMenu = ref(false)
const showLocationMenu = ref(false)
const showAboutMenu = ref(false)
const showLangMenu = ref(false)
const showServicePopup = ref(false)
const showSearchPopup = ref(false)

function navigateToTab(tab) {
  router.push({ path: '/reader-service', query: { tab } })
  showReaderMenu.value = false
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    if (
      showServicePopup.value &&
      !e.target.closest('.nlpi-service-popup-wrap')
    ) showServicePopup.value = false
    if (
      showSearchPopup.value &&
      !e.target.closest('.nlpi-search-popup-wrap')
    ) showSearchPopup.value = false
  })
})
</script>

<style>
.nlpi-header {
  background: #fff;
  border-bottom: 3px solid #003366;
  padding: 0 2rem;
}
.nlpi-header-main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 150px;
}
.nlpi-logo {
  height: 150px;
}
.nlpi-top-links {
  font-size: 1.08rem;
  color: #666;
  white-space: nowrap;
}
.nlpi-top-links a {
  color: #1976d2;
  text-decoration: none;
  margin: 0 0.2rem;
  transition: color 0.2s;
}
.nlpi-top-links a:hover {
  color: #0055a5;
}
</style>