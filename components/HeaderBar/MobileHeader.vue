<template>
    <header class="nlpi-header">
        <div class="nlpi-header-main">
            <!-- 返回首頁按鈕 -->
            <NuxtLink to="/" class="nlpi-logo-link">
                <img src="/public/images/timelogo.png" alt="NLPI Logo" class="nlpi-logo" />
            </NuxtLink>

            <!-- 頂部鏈接 -->
            <div class="top-links">
                <ul>
                    <li v-for="(link, index) in links" :key="link.href || link.label" :title="link.label">
                        <NuxtLink :to="generateLink(link.href)" class="top-link">
                            {{ link.label }}
                        </NuxtLink>
                        <span v-if="index !== links.length - 1" class="separator">/</span>
                    </li>
                </ul>
            </div>

            <!-- 線上服務與搜尋欄 -->
            <div class="nlpi-service-search-bar mobile-only">
                <div class="nlpi-service-popup-wrap">
                    <button class="nlpi-service-btn" @click="showServicePopup = !showServicePopup">
                        <span class="nlpi-btn-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="8" r="4" stroke="#444" stroke-width="2" />
                                <path d="M4 20c0-2.21 3.582-4 8-4s8 1.79 8 4" stroke="#444" stroke-width="2"
                                    stroke-linecap="round" />
                            </svg>
                        </span>
                        <span class="nlpi-btn-text">線上服務</span>
                    </button>
                    <transition name="fade-slide">
                        <div v-if="showServicePopup" class="nlpi-service-popup-panel">
                            <div class="nlpi-popup-content service-cards-content">
                                <h2 class="service-cards-title">線上服務</h2>
                                <div class="service-cards-row">
                                    <div class="service-card" @click="handleUserAction">
                                        <div class="service-card-inner">
                                            <div class="service-card-icon">
                                                <template v-if="!isLoggedIn">
                                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                        <rect x="8" y="12" width="32" height="24" rx="3"
                                                            stroke="#003366" stroke-width="2" />
                                                        <rect x="14" y="20" width="8" height="8" rx="2" stroke="#003366"
                                                            stroke-width="2" />
                                                        <rect x="26" y="20" width="10" height="2" rx="1"
                                                            fill="#003366" />
                                                        <rect x="26" y="26" width="10" height="2" rx="1"
                                                            fill="#003366" />
                                                    </svg>
                                                </template>
                                                <template v-else>
                                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                        <circle cx="24" cy="18" r="10" stroke="#003366" stroke-width="2"
                                                            fill="#e3eaf6" />
                                                        <ellipse cx="24" cy="34" rx="14" ry="8" stroke="#003366"
                                                            stroke-width="2" fill="#e3eaf6" />
                                                    </svg>
                                                </template>
                                            </div>
                                            <div class="service-card-label">{{ isLoggedIn ? userInfo.name : '登入' }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="service-card" @click="navigateToEvent">
                                        <div class="service-card-inner">
                                            <div class="service-card-icon">
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                    <rect x="12" y="10" width="24" height="28" rx="2" stroke="#003366"
                                                        stroke-width="2" />
                                                    <rect x="16" y="16" width="16" height="2" rx="1" fill="#003366" />
                                                    <rect x="16" y="22" width="16" height="2" rx="1" fill="#003366" />
                                                    <rect x="16" y="28" width="10" height="2" rx="1" fill="#003366" />
                                                </svg>
                                            </div>
                                            <div class="service-card-label">報名參加活動</div>
                                        </div>
                                    </div>
                                    <div class="service-card" @click="navigateToReservation">
                                        <div class="service-card-inner">
                                            <div class="service-card-icon">
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                    <rect x="10" y="18" width="28" height="14" rx="3" stroke="#003366"
                                                        stroke-width="2" />
                                                    <rect x="14" y="32" width="20" height="4" rx="2" fill="#003366" />
                                                </svg>
                                            </div>
                                            <div class="service-card-label">座位及房間預訂</div>
                                        </div>
                                    </div>
                                    <div class="service-card" @click="navigateToRental">
                                        <div class="service-card-inner">
                                            <div class="service-card-icon">
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                    <rect x="8" y="16" width="32" height="16" rx="3" stroke="#003366"
                                                        stroke-width="2" />
                                                    <rect x="16" y="24" width="16" height="6" rx="2" fill="#003366" />
                                                </svg>
                                            </div>
                                            <div class="service-card-label">場地及房間租賃</div>
                                        </div>
                                    </div>
                                    <div class="service-card" @click="navigateToTour">
                                        <div class="service-card-inner">
                                            <div class="service-card-icon">
                                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                                    <rect x="10" y="14" width="28" height="20" rx="3" stroke="#003366"
                                                        stroke-width="2" />
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
                    </transition>
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
                <transition name="fade-slide">
                    <div v-if="showSearchInput" class="search-input-panel">
                        <input type="text" v-model="keyword" placeholder="站內搜尋" class="search-input"
                            @keyup.enter="submitSearch" />
                        <button class="search-icon" @click="submitSearch">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <circle cx="11" cy="11" r="7" stroke="#444" stroke-width="2" />
                                <path d="M20 20L17 17" stroke="#444" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </button>
                    </div>
                </transition>
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
                                        <input id="email" v-model="loginForm.email" type="email" placeholder="請輸入您的電子郵件"
                                            required />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">密碼</label>
                                        <input id="password" v-model="loginForm.password"
                                            :type="showPassword ? 'text' : 'password'" placeholder="請輸入您的密碼" required />
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
                                <div class="user-name">
                                    {{ userInfo.name }}
                                    <span class="user-role-label">
                                        {{ userInfo.role === 'admin' ? '管理員' : '會員' }}
                                    </span>
                                </div>
                                <div class="user-email" v-if="userInfo.role !== 'admin'">{{ userInfo.email }}</div>
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
                            <button class="user-menu-item" v-if="userInfo.role === 'admin'"
                                @click="navigateToManagerPage">
                                <span class="menu-icon">🛠️</span>
                                管理員介面
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

            <!-- CustomAlert -->
            <CustomAlert :show="showAlert" :title="alertTitle" :message="alertMessage" :type="alertType"
                :confirm-text="alertConfirmText" @close="closeAlert" @confirm="handleAlertConfirm" />


            <div v-if="currentUser" class="welcome-message-with-logout">
                您好 ~ {{ currentUser.name }} 😆
                <button class="logout-button" @click="handleLogout">登出 ⍈</button>
            </div>

            <div class="nlpi-header-right">
                <!-- 漢堡按鈕 -->
                <button class="hamburger-btn" @click="toggleMobileMenu">
                    <img src="/public/images/hamburger.png" alt="Menu" title="選單" class="hamburger-icon" />
                </button>

                <!-- Backdrop -->
                <div v-if="isMobileMenuOpen" class="sidebar-backdrop" @click="closeSidebar"></div>

                <!-- 側邊欄菜單 -->
                <transition name="sidebar-slide">
                    <aside v-if="isMobileMenuOpen" class="sidebar-nav" @click.stop>
                        <button class="close-btn" @click="closeSidebar">✕</button>
                        <nav class="nlpi-nav-mobile">
                            <div class="nlpi-nav-link nav-dropdown" @mouseenter="submenuStates.info = true"
                                @mouseleave="submenuStates.info = false">
                                <span class="nav-label">最新資訊</span>
                                <div v-show="submenuStates.info" class="dropdown-menu">
                                    <NuxtLink to="/news" @click="closeSidebar">最新消息</NuxtLink>
                                    <NuxtLink to="/announcement" @click="closeSidebar">公告事項</NuxtLink>
                                    <NuxtLink to="/event" @click="closeSidebar">活動訊息</NuxtLink>
                                </div>
                            </div>

                            <div class="nlpi-nav-link nav-dropdown" @mouseenter="submenuStates.reader = true"
                                @mouseleave="submenuStates.reader = false">
                                <span class="nav-label">讀者服務</span>
                                <div v-show="submenuStates.reader" class="dropdown-menu">
                                    <div @mouseenter="submenuStates.apply = true"
                                        @mouseleave="submenuStates.apply = false">
                                        <a href="#" @click.prevent>申請服務 ▸</a>
                                        <div v-show="submenuStates.apply" class="submenu">
                                            <NuxtLink to="/application/card-application" @click="closeSidebar">線上辦證
                                            </NuxtLink>
                                            <NuxtLink to="/application/seat-reservation" @click="closeSidebar">自習座位預約
                                            </NuxtLink>
                                            <NuxtLink to="/application/book-recommendation" @click="closeSidebar">書籍薦購
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div @mouseenter="submenuStates.catalogue = true"
                                        @mouseleave="submenuStates.catalogue = false">
                                        <a href="#" @click.prevent>館藏查詢 ▸</a>
                                        <div v-show="submenuStates.catalogue" class="submenu">
                                            <NuxtLink to="/catalogue-search" @click="closeSidebar">館藏查詢</NuxtLink>
                                        </div>
                                    </div>
                                    <div @mouseenter="submenuStates.reserve = true"
                                        @mouseleave="submenuStates.reserve = false">
                                        <a href="#" @click.prevent>館藏預約 ▸</a>
                                        <div v-show="submenuStates.reserve" class="submenu">
                                            <NuxtLink to="/reserve/reservation-record" @click="closeSidebar">預約清單
                                            </NuxtLink>
                                            <NuxtLink to="/reserve/reservation-history" @click="closeSidebar">預約紀錄
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div @mouseenter="submenuStates.borrow = true"
                                        @mouseleave="submenuStates.borrow = false">
                                        <a href="#" @click.prevent>借閱服務 ▸</a>
                                        <div v-show="submenuStates.borrow" class="submenu">
                                            <NuxtLink to="/borrow/borrow-search" @click="closeSidebar">借書查詢(測試用)
                                            </NuxtLink>
                                            <NuxtLink to="/borrow/borrow-record" @click="closeSidebar">我要借書(測試用)
                                            </NuxtLink>
                                            <NuxtLink to="/borrow/borrow-continue" @click="closeSidebar">我要續借</NuxtLink>
                                        </div>
                                    </div>
                                    <div @mouseenter="submenuStates.ranking = true"
                                        @mouseleave="submenuStates.ranking = false">
                                        <a href="#" @click.prevent>排行榜 & 評論 ▸</a>
                                        <div v-show="submenuStates.ranking" class="submenu">
                                            <NuxtLink to="/ranking/borrowing-rankings" @click="closeSidebar">借閱排行榜
                                            </NuxtLink>
                                            <NuxtLink to="/ranking/book-review" @click="closeSidebar">讀者書評</NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="nlpi-nav-link nav-dropdown" @mouseenter="submenuStates.location = true"
                                @mouseleave="submenuStates.location = false">
                                <span class="nav-label">地點 & 時間</span>
                                <div v-show="submenuStates.location" class="dropdown-menu">
                                    <NuxtLink to="/introduction/location" @click="closeSidebar">本館位置</NuxtLink>
                                    <NuxtLink to="/introduction/opening-hours" @click="closeSidebar">開放時間</NuxtLink>
                                </div>
                            </div>

                            <div class="nlpi-nav-link nav-dropdown" @mouseenter="submenuStates.about = true"
                                @mouseleave="submenuStates.about = false">
                                <span class="nav-label">關於我們</span>
                                <div v-show="submenuStates.about" class="dropdown-menu">
                                    <NuxtLink to="/introduction/about" @click="closeSidebar">本館簡介</NuxtLink>
                                    <NuxtLink to="/introduction/audience" @click="closeSidebar">服務對象</NuxtLink>
                                    <NuxtLink to="/introduction/contact" @click="closeSidebar">聯絡我們</NuxtLink>
                                </div>
                            </div>

                        </nav>
                    </aside>
                </transition>
            </div>
        </div>

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
const showReaderMenu = ref(false)
const showLocationMenu = ref(false)
const showAboutMenu = ref(false)
const showServicePopup = ref(false)
const showSearchInput = ref(false)
const showLoginModal = ref(false)
const showUserMenu = ref(false)
const isLoggingIn = ref(false)
const showPassword = ref(false)
const isMobileMenuOpen = ref(false)

const showAlert = ref(false)
const alertTitle = ref('')
const alertMessage = ref('')
const alertType = ref('alert')
const alertConfirmText = ref('確認')

const isLoggedIn = ref(false)
const userInfo = ref({ name: '', email: '', role: '' })
const loginForm = ref({ email: '', password: '' })
const currentUser = ref(null)
const keyword = ref('')

const submenuStates = ref({
    info: false,
    reader: false,
    apply: false,
    catalogue: false,
    reserve: false,
    borrow: false,
    ranking: false,
    location: false,
    about: false
})

onMounted(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
        try {
            currentUser.value = JSON.parse(storedUser)
        } catch (e) {
            console.error('使用者資料解析錯誤', e)
        }
    }
    checkLoginStatus()
    document.addEventListener('click', handleOutsideClick)
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('keydown', handleEscape)
})

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeSidebar() {
    isMobileMenuOpen.value = false
    Object.keys(submenuStates.value).forEach(key => submenuStates.value[key] = false)
}

