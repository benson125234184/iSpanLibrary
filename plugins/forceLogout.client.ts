// plugins/forceLogout.client.ts

export default defineNuxtPlugin(() => {
    if (process.client) {
        // 強制清除登入狀態
        localStorage.removeItem('user')
        localStorage.removeItem('jwt_token')
        localStorage.removeItem('user_role')
        localStorage.removeItem('authToken')

        console.log('🧹 強制登出：已清除 localStorage 中的登入資訊')
    }
})
