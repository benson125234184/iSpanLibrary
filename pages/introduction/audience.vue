<template>
    <div class="scroll-wrapper">
        <div class="audience">
            <div class="title-row">
                <img src="/public/images/libraryLogo.png" alt="讀者" />
                <h1>服務對象</h1>
            </div>
            <img src="public\images\16.jpg" alt="圖書館讀者" />
            <p class="description">
                Time Library的服務對象非常廣泛，涵蓋了所有年齡層和背景的讀者。這包括幼兒、兒童、青少年、成人、樂齡族群，以及學校、機關團體等。
            </p>

            <h3 class="service-title">一般讀者與學校單位</h3>
            <p class="description">
                任何年齡的民眾都可以申請圖書館借閱證，使用圖書館的資源，包括書籍、期刊、視聽資料等。圖書館也提供學校班級預約參觀，包括環境導覽、說故事活動、書籍導覽等服務。
            </p>

            <h3 class="service-title">兒童與青少年</h3>
            <p class="description">
                圖書館有豐富的兒童圖書，也提供說故事活動，服務對象包含幼兒、兒童、親子家庭。同時提供青少年書籍，也舉辦相關活動，服務對象包含國中、高中學生。
            </p>

            <h3 class="service-title">樂齡族群與新住民</h3>
            <p class="description">
                圖書館提供適合長輩閱讀的書籍，並舉辦相關活動，服務對象包含樂齡長者。部分圖書館設有新住民語文圖書，志工也可能以多種語言說故事，為新住民提供貼心服務。
            </p>

            <!-- <img src="/images/library-building.jpg" alt="圖書館外觀" class="intro-image" /> -->
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

.audience {
    flex: 1;
    max-width: 1000px;
    /* max-height: 1000px; */
    margin: 0 auto;
    padding: 0 10px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100%; */
    height: 100%;
    scrollbar-width: thin;
    /* for Firefox */
    scrollbar-color: transparent transparent;
}

.audience img {
    max-width: 800px;
    width: 100%;
    height: 70%;
    margin: 1rem 0;
    border-radius: 30px;
}


/* 滾動條預設為透明 */
.audience::-webkit-scrollbar {
    width: 8px;
}

.audience::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

/* 滑鼠靠近 wrapper 時顯示滾動條 */
.scroll-wrapper:hover .audience::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.4);
}

/* 滑鼠靠近時滾動條背景也顯示 */
.scroll-wrapper:hover .audience {
    scrollbar-color: rgba(0, 0, 0, 0.4) transparent;
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
    color: #003366;
    text-align: center;
}

.description {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 1.5rem;
    line-height: 1.8;
}

.service-title {
    font-size: 1.3rem;
    font-weight: bold;
    color: #003366;
    margin: 2rem 0 1rem 0;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #003366;
}
</style>