function handleEscape(e) {
    if (e.key === 'Escape') closeSidebar()
}

function handleResize() {
    if (window.innerWidth >= 768 && isMobileMenuOpen.value) {
        closeSidebar()
    }
}

function handleOutsideClick(e) {
    if (showServicePopup.value && !e.target.closest('.nlpi-service-popup-wrap')) showServicePopup.value = false
    if (showSearchInput.value && !e.target.closest('.search-input-panel') && !e.target.closest('.nlpi-service-btn')) showSearchInput.value = false
    if (showUserMenu.value && !e.target.closest('.service-card')) showUserMenu.value = false
}

function toggleSubMenu(key) {
    Object.keys(submenuStates.value).forEach(k => {
        if (k !== key) submenuStates.value[k] = false
    })
    submenuStates.value[key] = !submenuStates.value[key]
}

function handleLogout() {
    localStorage.removeItem('jwt_token')
    localStorage.removeItem('user')
    localStorage.removeItem('user_role')
    alert('已成功登出')
    window.location.reload()
}

function navigateToEvent() {
    router.push('/event')
    showServicePopup.value = false
}

function navigateToReservation() {
    router.push('/application/seat-reservation')
    showServicePopup.value = false
}

function navigateToRental() {
    router.push('/rental')
    showServicePopup.value = false
}

