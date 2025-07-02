<template>
    <div class="scroll-wrapper">
        <div class="intro">
            <div class="title-row">
                <!-- <img src="/public/images/libraryLogo.png" alt="Logo" /> -->
                <h1>本館簡介</h1>
            </div>
            <img src="public\images\f_10552104_1.jpg" alt="圖書館外觀" />
            <p class="description">
                圖書館由Samoo建築師和工程師事務所設計，設計主題是翻開的書頁。彎曲的紙張的簡單幾何形狀成為了設計的基礎，為建築創造出獨一無二的輪廓，使該圖書館成為城市地標建築之一，很容易辨認。同時，圖書館還被設計成一座情緒化圖書館，使用了模擬和數位技術，以提高用戶最大限度地利用圖書館的可能性，這也是建築設計的策略之一。
            </p>
            <p class="description">                
                圖書館計畫成為中央政府綜合樓的主要資源及配套設施，是供政府和當地市民使用的一個基礎設施。圖書館內開闊的空間可以欣賞到湖水的秀麗景色，給用戶提供了極佳的氛圍。建築中央有一個開放的步行廣場，熱情歡迎著建築內的遊客。開闊的空間是整個圖書館內內部繁榮空間連接，這也有助於用戶找到自己的目的地。閱讀區主要分布在一層和二層，佈局開放，可達性很強。研討室和會議室位於三層，最上面的幾層是餐飲設施和屋頂露臺，周圍視野開闊。
                由於建築有著獨特的外形和幾何形狀，該專案從一開始就採用了建築資訊模型（BIM）。板、柱、核心筒等主要結構構件都用建築資訊模型建模，以確認專案和施工的可行性。建築資訊模型提供的解決方案不但能對不同學科之間的互通性進行施工前類比，還能製造出獨特的板材和幕牆系統，這些正是這個專案獨特幾何形狀形成的基礎。
            </p>
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

.intro {
    flex: 1;
    max-width: 1000px;
    /* max-height: 1000px; */
    margin: 0 auto;
    padding: 0 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100%; */
    height: 100%;
    scrollbar-width: thin;
    /* for Firefox */
    scrollbar-color: transparent transparent;
}

.intro img {
    max-width: 800px;
    width: 100%;
    height: 70%;
    object-fit: cover;
    margin: 1rem 0;
    border-radius: 30px;
}

.title-row {
    display: flex;
    align-items: center;
    gap: 1rem;
    /* 圖片與文字間距 */
}

.title-row img {
    width: 50px;
    height: auto;
}

.title-row h1 {
    margin: 0;
    font-size: 2rem;
}

.description {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 2rem;
    line-height: 2;
}
</style>
