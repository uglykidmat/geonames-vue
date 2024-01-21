<script setup>
// import Translations from '../components/Translations.vue';
// import translationClient from '../client/translationClientModule';
const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
const apiURL = import.meta.env.VITE_GEONAMES_URL;

import { ref } from 'vue';
const countrycode = ref('');
const responseContent = ref('');
const errorHappened = ref(false);
const loader = ref(false);

async function searchTranslationByCountryCode() {
    try {
        responseContent.value = null;
        loader.value = true;
        const response = await fetch(
            // apiURL + '/country/list/' + locale.value,
            'https://127.0.0.1:8000/translation/search/countrycode/' + countrycode.value,
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
    <div class="translations">
        <h2>Translations</h2>
        <p>Geonames locales</p>
        <div class="translation-form">
            <label for="countrycodefield" class="form-input-label">Search by country code</label>
            <input v-model="countrycode" type="text" maxlength="2" class="form-input" name="countrycodefield"
                id="countrycodefield" @keydown.enter="searchTranslationByCountryCode">
            <button @click="searchTranslationByCountryCode">Chercher</button>
        </div>
        <div class="responsecontent" v-if="responseContent && !errorHappened">{{ responseContent }}</div>
        <!-- <Translations /> -->
    </div>
</template>

<style scoped>
.translations {
    max-width: 66vw;
    width: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
}

.translation-form {
    display: flex;
    flex-flow: column nowrap;

    .form-input {
        border-radius: 1em;
        padding: 0.5em;
        font-family: 'Poppins', sans-serif;

    }
}

.responsecontent {
    width: auto;
}
</style>