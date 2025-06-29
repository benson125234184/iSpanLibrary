<template>
  <div class="nlpi-wrapper">
    <img v-if="!showReaderServices" src="/public/images/library-building.jpg" alt="圖書館外觀" class="" />
    
    <!-- 新聞專區 -->
    <section v-if="!showReaderServices" class="news-section">
      <h2 class="news-title">最新消息</h2>
      <!-- 上方一大則 -->
      <div class="news-item-large" v-if="newsList[0]">
        <div class="news-card-large">
          <img :src="newsList[0].img" :alt="newsList[0].title" class="news-img-large" />
          <div class="news-info-large">
            <h3 class="news-item-title-large">{{ newsList[0].title }}</h3>
            <div class="news-date-large">{{ newsList[0].date }}</div>
            <div class="news-desc-large">{{ newsList[0].desc }}</div>
          </div>
        </div>
      </div>
      <!-- 下方三小則 -->
      <div class="news-list-bottom">
        <div class="news-card-small" v-for="news in newsList.slice(1, 4)" :key="news.id">
          <img :src="news.img" :alt="news.title" class="news-img-small" />
          <div class="news-info-small">
            <h3 class="news-item-title-small">{{ news.title }}</h3>
            <div class="news-date-small">{{ news.date }}</div>
            <div class="news-desc-small">{{ news.desc }}</div>
          </div>
        </div>
      </div>
    </section>
    <!-- 設施區塊 -->
    <section v-if="!showReaderServices" class="facility-section">
      <h2 class="facility-title">圖書館設施</h2>
      <div class="facility-list-large">
        <div class="facility-card-large" v-for="f in facilityList.slice(0, 3)" :key="f.id">
          <div class="facility-img-wrap-large">
            <img :src="f.img" :alt="f.name" class="facility-img-large" />
          </div>
          <div class="facility-name-large">{{ f.name }}</div>
        </div>
      </div>
      <div class="facility-list-small">
        <div class="facility-card-small" v-for="f in facilityList.slice(3, 6)" :key="f.id">
          <div class="facility-img-wrap-small">
            <img :src="f.img" :alt="f.name" class="facility-img-small" />
          </div>
          <div class="facility-name-small">{{ f.name }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 新聞資料
const newsList = [
  {
    id: 1,
    img: '/public/images/03adb31f-0963-4f6a-a124-50ad861e053f.png',
    title: '圖書館與體育大學合作推動健康閱讀',
    date: '2025/06/23',
    desc: '因應高齡化社會與全民健身趨勢，圖書館攜手體育大學共同推動健康閱讀活動...'
  },
  {
    id: 2,
    img: '/public/images/0d58b793-5651-4858-be9d-260a20b4f394.png',
    title: '資訊素養論壇圓滿落幕',
    date: '2025/05/15',
    desc: '2025資訊素養論壇於本館盛大舉行，邀請多位專家學者分享...'
  },
  {
    id: 3,
    img: '/public/images/library-logo.png',
    title: '第三則新聞標題',
    date: '2025/04/10',
    desc: '這是第三則新聞的內容摘要...'
  }
]

// 設施資料
const facilityList = [
  {
    id: 1,
    img: '/public/images/library-building.jpg',
    name: '閱覽區'
  },
  {
    id: 2,
    img: '/public/images/book.png',
    name: '藏書展示'
  },
  {
    id: 3,
    img: '/public/images/book-flip.gif',
    name: '多媒體區'
  },
  {
    id: 4,
    img: '/public/images/c87206ab-8d55-4e17-831b-6057475c5ef9.png',
    name: '自修教室'
  },
  {
    id: 5,
    img: '/public/images/0d58b793-5651-4858-be9d-260a20b4f394.png',
    name: '討論區'
  },
  {
    id: 6,
    img: '/public/images/03adb31f-0963-4f6a-a124-50ad861e053f.png',
    name: '兒童閱覽區'
  }
]
</script>

<style scoped>
.nlpi-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
}

/* 新聞專區樣式 */
.news-section {
  max-width: 1100px;
  margin: 2rem auto 0 auto;
  padding: 0 1rem;
  background: none;
  border-radius: 0;
  box-shadow: none;
}
.news-title {
  font-size: 2rem;
  color: #003366;
  margin-bottom: 1.5rem;
  font-weight: bold;
}
.news-item-large {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.news-card-large {
  display: flex;
  align-items: center;
  gap: 2rem;
  width: 100%;
  background: none;
  text-decoration: none;
  color: inherit;
  padding: 0;
}
.news-img-large {
  width: 320px;
  height: 220px;
  object-fit: cover;
  border-radius: 14px;
  flex-shrink: 0;
}
.news-info-large {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.news-item-title-large {
  font-size: 1.3rem;
  font-weight: 700;
  color: #666;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.news-date-large {
  color: #888;
  font-size: 1.08rem;
  margin-bottom: 0.5rem;
}
.news-desc-large {
  color: #444;
  font-size: 1.13rem;
}
.news-list-bottom {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}
.news-card-small {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 0;
  flex: 1 1 0;
  min-width: 0;
  background: none;
  text-decoration: none;
  color: inherit;
  padding: 0;
}
.news-img-small {
  width: 90px;
  height: 70px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
}
.news-info-small {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.news-item-title-small {
  font-size: 1.08rem;
  color: #666;
  margin-bottom: 0.2rem;
  font-weight: 700;
}
.news-date-small {
  color: #888;
  font-size: 0.95rem;
  margin-bottom: 0.2rem;
}
.news-desc-small {
  color: #444;
  font-size: 0.98rem;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 設施區塊樣式 */
.facility-section {
  max-width: 1100px;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;
}
.facility-title {
  font-size: 2rem;
  color: #003366;
  margin-bottom: 1.5rem;
  font-weight: bold;
}
.facility-list-large, .facility-list-small {
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
}
.facility-card-large {
  width: 300px;
  border-radius: 14px;
  box-shadow: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}
.facility-img-wrap-large {
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 14px 14px 0 0;
}
.facility-img-large {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s;
}
.facility-card-large:hover .facility-img-large {
  transform: scale(1.12);
}
.facility-name-large {
  font-size: 1.13rem;
  color: #003366;
  padding: 1rem 0.5rem;
  text-align: center;
  font-weight: 600;
}
.facility-card-small {
  width: 180px;
  border-radius: 14px;
  box-shadow: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}
.facility-img-wrap-small {
  width: 100%;
  height: 100px;
  overflow: hidden;
  border-radius: 14px 14px 0 0;
}
.facility-img-small {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s;
}
.facility-card-small:hover .facility-img-small {
  transform: scale(1.12);
}
.facility-name-small {
  font-size: 1rem;
  color: #003366;
  padding: 0.8rem 0.5rem;
  text-align: center;
  font-weight: 600;
}
</style> 