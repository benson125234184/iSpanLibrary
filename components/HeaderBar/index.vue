<template>
  <header class="nlpi-header">
    <div class="nlpi-header-main">
      <img src="/public/images/timelogo.png" alt="Time Library Logo" class="nlpi-logo" />

      <div class="nlpi-header-right">
        <!-- 漢堡按鈕 -->
        <!-- <button class="hamburger-btn" @click="toggleMobileMenu">
          <svg width="30" height="30" viewBox="0 0 28 28">
            <rect x="3" y="6" width="22" height="4" rx="2" fill="#003366" />
            <rect x="3" y="12" width="22" height="4" rx="2" fill="#003366" />
            <rect x="3" y="18" width="22" height="4" rx="2" fill="#003366" />
          </svg>
        </button> -->
        <div class="top-links" :class="{ 'menu-open': isMobileMenuOpen }">
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

              <span v-if="index !== links.length - 1" class="separator">/</span>
            </li>
          </ul>
        </div>
        <div v-if="currentUser" class="welcome-message-with-logout">
          您好 ~ {{ currentUser.name }} 😆
          <button class="logout-button" @click="handleLogout">登出 ⍈</button>
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
        <nav :class="['nlpi-nav', { open: isMobileMenuOpen }]">
          <div class="nlpi-nav-link nav-dropdown" @mouseenter="showInfoMenu = true" @mouseleave="showInfoMenu = false">
            <span class="nav-label">最新資訊</span>
            <div v-if="showInfoMenu" class="dropdown-menu">
              <NuxtLink to="/news">最新消息</NuxtLink>
              <NuxtLink to="#">公告事項</NuxtLink>
              <NuxtLink to="#">活動訊息</NuxtLink>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown" @mouseenter="showDigitalMenu = true"
            @mouseleave="showDigitalMenu = false">
            <span class="nav-label">電子資源</span>
            <div v-if="showDigitalMenu" class="dropdown-menu">
              <NuxtLink to="#">電子書</NuxtLink>
              <NuxtLink to="#">電子期刊</NuxtLink>
              <NuxtLink to="#">多媒體資源</NuxtLink>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown" @mouseenter="showReaderMenu = true"
            @mouseleave="showReaderMenu = false">
            <span class="nav-label">讀者服務</span>
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
            <span class="nav-label">地點 & 時間</span>
            <div v-if="showLocationMenu" class="dropdown-menu">
              <NuxtLink to='/introduction/location'>本館位置</NuxtLink>
              <NuxtLink to='/introduction/opening-hours'>開放時間</NuxtLink>
            </div>
          </div>
          <div class="nlpi-nav-link nav-dropdown" @mouseenter="showAboutMenu = true"
            @mouseleave="showAboutMenu = false">
            <span class="nav-label">關於我們</span>
            <div v-if="showAboutMenu" class="dropdown-menu">
              <NuxtLink to='/introduction/about'>本館簡介</NuxtLink>
              <NuxtLink to='/introduction/audience'>服務對象</NuxtLink>
              <!-- <NuxtLink to="#">組織架構</NuxtLink> -->
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
                    <div class="service-card" @click="handleUserAction">
                      <div class="service-card-inner">
                        <div class="service-card-icon">
                          <template v-if="!isLoggedIn">
                            <!-- 身分證 SVG -->
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                              <rect x="8" y="12" width="32" height="24" rx="3" stroke="#003366" stroke-width="2" />
                              <rect x="14" y="20" width="8" height="8" rx="2" stroke="#003366" stroke-width="2" />
                              <rect x="26" y="20" width="10" height="2" rx="1" fill="#003366" />
                              <rect x="26" y="26" width="10" height="2" rx="1" fill="#003366" />
                            </svg>
                          </template>
                          <template v-else>
                            <!-- 會員頭像 SVG -->
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                              <circle cx="24" cy="18" r="10" stroke="#003366" stroke-width="2" fill="#e3eaf6" />
                              <ellipse cx="24" cy="34" rx="14" ry="8" stroke="#003366" stroke-width="2"
                                fill="#e3eaf6" />
                            </svg>
                          </template>
                        </div>
                        <div class="service-card-label">{{ isLoggedIn ? userInfo.name : '登入' }}</div>
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
            <button class="nlpi-service-btn" @click="toggleSearchInput">
              <span class="nlpi-btn-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="#444" stroke-width="2" />
                  <path d="M20 20L17 17" stroke="#444" stroke-width="2" stroke-linecap="round" />
                </svg>
              </span>
              <span class="nlpi-btn-text">搜尋</span>
            </button>

            <!-- 顯示搜尋欄 -->
            <!-- 下方展開的搜尋輸入欄 -->
            <transition name="fade-slide">
              <div v-if="showSearchInput" class="search-input-panel">
                <input type="text" v-model="keyword" placeholder="站內搜尋" class="search-input"
                  @keyup.enter="submitSearch" />
                <button class="search-icon" @click="submitSearch"><svg width="22" height="22" viewBox="0 0 24 24"
                    fill="none">
                    <circle cx="11" cy="11" r="7" stroke="#444" stroke-width="2" />
                    <path d="M20 20L17 17" stroke="#444" stroke-width="2" stroke-linecap="round" />
                  </svg></button>
              </div>
            </transition>
          </div>
        </nav>
      </div>
    </div>

    <!-- 登入懸浮視窗 -->
    <transition name="login-overlay-fade">
      <div v-if="showLoginModal" class="login-modal-overlay" @click="closeLoginModal">
        <transition name="login-modal-zoom">
          <div v-if="showLoginModal" class="login-modal" @click.stop>
            <div class="login-modal-header">
              <h3>會員登入</h3>
              <button class="close-btn" @click="closeLoginModal">×</button>
            </div>
            <div class="login-modal-body">
              <form @submit.prevent="handleLogin" class="login-form">
                <div class="form-group">
                  <label for="email">電子郵件</label>
                  <input id="email" v-model="loginForm.email" type="email" placeholder="請輸入您的電子郵件" required />
                </div>
                <div class="form-group">
                  <label for="password">密碼</label>
                  <input id="password" v-model="loginForm.password" :type="showPassword ? 'text' : 'password'"
                    placeholder="請輸入您的密碼" required />
                  <button type="button" @click="showPassword = !showPassword">👁</button>
                </div>

                <div class="form-actions">
                  <button type="submit" class="login-btn" :disabled="isLoggingIn">
                    {{ isLoggingIn ? '登入中...' : '登入' }}
                  </button>
                </div>
                <div class="form-links">
                  <a href="/forgot-password" class="forgot-password">忘記密碼？</a>
                  <a href="/application/card-application" class="register-link">申請新帳號</a>
                </div>
              </form>
            </div>
          </div>
        </transition>
      </div>
    </transition>

    <!-- 用戶選單 -->
    <transition name="user-menu-fade">
      <div v-if="showUserMenu && isLoggedIn" class="user-menu-overlay" @click="showUserMenu = false">
        <div class="user-menu" @click.stop>
          <div class="user-menu-header">
            <div class="user-avatar">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="#003366" stroke-width="2" />
                <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#003366" stroke-width="2"
                  stroke-linecap="round" />
              </svg>
            </div>
            <div class="user-info">
              <div class="user-name">{{ userInfo.name }}</div>
              <div class="user-email">{{ userInfo.email }}</div>
              <div class="user-role">{{ userInfo.role === 'admin' ? '管理者' : '會員' }}</div>
            </div>
          </div>
          <div class="user-menu-body">
            <button class="user-menu-item" @click="navigateToMemberPage">
              <span class="menu-icon">👤</span>
              個人資料
            </button>
            <button class="user-menu-item" @click="navigateToBorrowRecord">
              <span class="menu-icon">📚</span>
              借閱紀錄
            </button>
            <button class="user-menu-item" @click="navigateToReservationRecord">
              <span class="menu-icon">📅</span>
              預約紀錄
            </button>
            <div class="user-menu-divider"></div>
            <button class="user-menu-item user-menu-logout" @click="logout">
              <span class="menu-icon">🚪</span>
              登出
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- CustomAlert 元件 -->
    <CustomAlert :show="showAlert" :title="alertTitle" :message="alertMessage" :type="alertType"
      :confirm-text="alertConfirmText" @close="closeAlert" @confirm="handleAlertConfirm" />
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { generateLink } from '@/composables/useNavigation'
import { triggerLoginSuccess } from '@/composables/useLoginState'
import axios from 'axios'
import CustomAlert from '@/components/CustomAlert.vue'

