<script setup>
import { ref } from 'vue';
// import { translationClient, getAllTranslations } from '../client/translationClient.vue';
// import searchTranslationByCountryCode from '../client/translationClient.vue';
import { searchTranslationByCountryCode } from '../client/translationClientModule'
const countrycode = ref('');

const launchSearch = (countrycode) => {
    console.log("into the function calling the client function !");
    return searchTranslationByCountryCode(countrycode);
}
</script>

<template>
    <div class="translation-form form-group translation-field-text">
        <form action="">
            <!-- <label for="geoidfield" class="form-input-label">Search by Geonames Id</label>
        <input type="text" class="form-input" name="geoidfield" id="geoidfield"> -->
            <label for="countrycodefield" class="form-input-label">Search by country code</label>
            <input v-bind="countrycode" type="text" maxlength="2" class="form-input" name="countrycodefield"
                id="countrycodefield">
            <button @submit="launchSearch()">Go !</button>

            <!-- <translationClient :countrycode="{{ countrycode }}" /> -->

            <!-- <label for="countrycodefield" class="form-input-label">Search by locale</label>
        <input type="text" class="form-input" name="localefield" id="localefield"> -->
        </form>
    </div>
    <button @click="launchSearch">GET ALL TRANSLATIONS</button>
    <!-- <translationClient /> -->
</template>

<style scoped>
.translation-form {
    width: auto;
    display: flex;
    flex-flow: column nowrap;

    .form-input {
        border-radius: 1em;
        padding: 0.5em;
        font-family: 'Poppins', sans-serif;

    }

    button {
        margin: 1em;
        font-size: 1em;
        border: 1px solid var(--dark);
    }
}
</style>