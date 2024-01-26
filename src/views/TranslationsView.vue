<script setup>
import Translation from '../components/Translation.vue';

const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
const apiURL = import.meta.env.VITE_GEONAMES_URL;

import { ref } from 'vue';
const searchbycountrycode = ref('');

const errorHappened = ref(false);
const loader = ref(false);
let parsedContent = null;
const emptyResponse = ref(false);
const refParsedContent = ref('');
const activeEdit = ref(false);
const translationIsDone = ref(false);
const patchResponse = ref('');
const patchOk = ref('false');


async function searchTranslationByCountryCode() {
    try {
        refParsedContent.value = null;
        emptyResponse.value = false;
        translationIsDone.value = false;
        errorHappened.value = false;
        loader.value = true;
        patchOk.value = false;
        const response = await fetch(
            // apiURL + '/country/list/' + locale.value,
            'https://127.0.0.1:8000/translation/search/countrycode/' + searchbycountrycode.value,
            {
                method: "GET",
                headers: { 'Authorization': `Basic ${apiToken}` }
            }
        );
        parsedContent = await response.json();

        if (!parsedContent.length) {
            parsedContent = 'No translations for this countrycode yet !';
            emptyResponse.value = true;
        };
        refParsedContent.value = parsedContent;
    } catch (error) {
        refParsedContent.value = 'Error! Could not reach the API : ' + error;
        errorHappened.value = true;
    }
    loader.value = false;
};

async function saveEditedTranslations(patchContent) {
    try {
        errorHappened.value = false;
        loader.value = true;
        const response = await fetch(
            // apiURL + '/country/list/' + locale.value,
            'https://127.0.0.1:8000/translation',
            {
                method: "PATCH",
                headers: {
                    'Authorization': `Basic ${apiToken}`,
                    'Content-Type': 'application/json',
                },
                body: patchContent
            }
        );
        patchResponse.value = await response.json();
        patchOk.value = true;
        translationIsDone.value = false;
    } catch (error) {
        patchResponse.value = error;
        errorHappened.value = true;
        loader.value = false;
    }
    loader.value = false;
};

function translationDone() {
    translationIsDone.value = true;
}
//NO TOUCHY\\
function updateName(name, index) {
    parsedContent[index].name = name;

}

async function parsetoarray(parsedContent) {
    let patchContent = JSON.stringify(parsedContent);
    console.log("patchContent : ", patchContent);
    console.log("patchContent type : ", typeof patchContent);
    await saveEditedTranslations(patchContent);

}
//NO TOUCHY\\
</script>

<template>
    <div class="translations">
        <h2>Translations</h2>
        <p>Geonames locales</p>
        <div class="translation-form">
            <label for="countrycodefield" class="form-input-label">Country code</label>
            <input v-model="searchbycountrycode" type="text" maxlength="2" class="form-input" name="countrycodefield"
                id="countrycodefield" @keydown.enter="searchTranslationByCountryCode" placeholder='CN, PL, ...'>
            <button @click="searchTranslationByCountryCode">Chercher</button>
        </div>
        <span class="loader" v-if="loader"></span>
        <div v-if="emptyResponse && !loader">No translations yet !</div>
        <div v-if="errorHappened">
            <p>Error ! Could not reach the API.</p>
        </div>

        <div v-if="errorHappened" class="patchresponse">{{ patchResponse }}</div>
        <div v-if="patchOk" class="patchresponse">{{ patchResponse }}</div>
        <div class="responsecontent" v-if="refParsedContent && !errorHappened && !emptyResponse">
            <!-- <button @click="logMe">LOGME</button> -->
            <div id="responserowtitle" class="responserow">
                <div>GeonameId</div>
                <div>CountryCode</div>
                <div>Name</div>
                <!-- <li>Fcode</li> -->
                <div>Locale</div>
                <div v-if="translationIsDone" class="validatebuttons">
                    <button class="save" @click="parsetoarray(parsedContent)">Save</button>
                    <button class="save" @click="searchTranslationByCountryCode">Cancel</button>
                </div>

            </div>
            <Translation v-for="(translation, index) in refParsedContent" :key="index" :GeonameId="translation.geonameId"
                :CountryCode="translation.countryCode" :OriginalName="translation.name" :Fcode="translation.fcode"
                :Locale="translation.locale" :Index="index" @updatename="updateName" @translationDone="translationDone"
                :Active="activeEdit" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.translations {
    // max-width: 66vw;
    // width: auto;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .responsecontent {
        width: 100%;
        font-size: 0.8em;

        .responserow .validatebuttons {
            display: flex;
            flex-flow: row nowrap;
        }

        .editbutton {
            margin: 0;
            padding: 0.5em 1em;
            width: fit-content;
            // background-color: var(--light);
        }

        .responserow {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 0.5fr 0.5fr 2fr 1fr;
            column-gap: 1em;
            text-align: left;
            align-items: center;
        }

        .formbuttons {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-items: center;
            gap: 0.5em;
        }
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