function navigateToTour() {
    router.push('/tour')
    showServicePopup.value = false
}

function handleUserAction() {
    if (isLoggedIn.value) {
        showUserMenu.value = !showUserMenu.value
    } else {
        showLoginModal.value = true
    }
    showServicePopup.value = false
}

function navigateToMemberPage() {
    showUserMenu.value = false
    router.push(`/member/${userInfo.value.id || userInfo.value.user_id}`)
}

function navigateToBorrowRecord() {
    showUserMenu.value = false
    router.push('/borrow/borrow-record')
}

function navigateToReservationRecord() {
    showUserMenu.value = false
    router.push('/reserve/reservation-record')
}

function navigateToManagerPage() {
    showUserMenu.value = false
    router.push('/manager/manager')
}

async function handleLogin() {
    if (!loginForm.value.email || !loginForm.value.password) {
        showCustomAlert('登入錯誤', '請輸入電子郵件和密碼')
        return
    }
    isLoggingIn.value = true
    try {
        const adminEmail = 'rtny2cpplzonbeq55bmsa9ze@ispnlibrary.com'
        const isAdminAccount = loginForm.value.email.trim().toLowerCase() === adminEmail
        const res = await axios.post('http://localhost:8080/api/auth/login', {
            email: loginForm.value.email,
            password: loginForm.value.password
        })
        const token = res.data.token
        const user = res.data.user
        const userRole = isAdminAccount ? 'admin' : 'member'
        localStorage.setItem('jwt_token', token)
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('user_role', userRole)
        closeLoginModal()
        isLoggedIn.value = true
        userInfo.value = { id: user.id || user.user_id, name: user.name || user.email || '會員', email: user.email, role: userRole }
        currentUser.value = user
        const roleMessage = isAdminAccount ? '管理者登入成功！' : '登入成功！'
        showCustomAlert('登入成功', roleMessage, 'alert', '確定')
        triggerLoginSuccess()
        if (router.currentRoute.value.fullPath.includes('/application/') || router.currentRoute.value.fullPath.includes('/reserve/') || router.currentRoute.value.fullPath.includes('/borrow/') || router.currentRoute.value.fullPath.includes('/ranking/')) {
            setTimeout(() => router.go(0), 300)
        }
    } catch (err) {
        showCustomAlert('登入失敗', '登入失敗：' + (err.response?.data?.message || err.message))
    } finally {
        isLoggingIn.value = false
    }
}

