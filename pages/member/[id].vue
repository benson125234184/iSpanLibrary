<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()
const member = ref(null)
const loading = ref(true)
const error = ref(null)

// 可編輯欄位
const editFields = ref({
    name: '',
    gender: '',
    idNumber: '',
    birthDate: '',
    addressCounty: '',
    addressTown: '',
    addressZip: '',
    addressDetail: '',
    phone: '',
    email: '',
    nationality: '',
    education: '',
    occupation: '',
    password: '',
})

const defaultAvatar = 'https://api.dicebear.com/7.x/miniavs/svg?seed=User'

onMounted(async () => {
    try {
        const res = await axios.get(`http://localhost:8080/api/manager/accounts/${route.params.id}`)
        member.value = res.data
        editFields.value = {
            name: res.data.name,
            gender: res.data.gender,
            idNumber: res.data.idNumber,
            birthDate: res.data.birthDate,
            addressCounty: res.data.addressCounty,
            addressTown: res.data.addressTown,
            addressZip: res.data.addressZip,
            addressDetail: res.data.addressDetail,
            phone: res.data.phone,
            email: res.data.email,
            nationality: res.data.nationality,
            education: res.data.education,
            occupation: res.data.occupation,
            // password: res.data.password,
        }
    } catch (e) {
        error.value = '載入會員資料失敗'
    } finally {
        loading.value = false
    }
})

async function saveMemberDetail() {
    try {
        await axios.patch(`http://localhost:8080/api/manager/accounts/${route.params.id}`, {
            ...editFields.value
        }, {
            headers: { 'Content-Type': 'application/json' }
        })
        alert('更新成功')
    } catch (e) {
        alert('更新失敗')
    }
}
</script>

<template>
    <div class="member-center">
        <div v-if="loading">載入中...</div>
        <div v-else-if="error">{{ error }}</div>
        <div v-else>
            <!-- 會員編號優先顯示 -->
            <div class="member-id-row">
                <span class="member-id-label">會員編號：</span>
                <span class="member-id-value">{{ member?.user_id || member?.id || '-' }}</span>
            </div>
            <!-- 頭像與基本資訊 -->
            <div class="profile-header">
                <img :src="member?.avatar || defaultAvatar" class="avatar" />
                <div class="profile-info">
                    <div class="member-name">{{ member?.name || '會員名稱' }}</div>
                </div>
            </div>
            <div class="info-row">
                <span>建立時間：</span>{{ member?.createdAt?.replace('T', ' ') }}
                <span style="margin-left:2em;">更新時間：</span>{{ member?.updatedAt?.replace('T', ' ') }}
            </div>
            <hr class="section-divider" />
            <h3 class="section-title">可編輯資料</h3>
            <div class="edit-fields">
                <div class="edit-row">
                    <span>姓名：</span>
                    <input v-model="editFields.name" placeholder="姓名" />
                </div>
                <div class="edit-row">
                    <span>性別：</span>
                    <select v-model="editFields.gender">
                        <option value="">請選擇</option>
                        <option value="男">男</option>
                        <option value="女">女</option>
                        <option value="其他">其他</option>
                    </select>
                </div>
                <div class="edit-row">
                    <span>身分證：</span>
                    <input v-model="editFields.idNumber" placeholder="身分證" />
                </div>
                <div class="edit-row">
                    <span>生日：</span>
                    <input v-model="editFields.birthDate" type="date" placeholder="生日" />
                </div>
                <div class="edit-row">
                    <span>國籍：</span>
                    <input v-model="editFields.nationality" placeholder="國籍" />
                </div>
                <div class="edit-row">
                    <span>教育程度：</span>
                    <input v-model="editFields.education" placeholder="教育程度" />
                </div>
                <div class="edit-row">
                    <span>職業：</span>
                    <input v-model="editFields.occupation" placeholder="職業" />
                </div>
                <div class="edit-row address-row">
                    <span>居住地：</span>
                    <input v-model="editFields.addressCounty" placeholder="縣市" />
                    <input v-model="editFields.addressTown" placeholder="鄉鎮" />
                    <input v-model="editFields.addressZip" placeholder="郵遞區號" />
                    <input v-model="editFields.addressDetail" placeholder="詳細地址" />
                </div>
                <div class="edit-row">
                    <span>信箱：</span>
                    <input v-model="editFields.email" placeholder="信箱" />
                </div>
                <div class="edit-row">
                    <span>電話：</span>
                    <input v-model="editFields.phone" placeholder="電話" />
                </div>
                <div class="edit-row">
                    <span>密碼：</span>
                    <input v-model="editFields.password" placeholder="密碼" />
                </div>
            </div>
            <div class="action-btns">
                <button class="save-btn" @click="saveMemberDetail">儲存</button>
                <button class="back-btn" @click="router.back()">返回</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.member-center {
    width: 100%;
    max-width: 700px;
    min-width: 320px;
    margin: 32px auto 0 auto;
    padding: 32px 24px 80px 24px;
    background: #fff;
    border-radius: 18px;
    box-shadow: 0 2px 12px #0001;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 80vh;
    overflow-y: auto;
    box-sizing: border-box;
    flex: 1 0 auto;
}

