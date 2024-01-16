<script setup>
import { onUpdated, ref } from 'vue';

const componentName = 'CountryListFetch';
const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
const apiURL = import.meta.env.VITE_GEONAMES_URL;
const locale = ref('');
const responseContent = ref('');
const loader = ref(false);
const options = ref([
    { text: 'FR', value: 'fr' },
    { text: 'EN', value: 'en' },
    { text: 'DE', value: 'de' }
]);

async function loadCountryListByLocale() {
    try {
        responseContent.value = null;
        loader.value = true;
        const response = await fetch(
            // apiURL + '/country/list/' + locale.value,
            'https://127.0.0.1:8000/country/list/' + locale.value,
            {
                method: "GET",
                headers: { 'Authorization': `Basic ${apiToken}` }
            }
        );
        responseContent.value = await response.json();
    } catch (error) {
        responseContent.value = 'Error! Could not reach the API : ' + error;
        console.error(error);
    }
    loader.value = false;
};

onUpdated(() => {
    //console.log('TODO : update content !');
})

</script>

<template>
    <div>
        <p>Display the country list in : {{ locale }}</p>
        <select v-model="locale">
            <option disabled value="">Please select a locale</option>
            <option v-for="option in options" :value="option.value">
                {{ option.text }}
            </option>
        </select>
        <button @click="loadCountryListByLocale">Display</button>
    </div>

    <span class="loader" v-if="loader"></span>
    <div class="responsecontent" v-if="responseContent">
        <ul v-for="country in responseContent">
            <li>CountryCode : <b>{{ country.countryCode }}</b></li>
            <li>GeonameId : <b>{{ country.geonameId }}</b></li>
            <li>Name : <b>{{ country.name }}</b></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
ul {
    padding: 0;
    margin: 0.5em auto;
    border: 1px solid transparent;
    border-color: #f9f9f9;
    border-radius: 0.2em;
}

li {
    list-style-type: none;
}

li b {
    color: #ffffff;
}

.loader {
    margin-top: 1em;
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
}

@keyframes rotation {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>