function closeLoginModal() {
    showLoginModal.value = false
    showServicePopup.value = false
    loginForm.value = { email: '', password: '' }
}

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
    closeAlert()
}

function checkLoginStatus() {
    const token = localStorage.getItem('jwt_token')
    const user = localStorage.getItem('user')
    const userRole = localStorage.getItem('user_role')
    if (token && user) {
        try {
            const userData = JSON.parse(user)
            isLoggedIn.value = true
            userInfo.value = { id: userData.id || userData.user_id, name: userData.name || userData.email || '會員', email: userData.email, role: userRole || 'member' }
        } catch (error) {
            console.error('解析用戶資料失敗:', error)
            logout()
        }
    } else {
        isLoggedIn.value = false
        userInfo.value = { name: '', email: '', role: '' }
    }
}

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

function toggleSearchInput() {
    showSearchInput.value = !showSearchInput.value
}

function submitSearch() {
    const trimmed = keyword.value.trim()
    if (trimmed) router.push(`/search?keyword=${encodeURIComponent(trimmed)}`)
}

let links = [
    { label: '首頁', href: '/' },
    { label: '網站導覽', href: '' },
    { label: '開放時間', href: '/introduction/opening-hours' },
    { label: '意見信箱', href: '/feedback' },
]
</script>

