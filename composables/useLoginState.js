import { ref, onMounted, onUnmounted } from 'vue'

// 全局登入狀態
const globalIsLoggedIn = ref(false)

// 檢查登入狀態的函數
export const checkLoginStatus = () => {
  // 檢查 localStorage 中的用戶資訊
  const storedUser = localStorage.getItem('user')
  const jwtToken = localStorage.getItem('jwt_token')
  const authToken = localStorage.getItem('authToken')

  console.log('=== 登入狀態檢查 ===')
  console.log('storedUser:', storedUser)
  console.log('jwtToken:', jwtToken)
  console.log('authToken:', authToken)

  if (storedUser) {
    try {
      const user = JSON.parse(storedUser)
      globalIsLoggedIn.value = true
      console.log('✅ 用戶已登入：', user)
    } catch (e) {
      console.error('❌ 解析用戶資訊失敗：', e)
      globalIsLoggedIn.value = false
    }
  } else if (jwtToken || authToken) {
    // 如果有 token 但沒有用戶資訊，也視為已登入
    globalIsLoggedIn.value = true
    console.log('✅ 檢測到登入 token')
  } else {
    globalIsLoggedIn.value = false
    console.log('❌ 用戶未登入')
  }

  console.log('最終登入狀態：', globalIsLoggedIn.value)
  console.log('==================')
  
  return globalIsLoggedIn.value
}

// 顯示登入視窗的函數
export const showLoginModal = () => {
  window.dispatchEvent(new CustomEvent('show-login-modal'))
}

// 觸發登入成功事件的函數
export const triggerLoginSuccess = () => {
  window.dispatchEvent(new CustomEvent('login-success'))
}

// 主要的 composable 函數
export const useLoginState = () => {
  const isLoggedIn = ref(false)
  let loginSuccessHandler = null

  const setupLoginListener = (callback) => {
    loginSuccessHandler = callback
    window.addEventListener('login-success', loginSuccessHandler)
  }

  const cleanupLoginListener = () => {
    if (loginSuccessHandler) {
      window.removeEventListener('login-success', loginSuccessHandler)
      loginSuccessHandler = null
    }
  }

  onMounted(() => {
    // 初始化時檢查登入狀態
    isLoggedIn.value = checkLoginStatus()
  })

  onUnmounted(() => {
    // 清理事件監聽器
    cleanupLoginListener()
  })

  return {
    isLoggedIn,
    checkLoginStatus,
    showLoginModal,
    setupLoginListener,
    cleanupLoginListener
  }
} 