const router = useRouter()

const showInfoMenu = ref(false)
const showDigitalMenu = ref(false)
const showReaderMenu = ref(false)
const showLocationMenu = ref(false)
const showAboutMenu = ref(false)
const showLangMenu = ref(false)
const showServicePopup = ref(false)
const showSearchPopup = ref(false)
const showLoginModal = ref(false)
const showUserMenu = ref(false)
const isLoggingIn = ref(false)
const showPassword = ref(false)

// CustomAlert 相關狀態
const showAlert = ref(false)
const alertTitle = ref('')
const alertMessage = ref('')
const alertType = ref('alert')
const alertConfirmText = ref('確認')

// 用戶狀態管理
const isLoggedIn = ref(false)
const userInfo = ref({
  name: '',
  email: '',
  role: ''
})

const loginForm = ref({
  email: '',
  password: ''
})

const currentUser = ref(null)

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    try {
      currentUser.value = JSON.parse(storedUser)
    } catch (e) {
      console.error('使用者資料解析錯誤', e)
    }
  }
})

function handleLogout() {
  localStorage.removeItem('jwt_token')
  localStorage.removeItem('user')
  localStorage.removeItem('user_role')
  alert('已成功登出')
  window.location.reload()
}



const showApplySubMenu = ref(false)
function toggleApplyMenu() {
  showApplySubMenu.value = !showApplySubMenu.value
}