.member-id-row {
    width: 100%;
    font-size: 1.1rem;
    font-weight: 600;
    color: #2563eb;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
}

.member-id-label {
    margin-right: 8px;
}

.member-id-value {
    color: #333;
}

.profile-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 18px;
}

.avatar {
    width: 84px;
    height: 84px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 2px 8px #0001;
    margin-bottom: 8px;
    background: #fff;
}

.profile-info {
    text-align: center;
}

.member-name {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 2px;
}

.info-row {
    width: 100%;
    margin-bottom: 10px;
    color: #555;
    font-size: 1rem;
    display: flex;
    align-items: center;
}

.section-divider {
    width: 100%;
    margin: 18px 0 10px 0;
    border: none;
    border-top: 1.5px solid #e5e7eb;
}

.section-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #2563eb;
    margin-bottom: 10px;
    width: 100%;
}

.edit-fields {
    width: 100%;
}

.edit-row {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-size: 1rem;
    flex-wrap: wrap;
}

.edit-row span {
    min-width: 80px;
    color: #555;
    font-weight: 500;
}

.edit-row input,
.edit-row select {
    flex: 1;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    padding: 6px 10px;
    font-size: 1rem;
    margin-left: 8px;
    background: #f9fafb;
}

.edit-row input:first-of-type {
    margin-left: 0;
}

.address-row {
    align-items: flex-start;
    flex-wrap: wrap;
}

.address-row input {
    flex: 1 1 100px;
    min-width: 60px;
    max-width: 120px;
    margin-left: 8px;
    margin-bottom: 4px;
}

.address-row input:first-of-type {
    margin-left: 0;
}

.address-row input:last-of-type {
    flex: 1 1 200px;
    max-width: none;
}

.action-btns {
    display: flex;
    gap: 12px;
    width: 100%;
    justify-content: space-between;
    margin-top: 12px;
    margin-bottom: 0;
}

.save-btn,
.back-btn {
    flex: 1;
    padding: 12px 0;
    border-radius: 8px;
    font-size: 1.05rem;
    font-weight: 600;
    border: none;
    margin: 0 4px;
    transition: background 0.2s;
}

.save-btn {
    background: #2563eb;
    color: #fff;
}

.save-btn:hover {
    background: #1746a2;
}

.back-btn {
    background: #f3f4f6;
    color: #2563eb;
    border: 1.5px solid #2563eb;
}

.back-btn:hover {
    background: #e0e7ff;
}

@media (max-width: 600px) {
    .member-center {
        max-width: 100vw;
        min-width: 0;
        padding: 12px 2vw 80px 2vw;
        border-radius: 0;
        box-shadow: none;
        margin: 0;
        max-height: calc(100vh - 120px);
        overflow-y: auto;
    }
}
</style>