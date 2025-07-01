<template>
  <HeaderBar />
  <NuxtPage />
  <FooterBar />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import HeaderBar from '@/components/HeaderBar/index.vue'
import FooterBar from '@/components/FooterBar.vue'

const showInfoMenu = ref(false)
const showDigitalMenu = ref(false)
const showReaderMenu = ref(false)
const showLocationMenu = ref(false)
const showAboutMenu = ref(false)
const showLangMenu = ref(false)
const showServicePopup = ref(false)
const showSearchPopup = ref(false)
// 點擊外部自動關閉 popup
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
const newsList = [
  {
    id: 1,
    img: '/public/images/03adb31f-0963-4f6a-a124-50ad861e053f.png',
    title: '圖書館與體育大學合作推動健康閱讀',
    date: '2025/06/23',
    desc: '因應高齡化社會與全民健身趨勢，圖書館攜手體育大學共同推動健康閱讀活動...',
    link: '#/news/1'
  },
  {
    id: 2,
    img: '#',
    title: '資訊素養論壇圓滿落幕',
    date: '2025/05/15',
    desc: '2025資訊素養論壇於本館盛大舉行，邀請多位專家學者分享...',
    link: '#/news/2'
  },
  {
    id: 3,
    img: '#',
    title: '第三則新聞標題',
    date: '2025/04/10',
    desc: '這是第三則新聞的內容摘要...',
    link: '#/news/3'
  }
]
const facilityList = [
  {
    id: 1,
    img: '/public/images/sub03_0103_img09.jpg',
    name: '閱覽區'
  },
  {
    id: 2,
    img: '/public/images/sub03_0103_img10.jpg',
    name: '藏書展示'
  },
  {
    id: 3,
    img: '/public/images/sub03_0103_img10.jpg',
    name: '多媒體區'
  },
  {
    id: 4,
    img: '/public/images/sub03_0103_img11.jpg',
    name: '自修教室'
  },
  {
    id: 5,
    img: '/public/images/sub03_0103_img12.jpg',
    name: '討論區'
  },
  {
    id: 6,
    img: '#',
    name: '兒童閱覽區'
  }
]
</script>

<style>
body,
.nlpi-wrapper {
  background: #fff;
}

.news-section,
.facility-section,
.nlpi-card,
.footer-content {
  background: #f5f6f8;
  border-radius: 12px;
}

.news-title,
.facility-title,
h1,
h2,
h3 {
  color: #003366;
}

a,
.nlpi-btn {
  color: #1976d2;
}

a:hover,
.nlpi-btn:hover {
  color: #0055a5;
}

.main-container,
.content-body {
  background: #fff;
}

.nlpi-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8fafc;
}

.nlpi-banner {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  display: block;
  margin-bottom: 2rem;
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
  /*max-width: 180px;*/
}

.nlpi-header-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  flex: 1;
  height: 100%;
}

.nlpi-top-links-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  gap: 1.5rem;
  margin-bottom: 8px;
}

.nlpi-top-links {
  font-size: 1.08rem;
  color: #7a7a7a;
  white-space: nowrap;
}

.nlpi-top-links a {
  color: #7a7a7a;
  text-decoration: none;
  margin: 0 0.2rem;
  transition: color 0.2s;
}

.nlpi-top-links a:hover {
  color: #7a7a7a;
  text-decoration: none;
}

.nlpi-social-lang {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 6px;
}

.nlpi-social-icon img {
  width: 28px;
  height: 28px;
  display: inline-block;
}

.nlpi-lang-dropdown {
  position: relative;
}

.nlpi-lang-btn {
  background: #003366;
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 0.2rem 0.8rem;
  font-size: 0.95rem;
  min-height: 28px;
  cursor: pointer;
}

.nlpi-lang-menu {
  position: absolute;
  right: 0;
  top: 110%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  min-width: 90px;
  z-index: 200;
  padding: 0.3rem 0;
}

.nlpi-lang-menu a {
  display: block;
  padding: 0.6rem 1.2rem;
  color: #003366;
  text-decoration: none;
  font-size: 1rem;
  transition: background 0.2s;
}

.nlpi-lang-menu a:hover {
  background: #f0f4fa;
}

.nlpi-nav {
  display: flex;
  gap: 0.4rem;
  margin-left: auto;
}

