<script setup>

//TODO - SEARCH WITH JSON INPUT ?
// SEARCH WITH 2 INPUTS LAT/LNG ?
import { ref } from 'vue';

const componentName = 'SubdivisionSearch';
const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
const apiURL = import.meta.env.VITE_GEONAMES_URL;
const request = ref('');
let responseContent = ref('');

async function SubdivisionSearch() {
    try {
        const response = await fetch(
            apiURL + '/geonames/search',
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