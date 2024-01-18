<template>
    <div class="home-page">
        <h2 class="title">Bienvenue</h2>
        <div class="homepush-left">
            <p>HOMEPUSH LEFT</p>
        </div>
        <div class="homepush-right">
            <p>HOMEPUSH RIGHT</p>
        </div>
        <div class="homepush-bottom">
            <p>HOMEPUSH BOTTOM</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home-page {
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 20% 1fr 15%;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    // align-content: space-around;
    // justify-content: space-between;


    .title {
        grid-area: 1 / 1 / 2 / 3;
        // justify-self: start;
        // align-self: center;
    }

    .homepush-left {
        grid-area: 2 / 1 / 3 / 3;
        // justify-self: start;
        // align-self: start;
    }

    .homepush-right {
        grid-area: 2 / 3 / 3 / 4;
        // justify-self: start;
        // align-self: start;
    }

    .homepush-bottom {
        grid-area: 3 / 1 / 4 / 3;
        // justify-self: start;
        // align-self: center;
    }
}
</style>