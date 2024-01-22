<script setup>
// import Translations from '../components/Translations.vue';
// import { searchTranslationByCountryCode } from '../client/translationClientModule';
const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
const apiURL = import.meta.env.VITE_GEONAMES_URL;

import { ref } from 'vue';
const searchbycountrycode = ref('');
const responseContent = ref('');
const errorHappened = ref(false);
const loader = ref(false);
const isEditActive = ref(false);

async function searchTranslationByCountryCode() {
    try {
        responseContent.value = null;
        loader.value = true;
        const response = await fetch(
            // apiURL + '/country/list/' + locale.value,
            'https://127.0.0.1:8000/translation/search/countrycode/' + searchbycountrycode.value,
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

async function editTranslation() {
    console.log("Edit !");
    isEditActive.value = true;

}
async function cancelTranslation() {
    console.log("Cancel !");
    isEditActive.value = false;

}



</script>

<template>
    <div class="translations">
        <h2>Translations</h2>
        <p>Geonames locales</p>
        <div class="translation-form">
            <!-- <label for="countrycodefield" class="form-input-label">Country code</label> -->
            <input v-model="searchbycountrycode" type="text" maxlength="2" class="form-input" name="countrycodefield"
                id="countrycodefield" @keydown.enter="searchTranslationByCountryCode" placeholder='CN, PL, ...'>
            <button @click="searchTranslationByCountryCode()" :value="searchbycountrycode">Chercher</button>
        </div>
        <span class="loader" v-if="loader"></span>
        <div v-if="errorHappened">
            <p>Error ! Could not reach the API.</p>
        </div>
        <div class="responsecontent" v-if="responseContent && !errorHappened">
            <ul class="responserow">
                <li>GeonameId</li>
                <li>CountryCode</li>
                <li>Name</li>
                <li>Fcode</li>
                <li>Locale</li>
                <li></li>
            </ul>
            <ul class="responserow" v-for="translation in responseContent" :key="translation.geonameId">
                <li><b>{{ translation.geonameId }}</b></li>
                <li><b>{{ translation.countrycode }}</b></li>
                <li>

                    <b>{{ translation.name }}</b>
                    <!-- <input type="text" class="editblock" placeholder="Edit" v-if="isEditActive" /> -->
                </li>
                <!-- <li><b>{{ translation.fcode }}</b></li> -->
                <li><b>{{ translation.locale }}</b></li>

                <div>
                    <button class="editbutton" @click="editTranslation">Edit</button>
                    <button class="editbutton" v-if="isEditActive" @click="cancelTranslation">Cancel</button>
                </div>
            </ul>

            <!-- <div class="responserowgrid" v-for="translation in responseContent" :key="translation.geonameId">
                <input type="text" class="geoid" placeholder="Corentin" />
                <input type="text" disabled class="geoid" placeholder="Michel" />
                <input type="text" disabled class="geoid" placeholder="Lorem ipsum" />
                <input type="text" disabled class="geoid" placeholder="Romi" />
                <input type="text" disabled class="geoid" placeholder="20-100" />
            </div> -->

        </div>
        <!-- <Translations /> -->
    </div>
</template>

<style scoped lang="scss">
.translations {
    max-width: 66vw;
    width: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .responsecontent {
        /* width: 90%; */
        font-size: 0.8em;

        .editbutton {
            margin: 0;
            padding: 0.5em 1em;
            width: fit-content;
            // background-color: var(--light);
        }

        .responserow {
            // margin: 0;
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 1fr 2fr 1fr 0.5fr 0.5fr;
            text-align: left;
            align-items: center;
        }

        // .responserowgrid {
        //     display: grid;
        //     grid-template-rows: 1fr;
        //     grid-template-columns: repeat(5, 1fr);
        // }
    }
}

.translation-form {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: center;
    line-height: 1.5;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;

    .form-input {
        // border-radius: 0.8em;
        // padding: 0.5em;
        font-family: 'Poppins', sans-serif;
        background-color: var(--light);
        width: 120px;
        height: 2em;

        margin: 1em;
        padding: 0.5em 1em;
        border-radius: 0.9em;
        border: 2px solid var(--dark);
    }

    button {
        max-width: fit-content;
        font-family: 'Poppins', sans-serif;
        /* color: var(--dark); */
        /* line-height: 1.5;
        font-weight: 400; */
    }
}

ul {
    padding: 1em;

    li {
        display: inline;
        margin-right: 0.5em;
    }

    &:nth-child(even) {
        background-color: var(--grey-light-bkgnd);
    }
}
</style>