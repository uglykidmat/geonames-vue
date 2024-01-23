<script setup>
import { ref } from 'vue';
const isEditActive = ref(false);

let cachedTranslation = ref('');
let newTranslation = '';

defineProps({
    GeonameId: Number,
    CountryCode: String,
    Name: String,
    Fcode: String,
    Locale: String,
    Index: Number
})

async function editTranslation(name) {
    isEditActive.value = true;
    cachedTranslation = name;
    console.log('Cached translation : ', cachedTranslation);
    console.log(newTranslation);
    //return name = 
}
async function cancelTranslation(name) {
    console.log("Cancelled translation for", name, "!");
    isEditActive.value = false;
    return cachedTranslation;
}

async function saveEditedTranslation(name) {
    console.log("Le name :", name);
    console.log("Bon Maman c'est la dernière fonction...peut-être !");
    isEditActive.value = false;
}

</script>
<template>
    <ul class="responserow">
        <li>{{ GeonameId }}</li>
        <li>{{ CountryCode }}</li>
        <li>{{ Locale }}</li>
        <li v-if="!isEditActive">{{ Name }}</li>
        <input v-if="isEditActive" type="text" class="editblock" :placeholder="Name" :value="cachedTranslation" />

        <div class="formbuttons">
            <button v-if="!isEditActive" :id="`Button` + Index" class="editbutton"
                @click="editTranslation(Name)">Edit</button>
            <button v-if="isEditActive" class="editbutton" @click="saveEditedTranslation(Name)">Save</button>
            <button v-if="isEditActive" class="editbutton" @click="cancelTranslation(Name)">Cancel</button>
        </div>
    </ul>
</template>

<style scoped>
.responserow {
    /* margin: 0; */
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 2fr 1fr 1fr;
    column-gap: 1em;
    text-align: left;
    align-items: center;
}

.formbuttons {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-items: center;
    gap: 1em;
}
</style>