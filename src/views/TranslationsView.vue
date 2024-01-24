<script setup>
import Translation from '../components/Translation.vue';
import { externalSearchTranslationByCountryCode } from '../client/translationClientModule';
const externalSearch = externalSearchTranslationByCountryCode;
import { logMe } from '../client/translationClientModule';
const logMeClick = logMe;

const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
const apiURL = import.meta.env.VITE_GEONAMES_URL;

import { ref, onUpdated } from 'vue';
const searchbycountrycode = ref('');
const responseContent = ref('');
const errorHappened = ref(false);
const loader = ref(false);
const newName = ref('');
let parsedContent = null;
const emptyResponse = ref(false);

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
        // responseContent.value = await response.json();
        parsedContent = await response.json();
        parsedContent.map((item) => {
            console.log(item);
        })
        // parsedContent.foreach((translationData) => {
        //     console.log("ici :", translationData);
        // })
    } catch (error) {
        responseContent.value = 'Error! Could not reach the API : ' + error;
        errorHappened.value = true;
    }
    loader.value = false;
};

async function saveEditedTranslation(translationIndex, newName) {
    try {
        responseContent.value = null;
        loader.value = true;
        const response = await fetch(
            // apiURL + '/country/list/' + locale.value,
            'https://127.0.0.1:8000/translation/' + searchbycountrycode.value,
            {
                method: "PATCH",
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

function updateName(name, index) {
    console.log("Hello maman depuis la fonction émise !", name);
    newName.value = name;
    //console.log(responseContent.value[index].name);
    // responseContent.value[index].name = name;
    //console.log(newName);
}

// onUpdated(() => {
//     console.log(responseContent)
// })

</script>

<template>
    <div class="translations">
        <h2>Translations</h2>
        <p>Geonames locales</p>
        <div class="translation-form">
            <label for="countrycodefield" class="form-input-label">Country code</label>
            <input v-model="searchbycountrycode" type="text" maxlength="2" class="form-input" name="countrycodefield"
                id="countrycodefield" @keydown.enter="searchTranslationByCountryCode" placeholder='CN, PL, ...'>
            <button @click="externalSearchTranslationByCountryCode"
                :valuecountrycode="searchbycountrycode">Chercher</button>
        </div>
        <span class="loader" v-if="loader"></span>
        <div v-if="errorHappened">
            <p>Error ! Could not reach the API.</p>
        </div>
        <div class="responsecontent" v-if="responseContent && !errorHappened">
            <!-- <button @click="logMe">LOGME</button> -->
            <ul id="responserowtitle" class="responserow">
                <li>GeonameId</li>
                <li>CountryCode</li>
                <li>Name</li>
                <!-- <li>Fcode</li> -->
                <li>Locale</li>
                <li></li>
            </ul>

            <Translation v-for="(translation, index) in responseContent" :key="index" :GeonameId="translation.geonameId"
                :CountryCode="translation.countrycode" :OriginalName="translation.name" :Fcode="translation.fcode"
                :Locale="translation.locale" :Index="index" @updatename="updateName" />

        </div>
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