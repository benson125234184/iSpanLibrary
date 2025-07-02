<template>
  <div class="nlpi-wrapper">
    <img v-if="!showReaderServices" src="/images/sub03_0103_img08.jpg" alt="圖書館外觀" class="" />

    <!-- 新聞專區 -->
    <section v-if="!showReaderServices" class="news-section">
      <h2 class="news-title">最新消息</h2>
      <!-- 上方一大則 -->
      <div class="news-item-large" v-if="newsList[0]">
        <div class="news-card-large">
          <img :src="newsList[0].img" :alt="newsList[0].title" class="news-img-large" />
          <div class="news-info-large">
            <h3 class="news-item-title-large">
              <NuxtLink :to="`/news-detail/${newsList[0].id}`" target="_blank" rel="noopener">{{ newsList[0].title }}</NuxtLink>
            </h3>
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
            <h3 class="news-item-title-small">
              <NuxtLink :to="`/news-detail/${news.id}`" target="_blank" rel="noopener">{{ news.title }}</NuxtLink>
            </h3>
            <div class="news-date-small">{{ news.date }}</div>
            <div class="news-desc-small">{{ news.descShort }}</div>
            <NuxtLink :to="`/news-detail/${news.id}`" class="news-read-more-btn" target="_blank" rel="noopener">查看更多</NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- 分隔裝飾 -->
    <div class="section-divider">
      <span class="dot"></span>
    </div>
    <!-- 設施區塊 -->
    <section v-if="!showReaderServices" class="facility-section">
      <h2 class="facility-title">圖書館環境</h2>
      <div class="facility-list-large">
        <div class="facility-card-large" v-for="f in facilityList.slice(0, 3)" :key="f.id">
          <div class="facility-img-wrap-large">
            <img :src="f.img" :alt="f.name" class="facility-img-large" />
            <div class="facility-name-large">{{ f.name }}</div>
          </div>
        </div>
      </div>
      <div class="facility-list-small">
        <div class="facility-card-small" v-for="f in facilityList.slice(3, 6)" :key="f.id">
          <div class="facility-img-wrap-small">
            <img :src="f.img" :alt="f.name" class="facility-img-small" />
            <div class="facility-name-small">{{ f.name }}</div>
          </div>
        </div>
      </div>
    </section>
    <!-- 分隔裝飾：設施與書籍推薦之間 -->
    <div class="section-divider">
      <span class="dot"></span>
    </div>
    <!-- 精選圖書區塊 -->
    <section class="book-carousel-section">
      <div class="book-carousel-main">
        <h2 class="book-carousel-title">精選圖書</h2>
        <div class="book-carousel-wrap">
          <button class="carousel-btn big" @click="prevBook">
            <span class="arrow">&#60;</span>
          </button>
          <div class="book-carousel-list">
            <div v-for="book in getShowBooks()" :key="book.title" class="book-carousel-item">
              <img :src="book.img" :alt="book.title" />
            </div>
          </div>
          <button class="carousel-btn big" @click="nextBook">
            <span class="arrow">&#62;</span>
          </button>
        </div>
      </div>
      <div class="catalog-card">
        <div class="catalog-icon"></div>
        <div class="catalog-title">館藏查詢系統</div>
        <div class="catalog-desc">查詢書目／借閱紀錄<br>書目預約／辦理續借</div>
        <a href="#" class="catalog-btn">前往查詢</a>
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
    img: '/images/羅布森圖書館室內模擬圖.jpg',
    title: '城市裡的森林書屋！台中首座高綠覆率「羅布森圖書館」動土',
    date: '2025/06/23',
    desc: '台中閱讀版圖再升級！由民間捐建、市府積極推動的「羅布森圖書館」今（19）日舉行開工動土典禮，市長盧秀燕親自出席，感謝羅布森股份有限公司董事長汪世旭出資逾1.2億元，實踐推廣閱讀與文化的理想，並將圖書館捐贈市府作為公共資產。盧市長表示，這不僅是企業家的文化情懷展現，更是市府文化政策的重要里程碑，也實現她七年前競選時承諾要為南屯設立圖書館的政見。'
  },
  {
    id: 2,
    img: '/images/17698e741cbc833e9aa2e2004c84abb1.webp',
    title: '圖書館「走讀文化古蹟之旅」 親子共學走入石安蘇家古厝',
    date: '2025/06/06',
    desc: '高雄市立圖書館阿蓮與田寮分館近日舉辦「古今交響曲：走讀文化古蹟之旅」，邀請石安社區長輩與學童一同參與，由資深導覽人張美娟老師帶領大小朋友走入在地歷史現場-蘇家古厝，展開一場跨世代共學的文化尋根之旅。',
    descShort: '高雄市立圖書館阿蓮與田寮分館近日舉辦「古今交響曲：走讀文化古蹟之旅」，邀請石安社區長輩與學童一同參與，由資深導覽人張美娟老師帶領大小朋友走入在地歷史現場-蘇家古厝，展開一場跨世代共學的文化尋根之旅。'
  },
  {
    id: 3,
    img: '/images/6812b3040cb616689565d3175445d433.webp',
    title: '奮鬥14年！彰化永靖鄉立圖書館將動土',
    date: '2025/06/27',
    desc: '在各界努力14年積極爭取下，彰化「永靖鄉立圖書館」終於要動土興建；特別以「書本翻頁」為外觀主題，結合自然採光、友善無障礙動線，將設置多功能閱覽區、親子共讀空間等多元設施，未來將成為結合閱讀推廣、學習、交流與社區休憩的文化新地標。',
    descShort: '在各界努力14年積極爭取下，彰化「永靖鄉立圖書館」終於要動土興建；特別以「書本翻頁」為外觀主題，結合自然採光、友善無障礙動線，將設置多功能閱覽區、親子共讀空間等多元設施，未來將成為結合閱讀推廣、學習、交流與社區休憩的文化新地標。'
  }
]