.nlpi-nav-link {
  color: #003366;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.35rem;
  transition: color 0.2s;
  display: flex;
  align-items: flex-start;
  position: relative;
  padding: 0 0.7rem;
}

.nlpi-nav-link:hover .nav-label,
.nlpi-nav-link:focus .nav-label {
  color: #0055a5;
}

.nlpi-main {
  flex: 1;
  padding: 2rem 1rem 3rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
}

.nlpi-hero {
  text-align: center;
  margin-bottom: 2.5rem;
}

.nlpi-hero h1 {
  font-size: 2.5rem;
  color: #003366;
  margin-bottom: 0.5rem;
}

.nlpi-desc {
  font-size: 1.2rem;
  color: #555;
}

.nlpi-cards {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.nlpi-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);
  padding: 2rem 1.5rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 1.5rem;
}

.nlpi-card h2 {
  color: #003366;
  margin-bottom: 0.7rem;
}

.nlpi-card p {
  color: #444;
  margin-bottom: 1.2rem;
}

.nlpi-btn {
  background: #003366;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.nlpi-btn:hover {
  background: #0055a5;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
  gap: 2rem;
}

.footer-logo {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.footer-info,
.footer-site,
.footer-hours {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 1rem;
}

.footer-info {
  align-items: flex-start;
}

.footer-site {
  align-items: center;
}

.footer-hours {
  align-items: flex-end;
}

.footer-site a {
  color: #ffd700;
  text-decoration: none;
}

.footer-site a:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
  }

  .footer-info,
  .footer-site,
  .footer-hours {
    align-items: center;
  }

  .footer-hours {
    align-items: center;
  }
}

.nav-dropdown {
  position: relative;
  display: inline-block;
  padding: 0 24px;
  min-height: 48px;
  cursor: pointer;
}

.nav-label {
  display: flex;
  align-items: flex-end;
  height: 100px;
  font-size: 1.35rem;
  color: #003366;
  margin-top: -12px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  color: #003366;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18), 0 1.5px 6px rgba(0, 0, 0, 0.10);
  min-width: 180px;
  width: 100%;
  z-index: 100;
  padding: 0.5rem 0;
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.nav-dropdown:hover .dropdown-menu,
.nav-dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translateY(0);
}

.dropdown-menu a {
  display: block;
  padding: 0.8rem 1.5rem;
  color: #003366;
  text-decoration: none;
  font-size: 1.08rem;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}

.dropdown-menu a:hover {
  background: #f0f4fa;
  color: #0055a5;
}

.nlpi-service-search-bar {
  display: flex;
  align-items: center;
  background: #f1f3f6;
  border-radius: 22px;
  padding: 0.3rem 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  width: fit-content;
  margin: 0;
  align-self: flex-start;
  margin-top: 45px;
  position: relative;
}

.nlpi-service-popup-wrap {
  position: relative;
  display: inline-block;
}

.nlpi-service-btn {
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1.2rem;
  font-size: 1.13rem;
  color: #444;
  font-weight: 500;
  border-radius: 18px;
  transition: background 0.18s;
}

.nlpi-service-btn:hover {
  background: #eaf1fa;
}

.nlpi-btn-icon {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}

.nlpi-btn-divider {
  width: 1px;
  height: 28px;
  background: #d1d5db;
  margin: 0 0.5rem;
}

.nlpi-service-popup-btn,
.nlpi-search-popup-btn {
  background: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 18px;
  padding: 0.7rem 2.2rem;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.2s, color 0.2s;
  height: 48px;
  align-self: flex-end;
}

.nlpi-service-popup-btn:hover,
.nlpi-search-popup-btn:hover {
  background: #5ba3f5;
  color: #fff;
}

.nlpi-service-popup-panel,
.nlpi-search-popup-panel {
  position: absolute;
  top: 110%;
  right: 0;
  width: 1100px;
  min-width: 1100px;
  background: #f5f6f8;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  z-index: 300;
  padding: 2.2rem 2.5rem 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation: popup-fade-in 0.18s;
}

@keyframes popup-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.nlpi-popup-close {
  background: #4a90e2;
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 0.4rem 1.2rem;
  font-size: 1.08rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
  cursor: pointer;
  align-self: flex-end;
}

.nlpi-popup-content {
  width: 100%;
  max-width: none;
  text-align: left;
}

