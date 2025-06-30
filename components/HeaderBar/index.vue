<template>
  <header class="nlpi-header">
    <div class="nlpi-header-main">
      <img src="/public/images/timelogo.png" alt="Time Library Logo" class="nlpi-logo" />
      <div class="nlpi-header-right">
        <div class="top-links" :class="{ 'menu-open': isMenuOpen }">
          <ul>
            <li v-for="(link, index) in links" :key="link.href || link.label" :title="link.label">
              <template v-if="link.label">
                <NuxtLink :to="generateLink(link.href)" class="top-link">
                  {{ link.label }}
                </NuxtLink>
              </template>
              <!-- <template v-else>
                <button class="a11y-toggle" @click="toggleAccessibility" aria-label="切換視障友善模式">
                  {{ isAccessible ? '標準模式' : '無障礙模式' }}
                </button>
              </template> -->

              <span v-if="index !== links.length - 1" class="separator">＊</span>
            </li>
          </ul>
        </div>
        <!-- <div class="nlpi-top-links-bar">
          <div class="nlpi-top-links">
            <a href='/'>首頁</a> ／
            <a href='/feedback'>意見信箱</a> ／
            <a href="#">常見問題</a> ／
            <a href=''>無障礙專區</a>
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
        </div> -->
        <nav class="nlpi-nav">
          <div class="nlpi-nav-link nav-dropdown" @mouseenter="showInfoMenu = true" @mouseleave="showInfoMenu = false">
            <span class="nav-label">Information</span>
            <div v-if="showInfoMenu" class="dropdown-menu">
              <NuxtLink to="#">最新消息</NuxtLink>
              <NuxtLink to="#">公告事項</NuxtLink>
              <NuxtLink to="#">活動訊息</NuxtLink>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown" @mouseenter="showDigitalMenu = true"
            @mouseleave="showDigitalMenu = false">
            <span class="nav-label">Digital Resources</span>
            <div v-if="showDigitalMenu" class="dropdown-menu">
              <NuxtLink to="#">電子書</NuxtLink>
              <NuxtLink to="#">電子期刊</NuxtLink>
              <NuxtLink to="#">多媒體資源</NuxtLink>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown" @mouseenter="showReaderMenu = true"
            @mouseleave="showReaderMenu = false">
            <span class="nav-label">Reader Service</span>
            <div v-if="showReaderMenu" class="dropdown-menu">
              <!-- 申請服務 -->
              <div>
                <a href="#" @click.prevent="toggleSubMenu('apply')">申請服務 ▸</a>
                <div v-if="submenuStates.apply" class="submenu">
                  <NuxtLink to="/application/card-application">線上辦證</NuxtLink>
                  <NuxtLink to="/application/seat-reservation">自習座位預約</NuxtLink>
                  <NuxtLink to="/application/book-recommendation">書籍薦購</NuxtLink>
                </div>
              </div>

              <!-- 館藏查詢 -->
              <div>
                <a href="#" @click.prevent="toggleSubMenu('catalogue')">館藏查詢 ▸</a>
                <div v-if="submenuStates.catalogue" class="submenu">
                  <NuxtLink to="/catalogue-search">館藏查詢</NuxtLink>
                </div>
              </div>

              <!-- 館藏預約 -->
              <div>
                <a href="#" @click.prevent="toggleSubMenu('reserve')">館藏預約 ▸</a>
                <div v-if="submenuStates.reserve" class="submenu">
                  <NuxtLink to="/reserve/reservation-record">預約清單</NuxtLink>
                  <NuxtLink to="/reserve/reservation-history">預約紀錄</NuxtLink>
                </div>
              </div>

              <!-- 借閱服務 -->
              <div>
                <a href="#" @click.prevent="toggleSubMenu('borrow')">借閱服務 ▸</a>
                <div v-if="submenuStates.borrow" class="submenu">
                  <NuxtLink to="/borrow/borrow-search">借書查詢</NuxtLink>
                  <NuxtLink to="/borrow/borrow-record">我要借書</NuxtLink>
                  <NuxtLink to="/borrow/borrow-continue">我要續借</NuxtLink>
                </div>
              </div>

              <!-- 排行榜 & 評論 -->
              <div>
                <a href="#" @click.prevent="toggleSubMenu('ranking')">排行榜 & 評論 ▸</a>
                <div v-if="submenuStates.ranking" class="submenu">
                  <NuxtLink to="/ranking/borrowing-rankings">借閱排行榜</NuxtLink>
                  <NuxtLink to="/ranking/book-review">讀者書評</NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown" @mouseenter="showLocationMenu = true"
            @mouseleave="showLocationMenu = false">
            <span class="nav-label">Locations & Hours</span>
            <div v-if="showLocationMenu" class="dropdown-menu">
              <NuxtLink to='/introduction/location'>本館位置</NuxtLink>
              <NuxtLink to='/introduction/opening-hours'>開放時間</NuxtLink>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown" @mouseenter="showAboutMenu = true"
            @mouseleave="showAboutMenu = false">
            <span class="nav-label">About NLPI</span>
            <div v-if="showAboutMenu" class="dropdown-menu">
              <NuxtLink to='/introduction/about'>本館簡介</NuxtLink>
              <NuxtLink to='/introduction/audience'>服務對象</NuxtLink>
              <NuxtLink to="#">組織架構</NuxtLink>
              <NuxtLink to="#">聯絡我們</NuxtLink>
            </div>
          </div>
          <div class="nlpi-service-search-bar">
            <div class="nlpi-service-popup-wrap">
              <button class="nlpi-service-btn" @click="showServicePopup = !showServicePopup">
                <span class="nlpi-btn-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="#444" stroke-width="2" />
                    <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#444" stroke-width="2"
                      stroke-linecap="round" />
                  </svg>
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
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="8" y="12" width="32" height="24" rx="3" stroke="#003366" stroke-width="2" />
                            <rect x="14" y="20" width="8" height="8" rx="2" stroke="#003366" stroke-width="2" />
                            <rect x="26" y="20" width="10" height="2" rx="1" fill="#003366" />
                            <rect x="26" y="26" width="10" height="2" rx="1" fill="#003366" />
                          </svg>
                        </div>
                        <div class="service-card-label">登入</div>
                      </div>
                    </div>
                    <div class="service-card">
                      <div class="service-card-inner">
                        <div class="service-card-icon">
                          <!-- 報名 SVG -->
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="12" y="10" width="24" height="28" rx="2" stroke="#003366" stroke-width="2" />
                            <rect x="16" y="16" width="16" height="2" rx="1" fill="#003366" />
                            <rect x="16" y="22" width="16" height="2" rx="1" fill="#003366" />
                            <rect x="16" y="28" width="10" height="2" rx="1" fill="#003366" />
                          </svg>
                        </div>
                        <div class="service-card-label">報名參加活動</div>
                      </div>
                    </div>
                    <div class="service-card">
                      <div class="service-card-inner">
                        <div class="service-card-icon">
                          <!-- 座位 SVG -->
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="10" y="18" width="28" height="14" rx="3" stroke="#003366" stroke-width="2" />
                            <rect x="14" y="32" width="20" height="4" rx="2" fill="#003366" />
                          </svg>
                        </div>
                        <div class="service-card-label">座位及房間預訂</div>
                      </div>
                    </div>
                    <div class="service-card">
                      <div class="service-card-inner">
                        <div class="service-card-icon">
                          <!-- 場地 SVG -->
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="8" y="16" width="32" height="16" rx="3" stroke="#003366" stroke-width="2" />
                            <rect x="16" y="24" width="16" height="6" rx="2" fill="#003366" />
                          </svg>
                        </div>
                        <div class="service-card-label">場地及房間租賃</div>
                      </div>
                    </div>
                    <div class="service-card">
                      <div class="service-card-inner">
                        <div class="service-card-icon">
                          <!-- 導覽 SVG -->
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="10" y="14" width="28" height="20" rx="3" stroke="#003366" stroke-width="2" />
                            <rect x="16" y="20" width="16" height="2" rx="1" fill="#003366" />
                            <rect x="16" y="26" width="10" height="2" rx="1" fill="#003366" />
                          </svg>
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
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="#444" stroke-width="2" />
                  <path d="M20 20L17 17" stroke="#444" stroke-width="2" stroke-linecap="round" />
                </svg>
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
import { generateLink } from '@/composables/useNavigation'