function navigateToTab(tab) {
  router.push({ path: '/reader-service', query: { tab } })
  showReaderMenu.value = false
}

function closeLoginModal() {
  showLoginModal.value = false
  showServicePopup.value = false
  // 重置表單和管理者按鈕狀態
  loginForm.value = {
    email: '',
    password: ''
  }
}

// CustomAlert 相關方法
function showCustomAlert(title, message, type = 'alert', confirmText = '確認') {
  alertTitle.value = title
  alertMessage.value = message
  alertType.value = type
  alertConfirmText.value = confirmText
  showAlert.value = true
}

function closeAlert() {
  showAlert.value = false
}

function handleAlertConfirm() {
  // 可以在這裡處理確認按鈕的邏輯
  closeAlert()
}

// 檢查用戶登入狀態
function checkLoginStatus() {
  const token = localStorage.getItem('jwt_token')
  const user = localStorage.getItem('user')
  const userRole = localStorage.getItem('user_role')

  if (token && user) {
    try {
      const userData = JSON.parse(user)
      isLoggedIn.value = true
      userInfo.value = {
        name: userData.name || userData.email || '會員',
        email: userData.email,
        role: userRole || 'member'
      }
    } catch (error) {
      console.error('解析用戶資料失敗:', error)
      logout()
    }
  } else {
    isLoggedIn.value = false
    userInfo.value = { name: '', email: '', role: '' }
  }
}

// 處理用戶操作（登入或顯示用戶選單）
function handleUserAction() {
  if (isLoggedIn.value) {
    // 如果已登入，顯示用戶選單
    showUserMenu.value = !showUserMenu.value
  } else {
    // 如果未登入，顯示登入視窗
    showLoginModal.value = true
  }
}

// 登出功能
function logout() {
  localStorage.removeItem('jwt_token')
  localStorage.removeItem('user')
  localStorage.removeItem('user_role')
  isLoggedIn.value = false
  userInfo.value = { name: '', email: '', role: '' }
  showUserMenu.value = false
  showServicePopup.value = false
  showCustomAlert('登出成功', '您已成功登出系統')
  window.location.reload()
}

// 導航到會員頁面
function navigateToMemberPage() {
  showUserMenu.value = false
  showServicePopup.value = false
  router.push('/member/profile')
}

// 導航到借閱紀錄
function navigateToBorrowRecord() {
  showUserMenu.value = false
  showServicePopup.value = false
  router.push('/borrow/borrow-record')
}

// 導航到預約紀錄
function navigateToReservationRecord() {
  showUserMenu.value = false
  router.push('/reserve/reservation-record')
}

