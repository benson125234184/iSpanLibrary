<template>
   <div class="nlpi-wrapper">
     <!-- Header -->
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
                 <a href="#">線上辦證</a>
                 <a href="#">座位預約</a>
                 <a href="#">借閱服務</a>
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
                       <div class="service-card">
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
     </header>  
     <nav class="nlpi-nav">
      
     </nav>
     <img src="/public/images/library-building.jpg" alt="圖書館外觀" class="" />
     
     <!-- Main Content -->
     <main class="nlpi-main">
       <section class="nlpi-hero">
         <h1>National Library of Public Information</h1>
         <p class="nlpi-desc">Welcome to the NLPI! Explore digital resources, e-books, activities, and more.</p>
       </section>
       <section class="nlpi-cards">
         <div class="nlpi-card">
           <h2>Digital Resources</h2>
           <p>Access a wide range of e-books, e-journals, and multimedia collections online.</p>
           <button class="nlpi-btn">Explore</button>
         </div>
         <div class="nlpi-card">
           <h2>Reader Service</h2>
           <p>Online registration, seat & room booking, loan service, and more for all readers.</p>
           <button class="nlpi-btn">Learn More</button>
         </div>
         <div class="nlpi-card">
           <h2>Activities</h2>
           <p>Join our lectures, workshops, and events to enrich your knowledge and experience.</p>
           <button class="nlpi-btn">See Events</button>
         </div>
       </section>
     </main>
 
     <!-- Footer -->
     <footer class="nlpi-footer">
       <div>National Library of Public Information</div>
       <div>Address: No.100, Wuquan S. Rd., South Dist., Taichung City 402011, Taiwan (R.O.C.)</div>
       <div>Tel: 886-4-2262-5100</div>
       <div class="nlpi-footer-links">
         <a href="#">Privacy Policy</a> | <a href="#">Contact Us</a> | <a href="#">FAQ</a>
       </div>
       <div class="nlpi-copyright">© 2025 All Rights Reserved by National Library of Public Information</div>
     </footer>
   </div>
 </template>
 
 <script setup>
 import { ref, onMounted } from 'vue'
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
 </script>
 
 <style scoped>
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
   box-shadow: 0 2px 8px rgba(0,0,0,0.12);
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
   box-shadow: 0 2px 12px rgba(0,0,0,0.07);
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
 .nlpi-footer {
   background: #003366;
   color: #fff;
   text-align: center;
   padding: 1.5rem 1rem 1rem 1rem;
   font-size: 1rem;
 }
 .nlpi-footer-links {
   margin: 0.5rem 0;
 }
 .nlpi-footer-links a {
   color: #ffd700;
   text-decoration: none;
   margin: 0 0.5rem;
 }
 .nlpi-footer-links a:hover {
   text-decoration: underline;
 }
 .nlpi-copyright {
   font-size: 0.95rem;
   color: #ccc;
   margin-top: 0.5rem;
 }
 @media (max-width: 900px) {
   .nlpi-cards {
     flex-direction: column;
     align-items: center;
   }
   .nlpi-card {
     width: 90%;
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
   box-shadow: 0 8px 24px rgba(0,0,0,0.18), 0 1.5px 6px rgba(0,0,0,0.10);
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
   box-shadow: 0 2px 8px rgba(0,0,0,0.04);
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
 .nlpi-service-popup-btn, .nlpi-search-popup-btn {
   background: #4a90e2;
   color: #fff;
   border: none;
   border-radius: 18px;
   padding: 0.7rem 2.2rem;
   font-size: 1.15rem;
   font-weight: 600;
   cursor: pointer;
   box-shadow: 0 2px 8px rgba(0,0,0,0.08);
   display: flex;
   align-items: center;
   gap: 0.5rem;
   transition: background 0.2s, color 0.2s;
   height: 48px;
   align-self: flex-end;
 }
 .nlpi-service-popup-btn:hover, .nlpi-search-popup-btn:hover {
   background: #5ba3f5;
   color: #fff;
 }
 .nlpi-service-popup-panel, .nlpi-search-popup-panel {
   position: absolute;
   top: 110%;
   right: 0;
   width: 1100px;
   min-width: 1100px;
   background: #f5f6f8;
   border-radius: 24px;
   box-shadow: 0 8px 32px rgba(0,0,0,0.18);
   z-index: 300;
   padding: 2.2rem 2.5rem 2rem 2.5rem;
   display: flex;
   flex-direction: column;
   align-items: flex-end;
   animation: popup-fade-in 0.18s;
 }
 @keyframes popup-fade-in {
   from { opacity: 0; transform: translateY(20px); }
   to { opacity: 1; transform: translateY(0); }
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
 
 </style>
 