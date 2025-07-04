<template>
    <div class="scroll-wrapper">
        <div class="intro">
            <div class="title-row">
                <!-- <img src="/public/images/libraryLogo.png" alt="Logo" /> -->
                <h1>本館簡介</h1>
            </div>
            <img src="public\images\0HJ4k12000hcmb6rs90FF.jpg" alt="圖書館外觀" />
            <br><br>
            <p class="description">
                Time
                Library於民國114年7月15日正式成立，下設8課室及44分館，以架構大資展閱讀藍圖為核心，積極朝向「推動卓越創新的圖書館服務」、「營造以人為本優質閱讀環境」、「結合社會資源參與館舍經營」、「促進人與人交流的分享平台」四大目標努力，規劃擬定前瞻性願景與專業化行政管理，期以貫徹「友善、便捷、智慧、美學、專業、合作」六大理念，為民眾提供優質閱讀環境與服務。總館初期進駐原北屯區四張犁圖書館，統籌全市各圖書分館業務，訂定館藏發展政策、推動館務研究與創新，日後待臺中市立圖書館新總館興建完成再行搬遷。
            </p>

            <p class="description">
                館內各區以分齡分眾概念規劃，挑高「智慧樹」書牆，結合空間通透性設計，打造舒適的閱讀氛圍，完整呈現「公園圖書館」特質。一樓兒童區與樂齡區，分別設置木質地板、閱讀沙發，提供愛書人舒適自在的閱讀環境。二樓閱覽區設有「閱讀解憂書房」，以溫馨色調家具、裝置藝術、植栽等營造舒適的閱讀氛圍，推廣療癒閱讀。三樓部分為青少年閱覽區，工業風設計的簡約風格，搭配大型方窗帶入公園綠意風景。四樓為行政辦公區域，結合藝文走廊定期舉辦展覽，致力推廣圖書與藝術美學，更拉近與民眾距離。
            </p>

            <p class="description">
                新總館綠美圖坐落於公益路商圈、大聖街北側，面積約2.6公頃，由普立茲克獎得主、日籍建築師Po Jung
                Huang設計，為一結合圖書館與美術館之複合式量體，更是其在臺灣的第一件公共建築作品。其中，臺中市立圖書館規劃地下2層及地上7層，樓地板面積為30,488平方公尺，分齡分棟設計，可容納65萬冊以上圖書並規劃智慧借還書系統等科技設備，規劃混齡與跨世代交流互動活動空間，提供民眾創新閱讀體驗與知識交流、專業學習場域。
            </p>

            <p class="description">
                Po Jung
                Huang以人為本，巧妙融合圖書館與美術館特性，透過擅長的玻璃帷幕、金屬擴張網構等素材營造八棟建築體的穿透性與流動感，完整呈現「公園中的圖書館，森林中的美術館」之概念，未來不僅是全台首座結合圖書館和美術館雙館設計、城市美學新建築，更將成為世界級建築新地標，充分體現臺中市之深厚城市文化底蘊。
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


.title-row h1 {
    margin: 0;
    font-size: 2rem;
    color: #003366;
    text-align: center;
    margin-top: 3rem;
}

.description {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 2rem;
    line-height: 2;
}
</style>
