<script setup>
import { ref } from 'vue';

const componentName = 'Fetchtest';
const apiToken = 'Z2F0b3I6Z3RyUHdkNzMh';
const locale = ref('');
const options = ref([
    { text: 'FR', value: 'fr' },
    { text: 'EN', value: 'en' },
    { text: 'DE', value: 'de' }
]);

async function getCountryListByLocale() {
    try {
        const response = await fetch(
            `https://geonames-preprod.osc-fr1.scalingo.io/country/list/${locale.value}`,
            {
                method: "GET",
                headers: { 'Authorization': 'Basic ' + `${apiToken}` }
            }
        );

        console.log(await response.json());
    } catch (error) {
        console.error(error);
    }
};
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
</template>