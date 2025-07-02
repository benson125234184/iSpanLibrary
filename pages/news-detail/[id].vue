<template>
  <div class="news-detail-bg">
    <div class="news-detail-card" v-if="news">
      <h1 class="news-detail-title">{{ news.title }}</h1>
      <div class="news-detail-meta">
        <span class="news-detail-source">{{ news.source }}</span>
        <span class="news-detail-date">{{ news.date }}</span>
      </div>
      <img v-if="news.img" :src="news.img" :alt="news.title" class="news-detail-img" />
      <div class="news-detail-content" v-html="news.content"></div>
      <NuxtLink to="/" class="news-detail-back">返回首頁</NuxtLink>
    </div>
    <div v-else class="news-detail-notfound">查無此消息</div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

// 與首頁同步的新聞資料
const newsList = [
  {
    id: 1,
    img: '/images/羅布森圖書館室內模擬圖.jpg',
    title: '城市裡的森林書屋！台中首座高綠覆率「羅布森圖書館」動土',
    date: '2025/06/23',
    desc: '台中閱讀版圖再升級！由民間捐建、市府積極推動的「羅布森圖書館」今（19）日舉行開工動土典禮，市長盧秀燕親自出席，感謝羅布森股份有限公司董事長汪世旭出資逾1.2億元，實踐推廣閱讀與文化的理想，並將圖書館捐贈市府作為公共資產。盧市長表示，這不僅是企業家的文化情懷展現，更是市府文化政策的重要里程碑，也實現她七年前競選時承諾要為南屯設立圖書館的政見。',
    content: `台中閱讀版圖再升級！由民間捐建、市府積極推動的「羅布森圖書館」今（19）日舉行開工動土典禮，市長盧秀燕親自出席，感謝羅布森股份有限公司董事長汪世旭出資逾1.2億元，實踐推廣閱讀與文化的理想，並將圖書館捐贈市府作為公共資產。<br><br>盧市長表示，這不僅是企業家的文化情懷展現，更是市府文化政策的重要里程碑，也實現她七年前競選時承諾要為南屯設立圖書館的政見。新館將結合自然採光、友善無障礙動線，設置多功能閱覽區、親子共讀空間等多元設施，未來將成為結合閱讀推廣、學習、交流與社區休憩的文化新地標。`
  },
  {
    id: 2,
    img: '/images/17698e741cbc833e9aa2e2004c84abb1.webp',
    title: '圖書館「走讀文化古蹟之旅」 親子共學走入石安蘇家古厝',
    date: '2025/06/06',
    desc: '高雄市立圖書館阿蓮與田寮分館近日舉辦「古今交響曲：走讀文化古蹟之旅」，邀請石安社區長輩與學童一同參與，由資深導覽人張美娟老師帶領大小朋友走入在地歷史現場-蘇家古厝，展開一場跨世代共學的文化尋根之旅。',
    content: `高雄市立圖書館阿蓮與田寮分館近日舉辦「古今交響曲：走讀文化古蹟之旅」，邀請石安社區長輩與學童一同參與，由資深導覽人張美娟老師帶領大小朋友走入在地歷史現場-蘇家古厝，展開一場跨世代共學的文化尋根之旅。<br><br>活動中，長輩們分享過往生活經驗，學童們則以新奇的眼光探索古蹟，促進世代間的交流與理解。圖書館希望透過這類活動，讓更多人認識在地文化，增進社區凝聚力。`
  },
  {
    id: 3,
    img: '/images/6812b3040cb616689565d3175445d433.webp',
    title: '奮鬥14年！彰化永靖鄉立圖書館將動土',
    date: '2025/06/27',
    desc: '在各界努力14年積極爭取下，彰化「永靖鄉立圖書館」終於要動土興建；特別以「書本翻頁」為外觀主題，結合自然採光、友善無障礙動線，將設置多功能閱覽區、親子共讀空間等多元設施，未來將成為結合閱讀推廣、學習、交流與社區休憩的文化新地標。',
    content: `在各界努力14年積極爭取下，彰化「永靖鄉立圖書館」終於要動土興建；特別以「書本翻頁」為外觀主題，結合自然採光、友善無障礙動線，將設置多功能閱覽區、親子共讀空間等多元設施。<br><br>未來圖書館將成為結合閱讀推廣、學習、交流與社區休憩的文化新地標，預計於2026年底完工啟用，服務更多在地居民與學子。`
  }
]

const route = useRoute()
const news = computed(() => newsList.find(n => n.id === Number(route.params.id)))
</script> 

<style scoped>
.news-detail-bg {
  min-height: 100vh;
  background: url('/public/images/library-bg.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
}
.news-detail-card {
  background: rgba(255,255,255,0.97);
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  max-width: 800px;
  width: 100%;
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.news-detail-logo {
  width: 60px;
  margin-bottom: 1.2rem;
}
.news-detail-title {
  font-size: 2rem;
  color: #003366;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
}
.news-detail-meta {
  color: #222;
  font-size: 1.08rem;
  margin-bottom: 1.2rem;
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}
.news-detail-source {
  font-weight: bold;
}
.news-detail-date {
  color: #888;
}
.news-detail-img {
  width: 100%;
  max-width: 420px;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}
.news-detail-content {
  font-size: 1.13rem;
  color: #222;
  line-height: 2;
  margin-bottom: 2rem;
  text-align: left;
}
.news-detail-back {
  color: #1976d2;
  text-decoration: underline;
  font-size: 1.08rem;
  align-self: flex-end;
}
.news-detail-notfound {
  color: #c00;
  font-size: 1.3rem;
  text-align: center;
  margin-top: 4rem;
}
</style> 