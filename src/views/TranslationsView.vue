<script setup>
const apiToken = import.meta.env.VITE_GEONAMES_TOKEN;
const apiURL = import.meta.env.VITE_GEONAMES_URL;

//import { translationClient } from './client/translationClientModule';
import Translation from '../components/Translation.vue';
import { ref } from 'vue';

const searchbycountrycode = ref('');
const errorHappened = ref(false);
const loader = ref(false);
const emptyResponse = ref(false);
const refParsedContent = ref('');
const activeEdit = ref(false);
const translationIsDone = ref(false);
const patchOk = ref('false');
const patchResponse = ref('');

let parsedContent = null;
let parsedPatchResponse = null;

const deleteOk = ref('false');
const deleteResponse = ref('');

async function searchTranslationByCountryCode() {
    try {
        refParsedContent.value = null;
        emptyResponse.value = false;
        translationIsDone.value = false;
        errorHappened.value = false;
        loader.value = true;
        patchOk.value = false;
        deleteOk.value = false;
        const response = await fetch(
            apiURL + '/translation/search/countrycode/' + searchbycountrycode.value,
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
            apiURL + '/translation',
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
        // __________________________________________
        parsedPatchResponse = JSON.parse(JSON.stringify(patchResponse.value));
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
    await saveEditedTranslations(patchContent);
}
//NO TOUCHY\\

const newTranslationForm = ref({
    geonameId: '',
    Fcode: '',
    countryCode: '',
    Name: '',
    Locale: '',
});

async function postNewTranslation(geonameId, Fcode, countryCode, Name, Locale) {
    let newTranslation = new Object();
    newTranslation.geonameId = geonameId;
    newTranslation.fcode = Fcode.toUpperCase();
    newTranslation.countryCode = countryCode.toUpperCase();
    newTranslation.name = Name;
    newTranslation.locale = Locale.toLowerCase();

    let jsonPostContent = "[" + JSON.stringify(newTranslation) + "]";
    // __________________________________________
    try {
        errorHappened.value = false;
        loader.value = true;
        const response = await fetch(
            apiURL + '/translation',
            {
                method: "POST",
                headers: {
                    'Authorization': `Basic ${apiToken}`,
                    'Content-Type': 'application/json',
                },
                body: jsonPostContent
            }
        );
        patchResponse.value = await response.json();
        // __________________________________________
        translationIsDone.value = false;
        searchTranslationByCountryCode(newTranslation.countryCode);
    } catch (error) {
        patchResponse.value = error;
        errorHappened.value = true;
        loader.value = false;
    }
    loader.value = false;
}

async function translationDelete(index) {
    let deleteTranslationObject = new Object();
    deleteTranslationObject.geonameId = refParsedContent.value[index].geonameId;
    deleteTranslationObject.fcode = refParsedContent.value[index].fcode.toUpperCase();
    deleteTranslationObject.countryCode = refParsedContent.value[index].countryCode.toUpperCase();
    deleteTranslationObject.name = refParsedContent.value[index].name;
    deleteTranslationObject.locale = refParsedContent.value[index].locale.toLowerCase();

    let jsonDeleteContent = "[" + JSON.stringify(deleteTranslationObject) + "]";
    // __________________________________________
    try {
        errorHappened.value = false;
        loader.value = true;
        const response = await fetch(
            apiURL + '/translation',
            {
                method: "DELETE",
                headers: {
                    'Authorization': `Basic ${apiToken}`,
                    'Content-Type': 'application/json',
                },
                body: jsonDeleteContent
            }
        );
        deleteResponse.value = await response.json();
        // __________________________________________
        translationIsDone.value = false;
    } catch (error) {
        deleteResponse.value = error;
        errorHappened.value = true;
        loader.value = false;
    }
    loader.value = false;
    searchTranslationByCountryCode(deleteTranslationObject.countryCode);
}
</script>

<template>
    <div class="translations">
        <h2>Translations</h2>
        <h3>Geonames locales</h3>
        <div>
            <p>Create a new translation : </p>
            <form v-on:submit.prevent="postNewTranslation(
                newTranslationForm.geonameId,
                newTranslationForm.Fcode,
                newTranslationForm.countryCode,
                newTranslationForm.Name,
                newTranslationForm.Locale
            )" class="translation-form-new">
                <div>
                    <label for="postgeonameid" class="form-input-label">GeonameId</label>
                    <input type="text" class="form-input" name="postgeonameid" id="postgeonameid"
                        placeholder="123456789" v-model="newTranslationForm.geonameId">
                </div>
                <div>
                    <label for="postfcode" class="form-input-label">Fcode</label>
                    <input type="text" class="form-input capitalized" name="postfcode" id="postfcode"
                        placeholder='ADM1, COUNTRY,...' v-model="newTranslationForm.Fcode">
                </div>
                <div>
                    <label for="postcountrycode" class="form-input-label">Country code</label>
                    <input type="text" maxlength="2" class="form-input capitalized" name="postcountrycode"
                        id="postcountrycode" placeholder='CN, PL, ...' v-model="newTranslationForm.countryCode">
                </div>
                <div>
                    <label for="postname" class="form-input-label">Name</label>
                    <input type="text" class="form-input form-input-name" name="postname" id="postname"
                        placeholder="Your translation..." v-model="newTranslationForm.Name">
                </div>
                <div>
                    <label for="postlocale" class="form-input-label">Locale</label>
                    <input type="text" class="form-input" name="postlocale" id="postlocale" placeholder="zh-tw, fr, ..."
                        v-model="newTranslationForm.Locale">
                </div>
                <div class="formbuttons">
                    <button>Add</button>
                    <!-- <button>Cancel</button> -->
                </div>
            </form>
        </div>

        <div class="translation-form">
            <label for="countrycodefield" class="form-input-label  form-search-label">Search by Country code </label>
            <input v-model="searchbycountrycode" type="text" maxlength="2" class="form-input capitalized"
                name="countrycodefield" id="countrycodefield" @keydown.enter="searchTranslationByCountryCode"
                placeholder='CN, PL, ...'>
            <button @click="searchTranslationByCountryCode">Search</button>
        </div>
        <span class="loader" v-if="loader"></span>
        <div v-if="emptyResponse && !loader">No translations yet !</div>
        <div v-if="errorHappened">
            <p>Error ! Could not reach the API.</p>
        </div>

        <div v-if="errorHappened" class="patchresponse">{{ patchResponse }}</div>
        <div v-if="patchOk" id="patchsuccess" class="patchresponse patchsuccess">{{ patchResponse }}</div>
        <div v-if="deleteOk" id="patchsuccess" class="patchresponse patchsuccess">{{ deleteResponse }}</div>
        <div class="responsecontent" v-if="refParsedContent && !errorHappened && !emptyResponse">
            <div id="responserowtitle" class="responserow">
                <div>GeonameId</div>
                <div>Fcode</div>
                <div>CountryCode</div>
                <div>Name</div>
                <div>Locale</div>
                <div v-if="translationIsDone" class="validatebuttons">
                    <button class="savebutton" @click="parsetoarray(parsedContent)">Save all</button>
                    <button class="cancelbutton" @click="searchTranslationByCountryCode">Cancel</button>
                </div>
            </div>
            <Translation v-for="(translation, index) in refParsedContent" :key="index"
                :GeonameId="translation.geonameId" :CountryCode="translation.countryCode"
                :OriginalName="translation.name" :Fcode="translation.fcode" :Locale="translation.locale" :Index="index"
                @updatename="updateName" @translationDone="translationDone" @translationDelete="translationDelete"
                :Active="activeEdit" />
        </div>
    </div>
</template>

<style scoped lang="scss">
.translations {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .capitalized {
        text-transform: uppercase;
    }

    .patchresponse {
        margin: 1em;
        color: var(--primary);
    }

    .responsecontent {
        width: 100%;
        font-size: 0.8em;

        #responserowtitle {
            padding: 1em;
            min-height: 90px;
        }

        .responserow .validatebuttons {
            display: flex;
            flex-flow: row nowrap;

            .savebutton {
                border-color: var(--primary-alt);
                line-height: 1.2em;

                &:hover {
                    background-color: var(--primary);
                    color: (--light);
                }
            }

            .cancelbutton {
                border-color: var(--warning);

                &:hover {
                    background-color: var(--warning);
                    color: (--light);
                }
            }
        }

        .editbutton {
            margin: 0;
            padding: 0.5em 1em;
            width: fit-content;
        }

        .responserow {
            display: grid;
            grid-template-rows: 1fr;
            grid-template-columns: 1fr 0.5fr 0.5fr 2fr 0.5fr 1fr;
            column-gap: 1em;
            text-align: left;
            align-items: center;
        }
    }
}

.translation-form-new {
    display: grid;
    // grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 2fr 0.5fr 1fr;
    column-gap: 0.5em;
    text-align: left;
    align-items: center;
    padding: 1em;
    border-radius: 0.9em;
    border: 1px solid var(--dark);

    div {
        display: flex;
        flex-flow: column nowrap;
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

    button {
        max-width: fit-content;
        font-family: 'Poppins', sans-serif;
        /* color: var(--dark); */
        /* line-height: 1.5;
        font-weight: 400; */
    }
}

.form-input {
    font-family: 'Poppins', sans-serif;
    background-color: var(--light);
    width: 120px;
    height: 2em;
    margin: 0.5em 0 0.5em 0;
    padding: 0.5em 1em;
    border-radius: 0.9em;
    border: 2px solid var(--dark);
}

.form-search-label {
    margin-right: 1em;
}

.form-input-name {
    width: 100%;
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