<script setup>
import { onUpdated, ref } from 'vue';

const componentName = 'CountryListFetch';
const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
const apiURL = import.meta.env.VITE_GEONAMES_URL;
const locale = ref('');
let responseContent = ref('');
const options = ref([
    { text: 'FR', value: 'fr' },
    { text: 'EN', value: 'en' },
    { text: 'DE', value: 'de' }
]);


async function getCountryListByLocale() {
    try {
        const response = await fetch(
            apiURL + '/country/list/' + locale.value,
            {
                method: "GET",
                headers: { 'Authorization': `Basic ${apiToken}` }
            }
        );
        responseContent = await response.json();
        console.log(responseContent);
    } catch (error) {
        responseContent = 'Error! Could not reach the API. ' + error;
        console.error(error);
    }
    return responseContent
};

onUpdated(() => {
    console.log('TODO : update content !');
})

</script>

<template>
    <div>
        <p>Get the country list in : {{ locale }}</p>
        <select v-model="locale">
            <option disabled value="">Please select a locale</option>
            <option v-for="option in options" :value="option.value">
                {{ option.text }}
            </option>
        </select>
        <button @click="getCountryListByLocale">Display</button>
    </div>
    <div class="responsecontent" v-if="responseContent">
        <p id="responsetext">Response : <br /> {{ responseContent }}</p>
    </div>
</template>