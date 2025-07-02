<template>
    <div class="scroll-wrapper">
        <div class="contact">
            <div class="title-row">
                <img src="/public/images/libraryLogo.png" alt="Logo" />
                <h1>聯絡我們</h1>
            </div>

            <div class="contact-content">
                <div class="department-section">
                    <h3 class="department-title">採編課</h3>
                    <p class="department-desc">業務項目：圖書資料之徵集、選購、登記、分類、編目及交換。</p>
                    <p class="department-email">Email: <a
                            href="mailto:acquisition@timelibrary.edu.tw">acquisition@timelibrary.edu.tw</a>
                    </p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">閱覽典藏課</h3>
                    <p class="department-note">（若為預約取書、圖書歸還等相關閱覽問題，請逕洽各分館閱覽室）</p>
                    <p class="department-desc">業務項目：各類圖書資料及金石、輿圖、文獻之庋藏、陳列、供閱、出借與催還等事項。</p>
                    <p class="department-email">Email: <a
                            href="mailto:circulation@timelibrary.edu.tw">circulation@timelibrary.edu.tw</a>
                    </p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">諮詢服務課</h3>
                    <p class="department-desc">業務項目：參考資源之徵集與管理、參考問題諮詢服務、文獻傳遞服務、成人教育資訊服務、留學諮詢服務、多元文化中心服務及樂齡中心服務等事項。</p>
                    <p class="department-email">Email: <a
                            href="mailto:reference@timelibrary.edu.tw">reference@timelibrary.edu.tw</a>
                    </p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">推廣課</h3>
                    <p class="department-desc">業務項目：調查統計、研究實驗、視察輔導、推廣活動、展覽演講、文宣刊物、導覽參觀、巡迴圖書、圖書館專業人員訓練及盲人圖書服務等事項。</p>
                    <p class="department-email">Email: <a
                            href="mailto:promotion@timelibrary.edu.tw">promotion@timelibrary.edu.tw</a>
                    </p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">視聽室</h3>
                    <p class="department-desc">業務項目：視聽資料之蒐集、整理、製作、複印、保管、出借、催還，視聽節目之安排、放映及視聽器材之管理維護等事項。</p>
                    <p class="department-email">Email: <a
                            href="mailto:audiovisual@timelibrary.edu.tw">audiovisual@timelibrary.edu.tw</a>
                    </p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">資訊室</h3>
                    <p class="department-desc">業務項目：各種資料分析、登錄、輸入，資訊制度規劃、程式設計、計算機應用之研究及機器操作與維護等事項。</p>
                    <p class="department-email">Email: <a href="mailto:it@timelibrary.edu.tw">it@timelibrary.edu.tw</a>
                    </p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">秘書室</h3>
                    <p class="department-desc">業務項目：文書、印信、財產、出納、庶務、研考、營繕、機電設備之管理維護及其他不屬於各課室事項。</p>
                    <p class="department-email">Email: <a
                            href="mailto:secretary@timelibrary.edu.tw">secretary@timelibrary.edu.tw</a>
                    </p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">會計室</h3>
                    <p class="department-desc">業務項目：依法辦理歲計、會計及統計事項。</p>
                    <p class="department-email">Email: <a
                            href="mailto:accounting@timelibrary.edu.tw">accounting@timelibrary.edu.tw</a>
                    </p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">人事室</h3>
                    <p class="department-desc">業務項目：依法辦理人事管理事項。</p>
                    <p class="department-email">Email: <a href="mailto:hr@timelibrary.edu.tw">hr@timelibrary.edu.tw</a>
                    </p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">政風室</h3>
                    <p class="department-desc">業務項目：依法辦理政風事項。</p>
                    <p class="department-email">Email: <a
                            href="mailto:ethics@timelibrary.edu.tw">ethics@timelibrary.edu.tw</a>
                    </p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">駐警隊</h3>
                    <p class="department-desc">總館館舍維安處理、門禁車輛管制及協助駐分館勤務等事項。</p>
                </div>

                <div class="department-section">
                    <h3 class="department-title">各分館閱覽室</h3>
                    <p class="department-desc">圖書資料典藏與流通作業、參考諮詢、資訊檢索及推廣服務等項目。</p>
                </div>

                <div class="phone-section">
                    <h3 class="phone-title">總館各課室電話一覽表</h3>
                    <p class="phone-note">詳細電話資訊請洽各課室或參考圖書館官方網站。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.scroll-wrapper {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.contact {
    flex: 1;
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 10px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
}

.contact-content {
    width: 100%;
    max-width: 800px;
}

.title-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
    margin-top: 1rem;
    width: 100%;
}

.title-row img {
    width: 50px;
    height: auto;
}

.title-row h1 {
    margin: 0;
    font-size: 2rem;
    color: #003366;
    text-align: center;
}

.department-section {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid rgba(229, 231, 235, 0.4);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.department-title {
    font-size: 1.4rem;
    font-weight: bold;
    color: #003366;
    margin: 0 0 12px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid #003366;
}

.department-note {
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
    margin: 0 0 12px 0;
    padding: 8px 12px;
    background: rgba(255, 193, 7, 0.1);
    border-radius: 6px;
    border-left: 3px solid #ffc107;
}

.department-desc {
    font-size: 1rem;
    color: #333;
    line-height: 1.6;
    margin: 0 0 12px 0;
}

.department-email {
    font-size: 1rem;
    color: #2563eb;
    margin: 0;
}

.department-email a {
    color: #2563eb;
    text-decoration: none;
    font-weight: 500;
}

.department-email a:hover {
    text-decoration: underline;
}

.phone-section {
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 20px;
    margin-top: 30px;
    border: 1px solid rgba(229, 231, 235, 0.4);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.phone-title {
    font-size: 1.4rem;
    font-weight: bold;
    color: #003366;
    margin: 0 0 12px 0;
    padding-bottom: 8px;
    border-bottom: 2px solid #003366;
}

.phone-note {
    font-size: 1rem;
    color: #666;
    margin: 0;
    font-style: italic;
}

/* 滾動條樣式 */
.contact::-webkit-scrollbar {
    width: 8px;
}

.contact::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.scroll-wrapper:hover .contact::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
}

.scroll-wrapper:hover .contact {
    scrollbar-color: rgba(0, 0, 0, 0.4) transparent;
}
</style>