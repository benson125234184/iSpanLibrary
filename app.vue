<template>
   <div class="nlpi-wrapper">
     <!-- Header -->
     <header class="nlpi-header">
       <img src="https://www.nlpi.edu.tw/images/logo.png" alt="NLPI Logo" class="nlpi-logo" />
       <nav class="nlpi-nav">
         <a href="#" class="nlpi-nav-link">Home</a>
         <a href="#" class="nlpi-nav-link">Information</a>
         <a href="#" class="nlpi-nav-link">Digital Resources</a>
         <a href="#" class="nlpi-nav-link">Reader Service</a>
         <a href="#" class="nlpi-nav-link">Locations & Hours</a>
         <a href="#" class="nlpi-nav-link">About NLPI</a>
       </nav>
     </header>
 
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
 
 <style scoped>
 .nlpi-wrapper {
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   background: #f8fafc;
 }
 .nlpi-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   background: #003366;
   color: #fff;
   padding: 0.5rem 2rem;
 }
 .nlpi-logo {
   height: 48px;
 }
 .nlpi-nav {
   display: flex;
   gap: 1.5rem;
 }
 .nlpi-nav-link {
   color: #fff;
   text-decoration: none;
   font-weight: 500;
   font-size: 1.1rem;
   transition: color 0.2s;
 }
 .nlpi-nav-link:hover {
   color: #ffd700;
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
 </style>
 