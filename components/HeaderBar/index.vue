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
                    <div class="service-card" @click="showLoginModal = true">
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

    <!-- 登入懸浮視窗 -->
    <div v-if="showLoginModal" class="login-modal-overlay" @click="closeLoginModal">
      <div class="login-modal" @click.stop>
        <div class="login-modal-header">
          <h3>會員登入</h3>
          <button class="close-btn" @click="closeLoginModal">×</button>
        </div>
        <div class="login-modal-body">
          <form @submit.prevent="handleLogin" class="login-form">
            <div class="form-group">
              <label for="email">電子郵件</label>
              <input 
                id="email" 
                v-model="loginForm.email" 
                type="email" 
                placeholder="請輸入您的電子郵件"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">密碼</label>
              <input 
                id="password" 
                v-model="loginForm.password" 
                type="password" 
                placeholder="請輸入您的密碼"
                required
              />
            </div>

            <div class="form-actions">
              <button type="submit" class="login-btn" :disabled="isLoggingIn">
                {{ isLoggingIn ? '登入中...' : '登入' }}
              </button>
              <button type="button" class="admin-btn" @click="fillAdminCredentials">
                管理者登入
              </button>
            </div>
            <div class="form-links">
              <a href="/forgot-password" class="forgot-password">忘記密碼？</a>
              <a href="/application/card-application" class="register-link">申請新帳號</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

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
const isLoggingIn = ref(false)

const loginForm = ref({
  email: '',
  password: ''
})

function navigateToTab(tab) {
  router.push({ path: '/reader-service', query: { tab } })
  showReaderMenu.value = false
}

function closeLoginModal() {
  showLoginModal.value = false
  showServicePopup.value = false
  // 重置表單
  loginForm.value = {
    email: '',
    password: ''
  }
}

function fillAdminCredentials() {
  loginForm.value.email = 'admin@library.com'
  loginForm.value.password = 'admin123'
}

async function handleLogin() {
  if (!loginForm.value.email || !loginForm.value.password) {
    alert('請輸入電子郵件和密碼')
    return
  }

  isLoggingIn.value = true

  try {
    // 檢查是否為管理者測試帳號
    if (loginForm.value.email === 'admin@library.com' && loginForm.value.password === 'admin123') {
      // 管理者測試帳號登入
      const mockAdminUser = {
        id: 'admin001',
        email: 'admin@library.com',
        name: '圖書館管理者',
        role: 'admin',
        permissions: ['manage_books', 'manage_users', 'manage_seats', 'view_reports']
      }
      
      localStorage.setItem('jwt_token', 'mock_admin_token_' + Date.now())
      localStorage.setItem('user', JSON.stringify(mockAdminUser))
      localStorage.setItem('user_role', 'admin')
      
      alert('管理者登入成功！')
      closeLoginModal()
      window.location.reload()
      return
    }

    // 一般會員登入
    const res = await axios.post('http://localhost:8080/api/auth/login', {
      email: loginForm.value.email,
      password: loginForm.value.password
    })
    
    // 登入成功，儲存 token
    const token = res.data.token
    const user = res.data.user
    localStorage.setItem('jwt_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    localStorage.setItem('user_role', 'member')

    // 關閉登入視窗
    closeLoginModal()
    
    // 重新載入頁面或跳轉
    window.location.reload()
  } catch (err) {
    alert('登入失敗：' + (err.response?.data?.message || err.message))
  } finally {
    isLoggingIn.value = false
  }
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

/* 登入懸浮視窗樣式 */
.login-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.login-modal {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  width: 400px;
  max-width: 90vw;
  animation: modalFadeIn 0.3s ease-out;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e7eb;
}

.login-modal-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #1f2937;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #374151;
}

.login-modal-body {
  padding: 24px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.form-group input {
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.2s;
}

.form-group input:focus {
  outline: none;
  border-color: #003366;
  box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1);
}

.form-actions {
  margin-top: 8px;
  display: flex;
  gap: 8px;
}

.login-btn {
  flex: 1;
  padding: 12px 16px;
  background: #003366;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.login-btn:hover:not(:disabled) {
  background: #002855;
}

.login-btn:disabled {
  background: #9ca3af;
  cursor: not-allowed;
}

.admin-btn {
  padding: 12px 16px;
  background: #dc2626;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.admin-btn:hover {
  background: #b91c1c;
}

.form-links {
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  font-size: 14px;
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
</style>