// 設施資料
const facilityList = [
  { id: 1, img: '/images/13.jpg', name: '1' },
  { id: 2, img: '/images/14.jpg', name: '2' },
  { id: 3, img: '/images/15.jpg', name: '3' },
  { id: 4, img: '/images/16.jpg', name: '4' },
  { id: 5, img: '/images/17.jpg', name: '5' },
  { id: 6, img: '/images/19.jpg', name: '6' }
]

// 書籍輪播資料
const bookList = [
  { title: '#', img: '/images/2014713660039b.jpg' },
  { title: '#', img: '/images/1609249670-2052694399-g_m.jpg' },
  { title: '#', img: '/images/986199233.jpg' },
  { title: '#', img: '/images/eb0bb43a326e8709.jpg' },
  { title: '#', img: '/images/9789861993980.jpg' },
  { title: '#', img: '/images/elmmo9g_460x580-200x200.jpg' },
]
const currentIndex = ref(0)
const showCount = 3
function prevBook() {
  currentIndex.value = (currentIndex.value - 1 + bookList.length) % bookList.length
}
function nextBook() {
  currentIndex.value = (currentIndex.value + 1) % bookList.length
}
function getShowBooks() {
  const arr = []
  for (let i = 0; i < showCount; i++) {
    arr.push(bookList[(currentIndex.value + i) % bookList.length])
  }
  return arr
}
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
  align-items: flex-start;
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
  border-radius: 5px;
  flex-shrink: 0;
}