async function handleLogin() {
  if (!loginForm.value.email || !loginForm.value.password) {
    showCustomAlert('登入錯誤', '請輸入電子郵件和密碼')
    return
  }

  isLoggingIn.value = true

  try {
    // 檢查是否為管理者帳號
    const isAdminAccount = loginForm.value.email.toLowerCase() === 'rtny2cpPlzONBEQ55boMSA9Ze@ispnlibrary.com'

    // 一般會員登入
    const res = await axios.post('http://localhost:8080/api/auth/login', {
      email: loginForm.value.email,
      password: loginForm.value.password
    })

    // 登入成功，儲存 token
    const token = res.data.token
    const user = res.data.user

    // 根據帳號類型設置角色
    const userRole = isAdminAccount ? 'admin' : 'member'

    localStorage.setItem('jwt_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('user_role', userRole)

    // 關閉登入視窗
    closeLoginModal()

    // 更新用戶狀態
    isLoggedIn.value = true
    userInfo.value = {
      name: user.name || user.email || '會員',
      email: user.email,
      role: user
    }
    currentUser.value = user //讓<div v-if="currentUser"> 即時顯示，不需刷新。

    // 顯示登入成功訊息
    const roleMessage = isAdminAccount ? '管理者登入成功！' : '登入成功！'
    showCustomAlert('登入成功', roleMessage, 'alert', '確定')

    // 觸發全局登入成功事件，讓其他組件知道登入狀態已改變
    triggerLoginSuccess()

    const currentPath = router.currentRoute.value.fullPath
    if (
      currentPath.includes('/seat-reservation') ||
      currentPath.includes('/book-recommendation') ||
      currentPath.includes('/reservation-record') ||
      currentPath.includes('/reservation-history') ||
      currentPath.includes('/borrow-search') ||
      currentPath.includes('/borrow-record') ||
      currentPath.includes('/borrow-continue') ||
      currentPath.includes('/book-review')
    ) {
      setTimeout(() => router.go(0), 300)  // 延遲一點點確保 alert 被看到
    }
  } catch (err) {
    showCustomAlert('登入失敗', '登入失敗：' + (err.response?.data?.message || err.message))
  } finally {
    isLoggingIn.value = false
  }
}

onMounted(() => {
  // 檢查用戶登入狀態
  checkLoginStatus()

  // 監聽自定義事件來顯示登入視窗
  const handleShowLoginModal = () => {
    showLoginModal.value = true
  }
  window.addEventListener('show-login-modal', handleShowLoginModal)

  document.addEventListener('click', (e) => {
    if (
      showServicePopup.value &&
      !e.target.closest('.nlpi-service-popup-wrap')
    ) showServicePopup.value = false
    if (
      showSearchPopup.value &&
      !e.target.closest('.nlpi-search-popup-wrap')
    ) showSearchPopup.value = false
    if (
      showUserMenu.value &&
      !e.target.closest('.service-card')
    ) showUserMenu.value = false
  })
})

onUnmounted(() => {
  // 移除事件監聽器
  const handleShowLoginModal = () => {
    showLoginModal.value = true
  }
  window.removeEventListener('show-login-modal', handleShowLoginModal)
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

const showSearchInput = ref(false)

function toggleSearchInput() {
  showSearchInput.value = !showSearchInput.value
}


const keyword = ref('')
function submitSearch() {
  const trimmed = keyword.value.trim()
  if (!trimmed) return
  router.push(`/search?keyword=${encodeURIComponent(trimmed)}`)
}

onMounted(() => {
  document.addEventListener('click', (e) => {
    const isInService = e.target.closest('.nlpi-service-popup-wrap')
    if (!isInService) showServicePopup.value = false

    const isInSearch = e.target.closest('.search-input-panel') || e.target.closest('.nlpi-service-btn')
    if (!isInSearch) showSearchInput.value = false
  })
})

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  console.log('isMobileMenuOpen:', isMobileMenuOpen.value)
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

.hamburger-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  font-size: 2rem;
  color: #003366;
}

.nlpi-nav {
  display: flex;
  gap: 1.5rem;
}

.nlpi-nav-link {
  color: #003366;
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.2s;
}

.nlpi-nav-link:hover {
  color: #0055a5;
}

/* 手機版響應式設計 */
@media (max-width: 768px) {
  .hamburger-btn {
    display: block;
  }

  .nlpi-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: #ffffff;
    flex-direction: column;
    padding: 1rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    z-index: 1000;
  }

  .nlpi-nav.open {
    display: flex;
  }

  .nlpi-nav-link {
    padding: 1rem 0;
    border-bottom: 1px solid #ddd;
    font-size: 1.1rem;
  }
}

/* 平板 ~ 桌機共用樣式 */
@media (min-width: 769px) {
  .nlpi-nav {
    display: flex !important;
    flex-direction: row;
    position: static;
    padding: 0;
    box-shadow: none;
  }

  .nlpi-nav-link {
    border: none;
    padding: 0;
  }

  .hamburger-btn {
    display: none;
  }
}

.nlpi-service-search-bar {
  display: flex;
  align-items: center;
  /* 垂直置中所有子元素 */
  justify-content: flex-end;
  gap: 1rem;
  text-wrap: nowrap;
}

.nlpi-service-popup-wrap {
  position: relative;
}

.welcome-message-with-logout {
  font-size: large;
  margin-right: 7rem;
  color: #003366;
  transform: translateY(2rem);
}

.logout-button {
  background: whitesmoke;
  border-radius: 1.5rem;
  border: none;
  color: #0070c0;
  font-size: 0.9rem;
  cursor: pointer;
  /* text-decoration: underline; */
  padding: 0;
}

.logout-button:hover {
  color: #004a99;
}

.search-input-panel {
  position: absolute;
  top: 100%;
  /* 接在按鈕下方 */
  right: 0;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.search-input {
  flex: 1;
  padding: 6px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-icon {
  background: #e0e0e0;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
}

/* 動畫效果 */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
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

/* 登入懸浮視窗樣式 */
.login-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
  animation: overlayFadeIn 0.3s ease-out;
}

@keyframes overlayFadeIn {
  from {
    opacity: 0;
    backdrop-filter: blur(0px);
  }

  to {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
}

.login-modal::before {
  display: none;
}

.login-modal {
  background: #fff;
  border-radius: 14px;
  box-shadow:
    0 8px 32px 0 rgba(0, 0, 0, 0.18),
    0 1.5px 8px 0 rgba(0, 0, 0, 0.10),
    0 24px 64px 8px rgba(255, 255, 255, 0.28),
    /* 柔和白色光暈 */
    0 48px 120px 0 rgba(255, 255, 255, 0.15);
  /* 更淡的下方白色光暈 */
  width: 500px;
  max-width: 90vw;
  animation: modalFadeIn 0.3s cubic-bezier(.4, 1.4, .6, 1);
  border: none;
  position: relative;
  overflow: hidden;
}

.login-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px 20px;
  border-bottom: none;
  background: linear-gradient(135deg, #003366 0%, #1976d2 100%);
}

.login-modal-header h3 {
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: none;
}

.close-btn {
  background: none;
  border: none;
  font-size: 30px;
  font-weight: bold;
  color: #003366;
  cursor: pointer;
  padding: 8px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  border-radius: 50%;
}

.close-btn:hover {
  color: #fff;
  background: #1976d2;
  transform: scale(1.12);
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.15);
}

.login-modal-body {
  padding: 32px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}

.form-group label {
  width: 90px;
  min-width: 90px;
  text-align: left;
  font-size: 15px;
  font-weight: 500;
  color: #374151;
  margin-right: 8px;
  margin-bottom: 0;
}

.form-group input {
  flex: 1;
  width: 100%;
  min-width: 200px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 14px 18px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 15px;
  transition: all 0.3s ease;
  background: #fafafa;
  margin-left: 0;
}

.form-group input:hover {
  border-color: #d1d5db;
  background: #f9fafb;
}

.form-group input:focus {
  outline: none;
  border-color: #003366;
  background: white;
  box-shadow: 0 0 0 4px rgba(0, 51, 102, 0.1);
  transform: translateY(-1px);
}

.form-group button {
  margin-left: 0.5rem;
  background: none;
  font-size: xx-large;
  border: none;
  cursor: pointer;
}

.form-actions {
  margin-top: 12px;
  display: flex;
  gap: 8px;
}

.login-btn {
  flex: 1;
  padding: 14px 18px;
  background: linear-gradient(135deg, #003366 0%, #0055a5 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.login-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.login-btn:hover:not(:disabled) {
  background: linear-gradient(135deg, #002855 0%, #004080 100%);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 51, 102, 0.3);
}

.login-btn:hover:not(:disabled)::before {
  left: 100%;
}

.login-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.form-links {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 15px;
}

.form-links a {
  color: #003366;
  text-decoration: none;
  transition: color 0.2s;
}

.form-links a:hover {
  color: #002855;
  text-decoration: underline;
}

/* 服務卡片點擊效果 */
.service-card {
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.service-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.service-card:active {
  transform: translateY(0);
}

.login-modal-zoom-enter-active,
.login-modal-zoom-leave-active {
  transition: all 0.9s cubic-bezier(.4, 1.4, .6, 1);
}

.login-modal-zoom-enter-from {
  opacity: 0;
  transform: scale(0.7);
}

.login-modal-zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}

.login-modal-zoom-leave-from {
  opacity: 1;
  transform: scale(1);
}

.login-modal-zoom-leave-to {
  opacity: 0;
  transform: translateY(80px) scale(0.95);
  filter: blur(2px);
}

.login-overlay-fade-enter-active,
.login-overlay-fade-leave-active {
  transition: opacity 0.35s cubic-bezier(.4, 1.4, .6, 1);
}

.login-overlay-fade-enter-from,
.login-overlay-fade-leave-to {
  opacity: 0;
}

.login-overlay-fade-enter-to,
.login-overlay-fade-leave-from {
  opacity: 1;
}

/* 用戶選單樣式 */
.user-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1001;
  padding-top: 100px;
}

.user-menu {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  width: 320px;
  max-width: 90vw;
  overflow: hidden;
  animation: userMenuSlideIn 0.3s ease-out;
}

.user-menu-header {
  background: linear-gradient(135deg, #003366 0%, #1976d2 100%);
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.user-email {
  font-size: 14px;
  opacity: 0.9;
  margin-bottom: 2px;
}

.user-role {
  font-size: 12px;
  opacity: 0.8;
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 8px;
  border-radius: 12px;
  display: inline-block;
}

.user-menu-body {
  padding: 8px 0;
}

.user-menu-item {
  width: 100%;
  padding: 12px 20px;
  background: none;
  border: none;
  text-align: left;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background-color 0.2s;
}

.user-menu-item:hover {
  background-color: #f3f4f6;
}

.user-menu-item:active {
  background-color: #e5e7eb;
}

.menu-icon {
  font-size: 16px;
  width: 20px;
  text-align: center;
}

.user-menu-divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 8px 0;
}

.user-menu-logout {
  color: #dc2626;
}

.user-menu-logout:hover {
  background-color: #fef2f2;
}

/* 用戶選單動畫 */
@keyframes userMenuSlideIn {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.95);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.user-menu-fade-enter-active,
.user-menu-fade-leave-active {
  transition: opacity 0.3s ease;
}

.user-menu-fade-enter-from,
.user-menu-fade-leave-to {
  opacity: 0;
}

.user-menu-fade-enter-active .user-menu,
.user-menu-fade-leave-active .user-menu {
  transition: all 0.3s ease;
}

.user-menu-fade-enter-from .user-menu,
.user-menu-fade-leave-to .user-menu {
  transform: translateY(-20px) scale(0.95);
  opacity: 0;
}

/* Mega Menu 樣式 */
.navbar {
  background: #fff;
  padding: 0 32px;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #eee;
}

.nav-item {
  position: relative;
  padding: 0 24px;
  font-size: 1.15rem;
  font-weight: 600;
  color: #222;
  cursor: pointer;
  height: 64px;
  display: flex;
  align-items: center;
}

.nav-label {
  color: #e65100;
  font-weight: bold;
  letter-spacing: 1px;
}

.mega-menu-wrapper {
  position: absolute;
  left: 0;
  top: 100%;
  width: 100vw;
  display: flex;
  justify-content: center;
  z-index: 1000;
}

.mega-menu {
  background: #fff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  display: flex;
  gap: 48px;
  padding: 32px 48px;
  margin: 0 auto;
  min-width: 900px;
  max-width: 1200px;
  animation: fadeIn 0.25s;
}

.mega-menu-col {
  min-width: 180px;
}

.mega-menu-title {
  font-weight: bold;
  font-size: 1.15rem;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  color: #222;
  position: relative;
  padding-left: 18px;
}

.mega-menu-title::before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 2px;
  width: 4px;
  height: 24px;
  background: #e65100;
  border-radius: 2px;
}

.mega-menu-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mega-menu-item {
  color: #222;
  text-decoration: none;
  font-size: 1rem;
  padding: 4px 0 4px 18px;
  display: block;
  border-radius: 4px;
  transition: background 0.18s, color 0.18s;
  margin-bottom: 2px;
}

.mega-menu-item:hover {
  background: #f3f4f6;
  color: #1976d2;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mega-fade-enter-active,
.mega-fade-leave-active {
  transition: opacity 0.2s;
}

.mega-fade-enter-from,
.mega-fade-leave-to {
  opacity: 0;
}
</style>