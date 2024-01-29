<script setup>
import { ref } from 'vue';

const componentName = 'CountryListFetch';
const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
const apiURL = import.meta.env.VITE_GEONAMES_URL;
const locale = ref('');
const responseContent = ref('');
const errorHappened = ref(false);
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
        errorHappened.value = true;
    }
    loader.value = false;
};
</script>

<template>
    <div>
        <p>Afficher la liste en : {{ locale }}</p>
        <select v-model="locale">
            <option disabled value="">Sélectionner la langue</option>
            <option v-for="option in options" :value="option.value">
                {{ option.text }}
            </option>
        </select>
        <button @click="loadCountryListByLocale">Afficher</button>
    </div>

    <span class="loader" v-if="loader"></span>
    <div v-if="errorHappened">
        <p>Error ! Could not reach the API.</p>
    </div>
    <div class="responsecontent" v-if="responseContent && !errorHappened">
        <ul v-for="country in responseContent">
            <li>CountryCode : <b>{{ country.countryCode }}</b></li>
            <li>GeonameId : <b>{{ country.geonameId }}</b></li>
            <li>Name : <b>{{ country.name }}</b></li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
select {
    margin: 1em;
    padding: 0.5em 1em;
    border-radius: 0.9em;
    border: 2px solid var(--dark);
    background-color: var(--light);
    font-family: 'Poppins', sans-serif;
    color: var(--dark);
    line-height: 1.5;
    font-weight: 400;
    max-width: fit-content;
    appearance: none;
}

ul {
    padding: 0;
    margin: 0.5em auto;
    border: 1px solid transparent;
    border-color: var(--dark-alt);
    border-radius: 0.2em;
}

li {
    list-style-type: none;
}
</style>