<style scoped>
.nlpi-header {
    background: #fff;
    border-bottom: 3px solid #003366;
    padding: 0 2rem;
    position: relative;
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
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 2rem;
    color: #003366;
    padding: 0.5rem;
}

.sidebar-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
}

.sidebar-nav {
    position: fixed;
    top: 0;
    right: 0;
    height: 100%;
    width: 260px;
    background: #fff;
    z-index: 1001;
    padding: 4rem 1rem 1rem;
    overflow-y: auto;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}

.close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #003366;
    cursor: pointer;
}

.nlpi-nav-mobile {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.nlpi-nav {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    align-items: center;
}

.nlpi-nav-link {
    color: #003366;
    font-weight: 600;
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.2s;
}

.nav-label {
    color: #003366;
    font-weight: bold;
}

.nlpi-nav-link:hover {
    color: #0055a5;
}

.nav-dropdown {
    position: relative;
    /* 為 dropdown-menu 提供定位上下文 */
}


.dropdown-menu {
    position: absolute;
    top: 100%;
    /* 保持在下方 */
    left: 0;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 0.5rem 0;
    z-index: 5000;
    white-space: nowrap;
}

/* 修正 submenu 在手機中滑開會跑掉的問題 */
.dropdown-menu {
    position: absolute;
    top: calc(100% + 0.5rem);
    left: 0;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 0.5rem 0;
    z-index: 1000;
    white-space: nowrap;
}

@media (max-width: 768px) {
    .nlpi-logo {
        margin-bottom: 1rem;
    }

    .dropdown-menu {
        position: relative;
        top: auto;
        left: auto;
        background: transparent;
        box-shadow: none;
        padding-left: 1rem;
    }
}



.dropdown-menu a {
    display: block;
    padding: 0.5rem 1rem;
    color: #333;
    text-decoration: none;
}

.dropdown-menu a:hover {
    background: #f0f0f0;
}

.submenu {
    margin-left: 1rem;
    padding-left: 0.5rem;
    border-left: 2px solid #ddd;
}

.top-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-left: 10rem;
}