const router = useRouter()

const showInfoMenu = ref(false)
const showDigitalMenu = ref(false)
const showReaderMenu = ref(false)
const showLocationMenu = ref(false)
const showAboutMenu = ref(false)
const showLangMenu = ref(false)
const showServicePopup = ref(false)
const showSearchPopup = ref(false)

const showApplySubMenu = ref(false)
function toggleApplyMenu() {
  showApplySubMenu.value = !showApplySubMenu.value
}

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

let links = [
  { label: '首頁', href: '/' },
  { label: '網站導覽', href: '' },
  { label: '開放時間', href: '/introduction/opening-hours' },
  { label: '意見信箱', href: '/feedback' },
]

const submenuStates = ref({
  apply: false,
  catalogue: false,
  reserve: false,
  borrow: false,
  ranking: false
})

function toggleSubMenu(key) {
  submenuStates.value[key] = !submenuStates.value[key]
}

</script>

<style>
.submenu {
  margin-left: 1rem;
  padding-left: 0.5rem;
  border-left: 2px solid #ddd;
}

.dropdown-menu a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
  color: #333;
}

.dropdown-menu a:hover {
  background-color: #f0f0f0;
}

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

.top-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 10rem;
  margin-top: 0.5rem;
}

.top-links ul {
  display: flex;
  list-style: none;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.top-links a {
  text-decoration: none;
  color: #333;
  font-size: 1.25rem;
}

.top-links a:hover {
  color: skyblue;
}

.a11y-toggle {
  white-space: nowrap;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
  background-color: #111;
  border-radius: 5rem;
}

.a11y-toggle:hover {
  color: yellow;
  /* 黃色高對比 */
}

.a11y-toggle:focus {
  outline: 2px solid red;
  outline-offset: 2px;
}

.separator {
  color: #999;
  margin-left: 0.7rem;
  font-size: 1.25rem;
}
</style>