.nlpi-popup-content h2 {
  color: #003366;
  font-size: 2rem;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.nlpi-popup-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.nlpi-popup-content li {
  font-size: 1.35rem;
  color: #888;
  min-width: 120px;
}

/* 新增卡片式服務選單樣式 */
.service-cards-content {
  padding: 2rem 1.5rem 1.5rem 1.5rem;
}

.service-cards-title {
  color: #003366;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: left;
  padding-left: 28px;
}

.service-cards-row {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  flex-wrap: nowrap;
  overflow-x: visible;
  width: 100%;
}

.service-card {
  background: #f8fafc;
  border: 1.5px solid #d1d5db;
  border-radius: 12px;
  width: 170px;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: border 0.2s, box-shadow 0.2s, color 0.2s;
  cursor: pointer;
}

.service-card:hover .service-card-label {
  color: #e65100;
  font-weight: 600;
}

.service-card-label {
  color: #666;
  font-size: 1.13rem;
  margin-top: 1.1rem;
  text-align: center;
}

.service-card-inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1.5px solid #d1d5db;
  transition: none;
}

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

.news-list-row {
  display: flex;
  gap: 2rem;
}

.news-item-large {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.news-content-row {
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  gap: 1.5rem;
  height: 100%;
}

.news-info-large,
.news-info-small {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.news-img-wrap-large {
  width: 320px;
  height: 220px;
  overflow: hidden;
  border-radius: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.news-img-large {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s;
}

.news-img-wrap-large:hover .news-img-large {
  transform: scale(1.08);
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
}

.news-item-small {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-item-small .news-content-row {
  display: flex;
  flex-direction: row-reverse;
  align-items: stretch;
  gap: 1rem;
}

.news-img-wrap-small {
  width: 90px;
  height: 70px;
  overflow: hidden;
  border-radius: 10px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.news-img-small {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s;
}

.news-img-wrap-small:hover .news-img-small {
  transform: scale(1.08);
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

@media (max-width: 900px) {
  .news-content-row {
    flex-direction: column;
    gap: 1rem;
  }

  .news-img-wrap-large {
    width: 100%;
    height: 180px;
  }

  .news-list-bottom {
    flex-direction: column;
    gap: 1rem;
  }

  .news-item-small .news-content-row {
    flex-direction: column;
    gap: 0.5rem;
  }

  .news-img-wrap-small {
    width: 100%;
    height: 90px;
  }
}

.news-info-large,
.news-info-small,
.news-img-wrap-large,
.news-img-wrap-small {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.news-img-wrap-large,
.news-img-wrap-small {
  display: flex;
  align-items: center;
}

.news-info-large:hover .news-item-title-large,
.news-info-small:hover .news-item-title-small {
  color: #003366;
  text-decoration: none;
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

.news-item-title-large,
.news-item-title-small {
  font-size: 1.3rem;
  font-weight: 700;
  color: #666;
  margin-bottom: 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.news-desc-large,
.news-desc-small {
  color: #444;
  font-size: 1.08rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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

.news-info-large,
.news-info-small {
  color: #666;
}

.news-card-large:hover .news-info-large,
.news-card-large:focus .news-info-large,
.news-card-large:hover .news-item-title-large,
.news-card-large:focus .news-item-title-large,
.news-card-large:hover .news-desc-large,
.news-card-large:focus .news-desc-large,
.news-card-large:hover .news-date-large,
.news-card-large:focus .news-date-large,
.news-card-large:hover,
.news-card-large:focus {
  color: #003366;
}

.news-card-large:hover .news-item-title-large,
.news-card-large:focus .news-item-title-large,
.news-card-small:hover .news-item-title-small,
.news-card-small:focus .news-item-title-small {
  color: #003366;
  text-decoration: none;
}

.news-card-small:hover .news-info-small,
.news-card-small:focus .news-info-small,
.news-card-small:hover .news-item-title-small,
.news-card-small:focus .news-item-title-small,
.news-card-small:hover .news-desc-small,
.news-card-small:focus .news-desc-small,
.news-card-small:hover .news-date-small,
.news-card-small:focus .news-date-small,
.news-card-small:hover,
.news-card-small:focus {
  color: #003366;
}

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

.facility-list-large,
.facility-list-small {
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
  padding: 0.7rem 0.5rem;
  text-align: center;
  font-weight: 600;
}

/* 國資圖風格 Mega Menu 樣式 */
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
</style>