.top-links ul {
    display: flex;
    list-style: none;
    gap: 0.5rem;
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

.separator {
    color: #999;
}

@media (max-width: 768px) {
    .nlpi-header-main {
        flex-direction: row;
        /* ✅ 橫向排列 */
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        /* 若空間不足則換行 */
        padding: 0.75rem;
    }

    .nlpi-logo-link {
        flex-shrink: 0;
        margin-right: 1rem;
    }

    .top-links {
        display: flex;
        flex-direction: row;
        /* ✅ 橫向排列 */
        align-items: center;
        flex-wrap: wrap;
        gap: 0.25rem;
        transform: translateY(-8rem);
    }

    .top-links ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.25rem;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .top-links li {
        display: flex;
        align-items: center;
        font-size: 0.95rem;
        white-space: nowrap;
    }

    .top-links a {
        color: #333;
        text-decoration: none;
    }

    .top-links a:hover {
        color: #0077cc;
    }

    .separator {
        margin: 0 0.3rem;
        color: #999;
    }
}

.nlpi-service-search-bar.mobile-only {
    transform: translate(6rem, -4rem);
}


.welcome-message-with-logout {
    font-size: large;
    margin-right: 7rem;
    color: #003366;
}

.logout-button {
    background: whitesmoke;
    border-radius: 1.5rem;
    border: none;
    color: #0070c0;
    font-size: 0.9rem;
    cursor: pointer;
    padding: 0 0.5rem;
}

.logout-button:hover {
    color: #004a99;
}

@media (max-width: 768px) {
    .welcome-message-with-logout {
        font-size: 0.85rem;
        margin-left: 6rem;
        margin-bottom: 0.2rem;
        margin-top: 0.5rem;
    }

    .nlpi-service-search-bar.mobile-only {
        flex-direction: column;
        align-items: stretch;
        gap: 0.5rem;
        margin-top: -7rem;
        margin-left: 0;
        transform: none;
        width: 100%;
    }

    .nlpi-service-popup-panel {
        position: static;
        width: 100%;
        box-shadow: none;
        border-radius: 0;
        padding: 0.5rem;
    }
}

.nlpi-service-search-bar {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.nlpi-service-popup-wrap {
    position: relative;
}

.nlpi-service-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
}

.nlpi-btn-icon {
    width: 22px;
    height: 22px;
}

.nlpi-btn-text {
    color: #444;
}

.nlpi-btn-divider {
    width: 1px;
    height: 24px;
    background: #ccc;
}

.nlpi-service-popup-panel {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 3000;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 1rem;
    min-width: 300px;
}

.service-cards-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.service-cards-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #003366;
}

.service-cards-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1rem;
}

.service-card {
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

}

.service-card-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem;
}

.service-card-icon {
    width: 48px;
    height: 48px;
}

.service-card-label {
    font-size: 0.9rem;
    color: #333;
    text-align: center;
    margin-top: 0.5rem;
}

.service-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.search-input-panel {
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 1000;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.search-input {
    flex: 1;
    padding: 0.5rem;
    font-size: 0.9rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.search-icon {
    background: #e0e0e0;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}

.login-modal-overlay,
.user-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
}

.login-modal,
.user-menu {
    background: #fff;
    border-radius: 14px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    width: 500px;
    max-width: 90vw;
}

.login-modal-header,
.user-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: #003366;
    color: #fff;
}


.close-btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.login-modal-body,
.user-menu-body {
    padding: 1rem;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    align-items: center;
}

.form-group label {
    width: 90px;
    font-size: 0.9rem;
    margin-right: 0.5rem;
}

.form-group input {
    flex: 1;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login-btn {
    padding: 0.5rem;
    background: #003366;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.user-menu-item {
    width: 100%;
    padding: 0.5rem;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
}

.user-menu-divider {
    height: 1px;
    background: #ccc;
}

.sidebar-slide-enter-active,
.sidebar-slide-leave-active {
    transition: transform 0.3s ease;
}

.sidebar-slide-enter-from,
.sidebar-slide-leave-to {
    transform: translateX(100%);
}

.login-overlay-fade-enter-active,
.login-overlay-fade-leave-active,
.user-menu-fade-enter-active,
.user-menu-fade-leave-active {
    transition: opacity 0.3s ease;
}

.login-overlay-fade-enter-from,
.login-overlay-fade-leave-to,
.user-menu-fade-enter-from,
.user-menu-fade-leave-to {
    opacity: 0;
}

.login-modal-zoom-enter-active,
.login-modal-zoom-leave-active {
    transition: all 0.3s ease;
}

.login-modal-zoom-enter-from {
    opacity: 0;
    transform: scale(0.7);
}

.login-modal-zoom-enter-to {
    opacity: 1;
    transform: scale(1);
}

@media (max-width: 768px) {
    .hamburger-btn {
        display: block;
    }

    .nlpi-nav {
        display: none;
    }

    .welcome-message-with-logout {
        margin-right: 0;
        transform: none;
    }

    .nlpi-service-search-bar {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .nlpi-service-popup-panel {
        width: 100%nlpi-service-popup-panel;
        left: ;
        right: auto;

    }

    .search-input-panel {
        width: 100%;
        left: 0;
        right: auto;
        z-index: 2000 !important;
    }
}

@media (min-width: 769px) {
    .hamburger-btn {
        display: none;
    }

    .nlpi-nav {
        display: flex !important;
    }
}

.hamburger-icon {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    object-fit: contain;
}
</style>