.news-info-large {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.news-card-small {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1 1 0;
  min-width: 350px;
  background: none;
  text-decoration: none;
  color: inherit;
  padding: 0;
  box-sizing: border-box;
}

.news-img-small {
  width: 213px;
  height: 147px;
  object-fit: cover;
  border-radius: 5px;
  flex-shrink: 0;
}

.news-info-small {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
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
  font-size: 1rem !important;
  line-height: 1.6;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 3 !important;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 8em;
  margin-bottom: 0.5rem;
}

.news-read-more-btn {
  background: none;
  border: none;
  color: #1976d2;
  font-size: 0.9rem;
  cursor: pointer;
  padding: 0;
  margin-top: 0.2rem;
  text-decoration: underline;
  transition: color 0.2s;
  display: block;
  margin-left: auto;
  margin-right: 12px;
}

.news-read-more-btn:hover {
  color: #0055a5;
}

/* 設施區塊樣式 */
.facility-section {
  max-width: 1200px;
  margin: 2rem auto 0 auto;
  padding: 0 1rem;
  background: none;
}

.facility-title {
  font-size: 2rem;
  color: #003366;
  margin-bottom: 1.5rem;
  font-weight: bold;
}

.facility-list-large {
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  margin-bottom: 2.5rem;
}

.facility-list-small {
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
}

.facility-card-large {
  position: relative;
  width: 360px;
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
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  border-radius: 0;
}

.facility-img-large {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s;
  border-radius: 0;
}

.facility-card-large:hover .facility-img-large {
  transform: scale(1.12);
}

.facility-name-large {
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(30, 30, 30, 0.7);
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0;
  text-align: left;
  width: auto;
  min-width: 60px;
  max-width: 90%;
  box-sizing: border-box;
  margin: 0;
}

.facility-card-small {
  position: relative;
  width: 320px;
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
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 0;
}

.facility-img-small {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s;
  border-radius: 0;
}

.facility-card-small:hover .facility-img-small {
  transform: scale(1.12);
}

.facility-name-small {
  position: absolute;
  left: 0;
  bottom: 0;
  background: rgba(30, 30, 30, 0.7);
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0;
  text-align: left;
  width: auto;
  min-width: 60px;
  max-width: 90%;
  box-sizing: border-box;
  margin: 0;
}

.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 2rem 0;
}

.section-divider::before,
.section-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e0e6ed;
  margin: 0 16px;
}

.section-divider .dot {
  width: 18px;
  height: 18px;
  background: #1976d2;
  border-radius: 50%;
  display: inline-block;
}

.book-carousel-section {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 3rem auto 2rem auto;
  padding: 0 1rem;
}

.book-carousel-main {
  flex: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.book-carousel-title {
  font-size: 2rem;
  color: #003366;
  font-weight: bold;
  margin-bottom: 2.5rem;
  text-align: center;
}

.book-carousel-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  position: relative;
  min-height: 320px;
  padding: 0 2.5rem;
}

.book-carousel-list {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
}

.book-carousel-item {
  width: 220px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  padding: 1rem 1rem 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s;
}

.book-carousel-item img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0;
  background: #f5f6f8;
}

.catalog-card {
  width: 260px;
  min-width: 220px;
  background: #003366;
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1.2rem;
  justify-content: center;
}

.catalog-icon {
  width: 80px;
  height: 80px;
  background: #1976d2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.catalog-icon img {
  width: 48px;
  height: 48px;
  filter: brightness(0) invert(1);
}

.catalog-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #ffd700;
  margin-bottom: 0.7rem;
  margin-top: 0.2rem;
}

.catalog-desc {
  font-size: 1rem;
  color: #fff;
  margin-bottom: 1.2rem;
  text-align: center;
  line-height: 1.6;
}

.catalog-btn {
  display: inline-block;
  background: #ffd700;
  color: #003366;
  font-weight: bold;
  border-radius: 24px;
  padding: 0.6rem 1.6rem;
  text-decoration: none;
  font-size: 1.08rem;
  transition: background 0.2s, color 0.2s;
  margin-top: 0.5rem;
}

.catalog-btn:hover {
  background: #1976d2;
  color: #fff;
}

.carousel-btn.big {
  flex-shrink: 0;
  min-width: 56px;
  min-height: 56px;
  align-self: center;
  margin: 0 2rem;
  position: relative;
  z-index: 2;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1976d2 80%, #5ba3f5 100%);
  color: #fff;
  border: 2.5px solid #fff;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(25, 118, 210, 0.13);
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s, border 0.2s;
}

.carousel-btn.big:hover {
  background: linear-gradient(135deg, #0055a5 80%, #1976d2 100%);
  box-shadow: 0 6px 24px rgba(25, 118, 210, 0.18);
  border: 2.5px solid #1976d2;
}

.arrow {
  font-weight: bold;
  font-size: 2.2rem;
  line-height: 1;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.10);
}

.nlpi-wrapper>img {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  display: block;
  margin-bottom: 0;
}

:deep(.news-desc-small) {
  -webkit-line-clamp: 5 !important;
  font-size: 1rem !important;
  line-height: 1.6 !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  min-height: 8em !important;
  margin-bottom: 0.5rem !important;
  white-space: normal !important;
}
</style>