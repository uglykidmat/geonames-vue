<script setup>
import { onUpdated, ref } from 'vue';


const componentName = 'TranslationClient';
const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
const apiURL = import.meta.env.VITE_GEONAMES_URL;
const responseContent = ref('');
const errorHappened = ref(false);

const countryCode = ref('PL');
const requestProps = defineProps({
    countrycode: String,
    locale: String,
    geonameId: Number,
    method: String
})

async function getAllTranslations() {
    try {
        responseContent.value = null;

        const response = await fetch(
            // apiURL + '/translation',
            'https://127.0.0.1:8000/translation',
            {
                method: "GET",
                headers: { 'Authorization': `Basic ${apiToken}` }
            }
        );
        responseContent.value = await response.json();

    } catch (error) {
        errorHappened.value = true;
        responseContent.value = 'Error! Could not reach the API : ' + error;
    }
};

async function searchTranslationByCountryCode() {
    console.log("heyo maman !");
    try {
        responseContent.value = null;

        const response = await fetch(
            // apiURL + '/translation',
            'https://127.0.0.1:8000/translation/search/countrycode/' + countryCode,
            {
                method: "GET",
                headers: { 'Authorization': `Basic ${apiToken}` }
            }
        );
        responseContent.value = await response.json();

    } catch (error) {
        errorHappened.value = true;
        responseContent.value = 'Error! Could not reach the API : ' + error;
    }

};

// onUpdated(() => {
//     // text content should be the same as current `count.value`
//     console.log("pop")
// })
</script >

<template>
    <button @click="getAllTranslations">GET</button>
    <div class="translation-response" v-if="!errorHappened">{{ responseContent }}</div>
    <div class="translation-response"></div>
</template>