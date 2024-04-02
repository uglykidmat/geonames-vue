<script setup>
import router from '../router';
</script>

<template>
    <div class="home-page">
        <h2 class="title">Bienvenue,</h2>
        <div class="homepush-left" @click="router.push('/export')">
            <h3>Multi-Export Pays / Subdivision JSON</h3>
            <p>Exporter un ou plusieurs pays ou subdivisions<br /> dans une ou plusieurs langues disponibles</p>
        </div>
        <div class="homepush-right" @click="router.push('/translations')">
            <h3>Personnalisation de traductions </h3>
            <p> Exporter ou importer les traductions disponibles </p>
            <svg width=" 221" height="221" viewBox="0 0 221 221" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M110.5 221C95.3983 221 81.1254 218.098 67.6813 212.293C54.2371 206.488 42.4983 198.568 32.4649 188.535C22.4241 178.502 14.505 166.763 8.7074 153.319C2.90983 139.875 0.00736667 125.602 0 110.5C0 95.2142 2.90247 80.897 8.7074 67.5486C14.5123 54.2002 22.4315 42.5057 32.4649 32.4649C42.4983 22.4241 54.2334 14.505 67.6702 8.7074C81.107 2.90983 95.3836 0.00736667 110.5 0C125.786 0 140.107 2.90247 153.462 8.7074C166.818 14.5123 178.509 22.4315 188.535 32.4649C198.576 42.4983 206.495 54.1929 212.293 67.5486C218.09 80.9044 220.993 95.2215 221 110.5C221 125.602 218.098 139.875 212.293 153.319C206.488 166.763 198.569 178.505 188.535 188.546C178.502 198.58 166.807 206.499 153.451 212.304C140.096 218.109 125.778 221.007 110.5 221ZM110.5 198.347C115.288 191.717 119.432 184.811 122.931 177.629C126.43 170.446 129.285 162.803 131.495 154.7H89.505C91.715 162.803 94.5696 170.446 98.0687 177.629C101.568 184.811 105.712 191.717 110.5 198.347ZM81.77 193.927C78.455 187.85 75.5562 181.54 73.0736 174.999C70.5911 168.457 68.5174 161.691 66.8525 154.7H34.255C39.5958 163.908 46.2737 171.92 54.2887 178.734C62.3036 185.548 71.464 190.612 81.77 193.927ZM139.23 193.927C149.543 190.612 158.707 185.548 166.722 178.734C174.737 171.92 181.412 163.908 186.745 154.7H154.148C152.49 161.698 150.42 168.468 147.937 175.01C145.455 181.551 142.552 187.857 139.23 193.927ZM24.8625 132.6H62.4325C61.88 128.917 61.4675 125.281 61.1949 121.694C60.9223 118.106 60.7824 114.375 60.775 110.5C60.775 106.632 60.915 102.905 61.1949 99.3174C61.4748 95.7298 61.8874 92.0907 62.4325 88.4H24.8625C23.9417 92.0833 23.2529 95.7225 22.7962 99.3174C22.3394 102.912 22.1074 106.64 22.1 110.5C22.1 114.367 22.3321 118.099 22.7962 121.694C23.2603 125.289 23.949 128.924 24.8625 132.6ZM84.5325 132.6H136.468C137.02 128.917 137.436 125.281 137.716 121.694C137.996 118.106 138.132 114.375 138.125 110.5C138.125 106.632 137.985 102.905 137.705 99.3174C137.425 95.7298 137.013 92.0907 136.468 88.4H84.5325C83.98 92.0833 83.5675 95.7225 83.2949 99.3174C83.0223 102.912 82.8824 106.64 82.875 110.5C82.875 114.367 83.015 118.099 83.2949 121.694C83.5748 125.289 83.9874 128.924 84.5325 132.6ZM158.568 132.6H196.137C197.058 128.917 197.751 125.281 198.215 121.694C198.679 118.106 198.907 114.375 198.9 110.5C198.9 106.632 198.672 102.905 198.215 99.3174C197.758 95.7298 197.066 92.0907 196.137 88.4H158.568C159.12 92.0833 159.536 95.7225 159.816 99.3174C160.096 102.912 160.232 106.64 160.225 110.5C160.225 114.367 160.085 118.099 159.805 121.694C159.525 125.289 159.113 128.924 158.568 132.6ZM154.148 66.3H186.745C181.404 57.0917 174.73 49.0804 166.722 42.2662C158.715 35.4521 149.551 30.3875 139.23 27.0725C142.545 33.15 145.447 39.4595 147.937 46.0011C150.427 52.5427 152.497 59.309 154.148 66.3ZM89.505 66.3H131.495C129.285 58.1967 126.43 50.5537 122.931 43.3713C119.432 36.1888 115.288 29.2825 110.5 22.6525C105.712 29.2825 101.568 36.1888 98.0687 43.3713C94.5696 50.5537 91.715 58.1967 89.505 66.3ZM34.255 66.3H66.8525C68.51 59.3017 70.5837 52.5317 73.0736 45.9901C75.5636 39.4485 78.4624 33.1426 81.77 27.0725C71.4567 30.3875 62.2925 35.4521 54.2776 42.2662C46.2627 49.0804 39.5885 57.0917 34.255 66.3Z"
                    fill-opacity="0.17" />
            </svg>

        </div>
        <!-- <div class="homepush-bottom">
            <h3>Paramètres</h3>
        </div> -->
    </div>
</template>

<style scoped lang="scss">
.home-page {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 20% 1fr 20%;
    grid-column-gap: 1.5em;
    grid-row-gap: 1.5em;
    align-items: stretch;
    justify-content: space-around;
    align-content: space-around;
    max-width: 66vw;

    div {
        padding: 1.2em;
        border-radius: 1.5em;
        min-height: fit-content;
    }

    .title {
        grid-area: 1 / 1 / 2 / 3;
        justify-self: start;
        align-self: center;
    }

    .homepush-left {
        grid-area: 2 / 1 / 3 / 3;
        background-color: var(--grey-light-bkgnd);
    }

    .homepush-right {
        grid-area: 2 / 3 / 3 / 4;
        background-color: var(--grey-dark-bkgnd);
        color: #a6a6a6;
        overflow: hidden;
        position: relative;

        h3 {
            color: var(--light);
        }

        svg {
            fill: var(--light);
            fill-opacity: 0.17;
            position: absolute;
            bottom: -3em;
            right: -4em;

        }
    }

    // .homepush-bottom {
    //     grid-area: 3 / 1 / 4 / 4;
    //     background-color: var(--grey-light-bkgnd);
    //     text-align: justify;
    // }
}

@media only screen and (min-width: 20em) and (max-width: 64em) {
    .home-page {
        display: flex;
        flex-flow: column nowrap;
        align-items: stretch;
        justify-content: space-around;
        align-content: center;
        max-width: 66vw;

        div {
            padding: 0.5em;
        }

        .title {
            grid-area: unset;
            justify-self: start;
            align-self: center;
        }

        .homepush-left {
            grid-area: unset;
            background-color: var(--grey-light-bkgnd);
        }

        .homepush-right {
            grid-area: unset;
            background-color: var(--grey-dark-bkgnd);
            color: #a6a6a6;
            overflow: hidden;
            position: relative;

            h3 {
                color: var(--light);
            }

            svg {
                fill: var(--light);
                fill-opacity: 0.17;
                position: absolute;
                bottom: -3em;
                right: -4em;

            }
        }
    }
}
</style>